import Link from 'next/link'
export default function AboutSection() {
  return (
    <div className='prose text-white max-w-[960px] mx-auto px-4 lg:px-0'>
      <h3 className='text-lime-400 text-4xl tracking-tighter font-bold'>
        About me
      </h3>
      <div className='my-4' />
      <p className='text-lg'>
        I'm a passionate front-end engineer based in Brighton, UK. With a strong
        foundation in modern frameworks and technologies, I thrive on creating
        engaging and dynamic user experiences. I stay ahead of the curve by
        continuously exploring the latest industry trends and best practices. My
        experience spans various industries, including automotive and identity
        verification services, allowing me to bring a unique perspective to each
        project I undertake.
      </p>
      <div className='my-2' />
      <p className='text-lg'>
        I'm a strong advocate for accessibility and performance, ensuring that
        the products I build are inclusive and fast. I'm also a firm believer in
        the power of collaboration and open-source software. I actively
        contribute to the community by sharing my knowledge and experiences
        through{' '}
        <Link href='https://dev.to/alextana' target='_blank'>
          blog posts
        </Link>
        .
      </p>
    </div>
  )
}
