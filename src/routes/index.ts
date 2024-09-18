import { error } from "console";
import express from "express";
import { readFile, writeFile } from "fs/promises";



const dataSource = './data/list.txt'
const router = express.Router()

router.post('/contato', async (req, res) => {
    const {name} = req.body;

    if(!name || name.length < 2) {
       return res.json({error: ' está sem as caracteres necessarias'})
    }

    //processo de dados 

    let list: string [] = []
    try {
        const data = await readFile(dataSource, {encoding: 'utf8'})
       list = data.split('\n')

    }catch(err) {}



    list.push(name)
    await writeFile(dataSource, list.join('\n'))

    res.status(201).json({ contato: name})

})



router.get('/contatos', async (req, res) => {

    
    let list: string [] = []
    try {
        const data = await readFile(dataSource, {encoding: 'utf8'})
       list = data.split('\n')

    }catch(err) {}


    res.json({contatos: list})

})
export default router;








// criar uma variavel para amazenar o nome do contato na requisição do body

// depois vou fazeer o processo inverso vou fazer um if porem ele de negação!
// em seugida ele vai retornar um error para  caso esteja em branco o name ou menos de 2 letras


//processamento de dados 

// criar uma lista  vazia

// criar um try catch

// criar uma pasta e criar uma variavel para indicar o caminho dela.