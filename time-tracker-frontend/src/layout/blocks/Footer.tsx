export default function Footer() {
  return (
	<div className="flex items-center justify-center w-full h-16 bg-black text-white left-0 z-50 px-4 sm:px-15 xl:px-60">
		<p className="text-sm">
			&copy; {new Date().getFullYear()} Time Tracker. All rights reserved
		</p>
	</div>
  )
}
