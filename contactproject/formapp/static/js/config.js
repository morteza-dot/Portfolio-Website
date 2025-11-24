window.onload = function () {
  document
    .getElementById("cform")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
      };

      let response = await fetch("/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
      });

      let res = await response.json();
      alert(res.message || res.error);
    });
};

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const form = document.getElementById("cform");

form.addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    e.preventDefault();
    alert("Please make sure all the fields have been filled out!");
  } else {
    alert("Form has been submitted, we'll get in touch with you ASAP");
    location.reload();
  }
});
