import React, { useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Twitter,  Facebook, Send } from 'lucide-react'
import {cn} from "@/lib/utils"
import emailjs from '@emailjs/browser'
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS configuration
    const serviceId = 'service_x62n8ic'
    const templateId = 'template_ou62ztp'
    const publicKey = 'IovG1XdUznEgNxhtk'

    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
      to_email: 'vitalismakuochukwu@gmail.com'
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setSubmitStatus('success')
        e.target.reset()
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
        setSubmitStatus('error')
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section
    id='contact'
     className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center'>
        Get in  <span className='text-primary'>Touch</span>
      </h2>
      <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4'>
        Have a project in mind or just want to say hello?Feel free to reach out to me via email or through my social media channels.I'm always open to discussing new opportunities,collaborations,or just a friendly chat about tech.
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
        <div className='space-y-6 sm:space-y-8'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Contact Information</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6'>
            <div className='flex items-start space-x-3 sm:space-x-4'>
              <div className='p-3 rounded-full bg-primary/10 flex-shrink-0'>
                <Mail className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
              </div>
              <div className='min-w-0'>
                <h4 className='font-medium text-sm sm:text-base'>Email</h4>
                <a href='mailto:vitalismakuochukwu@gmail.com' className='text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all'>
                  vitalismakuochukwu@gmail.com
                </a>
              </div>
            </div>
            <div className='flex items-start space-x-3 sm:space-x-4'>
              <div className='p-3 rounded-full bg-primary/10 flex-shrink-0'>
                <Phone className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
              </div>
              <div className='min-w-0'>
                <h4 className='font-medium text-sm sm:text-base'>Phone</h4>
                <a href='tel:+2347026139914' className='text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors'>
                  +234 7026139914
                </a>
              </div>
            </div>
            <div className='flex items-start space-x-3 sm:space-x-4'>
              <div className='p-3 rounded-full bg-primary/10 flex-shrink-0'>
                <MapPin className='h-5 w-5 sm:h-6 sm:w-6 text-primary' />
              </div>
              <div className='min-w-0'>
                <h4 className='font-medium text-sm sm:text-base'>Location</h4>
                <p className='text-sm sm:text-base text-muted-foreground'>
                  Onitsha, Anambra State, Nigeria
                </p>
              </div>
            </div>
          </div>
            <div className='pt-6 sm:pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-start'>
                <a href='https://www.linkedin.com/in/makuochukwu-egwuonwu-749898321' target='_blank' rel='noopener noreferrer'>
                  <Linkedin size={24} className='text-muted-foreground hover:text-primary transition-colors'/>
                </a>
                <a href='https://x.com/Ababio01' target='_blank' rel='noopener noreferrer'>
                  <Twitter size={24} className='text-muted-foreground hover:text-primary transition-colors'/>
                </a>
                <a href='https://www.facebook.com/makuochukwu.egwuonwu.7' target='_blank' rel='noopener noreferrer'>
                  <Facebook size={24} className='text-muted-foreground hover:text-primary transition-colors'/>
                </a>
              </div>
            </div>
        </div>

        <div>
          <div className='bg-card p-6 sm:p-8 rounded-lg shadow-xs'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6'>Send a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className='w-full px-4 py-4 sm:py-5 rounded-md input-purple'
                  placeholder='Your full name'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className='w-full px-4 py-4 sm:py-5 rounded-md input-purple'
                  placeholder='your.email@example.com'
                />
              </div>
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className='w-full px-4 py-4 sm:py-5 rounded-md input-purple resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16}/>
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
        </div>
      
    </section>
  )
}

export default Contact
