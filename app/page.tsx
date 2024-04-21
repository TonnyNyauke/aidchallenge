'use client'
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push('/homepage');
  }
  
  return (
    <main className="h-screen flex justify-center items-center p-6 bg-gray-300">
      <div className="justify-center items-center border rounded-md shadow-md w-3/6">
        <form className="px-8 pt-6 pb-8 mb-4 bg-gray-200 rounded" onSubmit={handleSubmit}>
          <input type="text" placeholder="School..."
          className="w-full p-4 my-2 text-sm leading-tight border rounded shadow appearance-none
          focus:outline-blue-500 focus:shadow-outline"/>
          <input type="password" placeholder="Password..." 
          className="w-full p-4 my-2 text-sm leading-tight border rounded shadow appearance-none
          focus:outline-blue-500 focus:shadow-outline"/>
          <button type="submit"
          className="w-full my-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-md 
          hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >Login</button>
        </form>
      </div>
    </main>
  );
}
