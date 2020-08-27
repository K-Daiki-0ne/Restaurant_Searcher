export const getLocation = (): any => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          resolve({
            lat: pos.coords.latitude, 
            lon: pos.coords.longitude 
          })
        },
        reject => {
          switch(reject.code) {
            case 1:
              alert('This terminal can not allow get current position')
              break
            case 2:
              alert('Sorry, failed to get position')
              break
            case 3:
              alert('Sorry, timeout')
              break
            default:
              break
          }
        },
      )
    })
  } else {
    alert('Sorry, this terminal can not use geolocation');
  }
}

// export const getLocation = (): object | undefined=> {
//   try {
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;
//       return { latitude, longitude };
//     })
//   } catch (err) {
//     return {
//       err
//     }
//   }
// }