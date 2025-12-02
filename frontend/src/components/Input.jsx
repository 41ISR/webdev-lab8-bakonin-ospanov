import "./Input.css"

const Input = (props) => {
    return (
        <div className="form-group">
            {props.label && <label htmlFor="" className="form-label">{props.label}</label>}
            <input type="text" className="form-input" {...props} />
            {props.hint && (<div className="form-hint">Минимум 6 символов</div>
            )}
            {props.type === "password" && (<div className="password-strength">
                <div className="password-strength-bar" id="password-strength-bar"></div>
            </div>)}
        </div>
    )
}

export default Input