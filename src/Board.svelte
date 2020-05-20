<script>
  export let tiles;
  export let updateState;

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
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {#each sortedTiles as pos, tileName}
      {#if tileName !== 0}
        <g
          class="tile"
          on:click={() => { updateState('move', tileName); }}
          key={tileName} 
          transform={`translate(${pos[1] * 24 + 1}, ${pos[0] * 24 + 1})`}
        >
          <rect
            height="22"
            width="22"
            stroke-width="0"
            x="1"
            y="1"
          />
          <text
            x={12}
            y={12}
            alignment-baseline="central"
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
    height: 100%;
    width: 100%;
    padding: 8rem 4rem 4rem;
  }

  .board .tile rect {
    fill: #3F51B5;
  }

  .board .tile text {
    fill: #cfd5f7;
    font-size: .75rem;
  }

  .board .tile, .board {
    transition: all .2s cubic-bezier(1, 0, 0, 1)
  }

  .board .tile:hover {
    cursor: pointer;
  }

  .board .tile:hover rect {
    fill: #475bca;
  }

  @media all and (max-width: 768px) {
    .board-wrapper {
      padding: 4rem 2rem 2rem;
    }
  }
</style>