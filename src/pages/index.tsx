import type { GetStaticProps, NextPage } from 'next'
import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IPosts } from '../styles/types'

const queryCLiente = new QueryClient()

const Home: NextPage = ({ photos }: IPosts) => {
  return (
    <QueryClientProvider client={queryCLiente}>
      <Header />
      <Posts photos={photos} />
    </QueryClientProvider>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/photos?sol=557',
  )
  const { photos } = await response.json()

  return {
    props: {
      photos,
    },
    revalidate: 1 * 24 * 60 * 60,
  }
}
