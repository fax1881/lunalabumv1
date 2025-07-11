'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Printer, Tags, Truck, List } from 'lucide-react'

const Hero = () => {
  const features = [
    {
      icon: Printer,
      text: 'Orijinal Fujifilm fotoğraf kağıdı'
    },
    {
      icon: Tags,
      text: 'Adete göre değişen, en uygun fiyatlar'
    },
    {
      icon: Truck,
      text: 'Aynı gün kargo'
    },
    {
      icon: List,
      text: '3 Adımda kolayca siparişinizi oluşturabilirsiniz'
    }
  ]

  return (
    <section className="gradient-bg text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-light mb-8">
            Fotoğraf Baskı
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 text-lg"
              >
                <feature.icon className="text-accent-400 text-2xl flex-shrink-0" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Siparişe Başla
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 