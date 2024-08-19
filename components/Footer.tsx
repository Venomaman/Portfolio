import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-gray-800 dark:bg-gray-950/65 dark:text-white/80">
      <div className="max-w-screen-lg mx-auto ">
        <p className="text-xs dark:text-white/80">&copy; 2024 AmanKumarAnand. All rights reserved.</p>
        <p className="mt-2 text-sm font-bold text-slate-600 dark:text-white/90">Contact Me:</p>
        <p className="mt-1">
          <a href="mailto:aman11808891@gmail.com" className="text-slate-600 hover:underline font-semibold text-sm dark:text-white/90">aman11808891@gmail.com</a><br />
          <a href="tel:+91 7814311098" className="text-gray-600 hover:underline font-semibold text-sm dark:text-white/80">+91 7814311098</a>
        </p>
        <div className="mt-2 flex justify-center items-center ">
          <a href="https://github.com/Venomaman" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 mr-4 dark:text-white/60 dark:hover:text-white/90">
            <FaGithub size={25} />
          </a>
          <a href="https://x.com/aman_and_anand" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white/90">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </footer>
  )
}
