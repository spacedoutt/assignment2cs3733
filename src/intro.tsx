type IntroProps = {
    firstName: string;
    secondName: string;
};
const Intro: React.FC<IntroProps> = ({ firstName, secondName }) => {
    return (
        <>
            <p style={{fontSize: '20px'}}>Hey I'm  {firstName}, most people either call me Matt or Crane, I do not
                mind.</p>
            <p>I'm a Junior from Groton Mass studying Aerospace on the Astro track and Computer Science.</p>
            <p>I've been swimming competitively since 4th grade and my favorite pool to compete at was WPI's pool.</p>
            <p>I'm currently taking AE 4410, CS 4516, CS 2223 and obviously Soft Eng.</p>
            <p>Outside of school I can be found at the gym or at my computer playing a vareity of games, currently I'm
                big into BG3, The Finals, OW2, LoL, Helldivers, RoK and I'm doing a Borderlands Pre-Sequel run
                through.</p>
            <p>I've also been coding on and off for a few years, my dad got me into it since he's pretty big in the
                computer science industry.</p>
            <p>I also watch a ton of shows ranging from peaky blinders to one piece.</p>

            <p>Hi, I am  {secondName} and I love to play videogames, they are great. I get to have fun regardless of the weather or other people's
                plans, or my social anxiety.</p>
            <p style={{fontSize: '20px'}}> This is a second paragraph! I don't really know what to write, but did I
                mention I loved video games!?</p>
            <p>Here are some of the games I have played recently:</p>
        </>
    )
}

export default Intro