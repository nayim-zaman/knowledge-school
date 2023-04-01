import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';

// Import toast 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Content = () => {

    // load json data from fake data
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('fakeData.json')
            const data = await res.json()
            setPosts(data);
        }
        loadData()
    }, [])

    // implement Total read time EVENT Handler 
    const spendTime = localStorage.getItem('spend-time')
    const [readTime, setReadTime] = useState(spendTime)

    const totalReadTime = (id) => {

        const postReadTime = posts.find(post => post.id == id)

        if (!spendTime) {
            localStorage.setItem('spend-time', postReadTime.readTime)
            setReadTime(postReadTime.readTime)
        }
        else {
            localStorage.setItem('spend-time', +spendTime + postReadTime.readTime)
            setReadTime(+spendTime + postReadTime.readTime)
        }
        console.log(spendTime, id);
    }

    // Reset Spent Time
    const resetSpentTime = _ => {
        localStorage.setItem('spend-time', 0)
        setReadTime(0)
    }

    // handling bookmarks and toast notification
    const [bookmarkPosts, setBookmarkPosts] = useState([])
    const [showToast, setShowToast] = useState(false);

    const bookMarkHandler = (id) => {

        const singlePost = posts.find(post => post.id == id)
        if (bookmarkPosts.length < 1) {
            setBookmarkPosts([...bookmarkPosts, singlePost])
        }
        else {

            const checkDuplicateData = bookmarkPosts.find(post => post.id == id)
            if (!checkDuplicateData) {
                setBookmarkPosts([...bookmarkPosts, singlePost])
            } else {
                toast.error('You Have Already Bookmarked This Blog');
            }
            setShowToast(true)
        }
    }

    return (
        <>
            <section className='grid md:grid-cols-3 gap-5 mx-2 my-3'>

                {/* Display All Posts or Blog Component*/}
                <div className='md:col-span-2'>
                    {
                        posts.map(post => <Blog
                            key={post.id}
                            post={post}
                            totalReadTime={totalReadTime}
                            resetSpentTime={resetSpentTime}
                            bookMarkHandler={bookMarkHandler}
                            bookmarkPosts={bookmarkPosts}
                            showToast={showToast}
                        ></Blog>)
                    }
                </div>

                {/* Side bar Component */}
                <Bookmarked
                    readTime={readTime}
                    bookmarkPosts={bookmarkPosts}
                    resetSpentTime={resetSpentTime}
                ></Bookmarked>
            </section>
        </>
    );
};

export default Content;