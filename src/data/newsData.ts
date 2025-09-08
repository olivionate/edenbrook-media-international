export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
  sourceUrl: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "How AI is Revolutionizing PR Strategies: Edenbrook Media's 2024 Insights",
    summary: "Our team explores how artificial intelligence is transforming public relations practices, from automated media monitoring to AI-powered content creation and audience analysis.",
    category: "PR & Communication",
    date: "2024-12-15",
    imageUrl: "/news/ai-pr-trends.jpg",
    sourceUrl: "#",
    readTime: "5 min read"
  },
  {
    id: "2", 
    title: "Digital PR Strategies That Drive Results: Our Proven Approach",
    summary: "Edenbrook Media shares cutting-edge digital PR strategies including influencer partnerships, data-driven storytelling, and integrated social media campaigns that deliver measurable results.",
    category: "Digital PR",
    date: "2024-12-10",
    imageUrl: "/news/digital-pr-storm.jpg",
    sourceUrl: "#",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "The Future of Corporate Communications: Edenbrook's 2025 Predictions",
    summary: "Our communications experts share insights on emerging trends including personalization, crisis management evolution, and the growing importance of brand authenticity in corporate messaging.",
    category: "PR & Marketing",
    date: "2024-12-08",
    imageUrl: "/news/pr-marketing-future.jpg",
    sourceUrl: "#",
    readTime: "6 min read"
  }
];

export const categories = [
  "All Categories",
  "PR & Communication", 
  "Digital PR",
  "PR & Marketing"
];