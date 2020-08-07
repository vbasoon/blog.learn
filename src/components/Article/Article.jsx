import React from 'react'

const Article = (props) => {
   const { article } = props
   const body = <section>{article.text}</section>
   return (
      <div className="Hello" style={{ color: 'green' }}>
         <img src={article.avatar} alt="" />
         <h1 style={{ textTransform: 'uppercase' }}>{article.title}</h1>
         {body}
         <h3>
            Дата створення: {(new Date).toDateString(article.date)}<br />
            Час створення: {(new Date).toTimeString(article.date)}
         </h3>
      </div>

   )
}

export default Article