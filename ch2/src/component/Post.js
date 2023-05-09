import React from 'react'
import { useParams,useSearchParams,Outlet } from 'react-router-dom'


const Post = () => {
    let {category,id} = useParams()
    let [searchParams,setSearchParams] = useSearchParams()

    console.log(searchParams.get('sort'))
    console.log(category,id)
  return (
    <>
    <div>Post-page -{category}/{id}</div>
    <Outlet/>
    </>
  )
}

export default Post