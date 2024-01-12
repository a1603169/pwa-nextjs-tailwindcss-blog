import Card from "@/components/Card";
import Transition from "@/components/Transition";

// it would be great if I can have a api call that can fetch all the projects from github

export default function ProjectsPage() {

  const imagePathChurch = "/assets/church.jpg"
  const imagePathDrag = "/assets/drag_drop.jpg"
  const imagePathWeb = "/assets/web_screen.png"
  const imagePathNewYear = "/assets/new_year.png" 
  const imagePathStarbucks = "/assets/starbucks.png"
  const imagePathFrincoin = "/assets/frincoin.png"
  const imagePathBeesh = "/assets/beesh.png"
  const imagePathRens = "/assets/rens_original.png"
  const imagePathNomad = "/assets/rens_nomad.png"
  const imagePathNFT = "/assets/rens_nft.png"
  const imagePathHoodie = "/assets/rens_hoodie.jpg"

  return (
    <Transition>
      <div className="grid gap-10 grid-cols-3 mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1 pb-28">
        <Card
          title="FRINCOIN / WIP"
          description="Bitcoin Investment Simulation App with ReactJS"
          href="https://github.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app"
          image={imagePathFrincoin}
          disabled={true}
        />
        <Card
          title="NEW YEAR FORUM"
          description="Simple CRUD forums with VanillaJS"
          href="https://github.com/a1603169/SPA_new-year-message_vanillaJS"
          image={imagePathNewYear}
        />
        <Card
          title="DRAG & DROP"
          description="Simple Drag & Drop with Typescript"
          href="https://github.com/a1603169/typescript-drag-and-drop"
          image={imagePathDrag}
        />
        <Card
          title="STARBUCKS KOREA LAYOUT"
          description="Basic Markup with HTML & CSS & JS"
          href="https://tender-morse-9e7aaf.netlify.app/"
          image={imagePathStarbucks}
        />
        <Card
          title="CHURCH CALENDAR / WIP"
          description="React Calendar with Church Events API with ReactJS"
          href="https://github.com/a1603169/church_calendar"
          image={imagePathChurch}
        />
        <Card
          title="PORTFOLIO WEBSITE"
          description="NextJS + TailwindCSS + TypeScript"
          href="https://github.com/a1603169/nextjs-tailwindcss-blog-portfolio"
          image={imagePathWeb}
        />
        <Card
          title="E-Commerce Store / Rens Original"
          description="LiquidJS + Shopify + APIs Integrations"
          href="https://rensoriginal.eu"
          image={imagePathRens}
          disabled={true}
        />
        <Card
          title="NFT LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/nft"
          image={imagePathNFT}
          disabled={true}
        />
        <Card
          title="HOODIE LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/elemental-hoodie"
          image={imagePathHoodie}
          disabled={true}
        />
        <Card
          title="NOMAD LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/nomad"
          image={imagePathNomad}
          disabled={true}
        />
        <Card
          title="BEESH LP / Beesh"
          description="React + Bootstrap"
          href="https://beesh.fi"
          disabled={true}
        />
        <Card
          title="DEV.INTERVIEW QUIZ / WIP"
          description="NextJS + TailwindCSS + TypeScript + APIs"
          href="https://github.com/a1603169/frontend_quiz"
          disabled={true}
        />
        <Card
          title="FACE ATTENDANCE / WIP"
          description="Using Three JS + Face API"
          href="https://github.com/a1603169/face-attendance-3js.git"
          disabled={true}
        />
        <Card
          title="MOBILE MINI GAME"
          description="React Native + Expo"
          href="https://github.com/a1603169/mini-game-app-react-native"
          disabled={true}
        />
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .grid {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .grid {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .grid {
            padding-left: 6rem;
            padding-right: 6rem;
          }
        }

        @media (min-width: 1025px) {
          .grid {
            padding-left: 8rem;
            padding-right: 8rem;
          }
        }
      `}</style>
    </Transition>
  );
}
