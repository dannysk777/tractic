'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  TrendingUp,
  FileText,
  Zap,
  CreditCard,
  BarChart3,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle2,
  Globe,
  MessageCircle,
  Share2,
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1B2D] via-[#1a2847] to-[#0F1B2D] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0F1B2D]/95 backdrop-blur-md border-b border-[#10B981]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#10B981] to-white bg-clip-text text-transparent">
                Tractic
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-[#10B981] transition-colors duration-300"
              >
                CaracterÃ­sticas
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-[#10B981] transition-colors duration-300"
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-[#10B981] transition-colors duration-300"
              >
                Testimonios
              </button>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-300 hover:text-[#10B981] transition-colors duration-300 font-medium"
              >
                Iniciar SesiÃ³n
              </Link>
              <Link
                href="/registro"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-[#10B981]/50 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Registrarse
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-[#10B981]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#10B981]/20">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-2 py-2 text-gray-300 hover:text-[#10B981] transition-colors"
              >
                CaracterÃ­sticas
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-2 py-2 text-gray-300 hover:text-[#10B981] transition-colors"
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-2 py-2 text-gray-300 hover:text-[#10B981] transition-colors"
              >
                Testimonios
              </button>
              <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-[#10B981]/20">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-[#10B981] transition-colors py-2"
                >
                  Iniciar SesiÃ³n
                </Link>
                <Link
                  href="/registro"
                  className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Background Gradient Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981] opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981] opacity-5 rounded-full blur-3xl -z-10"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-[#10B981]/20 text-[#10B981] px-4 py-2 rounded-full text-sm font-semibold border border-[#10B981]/30">
                  â¨ Para Inversionistas Inmobiliarios de Honduras
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Gestiona Tu Portafolio Inmobiliario con{' '}
                <span className="bg-gradient-to-r from-[#10B981] to-[#34d399] bg-clip-text text-transparent">
                  Inteligencia
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Controla tus ingresos por alquiler, gastos operacionales, y el desempeÃ±o de tus propiedades en Honduras. Todo en un solo lugar, con reportes listos para SAR.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/registro"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-xl hover:shadow-[#10B981]/50 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Comenzar Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => scrollToSection('features')}
                className="border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Ver Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>Sin tarjeta de crÃ©dito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                <span>Soporte en espaÃ±ol</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative">
            <div className="relative h-96 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/10 rounded-2xl border border-[#10B981]/30 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 text-[#10B981] opacity-80 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-400 font-semibold">Dashboard Inteligente</p>
                </div>
              </div>
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full grid grid-cols-3 grid-rows-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-[#10B981]/30"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F1B2D]/50 border-t border-[#10B981]/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              CaracterÃ­sticas Potentes para Tu Ãxito
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para gestionar exitosamente tu portafolio inmobiliario
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Portfolio Tracking */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguimiento de Portafolio</h3>
              <p className="text-gray-400 leading-relaxed">
                Organiza y monitorea todas tus propiedades en un lugar centralizado con informaciÃ³n en tiempo real.
              </p>
            </div>

            {/* Feature 2: Income/Expense Management */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">GestiÃ³n de Ingresos y Gastos</h3>
              <p className="text-gray-400 leading-relaxed">
                Registra automÃ¡ticamente rentas, mantenimiento, servicios e impuestos de tus propiedades.
              </p>
            </div>

            {/* Feature 3: Tax Reports */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reportes Compatibles con SAR</h3>
              <p className="text-gray-400 leading-relaxed">
                Genera reportes automÃ¡ticos listos para presentar ante el Servicio de AdministraciÃ³n de Rentas de Honduras.
              </p>
            </div>

            {/* Feature 4: AI Insights */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Insights Impulsados por IA</h3>
              <p className="text-gray-400 leading-relaxed">
                Recibe recomendaciones inteligentes para optimizar la rentabilidad de tus inversiones inmobiliarias.
              </p>
            </div>

            {/* Feature 5: Bank Auto-Import */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">ImportaciÃ³n Bancaria AutomÃ¡tica</h3>
              <p className="text-gray-400 leading-relaxed">
                Sincroniza tus transacciones bancarias automÃ¡ticamente para un registro preciso de cash flow.
              </p>
            </div>

            {/* Feature 6: Performance Analytics */}
            <div className="group bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 hover:border-[#10B981]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AnÃ¡lisis de DesempeÃ±o</h3>
              <p className="text-gray-400 leading-relaxed">
                Visualiza ROI, rendimiento por propiedad y tendencias del mercado inmobiliario en Honduras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Planes Simples y Transparentes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Elige el plan perfecto para tu negocio inmobiliario
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 space-y-8 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Gratuito</h3>
                <p className="text-gray-400 text-sm">Perfecto para comenzar</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  L. 0
                  <span className="text-lg text-gray-400">/mes</span>
                </div>
                <p className="text-gray-400 text-sm">Hasta 2 propiedades</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Seguimiento bÃ¡sico de propiedades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Registro de ingresos y gastos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Dashboard bÃ¡sico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Soporte comunitario</span>
                </li>
              </ul>

              <Link
                href="/registro"
                className="w-full border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 py-3 rounded-lg font-bold transition-all duration-300 block text-center"
              >
                Comenzar Gratis
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-[#10B981]/20 via-[#1a2847] to-[#0F1B2D] border-2 border-[#10B981] rounded-xl p-8 space-y-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#10B981]/30 transform hover:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 py-1 rounded-full text-sm font-bold">
                  MÃS POPULAR
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-400 text-sm">Para inversionistas activos</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  L. 499
                  <span className="text-lg text-gray-400">/mes</span>
                </div>
                <p className="text-gray-400 text-sm">Hasta 15 propiedades</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Todas las caracterÃ­sticas del plan Gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">ImportaciÃ³n bancaria automÃ¡tica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Reportes SAR automÃ¡ticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">AnÃ¡lisis de desempeÃ±o avanzado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Soporte prioritario por email</span>
                </li>
              </ul>

              <Link
                href="/registro"
                className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-3 rounded-lg font-bold transition-all duration-300 block text-center hover:shadow-lg hover:shadow-[#10B981]/50"
              >
                Empezar Ahora
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 space-y-8 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div>
                <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
                <p className="text-gray-400 text-sm">Para grandes portafolios</p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  L. 1,499
                  <span className="text-lg text-gray-400">/mes</span>
                </div>
                <p className="text-gray-400 text-sm">Propiedades ilimitadas</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Todas las caracterÃ­sticas de Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Propiedades ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Insights con IA avanzada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">API personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Soporte dedicado 24/7</span>
                </li>
              </ul>

              <Link
                href="/registro"
                className="w-full border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 py-3 rounded-lg font-bold transition-all duration-300 block text-center"
              >
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F1B2D]/50 border-t border-[#10B981]/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              ConfÃ­an en Nosotros
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Inversionistas inmobiliarios de Honduras que han transformado su negocio
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 space-y-4 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#10B981] text-[#10B981]"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Tractic me ha ahorrado horas cada mes en la administraciÃ³n de mis 8 propiedades. Los reportes para SAR son perfectos y mis tenedores de libros estÃ¡n impresionados."
              </p>
              <div className="pt-4 border-t border-[#10B981]/20">
                <p className="font-bold text-white">Carlos MejÃ­a</p>
                <p className="text-gray-400 text-sm">Inversionista Inmobiliario, Tegucigalpa</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 space-y-4 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#10B981] text-[#10B981]"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                "El sistema de importaciÃ³n bancaria automÃ¡tica cambiÃ³ mi vida. Ahora veo el flujo de caja en tiempo real y puedo tomar decisiones mejor informadas sobre mis inversiones."
              </p>
              <div className="pt-4 border-t border-[#10B981]/20">
                <p className="font-bold text-white">MarÃ­a GonzÃ¡lez</p>
                <p className="text-gray-400 text-sm">Administradora de Portafolio, San Pedro Sula</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#1a2847] to-[#0F1B2D] border border-[#10B981]/20 rounded-xl p-8 space-y-4 transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#10B981] text-[#10B981]"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Los insights de IA me ayudaron a identificar que una de mis propiedades estaba generando pÃ©rdidas. Ahora estÃ¡ en alquiler de corto plazo y es mi mejor activo."
              </p>
              <div className="pt-4 border-t border-[#10B981]/20">
                <p className="font-bold text-white">Roberto HernÃ¡ndez</p>
                <p className="text-gray-400 text-sm">Desarrollador Inmobiliario, La Ceiba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#10B981]/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comienza Tu TransformaciÃ³n Hoy
            </h2>
            <p className="text-gray-400 text-lg">
              åLâiÀ´ete a cientos de inversionistas inmobiliarios que ya estÃ¡n gestionando su portafolio con Tractia
            </p>
          </div>

          <Link
            href="/registro"
            className="inline-flex bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-2xl hover:shadow-[#10B981]/50 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 gap-2 items-center"
          >
            Registrarse Gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#10B981]/20 bg-[#0F1B2D]/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br to-[#059669] rounded-lg flex items-center justify-center font-bold text-sm">
                  T
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#10B981] to-white bg-clip-text text-transparent">
                  Tractic
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                GestiÃ³n inteligente de portafolios inmobiliarios para Honduras.
              </p>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Producto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                   className="hover:text-[#10B981] transition-colors"
                  >
                    CaracterÃ­sticas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Precios
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    TÃ©rminos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#10B981] transition-colors">
                    PolÃ­tica de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#10B981]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-gray-400 text-sm">
                &copy; 2026 Tractic. Todos los derechos reservados.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#10B981] transition-colors transform hover:scale-110"
                  aria-label="Globe"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#10B981] transition-colors transform hover:scale-110"
                  aria-label="MessageCircle"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#10B981] transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
