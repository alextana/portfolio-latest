import MainBackground from './components/mainBackground'
import MainIntro from './components/mainIntro'
import About from './components/aboutSection'
import WorkExperience from './components/workExperience'
import Footer from './components/footer'

export default async function Home() {
  return (
    <>
      <main>
        <MainBackground>
          <MainIntro />
        </MainBackground>
        <About />
        <WorkExperience />
      </main>
      <Footer />
    </>
  )
}
