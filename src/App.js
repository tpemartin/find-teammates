import logo from './logo.svg';
import './App.css';
import config from './config.json'
import {useFetch} from "usehooks-ts"
import { Children } from 'react';
import AdCards from './readValidAds';
import PostAd from './postAd';
function App() {

  var {data, isLoading} = useFetch(config.appscript)
  var ads, keys
  if(data){
    [ads, keys] = data
    console.log(data)
    console.log(ads)
    console.log(keys)
  }

  let appContent= data?(
    <AdGallery>
      <AdCards ads={ads} keys={keys}/>
      <PostAd/>
    </AdGallery>):(
    <div>Loading...</div> 
    )
  return  <div className="App">
      {appContent}
    </div>
}
function AdGallery({children}){
  return <div className='ad-gallery'>
    {children}
  </div>
}

export default App;
