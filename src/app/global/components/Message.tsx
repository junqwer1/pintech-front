import styled, {css} from 'styled-components'
import colors from '../assets/styles/color'
import sizes from '../assets/styles/size'

const { info } = colors
const { small } = sizes

const Message = styled.div`
  box-shadow: 2px 2px 5px ${info};
  color: ${info};
  font-size: ${small};
  padding: 7px 10px;
  text-align: center;
  border-radius: 2px;

  & + & {
    margin: 3px;
  }

  ${({color}) => color && css`
    box-shadow: 2px 2px 5px ${colors[color] ?? info};
    color: ${colors[color] ?? info};
  `}
`
