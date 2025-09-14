function saveNote() {
  const note = document.getElementById('note').value.trim();
  if (!note) {
    alert("Please write a note first!");
    return;
  }

  const submissions = JSON.parse(localStorage.getItem("notes")) || [];
  submissions.push({
    note: note,
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("notes", JSON.stringify(submissions));

  document.getElementById('note-section').classList.add('hidden');
  document.getElementById('mcq-section').classList.remove('hidden');
}

function submitSurvey() {
  const form = document.getElementById("survey-form");
  const formData = new FormData(form);

  let answers = {};
  for (let [key, value] of formData.entries()) {
    answers[key] = value;
  }

  if (Object.keys(answers).length < 3) {
    alert("Please answer all questions!");
    return;
  }

  const surveys = JSON.parse(localStorage.getItem("surveys")) || [];
  surveys.push({
    answers: answers,
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("surveys", JSON.stringify(surveys));

  document.getElementById('mcq-section').classList.add('hidden');
  document.getElementById('thankyou-section').classList.remove('hidden');
}