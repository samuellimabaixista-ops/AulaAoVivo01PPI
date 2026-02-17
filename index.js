import express from 'express';

const host='0.0.0.0.';
const porta= 3000;

const server= express(); // oferecendo ao desenvolvedor um servidor HTTP de moso expresso.

// rechear o servidor com funcionalidades

server.get('/', (requisicao, resposta) => {
    resposta.send(`

       <!DOCTYPE html>
        <html lang="pt-br">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Primeiro Programa para Internet usando Node + Express</title>
        </head>
        <body>
            <h1>Primeiro Programa para Internet usando Node + Express</h1>
            <h2>Olá, bem vindo a página inicial</h2>
        </body>
        
        `);
});

server.get('/horaAtual', (requisicao, resposta) => {

    const horaAtual = new Date();
    const hora = horaAtual.getHours() + ":" + horaAtual.getMinutes() + ":" + horaAtual.getSeconds();
    resposta.send(`
        
        <!DOCTYPE html>
        <html lang="pt-br">
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Horario do Servidor</title>
        </head>
        <body>
            <h1>Agora São ${hora}</h1>
        </body>
        
        
        `);

});


server.listen(porta,host, () =>{
    console.log(`Servidor escutando em htpp://${host}: ${porta}`);
});