import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

function NotificationButton() {
  return (
    <div className="dsmeta-red-button">
      <img src={icon} alt="notification-button" />
    </div>
  );
}

export default NotificationButton;
