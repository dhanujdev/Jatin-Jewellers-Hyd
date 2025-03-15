import React from 'react';

// In Next.js 15, layout components also need to handle async params
export default function Layout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  return children;
} 