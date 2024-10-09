import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [cosmetic, setCosmetic] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cosmetic.id) {
            setError("Please Enter ID");
            return;
        }

        fetch('http://localhost:4000/item/add', {
            method: 'POST',
            body: JSON.stringify(cosmetic),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                navigate("/GetAll")
            })
            .catch((error) => {
                setError("Failed to add cosmetic item");
            });
    };

    return (
        <>
            <div className="container add-cosmetic-form">
                <div className="row">
                    <div className="col-md-12">
                        {error && (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                                {error}
                            </div>
                        )}
                        <label for="id">ID:</label>
                        <input type="text" id="id" name="id" required
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, id: e.target.value });
                                setError(null);
                            }}
                        />

                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, name: e.target.value });
                            }}
                        />

                        <label for="image">Image:</label>
                        <input type="text" id="image" name="image" required
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, image: e.target.value });
                            }}
                        />

                        <label for="price">Price:</label>
                        <input type="number" id="price" name="price" required
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, price: e.target.value });
                            }}
                        />

                        <label for="description">Description:</label>
                        <textarea id="description" name="description" required
                            onChange={(e) => {
                                setCosmetic({ ...cosmetic, description: e.target.value });
                            }}
                        ></textarea>

                        <button className="pink-submit-btn" type="submit"
                            onClick={handleSubmit}
                        >Add Cosmetic Item</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add;