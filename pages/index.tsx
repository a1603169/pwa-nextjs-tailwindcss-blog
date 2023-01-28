import Transition from "@/components/Transition";
import Head from "next/head";

export default function Home() {
  return (
    <Transition>
      <div>
        <div className="flex justify-center items-center text-center">
          This is Home
        </div>
      </div>
    </Transition>
  );
}
