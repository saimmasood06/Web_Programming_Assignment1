const form = document.getElementById("jobApplicationForm");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const termsCheckbox = document.getElementById("termsCheckbox");
const privacyCheckbox = document.getElementById("privacyCheckbox");

form.addEventListener("submit", function () {
  let isValid = true;
  //   window.alert("form submitted");

  if (!isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.setCustomValidity("Please enter a valid email address");
  } else {
    emailInput.setCustomValidity("");
  }

  if (!isValidPhoneNumber(phoneInput.value)) {
    isValid = false;
    phoneInput.setCustomValidity("Please enter a valid phone number");
  } else {
    phoneInput.setCustomValidity("");
  }

  if (!termsCheckbox.checked || !privacyCheckbox.checked) {
    isValid = false;
    if (!termsCheckbox.checked) {
      termsCheckbox.setCustomValidity(
        "You must agree to the terms and conditions"
      );
    } else {
      termsCheckbox.setCustomValidity("");
    }
    if (!privacyCheckbox.checked) {
      privacyCheckbox.setCustomValidity(
        "You must acknowledge the Privacy Policy"
      );
    } else {
      privacyCheckbox.setCustomValidity("");
    }
  } else {
    termsCheckbox.setCustomValidity("");
    privacyCheckbox.setCustomValidity("");
  }
  if (!isValid) {
    event.preventDefault();
  }
});

// function submitForm(event) {
//   event.preventDefault();
//   window.alert("form submitted");
// }

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const resume = document.getElementById("resume").files[0];

    if (!fullname || !email || !phone) {
      alert("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }

    console.log("Full Name:", fullname);
    console.log("Email Address:", email);
    console.log("Phone Number:", phone);
    //console.log('Resume:', resume.name);

    form.reset();
  });
});

function getFormData() {
  return {
    fullName: document.getElementById("fullname").value,
    phoneNumber: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zipCode: document.getElementById("zipcode").value,
    resume: document.getElementById("resume").value,
    coverLetter: document.getElementById("coverletter").value,
    educationLevel: document.getElementById("education-level").value,
    university: document.getElementById("university").value,
    major: document.getElementById("major").value,
    gradYear: document.getElementById("graduation-year").value,
    jobTitle: document.getElementById("job-title").value,
    company: document.getElementById("company-name").value,
    empDate: document.getElementById("employment-dates").value,
  };
}

function viewApplicationsAsTable() {
  const formData = getFormData();
  const tableContainer = document.getElementById("tableContainer");

  const table = document.createElement("table");

  const headerRow = table.insertRow(0);
  for (const key in formData) {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  }

  const dataRow = table.insertRow(1);
  for (const key in formData) {
    const td = document.createElement("td");
    td.textContent = formData[key];
    dataRow.appendChild(td);
  }

  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}
