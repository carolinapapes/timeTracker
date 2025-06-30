import { Card } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import ActivityHeatMap from "@/components/ui/ActivityHeatMap"

export default function ActivityHeatMapCard() {
  return (
			<Card className="p-6 bg-gray-100 grid grid-rows-[2rem_auto] grid-cols-[100%] gap-4">
				<p className="scroll-m-20 text-xl font-semibold tracking-tight text-balance">
					Recent times logs
				</p>
				<div>
						<div className="flex h-5 items-center space-x-4 text-xs">
						<p>All</p>
						<Separator orientation="vertical" className="bg-black h-max"/>
						<p>Tag 1</p>
						<Separator orientation="vertical" />
						<p>Tag 2</p>
						</div>
					<div className="rounded-b-xl overflow-clip" style={{ margin: ' 0 -24px -24px -24px' }}>
						<div className="scroll-auto overflow-y-auto px-6 pb-3" >
							<ActivityHeatMap />
						</div>
					</div>
				</div>
			</Card>
  )
}
