let firstAttempt = true; // track first submission

document.addEventListener("DOMContentLoaded", () => {
  const loveForm = document.getElementById("loveForm");

  if (loveForm) {
    loveForm.addEventListener("submit", function(e) {
      e.preventDefault();

      if (firstAttempt) {
        alert("Oops 😜 Wrong name, try again!");
        firstAttempt = false;
        return;
      }

      let total = 0;
      let max = 0;
      const questions = ["q1", "q2", "q3"];

      questions.forEach(q => {
        const answer = loveForm.querySelector(`input[name="${q}"]:checked`);
        if (answer) {
          total += parseInt(answer.value);
          max += 10;
        }
      });

      const percent = Math.round((total / max) * 100);

      const formData = {
        name: loveForm.name.value,
        email: loveForm.email.value,
        q1: loveForm.q1.value,
        q2: loveForm.q2.value,
        q3: loveForm.q3.value,
        lovePercent: percent
      };

      // TODO: Replace with Google Script Web App URL for email notification
      fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      loveForm.style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("scoreText").textContent =
        `You love your boyfriend ${percent}% ❤️`;
    });
  }
});
