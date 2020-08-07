import React from 'react'
import Article from './components/Article/Article'
import articles from './data'



const App = () => {
   return (
      <div>
         <h1>App Name</h1>
         <Article article={articles[0]} />
      </div>
   )
}

export default App