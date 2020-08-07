import React, { Component } from 'react'

class Article extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      const { article } = this.props
      console.log('---', this.props)
      const body = <section>{article.text}</section>
      return (
         <div className="Hello" style={{ color: 'green' }}>
            <img src={article.avatar} alt="" />
            <h2 style={{ textTransform: 'uppercase' }}>{article.title}
               <button className="btnClose" onClick={handleClick}>Close</button></h2>
            {body}
            <h3>
               Дата створення: {(new Date).toDateString(article.date)}<br />
            Час створення: {(new Date).toTimeString(article.date)}
            </h3>
         </div>

      )
   }
}

function handleClick() {
   console.log('---', 'clicked')
}

export default Article