import styled from 'styled-components'
import { Colors } from '../../colors'

export const Card = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  border: 1px solid ${Colors.GEYSER};
  border-radius: .75rem;
`
export const Info = styled.span`
  color: ${Colors.AZURE_RADIANCE}
`
