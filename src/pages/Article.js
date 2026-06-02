// src/pages/Article.js

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { sanity } from "../lib/sanity";
import ArticleHelp from "../components/articlehelp/ArticleHelp";
import "./css/Article.css";

const Article = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await sanity.fetch(
          `*[_type == "article" && slug.current == $slug][0]{
            _id,
            title,
            excerpt,
            publishedAt,
            category,
            "image": heroImage.asset->url,
            body
          }`,
          { slug }
        );

        if (!data) {
          setError("Article not found.");
        } else {
          setArticle(data);
        }
      } catch (err) {
        console.error("Sanity fetch error:", err);
        setError(err.message || "Could not load article.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <main className="article-page">
        <section className="article-inner">
          <p className="article-status">Loading article...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="article-page">
        <section className="article-inner">
          <p className="article-status error">{error}</p>
          <Link to="/education" className="article-back">
            ← Back to Education
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="article-page">
      <section className="article-hero">
        <div className="article-inner">
          <Link to="/education" className="article-back">
            ← Back to Education
          </Link>

          {article.category && (
            <p className="article-category">{article.category}</p>
          )}

          <h1 className="article-title">{article.title}</h1>

          {article.excerpt && (
            <p className="article-excerpt">{article.excerpt}</p>
          )}

          {article.publishedAt && (
            <p className="article-date">
              Published{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </section>

      <section className="article-content-section">
        <div className="article-inner">
          {article.image && (
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div className="article-body">
            <PortableText value={article.body} />
          </div>

          <ArticleHelp />
        </div>
      </section>
    </main>
  );
};

export default Article;