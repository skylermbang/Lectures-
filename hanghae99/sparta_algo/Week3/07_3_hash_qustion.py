all_students = ["나연", "정연", "모모", "사나", "지효", "미나", "다현", "채영", "쯔위"]
present_students = ["정연", "모모", "채영", "쯔위", "사나", "나연", "미나", "다현"]


def get_absent_student(all_array, present_array):
    student_dict={}
    for student in all_students:
        student_dict[ ] = True

    for student in present_students:
        del student_dict[student]

    for student in student_dict.keys():
        return student

    return


print(get_absent_student(all_students, present_students))