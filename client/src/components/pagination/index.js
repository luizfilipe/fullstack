import React, { useState } from 'react'
import { Container, Button } from './styles'
import { debounce } from 'lodash'

export const Pagination = ({ service = () => {}, links = {}, label = 'page', showAll = false }) => {
  const [pagination, setPagination] = useState(1)
  const { first, prev, next, last } = links

  return (
    <Container>
      {(first || showAll) && (
        <Button
          enabled={first}
          onClick={debounce(() => {
            if (first) {
              const value = first[label] || 0
              service(value)
              setPagination(value)
            }
          }, 100)}
        >
          {'<<'}
        </Button>
      )}
      {(prev || showAll) && (
        <Button
          enabled={prev}
          onClick={debounce(() => {
            if (prev) {
              const value = prev[label]
              service(value)
              setPagination(value)
            }
          }, 100)}
        >
          {'<'}
        </Button>
      )}
      {
        label === 'page' && (
          <Button enabled>
            {pagination}
          </Button>
        )
      }
      {(next || showAll) && (
        <Button
          enabled={next}
          onClick={debounce(() => {
            if (next) {
              const value = next[label]
              service(value)
              setPagination(value)
            }
          }, 100)}
        >
          {'>'}
        </Button>
      )}
      {(last || showAll) && (
        <Button
          enabled={last}
          onClick={debounce(() => {
            if (last) {
              const value = last[label]
              service(value)
              setPagination(value)
            }
          }, 100)}
        >
          {'>>'}
        </Button>
      )}
    </Container>
  )
}
