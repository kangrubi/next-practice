

export default function Home({posts}) {
  console.log(posts);

  return (
    <div>
      <h1>
        welcome to my blog
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// 서버에서 데이터가 바꼈을 때 즉각적으로 변화가 일어남
// export const getServerSideProps = async() => {
//   const res = await fetch(`http://localhost:8080/api/posts`)
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }


// 바로 변동이 안 됨. revalidate 옵션을 지정 20초 뒤에 데이터 새로고침
export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
}