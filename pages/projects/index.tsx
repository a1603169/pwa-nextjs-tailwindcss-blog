import Card from "@/components/Card";
import Transition from "@/components/Transition";

// it would be great if I can have a api call that can fetch all the projects from github

export default function ProjectsPage() {
  return (
    <Transition>
      <div className="grid gap-10 grid-cols-3 mx-10 max-lg:grid-cols-2 max-sm:grid-cols-1 pb-28">
        <Card
          title="FRINCOIN / WIP"
          description="Bitcoin Investment Simulation App with ReactJS"
          href="https://github.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app"
        />
        <Card
          title="NEW YEAR FORUM"
          description="Simple CRUD forums with VanillaJS"
          href="https://github.com/a1603169/SPA_new-year-message_vanillaJS"
        />
        <Card
          title="DRAG & DROP"
          description="Simple Drag & Drop with Typescript"
          href="https://github.com/a1603169/typescript-drag-and-drop"
        />
        <Card
          title="STARBUCKS KOREA LAYOUT"
          description="Basic Markup with HTML & CSS & JS"
          href="https://tender-morse-9e7aaf.netlify.app/"
        />
        <Card
          title="CHURCH CALENDAR / WIP"
          description="React Calendar with Church Events API with ReactJS"
          href="https://github.com/a1603169/church_calendar"
        />
        <Card
          title="PORTFOLIO WEBSITE"
          description="NextJS + TailwindCSS + TypeScript"
          href="https://github.com/a1603169/Seunghun_bang-portfolio"
        />
        <Card
          title="E-Commerce Store / Rens Original"
          description="LiquidJS + Shopify + APIs Integrations"
          href="https://rensoriginal.eu"
        />
        <Card
          title="NFT LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/nft"
        />
        <Card
          title="HOODIE LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/elemental-hoodie"
        />
        <Card
          title="NOMAD LP / Rens Original"
          description="Shopify + Webflow + (HTML + CSS + JS)"
          href="https://rensoriginal.eu/pages/nomad"
        />
        <Card
          title="BEESH LP / Beesh"
          description="React + Bootstrap"
          href="https://beesh.fi"
        />
        <Card
          title="DEV.INTERVIEW QUIZ / WIP"
          description="NextJS + TailwindCSS + TypeScript + APIs"
          href="https://github.com/a1603169/frontend_quiz"
        />
        <Card
          title="FACE ATTENDANCE / WIP"
          description="Using Three JS + Face API"
          href="https://github.com/a1603169/face-attendance-3js.git"
        />
        <Card
          title="MOBILE MINI GAME"
          description="React Native + Expo"
          href="https://github.com/a1603169/mini-game-app-react-native"
        />
      </div>
    </Transition>
  );
}
