export default  function News(props)
{

    console.log(props);
  return(
    <div className="news">
       
    <div className="news-img">

        {
            props.article.urlToImage!==null?
            <img src= {props.article.urlToImage}/>:
            <img src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="/>
        }

      

    </div>

    <h1>{props.article.title}</h1>

    <p>{props.article.description?.substring(0,100).concat("...")}<a href= {props.article.url} target='_blank'>Read more</a></p>

    

    

    <div className="source">
        <p> Author: {props.article.author}</p>

        <p>{props.article.source.name}</p>

    </div>

    </div>
  )
}