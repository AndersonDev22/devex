import { useRouter} from 'next/router'

export default function Photos(){
  const {query} = useRouter()
  return(
    <h1>Photos: {JSON.stringify(query)}</h1>
  )
}