import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 299,
    description: 'Ideaal voor kleine bedrijven of startups die een basis social media aanwezigheid zoeken.',
    features: [
      'Beheer van 1 platform (keuze uit Instagram, Facebook of LinkedIn)',
      '8 posts per maand met hoogwaardige afbeeldingen',
      'Basis hashtag onderzoek',
      'Content planning en posting via professionele tools',
      'Reageren op max. 10 comments/berichten per week',
      'Maandelijks prestatierapport'
    ],
  },
  {
    name: 'Growth',
    price: 499,
    description: 'Perfect voor bedrijven die hun zichtbaarheid en engagement willen verbeteren.',
    popular: true,
    features: [
      'Beheer van 2 platforms',
      '12 posts per maand met custom designs',
      'Korte videoclips en optimalisatie',
      'Wekelijkse content kalender ter goedkeuring',
      'Reageren op max. 20 interacties per week',
      'Beheer van promoted posts (€50 ad spend niet inbegrepen)',
      'Uitgebreid maandrapport met aanbevelingen'
    ],
  },
  {
    name: 'Pro',
    price: 799,
    description: 'Voor bedrijven die volgers willen omzetten naar klanten.',
    features: [
      'Beheer van 3 platforms',
      '20 posts per maand inclusief Reels/Stories',
      'Geavanceerde graphics en carousels',
      'Op maat gemaakte hashtag en SEO strategie',
      'Dagelijkse moderatie van comments en DMs',
      'Ad management (€100 ad spend niet inbegrepen)',
      'Maandelijkse analyse met actieplannen'
    ],
  },
  {
    name: 'Premium',
    price: 1199,
    description: 'Compleet pakket voor bedrijven die serieus willen opschalen.',
    features: [
      'Beheer van 4 platforms',
      'Onbeperkt aantal posts per maand',
      'Professionele foto en video content',
      'Kwartaal strategie en concurrent analyse',
      'Volledig engagement beheer',
      'A/B testing campagnes (€250 ad spend niet inbegrepen)',
      'Tweewekelijkse ROI rapportage'
    ],
  },
];

const addons = [
  { name: 'Social Media Audit', price: 99, type: 'eenmalig' },
  { name: 'Custom Video Productie', price: 250, type: 'per video' },
  { name: 'Influencer Marketing Setup', price: 199, type: 'per maand' },
];

export function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparante Prijzen
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kies het perfecte pakket voor uw bedrijf
          </p>
        </div>
        
        {/* Main pricing tiers */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.popular ? 'ring-2 ring-primary-600' : ''
              }`}
            >
              <div>
                {tier.popular && (
                  <div className="inline-flex items-center rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold text-primary-600 mb-4">
                    Meest Gekozen
                  </div>
                )}
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    €{tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/maand</span>
                </p>
                <ul role="list" className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      <span className="text-sm leading-6 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/contact"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                    : 'bg-gray-50 text-primary-600 hover:bg-gray-100'
                }`}
              >
                Start Nu
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Extra Diensten
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-2xl bg-gray-50 p-8 text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900">{addon.name}</h4>
                <p className="mt-4">
                  <span className="text-3xl font-bold tracking-tight text-gray-900">
                    €{addon.price}
                  </span>
                  <span className="text-sm text-gray-600"> /{addon.type}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Waarom Voor Ons Kiezen?
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Betaalbare Prijzen</h4>
              <p className="mt-2 text-gray-600">Ontworpen voor startups en kleine bedrijven</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Transparante Service</h4>
              <p className="mt-2 text-gray-600">Duidelijke deliverables met meetbare resultaten</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Schaalbaar</h4>
              <p className="mt-2 text-gray-600">Groei uw services mee met uw bedrijf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}