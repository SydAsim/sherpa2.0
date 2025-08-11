
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Upload,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Feed Vulnerability',
    href: '/feed-vulnerability',
    icon: Upload,
  },
  {
    title: 'AI Project Management',
    href: '/ai-project-management',
    icon: Bot,
  },
  {
    title: 'Conversational AI',
    href: '/conversational-ai',
    icon: MessageSquare,
  },
  {
    title: 'Intelligent Research',
    href: '/intelligent-research',
    icon: Search,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

const Sidebar = ({ isOpen = false, onClose }) => {
  const location = useLocation();

  // Lock scroll on mobile when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          'md:hidden',
          isOpen ? 'fixed inset-0 bg-black/40 z-40' : 'hidden'
        )}
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar navigation"
        className={cn(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass-effect border-r p-4 z-50 transition-transform duration-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0'
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">SHERPA AI</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="md:hidden rounded-full p-2 hover:bg-accent hover:text-accent-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
                onClick={onClose}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
