import fs from "fs";
import fetch from "node-fetch";

const SHEET_ID = "1QKaLo1SVdvRPeqQNGBiCWWA70IFAbrZEl2YvLN9470s";
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

async function generate() {
  const res = await fetch(url);
  const text = await res.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  const rows = json.table.rows;

  const tutors = rows.map(row => ({
    email: row.c[0]?.v || "",
    name: row.c[1]?.v || "",
    courses: row.c[4]?.v || ""
  }));

  fs.writeFileSync(
    "./public/tutors_list.json",
    JSON.stringify(tutors, null, 2)
  );

  console.log("tutors_list.json generated!");
}

generate();