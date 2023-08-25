# def sum(array)
#   counter = 0
#   index = 0
#   while index < array.length
#     counter += array[index]
#     index += 1
#   end
#   p counter
# end

# sum([1, 2, 3, 4, 5])

# def smol(words)
#   word = "abcdefghijklmnopqrstuvwxyz"
#   index = 0
#   while index < words.length
#     if words[index].length < word.length
#       word = words[index]
#     end
#     index += 1
#   end
#   p word
# end

# smol(["food", "tv", "computer", "Sweden", "a", "monitor"])

# def reverse(array)
#   reversed_array = []
#   index = 0
#   i = -1
#   while index < array.length
#     reversed_array << array[i]
#     index += 1
#     i -= 1
#   end
#   p reversed_array
# end

# reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# def first_is_a(words)
#   counter = 0
#   words.each do |word|
#     if word.start_with?("a")
#       counter += 1
#     end
#   end
#   p counter
# end

# first_is_a(["apple", "orange", "anonymous", "porcupine", "herbivore"])

# def combined_with_commas(words)
#   new_string = ""
#   index = 0
#   while index < (words.length - 1)
#     new_string += (words[index] + ", ")
#     index += 1
#   end
#   new_string += ("and " + words[-1])
#   puts new_string
# end

# combined_with_commas(["Ferrari", "Lamborghini", "Koenigsegg", "Zenvo"])

# def num_of_zeroes(array)
#   counter = 0
#   index = 0
#   while index < array.length
#     if array[index] == 0
#       counter += 1
#     end
#   index += 1
#   end
#   p counter
# end

# num_of_zeroes([0, 5, 2, 0, 7, 9, 0])

# def biggerthanten(array)
#   counter = 0
#   index = 0
#   while index < array.length
#     if array[index] <= 10
#       counter += 1
#     end
#     index += 1
#   end
#   if counter != 0
#     puts "false"
#   else
#     puts "true"
#   end
# end

# biggerthanten([12, 2, 14, 16, 20])

# def number_of_a(array)
#   counter = 0
#   index = 0
#   while index < array.length
#     word = array[index]
#     wordarray = word.chars
#     wordarray.each do |numa|
#       if numa == "a"
#         counter += 1
#       end
#     end
#     index += 1
#   end
#   p counter
# end

# number_of_a(["apple", "orange", "aaaahhhh", "alabama"])


    


  
  






  
    