'use client'

import React from 'react'

const Instagram = () => {
  const images = [
    'https://via.placeholder.com/200x200/ff6b6b/ffffff?text=Photo+1',
    'https://via.placeholder.com/200x200/4ecdc4/ffffff?text=Photo+2',
    'https://via.placeholder.com/200x200/45b7d1/ffffff?text=Photo+3',
    'https://via.placeholder.com/200x200/f39c12/ffffff?text=Photo+4',
    'https://via.placeholder.com/200x200/9b59b6/ffffff?text=Photo+5',
    'https://via.placeholder.com/200x200/e74c3c/ffffff?text=Photo+6'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            #fotobaski - Sizden Gelenler
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instagram 