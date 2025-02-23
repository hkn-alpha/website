import json
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from collections import defaultdict

sheet_id = "1WnuVYrK_CKNv2iooqLCqYOpvyX8U401lMseo0DQ-Kd8"

def fetchTutors():

    SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

    SERVICE_ACCOUNT_FILE = "sheets_api_credentials.json"

    credientials = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

    service = build('sheets', 'v4', credentials = credientials)

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

    
    # Serialize to JSON
    with open('tutors_list.json', 'w') as f:
        json.dump(tutors, f, ensure_ascii=False)

    print(tutors)

fetchTutors()
