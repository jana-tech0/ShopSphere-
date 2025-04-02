import React from 'react'
import Layout from '../components/Layout/Layout'
import {useAuth} from '../context/auth';


const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout title={'best offers'}>
       <h1>home page</h1>
       <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default HomePage