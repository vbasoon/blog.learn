import React from 'react'
import ArticleList from './components/Article/ArticleList'
import articles from './data'



const App = () => {
   return (
      <div>
         <h1>App Name</h1>
         <ArticleList articles={articles} />
      </div>
   )
}

export default App