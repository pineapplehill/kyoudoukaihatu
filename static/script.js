const messageInput = document.getElementById("message-input");
const submitButton = document.getElementById("submit-button")

setInterval(() => {
  if (messageInput.value === "") {
    window.location.reload();
  }
}, 5 * 1000);

submitButton.disabled = true;
setInterval(() => {
  if (messageInput.value === "") {
    submitButton.disabled = true;
  }
  else {
    submitButton.disabled = false;
  }
}, 10);