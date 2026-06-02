// src/pages/Education.js

import { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";
import ArticleCard from "../components/article/ArticleCard";
import Hero from "../components/hero/Hero";
import "./css/Education.css";

const Education = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await sanity.fetch(`
          *[_type == "article"] | order(publishedAt desc) {
            _id,
            title,
            excerpt,
            "slug": slug.current,
            publishedAt,
            "category": category,
            "image": heroImage.asset->url
          }
        `);

        setArticles(data);
      } catch (err) {
        console.error("Sanity fetch error:", err);
        setError(err.message || "Could not load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Hero />
      <main className="education-page">
      <section className="education-hero">
        <div className="education-inner">
          <p className="education-eyebrow">Tree Care Education</p>

          <h1 className="education-title">Tree Care Education</h1>

          <p className="education-text">
            Expert tips, guides, and advice to help you keep your trees healthy,
            safe, and beautiful year-round.
          </p>
        </div>
      </section>

      <section className="education-listing">
        <div className="education-inner">
          {loading && <p className="education-status">Loading articles...</p>}
          {error && <p className="education-status error">{error}</p>}

          {!loading && !error && articles.length === 0 && (
            <p className="education-status">No articles found.</p>
          )}

          {articles.length > 0 && (
            <div className="education-grid">
              {articles.map((article) => (
                <ArticleCard
                  key={article._id}
                  title={article.title}
                  excerpt={article.excerpt}
                  image={article.image}
                  category={article.category}
                  slug={article.slug}
                  publishedAt={article.publishedAt}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
    </>
  );
};

export default Education;