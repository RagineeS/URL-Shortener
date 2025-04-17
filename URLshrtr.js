
    function generateRandomCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function shortenURL() {
  const input = document.getElementById("longUrl");
  const longURL = input.value.trim();
  const resultBox = document.getElementById("resultBox");
  const shortUrlInput = document.getElementById("shortUrl");

  if (!longURL || !longURL.startsWith("http")) {
    alert("Please enter a valid URL starting with http or https");
    return;
  }

  const fakeBase = "https://short.ly/";
  const code = generateRandomCode();
  const shortURL = fakeBase + code;

  shortUrlInput.value = shortURL;
  resultBox.style.display = "block";
}

function copyURL() {
  const shortUrlInput = document.getElementById("shortUrl");
  shortUrlInput.select();
  shortUrlInput.setSelectionRange(0, 99999);
  document.execCommand("copy");

  showToast("Copied to clipboard!");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
