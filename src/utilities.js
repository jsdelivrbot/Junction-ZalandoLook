export function parseArticle (article, type) {
  var id = article.id;
  var media = article.media;
  var imageUrl = "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png";

  if (typeof media !== 'undefined') {
    imageUrl = media.images[0].smallHdUrl;
  }
  var res = {
    "name":article.name,
    "id":id,
    "html":"#/" + type + "/"+id,
    "shopUrl":article.shopUrl,
    "imageUrl":imageUrl
  };
  return res;
}