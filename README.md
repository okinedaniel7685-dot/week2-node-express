# Week 2 Node Express API

## Requirements
- Node.js installed
- Git installed
- GitHub account

## 1. Install dependencies

```bash
npm install
```

## 2. Start the server

```bash
npm start
```

The server runs at:

http://localhost:3000

## Routes

### GET /
Serves the static HTML page.

### GET /api
Returns:

```json
{
  "message": "My Week 2 API!"
}
```

### POST /user

Send JSON:

```json
{
  "name": "Daniel",
  "email": "daniel@example.com"
}
```

Returns:

```json
{
  "message": "Hello, Daniel!",
  "email": "daniel@example.com"
}
```

Missing `name` or `email` returns HTTP 400.

### GET /user/:id

Example:

http://localhost:3000/user/1

Returns:

```json
{
  "message": "User 1 profile."
}
```

## curl testing

```bash
curl http://localhost:3000/api
```

```bash
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d "{"name":"Daniel","email":"daniel@example.com"}"
```

```bash
curl http://localhost:3000/user/1
```

## GitHub

Initialize Git:

```bash
git init
git add .
git commit -m "Build Week 2 Express API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/week2-node-express.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.
