import {Azeret_Mono, Patua_One,  Yellowtail} from 'next/font/google';

const JostFont=Patua_One({
    subsets:['latin'],
    weight:'400'
})
const YellowtailFont=Yellowtail({
    subsets:['latin'],
    weight:'400'
})

const Azeret=Azeret_Mono({
    subsets:['latin'],
    weight:'400'
})
const AzeretM=Azeret_Mono({
    subsets:['latin'],
    weight:'500'
})


const TextFonts={JostFont,YellowtailFont,Azeret,AzeretM}
export default TextFonts