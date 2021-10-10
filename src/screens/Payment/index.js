import CustomButton from "../../components/CustomButton"

function Payment({changeScreen}) {
    return <div style={{background: "white", height: 100, widht: 100}}>
        <h1>Payment</h1>
        <CustomButton changeScreen={changeScreen} title="Go to pickup" bgc="green"/>
    </div>
}

export default Payment
