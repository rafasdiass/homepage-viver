
```markdown
# Projeto de Gerenciamento de Ambientes

Este projeto visa gerenciar diferentes ambientes dentro de um workshop, permitindo a configuração e visualização de ambientes como cozinha, banheiro, sala de estar e quarto. O projeto também permite a seleção de produtos, cálculo de preços e gerenciamento de pedidos.

## Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/rafasdiass/front-orcamento.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse a aplicação no seu navegador:
   ```
   http://localhost:4200
   ```

## Estrutura do Projeto

A estrutura do projeto foi organizada de forma a seguir boas práticas de responsabilidade única e modularização. Abaixo está a estrutura básica dos componentes, serviços e modelos:

### Estrutura de Pastas

```plaintext
src/
└── app/
    └── landpage/
        └── system/
            └── mobilia/
                ├── workshop/
                │   ├── workshop.component.ts
                │   ├── workshop.component.html
                │   ├── workshop.component.scss
                │   ├── workshop.component.spec.ts
                │   ├── room/
                │   │   ├── room.component.ts
                │   │   ├── kitchen-dimensions/
                │   │   │   ├── kitchen-dimensions.component.ts
                │   │   ├── bathroom-dimensions/
                │   │   │   ├── bathroom-dimensions.component.ts
                │   │   ├── living-room-dimensions/
                │   │   │   ├── living-room-dimensions.component.ts
                │   │   ├── bedroom-dimensions/
                │   │       ├── bedroom-dimensions.component.ts
                │   ├── order-summary/
                │   │   ├── order-summary.component.ts
                │   ├── order-detail/
                │   │   ├── order-detail.component.ts
                │   ├── price-calculator/
                │   │   ├── price-calculator.component.ts
                │   ├── product-selector/
                │   │   ├── product-selector.component.ts
                │   └── model-view/
                │       ├── model-view.component.ts
                ├── services/
                │   ├── room.service.ts
                │   ├── model-view.service.ts
                │   ├── order.service.ts
                │   ├── price-calculator.service.ts
                │   ├── product.service.ts
                │   └── workshop.service.ts
                └── models/
                    ├── room.model.ts
                    ├── order.model.ts
                    └── product.model.ts
```

### Componentes

- **WorkshopComponent**: Componente principal da aplicação, responsável por renderizar todos os outros componentes.
  - **RoomComponent**: Componente pai dos ambientes.
    - **KitchenDimensionsComponent**: Gerencia as dimensões da cozinha.
    - **BathroomDimensionsComponent**: Gerencia as dimensões do banheiro.
    - **LivingRoomDimensionsComponent**: Gerencia as dimensões da sala de estar.
    - **BedroomDimensionsComponent**: Gerencia as dimensões do quarto.
  - **OrderSummaryComponent**: Resumo de pedidos.
  - **OrderDetailComponent**: Detalhes específicos dos pedidos.
  - **PriceCalculatorComponent**: Calculadora de preços para os produtos e ambientes.
  - **ProductSelectorComponent**: Seletor de produtos para cada ambiente.
  - **ModelViewComponent**: Visualização do modelo em 2D/3D dos ambientes.

### Serviços

Os serviços foram organizados em uma pasta dedicada para facilitar a manutenção e reutilização.

- **RoomService**: Gerencia o estado e a comunicação entre os componentes dos ambientes.
- **ModelViewService**: Lida com a lógica de visualização dos modelos dos ambientes.
- **OrderService**: Gerencia a criação, atualização e recuperação dos pedidos.
- **PriceCalculatorService**: Lida com o cálculo de preços com base nas dimensões e nos materiais selecionados.
- **ProductService**: Gerencia a seleção e a disponibilidade dos produtos.
- **WorkshopService**: Serviço central utilizado pelo `WorkshopComponent` para orquestrar a comunicação e o fluxo de dados entre os componentes.

### Modelos

Os modelos foram organizados em uma pasta dedicada para manter a estrutura do projeto organizada e clara.

- **RoomModel**: Define as propriedades básicas de um ambiente (dimensões, nome do ambiente, etc.).
- **OrderModel**: Define as propriedades de um pedido (itens, quantidades, preços, etc.).
- **ProductModel**: Define as propriedades de um produto ou material (tipo de material, custo por metro, ambiente ao qual pertence, etc.).

## Autores

- Rafael Dias
- Lais Bordalo

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```