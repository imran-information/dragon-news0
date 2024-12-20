
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import RightNav from '../components/layout-component/RightNav';

const NewsDetails = () => {
    const { data } = useLoaderData()
    const news = (data[0])
    return (
        <div>
            <header className='my-2'>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 my-5 gap-5 font-poppins'>
                <section className='col-span-9'>
                    <h2 className='text-xl font-poppins font-semibold'>Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body px-10">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to={'/'} className="btn btn-neutral rounded-none">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;