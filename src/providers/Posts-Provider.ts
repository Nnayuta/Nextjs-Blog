import { Post } from "../models/Post";


const posts = [
    {
        "title": "Paisagem do lago",
        "imagePath": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
        "author": "Dizzy",
        "category": "Paisagem",
        "publisedAt": "01/05/1882 ás 00:00",
        "public": true,
        "comments": [
            {
                "author": "Nayuta",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
                "published": "01/05/1882 ás 00:00"
            }
        ]
    },
    {
        "title": "Paisagem do lago2",
        "imagePath": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
        "author": "Dizzy",
        "category": "Paisagem",
        "publisedAt": "01/05/1882 ás 00:00",
        "public": true,
        "comments": [
            {
                "author": "Nayuta",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
                "published": "01/05/1882 ás 00:00"
            }
        ]
    },
    {
        "title": "Paisagem do lago3",
        "imagePath": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
        "author": "Dizzy",
        "category": "Paisagem",
        "publisedAt": "01/05/1882 ás 00:00",
        "public": true,
        "comments": [
            {
                "author": "Nayuta",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
                "published": "01/05/1882 ás 00:00"
            }
        ]
    },
    {
        "title": "Paisagem do lago4",
        "imagePath": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
        "author": "Dizzy",
        "category": "Paisagem",
        "publisedAt": "01/05/1882 ás 00:00",
        "public": true,
        "comments": [
            {
                "author": "Nayuta",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
                "published": "01/05/1882 ás 00:00"
            }
        ]
    },
    {
        "title": "Paisagem do lago5",
        "imagePath": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
        "author": "Dizzy",
        "category": "Paisagem",
        "publisedAt": "01/05/1882 ás 00:00",
        "public": true,
        "comments": [
            {
                "author": "Nayuta",
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum earum dolorum! Nam dolores iste excepturi velit labore, debitis culpa dolorum. Nostrum perferendis labore illum vel eveniet esse, eius illo.",
                "published": "01/05/1882 ás 00:00"
            }
        ]
    },
] as Post[];

export async function getAllPosts() {
    return posts;
}

export async function getPost(title: string) {
    return posts.find(post => post.title === title);
}