import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundation/Text';

export default function Menu({ onRegisterClick }) {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      text: 'Sobre',
      url: '/sobre',
    },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallesException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button type="button" variant="primary.main" onClick={onRegisterClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
};
