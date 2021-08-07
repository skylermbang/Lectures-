module.exports = {
    isEmail: (value) => {

        const [local, domain, ...etc] = value.split('@')
        // value가 이메일 형식에 맞으면 true, 형식에 맞지 않으면 false를 return 하도록 구현해보세요
        if (!local || !domain || etc.length) {
            return false
        }
        else if (value.split('@').length !== 2) {
            return false
        } else if (value.includes(" ")) {
            return false
        } else if (value[0] === "-") {
            return false
        }
        for (const word of local.toLowerCase().split("")) {
            if (!["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "_"].includes(word)) {
                return false;
            }
        }

        for (const word of domain.toLowerCase().split("")) {
            if (!["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."].includes(word)) {
                return false;
            }
        }



        return true;
    },
};