<script>
  import ControlsButton from './ControlsButton.svelte';
  import { find } from './helpers';
  
  export let tiles;
  export let updateState;

  $: cols = tiles[0].length;
  $: rows = tiles.length;

  const handleKeyDown = ({ keyCode }) => {
    const [row, col] = find(tiles, 0);
    let tile;

    if (keyCode === 37 && (col < cols - 1)) { // LEFT
      tile = tiles[row][col + 1];
    } else if (keyCode === 38 && (row < rows - 1)) { // UP
      tile = tiles[row + 1][col];
    } else if (keyCode === 39 && col > 0) { // RIGHT
      tile = tiles[row][col - 1];
    } else if (keyCode === 40 && row > 0) { // DOWN
      tile = tiles[row - 1][col];
    }

    if (tile) updateState('move', tile);
  };
</script>

<svelte:window on:keydown={handleKeyDown}/>

<div class="controls">
  <div class="rows-controls">
    Rows
    <ControlsButton {cols} {rows} update={[ 'rows', -1 ]} {updateState} />
    <ControlsButton {cols} {rows} update={[ 'rows', +1 ]} {updateState} />
  </div>
  <div class="cols-controls">
    Columns
    <ControlsButton {cols} {rows} update={[ 'cols', -1 ]} {updateState} />
    <ControlsButton {cols} {rows} update={[ 'cols', +1 ]} {updateState} />
  </div>
  <div class="aside-controls">
    <ControlsButton {cols} {rows} shuffle {updateState} />
  </div>
</div>

<style>
  .controls {
    display: flex;
    flex: 0 0 auto;
    font-size: 1.125rem;
    margin-top: 1rem;
  }

  .controls > div {
    padding: 0 1rem;
    display: inline-flex;
    align-items: center;
  }

  .controls .rows-controls {
    flex: 1 0 auto;
    justify-content: flex-end;
    padding-left: 4rem;
  }

  .controls .cols-controls {
    flex: 1 0 auto;
  }

  .controls .aside-controls {
    flex: 0 1 auto;
  }


  @media all and (max-width: 768px) {
    .controls {
      font-size: 1rem;
    }

    .controls > div {
      padding: 0 .25rem;
    }

    .controls > div:first-child {
      padding-left: 1rem;
    }

    .controls > div:last-child {
      padding-right: 1rem;
    }
  }
</style>