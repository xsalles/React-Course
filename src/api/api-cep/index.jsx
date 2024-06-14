import React, { useState } from "react"
import axios from "axios"
import { Await } from "react-router-dom"


export default function GetCep() {

    const [cep, setCep] = useState(null)
    const [adress, setAdress] = useState(null)


    async function handleAdress() {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setAdress(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4x1 text-blue-600">Busque seu cep aqui</h1>

                <input placeholder="Digite o seu cep" type="number" name="" id="" onChange={(e) => setCep(e.target.value)} className=" p-2 border-2 border-solid border-black-600" />

                <button type="button" onClick={handleAdress}>Enviar</button>
            </div>
            {
                adress &&

                <div>
                    <p>Rua: {adress.logradouro}</p>
                    <p>DDD: {adress.ddd}</p>
                    <p>Bairro: {adress.bairro}</p>
                    <p>Localidade: {adress.localidade}</p>
                </div>
            }
        </div>
    )
}