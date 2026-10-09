<script>
    const form = document.getElementById("loginForm");
    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");
    const message = document.getElementById("message");

    toggle.addEventListener("click", function () {
      const isHidden = password.type === "password";

      password.type = isHidden ? "text" : "password";
      toggle.textContent = isHidden ? "Hide" : "Show";
      toggle.setAttribute(
        "aria-label",
        isHidden ? "Hide password" : "Show password"
      );
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      message.style.color = "#d12d42";
      message.textContent =
        "Demo only: connect a secure authentication system to log in.";
    });

    document.getElementById("forgotLink").addEventListener(
      "click", function (event) {
        event.preventDefault();
        message.style.color = "#1677ff";
        message.textContent =
          "Connect this link to your password recovery page.";
      }
    );

    document.getElementById("signupLink").addEventListener(
      "click", function (event) {
        event.preventDefault();
        message.style.color = "#1677ff";
        message.textContent =
          "Connect this link to your registration page.";
      }
    );
  </script>