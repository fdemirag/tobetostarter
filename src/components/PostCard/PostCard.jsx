import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
  Button } from 'semantic-ui-react'
export default function PostCard(props) {
  return (
    <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <CardContent>
      <CardHeader>{props.post.title}</CardHeader>
      <CardMeta>
        <span className='date'> {props.post.userId}</span>
      </CardMeta>
      <CardDescription>
       {props.post.body}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </CardContent>
  </Card>
  )
}
