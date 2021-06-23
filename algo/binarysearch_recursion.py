
def binary_search(element, some_list, start_index=0, end_index=None):
    # end_index가 따로 주어지지 않은 경우에는 리스트의 마지막 인덱스
    if end_index == None:
        end_index = len(some_list) - 1
    
    
    if start_index > end_index:
        return None
        
    current_index = (start_index + end_index)//2
    
    if some_list[current_index] == element:
        return current_index
        
    if element < some_list[current_index]:
        return binary_search(element, some_list,start_index, current_index-1)
    elif element > some_list[current_index]:
        return binary_search(element,some_list, current_index+1 ,end_index)
    