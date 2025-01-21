import React from 'react';
import { Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "First Order Discount",
    description: "Get 20% off on your first order above $50",
    discount: 20,
    validUntil: "Dec 31, 2024"
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "15% off on all fresh fruits and vegetables",
    discount: 15,
    validUntil: "Every Weekend"
  },
  {
    id: 3,
    title: "Bulk Purchase Offer",
    description: "Save 25% when you spend $100 or more",
    discount: 25,
    validUntil: "Dec 31, 2024"
  }
];

function Offers() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{offer.title}</h2>
              <Percent className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {offer.discount}% OFF
              </span>
              <span className="text-sm text-gray-500">
                Valid until {offer.validUntil}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Offers;

