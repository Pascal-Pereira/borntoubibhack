import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import AdsItemSmall from './AdsItemSmall'

const Ads = () => {

  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadAd = firebase.firestore().collection('adds').onSnapshot(s => {
      setAds(s.docs.map(ad => {
        return {id: ad.id, ...ad.data()}
      }))
    })

    return () => loadAd()
  }, [])
 
    return (
        <main>
            {ads.map((ad)=> <AdsItemSmall ad={ad}/>)}
        </main>
    );
};

export default Ads;