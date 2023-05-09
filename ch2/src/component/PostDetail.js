import React from 'react'
import {useParams} from 'react-router-dom'

const PostDetail = () => {
    let {category} = useParams()
  return (
    <>
    <h1>{category}Post Details</h1>

    <h3>{category}hguy</h3>
    <div>PostDetail</div>
    </>
  )
}

export default PostDetail