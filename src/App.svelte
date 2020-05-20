<script>
	import Board from './Board.svelte';
	import Congrats from './Congrats.svelte';
	import Controls from './Controls.svelte';
	import {
		 generateTiles, getIsComlete, move, shuffleBoard
	} from './helpers.js';

	export let tiles = shuffleBoard(generateTiles(4, 4));

	export let updateState = (action, ...params) => {
		switch (action) {
			case 'move': {
				const [tile] = params;
				tiles = move(tiles, tile);
				break;
			}
			case 'updateSize' : {
				const [rows, cols] = params;
				tiles = shuffleBoard(generateTiles(rows, cols));
				break;
			}
			default:
				break;
		}
	}

	$: isComplete = getIsComlete(tiles);
</script>

<div id="root">
	<main>
		{#if isComplete}
			<Congrats {tiles} {updateState} />
		{:else}
			<Controls {tiles} {updateState} />
			<Board {tiles} {updateState} />
		{/if}
	</main>
</div>

<style>
	/* PALLETE
		dark-primary-color:     #303F9F;
		default-primary-color:  #3F51B5;
		light-primary-color:    #C5CAE9;
		accent-color:           #44b39b;
		divider-color:          #B6B6B6
	*/

	#root {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	main {
		height: 100vh;
	}
</style>