#  Tasklist Frontend

Este é o frontend da aplicação **Tasklist**, desenvolvido com **Angular**. Ele consome a API REST criada com Spring Boot e oferece uma interface intuitiva para gerenciamento de tarefas.

##  Tecnologias utilizadas

- Angular 17
- TypeScript
- RxJS
- Angular Material
- HttpClient


##  Estrutura do projeto

- `src/app/models`: interfaces e tipos
- `src/app/services`: comunicação com a API
- `src/app/components`: componentes visuais
- `src/app/pages`: páginas principais da aplicação
- `src/app/app-routing.module.ts`: rotas da aplicação

##  Integração com o backend

Este frontend consome a API disponível em:

http://localhost:8080/api/tarefas

> Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

##  Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/andregattdev/tarefas-frontend.git


2. Instale as dependências:

npm install

3. Execute o projeto:

ng serve


- Acesse no navegador:

http://localhost:4200


 Funcionalidades
- ✅ Listar tarefas
- ➕ Criar nova tarefa
- ✏️ Editar tarefa existente
- 🗑️ Deletar tarefa
- 🔍 Filtrar tarefas (opcional



