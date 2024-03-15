import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    
    return (
    <main>
        {posts.map((post,i)=>{
            
            return(

            <Article
            title={post.title}
            date={post.date}
            preview={post.preview}
            key={i} />
            

            )
            
        })}
    </main>
  )
}

export default ArticleList