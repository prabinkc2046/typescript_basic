export type  UserStateType = {   
    isLoggedIn?: boolean,
    name: string,
    email: string  
}
export type UserProp = {
    userData: UserStateType,
    handleLogin: () => void,
    handleLogout: () => void
}