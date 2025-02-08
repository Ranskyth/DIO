/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, useCallback } from "react"
import "./style.css"
import { MdNoMeals } from "react-icons/md";

const Test = () => {

    const [age,setage] = useState(26)
    const [name, setname] = useState("Lucas");

    const altAge = useCallback(() =>{
        const newage = 10 * age;
        console.log("Age Atual", age, newage)
        setage((prev) => prev === 26 ? 30:26)
    },[age])

    const altName = useCallback(() =>{
        console.log("Nome Alterado", name)
        setname((prev) => prev === "Lucas" ? "José":"Lucas")
    },[name])

    return(
    <>

        <ul>
            <li>
                idade: {age}
            </li>
            <br/>
            <li>
                nome: {name}
            </li>
        </ul>
         <button onClick={altAge}>alterar Age</button>
         <button onClick={altName}>alterar Name</button>
      
    </>
)
}

export default Test
