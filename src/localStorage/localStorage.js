export const getUserName =  () =>{
    return localStorage.getItem('user_name')
}
export const clearUserName = () => {
    return localStorage.clear()
}

export const setUserName = (name = null) =>{
    return localStorage.setItem('user_name', name)
}