class Quicksort_Algo:
    def sort_it(self, arr):
        # start quick sorting, set your left pointer to the head of the array, and the tail of the array or length - 1
        self.quicksort_helper(arr, 0, len(arr) - 1)
        # once all recursions return, return the sorted array
        return arr

    def quicksort_helper(self, arr, left, right):
        # Check if our pointers are in the same index, if so the array is sorted (base case)
        if left < right:
            # The first sort, finds the middle of the array to parition 2 new quick sorts (greater then partition and less then partition)
            pivot_final_resting_position = self.partition(arr, left, right)

            # The left branch, containing everything less then the pivot
            # In a worst case where the pivot is the smallest item in the array this would only every have 1 item
            # In a best case where the pivot is the median item in the array, this would be equal with the right branch
            self.quicksort_helper(arr, left, pivot_final_resting_position - 1)

            # The right branch, containing everything greater then the pivot
            # In a worst case where the pivot is the greatest item in the array this would only every have 1 item
            # In a best case where the pivot is the median item in the array, this would be equal with the left branch
            self.quicksort_helper(arr, pivot_final_resting_position + 1, right)

    def partition(self, arr, left, right):
        # Pivot is set to the last item in the less than / greater than partition
        # For Less Than that would be pivot - 1 from the last partition it branched from
        # For Greater Than that would be the right pointer from the last partition it branched from
        pivot = arr[right]

        i = left - 1
        # Loop from the left pointer to the right pointer
        # The right pointer in this partition depending on if we are in the greater than or less than branch would be either pivot - 1 (less then) or the tail of the array (greater then)
        for j in range(left, right):
            # If our scanner is on an item that is less than the pivot
            if arr[j] <= pivot:
                # i will now move up one space
                i += 1
                # i will now get swapped with the lesser value
                self.swap(arr, i, j)
        # Now we swap the pivot with the position of i after all the swaps are done (In a best case this will be the middle of the array, in the worst case this will be at the end or beginning of the array)
        self.swap(arr, i + 1, right)

        return i + 1
    # This runs anytime j is less then our pivot

    def swap(self, arr, first, second):
        # Setup a temporary variable so we don't lose the item at i
        temp = arr[first]
        # Now set j to where i is
        arr[first] = arr[second]
        # Now set the item that used to be i where j is currently
        arr[second] = temp


quicksort = Quicksort_Algo()

print(quicksort.sort_it([5, 4, 3, 2, 1]))