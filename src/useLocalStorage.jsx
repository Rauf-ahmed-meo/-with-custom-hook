
import { useState, useEffect } from "react";


export default function useLocalStorage(key, defaultvalue) {
    const [value, setvalue] = useState(() => {
        let currentvalue;

        try {
            currentvalue = localStorage.getItem(key) || String(defaultvalue)
        } catch (error) {
            console.log(error);
        }
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setvalue]
}