function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyUHUgCuxRLzJ2chiyiFIgiisOghuxcSFkEbhSKAR4-TdcrrsYFEm2kHsSzYFOvvjJi/exec";

const form = document.querySelector("form");

const fullname = document.getElementById("fullname");
const place = document.getElementById("place");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const message = document.getElementById("message");

function validateInputs() {
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[2].value != "") {
      checkEmail();
    }

    items[2].addEventListener("keyup", () => {
      checkEmail();
    });

    if (items[3].value != "") {
      checkMobileNumber();
    }

    items[3].addEventListener("keyup", () => {
      checkMobileNumber();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})$/;

  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email is required";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

function checkMobileNumber() {
  const mobileRegex = /^[7-9]\d{9}$/;

  const errorTxtmobile = document.querySelector(".error-txt.mobile");

  if (!mobile.value.match(mobileRegex)) {
    mobile.classList.add("error");
    mobile.parentElement.classList.add("error");

    if (mobile.value != "") {
      errorTxtmobile.innerText = "Enter a valid mobile number";
    } else {
      errorTxtmobile.innerText = "Mobile number is required";
    }
  } else {
    mobile.classList.remove("error");
    mobile.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();

  if (
    !fullname.classList.contains("error") &&
    !place.classList.contains("error") &&
    !email.classList.contains("error") &&
    !mobile.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((resonse) =>
        alert("Thank you! your details submitted successfully.")
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
