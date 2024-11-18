import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Mail, Phone } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
};

export function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Hier zou de logica komen om het formulier te verwerken
    alert('Bedankt voor uw aanvraag! We nemen zo spoedig mogelijk contact met u op.');
  };

  return (
    <main className="flex-grow">
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Plan Uw Gratis Adviesgesprek
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Vul het formulier in en ontdek hoe wij uw social media aanwezigheid kunnen versterken
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Naam
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Naam is verplicht" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mailadres
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "E-mailadres is verplicht",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ongeldig e-mailadres"
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  {...register("company", { required: "Bedrijfsnaam is verplicht" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "Telefoonnummer is verplicht" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                    Voorkeursdatum
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="date"
                      {...register("preferredDate", { required: "Datum is verplicht" })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                    Voorkeurstijd
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="time"
                      {...register("preferredTime", { required: "Tijd is verplicht" })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                    <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Uw bericht (optioneel)
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Plan Adviesgesprek
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-primary-600" />
              <span className="ml-3 text-gray-600">+31 (0)20 123 4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-primary-600" />
              <span className="ml-3 text-gray-600">contact@socialpro.nl</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}