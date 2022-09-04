<script>
    import { stationsData } from "../stores/stationsDataStore";

    let searchTerm = "";
    let filterStationStatus = [];

    $: {
        if(searchTerm) {
            filterStationStatus = $stationsData.filter( stationsData => stationsData.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else {
            filterStationStatus = [...$stationsData];

        }
    }
</script>



<input class="w-full rounded-md text-lg p-4 border-2 border-blue-200" type="text" bind:value={searchTerm} placeholder="søk">
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
    {#each filterStationStatus as stationsData}
        
        <div class="p-2 bg-blue-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
            <h3 class="uppercase text-xl">{stationsData.name}</h3>
            <p>Id: {stationsData.id}</p>
            <p>Ledige sykler: {stationsData.availableBikes}</p>
            <p>Ledige låser: {stationsData.availableDocks}</p>
            <br>
        </div>
        
    
    {/each}
</div>
