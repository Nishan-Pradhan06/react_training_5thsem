export default function RegeisterPage() {
    return (
        <>
            <div className="auth-container">
                <div className="auth-box">
                    <h2 className="auth-title">Register</h2>
                    <form className="auth-form">
                        <input type="text" placeholder="Full Name" className="auth-input" />
                        <input type="email" placeholder="Email" className="auth-input" />
                        <input type="password" placeholder="Password" className="auth-input" />
                        <button type="submit" className="auth-button">Create Account</button>
                    </form>
                    <p className="auth-switch-text">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </div>
        </>
    )
}