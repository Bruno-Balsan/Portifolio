# Portfólio | Bruno Henrique Balsan

Meu portfólio pessoal, feito para apresentar quem eu sou, minhas habilidades, formação, projetos e certificados.
O site é construído com **HTML, CSS e JavaScript puros**, sem frameworks e sem etapa de build, com foco em código organizado, responsividade e acessibilidade.

<!-- Quando publicar, adicione aqui: **Acesse o site:** https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/ -->
<!-- Quando tiver um print do site, adicione aqui: ![Prévia do portfólio](imagens/preview.png) -->

## Sobre o projeto

O portfólio tem uma página inicial e duas páginas internas:

- **Início:** apresentação, sobre mim, formação, habilidades, projetos em destaque, certificados e contato
- **Projetos:** todos os projetos, com links para o código e para a versão online
- **Certificados:** cursos e capacitações com acesso aos certificados em PDF

## Recursos

- Tema **escuro e claro**, com a escolha salva no navegador
- Layout **responsivo** para celular, tablet e desktop
- Cores e temas controlados por variáveis CSS
- **Acessibilidade:** HTML semântico, link para pular ao conteúdo, foco visível no teclado e respeito à preferência por menos movimento
- Imagens dos projetos com **placeholder automático** enquanto o print real não existe
- Código separado por responsabilidade (CSS em três arquivos, JavaScript em dois)

## Tecnologias

| Tecnologia | Uso |
| ---------- | --- |
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Layout com Grid e Flexbox, variáveis CSS e animações |
| JavaScript | Alternância de tema e pequenas interações |
| Google Fonts | Fontes Sora e JetBrains Mono |

## Estrutura de pastas

```
portfolio/
├── index.html                 Página inicial
├── paginas/
│   ├── projetos.html          Página de projetos
│   └── certificados.html      Página de certificados
├── css/
│   ├── base.css               Cores, temas, fontes e reset
│   ├── layout.css             Navbar, hero, seções, rodapé e responsividade
│   └── components.css         Botões, cards, tags, terminal e projetos
├── js/
│   ├── theme.js               Alternância entre tema escuro e claro
│   └── main.js                Ano do rodapé e fallback das imagens
├── imagens/
│   ├── favicon.svg
│   └── projetos/              Prints dos projetos
└── documentos/
    ├── certificados/          Certificados em PDF
    └── curriculo/             Currículo em PDF
```

## Como executar

Não é preciso instalar nada. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone https://github.com/Bruno-Balsan/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

Se preferir um servidor local, na pasta do projeto rode:

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Projetos apresentados

| Projeto | Descrição | Tecnologias |
| ------- | --------- | ----------- |
| **SIGACRC** | Trabalho de conclusão de curso, feito em equipe: solução tecnológica para serviços de cartório | Desenvolvimento de Sistemas |
| **Feira Cultural** | Site sobre a influência da tecnologia na economia do Espírito Santo e de Minas Gerais | HTML, CSS, JavaScript |
| **Dados com Python** | Análise de dados feita na imersão da Alura | Python, Jupyter Notebook |

## Autor

**Bruno Henrique Balsan**
Estudante do Ensino Médio com Técnico Integrado em Desenvolvimento de Sistemas.

- E-mail: brunohenriquebalsan089@gmail.com
- GitHub: [Bruno-Balsan](https://github.com/Bruno-Balsan)
- LinkedIn: [Bruno Henrique Balsan](https://www.linkedin.com/in/bruno-henrique-balsan-1a260037a/)
