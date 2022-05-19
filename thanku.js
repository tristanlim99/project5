(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email");
  const Username = searchParams.get("Username");
  const domName = document.querySelector("[data-name]");
  const domEmail = document.querySelector("[data-email]");

  if (domName) {
    domName.textContent =
      "Thank you for creating an account with us, " + "" + Username + "!";
  }

  if (domName) {
    domEmail.textContent = "Your Log-in email is " + "" + email + "!";
  }
})();
