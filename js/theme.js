// Alternância entre tema escuro e claro (preferência salva no navegador)
(() => {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  const KEY = "portfolio-theme";
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch {} };

  function render() {
    if (!button) return;
    const dark = root.dataset.theme === "dark";
    const label = dark ? "Ativar tema claro" : "Ativar tema escuro";
    button.textContent = dark ? "☀" : "☾";
    button.setAttribute("aria-label", label);
    button.title = label;
  }

  root.dataset.theme = read() || "dark";
  render();
  button?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    save(root.dataset.theme);
    render();
  });
})();
