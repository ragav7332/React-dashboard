import { useState } from "react";

// function Profile({image,name}){
//   return(
//     <>
//     <img src= {image}  height = {200} width={200} />
//     <h1>{name}</h1>
//     </>
//   )
// };
export function Counter() {
  const [like, setlike] = useState(1);
  const [dislike, setdislike] = useState(1);
  return (
    <div className='Form'>
      
      <button onClick={() => {
        setlike(like + 1);

        //console.log(like+1);
      }}>
        👍{like}
      </button>
      <button onClick={() => {
        setdislike(dislike + 1);

        //console.log(like+1);
      }}>
        👎{dislike}
      </button>

      
    </div>

  );
}
