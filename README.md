
#  IT Help Desk Ticketing System

A mini-project simulating an IT help desk using **Google Forms**, **Google Sheets**, and **Apps Script**.

# Live Google Form
👉 [Submit a Ticket (Google Form)](https://forms.gle/beydqdprDCrpUvXf9)

#Features
- Users submit issues using Google Form
- Ticket data stored in Google Sheet
- Admin updates status + comments
- Users get auto-email notifications when ticket status changes

# Files
- `script.js` – Google Apps Script to automate email notifications
- `sample_form_structure.txt` – Example form fields/questions
- `README.txt` – Offline version of this overview

# How to Use
1. Create a Google Form using the questions in `sample_form_structure.txt`
2. Link it to a Google Sheet
3. Open the Sheet → `Extensions → Apps Script`
4. Paste the code from `script.js`
5. Add a Trigger: `onEdit` → From Spreadsheet → On Edit
6. Share the form with your team!

# Email Automation
When the admin updates the ticket `Status` and `Update Message` in the Sheet:
- An automatic email is sent to the user
- Email includes status + comments
- Sheet marks the ticket as "Notified"

# License
MIT

# Author
Narmadha K R
