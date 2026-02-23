import fs from "fs";
import { google } from "googleapis";

const credentials = JSON.parse(process.env.SHEETS_API_KEY);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

const SHEET_ID = "1WnuVYrK_CKNv2iooqLCqYOpvyX8U401lMseo0DQ-Kd8";
const RANGE = "Form Responses 1!A:E";

async function generate() {
  try {  const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    const tutors = rows.slice(1).map(row => ({
      email: row[1] || "",
      name: row[2] || "",
      courses: row[4] || "",
    }));

    fs.writeFileSync(
      "./public/tutors_list.json",
      JSON.stringify(tutors, null, 2)
    );
    console.log("tutors_list.json generated!");
  } catch (error) {
    console.error("Error:", error)
  }
}

generate();