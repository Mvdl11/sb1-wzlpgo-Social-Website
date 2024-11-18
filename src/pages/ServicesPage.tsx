import React from 'react';
import { Link } from 'react-router-dom';
import {
  PenTool,
  MessageSquare,
  BarChart3,
  Target,
  Camera,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ServicesPage() {
  const mainServices = [
    {
      icon: PenTool,
      title: 'Content Creatie',
      description: 'Van pakkende teksten tot visueel aantrekkelijke beelden - wij creëren content die resoneert met uw doelgroep.',
      features: [
        'Professionele fotografie en videoproductie',
        'Copywriting en storytelling',
        'Grafisch ontwerp en branded content',
        'Instagram Reels en TikTok video\'s',
        'Carousel posts en infographics',
        'Blog artikelen en nieuwsbrieven'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Community Management',
      description: 'Bouw een betrokken community op en versterk de band met uw volgers door betekenisvolle interacties.',
      features: [
        'Proactief community beheer',
        'Reacties en DM management',
        'Crisis communicatie',
        'Influencer outreach',
        'Hashtag strategie',
        'Engagement campagnes'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analyse & Rapportage',
      description: 'Data-gedreven inzichten om uw social media strategie continu te optimaliseren en ROI te maximaliseren.',
      features: [
        'Maandelijkse performance rapportages',
        'Concurrent analyse',
        'Doelgroep inzichten',
        'ROI tracking',
        'A/B testing',
        'Trend analyses'
      ]
    },
    {
      icon: Target,
      title: 'Social Advertising',
      description: 'Doelgerichte advertentiecampagnes die uw ideale klanten bereiken en conversies stimuleren.',
      features: [
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'TikTok Advertising',
        'Retargeting campagnes',
        'Lookalike audiences',
        'Performance optimalisatie'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: 'Content Dagen',
      description: 'Professionele fotografie en videoproductie op locatie voor een maand aan content.'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Audit',
      description: 'Grondige analyse van uw huidige social media prestaties met concrete verbeterpunten.'
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategische samenwerkingen met relevante influencers in uw branche.'
    },
    {
      icon: Zap,
      title: 'Training & Workshops',
      description: 'Praktische trainingen voor uw team om social media skills te verbeteren.'
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Onze Diensten
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Van strategie tot uitvoering - wij bieden alle expertise die u nodig heeft voor een 
              succesvolle social media aanwezigheid
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {mainServices.map((service) => (
              <div key={service.title} className="relative">
                <div className="absolute -inset-y-2 -inset-x-4 scale-95 bg-primary-50/50 rounded-2xl blur-sm transform rotate-1 transition-all group-hover:rotate-2"></div>
                <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Aanvullende Diensten
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Extra ondersteuning voor specifieke behoeften
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="relative group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Klaar om uw social media naar het volgende niveau te tillen?</span>
            <span className="block text-primary-200">Ontdek wat wij voor u kunnen betekenen.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
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