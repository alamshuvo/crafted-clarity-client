import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
 
  const { user } = useContext(AuthContext) || {};
  const [dataa, setDataa] = useState([]);
  const [another,setAnother]=useState([])
  const [a,setA]=useState(true);
 
  console.log(user.uid);
  
  // const checkYes=(a)=>{
  //     return a==="Yes"
  // }
  // console.log(sortedData);
  // handle delete
 

  useEffect(() => {
    fetch(`http://localhost:5000/craft/uid/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataa(data);
      });
  }, [user]);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/id/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft Items has been deleted.",
                icon: "success",
              });
              const remaning=dataa.filter(user=>user._id !==id);
              setDataa(remaning)
             
            }
          });
      }
    });
  };
  const hadleSort=(id)=>{
    const remaning=dataa.filter(user=>user.customization ==id);
    //  setDataa(remaning)
    setAnother(remaning)
     setA(false)
  }
  const hadleSortNo=(id)=>{
    const remaning=dataa.filter(user=>user.customization ==id);
    //  setDataa(remaning)
    setAnother(remaning)
     setA(false)
  }

  // console.log(dataa);
  return (
    <div className="">
      <Helmet>
        <title> Crafted Clarity | MyArtAndCraftList</title>
      </Helmet>
      <div className="mt-10">
        <h1 className="text-center font-bold md:text-3xl  text-xl">
          My Art And Craft Items : {a?<p>{dataa.length}</p>: <p>{another.length}</p>} Items
        </h1>
        {/* filter */}
        <div className="text-center mb-14 mt-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter By Customization
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={()=>hadleSort("Yes")}>Yes</button>
              </li>
              <li>
                <button onClick={()=>hadleSortNo("No")}>No</button>
              </li>
            </ul>
          </div>
        </div>
        {/* filter end */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-5 md:w-[90%] mx-auto p-5">
         {
          a?dataa.map((craft) => (
            <div
              key={craft._id}
              className="card card-compact w-full bg-[#F1EEDC] p-5  shadow-xl"
            >
              <figure>
                <img src={craft.photo} alt={craft.name} className="h-[400px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{craft.item}</h2>
                {/* <p>{craft.description}</p> */}
                <div className="flex justify-between">
                  <div> stockStatus :{craft.stockStatus}</div>
                  <div> price :{craft.price}</div>
                </div>
                <p> customization: {craft.customization}</p>
                <p> rating: {craft.rating}</p>
                <div className="card-actions mt-2">
                  {/* <Link to={`/viewdetails/${craft._id}`}>
               <button className="btn bg-[#BED7DC]">View Details</button>
               </Link> */}
                  <button
                    onClick={() => handleDelete(craft._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                 <Link to={`/update/${craft._id}`}>
                 <button className="btn" >Update</button>
                 </Link>
                </div>
              </div>
            </div>
          )):another.map((craft) => (
            <div
              key={craft._id}
              className="card card-compact w-full bg-[#F1EEDC] p-5  shadow-xl"
            >
              <figure>
                <img src={craft.photo} alt={craft.name} className="h-[400px]" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{craft.item}</h2>
                {/* <p>{craft.description}</p> */}
                <div className="flex justify-between">
                  <div> stockStatus :{craft.stockStatus}</div>
                  <div> price :{craft.price}</div>
                </div>
                <p> customization: {craft.customization}</p>
                <p> rating: {craft.rating}</p>
                <div className="card-actions mt-2">
                  {/* <Link to={`/viewdetails/${craft._id}`}>
               <button className="btn bg-[#BED7DC]">View Details</button>
               </Link> */}
                  <button
                    onClick={() => handleDelete(craft._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                 <Link to={`/update/${craft._id}`}>
                 <button className="btn" >Update</button>
                 </Link>
                </div>
              </div>
            </div>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
