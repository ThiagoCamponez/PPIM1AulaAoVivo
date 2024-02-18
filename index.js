import express from 'express';

const host='0.0.0.0'; // Este ip representa todas as interfaces (placas de rede) do computador
const porta = 3000; // Esta porta identifica um programa em execução no host hospedeiro

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.write('<h1>Seja bem vindo ao nosso site!</h1>')
    resposta.end();
} ); //Arrow function

app.get('/index.html', (requisicao, resposta) => {
    resposta.write('<h1>Esse é o nosso index.html</h1>')
    resposta.end();
});

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`);
})