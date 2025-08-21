import { Menu as SemanticMenu, Button, Icon } from 'semantic-ui-react';
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
        Etusivu
      </SemanticMenu.Item>
      <SemanticMenu.Item as={Link} to="/ajankohtaista">
        Ajankohtaista
      </SemanticMenu.Item>

      {/* Right-aligned user info */}
      <SemanticMenu.Menu position="right">
  {user ? (
    <>
      <SemanticMenu.Item as={Link} to="/ylläpito">
        ylläpito
      </SemanticMenu.Item>

      <SemanticMenu.Item style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <em>{user.name} kirjautunut sisään</em>
        <Button size="small" onClick={handleLogout}>
          kirjaudu ulos
        </Button>
      </SemanticMenu.Item>
    </>
  ) : (
    <SemanticMenu.Item as={Link} to="/kirjautuminen">
      <Icon name="sign-in" />
    </SemanticMenu.Item>
  )}
</SemanticMenu.Menu>
    </SemanticMenu>
  );
};

export default Menu;
