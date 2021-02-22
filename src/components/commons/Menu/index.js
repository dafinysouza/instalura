import React from 'react';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundation/Text';

export default function Menu() {
    const links = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Perguntas frequentes',
            url: '/faq'
        },
        {
            text: 'Sobre',
            url: '/sobre'
        }
    ]
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map(function(link) {
                    return (
                        <li key={link.url}>
                            <Text variant="smallesException" tag="a" href={link.url}>
                                {link.text}
                            </Text>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <Button type="button" ghost variant="secondary.main">
                    Entrar
                </Button>
                <Button type="button" variant="primary.main">
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}