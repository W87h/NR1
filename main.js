function switchTab(language) {
  document.querySelectorAll('.code-tab').forEach(el => el.classList.add('hidden'));
  document.getElementById(language).classList.remove('hidden');
}

function runJSCode() {
  const code = document.getElementById("js-code").value;
  const output = document.getElementById("js-output");
  try {
    output.textContent = eval(code);
  } catch (e) {
    output.textContent = e.message;
  }
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
