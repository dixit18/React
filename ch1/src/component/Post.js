import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'


const Post = () => {
    let {category,id} = useParams()
    let [searchParams,setSearchParams] = useSearchParams()

    console.log(searchParams.get('sort'))
    console.log(category,id)
  return (
    <div>Post-page -{category}/{id}</div>
  )
}

export default Post