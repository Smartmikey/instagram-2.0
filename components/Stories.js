import { useState, useEffect } from "react"
// import faker from "faker";
import { faker } from "@faker-js/faker";

const Stories = () => {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
            
        }));

        setSuggestions(suggestions);
        // didnt do much today
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default Stories