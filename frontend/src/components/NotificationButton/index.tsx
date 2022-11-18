import icon from "../../assets/img/notification-icon.svg"
import "./styles.css"

function NotificationButton() {
    return (
        <div className="meta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton