import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../@/components/ui/navigation-menu";
import './Navigation.css'

export function Navigation() {
    return (
        <NavigationMenu style={{ display: 'flex',justifyContent: 'center', backgroundColor: '#333', padding: '10px 0' }}>
          <NavigationMenuList style={{ display: 'flex',  flexDirection: 'row', textDecoration:'none'}}>
            <NavigationMenuItem style={{ margin: '0 15px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease' }}>
              Products
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem style={{ margin: '0 15px' }}>
              <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease' }}>
                Cart
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem style={{ margin: '0 15px' }}>
              <Link to="/sign-in" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease' }}>
                Sign In
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
}