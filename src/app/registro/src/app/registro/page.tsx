'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff, Loader, Check } from 'lucide-react';

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Por favor ingresa tu nombre');
      return false;
    }

    if (formData.name.trim().length < 2) {
      setError('El nombre debe tener al menos 2 caracteres');
      return false;
    }

    if (!formData.email) {
      setError('Por favor ingresa tu correo electrónico');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Por favor ingresa un correo válido');
      return false;
    }

    if (!formData.password) {
      setError('Por favor ingresa una contraseña');
      return false;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }

    if (!agreedToTerms) {
      setError('Debes aceptar los términos y condiciones');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Register:', formData);

      // Show success state
      setSuccess(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setAgreedToTerms(false);

      // TODO: Add actual registration logic
      // Redirect after success
      setTimeout(() => {
        // window.location.href = '/login';
      }, 2000);
    } catch (err) {
      setError('Ocurrió un error. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0F1B2D] via-[#1a2f4d] to-[#0F1B2D] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#1a2f4d] rounded-2xl shadow-2xl p-8 border border-[#2d4563] text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full p-4">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">¡Cuenta Creada!</h2>
            <p className="text-gray-400 mb-6">
              Tu cuenta ha sido creada exitosamente. Redirigiendo al inicio de sesión...
            </p>

            <Link
              href="/login"
              className="inline-block bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Ir a Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1B2D] via-[#1a2f4d] to-[#0F1B2D] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-[#1a2f4d] rounded-2xl shadow-2xl p-8 border border-[#2d4563]">
          {/* Logo/Brand */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg mb-4">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Tractic</h1>
            <p className="text-gray-400 text-sm mt-2">Crea tu cuenta</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Juan Pérez"
                  className="w-full bg-[#0F1B2D] border border-[#2d4563] rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@correo.com"
                  className="w-full bg-[#0F1B2D] border border-[#2d4563] rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-[#0F1B2D] border border-[#2d4563] rounded-lg py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-300 transition"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirmar Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-[#0F1B2D] border border-[#2d4563] rounded-lg py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-300 transition"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 bg-[#0F1B2D] border border-[#2d4563] rounded accent-[#10B981] cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                Acepto los{" "}
                <Link href="#" className="text-[#10B981] hover:text-[#059669] transition">
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link href="#" className="text-[#10B981] hover:text-[#059669] transition">
                  política de privacidad
                </Link>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
            >
              {isLoading && <Loader className="h-5 w-5 animate-spin" />}
              Crear Cuenta
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ¿Ya tienes cuenta?{" "}
              <Link
                href="/login"
                className="text-[#10B981] hover:text-[#059669] font-semibold transition"
              >
                Inicia Sesión
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-xs space-y-2">
          <div className="flex gap-4 justify-center">
            <Link href="#" className="hover:text-gray-300 transition">
              Términos de Servicio
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-gray-300 transition">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
