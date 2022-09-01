<script>
    import { sykkelInfo } from "../stores/stativstore";
    console.log($sykkelInfo);
</script>


<svelte:head>
	<title>Bysykkel</title>
	<meta name="Bysykkel" content="Bysykkel status" />
</svelte:head>

<section>
    <h1>Sykkelstatus</h1>
    {#each $sykkelInfo as sykkelInformasjon}
    <p>{sykkelInformasjon.name}</p>
    <p>{sykkelInformasjon.id}</p>
    <p>{sykkelInformasjon.ledige_sykler}</p>
    <p>{sykkelInformasjon.ledige_laaser}</p>
    <br>
    {/each}

</section>