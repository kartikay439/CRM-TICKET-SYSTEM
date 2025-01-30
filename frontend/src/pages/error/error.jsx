import "./error.css"
export const ErrorComponent = ({err}) => {
    return (
        <>
            <div className="lError">
                <p className="error-box">{err}</p>

            </div>
        </>
    )
}