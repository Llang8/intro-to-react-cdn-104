import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogSingle() {
    const [post, setPost] = useState({})
    const { id } = useParams()

    /* 
    * Take the id from useParams.
    * Use the ID in a useEffect to fetch data
    * from our single post api endpoint:
    * https://chief-flat-goose.glitch.me/api/post/1 (where 1 is the id)
    * 
    * Use that to put post data on the page
    */

    return (
        <div className="post">
            Post Single: {id}
        </div>
    )
}