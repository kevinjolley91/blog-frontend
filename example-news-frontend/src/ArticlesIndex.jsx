/* eslint-disable react/prop-types */
export function ArticlesIndex(props) {
  return (
    <div key="articles-index">
      <h3>Here you go!</h3>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h4>{article.title}</h4>
          <h6>{article.author}</h6>
          <h6>{article.url}</h6>
          <br />
        </div>
      ))}
    </div>
  );
}
