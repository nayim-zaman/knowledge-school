import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Bookmarked = ({ readTime, bookmarkPosts, resetSpentTime }) => {

    // const  = props
    // const resetSpentTime = 0

    // console.log(props);

    return (
        <div className='relative'>
            <div className='sticky top-5'>
                <div className='flex items-center gap-5 justify-center bg-purple-light p-5 border-2 border-purple rounded-lg'>
                    <h5 className=' text-center font-black text-purple text-2xl'>Spent time on read: {readTime} min </h5>
                    <FontAwesomeIcon onClick={() => resetSpentTime()} className='cursor-pointer bg-purple p-3 rounded-lg text-white'
                        icon={faTrash}
                    ></FontAwesomeIcon>
                </div>

                <div className='bg-cart-clr p-5 md:p-8 my-3 md:my-6 rounded-lg'>
                    <h5 className='text-2xl font-bold '>Bookmarked Blogs : {bookmarkPosts.length}</h5>
                    {
                        bookmarkPosts.map(post => <BookmarkedSinglePost
                            key={post.id}
                            title={post.title}
                        ></BookmarkedSinglePost>)
                    }
                </div>
            </div>
        </div>
    );
};

const BookmarkedSinglePost = ({ title }) => {

    return (
        <h6 className='text-lg font-bold bg-white p-5 my-4 rounded-lg'>{title}</h6>
    )
}

export default Bookmarked;