<script>
  import { onMount } from 'svelte';

  export let tiles;
  export let updateState;
  
  let audio;
  
  onMount(() => {
		audio.play();
  });
  
  $: cols = tiles[0].length;
  $: rows = tiles.length;
</script>

<div class="congrats">
  <div class="congrats-star" />
  <div class="congrats-header">
    You did it!
  </div>
  <audio src="./build/win.ogg" bind:this={audio} />
  <div class="congrats-controls">
    <a
      href="# "
      alt="Play again!"
      on:click={() => updateState('updateSize', rows, cols)}
    >
      Play again!
    </a>
  </div>
</div>

<style>
  .congrats {
    overflow: hidden;
    text-align: center;
  }

  .congrats-star {
    background: url('./star.svg') no-repeat center center;
    background-size: contain;
    height: 60vh;
    width: 60vw;
    margin: 0 auto;
  }

  .congrats-header {
    font-size: 5vw;    
    margin-top: 3vh;
    text-align: center;
  }

  .congrats-controls {
    margin-top: 3vh;
  }

  .congrats a {
    color: white;
    font-size: 2vw; 
  }
</style>