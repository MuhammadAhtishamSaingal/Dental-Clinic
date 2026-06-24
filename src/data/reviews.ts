export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  avatarUrl: string;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Emily Harrison',
    rating: 5,
    text: 'I was extremely nervous about getting dental implants, but Dr. Vance and his team were absolutely incredible. The digital mapping process was detailed, the surgery itself was completely painless, and my new tooth feels exactly like a natural one. Highly recommend this clinic!',
    timeAgo: '2 weeks ago',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Robert Chen',
    rating: 5,
    text: 'The most premium dental clinic I have ever visited. The design is beautiful, the waiting area is comfortable, and Dr. Mitchell did an amazing job with my porcelain veneers. I get compliments on my smile every day now. A true artist!',
    timeAgo: '1 month ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Jessica Taylor',
    rating: 5,
    text: 'Dr. Elena Rostova treated my daughter using Invisalign Teen. We are so happy with the results. The progress scans were fascinating, the appointments were quick, and her teeth are perfectly straight now. Excellent pediatric care!',
    timeAgo: '3 weeks ago',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'David Miller',
    rating: 5,
    text: 'Had an emergency wisdom tooth extraction on a Sunday. They booked me in within an hour. Dr. Vance was fast, professional, and managed my pain instantly. The recovery went smoothly with zero complications. Saving this clinic in my contacts!',
    timeAgo: '2 months ago',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];
