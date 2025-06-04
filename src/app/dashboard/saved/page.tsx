'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bookmark, Search, Filter, Calendar, Tag } from 'lucide-react';
import { useAuth } from '@/app/store/useAuth';

interface SavedItem {
  id: string;
  title: string;
  description: string;
  url: string;
  savedAt: string;
  category: string;
  tags: string[];
  thumbnail?: string;
}

export default function SavedPage() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with actual API call
  const mockSavedItems: SavedItem[] = [
    {
      id: '1',
      title: 'React Best Practices 2024',
      description: 'A comprehensive guide to modern React development patterns and best practices.',
      url: 'https://example.com/react-practices',
      savedAt: '2024-03-15T10:30:00',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Frontend'],
      thumbnail: 'https://via.placeholder.com/300x200?text=React',
    },
    {
      id: '2',
      title: 'UI/UX Design Trends',
      description: 'Latest trends in user interface and user experience design for 2024.',
      url: 'https://example.com/ui-trends',
      savedAt: '2024-03-14T15:45:00',
      category: 'Design',
      tags: ['UI', 'UX', 'Design', 'Trends'],
      thumbnail: 'https://via.placeholder.com/300x200?text=Design',
    },
    {
      id: '3',
      title: 'Next.js 14 Features',
      description: 'Exploring the new features and improvements in Next.js 14.',
      url: 'https://example.com/nextjs-14',
      savedAt: '2024-03-13T09:20:00',
      category: 'Development',
      tags: ['Next.js', 'React', 'Framework'],
      thumbnail: 'https://via.placeholder.com/300x200?text=Next.js',
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }

    // Simulate loading saved items
    setTimeout(() => {
      setSavedItems(mockSavedItems);
      setIsLoading(false);
    }, 1000);
  }, [isAuthenticated, router]);

  const categories = ['all', ...Array.from(new Set(savedItems.map((item) => item.category)))];

  const filteredItems = savedItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Bookmark className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Saved Items</h1>
          </div>
          <p className="text-gray-600">Your bookmarked articles and resources</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search saved items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Saved Items Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <Bookmark className="h-5 w-5 text-blue-600 flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(item.savedAt)}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-xs text-gray-500">+{item.tags.length - 3} more</span>
                      )}
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Open Article
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No saved items found</h3>
                <p className="text-gray-500">
                  {searchTerm || selectedCategory !== 'all'
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Start saving articles and resources to see them here.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
