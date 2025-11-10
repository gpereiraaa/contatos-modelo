'use strict'

import { lerContatos } from "./contato.js"
import { criarContato } from "./contato.js"
import { deleteContato } from "./contato.js"

const campoNome = document.getElementById('nome')
const campoCelular = document.getElementById('celular')
const campoFoto = document.getElementById('foto')
const campoEmail = document.getElementById('email')
const campoEndereco = document.getElementById('endereco')
const campoCidade = document.getElementById('cidade')
const campoImagem = document.getElementById('preview-image')
const btnNovoContato = document.getElementById('novo-contato')
const btnNovo = document.getElementById('salvar')


async function criarCardContato() {
    const container = document.getElementById('container')
    const contatos = await lerContatos()
    contatos.forEach(contato => {
        const a = document.createElement('a')
        const divCard = document.createElement('div')
        divCard.className = 'card-contato'
        const img = document.createElement('img')
        img.src = contato.foto
        divCard.appendChild(img)
        const nome = document.createElement('h2')
        nome.textContent = contato.nome
        divCard.appendChild(nome)
        const telefone = document.createElement('p')
        telefone.textContent = contato.celular
        divCard.appendChild(telefone)
        a.appendChild(divCard)
        a.addEventListener('click', function () {
            detalhesContato(contato.id)
        })
        container.appendChild(a)
    })
}

function mostrarCardNovoContato() {
    const main = document.querySelector('main')
    main.classList.replace('card-show', 'form-show')
    const btnCancelar = document.getElementById('cancelar')
    btnCancelar.addEventListener('click', function () {
        main.classList.replace('form-show', 'card-show')
    })
}

async function criarNovoContato() {
    btnNovo.addEventListener('click', async function () {
        const contato = {
            "nome": campoNome.value,
            "celular": campoCelular.value,
            "foto": campoImagem.src = URL.createObjectURL(campoFoto.files[0]),
            "email": campoEmail.value,
            "endereco": campoEndereco.value,
            "cidade": campoCidade.value
        }
        await criarContato(contato)
    })
}

async function detalhesContato(id) {
    const contatos = await lerContatos()
    contatos.forEach(contato => {
        if (id === contato.id) {
            mostrarCardNovoContato()
            campoNome.value = contato.nome
            campoEmail.value = contato.email
            campoCelular.value = contato.celular
            campoEndereco.value = contato.endereco
            campoCidade.value = contato.cidade
            campoImagem.src = contato.foto

            const btnDeletar = document.getElementById('deletar')
            btnDeletar.addEventListener('click', deletarContato(id))
        }
    })
}

async function deletarContato(id) {
    deleteContato(id)
}


criarNovoContato()

btnNovoContato.addEventListener('click', mostrarCardNovoContato)
criarCardContato()