"use client";

import { useEffect } from "react";

const MeuComponente = () => {
    useEffect(() => {
        console.log("Componente montado");
        return () => console.log("Componente desmontado");        
    }, []);
    return <div>Olá, mundo!</div>;
}

export default MeuComponente;