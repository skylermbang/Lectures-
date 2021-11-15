

require('dotenv').config()
const axios = require('axios');



// export const getNaver = (keyword) => {
//     var api_url = `https://openapi.naver.com/v1/search/news?query=` + "bitcoin" + "&display=40";
//     axios.get(api_url, )
//         .then(function (response) {
//             // handle success
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             return "yes" // always executed
//         });

// }

export const getNaver = (keyword) => {
    var api_url = `https://openapi.naver.com/v1/search/news?query=` + "bitcoin" + "&display=5";
    axios.get(api_url, {
        headers: {
            'X-Naver-Client-Id': process.env.NAVER_USER, 'X-Naver-Client-Secret': process.env.NAVER_PW
        }
    }
    ).then(function (response) {
        // handle success
        console.log("****************************");
        console.log(response.data)
        // console.log(JSON.parse(response).items.forEach(async item => {
        //     console.log(item.title)
        //     console.log(item.originallink)
        //     console.log(item.link)
        //     console.log(item.pubDate)
    })
        .catch(function (error) {
            // handle error
            console.log("you loser")
            // console.log(error);
        })
        .then(function () {
            return "yes" // always executed

        })


}

// export const getNaver() => {
//     var api_url = `https://openapi.naver.com/v1/search/news?query=` + "bitcoin" + "&display=40"; // json 결과
//     var request = require('request');
//     var options = {
//         url: api_url,
//         headers: { 'X-Naver-Client-Id': process.env.NAVER_USER, 'X-Naver-Client-Secret': process.env.NAVER_PW },

//     };
//     request.get(options, async function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(JSON.parse(response.body).items.forEach(async item => {
//                 console.log(item.title)
//                 console.log(item.originallink)
//                 console.log(item.link)
//                 console.log(item.pubDate)
//             }))

//         }
//     }
// }