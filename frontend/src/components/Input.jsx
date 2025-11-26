const Input = (props) => {
    return (
        <div className="form-group">
            {props.label && <label htmlFor="" className="form-label">{props.label}</label>}
            <input type="text" className="form-input" {...props} />
            {props.hint && (<div class="form-hint">Минимум 3 символа</div>
            )}
            {props.type === "password" && (<div class="password-strength">
                <div class="password-strength-bar" id="password-strength-bar"></div>
            </div>)}
        </div>
    )
}

export default Input