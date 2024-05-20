'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function NavMenu(){
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/show-error"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Show Error</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/loading"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Loading</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/not-found"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Not Found</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}