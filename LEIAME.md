# Como atualizar o portfólio

## Adicionar prints dos projetos (automático)
Salve o print em `imagens/projetos/` com o nome do projeto, em PNG e proporção 16:9 (ex.: 1280x720):
`sigacrc.png`, `feira-cultural.png`, `dados-python.png`.
O site usa o PNG quando ele existe e o placeholder `.svg` quando não existe.

## Adicionar um novo projeto
Copie este bloco para dentro de `<div class="grid">` em `index.html` ou `paginas/projetos.html`
(nas páginas dentro de `paginas/`, use `../imagens/...`):

```html
<article class="card project">
  <img src="imagens/projetos/NOME.png" data-fallback="imagens/projetos/sigacrc.svg"
       alt="Descreva o que aparece no print" width="640" height="360" loading="lazy">
  <div class="project-body">
    <span class="chip v">Categoria</span>
    <h3>Nome do projeto</h3>
    <p>Descrição curta do que o projeto faz.</p>
    <ul class="chips"><li class="chip">Tecnologia 1</li><li class="chip">Tecnologia 2</li></ul>
    <div class="actions">
      <a class="btn btn-primary" href="LINK_DO_PROJETO" target="_blank" rel="noopener noreferrer">Visualizar ↗</a>
      <a class="btn" href="LINK_DO_GITHUB" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </div>
  </div>
</article>
```

## Documentos
- Currículo: `documentos/curriculo/Curriculo_Bruno_Balsan.pdf`
- Certificados: `documentos/certificados/` (nomes iguais aos de `paginas/certificados.html`)
