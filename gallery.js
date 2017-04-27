var chico = [];
chico = [
  {description: "Upper Biwell",
  picture: "http://bidwellpark.org/wp-content/uploads/2014/12/North-Rim-Trail-in-Bidwell-Park.jpg",
  from: "http://bidwellpark.org/upper-park-trails/"
  },
  {description: "One Mile",
  picture: "https://chicostateblog.files.wordpress.com/2012/07/img_0548.jpg",
  from: "https://chicostateblog.wordpress.com/tag/one-mile/"
  },
  {description: "Naked Lounge",
  picture: "https://krystinamriccio.files.wordpress.com/2015/02/place.jpg",
  from: "https://krystinamriccio.wordpress.com/2015/02/18/the-naked-experience/"
  },
  {description: "Dnook",
  picture: "http://foodio54.com/images/biz/70/63/donut-nook-chico-3497063.jpg",
  from: "http://foodio54.com/restaurant/Chico-CA/c2a9c/Donut-Nook"
  },
  {description: "Woodstocks",
  picture: "https://ddjkm7nmu27lx.cloudfront.net/146958489585538/cover/57eb55ed2b5901.44104318.jpg",
  from: "https://birdeye.com/woodstocks-pizza-chico-146958489585538"
  },
];
var current;

function shuffleGallery()
{
  var i;
  do{
      i = Math.floor(Math.random() * 5);
  }while(i == current);
  current = i;
  console.log(chico[i]);
}
