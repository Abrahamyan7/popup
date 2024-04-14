import { IoCloseOutline } from "react-icons/io5";
import popup from "./../../Images/popup.png"
import "./popup.css";


function Modal(props) {
    function handelClik(event) {
        event.stopPropagation();
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={`${"Overlay"} ${props.open ? "show" : ""}`}
            onClick={() => props.setOpen(false)}
        >
            <div className="app-modal" onClick={(event) => handelClik(event)}>
                <div className="app-modal_icon">
                    <IoCloseOutline onClick={() => props.setOpen(!props.open)} />
                </div>
                <div className="app-modal_container">
                    <div className="app-undraw">
                        <img src={popup} alt="Popup-img" />
                    </div>
                    <div className="app-form">
                        <h3 className="form-title">Получить консультацию</h3>
                        <form className="form-container" onSubmit={(e) => handleSubmit(e)} >
                            <div>
                                <input className="first-input" placeholder="Ваше имя" />
                            </div>
                            <div>
                                <input className="second-input" placeholder="Ваш телефон" />
                            </div>
                            <p className="form-text">
                                Нажимая “Отправить” вы
                                подтверждаете свое согласие на обработку и хранение
                                ваших персональных данных в
                                соответствии с политикой обработки персональных данных.
                            </p>
                            <button className="form-btn">Отправить запрос</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
