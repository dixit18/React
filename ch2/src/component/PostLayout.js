import React from 'react'
import {Outlet} from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <div>PostLayout</div>
  <Outlet/>
    </>
  )
}

export default PostLayout