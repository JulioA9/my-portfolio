"use client";
import { useState } from "react";

export default function ContactCard() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const body = {
      fullName: formData.get("fullName"),
      emailInput: formData.get("emailInput"),
      messageInput: formData.get("messageInput"),
    };

    try {
      const response = await fetch("/api/addData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        event.target.reset();
      } else {
        const { error } = await response.json();
        alert(`Error: ${error}`);
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <h2>Send me An email!</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="emailInput"
            placeholder="Your Email"
            required
          />
          <textarea
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md min-h-32"
            name="messageInput"
            placeholder="Say Hi!"
            required
          />
        </div>
        <div>
          <button
            className="ease-in-out bg-cyan-600 py-2 px-6 rounded-md text-white active:bg-cyan-700 hover:bg-cyan-500 transition duration-300"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
