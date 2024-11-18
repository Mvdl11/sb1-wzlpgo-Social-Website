import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'De Kracht van Video Content op Social Media in 2024',
    excerpt: 'Ontdek waarom video content essentieel is voor uw social media strategie en hoe u dit effectief kunt inzetten.',
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800',
    category: 'Trends',
    author: 'Emma de Vries',
    date: '8 maart 2024',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Instagram Algorithm: Updates & Tips voor 2024',
    excerpt: 'Een diepgaande analyse van de laatste Instagram algorithm updates en hoe u deze kunt gebruiken voor meer bereik.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
    category: 'Instagram',
    author: 'Sophie Bakker',
    date: '5 maart 2024',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'LinkedIn: Van Netwerken naar Lead Generatie',
    excerpt: 'Praktische strategieën om LinkedIn effectief in te zetten voor B2B lead generatie en personal branding.',
    image: 'https://images.unsplash.com/photo-1616469829581-73886d59bc73?auto=format&fit=crop&q=80&w=800',
    category: 'LinkedIn',
    author: 'Lisa van der Berg',
    date: '1 maart 2024',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Content Planning: De Complete Gids',
    excerpt: 'Een stap-voor-stap handleiding voor het creëren van een effectieve content planning strategie.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800',
    category: 'Strategie',
    author: 'Emma de Vries',
    date: '28 februari 2024',
    readTime: '8 min'
  },
  {
    id: 5,
    title: 'TikTok voor Bedrijven: Waar te Beginnen?',
    excerpt: 'Een beginnersgids voor bedrijven die willen starten met TikTok marketing en content creatie.',
    image: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?auto=format&fit=crop&q=80&w=800',
    category: 'TikTok',
    author: 'Sophie Bakker',
    date: '25 februari 2024',
    readTime: '6 min'
  },
  {
    id: 6,
    title: 'Social Media Crisis Management',
    excerpt: 'Hoe u voorbereid kunt zijn op en adequaat kunt reageren op social media crises.',
    image: 'https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?auto=format&fit=crop&q=80&w=800',
    category: 'Management',
    author: 'Lisa van der Berg',
    date: '22 februari 2024',
    readTime: '5 min'
  }
];

const categories = [
  'Alle Artikelen',
  'Trends',
  'Instagram',
  'LinkedIn',
  'TikTok',
  'Strategie',
  'Management'
];

export function BlogPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek de laatste trends, tips en strategieën op het gebied van 
              social media marketing
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Zoek artikelen..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-primary-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="relative isolate overflow-hidden bg-gray-900 rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
            alt="Featured article"
            className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/25" />
          <div className="relative mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold text-primary-400 backdrop-blur-sm">
                Uitgelicht Artikel
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Social Media Trends voor 2024
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Een complete analyse van de belangrijkste social media trends die uw strategie in 2024 zullen bepalen.
              </p>
              <div className="mt-6">
                <Link
                  to="/blog/social-media-trends-2024"
                  className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white hover:bg-primary-700"
                >
                  Lees Meer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.id}`} className="mt-2 block">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1.5 h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {post.readTime} leestijd
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Blijf op de hoogte
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-primary-200">
              Ontvang de laatste social media tips, trends en strategieën direct in uw inbox.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                E-mailadres
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
                placeholder="Uw e-mailadres"
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-800 px-5 py-3 text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Aanmelden
              </button>
            </form>
            <p className="mt-3 text-sm text-primary-200">
              We respecteren uw privacy. U kunt zich op elk moment uitschrijven.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}