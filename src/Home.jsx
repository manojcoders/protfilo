import React  from "react";
// import React, {useEffect,useState} from "react";
import './App.css';

const Home = () => {
// const [text, setText] = useState("");
// const fullText = "Hi, I’m Manoj Kandhula 👋";
//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setText((prev) => prev + fullText.charAt(i));
//       i++;
//       if (i >= fullText.length) clearInterval(interval);
//     }, 100);
//   }, []);

  return (
    <div className="md:container md:mx-auto mx-auto header">
     <div className="grid grid-cols-12">
       <div className="grid-4 justify-center name">
      <div className="text-3xl md:text-5xl font-bold text-center mt-10">
      {/* {text} */}
      <span className="animate-pulse">|</span>
        </div>  
       </div>
     </div> 
    </div>
  )
};

export default Home;
