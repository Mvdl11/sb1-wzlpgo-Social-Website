import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Rocket, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="object-cover object-center"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Team working together"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ons Verhaal
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  SocialPro begon als een droom van drie creatieve vriendinnen met een passie voor social media en digitale marketing. In 2020, tijdens een brainstormsessie in een klein Amsterdams koffietentje, ontstond het idee om social media beheer naar een hoger niveau te tillen.
                </p>
                <p className="text-lg">
                  We zagen dat veel bedrijven worstelden met hun online aanwezigheid - te veel platforms, te weinig strategie, en vooral: te weinig resultaat. Met onze achtergrond in growth strategy en engagement optimization, wisten we dat het anders kon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Onze Aanpak
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We geloven in de kracht van eenvoud en doelgerichtheid
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Persoonlijke Aanpak
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Elk merk is uniek, en dat vraagt om een unieke strategie. We nemen de tijd om uw verhaal te begrijpen en te vertellen.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Gestroomlijnd Proces
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Onze minimalistische aanpak zorgt voor rust en overzicht. Geen onnodige complexiteit, wel maximaal resultaat.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Betrokken Team
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We zijn meer dan een bureau - we zijn uw partner in groei, altijd bereikbaar en betrokken bij uw succes.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ons Onboarding Proces
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              In vier simpele stappen naar een effectieve social media strategie
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {[
                {
                  step: '01',
                  title: 'Kennismaking',
                  description: 'We leren uw bedrijf kennen tijdens een vrijblijvend adviesgesprek.',
                },
                {
                  step: '02',
                  title: 'Strategie',
                  description: 'We ontwikkelen een op maat gemaakte social media strategie.',
                },
                {
                  step: '03',
                  title: 'Implementatie',
                  description: 'We zetten de strategie om in concrete acties en content.',
                },
                {
                  step: '04',
                  title: 'Optimalisatie',
                  description: 'Continue monitoring en verbetering van resultaten.',
                },
              ].map((item) => (
                <div key={item.step} className="relative flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-lg font-semibold text-white">{item.step}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Klaar om te beginnen?</span>
            <span className="block text-primary-200">Plan direct uw gratis adviesgesprek.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Plan Adviesgesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}