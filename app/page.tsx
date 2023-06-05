import MetroCard from './components/metrocard'
import MetroStationEnum from './enums/metro-station-enum'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.card_list}>
      <MetroCard metroEnum={MetroStationEnum.LEnfantPlazaBLORSV} />
    </main>
  )
}
