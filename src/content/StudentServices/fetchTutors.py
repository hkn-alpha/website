import os
import json
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from collections import defaultdict
from dotenv import load_dotenv

sheet_id = "1WnuVYrK_CKNv2iooqLCqYOpvyX8U401lMseo0DQ-Kd8"

def fetchTutors():
    load_dotenv()
    API_KEY = os.getenv("SHEETS_API_KEY")

    service = build('sheets', 'v4', developerKey=API_KEY)

    sheets = service.spreadsheets()

    ranges = "B:E"
    sheet_read = sheets.values().get(spreadsheetId=sheet_id, range=ranges).execute()

    responses = sheet_read.get('values', [])

    tutors = list()

    for entry in responses:
        # Skip empty lists sand header rows!
        if not entry:  # Skip empty lists
            continue
        if entry == responses[0]:  # Skip the header row (optional)
            continue
        
        if entry[2] == "Yes":
            tutors.append(entry)
    
    PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))
    json_file_path = os.path.join(PROJECT_ROOT, "public", "tutors_list.json")
    # Serialize to JSON
    with open(json_file_path, 'w') as f:
        json.dump(tutors, f, ensure_ascii=False)

    print(tutors)

fetchTutors()
