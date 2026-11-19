// Ano atual no rodapé
const year = document.getElementById("current-year");
if (year) year.textContent = new Date().getFullYear();

// Imagens dos projetos: usa o print real (.png) e cai no placeholder (.svg) se ele ainda não existir
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  const usarFallback = () => {
    if (img.dataset.fallback && !img.src.endsWith(img.dataset.fallback)) {
      img.src = img.dataset.fallback;
    }
  };
  img.addEventListener("error", usarFallback, { once: true });
  if (img.complete && img.naturalWidth === 0) usarFallback();
});
