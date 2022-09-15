import React from 'react';
import "./Project.css"
import img1 from "../../Components/image/blood-buddies-donation.png";

const ProjectCard = () => {
    return (
        <div>
            <div className="card max-w-sm bg-base-100 shadow-2xl">
                <div >
                    <figure className="box-tasvir justify-center rounded-2xl">
                        <img className="image rounded-2xl px-6" src={img1} alt="project" />
                    </figure>
                    <div className="card-body items-start">
                        <p>Manufacturing Web</p>
                        <p>Stock Control And Product Management</p>
                        <div className='w-full flex justify-between pt-2'>
                            <div>
                                <a href="#" className='btn btn-outline btn-sm hover:bg-green-600'>Detail</a>
                            </div>
                            <div>
                                <a href="#" className='btn btn-outline btn-sm hover:bg-red-600'>Live</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;