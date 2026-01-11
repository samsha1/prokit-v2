import Image from "next/image";
import { socialLinks } from "./lib/config";

import Slider from "./components/slider";


export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="https://fnz1dopstoar937o.public.blob.vercel-storage.com/samsha-P6QWV1ArF5qqR8HPrfyIGISoYsbwWh.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-20 mt-20 lg:mb-20 mb-15 mx-auto sm:float-right sm:ml-10 sm:mb-10 grayscale hover:grayscale-0"
          unoptimized
          width={250}
          height={250}
          priority
        />
      </a>
      <h2 className="slogan">Build / Tinker / Explore</h2>
      <div className="prose prose-lg prose-neutral dark:prose-invert">
        <p className="mb-4">
          {`I am a hobbyist Software Engineer more inclined and fascinated towards Data.`}
        </p>
        <p className="mb-4">
          {`For a brief period, I was in the academia - at the Tribhuvan University, Nepal 
                from where I obtained a BSC. in Computer Science and Information Technology. (2018).`}
        </p>

        <p className="mb-4">
          {`In 2017, I moved to Kathmandu for my internship where I 
                embarked upon the opportunities that lies in Software Engineering. 
                Upon working with core engineering team in`}{" "}
          <a
            href="https://www.berrybytes.com"
          >{`BerryBytes`}</a>{" "}
          {`(then Nepallink Network) I got chance to explore 
                on building a web hosting platform and an integrated hosting portal. 
                This gave me the chance to work on real-world projects and develop my communication skills. 
                I also learned about advanced operational integration, which further motivated my passion for system engineering.
                `}
        </p>
        <p className="mb-4">
          {`Following the completion of my bachelor's degree, I embarked on an 
                enriching journey at`}{" "}
          <a
            className="font-bold underline"
            href="https://www.grepsr.com"
          >{`Grepsr`}</a>{" "}
          {`as a software engineer, immersing myself in the dynamic realm of data exploration. This role provided me with hands-on experience in processing expansive data pipelines, orchestrating proxy servers, 
                and deploying containerized applications onto Kubernetes infrastructure.`}
        </p>
        <p className="mb-4">
          {`In a world driven by data, its evolutionary usage continually shapes the 
                technological landscape. The concepts of Distributed Systems, 
                Big Data, and Cloud Computing have revolutionized technology on a large scale, 
                and we are unquestionably in the era of a data-driven economy.
                With almost half a decade of experience at Grepsr, I honed my skills in System Design and Cloud Data Architecture, gaining insights that have proved invaluable. 
                Currently, Grepsr handles nearly  `}{" "}
          <span className="font-bold">{`one billion`}</span>{" "}
          {`data units on a daily basis. Working as a core backend engineer to manage such intricate data has been a challenging pursuit. 
                This complexity is what propels my sense of pride in deploying a system that works seamlessly by solving real-world problems of data accessibility. `}
        </p>
        <p>
           {`I identify strongly as an explorer, a worldview that drives everything I do. Moving to new places, travelling, working, meeting to new people with different point of view, language & culture has always captivated me. Somewhere, I have also realised,something quietly beautiful in how different we all seem—yet, beneath it all, I’ve come to see how alike we are: kind at heart, longing for connection, and working hard in hope of a more beautiful future. The cities, the mountains, the streets, and even the silences I’ve passed through feel like mirrors—each revealing a little more of who I am and who I aspire to become - travel not to escape, but to remember - and the memories I carry, they stay with me, etched into eternity.. Something I try to live by, a line from a book`}{" "}  
           <a href="https://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/160941280X">{`Delivering happiness`}</a>
        </p>
        <blockquote className="border-l-4 border-neutral-400 pl-6 italic text-neutral-700 my-6">
          <p className="mb-2">
            {`I have committed to living by the philosophy that experiences were much more important to me than material things.`}
          </p>
          <footer className="text-sm text-neutral-500">— Tony Hsieh</footer>
        </blockquote>
        <p>
          {` Experience comes from work, love, family, travel, books and it leads to information, information sparks questions, and questions awaken curiosity. Curiosity seeks answers. I think all that we truly long for is freedom, freedom not from work, people, obligations but from our own mind — the kind that comes with the absence of wanting. I think that's how we learn to free ourselves. As`}{" "} <a href="https://en.wikipedia.org/wiki/Chris_McCandless">{`Chris McCandless`}</a> { `says` } <i>{`Absolute Freedoom`}</i>
        </p>

        <div className="w-full h-auto">
          <Image
            src="https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/pokhara-nepal.jpg"
            alt="Beyond Cloud - Pokhara Nepal"
            className="w-full h-auto object-cover"
            height={300}
            width={800}
          />
        </div>

        <p>
          {`I am fortunate and grateful for the work I do and the industry. I have unconditionally enjoyed what I do for more than 10 years now. Tech has opened me that freedom and I don’t take for granted. I’ve come to believe that with honesty & hardwork, almost anything is possible. The opportunity is ubiquitous - we need to stay true, keep learning, write often, be less control by distraction, meditate, and more importantly JUST DO. The possibility is endless and sky is the limit. Working remotely with people across the world has given me that sense, no matter where we are and come from we together can achieve our goal. With the right team, a healthy culture, and integrity in what we do, everything else tends to fall into place.`}
        </p>
          
        {/* <Slider images={[
          "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/monserat-full.jpg",
          "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/orthodox-cathedral.jpg"
        ]} /> */}

        

        
      </div>
    </section>
  );
}
