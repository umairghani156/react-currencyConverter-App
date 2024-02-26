const RenderRupees = ({convertedRupees}) => {
    return (
        <div style={{width:"100%", backgroundColor:"#fff", padding:"3px", border:"2px solid #afafaf", borderRadius:"10px"}}>
            <h1 style={{fontSize:"22px", fontWeight:"600"}}>Answer</h1>
            <div style={{display:"flex", flexDirection:"column", gap:"15px", alignItems:"center"}}>
                <p>{convertedRupees.userAmount} {convertedRupees.fromCountryCode} ={convertedRupees.convertedAmount} {convertedRupees.toCurrencyCode}</p>
                <p>1 {convertedRupees.fromCountryCode} = {convertedRupees.oneToCurrency} {convertedRupees.toCurrencyCode}</p>
            </div>
        </div>
    )
}
export default RenderRupees;