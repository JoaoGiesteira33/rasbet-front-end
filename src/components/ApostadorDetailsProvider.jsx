import { createContext, useState } from "react";

//Create context
export const apostadorDetailsContext = createContext();

//Create provider
const ApostadorDetailsProvider = (props) => {
    const [apostadorDetails, setApostadorDetails] = useState({
    });

    return (
        <apostadorDetailsContext.Provider value={[apostadorDetails,setApostadorDetails]}>
            {props.children}
        </apostadorDetailsContext.Provider>
    );
}

export default ApostadorDetailsProvider;