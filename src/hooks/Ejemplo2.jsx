/**
 * Ejemplo de uso de:
 * - useState
 * - useRef
 * - useEffect
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a través de un hook y poder modificarlo
 */

import React,{ useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Crear dos contadores distintos en estados diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Crear una referencia con useRef para asociar una variable
    //con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1+1)
    }

    function incrementar2(){
        setContador2(contador2+1)
    }

    /**
     * Usando useEffect
     * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que está detro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
     * Cada vez qye haya un cambio en contador 1, se ejecutará  lo que  diga useEffect()
     */
    
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
     * Cada vez qye haya un cambio en contador 1, se ejecutará  lo que  diga useEffect()
     */
    
     useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2');
        console.log('Mostrando referencia a el elemento del DOM');
        console.log(miRef);
    }, [contador1,contador2]);

    return (
        <div>
            <h1>***** Ejemplo de UseState(), useRef(), useEffect() *****</h1>
            <h2> CONTADOR1: {contador1} </h2>
            <h2> CONTADOR2: {contador2} </h2>
            <h4 ref={miRef}> Ejemplo de elemento referenciado</h4>
            <button onClick={incrementar1}> Incrementar Contador 1</button>
            <button onClick={incrementar2}> Incrementar Contador 2</button>
        </div>
    );
}

export default Ejemplo2;
