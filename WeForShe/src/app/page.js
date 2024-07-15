import Image from "next/image";
import Card from "./components/card";

const card_info = {
  'card 1' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 2' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 3' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 4' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 5' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 6' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 7' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 8' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 9' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
  'card 10' : {
    title:"Contestant Name",
      content : `Votes:`,
      outfit:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25260156/2023/9/29/3d04b8b4-1104-4801-bed4-17ebf98223301695968509595KALINIWomenPinkEthnicMotifsYokeDesignRegularGottaPattiKurtaw1.jpg",
      extra1:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30055405/2024/6/28/e3c7ee91-0764-414f-b1cc-3937b3eccd411719534643392HARTIGANFlatformSandalswithLaserCuts4.jpg",
      extra2:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26793426/2024/1/5/77e84e09-4510-405c-a8f2-7ed88b66e4841704457663612KushalsFashionJewelleryRedClassicDropEarrings2.jpg",
      extra3:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25532136/2023/10/18/df8177dc-0c1f-4809-9901-601408d5c1781697625017114Bangle2.jpg"

  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-5 md:p-24 grid grid-cols-2 md:grid-cols-5 gap-4">
      {Object.keys(card_info).map((cardId) => (
        <Card key={cardId} {...card_info[cardId]} />
      ))}
    </main>
  );
}

{/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}