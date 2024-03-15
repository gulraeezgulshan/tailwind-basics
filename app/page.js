import React from "react";

const Home = () => {
	return (
		<div className="Parent">
			<div className="flex flex-col bg-gray-200 h-screen">
        <div className="bg-green-200 flex p-5">Header</div>
        <div className="bg-yellow-200 flex flex-row flex-grow">
          <div className="bg-pink-200 w-1/4 hidden md:flex" >Left Sidebar</div>
          <div className="bg-slate-200 w-full md:w-2/4 md:flex-grow">Main Content</div>
          <div className="bg-pink-200 w-1/4 hidden md:flex">Right Sidebar</div>

        </div>
        <div className="bg-red-200 flex p-5">Footer</div>
      </div>
		</div>
	);
};

export default Home;
