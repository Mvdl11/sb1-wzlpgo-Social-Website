import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';

const caseStudies = [
  {
    name: 'Healthy Foods BV',
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    description: 'Een biologisch voedselmerk dat hun online aanwezigheid wilde versterken.',
    results: [
      { label: 'Volgers Groei', value: '+280%' },
      { label: 'Engagement Rate', value: '5.8%' },
      { label: 'Website Traffic', value: '+165%' }
    ],
    tags: ['Instagram', 'Facebook', 'Content Creatie']
  },
  {
    name: 'FitLife Studio',
    category: 'Fitness & Wellness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    description: 'Een boutique fitnessstudio die hun ledenaantal wilde verhogen.',
    results: [
      { label: 'Nieuwe Leden', value: '+120' },
      { label: 'ROI', value: '320%' },
      { label: 'Lead Conversie', value: '12%' }
    ],
    tags: ['Instagram', 'TikTok', 'Advertising']
  },
  {
    name: 'Urban Style',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600',
    description: 'Een opkomend kledingmerk dat hun online verkoop wilde boosten.',
    results: [
      { label: 'Online Verkoop', value: '+210%' },
      { label: 'Social Traffic', value: '+345%' },
      { label: 'Brand Mentions', value: '+180%' }
    ],
    tags: ['Instagram', 'Pinterest', 'Influencer Marketing']
  },
  {
    name: 'Tech Innovators',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    description: 'Een B2B tech bedrijf op zoek naar kwalitatieve leads.',
    results: [
      { label: 'B2B Leads', value: '+85' },
      { label: 'Engagement', value: '+240%' },
      { label: 'Conversie Rate', value: '4.2%' }
    ],
    tags: ['LinkedIn', 'Twitter', 'Content Marketing']
  }
];

const stats = [
  { id: 1, name: 'Succesvolle Projecten', value: '100+' },
  { id: 2, name: 'Gemiddelde ROI', value: '280%' },
  { id: 3, name: 'Tevreden Klanten', value: '95%' },
  { id: 4, name: 'Awards Gewonnen', value: '12' },
];

export function PortfolioPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Onze Succesverhalen
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Ontdek hoe wij merken hebben geholpen hun social media doelen te bereiken en 
              betekenisvolle resultaten te behalen
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="aspect-h-9 aspect-w-16 relative">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-primary-600">
                        {study.category}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                        {study.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{study.description}</p>
                  
                  {/* Results Grid */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <p className="text-2xl font-bold text-primary-600">{result.value}</p>
                        <p className="text-sm text-gray-600">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Overview */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meetbare Resultaten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Onze aanpak leidt tot concrete, meetbare verbeteringen voor onze klanten
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: 'Groei in Bereik',
                description: 'Gemiddeld 200% toename in organisch bereik binnen 6 maanden.'
              },
              {
                icon: Users,
                title: 'Engagement Verbetering',
                description: 'Gemiddeld 180% stijging in engagement rate across platforms.'
              },
              {
                icon: BarChart3,
                title: 'ROI Maximalisatie',
                description: 'Gemiddelde ROI van 280% op social media advertising spend.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Klaar om uw succesverhaal te schrijven?</span>
            <span className="block text-primary-200">Start vandaag nog met uw social media transformatie.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-primary-50"
            >
              Plan een Gratis Adviesgesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}