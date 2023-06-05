import MetroStationEnum from "../enums/metro-station-enum"
import StationInfo from "../station-info"
import styles from './metrocard.module.css'

export default function MetroCard({ metroEnum }: { metroEnum: MetroStationEnum }) {
	
	const metroInfo = StationInfo[metroEnum];

	const lineStyling = (line_class: string) => 
		`${styles.line} ${line_class}`;

	let longestName = ''; 
	for (let x of Object.entries(StationInfo)) {
		if (longestName.length < x[1].displayName.length) {
			longestName = x[1].displayName;
		}
	}
	console.log(longestName);

	return (
		<div className={styles.metro_card}>
        	<h2 className={styles.station_name}>{metroInfo.displayName}</h2>
			<div className={styles.line_list}>
				<p className={lineStyling('or_line')}>OR</p>
				<p className={lineStyling('sv_line')}>SV</p>
			</div>
			<div className={styles.info_rows}>
				<div className={styles.next_train}>
					<p>Arriving in:</p>
					<p>10 mins</p>
				</div>
				<div className={styles.next_train}>
					<p>Next Train:</p>
					<p>30 mins</p>
				</div>
			</div>
      	</div>
	)
}