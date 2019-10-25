import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { debounce } from 'lodash'
import { getReposFromUser } from '../services/repos'
import { Pagination } from '../components/pagination'
import { Listing, Header, Cell, Item } from '../components/listing'
import { Layout } from '../styles/layout'
import { Title } from '../styles/title'
import { Button } from '../styles/button'

export const Repos = () => {
  const { username } = useParams()
  const [repos, setRepos] = useState([])

  const fetch = async (page = 1) => {
    // Since this service does not have pagination, I've implemented a way to store past since.
    const { data: result } = await getReposFromUser(username, { page })
    setRepos(result)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Layout>
      {
        Boolean(repos.length) && (
          <Listing size={100} headers={['id', 'login']}>
            <Title>
              <Button to={`/user/${username}`}>{'<'}</Button>
              {username}'s Repos
            </Title>
            <Header>
              <Cell size={1}>id</Cell>
              <Cell size={3}>name</Cell>
              <Cell size={6}>url</Cell>
            </Header>
            {repos.map(({ id, name, html_url: url }) => (
              <Item key={id}>
                <Cell size={1}>{id}</Cell>
                <Cell size={3}>{name}</Cell>
                <Cell size={6}>{url}</Cell>
              </Item>
            ))}
            <Pagination service={debounce(page => fetch(page), 500)} />
          </Listing>
        )
      }

    </Layout>
  )
}
