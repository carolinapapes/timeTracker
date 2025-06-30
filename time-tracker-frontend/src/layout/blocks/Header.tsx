import Navigation from "./Navigation";


export default function Header() {
  return (
	<header className="inset-x-0 top-0 z-50 bg-white shadow-md sticky">	
	  <div className="flex items-center justify-between px-4 sm:px-15 xl:px-0 py-3 xl:max-w-5xl xl:mx-auto">
		<h1 className="text-xl font-bold">Time Tracker</h1>
		<Navigation />
	  </div>
	</header>
  )
}
