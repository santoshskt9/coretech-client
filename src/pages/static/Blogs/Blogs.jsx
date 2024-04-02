import React, { useEffect, useState } from 'react'
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';
import PostCard from '../../../components/Post/PostCard';
import { useGlobalContext } from '../../../global/context';

const Blogs = () => {
    const { api } = useGlobalContext();
    const [blogs, setBlogs] = useState();
    const [news, setNews] = useState();
    const [caseStudies, setCaseStudies] = useState();
    const [articles, setArticles] = useState();


    const getBlogs = async () => {
        try {
            const res = await api.get(`/api/post/blogs`);
            if (res?.status === 200) {
                console.log(res);
                setBlogs(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    const getNews = async () => {
        try {
            const res = await api.get(`/api/post/news`);
            if (res?.status === 200) {
                console.log(res);
                setNews(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    const getArticles = async () => {
        try {
            const res = await api.get(`/api/post/articles`);
            if (res?.status === 200) {
                console.log(res);
                setArticles(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    const getCaseStudies = async () => {
        try {
            const res = await api.get(`/api/post/case-studies`);
            if (res?.status === 200) {
                console.log(res);
                setCaseStudies(res?.data);
            }

        } catch (error) {
            console.log("Error fetching post", error);
        }
    }

    useEffect(() => {
        getArticles();
        getBlogs();
        getCaseStudies();
        getNews();
    }, []);


    return (
        <>
            <BreadCrumb2 heading="Blogs, News, Articles & Case Studies" />
            <section class="bg-silver-light">
                <div class="container pb-90">
                    <div class="sec-title">
                        <span class="sub-title">All Blogs</span>
                        <h2>Blogs</h2>
                    </div>
                    <div class="row">
                        {
                            blogs?.map((blog, i) => (
                                <PostCard data={blog} key={i} />
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blogs;