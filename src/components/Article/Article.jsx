import React, { Component } from 'react'
import ArticleList from './ArticleList'
class Article extends Component {
   state = {
      isOpen: true
   }
   // this.handleClick = handleClick.bind(this)


   render() {
      const { article } = this.props
      const body = this.state.isOpen && <section>{article.text}</section>
      return (
         <div className="Hello" style={{ color: 'green' }}>
            <img src={article.avatar} alt="" />
            <h2 style={{ textTransform: 'uppercase' }}>{article.title}
               <button className="btnClose" onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button></h2>
            {body}
            <h3>
               Дата створення: {(new Date).toDateString(article.date)}<br />
            Час створення: {(new Date).toTimeString(article.date)}
            </h3>
         </div>
      )
   }


   handleClick = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
}

export default Article