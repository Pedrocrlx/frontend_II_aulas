class Post {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class News extends Post {
  Post(): void {
    console.log("post done !");
  }
}

const post = new News("pedro become master");
console.log(post.name);
post.Post();

// generics
function random<T>(valor: T): T {
  return valor;
}
//console.log(random(2));
