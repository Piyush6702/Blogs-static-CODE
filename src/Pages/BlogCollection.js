import React from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Card/Cards";
import Pagination from "../components/page/pagination"
function BlogCollection() {
  return (
    <div className='BlogCollection'>
      <Hero />
      <Cards />
      <Pagination />
    </div>
  );
}

export default BlogCollection;
