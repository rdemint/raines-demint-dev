import Head from 'next/head'
import Image from 'next/image'
import Hero from "@/components/Hero"
import Container from '../components/Container'
import { CodeBracketIcon } from '@heroicons/react/24/solid'


export default function Home() {

  const javaScript = {title: "JavaScript", color: "yellow-600"}
  const css = {title: "CSS", color: "purple-600"}
  const typeScript = {title: "TypeScript", color: "blue-600"}
  const python = {title: "Python", color: "blue-200"}
  const html = {title: "HTML", color: "red-300"}
  const cSharp = {title: "C#", color: "green-400"}

    const projects = [
        { 
          name: "Collectors Edition Bouldering", 
          details: "A blog highlighting some of Lake Tahoes best rock climbing.",
          image: "/collectors_edition_snip.png",
          url: "https://www.collectorseditionbouldering.com",
          simpleUrl: "collectorseditionbouldering.com",
          code: "github.com/rdemint/collectors-edition",
          tech: [javaScript, html, css]
         },
         {
          name: "Developer Portfolio (this site)",
          details: "My developer portfolio highligting some of my work.",
          image: "/raines_dev.png",
          url: "https://www.rainesdemint.dev",
          simpleUrl: "rainesdemint.dev",
          code: "https://www.github.com/rdemint/raines-demint-dev",
          tech: [javaScript, html, css]
         },
        { 
          name: "Medical Device Consulting", 
          details: "A personal site for medical device consulting.",
          image: "/raines_qms_snip.png",
          url: "https://www.rainesdemint.com",
          simpleUrl: "rainesdemint.com",
          code: "https://www.github.com/rdemint/rd-qms-site",
          tech: [javaScript, html, css]
         },
        { 
          name: "Pad Color Designer", 
          details: "A tool for designing color schemes for rock climbing crash pads.",
          image: "/color_selector_snip.png",
          url: "https://www.organic-color-selector.vercel.app",
          simpleUrl: "organic-color-selector.vercel.app",
          code: "https://www.github.com/rdemint/organic-color-selector",
          tech: [javaScript, html, css]
         },
        { 
          name: "Healthcare Office Reporting", 
          details: "An admin frontend dashboard in Angular, backend in Django.",
          image: "/form_reporting_snip.png",
          url: "https://www.github.com/rdemint/formreporting2",
          simpleUrl: "github.com/rdemint/formreporting2",
          code: "https://www.github.com/rdemint/formreporting2",
          tech: [typeScript, javaScript, html, python, css]
         },
        { 
          name: "Word Document Editor", 
          details: "C# WPF application for batch search and editing of Word documents.",
          image: "/qms_hero.png",
          url: "https://www.github.com/rdemint/qmshero",
          simpleUrl: "github.com/rdemint/qmshero",
          code: "https://www.github.com/rdemint/qmshero",
          tech: [cSharp]
         }
    ]
 
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Developer portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
              <Hero />
              <div className="w-full flex justify-center">
                <div className="py-24 px-12 flex flex-col space-y-4 text-[#BCCDC1] text-justify">
                    <p>I&apos;m Raines, thanks for checking out some of my software projects.</p>
                    <p> By day I&apos;m a medical device consultant, but since 2017 I&apos;ve been fascinated by the world of code and continually building my skills.</p>
                    <p>I built this site to showcase my work.</p>
                  </div>
              </div>
              <Container>
                  <h3 className="text-4xl text-center text-[#BCCDC1]">Project showcase</h3>
                  {projects.map((project) => (
                      <div key={project.name} className="flex-col space-y-4 md:flex md:space-x-4 m-4 p-4 bg-night-800 rounded-lg justify-between">
                          <div className='flex-col space-y-4'>
                            <h4 className="text-alien-200 text-2xl">{project.name}</h4>
                            { project?.url ? <a className="text-night-300" href={project.url}>{project.simpleUrl}</a> : <></>}
                            <p className="text-night-200 tracking-tight">{project.details}</p>
                            
                            <div className='flex flex-row flex-wrap space-x-2'>
                            <a href={project.code}>
                              <svg fill="currentColor" viewBox="0 0 24 24" className='h-6 w-6'>
                                  <path
                                      fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                            </a>
                            { project.tech.map((t)=> (
                              <div key={t.title} className="flex flex-col">
                                <div className="flex items-center">
                                    <div className={`w-2 h-2 bg-alien-300 rounded`}></div>
                                    <p className='px-1 text-night-300'>{t.title}</p>
                                </div>
                              </div>
                                ))}
                          </div>
                          </div>
                          <div>
                            { project?.image ? <Image src={project.image} width="1755" height="1280"/> : <></> }
                          </div>
                        </div>
                    ))
                  }
              </Container>
              <div className='px-8 h-96 flex items-center justify-center bg-night-700 w-full'>
                <div className='text-justify max-w-3xl'>
                  <h2 className='text-4xl text-alien-200 py-4'>About me</h2>
                  <p>I have been coding since 2017 with a focus on web development.  These days I am most active in Javascript using NextJs and Tailwind.</p>
                  <br/>
                  <p>Connect with me at any of the following.</p>
                  <br/>
                  <p><a className="text-cyan-600" href="https://www.github.com/rdemint">github.com/rdemint</a></p>
                  <p><a className="text-cyan-600" href="https://linkedin.com/in/raines-demint">linkedin.com/in/raines-demint</a></p>
                  <p><a className="text-cyan-600" href="https://instagram.com/rainesmint">IG @rainesmint</a></p>
                </div>
              </div>
          </main>
      </div>

    )
}
