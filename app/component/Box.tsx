import React from 'react'
interface BoxProps{
    children:React.ReactNode;
    className?:string;
}
const Box:React.FC<BoxProps> = ({children,className}) => {
  return (
    <div className={`bg-neutral-900 rounded-lg h-fit w-full ${className}`}>{children}</div>
  )
}
export default Box