'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Search, Filter, Calendar, ExternalLink } from 'lucide-react';
import { useAuth } from '@/app/store/useAuth';

interface LikedItem {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  likedAt: string;
  category: string;
  readTime: string;
  url: string;
  likes: number;
  comments: number;
}

export default function LikedPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [likedItems, setLikedItems] = useState<LikedItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(true);

  const mockLikedItems: LikedItem[] = [
    {
      id: '1',
      title: 'The Future of Web Development',
      content:
        'Exploring the latest trends and technologies that are shaping the future of web development, including AI integration, serverless architectures, and modern frameworks.',
      author: 'Sarah Johnson',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      likedAt: '2024-03-15T14:30:00',
      category: 'Technology',
      readTime: '5 min read',
      url: 'https://example.com/future-web-dev',
      likes: 234,
      comments: 45,
    },
    {
      id: '2',
      title: 'Design Systems That Scale',
      content:
        'A comprehensive guide to building and maintaining design systems that can grow with your organization while maintaining consistency.',
      author: 'Mike Chen',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
      likedAt: '2024-03-14T11:15:00',
      category: 'Design',
      readTime: '8 min read',
      url: 'https://example.com/design-systems',
      likes: 189,
      comments: 32,
    },
    {
      id: '3',
      title: 'JavaScript Performance Optimization',
      content:
        'Learn advanced techniques to optimize JavaScript performance, including code splitting, lazy loading, and efficient memory management.',
      author: 'Alex Rivera',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      likedAt: '2024-03-13T16:45:00',
      category: 'Programming',
      readTime: '12 min read',
      url: 'https://example.com/js-optimization',
      likes: 567,
      comments: 89,
    },
    {
      id: '4',
      title: 'UX Research Methods',
      content:
        'Understanding different UX research methodologies and when to apply them for maximum impact on product development.',
      author: 'Emma Davis',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      likedAt: '2024-03-12T09:20:00',
      category: 'Design',
      readTime: '6 min read',
      url: 'https://example.com/ux-research',
      likes: 156,
      comments: 23,
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setLikedItems(mockLikedItems);
      setIsLoading(false);
    }, 1000);
  }, [isAuthenticated, router]);

  const categories = ['all', ...Array.from(new Set(likedItems.map((item) => item.category)))];

  const filteredAndSortedItems = likedItems
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.likedAt).getTime() - new Date(a.likedAt).getTime();
        case 'popular':
          return b.likes - a.likes;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleUnlike = (itemId: string) => {
    setLikedItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Liked Articles</h1>
          </div>
          <p className="text-gray-600">Articles and posts you've liked</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search liked articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAndSortedItems.length > 0 ? (
              filteredAndSortedItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {item.category}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{item.readTime}</span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-red-600 cursor-pointer">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                      </div>
                      <button
                        onClick={() => handleUnlike(item.id)}
                        className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title="Unlike">
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={item.authorAvatar}
                          alt={`${item.author}'s avatar`}
                          title={item.author}
                          className="h-8 w-8 rounded-full mr-3"
                        />
                        <div className="text-sm">
                          <p className="text-gray-900 font-medium">{item.author}</p>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(item.likedAt)}
                          </div>
                        </div>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-600 hover:underline flex items-center gap-1">
                        Read More <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center text-gray-500">No liked articles found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
