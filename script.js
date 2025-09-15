// quick-survey logic: read name/email from sessionStorage, calculate love %, send to Google Script (Sheet + email).
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL"; // <-- REPLACE with your Web App URL

document.addEventListener('DOMContentLoaded', ()=>{
  // Load name/email if available
  const name = sessionStorage.getItem('gramic_name') || '';
  const email = sessionStorage.getItem('gramic_email') || '';
  const whoEl = document.getElementById('who');
  if(whoEl){
    if(name && email) whoEl.textContent = `Name: ${name} · Email: ${email}`;
    else whoEl.textContent = 'Name and email not found. Please go back.';
  }

  const form = document.getElementById('surveyForm');
  if(!form) return;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    // collect answers and validate
    const qs = ['q1','q2','q3','q4'];
    let total = 0, max=0;
    let answers = {};
    for(const q of qs){
      const el = form.querySelector(`input[name="${q}"]:checked`);
      if(!el){ alert('Please answer all questions.'); return; }
      answers[q] = el.value;
      total += parseInt(el.value,10);
      max += 10;
    }
    const percent = Math.round((total/max)*100);

    // show local result
    form.style.display = 'none';
    const res = document.getElementById('result');
    document.getElementById('scoreCircle').textContent = percent + '%';
    const msg = percent>=80? 'You love your boyfriend deeply! ❤️' : percent>=50? 'You love him pretty well 🙂' : 'There is room to grow 😅';
    document.getElementById('scoreMsg').textContent = msg;
    res.style.display = 'block';

    // prepare payload
    const payload = {
      name: name,
      email: email,
      q1: answers.q1,
      q2: answers.q2,
      q3: answers.q3,
      q4: answers.q4,
      lovePercent: percent,
      ts: new Date().toISOString()
    };

    // send to Google Script (save to Sheet + email)
    if(GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE')){
      fetch(GOOGLE_SCRIPT_URL, { method:'POST', body: JSON.stringify(payload) })
        .then(r=> r.text().then(t=> console.log('Script response:',t)))
        .catch(err=> console.error('Send failed',err));
    } else {
      console.warn('Google Script URL not set. Responses are not sent to the server.');
    }
  });
});