import React, { useState } from 'react'
import {cn} from '../lib/utils';
const skills = [
    // frontend
  { name: 'HTML/CSS', level: '95', category: 'frontend' },
    { name: 'Javascript', level: '90', category: 'frontend' },
      { name: 'React', level: '90', category: 'frontend' },
        { name: 'Typescript', level: '85', category: 'frontend' },
          { name: 'Next.js', level: '80', category: 'frontend' }

    // backend
    ,
      { name: 'Node.js', level: '88', category: 'backend' },
         { name: 'Express.js', level: '78', category: 'backend' },
            { name: 'MongoDB', level: '70', category: 'backend' },
               { name: 'PostgreSQL', level: '65', category: 'backend' },
                  { name: 'GraphQL', level: '60', category: 'backend' },

    // Tools
    { name: 'Git/GitHub', level: '85', category: 'tools' },
      { name: 'Docker', level: '70', category: 'tools' },
        { name: 'VS Code', level: '75', category: 'tools' },
          { name: 'Jest', level: '65', category: 'tools' },
                    { name: 'Figma', level: '65', category: 'tools' }


];
const categories = ['all', 'frontend', 'backend', 'tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section
        id="skills"
        className='py-24 px-4 relative bg-secondary/30'
    >
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center'>
                My<span className='text-primary'> Skills</span>
            </h2>
            <div className='flex justify-center gap-2 sm:gap-4 mb-12'>
              {categories.map((category, key) => (
                <button key={key} onClick={()=>setActiveCategory(category)}className={cn(
                  'px-3 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full transition-colors duration-300 capitalize ',
                  activeCategory===category  ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground  hover:bg-secondary'
                     )}>{category}</button>
              ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill, key) => (
                    <div key={key} className='p-6 bg-card rounded-lg shadow-lg card-hover'>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div
                                className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                                style={{ '--scale': parseInt(skill.level) / 100 }}
                            />
                        </div>
                        <div className='text-right mt-2 text-sm font-medium'>
                            {skill.level}%
                        </div>
                    </div>
                ))}

            </div>

        </div>


    </section>
  )
}

export default Skills
