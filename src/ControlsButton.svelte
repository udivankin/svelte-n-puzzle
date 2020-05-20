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

<button
	class="btn outline"
	class:shuffle
	class:outline={!shuffle}
	title={`${direction > 0 ? 'More' : 'Less'} ${updateRows ? 'rows' : 'columns'}`}
	on:click={() => {
		const nextRows = shuffle ? rows : Math.max(2, rows + (rows ? direction : 0));
		const nextCols = shuffle ? cols : Math.max(2, cols + (cols ? direction : 0));
		updateState('updateSize', nextRows, nextCols);
	}}
>
	{#if !shuffle}
		{direction > 0 ? '+' : '-'}
	{/if}
</button>

<style>
  .btn {
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    outline: 0;
    padding: 0;
    text-align: center;
    font-size: 1.125rem;
    margin-left: 1rem;
    height: 3rem;
    line-height: 3rem;
    width: 3rem;
  }

  .btn:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }

  .btn.outline {
    background: rgba(255,255,255,.1);
    border: 1px solid #fff;
    color: #fff;
  }

  .btn.outline:hover {
    background: rgba(255,255,255,.2);
  }

  .btn.shuffle {
    background: #1db796 url('./shuffle.svg') no-repeat center center;
    background-size: 80%;
    color: #FFF;
    transition: .3s;
  }

  .btn.shuffle:hover {
    background-color: #4ddebf;
  }

  @media all and (max-width: 768px) {
    .btn {
      height: 1.5rem;
      line-height: 1.5rem;
      width: 1.5rem;
      margin-left: .5rem;
      font-size: 1rem;
    }
  }
</style>