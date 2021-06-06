const express = require('express');
const routes = express.Router()

// Ler e Gravar os arquivos
const fs = require('fs')

const lerArquivos = () => {
  const produtos = fs.readFileSync('./data/items.json', 'utf8');
  return JSON.parse(produtos);
}

const escrreverArquivos = (conteudo) =>{
  const escreverConteudo = JSON.stringify(conteudo);
  const produtos = fs.writeFileSync('./data/items.json', escreverConteudo, 'utf8')
}

routes.post('/criar', (req,res) => {

  const {nome, desc, cor, numero, preco, img} = req.body;
  const id = Math.random().toString(32).substr(2, 9)

  const produtos = lerArquivos();
  produtos.push({id, nome, desc, cor, numero, preco, img})

  escrreverArquivos(produtos);

  res.send({id, nome, desc, cor, numero, preco, img});

})

routes.get('/produtos', (req,res) => {

  const produtos = lerArquivos();
  res.send(produtos)

})

routes.get('/produtos/:id', (req,res)=>{
  const {id} = req.params
  const produtos = lerArquivos();
  const itemEncontrado = produtos.find( item => item.id == id )

  res.send(itemEncontrado)

})

routes.put('/atualizar/:id', (req,res) => {
  // Ler os arquvios - Identificar qual quero modificar - Modificar e Salvar

  const {id} = req.params
  const {nome, desc, cor, numero, preco, img} = req.body;
  
  const produtos = lerArquivos();
  const itemSelecionado = produtos.findIndex( (item) => item.id === id);

  // Verificar o que vou mudar
  const {nome: pName, desc: pDesc, cor: pCor, numero: pNumero, preco: pPreco, img: pImg} = produtos[itemSelecionado];

  const newObject = {
    id,
    nome: nome ? nome : pName,
    desc: desc ? desc : pDesc,
    cor: cor ? cor : pCor,
    numero: numero ? numero : pNumero,
    preco: preco ? preco : pPreco,
    img: img ? img : pImg
  }

  produtos[itemSelecionado] = newObject;
  escrreverArquivos(produtos)

  res.send(newObject);

})

routes.delete('/deletar/:id', (req,res) => {
  const {id} = req.params;
  const produtos = lerArquivos();

  const itemSelecionado = produtos.findIndex( (item) => item.id === id);
  
  console.log(itemSelecionado)

  // Fazer o idice sumir
  // Começa do meu item selecionado, vai excluir 1 item somente.

  produtos.splice(itemSelecionado, 1)
  escrreverArquivos(produtos)

  res.send("Item excluido com sucesso!!");

  
})

module.exports = routes