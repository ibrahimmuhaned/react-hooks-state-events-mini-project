// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;

import React from "react";

function CategoryFilter({categories, callback}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button key={category} onClick={callback} name={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
