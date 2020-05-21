<script>
  import Board from "./Board.svelte";
  import Congrats from "./Congrats.svelte";
  import Controls from "./Controls.svelte";
  import {
    generateTiles,
    getIsComlete,
    move,
    shuffleBoard
  } from "./helpers.js";

  export let tiles = shuffleBoard(generateTiles(4, 4));

  export let updateState = (action, ...params) => {
    switch (action) {
      case "move": {
        const [tile] = params;
        tiles = move(tiles, tile);
        break;
      }
      case "updateSize": {
        const [rows, cols] = params;
        tiles = shuffleBoard(generateTiles(rows, cols));
        break;
      }
      default:
        break;
    }
  };

  $: isComplete = getIsComlete(tiles);
  $: document.title = `${tiles[0].length * tiles.length - 1}-puzzle`;
</script>

<main id="root">
  {#if isComplete}
    <Congrats {tiles} {updateState} />
  {:else}
    <Controls {tiles} {updateState} />
    <Board {tiles} {updateState} />
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
    height: 100vh;
  }
</style>