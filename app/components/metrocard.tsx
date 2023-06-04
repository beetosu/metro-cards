import MetroStationEnum from "../enums/metro-station-enum"
import MetroInfo from "../metro-info"

export default function MetroCard({ metroEnum }: { metroEnum: MetroStationEnum}) {
	
	const metroInfo = MetroInfo[metroEnum];

	return (
		<main>
        	<div className="hi">{metroInfo.name}</div>
      	</main>
	)
  }