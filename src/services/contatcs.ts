import { readFile, writeFile } from "fs/promises"

// essa é o local onde a pasta vai ficar localizada
const dataSource = './data/list.txt'


// esse export é para pegar os contatos dentro da list
export const getContacts = async () => {

    let list: string [] = []
    try {
        const data = await readFile(dataSource, {encoding: 'utf8'})
       list = data.split('\n')

    }catch(err) {}


    return list

}
// esse export é para  criar um novo contato  e dentro dele tambem tem a função getContacts onde ele verifica a lista

export const createContact = async (name: string) => {


    let list = await getContacts();

    list.push(name)
    await writeFile(dataSource, list.join('\n'))

}

// nessa parte ele verifica a lista de contatos e tambem dele um dos itens que estão no filtro.
export const deleteContact = async (name: string) => {
    let list = await getContacts()


    list = list.filter(item => item.toLocaleLowerCase() !== name.toLocaleLowerCase())
    await writeFile(dataSource, list.join('\n'))
}