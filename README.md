# Sistema de Cadastro Centralizado 🚀

Este projeto consiste em uma aplicação full-stack de cadastro de usuários, com um frontend moderno e responsivo integrado a um backend robusto em Java utilizando Spring Boot.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5 & CSS3**: Estrutura e estilização com design moderno (Glassmorphism).
- **JavaScript (ES6+)**: Lógica de interação e consumo de API via Fetch.
- **Boxicons**: Ícones para uma interface intuitiva.

### Backend
- **Java 17**: Linguagem base.
- **Spring Boot 3**: Framework para criação da API REST.
- **Spring Data JPA**: Persistência de dados.
- **PostgreSQL**: Banco de dados para produção (Render).
- **H2 Database**: Banco de dados em memória para testes locais.
- **Docker**: Containerização para facilitar o deploy.

## 🚀 Como Executar o Projeto

### Localmente (Desenvolvimento)
1. Clone o repositório.
2. Certifique-se de ter o Java 17 instalado.
3. Execute o backend:
   ```bash
   mvn spring-boot:run
   ```
4. Abra o arquivo `index.html` no seu navegador.

### Deploy no Render
Este projeto já está configurado para o **Render**.
1. Conecte seu repositório ao Render como um **Web Service**.
2. Crie uma instância de **PostgreSQL** no Render.
3. Configure as variáveis de ambiente no Web Service:
   - `DATABASE_URL`
   - `DATABASE_USERNAME`
   - `DATABASE_PASSWORD`
4. O Render utilizará o `Dockerfile` incluso para realizar o build automaticamente.

## 📂 Estrutura de Pastas
- `/src`: Código fonte Java (Controllers, Services, Models, Repositories).
- `Dockerfile`: Configuração para deploy em containers.
- `pom.xml`: Gerenciamento de dependências Maven.
- `index.html`, `style.css`, `script.js`: Arquivos do frontend.

## 📝 Endpoints da API
- `POST /api/usuarios`: Cadastra um novo usuário.
- `GET /api/usuarios`: Lista todos os usuários cadastrados.

---
Desenvolvido para fins de aprendizado e demonstração de integração Full-Stack.
