import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';

const ButtonDefault = css`
    background-color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`;

const ButtonGhost = css`
    background-color: transparent;
    color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.color`)
    }};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    ${TextStyleVariantsMap.smallesException}

    ${function({ ghost }) {
        if (ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;