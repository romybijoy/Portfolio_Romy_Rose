function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx3tZCyqidzCp36Lzz706hrcAC626F4SL-ubMugrj0B2uOLo1UeCWpwEvVOWpxVGFYf/exec';

const form = document.forms['submit-form'];

// const form = document.getElementById('submit-form');

const name = document.getElementById('name');
const place = document.getElementById('place');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();

  if ((!name.classList.contains(".error")) && (!place.classList.contains(".error")) && (!email.classList.contains(".error"))
    && (!mobile.classList.contains(".error")) && (!message.classList.contains(".error"))) {
    console.log(document.querySelector("input").value)
  }
  // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  //   .then(resonse => alert("Thank you! your form is submitted successfully."))
  //   .then(() => { window.location.reload(); })
  //   .catch(error => console.error('Error!', error.message))
});
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(resonse => alert("Thank you! your form is submitted successfully."))
//     .then(() => { window.location.reload(); })
//     .catch(error => console.error('Error!', error.message))
// });

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nameValue = name.value.trim();
  const placeValue = place.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === '') {
    setError(name, 'Name is required');
  } else {
    setSuccess(name);
  }

  if (placeValue === '') {
    setError(place, 'Place is required');
  } else {
    setSuccess(place);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (mobileValue === '') {
    setError(mobile, 'Mobile is required');
  } else {
    setSuccess(mobile);
  }

  if (messageValue === '') {
    setError(message, 'Message is required');
  } else {
    setSuccess(message);
  }
};