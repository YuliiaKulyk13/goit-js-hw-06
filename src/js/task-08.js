const formSubmission = document.querySelector(".login-form");
const handleSubmit = (event) => {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const emailValue = elements.email.value;
  const passwordValue = elements.password.value;

  if (emailValue === "" || passwordValue === "") {
    return alert("All fields must be filled in!!!");
  }
  const formObject = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formObject);
  event.currentTarget.reset();
};

formSubmission.addEventListener("submit", handleSubmit);
