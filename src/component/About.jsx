import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                About <span className='text-primary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
              <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>  I'm a passionate full-stack developer with a love for creating beautiful and functional web applications.</h3>
                <p className='text-muted-foreground'>
                   With over 5years of experience in fulstack development,I specialize in creating responsive,accessible and performant web applications using modern technologies like React, Node.js, and cloud platforms, I bring ideas to life through code.
                </p>
                <p className='text-muted-foreground'>  I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape. </p>
               <p className='text-muted-foreground'>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest trends in tech. </p>
                   
               <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a href='#contact' className='cosmic-button'>  Get in Touch </a>
                <div>
                  <a href='/resume.pdf' download className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                   Download CV </a>

               </div>

               </div>
              </div>
                <div className='grid grid-cols-1 gap-6'>
                  <div className='gradient-border p-6 card-hover rounded-lg border hover:scale-105 transform transition-all duration-300'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10 flex items-center justify-center'>
                        <Code className='h-6 w-6 text-white' />
                      </div>
                      <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Full-Stack Development</h4>
                        <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks like React,Vue.</p>

                      </div>
                    
                    </div>
                  </div>
                  <div className='gradient-border p-6 card-hover rounded-lg border hover:scale-105 transform transition-all duration-300'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10 flex items-center justify-center'>
                        <User className='h-6 w-6 text-white' />
                      </div>
                       <div className='text-left'>
                        <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                        <p className='text-muted-foreground'>Designing intuitive user interfaces and seamless user experience.</p>

                      </div>
                    
                    </div>
                  </div>
                  <div className='gradient-border p-6 card-hover rounded-lg border hover:scale-105 transform transition-all duration-300'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-primary/10 flex items-center justify-center'>
                        <Briefcase className='h-6 w-6 text-white' />
                      </div>
                       <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Project Management</h4>
                        <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodologies.</p>

                      </div>
                    
                    </div>
                  </div>
                  
                </div>
              
            </div>

            {/* <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                    <p className='text-lg text-muted-foreground mb-6'>
                        I'm a passionate full-stack developer with a love for creating beautiful and functional web applications.
                        With expertise in modern technologies like React, Node.js, and cloud platforms, I bring ideas to life through code.
                    </p>
                    <p className='text-lg text-muted-foreground mb-6'>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                        or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest trends in tech.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <div className='bg-card p-4 rounded-lg border'>
                            <h3 className='font-semibold text-primary'>Frontend</h3>
                            <p className='text-sm text-muted-foreground'>React, Vue, Angular</p>
                        </div>
                        <div className='bg-card p-4 rounded-lg border'>
                            <h3 className='font-semibold text-primary'>Backend</h3>
                            <p className='text-sm text-muted-foreground'>Node.js, Python, PHP</p>
                        </div>
                        <div className='bg-card p-4 rounded-lg border'>
                            <h3 className='font-semibold text-primary'>Database</h3>
                            <p className='text-sm text-muted-foreground'>MongoDB, PostgreSQL, MySQL</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='w-64 h-64 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center'>
                        <span className='text-6xl'>👨‍💻</span>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default About
