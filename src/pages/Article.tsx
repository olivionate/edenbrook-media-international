import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsArticles } from "@/data/newsData";
import { articlesContent } from "@/data/articleContent";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsArticles.find(a => a.id === id);
  const content = articlesContent[id || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20 pb-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Link to="/news-updates" className="text-blue-600 hover:text-blue-800">
              ← Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/news-updates" 
              className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
            >
              ← Back to News
            </Link>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
                
                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <time>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>By Edenbrook Media Team</span>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  ) : (
                    <div>
                      <p className="text-lg leading-relaxed mb-6">{article.summary}</p>
                      <p>This is a sample article content. The full article content would be displayed here with proper formatting, images, and comprehensive information about {article.title.toLowerCase()}.</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                    <p className="text-gray-600 mb-4">
                      Contact Edenbrook Media International today to discuss how we can help 
                      elevate your brand and achieve your communication goals.
                    </p>
                    <Link 
                      to="/#contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;