import MenuToggle from './MenuToggle';
import React, { FunctionComponent } from 'react';
import Logo from './Logo';
import NavBarContainer from './NavBarContainer';
import MenuItems from './MenuItems';

const NavBar: FunctionComponent = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w='100px' color={['black', 'black', 'black', 'black']} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuItems isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
