'use client';

import { useState, useEffect } from 'react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');
  const [activeSection, setActiveSection] = useState('introduction');

  const handleTabChange = (tab: 'privacy' | 'terms') => {
    setActiveTab(tab);
    if (tab === 'privacy') {
      setActiveSection('introduction');
      scrollToSection('introduction');
    } else {
      setActiveSection('agreement');
      scrollToSection('agreement');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeTab]);

  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='pt-32 px-6 md:px-40 py-12 md:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Tabs */}
          <div className='flex gap-8 border-b border-gray-800 mb-8'>
            <button
              onClick={() => handleTabChange('privacy')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'privacy'
                  ? 'text-white border-b-2 border-red-600'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleTabChange('terms')}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === 'terms'
                  ? 'text-white border-b-2 border-red-600'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Terms of Use
            </button>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Sidebar Navigation */}
            <aside className='lg:col-span-1'>
              <nav className='sticky top-24 space-y-6'>
                {activeTab === 'privacy' ? (
                  <>
                    <div>
                      <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>
                        Privacy Policy
                      </h3>
                      <ul className='space-y-2'>
                        {[
                          { id: 'introduction', label: 'Introduction' },
                          { id: 'data-collect', label: 'Data We Collect' },
                          { id: 'how-use', label: 'How We Use Data' },
                          { id: 'data-sharing', label: 'Data Sharing' },
                          { id: 'security', label: 'Security' },
                          { id: 'rights', label: 'Your Rights (NDPR)' },
                          { id: 'retention', label: 'Data Retention' },
                          { id: 'cookies', label: 'Cookies' },
                          { id: 'contact', label: 'Contact DPO' },
                        ].map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className={`text-sm transition-colors ${
                                activeSection === item.id
                                  ? 'text-red-600 font-medium'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>
                        Terms of Use
                      </h3>
                      <ul className='space-y-2'>
                        {[
                          { id: 'agreement', label: 'Agreement' },
                          { id: 'eligibility', label: 'Eligibility' },
                          { id: 'services', label: 'Our Services' },
                          { id: 'obligations', label: 'Account Obligations' },
                          { id: 'fees', label: 'Fees & Settlement' },
                          { id: 'prohibited', label: 'Prohibited Use' },
                          { id: 'ip', label: 'Intellectual Property' },
                          { id: 'liability', label: 'Limitation of Liability' },
                          { id: 'termination', label: 'Termination' },
                          { id: 'governing', label: 'Governing Law' },
                        ].map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className={`text-sm transition-colors ${
                                activeSection === item.id
                                  ? 'text-red-600 font-medium'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </nav>
            </aside>

            {/* Main Content */}
            <main className='lg:col-span-3'>
              {activeTab === 'privacy' ? (
                <div className='prose prose-invert max-w-none'>
                  <h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
                  <p className='text-gray-400 text-sm mb-8'>
                    Effective 1 January 2026 · Last updated: 1 May 2026 ·
                    Version 2.0
                  </p>

                  <section id='introduction' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      1. Introduction
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      9th Pay Ltd. ("9th Pay", "we", "our", or "us"), RC No.
                      9302012, a subsidiary of 9TH Tech Ltd, is committed to
                      protecting the privacy of everyone who uses our Smart POS
                      terminals, mobile application, merchant dashboard, and
                      related services (collectively, the "Platform").
                    </p>
                    <p className='text-gray-300 mb-4'>
                      This Policy explains how we collect, process, store,
                      share, and protect personal data in compliance with the
                      Nigeria Data Protection Regulation (NDPR) 2019, the
                      Nigeria Data Protection Act (NDPA) 2023, and applicable
                      CRIN guidelines.
                    </p>
                    <div className='bg-gray-900 border-l-4 border-red-600 p-4 my-6'>
                      <p className='text-gray-300'>
                        By accessing or using any part of the 9th Pay Platform,
                        you acknowledge you have read, understood, and agreed to
                        the practices described in this Privacy Policy.
                      </p>
                    </div>
                  </section>

                  <section id='data-collect' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      2. Data We Collect
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      We collect the following categories of personal data:
                    </p>
                    <ul className='space-y-3 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Identity Data:</strong> Full name, BVN, NIN,
                          date of birth, and government-issued ID documents.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Contact Data:</strong> Phone number, email
                          address, residential and business address.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Financial Data:</strong> Bank account details,
                          transaction history, wallet balances, settlement
                          records, and merchant revenue data.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Device & Technical Data:</strong> POS terminal
                          serial number, device ID, IP address, OS, app version,
                          and crash logs.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Usage Data:</strong> Transaction timestamps,
                          frequency, amounts, merchant category codes (MCC), and
                          feature usage patterns.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Location Data:</strong> GPS coordinates linked
                          to your terminal or app session (where permitted).
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>KYC Documentation:</strong> Passport
                          photographs, utility bills, CAC certificates (business
                          accounts), and related compliance documents.
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section id='how-use' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      3. How We Use Your Data
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      We process your personal data on lawful bases for the
                      following purposes:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Processing and settling payment transactions on your
                          behalf.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Conducting KYC/AML verification as required by CBN
                          regulations.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Providing 24/7 customer support, dispute resolution,
                          and chargeback management.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Detecting, preventing, and investigating fraud, money
                          laundering, and other financial crimes.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Improving our AI-driven routing engine and predicting
                          network downtime.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Sending transactional notifications, settlement
                          confirmations, and service alerts.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Complying with legal and regulatory obligations (CBN,
                          FIRS, EFCC, etc.).
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Conducting anonymised analytics to improve the
                          Platform.
                        </span>
                      </li>
                    </ul>
                  </section>

                  <section id='data-sharing' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      4. Data Sharing
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      We do not sell your personal data. We may share your data
                      with:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Payment Networks:</strong> NIBSS, UPSL, card
                          schemes (Verve, Visa, Mastercard) to process
                          transactions.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Regulators:</strong> CBN, NITDA, and law
                          enforcement when legally required.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Service Providers:</strong> Cloud hosting,
                          SMS/email delivery, identity verification partners —
                          all bound by data processing agreements.
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>9TH Tech Group Entities:</strong> For group
                          reporting and shared infrastructure under strict
                          confidentiality terms.
                        </div>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      All third parties receiving your data are contractually
                      obligated to protect it in accordance with NDPA standards.
                    </p>
                  </section>

                  <section id='security' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>5. Security</h2>
                    <p className='text-gray-300 mb-4'>
                      We have implemented the following technical and
                      organisational measures to protect your data:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          PCI-DSS Level 1 compliance — the highest global
                          standard for card data protection.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          AES-256 encryption for data at rest and TLS 1.3 for
                          data in transit.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Multi-factor authentication (MFA) for all
                          administrative system access.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Continuous 24/7 security monitoring, intrusion
                          detection, and incident response protocols.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Annual third-party penetration testing and independent
                          security audits.
                        </span>
                      </li>
                    </ul>
                    <div className='bg-gray-900 border-l-4 border-red-600 p-4 my-6'>
                      <p className='text-gray-300'>
                        In the event of a data breach likely to result in high
                        risk to your rights, we will notify the NDPC within 72
                        hours and affected individuals without undue delay.
                      </p>
                    </div>
                  </section>

                  <section id='rights' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      6. Your Rights Under the NDPA
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      As a data subject under Nigerian law, you have the right
                      to:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Access a copy of the personal data we hold about you.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Request correction of inaccurate or incomplete data.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Request erasure ("right to be forgotten") where
                          legally permissible.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Object to or restrict processing in certain
                          circumstances.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Data portability — receive your data in a structured,
                          machine-readable format.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Withdraw consent at any time where processing is
                          consent-based.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Lodge a complaint with the Nigeria Data Protection
                          Commission (NDPC).
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      To exercise any of these rights, contact our DPO at{' '}
                      <a
                        href='mailto:dpo@9thpay.com'
                        className='text-red-600 hover:text-red-500'
                      >
                        dpo@9thpay.com
                      </a>
                      . We will respond within 30 days.
                    </p>
                  </section>

                  <section id='retention' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      7. Data Retention
                    </h2>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Transaction records: minimum 7 years (CBN regulatory
                          requirement).
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          KYC/AML documentation: minimum 5 years from end of
                          business relationship.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Customer support records: 2 years from resolution.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Marketing data: until consent is withdrawn or opt-out
                          is exercised.
                        </span>
                      </li>
                    </ul>
                  </section>

                  <section id='cookies' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      8. Cookies & Tracking
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      Our web portal and mobile application use cookies and
                      similar tracking technologies to maintain sessions,
                      remember preferences, and analyse usage patterns. You may
                      control cookie preferences through your browser settings.
                      Disabling certain cookies may affect Platform
                      functionality.
                    </p>
                  </section>

                  <section id='contact' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      9. Contact Our DPO
                    </h2>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Data Protection Officer:</strong>{' '}
                          <a
                            href='mailto:dpo@9thpay.com'
                            className='text-red-600 hover:text-red-500'
                          >
                            dpo@9thpay.com
                          </a>
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>General Enquiries:</strong>{' '}
                          <a
                            href='mailto:hello@9thpay.com'
                            className='text-red-600 hover:text-red-500'
                          >
                            hello@9thpay.com
                          </a>
                        </div>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <div>
                          <strong>Address:</strong> Suite 301c, Bahamas Plaza,
                          1080 Joseph Gomwalk Street, Gugu, Abuja, Nigeria
                        </div>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-6'>
                      We may update this Privacy Policy from time to time.
                      Material changes will be communicated via email or in-app
                      notification at least 14 days before they take effect.
                    </p>
                  </section>
                </div>
              ) : (
                <div className='prose prose-invert max-w-none'>
                  <h1 className='text-4xl font-bold mb-4'>Terms of Use</h1>
                  <p className='text-gray-400 text-sm mb-8'>
                    Effective 1 January 2026 · Last updated: 1 May 2026 ·
                    Version 2.0
                  </p>

                  <section id='agreement' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      1. Agreement to Terms
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      These Terms of Use ("Terms") constitute a legally binding
                      agreement between you ("User", "Merchant", or "Agent") and
                      9th Pay Ltd. (RC No. 9302012), a subsidiary of 9TH Tech
                      Ltd., registered under CAMA in Nigeria.
                    </p>
                    <p className='text-gray-300 mb-4'>
                      By registering, accessing, or using the 9th Pay Platform —
                      including our Smart POS terminals, mobile application,
                      merchant portal, and API — you agree to be bound by these
                      Terms and our Privacy Policy.
                    </p>
                    <div className='bg-gray-900 border-l-4 border-red-600 p-4 my-6'>
                      <p className='text-gray-300'>
                        If you do not agree to these Terms, you must immediately
                        cease use of the Platform and return any 9th Pay
                        hardware to your assigned Relationship Manager.
                      </p>
                    </div>
                  </section>

                  <section id='eligibility' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      2. Eligibility
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      To use the 9th Pay Platform, you must:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>Be at least 18 years of age;</span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Have a valid BVN (Bank Verification Number) issued by
                          the CBN;
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Successfully complete our KYC/AML onboarding process.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Operate a legitimate business or service eligible
                          under CBN agency banking guidelines.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Not be on any financial sanctions list administered by
                          the NFIU, EFCC, OFAC, or the UN.
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      9th Pay reserves the right to decline, suspend, or
                      terminate any account that fails to meet eligibility
                      criteria at any time.
                    </p>
                  </section>

                  <section id='services' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      3. Our Services
                    </h2>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Smart POS terminal hardware (sold via one-time
                          purchase model).
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Payment acceptance: debit cards, bank transfers, QR
                          codes, and NFC/contactless.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Digital wallet with free inter-wallet transfers within
                          the 9th Pay ecosystem.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Agency banking services (deposits, withdrawals, bill
                          payments) where licensed.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Real-time transaction notifications and settlement
                          reporting.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          24/7 customer support via dedicated Relationship
                          Managers.
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      We reserve the right to modify, suspend, or discontinue
                      any feature of the Platform with reasonable notice, except
                      where required by law.
                    </p>
                  </section>

                  <section id='obligations' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      4. Account Obligations
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      You are responsible for:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Maintaining confidentiality of your PIN, passwords,
                          and security credentials.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Ensuring all information provided to 9th Pay is
                          accurate, current, and complete.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Immediately reporting any unauthorized access to your
                          account or POS terminal.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Keeping your POS terminal in good working condition
                          and reporting faults promptly.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Complying with all applicable CBN, FIRS, SCUML, and
                          other regulatory requirements relevant to your
                          business.
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      You must not share your credentials with any third party.
                      You are liable for all transactions initiated from your
                      account or terminal.
                    </p>
                  </section>

                  <section id='fees' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      5. Fees & Settlement
                    </h2>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          <strong>Withdrawal transactions:</strong> 0.5% of
                          transaction value, capped at ₦100 per transaction.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          <strong>Inter-wallet transfers:</strong> Free within
                          the 9th Pay ecosystem.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          <strong>Settlement:</strong> Instant — funds credited
                          to your wallet or bank account immediately upon
                          transaction confirmation.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          <strong>Hardware:</strong> One-time purchase as agreed
                          at onboarding. No recurring terminal rental fees.
                        </span>
                      </li>
                    </ul>
                    <p className='text-gray-300 mt-4'>
                      9th Pay reserves the right to revise its fee schedule with
                      at least 30 days notice before changes take effect.
                      Continued use after the effective date constitutes
                      acceptance of revised fees.
                    </p>
                  </section>

                  <section id='prohibited' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      6. Prohibited Use
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      You must not use the Platform to:
                    </p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Process transactions for unlawful goods, services, or
                          activities under Nigerian law.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Engage in money laundering, terrorist financing, or
                          AML/CFT violations.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Conduct fraudulent transactions, including chargeback
                          abuse or card-not-present fraud.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Circumvent, hack, or reverse-engineer any part of the
                          Platform's security infrastructure.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Operate as a sub-agent without 9th Pay's express
                          written consent.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Process transactions on behalf of sanctioned
                          individuals or entities.
                        </span>
                      </li>
                    </ul>
                    <div className='bg-gray-900 border-l-4 border-red-600 p-4 my-6'>
                      <p className='text-gray-300'>
                        Violations may result in immediate account suspension,
                        asset freeze, and referral to the EFCC, NFIU, or other
                        law enforcement agencies.
                      </p>
                    </div>
                  </section>

                  <section id='ip' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      7. Intellectual Property
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      All intellectual property rights in the 9th Pay Platform —
                      including the brand, logo, software, terminal firmware,
                      UI/UX design, API, and proprietary algorithms — are owned
                      by 9th Pay Ltd. and/or 9TH Tech Ltd.
                    </p>
                    <p className='text-gray-300 mb-4'>
                      You are granted a limited, non-exclusive, non-transferable
                      licence to use the Platform solely for your own business
                      operations in accordance with these Terms. You may not
                      reproduce, resell, sublicense, or create derivative works
                      from any part of the Platform without prior written
                      consent.
                    </p>
                  </section>

                  <section id='liability' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      8. Limitation of Liability
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      To the maximum extent permitted by Nigerian law, 9th Pay's
                      total liability to you for any claim shall not exceed the
                      total fees paid by you in the three months preceding the
                      claim.
                    </p>
                    <p className='text-gray-300 mb-4'>We are not liable for:</p>
                    <ul className='space-y-2 text-gray-300'>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Losses arising from third-party network downtime (we
                          maintain 99.9% uptime via dual-connectivity).
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Indirect, consequential, or punitive damages of any
                          kind.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Losses resulting from your failure to safeguard
                          account credentials.
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <span className='text-red-600 mr-3'>—</span>
                        <span>
                          Acts of God, government action, or other force majeure
                          events.
                        </span>
                      </li>
                    </ul>
                  </section>

                  <section id='termination' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      9. Termination
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      Either party may terminate this agreement by providing 30
                      days written notice. 9th Pay may terminate immediately if
                      you breach these Terms, engage in fraud, or become subject
                      to regulatory action.
                    </p>
                    <p className='text-gray-300 mb-4'>
                      Upon termination, outstanding settlement balances will be
                      remitted to your designated bank account within 5 working
                      days after deduction of any outstanding fees or
                      chargebacks. You must return all 9th Pay hardware in
                      working condition.
                    </p>
                  </section>

                  <section id='governing' className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>
                      10. Governing Law & Dispute Resolution
                    </h2>
                    <p className='text-gray-300 mb-4'>
                      These Terms are governed by the laws of the Federal
                      Republic of Nigeria. Any dispute shall first be submitted
                      to good-faith negotiation. If unresolved within 30 days,
                      it shall be referred to arbitration under the Arbitration
                      and Conciliation Act, with proceedings conducted in Lagos,
                      Nigeria.
                    </p>
                  </section>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
