import MetroStationEnum from "@/app/enums/metro-station-enum";
import StationInfo from "@/app/station-info";
import styles from './metrocard.module.css'
import LineLogo from "@/app/components/line-logo/line-logo";
import MetroLineEnum from "@/app/enums/metro-line-enum";

/**
 * The base card which displays all relevant info for a metro station
 * @param metroEnum the station that we are displaying info for
 * @param hasAlerts (FOR DEV PURPOSES ONLY, WILL DELETE LATER) there are active alerts at the metro station
 */
export default function MetroCard({ metroEnum, hasAlerts }: { metroEnum: MetroStationEnum, hasAlerts: boolean }) {
	
	const metroInfo = StationInfo[metroEnum];

	return (
		<div className={styles.metro_card}>
        	<h2 className={styles.station_name}>{metroInfo.displayName}</h2>
			<div className={styles.line_list}>
				<LineLogo lineEnum={MetroLineEnum.Blue} />
				<LineLogo lineEnum={MetroLineEnum.Orange} />
				<LineLogo lineEnum={MetroLineEnum.Silver} />
			</div>
			<div className={styles.info_column_list}>
				{hasAlerts && 
					<div className={`${styles.info_column} ${styles.alerts_found}`}>
						<p>🚨 ALERT 🚨</p>
						<p>Expect residual delays to Greenbelt due to an earlier train malfunction at Waterfront.</p>
					</div>
				}
				<div className={styles.info_column}>
					<p>Arriving in:</p>
					<p>10 mins</p>
				</div>
				<div className={styles.info_column}>
					<p>Next Train:</p>
					<p>30 mins</p>
				</div>
				{!hasAlerts && 
					<div className={`${styles.info_column} ${styles.no_alerts}`}>
						<p>⚠️ No relevant alerts found</p>
					</div>
				}
			</div>
      	</div>
	)
}