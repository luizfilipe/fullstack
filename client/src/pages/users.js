import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/users'
import { Pagination } from '../components/pagination'
import { Listing, Header, Cell, LinkItem } from '../components/listing'
import { Layout } from '../styles/layout'
import { Title } from '../styles/title'

export const Users = () => {
  const [users, setUsers] = useState({
    data: [],
    links: {}
  })

  const fetch = async (page = 0) => {
    const { data: result } = await getUsers({ since: page })
    setUsers(result)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Layout>
      {
        Boolean(users.data.length) && (
          <Listing size={30} headers={['id', 'login']}>
            <Title>Users</Title>
            <Header>
              <Cell size={1}>id</Cell>
              <Cell size={2}>login</Cell>
            </Header>
            {users.data.map(({ id, login }) => (
              <LinkItem key={id} to={`/user/${login}`}>
                <Cell size={1}>{id}</Cell>
                <Cell size={2}>{login}</Cell>
              </LinkItem>
            ))}
            <Pagination
              label='since'
              links={users.links}
              service={page => fetch(page)}
            />
          </Listing>
        )
      }
    </Layout>
  )
}
