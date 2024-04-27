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
              <th>Sl</th>
              <th>item</th>
              <th>Price</th>
              <th>stockStatus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
      {
         data.map((item,index)=><tr key={data._id}>
            <th>{index+1}</th>
            <td>{item.item}</td>
            <td>{item.price}</td>
            <td>{item.stockStatus}</td>
            <td></td>
            <td>
               <Link to={`/viewdetails/${item._id}`}> <button className="btn">View Details</button></Link>
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
