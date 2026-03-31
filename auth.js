async function login() {
  let res = await fetch(API + "?action=login", {
    method: "POST",

    body: JSON.stringify({
      email: email.value,

      password: password.value,
    }),
  });

  let user = await res.json();

  localStorage.setItem("user", JSON.stringify(user));

  loginView.classList.add("d-none");

  appView.classList.remove("d-none");
}
