'use client'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Features from '../components/Features'
import About from '../components/About'
import Instagram from '../components/Instagram'
import PreparationTimes from '../components/PreparationTimes'
import PaymentDelivery from '../components/PaymentDelivery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <Instagram />
      <PreparationTimes />
      <PaymentDelivery />
      <Contact />
      <Footer />
    </main>
  )
} 