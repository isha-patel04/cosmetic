import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update(){
    const [cosmetic, setCosmetic] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    let apiUpr = `http://localhost:4000/item/${id}`
    useEffect(() => {
        fetch(apiUpr)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(product => setCosmetic(product))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [id])

    // Add a condition to check if the cosmetic state is not empty
    if (Object.keys(cosmetic).length === 0) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <div className="container add-cosmetic-form">
                <div className="row">
                    <div className="col-md-12">
                        <label for="id">ID:</label>
                        <input type="text" id="id" name="id" required
                            value={cosmetic.id}
                            // onChange={(e) => {
                            //     setCosmetic({ ...cosmetic, id: e.target.value });
                            // }}
                        />

                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required
                            value={cosmetic.name}
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, name: e.target.value });
                            }}
                        />

                        <label for="image">Image:</label>
                        <input type="text" id="image" name="image" required
                            value={cosmetic.image}
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, image: e.target.value });
                            }}
                        />

                        <label for="price">Price:</label>
                        <input type="number" id="price" name="price" required
                            value={cosmetic.price}
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, price: e.target.value });
                            }}
                        />

                        <label for="description">Description:</label>
                        <textarea id="description" name="description" required
                            value={cosmetic.description}
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, description: e.target.value });
                            }}
                        ></textarea>

                        <button className="pink-submit-btn" type="submit"
                            onClick={() => {
                                fetch('http://localhost:4000/item/update/'+id, {
                                    method: "PATCH",
                                    body: JSON.stringify(cosmetic),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    }
                                })
                                    .then(() => {
                                        navigate("/GetAll")
                                    })
                            }}
                        >Update</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Update;