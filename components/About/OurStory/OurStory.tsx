import Item1Story from "./Item1Story"
import Item2Story from "./Item2Story"

const OurStory = () => {
    return(
        <section id='our-story' className='flex flex-col gap-5 -mt-12 items-stretch justify-center px-7 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
            <Item1Story />
            <Item2Story />
        </section>
    )
}
export default OurStory