import Form from "@/components/Form";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <div className="flex justify-evenly items-center max-xl:flex-col">
      <div className="max-xl:mt-10">
        <h1 className="text-3xl text-indigo-400">GET IN TOUCH.</h1>
        <br />
        <p className="text-xl text-indigo-400">
          I am available on my email. Here are links of myself.
        </p>
        <br />
        <SocialLinks />
      </div>
      <Form />
    </div>
  );
}
