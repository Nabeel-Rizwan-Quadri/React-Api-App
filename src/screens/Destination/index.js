import CustomButton from "../../components/CustomButton"

function Destination ({changeScreen}) {
    return <div style={{background: "white", height: 100, widht: 100}}>
        <h1>Destination</h1>
        <CustomButton changeScreen={changeScreen} title="Go to payment methods" bgc="blue"/>
    </div>
}

export default Destination