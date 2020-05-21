<script>
  import { getContext } from 'svelte';

  export let tiles;
  
  let updateState = getContext('updateState');

  const getSortedTiles = (tiles) => {
    const sortedTiles = [];

    tiles.forEach((rowTiles, y) => {
      rowTiles.forEach((number, x) => {
        sortedTiles[number] = [y, x];
      });
    });

    return sortedTiles;
  }

  $: cols = tiles[0].length;
  $: rows = tiles.length;
  $: sortedTiles = getSortedTiles(tiles);
</script>

<div class='board-wrapper'>
  <svg
    class="board"
    width="100%"
    height="100%"
    viewBox={`0 0 ${cols * 24} ${rows * 24}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {#each sortedTiles as pos, tileName}
      {#if tileName !== 0}
        <g
          class="tile"
          on:click={() => { updateState('move', tileName); }}
          key={tileName} 
          transform={`translate(${pos[1] * 24}, ${pos[0] * 24})`}
        >
          <rect
            height="22"
            width="22"
            stroke-width="0"
            x="1"
            y="1"
          />
          <text
            font-size="12"
            transform={`translate(12, 16)`}
            text-anchor="middle"
          >
            {tileName}
          </text>
        </g>
      {/if}
    {/each}
  </svg>
</div>

<style>
  .board-wrapper {
    height: calc(100% - 4rem);
    padding: 2rem;
  }

  .board .tile {
    cursor: pointer;
  }

  .board .tile rect {
    fill: #3F51B5;
  }

  .board .tile text {
    fill: #cfd5f7;
  }

  .board .tile, .board {
    transition: all .2s cubic-bezier(1, 0, 0, 1)
  }

  @media all and (max-width: 768px) {
    .board-wrapper {
      padding: 1rem;
    }
  }

  @media (pointer: fine) {
    .board .tile:hover rect {
      fill: #475bca;
    }  
  }

  @media (pointer: coarse) {
    .board .tile:active rect {
      fill: #475bca;
    } 
  }
</style>