import Image from "next/image";

export default function Home() {
  return (
    <div>
     <h1 className='text-[100px]'>TECH CLUB</h1>
     <div className='flex justify-center'>
     <img src='/TechClubLogo.png' width='75px'></img></div><br></br>
     <hr></hr><br></br>
    <h2>About:</h2>
    <p>Tech club is a club where people learn how to code and other stuff. </p>

    </div>
  );
}
