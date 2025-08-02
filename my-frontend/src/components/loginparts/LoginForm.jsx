

const LoginForm = ({ handleLogin, username, password, setUsername, setPassword }) => {
    return (
        <div>
            <h3>Kirjaudu sisään</h3>
            <form onSubmit={handleLogin}>
                <div>
                    käyttäjänimi <input type='text' value={username}
                    onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div>
                    salasana <input type='password' value={password}
                    onChange={({ target }) => setPassword(target.value)} />
                </div>
                <button type='submit' >Kirjaudu</button>
            </form>
        </div>
    )
}

export default LoginForm