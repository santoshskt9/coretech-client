import React from 'react'
import BreadCrumb2 from '../../../components/BreadCrumb/BreadCrumb2';

const Blogs = () => {
    return (
        <>
        <BreadCrumb2 heading="Blogs, News, Articles & Case Studies"/>
            <section class="bg-silver-light">
                <div class="container pb-90">
                    <div class="row">
                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="images/resource/news-1.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">12 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="images/resource/news-2.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">15 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>

                        <div class="news-block col-xl-4 col-lg-6 col-md-6">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><a href="/blog/abc"><img src="images/resource/news-3.jpg" alt="" /></a></figure>
                                </div>
                                <div class="content-box">
                                    <span class="date">22 Jan, 2023</span>
                                    <span class="post-info"><i class="fa fa-user-circle"></i> by Admin</span>
                                    <h5 class="title"><a href="/blog/abc">Over ride the digital divide with additional</a></h5>
                                    <div class="text">Lorem ipsum dolor sit amet, coned sectetur notte elit sed do.</div>
                                    <a href="/blog/abc" class="read-more"><i class="fa fa-long-arrow-alt-right"></i> Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blogs;