<script>
    import Sykkelstatus from "$lib/Sykkelstatus.svelte";
	import { errors } from "../stores/stationsDataStore";
</script>


<svelte:head>
	<title>Bysykkel</title>
	<meta name="Bysykkel" content="Bysykkel status" />
</svelte:head>


{#if $errors === true}
<h1 class="text-2xl text-red-600 text-center my-8">Vi har for tiden problemer med å vise realtime data</h1>
<h1 class="text-xl text-black text-center my-8">Dataen du ønsker å se er utdatert eller kan ikke vises</h1>
{/if}
<h1 class="text-xl text-gray-600 text-center my-8">Sjekk status på Oslos bysykler</h1>


<Sykkelstatus></Sykkelstatus>
