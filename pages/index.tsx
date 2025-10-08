import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return (<></>)
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    redirect: {
      destination: '/links',
      permanent: false
    }
  }
}