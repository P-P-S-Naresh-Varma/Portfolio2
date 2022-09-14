
document.getElementById("linkedinid").addEventListener("click", openLinkedin);
document.getElementById("viewresume").addEventListener("click", viewresume);

document.getElementById("emailid").addEventListener("click", sendEmail);
document
  .getElementById("toggleabandoned")
  .addEventListener("click", toggleabandonedfun);
let ishidden1 = true;
let ishidden2 = true;
function toggleabandonedfun() {
  if (ishidden1) {
    document.getElementById("Abandonedclass").style.display = "block";
    console.log("clicked 1");
    ishidden1 = false;
  } else {
    document.getElementById("Abandonedclass").style.display = "none";
    ishidden1 = true;
    console.log("clicked 2");
  }
}

function viewresume() {
  if (ishidden2) {
    document.getElementById("resumewin").style.display = "block";
    console.log("clicked resume 1");
    ishidden2 = false;
  } else {
    document.getElementById("resumewin").style.display = "none";
    ishidden2 = true;
    console.log("clicked resume 2");
  }
}

function sendEmail() {
  window.open(
    "mailto:ppsnvarma@gmail.com.com?subject=I Just Saw your website &body=Hi Naresh,"
  );
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/naresh-varma-982636172");
}
