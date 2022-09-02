<script>
    import { sykkelInfo } from "../stores/stativstore";

    let searchTerm = "";
    let filtrerteStasjoner = [];

    $: {
        if(searchTerm) {
            filtrerteStasjoner = $sykkelInfo.filter( sykkelInfo => sykkelInfo.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }else {
            filtrerteStasjoner = [...$sykkelInfo];

        }
    }
</script>



<input class="w-full rounded-md text-lg p-4 border-2 border-blue-200" type="text" bind:value={searchTerm} placeholder="søk">
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
    {#each filtrerteStasjoner as sykkelInfo}
        
        <div class="p-2 bg-blue-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
            <h3 class="uppercase text-xl">{sykkelInfo.name}</h3>
            <p>Id: {sykkelInfo.id}</p>
            <p>Ledige sykler: {sykkelInfo.ledige_sykler}</p>
            <p>Ledige låser: {sykkelInfo.ledige_laaser}</p>
            <br>
        </div>
        
    
    {/each}
</div>
