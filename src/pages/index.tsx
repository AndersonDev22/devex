import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { QueryClient, QueryClientProvider} from 'react-query'
import Posts from '../components/Posts';


const queryCLiente = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryCLiente}>
      <Header/>
      <Posts/>
    </QueryClientProvider>

  )
}

export default Home
