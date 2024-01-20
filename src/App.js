//import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("India");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-19&apiKey=152d13a9110a431f914ecd3780c06323`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className='header'>
        <h1>Parso Tak</h1>
        <input type='text' onChange={(event) => {

          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("india")
          }
         
        }} placeholder='Search News' />
      </header>

      <section className='news-articles'>
        {

          articles.length!==0?

          articles.map((article) => {
            return (
              <News article={article} />
            );
          })
          :
          <h3>No News Found For Searched text</h3>
        }
      </section>
    </div>
  );
}

export default App;
