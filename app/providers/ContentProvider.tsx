"use client"
import React from 'react'
import { GlobalProvider } from '../context/GlobalProvider';
import { Toaster } from 'react-hot-toast';

interface Props {
    children: React.ReactNode;

}

const ContentProvider = ({children}:Props) => {
  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if(!isReady) {
    return <div className='w-full h-full flex items-center justify-center'>
   <span className='loader'></span>


    </div>
  }
return (
<GlobalProvider> 
  <Toaster/>
    {children} 
</GlobalProvider>)
  
}

export default ContentProvider