import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [currentpage, setcurrentpage] = useState(1);
  const [data, setData] = useState([]);
  const itemsperpage = 10;
  const lastindex = currentpage * itemsperpage;
  const firstindex = lastindex - itemsperpage;
  const currentdata = data.slice(firstindex, lastindex);
  const totalpages = Math.ceil(data.length / itemsperpage);
  const totalbuttons = Array.from(
    { length: totalpages },
    (_, index) => index + 1
  );
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=100")
      .then((response) => {
        console.log(response);
        setData(response.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {currentdata.map((item) => (
        <div key={item.id} style={{ textAlign: "center",display:"flex",justifyContent:"center",gap:"20px"}}>
          <img src={item.image} />
          <p>FirstName:{item.firstName}</p>
          <p>LastName:{item.lastName}</p>
          <p>Age:{item.age}</p>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => setcurrentpage(currentpage - 1)}
          disabled={currentpage === 1 ? true : false}
        >
          Prev
        </button>
        {totalbuttons.map((item) => (
          <button onClick={() => setcurrentpage(item)}>{item}</button>
        ))}
        <button
          onClick={() => setcurrentpage(currentpage + 1)}
          disabled={currentpage === totalpages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
