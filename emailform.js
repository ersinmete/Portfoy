// function SendMail() {
//   var params = {
//     from_name: document.getElementById("fullName").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs
//     .send("service_30llu6i", "template_a8g5m06", params)
//     .then(function (res) {
//       alert("Gönderim Başarılı Teşekkür Ederim" + res.status);
//       document
//         .querySelectorAll("#form input, #form textarea")
//         .forEach((input) => (input.value = ""));
//     });
//   document.getElementById("form").addEventListener("submit", SendMail);
// }

document.addEventListener("DOMContentLoaded", function () {
  var closeBtn = document.querySelector("#myModal .close");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    });
  } else {
    console.error("Kapatma düğmesi bulunamadı!");
  }

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    SendMail();
  });
});

function SendMail() {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modal-message");

  modal.style.display = "block";

  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_30llu6i", "template_a8g5m06", params)
    .then(function (res) {
      modalMessage.textContent =
        "Gönderim Başarılı Teşekkür Ederim" + res.status;
      document
        .querySelectorAll("#form input, #form textarea")
        .forEach((input) => (input.value = ""));
      setTimeout(function () {
        modal.style.display = "none"; // 3 saniye sonra modalı gizle
      }, 3000); // 3000 milisaniye = 3 saniye
    });
}
