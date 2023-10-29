import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Blog from '../components/Blogs/blog';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Projects from '../components/Projects/projects';
import Work from '../components/Work/work';




const Page = () => {

  return (
    <div>
      <Navbar/>
      <Header/>    
      <Work/>    
      <section
        id="projects"
        className="flex h-screen text-center text-white bg-black"
      >
        <h1 className="m-auto font-bold text-purple-600 font-waterfall text-7xl ">
          Projects
        </h1>
      </section>      
      <section
        id="blog"
        className="flex h-screen text-center text-white bg-black"
      >
        <h1 className="m-auto font-bold text-purple-600 font-waterfall text-7xl ">
          Blog
        </h1>
      </section>      
      <section
        id="contact"
        className="flex h-screen text-center text-white bg-black"
      >
        <h1 className="m-auto font-bold text-purple-600 font-waterfall text-7xl ">
          Contact
        </h1>
      </section>      
      <section
        id="footer"
        className="flex h-screen text-center text-white bg-black"
      >
        <h1 className="m-auto font-bold text-purple-600 font-waterfall text-7xl ">
          Footer
        </h1>
      </section>    </div>
  );
};

export default Page;
