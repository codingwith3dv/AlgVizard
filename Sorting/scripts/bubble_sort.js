function bubble_Sort() {
    time_interval = 0
    document.getElementById('bubble').click()
    for (var i = 0; i < array_length; i++) {
        for (var j = 0; j < array_length - i - 1; j++) {
            update_block(block_divs[j], block_divs_value[j], "yellow");
            if (block_divs_value[j] > block_divs_value[j + 1]) {
                update_block(block_divs[j], block_divs_value[j], "red")
                update_block(block_divs[j + 1], block_divs_value[j + 1], "red") 
                
                swap(j)

                update_block(block_divs[j], block_divs_value[j], "red")
                update_block(block_divs[j + 1], block_divs_value[j + 1], "red") 
            }
            update_block(block_divs[j], block_divs_value[j], "blue")
        }
        update_block(block_divs[j], block_divs_value[j], "green")
    }
    update_block(block_divs[0], block_divs_value[0], "green")
    //enableSpinner()
    return "Bubble Sort"
}