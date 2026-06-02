// src/components/ArticleHelp/ArticleHelp.js

import "./ArticleHelp.css";

const ArticleHelp = () => {
  return (
    <div className="article-help">
      <h2 className="article-help-title">
        Need help with your trees?
      </h2>

      <p className="article-help-text">
        803Tree offers tree removal, trimming,
        stump grinding, emergency service, and more.
      </p>

      <a href="/#estimate" className="article-help-button">
        Get a Free Estimate
      </a>
    </div>
  );
};

export default ArticleHelp;