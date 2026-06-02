// src/components/Article/ArticleCard.js

import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({
  title,
  excerpt,
  image,
  category,
  slug,
  publishedAt,
}) => {
  return (
    <article className="article-card">
      <div className="article-card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="article-card-image-fallback" />
        )}
      </div>

      <div className="article-card-content">
        {category && (
          <p className="article-card-category">{category}</p>
        )}

        <h3 className="article-card-title">{title}</h3>

        <p className="article-card-excerpt">{excerpt}</p>

        <div className="article-card-footer">
          {publishedAt && (
            <span className="article-card-date">
              {new Date(publishedAt).toLocaleDateString()}
            </span>
          )}

          {slug && (
            <Link to={`/education/${slug}`} className="article-card-link">
              Read More →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;