import Image from "next/image";
import { socialLinks } from "./lib/config";
import buildInfo from "../build-info.json";


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
      <h2 className="slogan">Builder / Tinkerer / Sports</h2>
      <div className="prose prose-neutral dark:prose-invert">
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
            className="font-bold underline"
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
        <p>
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
        <br />
        <p className="mb-4">
          {`Last updated on ${buildInfo.lastUpdated}. I can be reached at: `}{" "}
          <a
            className="font-bold underline"
            href="mailto:samratshakya5@gmail.com"
          >{`samratshakya5@gmail.com`}</a>
        </p>
      </div>
    </section>
  );
}
