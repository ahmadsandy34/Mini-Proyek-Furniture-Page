import React, { useEffect, useState } from 'react';
import Hero from "../components/Hero";
import WeCreate from "../components/WeCreate";
import NewIn from "../components/NewIn";
import TheBest from "../components/TheBest";
import AllProduct from '../components/AllProduct';
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import apiClient from '../utils/api';
// @ts-expect-error import error
import { Helmet } from "react-helmet";

export interface Header {
    title: string;
    description: string;
    banner: string;
}

export interface Data {
    experience: string;
    country: string;
    sold: string;
    variant: string;
}

export interface Categories {
    title: string;
    image: string;
}

export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    price_after_discount: number | null;
}

export interface Testimonials {
    id: number;
    name: string;
    message: string;
    title: string;
    image: string;
}


const Home: React.FC = () => {
    const [header, setHeader] = useState<Header>({
        title: '',
        description: '',
        banner: '',
    });
    const [data, setData] = useState<Data>({
        experience: '',
        country: '',
        sold: '',
        variant: '',
    });
    const [Categories, setCategories] = useState<Categories[]>([]);
    const [Testimonials, setTestimonials] = useState<Testimonials[]>([]);
    const [Products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    const getHeader = async () => {
        try {
            const response = await apiClient.get('/header');
            setHeader(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            const response = await apiClient.get('/data');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getCategories = async () => {
        try {
            const response = await apiClient.get('/category');
            setCategories(response.data.category);
        } catch (error) {
            console.log(error);
        }
    };

    const getTestimonials = async () => {
        try {
            const response = await apiClient.get('/testimonials?limit=10');
            setTestimonials(response.data.testimonials);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllProduct = async () => {
        try {
            const response = await apiClient.get(`/products?page=${currentPage}&limit=${postsPerPage}`);
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEmailSubmit = async (email: string) => {
        try {
            await apiClient.post('/subscribe', { email });
            alert(`Successfully subscribed with email: ${email}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getHeader();
        getData();
        getTestimonials();
        getCategories();
    }, []);

    useEffect(() => {
        getAllProduct();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <>
            <Helmet>
                <title>Furnishop</title>
                <meta
                    name="description"
                    content="This is the main page of Furnishop. Browse our collection of high-quality furniture and find the perfect pieces for your home."
                />
                <meta
                    name="keywords"
                    content="furnishop, furniture, furniture store, furniture website"
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <Hero header={header} data={data} />
            <WeCreate />
            <NewIn categories={Categories} />
            <TheBest />
            <AllProduct products={Products} onNextPage={handleNextPage} onPrevPage={handlePrevPage} currentPage={currentPage} postsPerPage={postsPerPage} />
            <Testimonial testimonials={Testimonials} />
            <CTA onSubmit={handleEmailSubmit} />
        </>
    );
};

export default Home;
