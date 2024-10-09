import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GetById(){
    const [cosmetic, setCosmetic] = useState({});
    const { id } = useParams();
    
    let apiUpr = 'http://localhost:4000/item/'+id
    useEffect(() => {
        fetch(apiUpr)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((product) => setCosmetic(product))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [id])

    if (Object.keys(cosmetic).length === 0) {
        return <div>Loading...</div>;
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        className="img-fluid rounded" 
                        src={cosmetic.image} 
                        alt="..." 
                        style={{ width: '60%', height: '90%', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">Product Details</h2>
                    <h5>
                        <strong>Name:</strong> {cosmetic.name}
                    </h5>
                    <p>
                        <strong>Description:</strong> {cosmetic.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetById;