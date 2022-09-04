import { writable } from "svelte/store";

export const stationsData = writable([]);
export const errors = writable(false);


    const getStationData = async () => {
        errors.set(false);
        let rawStationInformationData;
        let rawStationStatusData;

        //Hent stasjonsinformasjon fra bysykkel API
        try {
            const stationInformationUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json';
            const stationInformationResult = await fetch(stationInformationUrl, {
                method: 'GET',
                headers: {
                    'Client-Identifier': 'ThomasFossum'
                }
            });
            rawStationInformationData = await stationInformationResult.json();
            console.log(rawStationInformationData)
        
            } catch (err) {
            console.log(err);
            errors.set(true);
            return
        }


        //Hent status på sykler per stasjon fra bysykkel API
        try {
            const stationStatusUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';
            const stationStatusResult = await fetch(stationStatusUrl, {
                method: 'GET',
                headers: {
                    'Client-Identifier': 'ThomasFossum'
                }
            });
            rawStationStatusData = await stationStatusResult.json();
            console.log(rawStationStatusData);

            } catch (err) {
                console.log(err);
                errors.set(true);
                return
        }

        //Mapper datasettene sammen
        try {
            const stationData = rawStationInformationData.data.stations.map((rawStationInformation) => {
                
                
                const filteredStationStatus = rawStationStatusData.data.stations.find(station => station.station_id === rawStationInformation.station_id);
                console.log(filteredStationStatus)

                return {
                name: rawStationInformation.name,
                id: rawStationInformation.station_id,
                capacity: rawStationInformation.capacity,
                availableBikes: filteredStationStatus.num_bikes_available,
                availableDocks: filteredStationStatus.num_docks_available


                };
            
            })
            stationsData.set(stationData);
        
        } catch (err) {
          console.log(err);
          errors.set(true);
          return
        }
    
    }


setInterval(() => {
    getStationData();
}, 10000);

getStationData();
