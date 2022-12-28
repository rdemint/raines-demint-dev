import Head from 'next/head'
import Hero from "@/components/Hero"
import Link from 'next/link'
import Container from '../components/Container'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function Home() {

    const criteria = [
        { name: "Collectors Edition", details: "A blog highlighting some of Lake Tahoes best rock climbing." },
        { name: "Medical Device Training", details: "This is my personal site for medical device consulting." },
        { name: "movement", details: "A variety of movement and techniques is a plus." },
        { name: "rock quality", details: "The texture and shape of the holds.  Too sharp or extremely polished is a deal breaker." },
        { name: "aesthetics", details: "The color and patterns in the rock as well as the overall shape and positioning of the boulder." }
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
                <div className="py-24 max-w-md flex flex-col space-y-4 text-[#BDD0C4] text-justify">
                    <p>I&apos;m Raines, thanks for checking out some of my software projects.</p>
                    <p> By day I&apos;m a medical device consultant, but since 2017 I&apos;ve been fascinated by the world of code and continually building my skills.</p>
                    <p>I built this site to showcase my work.</p>
                  </div>
              </div>
              <Container>
                  <h3 className="text-2xl text-center text-lime-100">Project showcase</h3>
                  {criteria.map((c) => (
                      <div key={c.name} className="flex items-center space-x-6 h-24 m-4 bg-slate-50 rounded-xl px-4">
                          <CheckBadgeIcon className="text-slate-800 h-8 w-8 flex-none bg-yellow-400 rounded-xl"/>
                          <div>
                            <h4 className="text-slate-700 font-medium">{c.name}</h4>
                            <p className="text-zinc-600 tracking-tight">{c.details}</p>
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
