"use client";

import { useEffect, useState } from 'react'
import MetroCard from './components/metrocard/metrocard'
import MetroStationEnum from './enums/metro-station-enum'
import styles from './page.module.css'
import StationInfo from './station-info'

export type TrainPredictionInfo = {
	Car: string,
	Destination: string,
  DestinationCode: string,
	DestinationName: string,
	Group: string,
	Line: string,
	LocationCode: string,
	LocationName: string,
	Min: string
};

type PredictionApiResponse = {
  "Trains": TrainPredictionInfo[]
};

export default function Home() {
  const stations = [ MetroStationEnum.LEnfantPlazaBLORSV, MetroStationEnum.CollegeParkUofMd ]
  const stationCodes = stations.map(s => StationInfo[s].code).join(',')

  const [stationTimes, setStationTimes] = useState<TrainPredictionInfo[]>([])

  function getStationTimes(): void {
    fetch(`https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${stationCodes}?api_key=`)
    .then(r => r.json())
    .then((j: PredictionApiResponse) => {
      setStationTimes(j.Trains);
    });
  };

  // Get the times on page load
  useEffect(() => {
    getStationTimes();
  }, []);

  // After loading, get the page times every 45 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getStationTimes();
    }, 45000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className={styles.card_list}>
      {stations.map(s => (
        <MetroCard 
          key={s}
          metroEnum={s}
          incomingTrains={stationTimes.filter(t => t.LocationCode == StationInfo[s].code)}
          hasAlerts={false}
        />
      ))}
    </main>
  )
}
