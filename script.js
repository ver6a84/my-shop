function showToast(message, anchorElement) {
  const toast = document.createElement("div");
  toast.innerHTML = message;
  toast.className = "toast";

  const rect = anchorElement.getBoundingClientRect();
  toast.style.top = `${rect.top - 40 + window.scrollY}px`;
  toast.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
  toast.style.transform = "translateX(-50%)";

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

const helpForm = document.querySelector(".help-form-grid");

// ✅ Кастомные тексты для ошибок
const validationMessages = {
  user_name: "Введіть своє ім’я, будь ласка",
  user_email: "Введіть коректну електронну адресу",
  user_tel: "Введіть коректний номер телефону",
  user_message: "Напишіть повідомлення",
};

const fields = helpForm.querySelectorAll("input, textarea");

fields.forEach((field) => {
  field.addEventListener("invalid", () => {
    const message = validationMessages[field.name] || "Заповніть це поле";
    field.setCustomValidity(message); // ✅ заменяем стандартный текст
  });

  field.addEventListener("input", () => {
    field.setCustomValidity(""); // ✅ сбрасываем при вводе
  });
});

helpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!helpForm.checkValidity()) {
    helpForm.reportValidity(); // ✅ покажет наши тексты
    return;
  }

  const submitBtn = this.querySelector(".form-button");
  submitBtn.disabled = true;
  submitBtn.classList.add("sending");
  submitBtn.textContent = "Відправляється...";

  emailjs.sendForm("service_j7qrtug", "template_suxpbsw", this)
    .then(() => {
      this.reset();
      showToast(
        "✅ Повідомлення надіслано!<br>Ми вiдповiмо Вам найближчим часом 😉",
        submitBtn
      );
    })
    .catch((error) => {
      showToast("⚠️ Сталася помилка. Спробуйте ще раз.", submitBtn);
      console.error("EmailJS error:", error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.classList.remove("sending");
      submitBtn.textContent = "Надіслати";
    });
});
