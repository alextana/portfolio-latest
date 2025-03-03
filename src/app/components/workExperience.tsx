import { cn } from '@/lib/utils'

export default function WorkExperience() {
  const jobs = [
    {
      title: 'Senior front-end engineer',
      company: 'Amiqus Resolution',
      startDate: 'February 2023',
      endDate: 'present',
      description: `
      <p>I'm currently working at Amiqus - since joining I've worked on:
      <ul>
        <li>Improving accessibility by following WCAG 2.2</li>
        <li>Migrated the codebase from Vue 2 to Vue 3</li>
        <li>Worked on various performance improvements related to the migration</li>
        <li>Worked cross-team to deliver features for clients in a short time frame</li>
        <li>Implemented unit tests for a lot of the front-end code, and retroactively added test on old components</li>
      </ul>
      </p>
      `,
      techUsed: ['Vue', 'Vuex', 'Pinia', 'Jest', 'MSW', 'Twig', 'Primevue'],
    },
    {
      title: 'Front-end developer',
      company: 'Barkweb',
      startDate: 'March 2021',
      endDate: 'February 2023',
      description: `
        <p>At Barkweb I was the only front-end developer and I worked on several interesting projects:
        <ul>
          <li>Worked on the UI for Jolojo CMS</li>
          <li>Started developing a design system using Tailwind CSS</li>
          <li>Built several websites for clients using Jolojo</li>
          <li>Worked extensively on the UI for an auction platform</li>
          </ul>
          </p>
      `,
      techUsed: ['Svelte', 'Tailwind CSS', 'Jolojo CMS'],
    },
    {
      title: 'Front-end developer',
      company: 'Bluesky Interactive',
      startDate: 'November 2018',
      endDate: 'March 2021',
      description: `
      <p>At Bluesky I worked on building websites for the automotive industry, mostly with the
      proprietary platform.
      These are some of the things I worked on:
      <ul>
      <li>Worked on creating scripts to improve DX and automating some workflows</li>
      <li>Worked on the Electric Car Configurator, a widget built in Vue JS</li>
      <li>Built several websites for car dealerships</li>
      <li>Done maintenance on most of the websites</li>
      <li>Introduced Vue for some of the projects</li>
      </ul>
      </p>`,
      techUsed: ['Vue', 'Javascript', 'HTML', 'CSS', 'SCSS', 'Gulp'],
    },
  ]

  return (
    <div className='max-w-[960px] px-4 mt-16 lg:px-0 mx-auto prose dark:prose-invert'>
      <h3 className='text-lime-400 text-4xl tracking-tighter font-bold'>
        Work experience
      </h3>
      <div className='my-4' />
      {jobs.map((job, index) => (
        <div key={index} className={cn(index !== 0 && 'mt-12')}>
          <h4 className='text-2xl font-bold leading-1.5'>{job.title}</h4>
          <p className='text-md'>
            {job.company} ({job.startDate} - {job.endDate})
          </p>
          <span
            className='text-lg'
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></span>
          <div className='my-4' />
          {job.techUsed && job.techUsed.length > 0 && (
            <p className='text-lg'>
              <strong>Technologies used:</strong> {job.techUsed.join(', ')}.
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
