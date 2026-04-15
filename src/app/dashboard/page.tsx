'use client';

import React from 'react';
import {
  BarChart3,
  Bell,
  Building2,
  Calendar,
  ChevronRight,
  Cog,
  DollarSign,
  FileText,
  Home,
  LogOut,
  Menu,
  Percent,
  TrendingUp,
  User,
  Users,
} from 'lucide-react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const stats = [
    {
      label: 'Total Propiedades',
      value: '5',
      icon: Building2,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Ingreso Mensual',
      value: 'L. 85,400',
      icon: TrendingUp,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Gastos Mensuales',
      value: 'L. 23,200',
      icon: DollarSign,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
    },
    {
      label: 'ROI Promedio',
      value: '12.4%',
      icon: Percent,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  const monthlyData = [
    { month: 'Ene', revenue: 75000, max: 100000 },
    { month: 'Feb', revenue: 68000, max: 100000 },
    { month: 'Mar', revenue: 82000, max: 100000 },
    { month: 'Abr', revenue: 85400, max: 100000 },
    { month: 'May', revenue: 79000, max: 100000 },
    { month: 'Jun', revenue: 88000, max: 100000 },
  ];

  const transactions = [
    {
      id: 1,
      date: '15 Abr 2026',
      property: 'Casa Central - Tegucigalpa',
      type: 'Ingreso',
      amount: 'L. 12,500',
      status: 'Completado',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      date: '14 Abr 2026',
      property: 'Apto San Pedro',
      type: 'Gasto',
      amount: 'L. 3,200',
      status: 'Completado',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      date: '12 Abr 2026',
      property: 'Casa Ceiba Premium',
      type: 'Ingreso',
      amount: 'L. 15,000',
      status: 'Completado',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 4,
      date: '10 Abr 2026',
      property: 'Casa Central - Tegucigalpa',
      type: 'Gasto',
      amount: 'L. 2,800',
      status: 'Completado',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 5,
      date: '08 Abr 2026',
      property: 'Departamento San Pedro',
      type: 'Ingreso',
      amount: 'L. 10,200',
      status: 'Pendiente',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
  ];

  const properties = [
    {
      id: 1,
      name: 'Casa Central',
      location: 'Tegucigalpa, Francisco MorazÃ¡n',
      income: 'L. 12,500/mes',
      occupancy: 95,
      status: 'Activa',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      name: 'Apto San Pedro',
      location: 'San Pedro Sula, CortÃ©s',
      income: 'L. 15,000/mes',
      occupancy: 100,
      status: 'Activa',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      name: 'Casa Ceiba Premium',
      location: 'La Ceiba, AtlÃ¡ntida',
      income: 'L. 10,200/mes',
      occupancy: 85,
      status: 'Activa',
      statusColor: 'bg-green-100 text-green-800',
    },
  ];

  const navItems = [
    { label: 'Dashboard', icon: Home, active: true },
    { label: 'Propiedades', icon: Building2, active: false },
    { label: 'Ingresos', icon: TrendingUp, active: false },
    { label: 'Gastos', icon: DollarSign, active: false },
    { label: 'Reportes', icon: FileText, active: false },
    { label: 'ConfiguraciÃ³n', icon: Cog, active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-[#0F1B2D] to-[#1a2a3a] text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo Area */}
        <div className="p-6 flex items-center justify-between border-b border-gray-700">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="font-bold text-lg">Tractic</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-gray-700 rounded-lg transition"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-8 px-3 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </a>
            );
          })}
        </nav>

        {/* User Avatar Area */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User size={20} />
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium">Danny</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button className="w-full mt-3 flex items-center justify-center gap-2 px-3 py-2 text-xs text-gray-300 hover:bg-gray-700 rounded-lg transition">
              <LogOut size={16} />
              Salir
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bienvenido, Danny</h1>
            <p className="text-sm text-gray-500">AquÃ­ estÃ¡ el resumen de tu portafolio</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-gray-500" />
              <span className="text-sm text-gray-600">15 Abr 2026</span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${stat.bgColor} p-3 rounded-lg`}>
                          <Icon className={`${stat.color.replace('bg-', 'text-')}`} size={24} />
                        </div>
                        <TrendingUp className="text-green-500" size={18} />
                      </div>
                      <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ingresos Mensuales</h3>
                  <p className="text-sm text-gray-500">Ãltimos 6 meses</p>
                </div>

                <div className="flex items-flex-end justify-between gap-2 h-64">
                  {monthlyData.map((data) => {
                    const percentage = (data.revenue / data.max) * 100;
                    return (
                      <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-flex-end justify-center h-48">
                          <div
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-semibold text-gray-900">{data.month}</p>
                          <p className="text-xs text-gray-500">L. {(data.revenue / 1000).toFixed(0)}k</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Occupancy Rate */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Tasa de OcupaciÃ³n</h3>

                <div className="flex flex-col items-center justify-center h-56">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="8"
                        strokeDasharray={`${(93.3 / 100) * 339.3} 339.3`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <p className="text-3xl font-bold text-gray-900">93.3%</p>
                      <p className="text-xs text-gray-500">Promedio</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 w-full">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Ocupadas</span>
                      <span className="font-semibold text-gray-900">14</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Disponibles</span>
                      <span className="font-semibold text-gray-900">1</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Total</span>
                      <span className="font-semibold text-gray-900">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Transacciones Recientes</h3>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                  Ver todas <ChevronRight size={16} />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Propiedad
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Cantidad
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="py-4 px-4 text-sm text-gray-700">{transaction.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">{transaction.property}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                              transaction.type === 'Ingreso'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {transaction.type === 'Ingreso' ? (
                              <TrendingUp size={14} />
                            ) : (
                              <DollarSign size={14} />
                            )}
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right text-sm font-semibold text-gray-900">
                          {transaction.amount}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${transaction.statusColor}`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Propiedades Activas</h3>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                  Ver todas <ChevronRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                        <Home className="text-blue-600" size={24} />
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${property.statusColor}`}>
                        {property.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-1">{property.name}</h4>
                    <p className="text-sm text-gray-500 mb-4">{property.location}</p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Ingreso Mensual:</span>
                        <span className="text-sm font-bold text-green-600">{property.income}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">OcupaciÃ³n</span>
                          <span className="text-sm font-semibold text-gray-900">{property.occupancy}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${property.occupancy}%` }}
                          ></div>
                        </div>
                      </div>

                      <button className="w-full mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium rounded-lg transition">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
