

export const goToLogin = (navigate) =>{
    navigate("/login")
}
export const goToPaginaLogout = (navigate) =>{
    navigate("/signup")
}
export const goToFeed = (navigate) =>{
    navigate("/")
}
export const goToPaginaDetalhe = (navigate,postId) =>{
    navigate(`/post/${postId}`)
}

