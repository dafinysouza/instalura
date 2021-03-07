import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
    background-color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
    color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
`;

const ButtonGhost = css`
    background-color: transparent;
    color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
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

    ${function ({ ghost }) {
    if (ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
    xs: css`
            /* All devices */
            ${TextStyleVariantsMap.smallesException}
        `,
    md: css`
            /* From md breakpoint */
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('display')}
`;
