import React from "react";

const ObjectRender = () => {
    const Product = {
        pname:"realmee",
        price:15000,
        pid:1001,
    }
    return (
        <div>
            {
                Object.keys(Product).map((key,index)=><li key={index}>{Product[key]}</li>
                )
            }
            
        </div>
    );
};
export default ObjectRender;


