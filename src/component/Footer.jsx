import React from 'react'
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-primary'>Mkauochukwu Egwuonwu</h3>
            <p className='text-sm text-muted-foreground'>
             I am a Full-Stack Developer that is passionate in creating innovative web solutions and user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <div className='space-y-2'>
              <a href='#hero' className='block text-sm text-muted-foreground hover:text-primary transition-colors'>Home</a>
              <a href='#about' className='block text-sm text-muted-foreground hover:text-primary transition-colors'>About</a>
              <a href='#skills' className='block text-sm text-muted-foreground hover:text-primary transition-colors'>Skills</a>
              <a href='#projects' className='block text-sm text-muted-foreground hover:text-primary transition-colors'>Projects</a>
              <a href='#contact' className='block text-sm text-muted-foreground hover:text-primary transition-colors'>Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Contact Info</h4>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Mail className='h-4 w-4 text-primary' />
                <a href='mailto:vitalismakuochukwu@gmail.com' className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                  vitalismakuochukwu@gmail.com
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-4 w-4 text-primary' />
                <a href='tel:+2347026139914' className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                  +234 7026139914
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin className='h-4 w-4 text-primary' />
                <span className='text-sm text-muted-foreground'>Onitsha, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Follow Me</h4>
            <div className='flex space-x-4'>
              <a href='https://www.linkedin.com/in/makuochukwu-egwuonwu-749898321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <Linkedin size={18} />
              </a>
              <a href='https://x.com/Ababio01?t=m289Mdu-hMF5hzPjm4ye5A&s=09' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <Twitter size={18} />
              </a>
              
              <a href='https://www.facebook.com/makuochukwu.egwuonwu.7' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-border flex flex-wrap justify-between items-center'>
          <p className='text-sm text-muted-foreground'>
            &copy;{new Date().getFullYear()} Makuochukwu Egwuonwu. All rights reserved.
          </p>
          <a href='#hero' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
