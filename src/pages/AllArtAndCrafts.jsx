import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCrafts = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>Crafted clarity | AllArtAndCrafts</title>
      </Helmet>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th >Sl</th>
              <th>Photo</th>
              <th>item</th>
              <th>Price</th>
              <th>stockStatus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
      {
         data.map((item,index)=><tr  key={data._id}>
            <th className="bg-purple-200">{index+1}</th>
            <td className="md:w-[20%]"><img src={item.photo} className="lg:w-[40%] " alt="" /></td>
            <td className="bg-purple-200 md:w-[20%]">{item.item}</td>
            <td className="md:w-[20%]">{item.price}</td>
            <td className="md:w-[20%]">{item.stockStatus}</td>
            <td className="md:w-[20%]"></td>
            <td>
               <Link to={`/viewdetails/${item._id}`}> <button className="btn bg-blue-100">View Details</button></Link>
            </td>
          </tr>)
      }
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCrafts;
