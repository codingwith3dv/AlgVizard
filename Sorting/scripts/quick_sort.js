function quick_Sort() {
    time_interval = 0;
    document.getElementById('quick').click() 
    quickSort(0,array_length-1)
    //enableSpinner()
    return "Quick Sort"
}

function quick_partition(start, end) {
    var index = start + 1;
    var pivot = block_divs_value[start];
    
    update_block(block_divs[start], block_divs_value[start], "yellow");
    
    for (var j = start + 1; j <=end ; j++) {
        if (block_divs_value[j] < pivot) {
            
            
            update_block(block_divs[j], block_divs_value[j], "yellow");
            update_block(block_divs[index], block_divs_value[index], "red");
            update_block(block_divs[j], block_divs_value[j], "red");
            
            var temp = block_divs_value[index];
            block_divs_value[index] = block_divs_value[j];
            block_divs_value[j] = temp;
            
            update_block(block_divs[index], block_divs_value[index], "red");
            update_block(block_divs[j], block_divs_value[j], "red"); 
            
            update_block(block_divs[index], block_divs_value[index], "blue");
            update_block(block_divs[j], block_divs_value[j], "blue");
            
            index += 1;
        }
    }
    
    update_block(block_divs[start], block_divs_value[start], "red");
    update_block(block_divs[index-1],block_divs_value[index-1],"red");
    
    
    var temp = block_divs_value[start];
    block_divs_value[start] = block_divs_value[index-1];
    block_divs_value[index-1]=temp;
    
    update_block(block_divs[start], block_divs_value[start], "red");
    update_block(block_divs[index-1],block_divs_value[index-1],"red");
    
    for(var k = start; k <=index; k++){
        update_block(block_divs[k], block_divs_value[k], "green");
    }
    
    return index - 1;
}

function quickSort(start, end) {
    if (start < end) {
        var pivot_position = quick_partition(start, end);
        
        quickSort(start, pivot_position - 1);
        quickSort(pivot_position + 1, end)
    }
}