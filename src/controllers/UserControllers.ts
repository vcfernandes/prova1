import { Request, Response } from 'express';
const Users = require('../users.json');
const Lista = require('../users.json');
const BuscarIdade = require('../users.json');
const BuscarSexo = require('../users.json');
const BuscarId = require('../users.json');


/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */

export default {
    index(request, response) {
  
    },
    async find(request, response) {
        const { nome,sobrenome} = request.body;
        const Lista = await Users.find({nome, sobrenome })
        return( console.log("listar usuarios"));
        const BuscarSexo = await Users.find({nome, sobrenome })
        return( console.log("buscar um usuario com id passado como parâmetro da requisição"));
        const BuscarIdade = await Users.find({nome, sobrenome })
        return( console.log("buscar usuarios com idade acima do parametro idade passado no corpo da requisição (body)"));
        const BuscarId = await Users.find({nome, sobrenome })
        return( console.log("buscar usuarios com sexo, por parametro sexo passado no corpo da requisição (body)"));
},

};
    
