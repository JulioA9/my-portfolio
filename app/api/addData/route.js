import { NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const REGION = process.env.AWS_REGION || "us-east-2";
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export async function POST(request) {
  try {
    const { fullName, emailInput, messageInput } = await request.json();

    if (!fullName || !emailInput || !messageInput) {
      return NextResponse.json(
        { error: "Please make sure all fields are filled in!." },
        { status: 400 }
      );
    }

    const params = {
      TableName: "PortfolioEmails",
      Item: {
        id: Math.floor(Math.random() * 10000),
        dateAdded: new Date().toISOString(),
        dateModified: "",
        fullName,
        emailInput,
        messageInput,
      },
    };

    await ddbDocClient.send(new PutCommand(params));
    return NextResponse.json(
      { message: "" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error adding item:", err);
    return NextResponse.json({ error: "Failed send email. Please try again later :(" }, { status: 500 });
  }
}
