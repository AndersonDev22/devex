import type { GetStaticProps, NextPage } from 'next'
import { Header } from '../components/Header'
import { Posts } from '../components/Posts'
import { IPosts } from '../components/Types'

const Home: NextPage = ({ photos }: IPosts) => {
  return (
    <>
      <Header />
      <Posts photos={photos} />
    </>
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
    revalidate: 1 * 24 * 60 * 60, // 01 dia - 24 horas
  }
}
