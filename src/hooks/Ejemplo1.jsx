/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a través de un hook y poder modificarlo
 */

import React,{ useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial =0;

    // Valor inicial para una persona
    const personaInicial ={
        nombre: 'Cristian',
        email: 'cristian@mail.com'
    }
    /**
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para asi poder gestionar su cambios
     * y que se vea reflejado en la vista  del componente
     * 
     * const [nombreVariable,funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado del contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor);
        setContador(contador + 1)
    }
    /**
     * Función para actualizar el estado privado de la persona
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepito',
                email: 'pepito@mail.com',
            }
        )
    }

    return (
        <div>
            <h1>***** Ejemplo de UseState *****</h1>
            <h2> CONTADOR: {contador} </h2>
            <h2> DATOS DE LA PERSONA </h2>
            <h2> NOMBRE: {persona.nombre} </h2>
            <h2> EMAIL: {persona.email}</h2>
            <button onClick={incrementarContador}> Incrementar Contador </button>
            <button onClick={actualizarPersona}> Actualizar Persona </button>
        </div>
    );
}

export default Ejemplo1;
