import React, { useState } from 'react'
import { Container, Button } from './styles'

export const Pagination = ({ service = () => {} }) => {
  const [pagination, setPagination] = useState(1)

  return (
    <Container>
      <Button onClick={() => {
        if (pagination <= 1) {
          return
        }
        const newOne = pagination - 1
        service(newOne)
        setPagination(newOne)
      }}
      >
        {'<'}
      </Button>
      <Button>
        {pagination}
      </Button>
      <Button onClick={() => {
        const newOne = pagination + 1
        service(newOne)
        setPagination(newOne)
      }}
      >
        {'>'}
      </Button>
    </Container>
  )
}
