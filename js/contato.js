'use strict'

export async function lerContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Gustavo",
    "celular": "11 9 5868-5654",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "gustavo@gmail.com",
    "endereco": "Av. Paulista, 235",
    "cidade": "São Paulo"
}

export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok
}


const contatoAtualizado = {
    "nome": "Gustavo ATUALIZADOOO",
    "celular": "11 9 5868-5654",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "gustavo@gmail.com",
    "endereco": "Av. Paulista, 235",
    "cidade": "São Paulo"
}


export async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'DELETE'
    }
    const response = await fetch(url, options)

    return response.ok
}

