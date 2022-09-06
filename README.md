# Kanban

Este projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.1.

Foi utilizado o [PrimeNG](https://www.primefaces.org/primeng/) versão 14.0.2 como Design System devido a minha familiaridade com o framework.

Para exibir o conteúdo dos cards como `markdown` conforme solicitado no escopo do projeto utiizei a biblioteca [ngx-markdown](https://github.com/jfcere/ngx-markdown).

## Utilização

Utilize o comando `ng serve` e navegue até  a URL `http://localhost:4200/` para testar a aplicação.

Não esqueça de executar a API! Caso contrário, a aplicação não irá atualizar os cards corretamente.

Foi realizada a cópia do API de exemplo enviada no escopo do projeto.
Para rodá-la, faça:
```console
> cd BACK
> npm install
> npm run server
```

Ela responderá na porta 5000.


## Prints

![image](https://user-images.githubusercontent.com/4548273/188714804-7a892644-3d82-43f7-a0ea-10a70d4fe94e.png)

## Requisitos atendidos
- [x] A API que provemos deve ser usada para persistência dos cards (ela trabalha com persistência em memória) e não deve ser alterada.
- [x] A interface gráfica será apenas uma tela, nela deve haver três colunas chamadas "To do", "Doing" e "Done".
- [x] Os cards deve ser listados nessas colunas de acordo com o valor do campo lista presente no card. Os valores de lista devem ser "ToDo", "Doing" e "Done", respectivamente.
- [x] Deve haver um local que permita criar um card passando valores para o titulo e conteudo, deve haver um botão para adicionar o card. `Aqui foi criado um header com a opção <Novo Card>`
- [x] Um novo card deve sempre cair na lista "To Do" após persistido na API.
- [x] O card deverá ter dois modos: Visualização e Edição.
- [x] No modo de visualização o card terá um cabeçalho com seu título, o conteúdo e 4 botões. `O card no modo visualização possui somente 2 botões pois a ação de mover os cards entre as listas está sendo feita com drag&Drop`
- [x] O conteudo do card pode ser markdown, utilize uma biblioteca para renderizá-lo no modo de visualização (recomendamos uma combinação de dompurify e marked). Lembre-se de estilizar o html resultante do parse do markdown... [Se quiser usar highlight para campos de código no markdown será um diferencial]. `Foi utilizado ngx-markdown`
- [x] Um dos botões do card deverá excluí-lo (persistindo pela API), outro colocá-lo em modo de edição.
- [x] Os dois outros botões devem mudar o card para a lista anterior (se houver) ou para a lista seguinte (se houver). A decisão de desabilitar, esconder ou apenas não gerar o evento desses botões quando não houver a proxima lista ou a anterior é sua. `Esta ação está sendo realizada via Drag&Drop`
- [x] No modo de edição, o card conterá um input para o titulo, um textarea para o conteudo e dois botões. `O modo edição está sendo feito via Modal`
- [x] No modo de edição, um dos botões cancela a edição, quando precionado os campos devem ser resetados para o valor atual e voltar o card ao modo de visualização.
- [x] O outro botão salva o card, persistindo as informações pela API. Também volta ao modo de visualização em seguida. `O modo edição está sendo feito via Modal`
- [x] Toda decisão de visual, de UI e UX é sua. Apenas utilize uma única tela.
- [ ] ~~Se estiver usando REACT priorize componentes funcionais e hooks.~~ (Não se aplica)
- [x] O projeto deve ser colocado em um repositório GITHUB ou equivalente, estar público, e conter um readme.md que explique em detalhes qualquer comando ou configuração necessária para fazer o projeto rodar.
- [x] A entrega será apenas a URL para clonarmos o repositório.
