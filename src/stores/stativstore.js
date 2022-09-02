import { writable } from "svelte/store";

export const sykkelInfo = writable([]);


    const fetchStativOgKapasitetsinfo = async () => {

        //Hent stasjonsinformasjon fra bysykkel API
        const stativUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json';
        const stativResultat = await fetch(stativUrl, {
            method: 'GET',
            headers: {
                'Client-Identifier': 'ThomasFossum'
            }
        });
        const rawStativData = await stativResultat.json();
        if (stativResultat.status >= 200 && stativResultat.status <= 299) {
            console.log(rawStativData);
        } else {
            // Handle errors
            console.log(stativResultat.status, stativResultat.statusText);
        }


        //Hent kapasitet per stasjon fra bysykkel API
        const kapasitetsUrl = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';
        const kapasitetsResultat = await fetch(kapasitetsUrl, {
            method: 'GET',
            headers: {
                'Client-Identifier': 'ThomasFossum'
            }
        });
        const rawKapasitetsData = await kapasitetsResultat.json();
        if (kapasitetsResultat.status >= 200 && kapasitetsResultat.status <= 299) {
            console.log(rawKapasitetsData);
        } else {
            // Handle errors
            console.log(kapasitetsResultat.status, kapasitetsResultat.statusText);
        }
        

        //Mapper datasettene sammen
        const stativData = rawStativData.data.stations.map((rawStativData) => {
            
            const filteredKapasitet = rawKapasitetsData.data.stations.find(station => station.station_id === rawStativData.station_id);
            console.log(filteredKapasitet)

            return {
            name: rawStativData.name,
            id: rawStativData.station_id,
            capacity: rawStativData.capacity,
            ledige_sykler: filteredKapasitet.num_bikes_available,
            ledige_laaser: filteredKapasitet.num_docks_available


            };
        })
        sykkelInfo.set(stativData);
        
    }
    


setInterval(() => {
    fetchStativOgKapasitetsinfo();
}, 20000);

fetchStativOgKapasitetsinfo();
