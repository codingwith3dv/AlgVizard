function merge_Sort() {
    time_interval = 0;
    merge_partition(0, array_length - 1);
    //enableSpinner()
    return 'Merge Sort';
}

function merge_partition(start, end) {
    if (start < end) {
        var middle = Math.floor((start + end) / 2);
        update_block(block_divs[middle], block_divs_value[middle], "yellow");
        merge_partition(start, middle);
        merge_partition(middle + 1, end);
        if (block_divs_value[middle] > block_divs_value[middle + 1]) {
            mergeSort(start, middle, end);
        }
    }
}

function mergeSort(start, mid, end) {
    var index = 0;
    var left = start;
    var right = mid + 1;
    var ARRAY = [];

    while (left <= mid && right <= end) {
        if (block_divs_value[left] <= block_divs_value[right]) {
            ARRAY[index] = block_divs_value[left];
            //update_block(block_divs[left], block_divs_value[left], "red")
            left++;
        } else {
            ARRAY[index] = block_divs_value[right];
            //update_block(block_divs[right] , block_divs_value[right], "red")
            right++;
        }
        index++;
    }

    if (left > mid) {
        for (var i = right; i <= end; i++) {
            ARRAY[index++] = block_divs_value[i];
            //update_block(block_divs[index], block_divs_value[index], "red")
        }
    } else {
        for (var i = left; i <= mid; i++) {
            ARRAY[index++] = block_divs_value[i];
            //update_block(block_divs[index], block_divs_value[index], "red")

        }
    }

    for (var i = 0; i < ARRAY.length; i++) {
        block_divs_value[start++] = ARRAY[i]
        update_block(block_divs[start - 1], block_divs_value[start - 1], "green")
    }
}