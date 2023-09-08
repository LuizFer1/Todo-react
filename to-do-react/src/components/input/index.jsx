import React from 'react'
import { useState } from 'react'

function Input({tipo = 'text',placeholder,onChange}) {
    const [valor, setValor] = useState('')
    function novoValor(e){
        onChange(e.target.value)

    }

    return (
        <div>
            <input type={tipo} onChange={novoValor} placeholder={placeholder}/>
        </div>
    )       
}

export default Input
