import { Card } from "../Card";
import { useQuery} from 'react-query'

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface IPhotos {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

async function getPosts(){
  const request = await fetch('https://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/photos?sol=557')
  const response = await request.json()

  if (!request.ok) {
    throw Error(response.error)
  }
  
  return response.photos as IPhotos[]
} 

export default function Post(){
 const {data, isError, isLoading} = useQuery('photos', () =>
 getPosts()
 )

 if(isError){
  return(
    <section>
      <p>Error</p>
    </section>
  )
 }

 if(!data || isLoading){
  return(
    <section>
      <p>Loading...</p>
    </section>
  )
 }

return (
    <div className="flex bg-white w-full justify-center py-16 px-6">
      <div className="max-w-[90rem] grid grid-cols-4 gap-4 md:grid md:grid-cols-3 ">
     {data.map(item => (
      
       <Card
       img_src={item.img_src}
       key={item.id}
       id={item.id}
       sol={item.sol}
       earth_date={item.earth_date} 
       camera={item.camera} 
       rover={item.rover}      //  img_src={item.img_src}
       />      
          
       ))}
       </div>
    </div>
)
}

