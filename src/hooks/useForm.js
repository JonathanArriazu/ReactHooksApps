import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formSate, setFormSate] = useState( initialForm );

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormSate({
            ...formSate,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormSate(initialForm)
    }


    return {
        ...formSate, // Desectructuramos el formState para EXPONER las propiedades que presenta el form
        // o podemos borrar esa linea y hacer de la forma en que hacemos en FormWithCustomeHooks con "const {username, email, password} = formSate;"
        formSate,
        onInputChange,
        onResetForm
    }
}
