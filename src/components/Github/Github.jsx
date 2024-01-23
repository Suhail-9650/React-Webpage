import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/apnacollege')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
        },[] )

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
       <img src="https://images.pexels.com/photos/18940528/pexels-photo-18940528/free-photo-of-stadtmitte.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Git picture" width={300} />
        </div>
  )
}

export default Github;

