import express, { text } from 'express';

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

// criar um método que aceita parâmetros
server.get('/ tabuada', (requisicao,resposta) => {

    // tabuada de qual numero até qual sequencia?
    console.log("requisicao tabuada");

    const numero = parseInt (requisicao.query.numero);
    const sequencia = parseInt(requisicao.query.sequencia);

    if(!numero || !sequencia)
       resposta.send(`
        
             <!DOCTYPE html>
             <html>
                <html lang="pt-br">
                 <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>TABUADA</title>
             </head>
             <body>
                 <h1>Tabuada</h1>
                 <h2>Por favor informe o numero e a sequencia na URL</h2>
                 <h3>Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10</h3>
              </body>
              </html>
        
        `);

    else{
        resposta.setHeader('Content-Type','text/html');
       
        resposta.write (`<!DOCTYPE html>
            <html>
                
             <head>
                    <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <title>TABUADA</title>
             </head>
                <body>
                    <h1>Tabuada do ${numero} ate a sequencia ${sequencia}</h1>
                    <ul>
            
                         `);

                        for (let i =0; i<=sequencia;i++) {
                             resposta.write(`<li>${i} x ${numero} = ${i*numero}</li>`);   
                             }

                         resposta.write(
                    </ul>
             </body>
             </html>     

         );

        resposta.end() // FINALIZA E ENVIA
    }
});


server.listen(porta,host, () =>{
    console.log(`Servidor escutando em htpp://${host}: ${porta}`);
});