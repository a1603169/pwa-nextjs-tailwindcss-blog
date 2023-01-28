import Form from "@/components/Form";
import SocialLinks from "@/components/SocialLinks";
import Transition from "@/components/Transition";

export default function ContactPage() {
  return (
    <Transition>
      <div className="flex justify-evenly items-center max-lg:flex-col mx-5">
        {/* MX-5 FOR MOBILE MINIMUM 360PX */}
        <div className="max-xl:mt-10">
          <h1 className="text-3xl text-indigo-400 max-lg:text-center">
            GET IN TOUCH.
          </h1>
          <br />
          <p className="text-xl text-indigo-400 max-lg:text-center">
            I am available on my email. Here are links of myself.
          </p>
          <br />
          <SocialLinks />
        </div>
        <Form />
      </div>
    </Transition>
  );
}
