import MetroStationEnum from "./enums/metro-station-enum"

type Station = {
    code: string,
    name: string,
    displayName: string
};

const StationInfo: { [key in MetroStationEnum]: Station } = { 
    [MetroStationEnum.MetroCenterRD]: {
        code: 'A01',
        name: 'Metro Center (RD)',
        displayName: 'Metro Center (RD)'
    },
    [MetroStationEnum.FarragutNorth]: {
        code: 'A02',
        name: 'Farragut North',
        displayName: 'Farragut North'
    },
    [MetroStationEnum.DupontCircle]: {
        code: 'A03',
        name: 'Dupont Circle',
        displayName: 'Dupont Circle'
    },
    [MetroStationEnum.WoodleyParkZooAdamsMorgan]: {
        code: 'A04',
        name: 'Woodley Park-Zoo/Adams Morgan',
        displayName: 'Woodley Park'
    },
    [MetroStationEnum.ClevelandPark]: {
        code: 'A05',
        name: 'Cleveland Park',
        displayName: 'Cleveland Park'
    },
    [MetroStationEnum.VanNessUDC]: {
        code: 'A06',
        name: 'Van Ness-UDC',
        displayName: 'Van Ness'
    },
    [MetroStationEnum.TenleytownAU]: {
        code: 'A07',
        name: 'Tenleytown-AU',
        displayName: 'Tenleytown'
    },
    [MetroStationEnum.FriendshipHeights]: {
        code: 'A08',
        name: 'Friendship Heights',
        displayName: 'Friendship Heights'
    },
    [MetroStationEnum.Bethesda]: {
        code: 'A09',
        name: 'Bethesda',
        displayName: 'Bethesda'
    },
    [MetroStationEnum.MedicalCenter]: {
        code: 'A10',
        name: 'Medical Center',
        displayName: 'Medical Center'
    },
    [MetroStationEnum.GrosvenorStrathmore]: {
        code: 'A11',
        name: 'Grosvenor-Strathmore',
        displayName: 'Grosvenor-Strathmore'
    },
    [MetroStationEnum.NorthBethesda]: {
        code: 'A12',
        name: 'North Bethesda',
        displayName: 'North Bethesda'
    },
    [MetroStationEnum.Twinbrook]: {
        code: 'A13',
        name: 'Twinbrook',
        displayName: 'Twinbrook'
    },
    [MetroStationEnum.Rockville]: {
        code: 'A14',
        name: 'Rockville',
        displayName: 'Rockville'
    },
    [MetroStationEnum.ShadyGrove]: {
        code: 'A15',
        name: 'Shady Grove',
        displayName: 'Shady Grove'
    },
    [MetroStationEnum.GalleryPlChinatownRD]: {
        code: 'B01',
        name: 'Gallery Pl-Chinatown (RD)',
        displayName: 'Gallery Place (RD)'
    },
    [MetroStationEnum.JudiciarySquare]: {
        code: 'B02',
        name: 'Judiciary Square',
        displayName: 'Judiciary Square'
    },
    [MetroStationEnum.UnionStation]: {
        code: 'B03',
        name: 'Union Station',
        displayName: 'Union Station'
    },
    [MetroStationEnum.RhodeIslandAveBrentwood]: {
        code: 'B04',
        name: 'Rhode Island Ave-Brentwood',
        displayName: 'Rhode Island Ave'
    },
    [MetroStationEnum.BrooklandCUA]: {
        code: 'B05',
        name: 'Brookland-CUA',
        displayName: 'Brookland'
    },
    [MetroStationEnum.FortTottenRD]: {
        code: 'B06',
        name: 'Fort Totten (RD)',
        displayName: 'Fort Totten (RD)'
    },
    [MetroStationEnum.Takoma]: {
        code: 'B07',
        name: 'Takoma',
        displayName: 'Takoma'
    },
    [MetroStationEnum.SilverSpring]: {
        code: 'B08',
        name: 'Silver Spring',
        displayName: 'Silver Spring'
    },
    [MetroStationEnum.ForestGlen]: {
        code: 'B09',
        name: 'Forest Glen',
        displayName: 'Forest Glen'
    },
    [MetroStationEnum.Wheaton]: {
        code: 'B10',
        name: 'Wheaton',
        displayName: 'Wheaton'
    },
    [MetroStationEnum.Glenmont]: {
        code: 'B11',
        name: 'Glenmont',
        displayName: 'Glenmont'
    },
    [MetroStationEnum.NoMaGallaudetU]: {
        code: 'B35',
        name: 'NoMa-Gallaudet U',
        displayName: 'NoMa'
    },
    [MetroStationEnum.MetroCenterBLORSV]: {
        code: 'C01',
        name: 'Metro Center (BL/OR/SV)',
        displayName: 'Metro Center (BL/OR/SV)'
    },
    [MetroStationEnum.McPhersonSquare]: {
        code: 'C02',
        name: 'McPherson Square',
        displayName: 'McPherson Square'
    },
    [MetroStationEnum.FarragutWest]: {
        code: 'C03',
        name: 'Farragut West',
        displayName: 'Farragut West'
    },
    [MetroStationEnum.FoggyBottomGWU]: {
        code: 'C04',
        name: 'Foggy Bottom-GWU',
        displayName: 'Foggy Bottom'
    },
    [MetroStationEnum.Rosslyn]: {
        code: 'C05',
        name: 'Rosslyn',
        displayName: 'Rosslyn'
    },
    [MetroStationEnum.ArlingtonCemetery]: {
        code: 'C06',
        name: 'Arlington Cemetery',
        displayName: 'Arlington Cemetery'
    },
    [MetroStationEnum.Pentagon]: {
        code: 'C07',
        name: 'Pentagon',
        displayName: 'Pentagon'
    },
    [MetroStationEnum.PentagonCity]: {
        code: 'C08',
        name: 'Pentagon City',
        displayName: 'Pentagon City'
    },
    [MetroStationEnum.CrystalCity]: {
        code: 'C09',
        name: 'Crystal City',
        displayName: 'Crystal City'
    },
    [MetroStationEnum.RonaldReaganWashingtonNationalAirport]: {
        code: 'C10',
        name: 'Ronald Reagan Washington National Airport',
        displayName: 'Ronald Airport'
    },
    [MetroStationEnum.PotomacYard]: {
        code: 'C11',
        name: 'Potomac Yard',
        displayName: 'Potomac Yard'
    },
    [MetroStationEnum.BraddockRoad]: {
        code: 'C12',
        name: 'Braddock Road',
        displayName: 'Braddock Road'
    },
    [MetroStationEnum.KingStOldTown]: {
        code: 'C13',
        name: 'King St-Old Town',
        displayName: 'King St-Old Town'
    },
    [MetroStationEnum.EisenhowerAvenue]: {
        code: 'C14',
        name: 'Eisenhower Avenue',
        displayName: 'Eisenhower Avenue'
    },
    [MetroStationEnum.Huntington]: {
        code: 'C15',
        name: 'Huntington',
        displayName: 'Huntington'
    },
    [MetroStationEnum.FederalTriangle]: {
        code: 'D01',
        name: 'Federal Triangle',
        displayName: 'Federal Triangle'
    },
    [MetroStationEnum.Smithsonian]: {
        code: 'D02',
        name: 'Smithsonian',
        displayName: 'Smithsonian'
    },
    [MetroStationEnum.LEnfantPlazaBLORSV]: {
        code: 'D03',
        name: 'L\'Enfant Plaza (BL/OR/SV)',
        displayName: 'L\'Enfant Plaza (BL/OR/SV)'
    },
    [MetroStationEnum.FederalCenterSW]: {
        code: 'D04',
        name: 'Federal Center SW',
        displayName: 'Federal Center SW'
    },
    [MetroStationEnum.CapitolSouth]: {
        code: 'D05',
        name: 'Capitol South',
        displayName: 'Capitol South'
    },
    [MetroStationEnum.EasternMarket]: {
        code: 'D06',
        name: 'Eastern Market',
        displayName: 'Eastern Market'
    },
    [MetroStationEnum.PotomacAve]: {
        code: 'D07',
        name: 'Potomac Ave',
        displayName: 'Potomac Ave'
    },
    [MetroStationEnum.StadiumArmory]: {
        code: 'D08',
        name: 'Stadium-Armory',
        displayName: 'Stadium-Armory'
    },
    [MetroStationEnum.MinnesotaAve]: {
        code: 'D09',
        name: 'Minnesota Ave',
        displayName: 'Minnesota Ave'
    },
    [MetroStationEnum.Deanwood]: {
        code: 'D10',
        name: 'Deanwood',
        displayName: 'Deanwood'
    },
    [MetroStationEnum.Cheverly]: {
        code: 'D11',
        name: 'Cheverly',
        displayName: 'Cheverly'
    },
    [MetroStationEnum.Landover]: {
        code: 'D12',
        name: 'Landover',
        displayName: 'Landover'
    },
    [MetroStationEnum.NewCarrollton]: {
        code: 'D13',
        name: 'New Carrollton',
        displayName: 'New Carrollton'
    },
    [MetroStationEnum.MtVernonSq7thStConventionCenter]: {
        code: 'E01',
        name: 'Mt Vernon Sq 7th St-Convention Center',
        displayName: 'Mt Vernon Sq'
    },
    [MetroStationEnum.ShawHowardU]: {
        code: 'E02',
        name: 'Shaw-Howard U',
        displayName: 'Shaw'
    },
    [MetroStationEnum.UStreetAfricanAmerCivilWarMemorialCardozo]: {
        code: 'E03',
        name: 'U Street/African-Amer Civil War Memorial/Cardozo',
        displayName: 'U Street'
    },
    [MetroStationEnum.ColumbiaHeights]: {
        code: 'E04',
        name: 'Columbia Heights',
        displayName: 'Columbia Heights'
    },
    [MetroStationEnum.GeorgiaAvePetworth]: {
        code: 'E05',
        name: 'Georgia Ave-Petworth',
        displayName: 'Georgia Ave'
    },
    [MetroStationEnum.FortTottenGRYL]: {
        code: 'E06',
        name: 'Fort Totten (GR/YL)',
        displayName: 'Fort Totten (GR/YL)'
    },
    [MetroStationEnum.WestHyattsville]: {
        code: 'E07',
        name: 'West Hyattsville',
        displayName: 'West Hyattsville'
    },
    [MetroStationEnum.HyattsvilleCrossing]: {
        code: 'E08',
        name: 'Hyattsville Crossing',
        displayName: 'Hyattsville Crossing'
    },
    [MetroStationEnum.CollegeParkUofMd]: {
        code: 'E09',
        name: 'College Park-U of Md',
        displayName: 'College Park-U of Md'
    },
    [MetroStationEnum.Greenbelt]: {
        code: 'E10',
        name: 'Greenbelt',
        displayName: 'Greenbelt'
    },
    [MetroStationEnum.GalleryPlChinatownGRYL]: {
        code: 'F01',
        name: 'Gallery Pl-Chinatown',
        displayName: 'Gallery Pl (GR/YL)'
    },
    [MetroStationEnum.ArchivesNavyMemorialPennQuarter]: {
        code: 'F02',
        name: 'Archives-Navy Memorial-Penn Quarter',
        displayName: 'Archives'
    },
    [MetroStationEnum.LEnfantPlazaGRYL]: {
        code: 'F03',
        name: 'L\'Enfant Plaza (GR/YL)',
        displayName: 'L\'Enfant Plaza (GR/YL)'
    },
    [MetroStationEnum.Waterfront]: {
        code: 'F04',
        name: 'Waterfront',
        displayName: 'Waterfront'
    },
    [MetroStationEnum.NavyYardBallpark]: {
        code: 'F05',
        name: 'Navy Yard-Ballpark',
        displayName: 'Navy Yard'
    },
    [MetroStationEnum.Anacostia]: {
        code: 'F06',
        name: 'Anacostia',
        displayName: 'Anacostia'
    },
    [MetroStationEnum.CongressHeights]: {
        code: 'F07',
        name: 'Congress Heights',
        displayName: 'Congress Heights'
    },
    [MetroStationEnum.SouthernAvenue]: {
        code: 'F08',
        name: 'Southern Avenue',
        displayName: 'Southern Avenue'
    },
    [MetroStationEnum.NaylorRoad]: {
        code: 'F09',
        name: 'Naylor Road',
        displayName: 'Naylor Road'
    },
    [MetroStationEnum.Suitland]: {
        code: 'F10',
        name: 'Suitland',
        displayName: 'Suitland'
    },
    [MetroStationEnum.BranchAve]: {
        code: 'F11',
        name: 'Branch Ave',
        displayName: 'Branch Ave'
    },
    [MetroStationEnum.BenningRoad]: {
        code: 'G01',
        name: 'Benning Road',
        displayName: 'Benning Road'
    },
    [MetroStationEnum.CapitolHeights]: {
        code: 'G02',
        name: 'Capitol Heights',
        displayName: 'Capitol Heights'
    },
    [MetroStationEnum.AddisonRoadSeatPleasant]: {
        code: 'G03',
        name: 'Addison Road-Seat Pleasant',
        displayName: 'Addison Road'
    },
    [MetroStationEnum.MorganBoulevard]: {
        code: 'G04',
        name: 'Morgan Boulevard',
        displayName: 'Morgan Boulevard'
    },
    [MetroStationEnum.DowntownLargo]: {
        code: 'G05',
        name: 'Downtown Largo',
        displayName: 'Downtown Largo'
    },
    [MetroStationEnum.VanDornStreet]: {
        code: 'J02',
        name: 'Van Dorn Street',
        displayName: 'Van Dorn Street'
    },
    [MetroStationEnum.FranconiaSpringfield]: {
        code: 'J03',
        name: 'Franconia-Springfield',
        displayName: 'Franconia'
    },
    [MetroStationEnum.CourtHouse]: {
        code: 'K01',
        name: 'Court House',
        displayName: 'Court House'
    },
    [MetroStationEnum.Clarendon]: {
        code: 'K02',
        name: 'Clarendon',
        displayName: 'Clarendon'
    },
    [MetroStationEnum.VirginiaSquareGMU]: {
        code: 'K03',
        name: 'Virginia Square-GMU',
        displayName: 'Virginia Square'
    },
    [MetroStationEnum.BallstonMU]: {
        code: 'K04',
        name: 'Ballston-MU',
        displayName: 'Ballston'
    },
    [MetroStationEnum.EastFallsChurch]: {
        code: 'K05',
        name: 'East Falls Church',
        displayName: 'East Falls Church'
    },
    [MetroStationEnum.WestFallsChurch]: {
        code: 'K06',
        name: 'West Falls Church',
        displayName: 'West Falls Church'
    },
    [MetroStationEnum.DunnLoringMerrifield]: {
        code: 'K07',
        name: 'Dunn Loring-Merrifield',
        displayName: 'Dunn Loring'
    },
    [MetroStationEnum.ViennaFairfaxGMU]: {
        code: 'K08',
        name: 'Vienna/Fairfax-GMU',
        displayName: 'Vienna'
    },
    [MetroStationEnum.McLean]: {
        code: 'N01',
        name: 'McLean',
        displayName: 'McLean'
    },
    [MetroStationEnum.Tysons]: {
        code: 'N02',
        name: 'Tysons',
        displayName: 'Tysons'
    },
    [MetroStationEnum.Greensboro]: {
        code: 'N03',
        name: 'Greensboro',
        displayName: 'Greensboro'
    },
    [MetroStationEnum.SpringHill]: {
        code: 'N04',
        name: 'Spring Hill',
        displayName: 'Spring Hill'
    },
    [MetroStationEnum.WiehleRestonEast]: {
        code: 'N06',
        name: 'Wiehle-Reston East',
        displayName: 'Wiehle-Reston East'
    },
    [MetroStationEnum.RestonTownCenter]: {
        code: 'N07',
        name: 'Reston Town Center',
        displayName: 'Reston Town Center'
    },
    [MetroStationEnum.Herndon]: {
        code: 'N08',
        name: 'Herndon',
        displayName: 'Herndon'
    },
    [MetroStationEnum.InnovationCenter]: {
        code: 'N09',
        name: 'Innovation Center',
        displayName: 'Innovation Center'
    },
    [MetroStationEnum.WashingtonDullesInternationalAirport]: {
        code: 'N10',
        name: 'Washington Dulles International Airport',
        displayName: 'Dulles'
    },
    [MetroStationEnum.LoudounGateway]: {
        code: 'N11',
        name: 'Loudoun Gateway',
        displayName: 'Loudoun Gateway'
    },
    [MetroStationEnum.Ashburn]: {
        code: 'N12',
        name: 'Ashburn',
        displayName: 'Ashburn'
    },
}

export default StationInfo;