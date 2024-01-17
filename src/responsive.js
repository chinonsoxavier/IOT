import {css} from 'styled-components'

// export const smobile = (props)=>{
//    return css`
//    @media only screen and (max-width:350px){
//     ${props}
//    }`
// }

// should be //438
// export const mmobile = (props)=>{
//    return css`
//    @media only screen and (max-width:458px){ 
//    ${props}
// }`
// }
export const Lmobile = (props)=>{
   return css`
   @media only screen and (max-width:438px){
    ${props}
   }`
}
export const mobile = (props)=>{
   return css`
   @media only screen and (max-width:380px){
    ${props}
   }`
}
export const smobile = (props)=>{
   return css`
   @media only screen and (max-width:340px){
    ${props}
   }`
}
export const ssmobile = (props)=>{
   return css`
   @media only screen and (max-width:280px){
    ${props}
   }`
}
// export const lmobile = (props)=>{
//    return css`
//    @media only screen and (max-width:520px){
//     ${props}
//    }`
// }
// export const ltablet = (props)=>{
//    return css`
//    @media only screen and (max-width:890px){
//     ${props}
//    }`
// }
// export const metablet = (props)=>{
//    return css`
//    @media only screen and (max-width:830px){
//     ${props}
//    }`
// }
export const tablet = (props)=>{
   return css`
   @media only screen and (max-width:768px){
    ${props}
   }`
}
export const stablet = (props)=>{
   return css`
   @media only screen and (max-width:580px){
    ${props}
   }`
}
export const Laptop = (props)=>{
   return css`
   @media only screen and (max-width:1200px){
    ${props}
   }`
}
export const SLaptop = (props)=>{
   return css`
   @media only screen and (max-width:920px){
    ${props}
   }`
}
// export const CustomerBreakpoint = (props)=>{
//    return css`
//    @media only screen and (max-width:650px){
//     ${props}
//    }`
// }
// export const InventoryBreakpoint = (props)=>{
//    return css`
//    @media only screen and (max-width:1099){
//     ${props}
//    }`
// }