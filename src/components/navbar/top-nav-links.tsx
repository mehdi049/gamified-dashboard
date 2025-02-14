import { NavItem } from "../ui/nav/nav-item"
import { NavWrapper } from "../ui/nav/nav-wrapper"

export const TopNavLinks = () => {

    const navItems=[{
        icon:"dashboard",
        href:"#",
        isActive:true,
        children:"Dashboard"
    },{
        icon:"global",
        href:"#",
        isActive:false,
        children:"Emporium"
    },{
        icon:"library",
        href:"#",
        isActive:false,
        children:"Library"
    },{
        icon:"studio",
        href:"#",
        isActive:false,
        children:"Studio +"
    },{
        icon:"ocoins",
        href:"#",
        isActive:false,
        children:"Ocoins"
    }]

    return <NavWrapper>
        {navItems.map((item,index)=><NavItem key={index} icon={item.icon} href={item.href} isActive={item.isActive}>{item.children}</NavItem>)}

        </NavWrapper>
}