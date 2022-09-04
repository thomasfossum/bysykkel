<script>
    import Sykkelstatus from "$lib/Sykkelstatus.svelte"; 
</script>

<h1 class="text-2xl text-center my-8">Teknologi og funksjonalitet</h1>


<div class="text-center my-8">
Prosjektet er laget med svelte-kit og tailwind CSS. Hosting via Vercel.
Finn sykler siden subscriber på stationsDataStore. 
Prosjektet har en relativt naiv error-handling. 

</div>


<h1 class="text-2xl text-center my-8">Fremtidig forbedring</h1>
<ul class="list-disc">
    <li class="text-center">Cache API respons via CDN</li>
    <li class="text-center">Mer robus feilhåndtering</li>
    <li class="text-center">Benyttet ENV variabler</li>
    <li class="text-center">Refaktorisert stationsDataStore.js, splittet getStationData til flere funksjoner</li>
    <li class="text-center">Vist resultat i kart, ikke i liste</li>
    <li class="text-center">Lagt til måter å filtrere listen</li>
    <li class="text-center"></li>
    <li class="text-center"></li>
  </ul>

  