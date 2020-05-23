<script>
  import { getContext, onMount } from 'svelte';
  import { getTime } from './helpers';
  
  export let moveId;
  export let gameId;
  
  let seconds;
  let previousGameId;
  let interval;

  const resetInterval = () => {
    clearInterval(interval);

	  interval = setInterval(() => {
			seconds +=1
		}, 1000);

		return () => clearInterval(interval);
  }

  onMount(resetInterval);
  
  $: {
     if (previousGameId !== gameId) {
       seconds = 0;
       previousGameId = gameId;
       resetInterval();
     }
  }
  $: time = getTime(seconds);
</script>

<div class="stats">
  <span>Move: {moveId}</span> 
  <span>Time: {time}</span>
</div>

<style>
  .stats {
    flex: 0 0 4rem;
    font-size: 1.125rem;
    text-align: center;
  }

  span {
    padding: 0 1rem;
  }

  @media all and (max-width: 768px) {
    .stats {
      font-size: 1rem;
    }
  }
</style>