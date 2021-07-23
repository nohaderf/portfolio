import React, { useEffect, useState } from 'react';
import Blog from './Blog';

export default function BlogsList() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@freda.hon`)
      .then(r => r.json())
      .then(data => setBlogs(data.items))
    }, [])

    const blog = blogs.map( blog => {
      return <Blog key={blog.guid} blog={blog} />
    })

    return (
        <div className="container" id="blog">
          <h1>blog</h1>
          <div className="blogs-div">
            {blog}
          </div>
        </div>
    )
}