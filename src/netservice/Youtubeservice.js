class YoutubeService {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  /* mostPopular */

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&regionCode=kr&maxResults=30&key=AIzaSyBz1yc0budkTZY7evZ2A9t9NXvJxr_JAJg`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
  /* search */
  async searchResult(searchValueTxt) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&type=video&regionCode=kr&q=${searchValueTxt}&key=AIzaSyBz1yc0budkTZY7evZ2A9t9NXvJxr_JAJg`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default YoutubeService;
