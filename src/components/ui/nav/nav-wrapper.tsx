interface NavWrapperProps {
    children: React.ReactNode
}
export const NavWrapper=({children}:NavWrapperProps)=>{
return <ul className="space-y-4">
    {children}
</ul>
}