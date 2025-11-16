'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, Users, Bell, Server, LogOut, Menu, X } from 'lucide-react';
import { DashboardView } from '@/lib/types';

interface SidebarProps {
  onLogout: () => void;
  userId: string | null;
}

export default function Sidebar({ onLogout, userId }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: 'resources', label: 'Resources', href: '/dashboard/resources', Icon: Cpu },
    { id: 'users', label: 'Users & Permissions', href: '/dashboard/users', Icon: Users },
    { id: 'notifications', label: 'Notifications', href: '/dashboard/notifications', Icon: Bell },
    { id: 'remote', label: 'Remote Access', href: '/dashboard/remote', Icon: Server },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-gray-800 rounded-lg text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block w-full lg:w-64 bg-gray-800 text-white p-4 shadow-2xl flex-shrink-0`}
      >
        <h1 className="text-2xl font-extrabold text-blue-500 mb-6 mt-12 lg:mt-0">
          Server OS Control
        </h1>

        <nav className="space-y-2">
          {navItems.map(({ id, label, href, Icon }) => (
            <Link
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center p-3 rounded-lg transition duration-150 ${
                isActive(href)
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="w-full flex items-center p-3 rounded-lg text-red-400 hover:bg-gray-700 transition duration-150"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>

        <div className="mt-8 text-xs text-gray-500 truncate pt-4 border-t border-gray-700">
          User ID: {userId || 'N/A'}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
