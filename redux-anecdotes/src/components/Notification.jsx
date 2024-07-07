import { useSelector } from "react-redux"

const Notification = () => {
    const notification = useSelector( (state) => {
        return state.notification
    })
    const styleVisible = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        margin: 10
    }
    const styleHidden = {
        visibility: 'hidden'
    }
  return (
    <div style={ notification == "" ? styleHidden : styleVisible}>
      {notification}
    </div>
  )
}

export default Notification