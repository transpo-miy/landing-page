import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content');
  
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function MarkdownPage({ params }: Props) {
  const { slug } = await params;
  
  try {
    const filePath = path.join(process.cwd(), 'src/content', `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      notFound();
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return (
      <main className="relative min-h-screen font-sans flex flex-col">
        <AnimatedBackground />
        <Navbar />
        
        <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-32 mt-16 text-white md:px-12 z-10">
          <div className="w-full bg-gradient-to-br from-[#4A2B14]/95 to-[#3B2210]/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 md:p-12 lg:p-16 border border-white/5 relative overflow-hidden">
            {frontmatter.lastUpdated && (
              <p className="text-sm text-brand-orange mb-10 font-bold uppercase tracking-widest">
                Last Updated: {frontmatter.lastUpdated}
              </p>
            )}
            
            <div className="max-w-none text-white/90 font-sans">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="font-calistoga text-3xl md:text-5xl text-white font-bold mb-8 mt-4 leading-tight" {...props} />,
                  h2: ({node, ...props}) => <h2 className="font-calistoga text-2xl md:text-3xl text-brand-yellow font-bold mb-4 mt-12 leading-tight" {...props} />,
                  h3: ({node, ...props}) => <h3 className="font-calistoga text-xl md:text-2xl text-white font-bold mb-3 mt-8" {...props} />,
                  p: ({node, ...props}) => <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 text-white/80 text-lg leading-relaxed mb-6 space-y-2 font-medium" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 text-white/80 text-lg leading-relaxed mb-6 space-y-2 font-medium" {...props} />,
                  li: ({node, ...props}) => <li className="pl-2" {...props} />,
                  a: ({node, ...props}) => <a className="text-brand-orange hover:text-brand-yellow underline transition-colors cursor-pointer" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-brand-orange pl-4 italic text-white/70 my-6" {...props} />
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  } catch (error) {
    notFound();
  }
}
