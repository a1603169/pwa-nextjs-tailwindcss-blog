import { useRouter } from 'next/router';

export default function Disabled() {
  // return the project page automatically after 3 seconds
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div className="flex justify-center items-center py-10">
      <h1 className="text-2xl text-indigo-400 text-center">
        This page/project is currently disabled. Please check back later. Page will be redirected to the Home page.asdhasdhgasdh
      </h1>
    </div>
  )
}
