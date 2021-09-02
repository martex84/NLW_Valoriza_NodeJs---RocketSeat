import express from "express";

const app = express();

app.get("/test-get", (request, response) => {
    return response.send("Teste Resposta")
})

app.post("/test-post", (request, response) => {
    return response.send("Test response Post")
})

app.listen(3000, () => console.log("Server Running"))

