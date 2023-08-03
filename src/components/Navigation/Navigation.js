import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          return {
            display: 'inline-block',
            padding: '12px',
            fontWeight: '700',
            color: isActive ? 'hsl(259, 52%, 55%)' : 'hsl(257, 46%, 27%)',
          };
        }}
        to="/"
      >
        Перевірити ТТН
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            display: 'inline-block',
            padding: '12px',
            fontWeight: '700',
            color: isActive ? 'hsl(259, 52%, 55%)' : 'hsl(257, 46%, 27%)',
          };
        }}
        to="/departments"
      >
        Відділення
      </NavLink>
    </nav>
  );
};

export default Navigation;
