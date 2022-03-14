import React from "react"

export const userStoreContext = React.createContext();

const UserStoreProvider = ({children})=>{
    
    const [data, setData] = React.useState();
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [docID, setDocID] = React.useState();
    const [password, setPassword] = React.useState();
    const userStore = {
        data : data,
        name : name,
        email : email,
        docID : docID,
        password : password,
        updateData : (data)=> setData(data),
        updateName : (name)=> setName(name),
        updateEmail : (email)=> setEmail(email),
        updateDocID : (docID)=> setDocID(docID),
        updatePassword : (password)=> setPassword(password)
    }

    return(
        <userStoreContext.Provider value = {userStore}>
            {children}
        </userStoreContext.Provider>
    )
} 

export default UserStoreProvider;