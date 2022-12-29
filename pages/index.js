import Head from 'next/head'
import Image from 'next/image'
import Hero from "@/components/Hero"
import Link from 'next/link'
import Container from '../components/Container'
import { CheckBadgeIcon, CodeBracketIcon } from '@heroicons/react/24/solid'


export default function Home() {

  const javaScript = {title: "JavaScript", color: "yellow-600"}
  const css = {title: "CSS", color: "purple-600"}
  const typeScript = {title: "TypeScript", color: "blue-600"}
  const python = {title: "Python", color: "blue-200"}
  const html = {title: "HTML", color: "red-300"}
  const cSharp = {title: "C#", color: "green-400"}

    const projects = [
        { 
          name: "Collectors Edition", 
          details: "A blog highlighting some of Lake Tahoes best rock climbing.",
          image: "/collectors_edition_snip.png",
          url: "https://www.collectorseditionbouldering.com",
          code: "github.com/rdemint/collectors-edition",
          tech: [javaScript, html, css]
         },
         {
          name: "Developer Portfolio (this site)",
          details: "My developer portfolio highligting some of my work.",
          image: "/raines_dev.png",
          url: "https://www.rainesdemint.dev",
          code: "https://www.github.com/rdemint/raines-demint-dev",
          tech: [javaScript, html, css]
         },
        { 
          name: "Medical Device Training", 
          details: "A personal site for medical device consulting.",
          image: "/raines_qms_snip.png",
          url: "www.rainesdemint.com",
          code: "https://www.github.com/rdemint/rd-qms-site",
          tech: [javaScript, html, css]
         },
        { 
          name: "Pad Color Designer", 
          details: "A tool for designing color schemes on rock climbing crash pads.",
          image: "/color_selector_snip.png",
          url: "https://www.organic-color-selector.vercel.app",
          code: "https://www.github.com/rdemint/organic-color-selector",
          tech: [javaScript, html, css]
         },
        { 
          name: "Healthcare Office Reporting", 
          details: "An admin frontend dashboard in Angular, backend in Django.",
          image: "/form_reporting_snip.png",
          url: "https://www.github.com/rdemint/formreporting2",
          code: "https://www.github.com/rdemint/formreporting2",
          tech: [typeScript, javaScript, html, python, css]
         },
        { 
          name: "Word Document Editor", 
          details: "C# WPF application for batch search and editing of Word documents.",
          image: "/qms_hero.png",
          url: "https://www.github.com/rdemint/qmshero",
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
                <div className="py-24 px-12 max-w-md flex flex-col space-y-4 text-[#BCCDC1] text-justify">
                    <p>I&apos;m Raines, thanks for checking out some of my software projects.</p>
                    <p> By day I&apos;m a medical device consultant, but since 2017 I&apos;ve been fascinated by the world of code and continually building my skills.</p>
                    <p>I built this site to showcase my work.</p>
                  </div>
              </div>
              <Container>
                  <h3 className="text-2xl text-center text-night-400">Project showcase</h3>
                  {projects.map((project) => (
                      <div key={project.name} className="flex-col space-y-4 md:flex md:space-x-4 m-4 p-4 bg-night-800 rounded-xl justify-between">
                          <CodeBracketIcon className="text-slate-200 h-6 w-6"/>
                          <div className='flex-col space-y-4'>
                            <h4 className="text-[#BCCDC1] text-2xl">{project.name}</h4>
                            { project?.url ? <a href={project.url}>{project.url}</a> : <></>}
                            <p className="text-slate-300 tracking-tight">{project.details}</p>
                            <div className='flex flex-row space-x-4'>
                            { project.tech.map((t)=> (
                              <div key={t.title} className="flex items-center">
                                <div className={`w-2 h-2 bg-alien-300 rounded`}></div>
                                <p className='px-1 text-night-300'>{t.title}</p>
                              </div>
                                ))}
                          </div>
                          </div>
                          <div className="max-w-1/2">
                            { project?.image ? <Image src={project.image} width="1755" height="1280"/> : <></> }
                          </div>
                        </div>
                    ))
                  }
              </Container>
              <div className="my-6 px-6 max-w-3xl space-y-4">
                  <p>I&apos;ve climbed many overrated and underrated boulders in the Tahoe and greater Sierras. I suppose I&apos;ll throw yet another opinion into the mix!</p>
              </div>

          </main>
      </div>

    )
}
