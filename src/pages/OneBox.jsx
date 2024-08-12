import React, { useState } from "react";

const OneBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-700 text-white h-full transition-all duration-300 ease-in-out ${
          isExpanded ? "w-1/5" : "w-1/15"
        }`}
        style={{ width: isExpanded ? "20%" : "5%" }}
      >
        <div className="h-20 bg-gray-800 flex items-center justify-center">
          <button
            onClick={toggleSidebar}
            className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded"
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <a href="#section1" className="hover:underline">
                Section 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#section2" className="hover:underline">
                Section 2
              </a>
            </li>
            <li>
              <a href="#section3" className="hover:underline">
                Section 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white h-20 flex items-center justify-between px-4">
          <h1 className="text-xl">Top Navigation Bar</h1>
        </header>
        <main
          className={`flex-1 p-8 bg-gray-100 transition-all duration-300 ease-in-out ${
            isExpanded ? "ml-1/3" : "ml-1/10"
          }`}
        >
          <section id="section1" className="mb-8">
            Content for Section 1
          </section>
          <section id="section2" className="mb-8">
            Content for Section 2
          </section>
          <section id="section3">Content for Section 3</section>
        </main>
      </div>
    </div>
  );
};

export default OneBox;
