import MetroCard from './components/metrocard'
import MetroStationEnum from './enums/metro-station-enum'
import styles from './page.module.css'

export default function Home() {
  return (
    <MetroCard metroEnum={MetroStationEnum.BallstonMU} />
  )
}
