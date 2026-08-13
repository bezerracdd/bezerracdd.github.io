# bezerracdd.github.io

Portfólio pessoal de **Diego Bezerra** — Data Engineer (Data Integration · Data Quality · IDMC · MDM).

🔗 **https://bezerracdd.github.io**

## Stack

Site estático, sem dependências de build: um único `index.html` com CSS e JavaScript inline.
Fontes carregadas via Google Fonts (Inter + JetBrains Mono).

## Estrutura

```
.
├── index.html      # a página inteira (HTML + CSS + JS)
├── favicon.png
├── images/
│   └── logoBezerrad.png
└── .nojekyll       # desliga o Jekyll no GitHub Pages
```

## Como editar

Abra o `index.html` em qualquer editor. As seções estão marcadas por comentários
(`<!-- ===== SOBRE ===== -->`, etc.). Os pontos ainda a preencher estão entre
colchetes, por exemplo `[Empresa]` e `[Ano]`, dentro da seção **Experiência**.

Para testar localmente, basta abrir o arquivo no navegador, ou rodar:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Publicação

O site é publicado automaticamente pelo **GitHub Pages** a cada push na branch `main`.
Configuração: *Settings → Pages → Source: Deploy from a branch → `main` / `(root)`*.

## Licença

Ver [LICENSE](LICENSE).
