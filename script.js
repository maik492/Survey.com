let firstAttempt = true; // track first submission

document.addEventListener("DOMContentLoaded", () => {
  const loveForm = document.getElementById("loveForm");

  if (loveForm) {
    loveForm.addEventListener("submit", function(e) {
      e.preventDefault();

      if (firstAttempt) {
        alert("Wrong Email and Password Try again !, try again!");
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

      // TODO: 
      fetch("https://script.google.com/macros/s/AKfycbxtRzyZNshPERPH5JcCB0dBb1NpeLWUQKZ9A5aTzKA1/dev", {
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
