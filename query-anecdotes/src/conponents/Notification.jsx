import { useMessageDispatch } from '../messageContext'



const Notification = () => {

    const style = {
        border: "solid",
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
      };

    const {message} = useMessageDispatch()

    if (!message) return null

    return (
        <div style={style}>
            <h2>{message}</h2>
        </div>
       
    )

}

export default Notification