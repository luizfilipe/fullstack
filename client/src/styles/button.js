import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../colors'

export const Button = styled(Link)`
  background-color: ${Colors.AZURE_RADIANCE};
  color: white;
  padding: .5rem 1rem;
  border-radius: .5rem;
  margin: 2rem 1rem 0 0;      
  outline: none;
`
