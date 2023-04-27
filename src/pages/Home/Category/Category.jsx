import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../Newscard/Newscard';

const Category = () => {
    const {id} = useParams()
    const categoriesNews = useLoaderData()
    return (
        <div>
          {id && <h2>This is category news : {categoriesNews.length}</h2>}

            {
                categoriesNews.map(news => <Newscard
                key={news._id}
                news={news}
                
                >


                </Newscard>)
            }

        </div>
    );
};

export default Category;