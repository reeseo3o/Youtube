export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function publishDate(date) {
  const publishedDate = new Date(date);
  const currentDate = new Date();
  const second = (currentDate.getTime() - publishedDate.getTime()) / 1000;

  let result;
  if (second < 60) {
    result = `${second}초 전`;
  } else if (second < 60 * 60) {
    result = `${Math.floor(second / 60)}분 전`;
  } else if (second < 3600 * 24) {
    result = `${Math.floor(second / 3600)}시간 전`;
  } else if (second < 3600 * 24 * 7) {
    result = `${Math.floor(second / 86400)}일 전`;
  }
  return result;
}
