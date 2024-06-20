'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlocksIcon, MenuIcon, XIcon } from 'lucide-react';
import { ThemeToggle as ModeToggle } from '@acme/ui/theme';
import UserAvatar from './user-avatar';
import { cn } from '@acme/ui';
import { UserResponse } from '@supabase/supabase-js';

interface HeaderProps {
  user: UserResponse;
}

function Header({ user }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const session = user.data;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // TODO: In mobile (the nav menu is opacity 0 so it's clickable and makes other things not clickable and stuff)
  const menuVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.5, ease: 'easeInOut' }
      }
    },
    initial: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.25, ease: 'easeInOut' }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.25, ease: 'easeInOut' },
        display: { duration: 0.3, ease: 'easeInOut' }
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex w-full justify-between">
          <Link href="/dashboard" className="flex items-center justify-center">
            <BlocksIcon className="h-6 w-6" />
            <span className="sr-only">Notes Buddy</span>
          </Link>

          <button
            className="flex flex-row space-x-2 md:hidden"
            onClick={toggleMenu}
          >
            <span className="lowercase">{isOpen ? 'Close' : 'Menu'}</span>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <div className="hidden md:flex md:w-auto md:items-center">
            <nav className="ml-auto flex items-center space-x-4">
              <ModeToggle />
              <UserAvatar user={user} />
            </nav>
          </div>
        </div>
      </div>
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className={cn('bg-transparent md:hidden')}
      >
        <div className="flex flex-col gap-4 p-4">
          {/* <Link
            className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
            href="/about"
            onClick={toggleMenu}
          >
            About
          </Link> */}
          <Link
            className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
            href="#features"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            className="flex items-center text-sm font-medium underline-offset-4 hover:underline"
            href="#faq"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <div className="flex w-full items-center justify-end">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;