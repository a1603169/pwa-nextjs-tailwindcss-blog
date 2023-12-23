import Transition from "@/components/Transition";
import Transition_Slower from "@/components/Transition_Slower";
import Head from "next/head";

export default function Home() {
  return (
    <Transition_Slower>
      <div className="text-indigo-400 mx-2">
        <div className="flex justify-center items-center text-center flex-col">
          <h1 className="text-7xl max-md:text-2xl"> NOTHING IS IMPOSSIBLE </h1>
          <Transition_Slower>
            <h1 className="text-6xl max-md:text-2xl my-10">TRUST YOURSELF</h1>
            <Transition_Slower>
              <h1 className="text-5xl max-md:text-xl my-10">MAKE IT SIMPLE</h1>
              <Transition_Slower>
                <h1 className="text-4xl max-md:text-lg my-10">KEEP LEARNING</h1>
              </Transition_Slower>
              <Transition_Slower>
                <h1 className="text-2xl max-md:text-lg my-10"> BE HAPPY </h1>
                <Transition_Slower>
                  <h1 className="text-2xl max-md:text-md mt-10">{"⁎ᵕᴗᵕ⁎"} </h1>
                  <Transition_Slower>
                  <h1 className="text-2xl max-md:text-md mt-10">{"^_^7"} </h1>
                  <Transition_Slower>
                  <h1 className="text-2xl max-md:text-md mt-10">{":)"}</h1>
                  </Transition_Slower>
                  </Transition_Slower>
                </Transition_Slower>
              </Transition_Slower>
            </Transition_Slower>
          </Transition_Slower>
        </div>
      </div>
    </Transition_Slower>
  );
}
