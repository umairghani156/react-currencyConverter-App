import RenderRupees from "./RenderRupees";

const Answer = ({currencyData, isAvailableData, setIsAvailableData}) => {
    return(
        <>
        {
          isAvailableData &&  currencyData?.map((data, index) => <RenderRupees key={index} convertedRupees={data}/>)
        }
        </>
    )
}
export default Answer;