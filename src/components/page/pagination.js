import React from 'react'
import "./pagination.css"
/**
* @author
* @function pagination

**/

const Pagination
 = (props) => {
  return(
    <div>
<div class="pagination">
  <a href="#">&laquo;</a>
  <a class="active" href="#">1</a>
  <a  href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  {/* <a href="#"></a> */}
  <a href="#">&raquo;</a>
</div>
    </div>
   )

 }

export default Pagination
