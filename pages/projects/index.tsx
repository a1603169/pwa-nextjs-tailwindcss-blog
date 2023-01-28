import Card from "@/components/Card";
import Transition from "@/components/Transition";

// it would be great if I can have a api call that can fetch all the projects from github

export default function ProjectsPage() {
  return (
    <Transition>
      <div className="grid gap-10 grid-cols-3 mx-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Card
          title="FRINCOIN (ReactJS)"
          description="SEMI SIMULATED BITCOIN INVESTMENT APP"
          href="https://github.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app"
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="NEW YEAR FORUM (VanillaJS)"
          description="BASIC CRUD SPA WITH VANILLA JS"
          href="https://github.com/a1603169/SPA_new-year-message_vanillaJS"
          image="https://raw.githubusercontent.com/a1603169/SPA_new-year-message_vanillaJS/master/public/posts_home_page.png"
        />
        <Card
          title="DRAG & DROP (Typescript)"
          description="SIMPLE DRAG & DROP APP WITH TYPESCRIPT"
          href="https://github.com/a1603169/typescript-drag-and-drop"
          image="https://raw.githubusercontent.com/a1603169/typescript-drag-and-drop/master/readme-images/Screenshot%202023-01-22%20at%203.23.45.png"
        />
        <Card
          title="STARBUCKS KOREA LAYOUT"
          description="BASIC MARKUP WITH HTML & CSS & JAVASCRIPT"
          href="https://tender-morse-9e7aaf.netlify.app/"
          image="https://raw.githubusercontent.com/a1603169/Final_starbucks_layout/master/images/Screenshot%202023-01-28%20at%207.39.59.png"
        />
        <Card
          title="CHURCH CALENDAR (ReactJS)"
          description="React Calendar with Church Events API"
          href="https://github.com/a1603169/church_calendar"
          image="https://raw.githubusercontent.com/a1603169/church_calendar/master/public/Screenshot%202023-01-28%20at%207.46.48.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
        <Card
          title="dummy"
          description="DES"
          href=""
          image="https://raw.githubusercontent.com/a1603169/FRINCOIN_simulated_bitcoin_investment_app/master/src/assets/demo_image.png"
        />
      </div>
    </Transition>
  );
}
