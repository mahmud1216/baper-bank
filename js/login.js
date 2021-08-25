document.getElementById("submit-button").addEventListener("click", function () {
  console.log("button click");
  const emailFild = document.getElementById("email-fild").value;
  const passwordFild = document.getElementById("password-fild").value;

  if (emailFild == "child@father.com" && passwordFild == "123456789")
    window.location.href = "volt.html";
});
