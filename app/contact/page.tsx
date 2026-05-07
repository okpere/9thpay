'use client';

import { useState } from 'react';

type InquiryType =
  | 'Agent Onboarding'
  | 'Partnership'
  | 'Technical Support'
  | 'Merchant Inquiry'
  | 'Other';

export default function ContactPage() {
  const [selectedType, setSelectedType] =
    useState<InquiryType>('Agent Onboarding');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    businessName: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, inquiryType: selectedType });
    // Handle form submission
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-black text-white'>

      {/* Hero Section */}
      <div
        className='relative pt-32 pb-16 px-4 sm:px-6 lg:px-8'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 1)), url("/images/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='max-w-7xl mx-auto'>
          <p className='text-red-600 text-sm font-medium mb-4 tracking-wider'>
            — GET IN TOUCH
          </p>
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            Let's talk
            <br />
            <span className='text-red-600'>business.</span>
          </h1>
          <p className='text-gray-400 max-w-xl text-lg'>
            Whether you're looking to onboard as an agent, explore partnerships,
            or just need support — we're here 24/7 and ready to move fast.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Form Section */}
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-semibold mb-6'>SEND US A MESSAGE</h2>

            {/* Inquiry Type Tabs */}
            <div className='flex flex-wrap gap-3 mb-8'>
              {(
                [
                  'Agent Onboarding',
                  'Partnership',
                  'Technical Support',
                  'Merchant Inquiry',
                  'Other',
                ] as InquiryType[]
              ).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-400 mb-2'>
                    FIRST NAME
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder='Sharafadeen'
                    className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-400 mb-2'>
                    LAST NAME
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder='Mubarak'
                    className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors'
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-400 mb-2'>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='mubarak@example.com'
                    className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-400 mb-2'>
                    PHONE NUMBER
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='+234 800 000 0000'
                    className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors'
                    required
                  />
                </div>
              </div>

              {/* State/Location */}
              <div>
                <label className='block text-sm font-medium text-gray-400 mb-2'>
                  STATE / LOCATION
                </label>
                <select
                  name='state'
                  value={formData.state}
                  onChange={handleInputChange}
                  className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-red-600 transition-colors'
                  required
                >
                  <option value=''>Select your state</option>
                  <option value='Abia'>Abia</option>
                  <option value='Adamawa'>Adamawa</option>
                  <option value='Akwa Ibom'>Akwa Ibom</option>
                  <option value='Anambra'>Anambra</option>
                  <option value='Bauchi'>Bauchi</option>
                  <option value='Bayelsa'>Bayelsa</option>
                  <option value='Benue'>Benue</option>
                  <option value='Borno'>Borno</option>
                  <option value='Cross River'>Cross River</option>
                  <option value='Delta'>Delta</option>
                  <option value='Ebonyi'>Ebonyi</option>
                  <option value='Edo'>Edo</option>
                  <option value='Ekiti'>Ekiti</option>
                  <option value='Enugu'>Enugu</option>
                  <option value='FCT'>FCT</option>
                  <option value='Gombe'>Gombe</option>
                  <option value='Imo'>Imo</option>
                  <option value='Jigawa'>Jigawa</option>
                  <option value='Kaduna'>Kaduna</option>
                  <option value='Kano'>Kano</option>
                  <option value='Katsina'>Katsina</option>
                  <option value='Kebbi'>Kebbi</option>
                  <option value='Kogi'>Kogi</option>
                  <option value='Kwara'>Kwara</option>
                  <option value='Lagos'>Lagos</option>
                  <option value='Nasarawa'>Nasarawa</option>
                  <option value='Niger'>Niger</option>
                  <option value='Ogun'>Ogun</option>
                  <option value='Ondo'>Ondo</option>
                  <option value='Osun'>Osun</option>
                  <option value='Oyo'>Oyo</option>
                  <option value='Plateau'>Plateau</option>
                  <option value='Rivers'>Rivers</option>
                  <option value='Sokoto'>Sokoto</option>
                  <option value='Taraba'>Taraba</option>
                  <option value='Yobe'>Yobe</option>
                  <option value='Zamfara'>Zamfara</option>
                </select>
              </div>

              {/* Business Name */}
              <div>
                <label className='block text-sm font-medium text-gray-400 mb-2'>
                  BUSINESS / ORGANISATION NAME{' '}
                  <span className='text-gray-600'>(OPTIONAL)</span>
                </label>
                <input
                  type='text'
                  name='businessName'
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder='Your business name'
                  className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors'
                />
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-medium text-gray-400 mb-2'>
                  MESSAGE
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Tell us how we can help you...'
                  rows={6}
                  className='w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors resize-none'
                  required
                />
                <p className='text-gray-600 text-sm mt-2'>
                  Be as specific as you can — it helps us respond faster.
                </p>
              </div>

              {/* Submit Button */}
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-opacity inline-flex items-center gap-2'
                >
                  Send Message
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </button>
                <p className='text-sm text-gray-400'>
                  We typically respond within <br />
                  <span className='text-red-600 font-semibold'>
                    2 hours
                  </span>{' '}
                  during business hours.
                </p>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className='lg:col-span-1 space-y-8'>
            {/* Direct Channels */}
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase mb-6'>
                DIRECT CHANNELS
              </h3>
              <div className='space-y-4'>
                <div className='bg-gray-900 rounded-lg p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-red-600/20 rounded-full p-3'>
                      <svg
                        className='w-6 h-6 text-red-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-gray-500 text-xs uppercase mb-1'>
                        EMAIL
                      </p>
                      <a
                        href='mailto:hello@9thpay.com'
                        className='text-white font-medium hover:text-red-600 transition-colors'
                      >
                        hello@9thpay.com
                      </a>
                      <p className='text-gray-500 text-sm mt-1'>
                        General enquiries & support
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-gray-900 rounded-lg p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-blue-600/20 rounded-full p-3'>
                      <svg
                        className='w-6 h-6 text-blue-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-gray-500 text-xs uppercase mb-1'>
                        WEBSITE
                      </p>
                      <a
                        href='https://www.9thpay.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white font-medium hover:text-red-600 transition-colors'
                      >
                        www.9thpay.com
                      </a>
                      <p className='text-gray-500 text-sm mt-1'>
                        Agent portal & onboarding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase mb-6'>
                SUPPORT HOURS
              </h3>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-400'>Monday – Friday</span>
                  <span className='text-orange-500 font-semibold'>
                    24 / 7 Live
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-400'>Saturday</span>
                  <span className='text-orange-500 font-semibold'>
                    24 / 7 Live
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-400'>Sunday & Holidays</span>
                  <span className='text-orange-500 font-semibold'>
                    24 / 7 Live
                  </span>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div>
              <h3 className='text-sm font-semibold text-gray-500 uppercase mb-6'>
                HEAD OFFICE
              </h3>
              <div className='bg-gray-900 rounded-lg p-6'>
                <h4 className='font-semibold mb-4'>9th Pay Ltd — Abuja HQ</h4>
                <p className='text-gray-400 mb-4 leading-relaxed'>
                  Suite 301c, Bahamas Plaza,
                  <br />
                  1080 Joseph Gomwalk Street,
                  <br />
                  Gugu, Abuja, Nigeria
                </p>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 bg-red-600 rounded-full animate-pulse'></div>
                  <span className='text-red-600 text-sm font-medium'>
                    Active Office
                  </span>
                </div>
              </div>
            </div>

            {/* Legal Info */}
            <div className='bg-gray-900 rounded-lg p-6 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-6 h-6 text-gray-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z'
                    clipRule='evenodd'
                  />
                </svg>
                <div>
                  <p className='text-xs text-gray-500'>Incorporated</p>
                  <p className='text-sm font-medium'>RC NO. 9302102</p>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-xs text-gray-500'>CAC</p>
                <p className='text-sm font-medium'>Registered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
