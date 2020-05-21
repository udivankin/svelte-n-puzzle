<script>
	export let direction = 0;
	export let update = [];
	export let rows;
	export let cols;
	export let shuffle = false;
	export let updateState;

	$: updateRows = update[0] === 'rows';
	$: updateCols = update[0] === 'cols';
	$: direction = update[1];
</script>

<svg
  class="btn"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  on:click={() => {
		const nextRows = shuffle ? rows : Math.max(2, rows + (updateRows ? direction : 0));
		const nextCols = shuffle ? cols : Math.max(2, cols + (updateCols ? direction : 0));
		updateState('updateSize', nextRows, nextCols);
	}}
>
	{#if shuffle}
    <circle cx="12" cy="12" fill="#0dad8a" r="11"/>
    <g fill="#fff">
      <path d="M6.59 9.49h2.43c.51 0 .97.27 1.29.68.22-.4.5-.8.82-1.15a2.95 2.95 0 00-2.11-.93H6.59a.7.7 0 100 1.4zm5.34 2.15c.38-1.15 1.56-2.15 2.53-2.15h1.28l-.9.89a.7.7 0 10.97.98L18.4 8.8l-2.57-2.57a.7.7 0 10-.98.98l.9.9h-1.28c-1.58 0-3.27 1.36-3.85 3.1l-.33.99c-.45 1.33-1.44 2.15-1.95 2.15H6.58a.7.7 0 100 1.4h1.75c1.28 0 2.69-1.34 3.28-3.12l.32-.98z"/>
      <path d="M15 12.47a.7.7 0 000 .98l.9.9h-1.63a2 2 0 01-1.88-1.47 6.36 6.36 0 01-.75 1.52 3.3 3.3 0 002.63 1.34h1.62l-.9.89a.7.7 0 10.98.98l2.58-2.57-2.57-2.57a.7.7 0 00-.99 0z"/>
    </g>
	{:else}
    <circle cx="12" cy="12" fill="#fff" fill-opacity="0.1" r="11" stroke-width="0.5" stroke="#fff"/>
    <text text-anchor="middle" font-size="9" font-weight="bold" transform={`translate(12, 15.5)`} fill="#fff">
      {direction > 0 ? '+' : '-'}
    </text>
	{/if}
</svg>

<style>
  .btn {
    cursor: pointer;
    margin-left: 1rem;
    height: 3rem;
    width: 3rem;
    transition: all .2s;
    opacity: .6;
  }

  @media all and (max-width: 768px) {
    .btn {
      height: 2rem;
      width: 2rem;
      margin-left: .3rem;
    }
  }

  @media (pointer: fine) {  
    .btn:hover {
      opacity: 1;
    }
  }

  @media (pointer: coarse) {
    .btn:active {
      opacity: 1;
    }
  }
</style>