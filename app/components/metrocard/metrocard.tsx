import MetroStationEnum from "@/app/enums/metro-station-enum";
import StationInfo from "@/app/station-info";
import styles from './metrocard.module.css'
import LineLogo from "@/app/components/line-logo/line-logo";
import MetroLineEnum from "@/app/enums/metro-line-enum";
import { TrainPredictionInfo } from "@/app/page";

type TrainCardInfo = {
	arrival: string,
	arrivalSuffix: string,
	destination: string
}

function parseTrainInfo(trainInfo: TrainPredictionInfo): TrainCardInfo | undefined {
	if (!trainInfo) return;

	return {
		arrival: trainInfo.Min,
		arrivalSuffix: isNaN(parseInt(trainInfo.Min)) ? '' : ' mins',
		destination: trainInfo.Destination
	}
}

/**
 * The base card which displays all relevant info for a metro station
 * @param metroEnum the station that we are displaying info for
 * @param incomingTrains the cars heading towards the metro station, in order of arrival time
 * @param hasAlerts (FOR DEV PURPOSES ONLY, WILL DELETE LATER) there are active alerts at the metro station
 */
export default function MetroCard({ metroEnum, hasAlerts, incomingTrains }: { metroEnum: MetroStationEnum, hasAlerts: boolean, incomingTrains: TrainPredictionInfo[] }) {
	
	const metroInfo = StationInfo[metroEnum];

	const arrivingTrain = parseTrainInfo(incomingTrains[0]);
	const nextTrain = parseTrainInfo(incomingTrains[1]);


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
				{arrivingTrain &&  
					<div className={styles.info_column}>
						<p>Arriving in:</p>
						<b>{arrivingTrain.arrival}{arrivingTrain.arrivalSuffix}</b>
					</div>
				}
				{nextTrain &&  
					<div className={styles.info_column}>
						<p>Next train:</p>
						<b>{nextTrain.arrival}{nextTrain.arrivalSuffix}</b>
					</div>
				}
				{!hasAlerts && 
					<div className={`${styles.info_column} ${styles.no_alerts}`}>
						<p>⚠️ Not currently checking for alerts</p>
					</div>
				}
			</div>
      	</div>
	)
}