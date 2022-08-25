/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';


/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor
 * que reciva desde el padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
    //Inicializamos un estado vacio que se rellenará con los datos
    // del padre
    
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto(){
    const estadoInicial = {
        token: '1234567',
        sesion: 1,
    }
    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession(){
        setSessionData(
            {
                token: 'JWT123SASF4',
                sesion: sessionData.sesion+1
            }
        )
    }

    return(
        <miContexto.Provider value={sessionData}>
            <h1> **** Ejemplo de Hook useState y useContext ****</h1>
            {/* Todo lo que está aqui puede leer  los datos de sessionData */}
            {/* Además, si se actualiza , los componentes de aqui, tambien lo actualia */}
            <Componente1></Componente1>
            <button onClick={actualizarSession}> Actualizar Session</button>
        </miContexto.Provider>
    );
}
