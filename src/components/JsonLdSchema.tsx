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
    'telephone': '+92-307-0984307',
    'email': 'appointments@premiumdental.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Medical Plaza, Block 5, Clifton',
      'addressLocality': 'Karachi',
      'addressRegion': 'Sindh',
      'postalCode': '75600',
      'addressCountry': 'PK'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.816223',
      'longitude': '67.030612'
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
