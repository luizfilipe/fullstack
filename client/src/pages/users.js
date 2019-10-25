import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { getUsers } from '../services/users'
import { Pagination } from '../components/pagination'
import { Listing, Header, Cell, LinkItem } from '../components/listing'
import { Layout } from '../styles/layout'
import { Title } from '../styles/title'

export const Users = () => {
  const [data, setData] = useState({
    users: [],
    next: 0
  })

  const [pages, setPages] = useState(new Set([0]))

  const getSince = page => {
    const available = [...pages]
    return available[page > available.length ? available.length - 1 : page - 1]
  }

  const fetch = async (page = 1) => {
    // Since this service does not have pagination, I've implemented a way to store past since.
    const { data: result } = await getUsers({ since: getSince(page) })
    setData(result)
    setPages(new Set([...pages, result.next].sort((a, b) => a > b
      ? 1
      : b > a
        ? -1
        : 0)))
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Layout>
      {
        Boolean(data.users.length) && (
          <Listing size={30} headers={['id', 'login']}>
            <Title>Users</Title>
            <Header>
              <Cell size={1}>id</Cell>
              <Cell size={2}>login</Cell>
            </Header>
            {data.users.map(({ id, login }) => (
              <LinkItem key={id} to={`/user/${login}`}>
                <Cell size={1}>{id}</Cell>
                <Cell size={2}>{login}</Cell>
              </LinkItem>
            ))}
            <Pagination service={debounce(page => fetch(page), 500)} />
          </Listing>
        )
      }
    </Layout>
  )
}
