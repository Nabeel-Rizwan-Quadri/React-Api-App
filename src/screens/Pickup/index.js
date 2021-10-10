import CustomButton from "../../components/CustomButton"

function Pickup ({changeScreen}) {
    return <div style={{background: "white", height: 100, widht: 100}}>
        <h1>Pickup</h1>
        {/*  */}
        <CustomButton changeScreen={changeScreen} title="Go to Destination" bgc="red"/>
    </div>
    }

export default Pickup