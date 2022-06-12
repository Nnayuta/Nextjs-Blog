const posts = [
    {
        title: 'Paisagem do lago',
        imagePath: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.',
        author: 'Dizzy',
        categoria: 'Paisagem',
        date: '01/05/1882 ás 00:00',
        published: true
    },
    {
        title: 'Montanhas com casas',
        imagePath: "https://upload.wikimedia.org/wikipedia/commons/1/14/Landscape_Arnisee-region.JPG",
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.',
        author: 'Nayuta',
        categoria: 'Paisagem',
        date: '01/05/1882 ás 00:00',
        published: false
    },
    {
        title: 'Montanhas Rochosas',
        imagePath: "https://www.grupotecnofix.com.br/wp-content/uploads/2020/04/landscape-mountains-sky-4843193.jpg",
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.',
        author: 'Dizzy',
        categoria: 'Paisagem',
        date: '01/05/1882 ás 00:00',
        published: true
    },
    {
        title: 'Dunas de Areia',
        imagePath: "http://cdn.eso.org/images/screen/millour-01-cc.jpg",
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.',
        author: 'Nayuta',
        categoria: 'Paisagem',
        date: '01/05/1882 ás 00:00',
        published: false
    },
    {
        title: 'Paisagem de montanhas e grama',
        imagePath: "https://cdnb.artstation.com/p/assets/images/images/030/362/979/large/dawid-znaj-2020-09-17-19-44-04-window.jpg?1600365543",
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.',
        author: 'Dizzy',
        categoria: 'Paisagem',
        date: '01/05/1882 ás 00:00',
        published: true
    },
]

export async function getAllPosts() {
    return posts;
}

export async function getPost(title: string) {
    return posts.find(post => post.title === title);
}

export async function getUser() {
    return {
        email: 'nayuta@example.com',
        name: 'Nayuta',
        avatar: 'http://github.com/nnayuta.png',
        isAdmin: true,
    }
}