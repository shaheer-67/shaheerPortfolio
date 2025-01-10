var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("side-menu");
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

//conatct me Form //

// Initialize EmailJS with your Public Key
emailjs.init("Ka2ydq0Q-SDPGYEw_");

// Add event listener for form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Reference to the submit button
    const btn = document.querySelector(".dwn-btn.btn2");
    btn.textContent = "Sending..."; // Change button text to indicate progress

    // Set EmailJS service and template IDs
    const serviceID = "service_y9p9jpc";
    const templateID = "template_d4al1yf";

    // Send the form data using EmailJS
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Submit"; // Reset button text
        alert("Message sent successfully!");
      },
      (err) => {
        btn.textContent = "Submit"; // Reset button text
        alert("Failed to send message! Error: " + JSON.stringify(err));
      }
    );
  });
