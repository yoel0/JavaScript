# QUICK SORT: best/average O(n*log n) worst O(n^2)
# BASE CASE(S): length of list less than or equal to 1
# RECURSIVE CASE: Any other length
# 1. Pick a pivot element
# 2. Divide into left and right, based on the pivot element
# 3. Put it back together
#   a) Quick sort the left
#   b) Quick sort the right
#   c) Concat left + pivot + right

nums = [3, 78, 23, 466, 324, 2, 12, 546, 17, 56, 23, 123, 343, 87, 94, 45, 6, 9, 234, 36]
# left = [3, 23, 2, 12, 17, 23, 6, 9]
# right = [78, 466, 324, 546, 56, 123, 343, 87, 94, 45, 234]

# left = [3, 23, 2, 12, 17, 23, 6]
def quick_sort(ls):
    # Base case
    if len(ls) <= 1:
        return ls

    pivot = ls.pop() # 9
    left = [x for x in ls if x <= pivot]
    # left = [3, 2]
    right = [y for y in ls if y > pivot]
    # right = [23, 12, 17, 23]

    left_sorted = quick_sort(left)
    right_sorted = quick_sort(right)
    print('Result', left_sorted + [pivot] + right_sorted)
    return left_sorted + [pivot] + right_sorted

quick_sort(nums)