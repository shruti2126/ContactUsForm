window.onload = (event) => {
  console.log("FORM FULLY LOADED");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameErrorInput = document.getElementById("name-error");
  const emailErrorInput = document.getElementById("email-error");
  const messageErrorInput = document.getElementById("message-error");

  // Add event listeners for real-time validation as the user types
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
      nameErrorInput.textContent = "Name is required";
    } else {
      nameErrorInput.textContent = ""; // Clear error
    }
  });

  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
      emailErrorInput.textContent = "Email is required";
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailErrorInput.textContent = "Invalid email format";
    } else {
      emailErrorInput.textContent = ""; // Clear error
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() === "") {
      messageErrorInput.textContent = "Message is required";
    } else {
      messageErrorInput.textContent = ""; // Clear error
    }
  });

  // Submit validation still needs to be there, just to prevent empty submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Double-check all fields on submit as well, in case user tries to submit an empty field
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      nameErrorInput.textContent = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === "") {
      emailErrorInput.textContent = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailErrorInput.textContent = "Invalid email format";
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      messageErrorInput.textContent = "Message is required";
      isValid = false;
    }

    // If all fields are valid, display success message and reset form
    if (isValid) {
      console.log("Form submitted with values:", {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      });

      document.getElementById("success-message").textContent =
        "Form submitted successfully!";
      contactForm.reset(); // Reset the form after successful submission

      // Clear any existing error messages after form reset
      nameErrorInput.textContent = "";
      emailErrorInput.textContent = "";
      messageErrorInput.textContent = "";
    }
  });
};
