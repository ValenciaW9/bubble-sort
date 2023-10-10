def bubble_sort(arr)
    n = arr.length
  
    for i in 0...(n - 1)
      for j in 0...(n - i - 1)
        if arr[j] > arr[j + 1]
          arr[j], arr[j + 1] = arr[j + 1], arr[j] # Swap the elements
        end
      end
    end
  
    arr 
end
  



#{#{}}TestCases
 puts "Expecting: [1, 2, 3, 4]"
 print bubble_sort([3, 2, 1, 4])
 
 puts
 
 puts "Expecting: [1, 2, 3]"
 print bubble_sort([1, 2, 3])
 
 puts
 
 puts "Expecting: []"
 print bubble_sort([])
 
 puts
 
 puts "Expecting: [1, 2, 3]"
 print bubble_sort([2, 3, 1])
 
 puts
 
 puts "Expecting: [1]"
 print bubble_sort([1])
 
 puts
 
 puts "Expecting: [1, 3]"
 print bubble_sort([3, 1])
 
 puts
 
 puts "Expecting: [-2, 0, 0, 1, 5, 6, 6, 7, 8, 8]"
 print bubble_sort([6, -2, 0, 8, 7, 8, 6, 0, 5, 1])


 #{#{Pseudocode in Ruby  pseudocode for the Bubble Sort algorithm:

#{#{}}Commencing with an unsorted array.
#{#{}}Repeat the following steps until the array is sorted: a. Iterate through the array from index 0 to n-1, where n is the length of the array. b. Compare each pair of adjacent elements. c. If the elements are in the wrong order, swap them. d. Continue iterating until the end of the array.
#{}After each iteration, the largest element will be in its correct position at the end of the array.
#{}Reduce the length of the array by 1 and repeat steps 2-4 until the array is sorted.
