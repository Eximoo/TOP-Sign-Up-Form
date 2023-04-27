const pwd = document.querySelector("#first-pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const pwdError = document.querySelector("#error");
const form = document.querySelector("form");

// console.log(form);
// console.log(pwd.value);
// console.log(confirmPwd.value);

form.addEventListener("submit", (event) => {
//   console.log(pwd.value);
//   console.log(confirmPwd.value);
  if (pwd.value !== confirmPwd.value) {
    // console.log("not same");
    pwdError.textContent = "*Password do not match";
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
