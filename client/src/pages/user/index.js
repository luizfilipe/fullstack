import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDetail } from '../../services/users'
import { Layout } from '../../styles/layout'
import { Title } from '../../styles/title'
import { Card, Info } from './styles'
import { Button } from '../../styles/button'

export const User = () => {
  const { username } = useParams()
  const [userDetail, setUserDetail] = useState({})
  const fetch = async () => {
    const { data } = await getUserDetail(username)
    setUserDetail(data)
  }

  useEffect(() => {
    fetch()
  }, [])
  const { login } = userDetail
  return (
    <Layout>
      {
        login && <Card>
          <Title>
            <Button to='/'>{'<'}</Button>
            User {username}
          </Title>
          <div>
            <div>
              <Info>Id:</Info> {userDetail.id}
            </div>
            <div>
              <Info>Login:</Info> {userDetail.login}
            </div>
            <div>
              <Info>Profile's URL:</Info>
              <a href={userDetail.html_url}>{userDetail.html_url}</a>
            </div>
            <div>
              <Info>Date of creation:</Info> {new Date(userDetail.created_at).toDateString()}
            </div>
          </div>
          <Button to={`/user/${username}/repos`}>
            repos
          </Button>
        </Card>
      }
    </Layout>

  )
}
