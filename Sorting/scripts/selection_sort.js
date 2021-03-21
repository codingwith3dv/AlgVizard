function selection_Sort() {
    time_interval = 0
    var pos = 0;
    for(var i = 0; i < array_length; i++) {
        var small = block_divs_value[i];
        pos = i;
        
        for(var j = i + 1; j <  array_length; j++) {
            if(block_divs_value[j] < small) {
                small = block_divs_value[j]
                pos = j
                update_block(block_divs[pos], block_divs_value[pos], 'yellow')
            }
        }
        
        var temp = block_divs_value[pos]
        update_block(block_divs[pos], block_divs_value[pos], 'red')
        block_divs_value[pos] = block_divs_value[i]
        block_divs_value[i] = temp;
        update_block(block_divs[i], block_divs_value[i], 'red')
    }
    
    for (var i = 0; i < array_length; i++) {
        update_block(block_divs[i], block_divs_value[i], 'green')
    }
}