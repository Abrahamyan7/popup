import { IoCloseOutline } from "react-icons/io5";
import popup from "./../../Images/popup.png"
import "./popup.css";
import { useCallback, useState } from "react";


function Modal({setOpen, open, setAlertVisible}) {
    const [firstname, setFirstname] = useState("");
    const [username, setUsername] = useState("");

    const handleFormDataClick = useCallback(async () => {
        try {
          const response = await fetch("https://ssttoorree.ru/_receive_question_", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                username,
                from: "store_engineering"
            }),

          });
          if(response.ok ){
            setOpen(false)
            setAlertVisible(true);
            setFirstname("")
            setUsername("")
          }
        } catch (error) {
        }
      }, [username, firstname, setOpen]);

    function handleClick(event) {
        event.stopPropagation();
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={`${"Overlay"} ${open ? "show" : ""}`}
            onClick={() => setOpen(false)}
        >
            <div className="app-modal" onClick={(event) => handleClick(event)}>
                <div className="app-modal_icon">
                    <IoCloseOutline onClick={() => setOpen(!open)} />
                </div>
                <div className="app-modal_container">
                    <div className="app-undraw">
                        <img src={popup} alt="Popup-img" />
                    </div>
                    <div className="app-form">
                        <h3 className="form-title">Получить консультацию</h3>
                        <form className="form-container" onSubmit={(e) => handleSubmit(e)} >
                            <div>
                                <input className="first-input" placeholder="Ваше имя" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                            </div>
                            <div>
                                <input  type="number" className="second-input" placeholder="Ваш телефон" value={username}  onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <p className="form-text">
                                Нажимая “Отправить” вы
                                подтверждаете свое согласие на обработку и хранение
                                ваших персональных данных в
                                соответствии с политикой обработки персональных данных.
                            </p>
                            <button className="form-btn"  onClick={handleFormDataClick}>Отправить запрос</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
