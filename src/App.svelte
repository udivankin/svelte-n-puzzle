<script>
  import { setContext } from 'svelte';
  import Board from "./Board.svelte";
  import Congrats from "./Congrats.svelte";
  import Controls from "./Controls.svelte";
  import {
    generateTiles,
    getIsComlete,
    move,
    shuffleBoard
  } from "./helpers.js";
  import Stats from "./Stats.svelte";

  let moveId = 0;
  let gameId = Symbol('gameId');

  export let tiles = shuffleBoard(generateTiles(4, 4));
  export let updateState = (action, ...params) => {
    switch (action) {
      case "move": {
        const [tile] = params;
        let count = 0;
        [tiles, count] = move(tiles, tile);
        moveId += count;
        break;
      }
      case "updateSize": {
        const [rows, cols] = params;
        tiles = shuffleBoard(generateTiles(rows, cols));
        moveId = 0;
        gameId = Symbol('gameId');
        break;
      }
      default:
        break;
    }
  };

  setContext('updateState', updateState);

  $: isComplete = getIsComlete(tiles);
  $: document.title = `${tiles[0].length * tiles.length - 1}-puzzle`;
</script>

<main id="root">
  {#if isComplete}
    <Congrats {tiles} />
  {:else}
    <Controls {tiles} />
    <Board {tiles} />
    <Stats {moveId} {gameId} />
  {/if}
</main>

<style>
  /* PALLETE
		dark-primary-color:     #303F9F;
		default-primary-color:  #3F51B5;
		light-primary-color:    #C5CAE9;
		accent-color:           #44b39b;
		divider-color:          #B6B6B6
	*/

  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
</style>