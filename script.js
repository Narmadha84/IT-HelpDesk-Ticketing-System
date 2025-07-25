
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const editedRow = e.range.getRow();
  const statusCol = 8; // Example: column H = Status
  const emailCol = 3; // Email column from the Form
  const updateCol = 9; // Update Message column
  const notifiedCol = 12; // User Notified column

  const email = sheet.getRange(editedRow, emailCol).getValue();
  const status = sheet.getRange(editedRow, statusCol).getValue();
  const updateMsg = sheet.getRange(editedRow, updateCol).getValue();
  const notified = sheet.getRange(editedRow, notifiedCol).getValue();

  if (notified !== 'Yes' && status !== '') {
    const subject = `Ticket Update: Status changed to ${status}`;
    const body = `Dear user,\n\nYour help desk ticket status has been updated to: ${status}.\n\nUpdate Message: ${updateMsg}\n\nThanks,\nIT Help Desk`;

    MailApp.sendEmail(email, subject, body);

    sheet.getRange(editedRow, notifiedCol).setValue('Yes');
    sheet.getRange(editedRow, 10).setValue(new Date()); // Last Updated
  }
}
