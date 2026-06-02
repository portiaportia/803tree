import { useEffect, useState } from "react";
import { sanity } from "../lib/sanity";

const Education = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await sanity.fetch(`
  *[_type == "article"] {
    _id,
    title,
    excerpt,
    "slug": slug.current,
    publishedAt
  }
`);

        console.log("Sanity articles:", data);
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
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h1>Tree Care Education</h1>

        {loading && <p>Loading articles...</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}

        {!loading && !error && articles.length === 0 && <p>No articles found.</p>}

        {articles.map((article) => (
          <article
            key={article._id}
            style={{ padding: "24px 0", borderBottom: "1px solid #ddd" }}
          >
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;