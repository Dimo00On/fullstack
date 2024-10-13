import "./AuthorizationModal.css";

export function AuthorizationModal({text, set_is_modal_opened}) {
    return (
        <div className="modal_container" onClick={() => {set_is_modal_opened(false);}}>
            <div className="modal" onClick={(event) => event.stopPropagation()}><span className="modal">{text}</span></div>
        </div>
    );
}