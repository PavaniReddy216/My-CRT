import React from 'react';

const ListRender = () => {
  const stunames=["pavani","sailu","geetha","madhuri","suma"]
    return (
        <div>
            {
            stunames.map((sname)=><li>{sname}</li>)
            }
            
        </div>
    );
};

export default ListRender;