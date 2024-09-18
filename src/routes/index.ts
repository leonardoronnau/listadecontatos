
import express from "express";


// criei uma service para que as funcções sejam esportadas para o codigo ficar mais limpo
import { createContact, deleteContact, getContacts } from "../services/contatcs";


const router = express.Router()
// criação do contato
router.post('/contato', async (req, res) => {
    const {name} = req.body;

    if(!name || name.length < 2) {
       return res.json({error: ' está sem as caracteres necessarias'})
    }

   await createContact(name)
    res.status(201).json({ contato: name})

})


// pegar o a lista de contatos
router.get('/contatos', async (req, res) => {
    let list = await getContacts()
    res.json({contatos: list})

})


//excluir um contato
router.delete('/contato', async (req, res)=> {
    const {name} = req.query;

    if(!name) {
       return res.json({error: ' está sem as caracteres necessarias'})
    }

  await deleteContact(name as string)
    res.json({ contato: name})
})


export default router;






