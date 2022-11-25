import { createContext, useState } from "react";

//Create context
export const userDetailsContext = createContext();

//Create provider
const UserDetailsProvider = (props) => {
    const [userDetails, setUserDetails] = useState({
        online: false,
    });

    return (
        <userDetailsContext.Provider value={[userDetails,setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
}

export default UserDetailsProvider;