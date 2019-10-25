import styled from 'styled-components'
import { Colors } from '../../colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0;
`

export const Button = styled.button`
  color: ${Colors.AZURE_RADIANCE};
  padding: .5rem .75rem;
  border: 1px solid ${Colors.GEYSER};
  outline: none;
  &:first-child {
    border-top-left-radius: .35rem;
    border-bottom-left-radius: .35rem;
  }
  
  &:last-child {
    border-top-right-radius: .35rem;
    border-bottom-right-radius: .35rem;
  }
`
