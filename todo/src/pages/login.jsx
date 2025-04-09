export default function LoginPage() {
    return (
        <>
            <div className="auth-container">
                <div className="auth-box">
                    <h2 className="auth-title">Login</h2>
                    <form className="auth-form">
                        <input type="email" placeholder="Email" className="auth-input" />
                        <input type="password" placeholder="Password" className="auth-input" />
                        <button type="submit" className="auth-button">Login</button>
                    </form>
                    <p className="auth-switch-text">
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </div>
            </div>
        </>
    )
}