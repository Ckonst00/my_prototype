import { Menu as SemanticMenu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Menu = ({ user, handleLogout }) => {
  return (
        <SemanticMenu
            pointing
            secondary
            inverted
            fixed='top'
            style={{
            backgroundColor: "rgba(26, 24, 23, 0.94)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            padding: "1em 0"
        }}
        >
      {/* Left-aligned menu items */}
      <SemanticMenu.Item as={Link} to="/">
        etusivu
      </SemanticMenu.Item>
      <SemanticMenu.Item as={Link} to="/ajankohtaista">
        ajankohtaista
      </SemanticMenu.Item>

      {/* Right-aligned user info */}
      <SemanticMenu.Menu position="right">
        {user ? (
          <SemanticMenu.Item>
            <em>{user.name} kirjautunut sisään</em>
            <Button size="small" onClick={handleLogout} style={{ marginLeft: '10px' }}>
              kirjaudu ulos
            </Button>
          </SemanticMenu.Item>
        ) : (
          <SemanticMenu.Item as={Link} to="/kirjautuminen">
            kirjaudu sisään
          </SemanticMenu.Item>
        )}
      </SemanticMenu.Menu>
    </SemanticMenu>
  );
};

export default Menu;
