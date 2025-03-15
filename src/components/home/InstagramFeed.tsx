import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { fetchInstagramPosts, InstagramPost } from '@/lib/instagram';

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstagramPosts = async () => {
      try {
        const fetchedPosts = await fetchInstagramPosts();
        // Get the most recent 6 posts
        const recentPosts = [...fetchedPosts]
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 6);
        setPosts(recentPosts);
      } catch (error) {
        console.error('Error loading Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInstagramPosts();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">Our Instagram Gallery</h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest designs and collections showcased on our Instagram feed.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link 
                  href={post.permalink} 
                  key={post.id}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden elegant-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={post.media_url}
                      alt={post.caption || 'Instagram post'}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Instagram size={32} className="text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://www.instagram.com/jatinjewellershyd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-black hover:bg-black/90 text-gold font-medium uppercase tracking-wider text-sm transition-colors"
              >
                <Instagram size={20} />
                <span>View More on Instagram</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
} 