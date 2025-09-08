import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogsData";
import { blogContents } from "@/data/blogContent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "../styles/article.css";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  const blog = blogPosts.find(b => b.id === id);
  const content = blogContents[id || ""];
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/blogs">
                <Button>Back to Blogs</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Blog Header */}
        <section className="bg-gradient-to-r from-brand-orange/5 to-brand-purple/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blogs
              </Link>
              
              <Badge variant="secondary" className="mb-4">
                {blog.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {blog.summary}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&crop=center`;
                }}
              />
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
                {content ? (
                  <div 
                    className="article-content"
                    dangerouslySetInnerHTML={{ 
                      __html: content.content
                    }}
                  />
                ) : (
                  <div className="bg-muted/30 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">Full Blog Content Coming Soon</h2>
                    <p className="text-muted-foreground mb-6">
                      We're currently developing the complete content for this blog post. 
                      The summary above provides key insights, and the full detailed article will be available shortly.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For immediate inquiries about this topic, please contact our team directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Blogs */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(b => b.category === blog.category && b.id !== blog.id)
                  .slice(0, 4)
                  .map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      to={`/blogs/${relatedBlog.id}`}
                      className="block bg-background rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <Badge variant="outline" className="mb-2">
                        {relatedBlog.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedBlog.summary}
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span>{formatDate(relatedBlog.date)}</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>
                    </Link>
                  ))}
              </div>
              
              {blogPosts.filter(b => b.category === blog.category && b.id !== blog.id).length === 0 && (
                <p className="text-muted-foreground">No related blog posts found in this category.</p>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-brand-orange to-brand-purple py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
              <p className="text-xl mb-8 opacity-90">
                Get in touch with our experts to discuss how these insights can help your business
              </p>
              <Link to="/#contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;