import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Info from '../infoparts/Info';
import LoginPage from './LoginPage';

const Menu = ({ user, handleLogout }) => {
    const menuStyle = { paddingRight: 5 };
    return (
        <div>
            <Link style={menuStyle} to="/">etusivu</Link>
            <Link style={menuStyle} to="/ajankohtaista">ajankohtaista</Link>
            {user 
                ? <em>{user.name} kirjautunut sisään <button onClick={handleLogout}>kirjaudu ulos</button></em>
                : <Link style={menuStyle} to="/kirjautuminen">kirjaudu sisään</Link>
            }
        </div>
    );
};

const Filler = () => (
    <div>
        <p>dafsdf</p>
    </div>
);

const Footer = () => (
    <div>
        Metsäyhdistys nettisivun prototyyppi. Footteri
    </div>
);

const HomePage = ({ user, handleLogin, handleLogout, username, password, setUsername, setPassword }) => {
    return (
        <Router>
            <Menu user={user} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Filler />} />
                <Route path="/ajankohtaista" element={<Info user={user} />} />
                <Route 
                    path="/kirjautuminen" 
                    element={
                        <LoginPage 
                            handleLogin={handleLogin}
                            username={username}
                            password={password}
                            setUsername={setUsername}
                            setPassword={setPassword}
                        />
                    } 
                />
            </Routes>
            <Footer />
        </Router>
    );
};

export default HomePage;
