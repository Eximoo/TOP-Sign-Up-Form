const pwd = document.querySelector("#first-pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const pwdError = document.querySelector("#error");
const form = document.querySelector("form");

// console.log(form);
// console.log(pwd.value);
// console.log(confirmPwd.value);

pwd.addEventListener("input", (event) => {
  if (!pwd.checkValidity()) {
    pwd.classList = "error";
  } else {
    pwd.classList = "";
  }
});
confirmPwd.addEventListener("input", (event) => {
  if (!confirmPwd.checkValidity()) {
    confirmPwd.classList = "error";
  } else {
    confirmPwd.classList = "";
  }
});
form.addEventListener("submit", (event) => {
  //   console.log(pwd.value);
  //   console.log(confirmPwd.value);
  if (pwd.value !== confirmPwd.value) {
    // console.log("not same");
    pwdError.textContent = "*Password do not match";
    pwd.classList = "error";
    confirmPwd.classList = "error";
    event.preventDefault();
  } else {
    pwdError.textContent = "";
    // console.log("same");
  }

  //   if (pwd.textContent !== confirmPwd.textContent) {
  //     pwdError.textContent = "Password do not match";
  //     event.preventDefault();
  //   }
});
