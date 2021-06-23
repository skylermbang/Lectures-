def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    char_list = []
    chat_list2 = []
    char_list = [char for char in string]

    for a in char_list:
        if a.isalpha():
            chat_list2.append(a)

    for a in chat_list2:
        order = ord(a) - ord('a')

        alphabet_occurrence_array[order] = alphabet_occurrence_array[order] + 1

    max = alphabet_occurrence_array[0]
    for i in alphabet_occurrence_array:
 
        if i > max:
            max = i

    index = alphabet_occurrence_array.index(max)
    print(index)


    result = chr(index+97)
    print (result )
    return alphabet_occurrence_array


print(find_alphabet_occurrence_array("hello my name is sparta"))
