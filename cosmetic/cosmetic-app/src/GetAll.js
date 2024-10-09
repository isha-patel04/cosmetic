import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function GetAll(){
    const [cosmetic, setCosmetic] =useState([]);
    const { id } =useParams();
    const navigate = useNavigate();

    let apiUrl = 'http://localhost:4000/item'
useEffect(() => {
    fetch(apiUrl, { method: "GET" })
        .then(response => response.json())
        .then(data => setCosmetic(data))
        .catch(err => console.error("Error fetching data: ", err));
});
const formatePro = cosmetic.map(product => {
    return (
        <div className="col">
            <div className="col-2">
            <div className="card cardbg" style={{ width: '18rem' }}>
                <div className="divImage">
                    <img src={product.image} class="card-img-top mainImg" alt="..." />
                </div>
                <div className="card-body">
                    <h2 className="id">
                        id:
                        {product.id}
                    </h2>
                    <h5 className="card-titl">
                        name :-
                        {product.name}</h5>
                    <h5 className="">
                        Price: ₹
                        {product.price}
                    </h5>
                </div>
                    <Link to={'/GetAll/'+product.id} class="btn btn-primary m-2" >Read More...</Link> 
                    <Link to={'/Update/'+product.id} class="btn btn-warning m-2" >Edit</Link> 
                    <button  class="btn btn-danger m-2" 
                        onClick={()=>{
                            console.log("delete");
                            console.log(product.id)
                            fetch('http://localhost:4000/item/remove/'+product.id, { method: 'DELETE' })
                                .then((res)=>{navigate("/GetAll")});
                  }}
                    
                    >Delete</button>
            </div>
            </div>
        </div>
    )
})


return(
    <>
    <div className="container">
            <div className="row">
                
            {formatePro}
                </div>
            </div>
    </>
)
   
}
export default GetAll;