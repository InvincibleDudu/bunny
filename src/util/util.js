export function getReadableTime(time) {
   let m
   if (time === undefined)
      m = new Date()
   else
      m = new Date(time)
   return (
      // m.getFullYear() + "/" +
      ("0" + (m.getMonth() + 1)).slice(-2) + "-" +
      ("0" + m.getDate()).slice(-2) + "_" +
      ("0" + m.getHours()).slice(-2) + "-" +
      ("0" + m.getMinutes()).slice(-2) + "-" +
      ("0" + m.getSeconds()).slice(-2) + "-" +
      ("0" + m.getMilliseconds()).slice(-3))
}
