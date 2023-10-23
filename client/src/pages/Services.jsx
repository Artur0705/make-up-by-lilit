import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../features/service/serviceSlice";
import Layout from "../components/Layout";
import { Title } from "../components/Intro";
import { Link } from "react-router-dom";

const Services = () => {
  const dispatch = useDispatch();
  const { services, isLoading, isError } = useSelector(
    (state) => state.service
  );

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Title title="Services" />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading services.</p>}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex flex-row p-4 border-b border-white"
            >
              <div className="w-1/3">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="object-contain rounded-l h-[400px] w-full md:mt-0 mt-32"
                />
              </div>
              <div className="w-2/3 p-4 ml-4 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-xl font-bold mt-2 text-white text-center">
                    {service.name}
                  </h2>
                  <p className="text-white mt-8">{service.description}</p>
                  <div className="mt-8 flex justify-between">
                    <span className="text-lg font-bold text-white">
                      Price: ${service.price}
                    </span>
                    <span className="text-gray-500">
                      Duration: {service.duration} mins
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-12">
                    {service.disclaimer}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link to="/portfolio">
                    <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-full">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
