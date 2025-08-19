

const LoginForm = ({ username, password, setUsername, setPassword, onLogin }) => {
  return (
    <form className="ui large form" onSubmit={onLogin}>
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input
              type="text"
              name="email"
              placeholder="Sähköpostiosoite"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Salasana"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="ui fluid large teal submit button">
          Kirjaudu sisään
        </button>
      </div>

      <div className="ui error message"></div>
    </form>
  );
};

export default LoginForm;
