export const goToAdminPage = (navigate) =>{
    navigate("/admin")
}
export const goToHomePage = (navigate)=>{
    navigate("/")
}

export const  goToTripDetailsPage = (navigate, tripId) => {
    navigate(`/admin/${tripId}/details`)
}