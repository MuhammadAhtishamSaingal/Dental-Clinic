import React from 'react';

interface SchemaProps {
  type: 'LocalBusiness' | 'MedicalClinic' | 'FAQPage' | 'BlogPosting';
  data: Record<string, any>;
}

export default function JsonLdSchema({ type, data }: SchemaProps) {
  let schemaData: Record<string, any> = {};

  const baseClinic = {
    '@context': 'https://schema.org',
    '@name': 'Premium Dental Clinic',
    'image': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    'telephone': '+1-800-555-0199',
    'email': 'appointments@premiumdental.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Medical Plaza, Suite 400',
      'addressLocality': 'New York',
      'addressRegion': 'NY',
      'postalCode': '10016',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '40.748440',
      'longitude': '-73.985664'
    },
    'url': 'https://premiumdental.com',
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '09:00',
        'closes': '14:00'
      }
    ]
  };

  if (type === 'LocalBusiness' || type === 'MedicalClinic') {
    schemaData = {
      '@type': type,
      ...baseClinic,
      ...data,
    };
  } else if (type === 'FAQPage') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': data.faqs.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
  } else if (type === 'BlogPosting') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': data.title,
      'image': data.imageUrl,
      'datePublished': data.datePublished || new Date().toISOString(),
      'author': {
        '@type': 'Person',
        'name': data.author
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Premium Dental Clinic',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://premiumdental.com/logo.png'
        }
      },
      'description': data.excerpt,
      'articleBody': data.content
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
