import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import './Main.css'

const Main = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('fakeData.json')
            const data = await res.json()
            setPosts(data);
        }
        loadData()
    }, [])


    const [readTime, setReadTime] = useState(0)
    const totalReadTime = (id) => {

        let spendTime = readTime
        for(const post of posts){
            if(post.id == id){
                spendTime = spendTime + post.readTime
                setReadTime(spendTime)
            }
        }
    }

    const [bookmarkPosts, setBookmarkPosts] = useState([])

    const bookMarkHandler = (id) => {

        const singlePost = posts.find(post => post.id == id)
        if(bookmarkPosts.length < 1){
            setBookmarkPosts([...bookmarkPosts, singlePost])
        }
        else {
            
            const checkDuplicateData = bookmarkPosts.find(post => post.id == id)
            if(!checkDuplicateData) {
                setBookmarkPosts([...bookmarkPosts, singlePost])
            } else {
                alert('already have')
            }
        }

    }



    return (
        <main >
            <section className='grid md:grid-cols-3 gap-5 mx-2 md:mx-0  my-3'>
                <div className='md:col-span-2'>
                    {
                        posts.map(post => <Blog
                            key={post.id}
                            post={post}
                            totalReadTime={totalReadTime}
                            bookMarkHandler={bookMarkHandler}
                        ></Blog>)
                    }
                </div>
                <Bookmarked
                    readTime={readTime}
                    bookmarkPosts={bookmarkPosts}
                ></Bookmarked>
            </section>
        </main>
    );
};

export default Main;