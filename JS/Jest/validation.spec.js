const { TestWatcher } = require('jest');
const { isEmail } = require('./validation');

// test('테스트가 성공하는 상황', () => {
//     expect(isEmail('이메일이 아니에요')).toEqual(false);
// });

// test('테스트가 실패하는 상황', () => {
//     expect(isEmail('my-email@domain.com')).toEqual(true);
// }); 

test(" @ must be 1 ", () => {
    expect(isEmail("my-email@domain.com")).toEqual(true)
    expect(isEmail("my-email@@domain.com")).toEqual(false)
    expect(isEmail("my-emaildomain.com")).toEqual(false)
})


test(" there must be no space  ", () => {
    expect(isEmail("my-email @domain.com")).toEqual(false)
    expect(isEmail("my-email@ domain.com")).toEqual(false)
    expect(isEmail("my-email @ domain.com")).toEqual(false)
    expect(isEmail("my-email@domain.com")).toEqual(true)
})

test(" first charact must not -  ", () => {
    expect(isEmail("-my-email @domain.com")).toEqual(false)
    expect(isEmail("my-email@domain.com")).toEqual(true)

})



test(" local part only a-zA-Z + - _  ", () => {
    expect(isEmail("azZ_+-@hotmail.com")).toEqual(true)
    expect(isEmail("azz#@hotmail.com")).toEqual(false)


})

test(" domain part only a-Z . -  ", () => {
    expect(isEmail("email@aloha-.com")).toEqual(true)
    expect(isEmail("myemail@domain_.com")).toEqual(false)

})