Gramic — Stylish Love Survey

Files:
- gramic.html  -> enter name (hidden) + email
- quick-survey.html -> survey questions + result
- style.css
- script.js -> replace GOOGLE_SCRIPT_WEB_APP_URL with your Google Apps Script URL
- google-script.gs -> paste into Google Apps Script (see steps)

Setup steps:
1) Create a Google Sheet and open Extensions → Apps Script. Paste google-script.gs into editor.
2) Replace YOUR_EMAIL@gmail.com in google-script.gs with your Gmail address.
3) Save and Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
4) Copy the Web App URL and paste into script.js (replace GOOGLE_SCRIPT_WEB_APP_URL).
5) Upload gramic.html, quick-survey.html, style.css, script.js to GitHub repo and enable Pages, or host them.
6) Open gramic.html, enter name & email (first attempt will show a playful 'wrong name' alert), then Access -> quick-survey -> answer -> result.
7) Submissions will appear as rows in your Google Sheet and you'll get an email per submission.

Notes:
- Name input uses type=password so typing is hidden on screen (dots).
- For privacy, the sheet and script are private to your Google account. Do not share the Web App URL publicly if you don't want anonymous submissions.
