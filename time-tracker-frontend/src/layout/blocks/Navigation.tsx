


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"


export default function Navigation() {
  return (
	<NavigationMenu>
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuLink asChild> 
					<Link to="/tracker" className="flex items-center h-full px-4 text-sm font-medium text-gray-700 hover:text-gray-900">
					Simple Tracker
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink asChild> 
					<Link to="/dashboard" className="flex items-center h-full px-4 text-sm font-medium text-gray-700 hover:text-gray-900">
					Dashboard
					</Link>
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink href="/versions"> Versions
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
  )
}
