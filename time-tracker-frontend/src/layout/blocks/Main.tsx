
export default function Main({ children }: { children: React.ReactNode }) {
  return (
	<main className="bg-gray-50 grow flex flex-col">
		<div className="flex flex-col grow px-4 sm:px-15 xl:px-0 py-3 pt-8 xl:max-w-5xl xl:mx-auto h-full ">
			{children}
		</div>
	</main>
  )
}
