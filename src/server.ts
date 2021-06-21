import express, { request, response } from "express";

const app = express();

/**
 * GET    => Buscar / Pesquisa
 * POST   => Inserir / Criar uma informação
 * PUT    => Alterar/Update uma informação
 * DELETE => Apagar/Remover uma informação
 * PET    => Alterar/update uma informação especifica
 */

app.get('/teste', (request, response) => {
  
  // request : inbound data
  // respose : outbound data

  return response.send("Olá NLW")

});

app.post("/teste-post", (request, response) => {

  return response.send("Olá NLW by post Api")

} )

app.listen(3000,() => console.log("Server Running NLW VI... Port: 3000"))