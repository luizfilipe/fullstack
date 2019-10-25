import styled from 'styled-components'
import { Colors } from '../../colors'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: ${props => props.size || 30}rem;  
`


export const Cell = styled.div`
  display: flex;
  flex: ${props => props.size || 1};
  flex-direction: row;
  border: 1px solid ${Colors.GEYSER};
  padding: .5rem .75rem;
  & > a {
    &:visited {
      color: ${Colors.AZURE_RADIANCE};
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;    
`

export const Item = styled.div`
  display: flex;
  color: ${Colors.AZURE_RADIANCE};
  text-decoration: none;
  &:nth-child(odd) {
    background-color: ${Colors.GEYSER};
  }
`

export const LinkItem = styled(Link)`
  display: flex;
  color: ${Colors.AZURE_RADIANCE};
  text-decoration: none;
  &:nth-child(odd) {
    background-color: ${Colors.GEYSER};
  }
`
