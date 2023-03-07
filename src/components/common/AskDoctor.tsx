import React, {useState, useEffect} from 'react';
import { Card, Button ,Textarea, Carousel, Tabs, Avatar, Rating} from 'flowbite-react'
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs/index'
import * as CONSTANTS from '../../constants';

type resultProps = {
    drName: string;
    img: string;
    rating: number;
    expertIn: string;
};

type DoctorCarouselProps = {
    doctorDetails : any; 
}

function DoctorCarousel(docProp: any) {
  

    return(
        <div className="h-32 ">
        <Carousel
            leftControl={<BsFillArrowLeftCircleFill />}
            rightControl={<BsFillArrowRightCircleFill />}
            indicators={false} >
                {
                    Object.values(docProp).map((res: any) => {
                        return (
                           
                                Object.values(res).map((data: any) => {
                                    return (
                                        <Card className='px-10 '>
                                                <div className='flex items-center'>
                                                    <div className='flex items-center justify-center flex-col'>
                                                    <div className="flex flex-wrap gap-2">
                                                            <Avatar
                                                                img={data.img}
                                                                rounded={true}
                                                            />
                                                        </div>
                                                        <Rating className='mt-2'>
                                                        {(() => {
                                                            const arr: any = [];
                                                            for (let i:number = 1; i <= 5; i++) {
                                                                if(i <= data.rating){
                                                                    arr.push(<Rating.Star />)
                                                                }
                                                                else {
                                                                    arr.push(<Rating.Star filled={false} />)
                                                                }
                                                            }
                                                            return(
                                                                <>
                                                                    {arr}
                                                                </>
                                                            )   
                                                        })()}
                                                        </Rating>
                                                    </div>
                                                    <div className=' pl-5 flex flex-col'>
                                                        <span className='text-l	'>{data.drName}</span>
                                                        <span className='text-slate-400	text-sm	'>{data.expertIn}</span>
                                                    </div>
                                                </div>
                                            </Card>
                                    )
                                })
                           
                        )
                        
                    })
                }
            
        </Carousel>
    </div>    
    )
}
export default function AskDoctor({doctorDetails} : DoctorCarouselProps){

    const [result, setResult] = useState<resultProps[]>([]);

    useEffect(() => {
        // const api = async () => {
        //   const data = await fetch("https://api.npoint.io/aec0bf1f1d18c0d32311");
        //   const jsonData = await data.json();
        //   setResult(jsonData);
        // };
    
        // api();
        setResult(doctorDetails)
    }, []);
    
   
    return (
        <>

        <div className="container mx-auto">
            <div className='flex justify-center flex-col'>
                <span className='text-center text-2xl mt-10'>Your first Query is FREE !</span>
                <div className='grid grid-cols-1 mt-8  lg:grid-cols-2'>
                    <Card  className='p-6'>
                        <h5 className="text-2xl my-5 font-bold tracking-tight text-gray-900 dark:text-white">
                            Ask a 'Liver Specialist' Online
                        </h5>
                        <p className=" my-5 font-semibold text-gray-700 dark:text-gray-400">
                            ENTER YOUR HEALTH QUERY
                        </p>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                        <Button className='mt-3'>
                            Submit
                        </Button>
                    </Card>
                    <div className='flex justify-center flex-col mt-10 lg:mt-0'>
                        <img className='w-100 object-contain h-64 w-100' src="https://assets.icliniq.com/v2/assets/images/message.svg" />
                        <span className='text-xl text-center'>
                           <span className='font-semibold text-xl'>2233</span> Doctors Online
                        </span>
                        <div className='mt-10 lg:m-14 mb-1'>  
                            <DoctorCarousel docProp={doctorDetails} />      
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center flex-col'>
                <span className='text-center text-2xl mt-10 tracking-wide	'>iCliniq IS TOP RATED BY</span>
                <div className='flex w-100 items-center justify-center mt-6'>
                    <img className='h-12 w-100 mr-2' src="https://assets.icliniq.com/v2/img/Parade.svg" alt=""  />
                    <img className='h-6 w-100 ml-2'  src="https://assets.icliniq.com/v2/assets/images/insider-1-color.svg" alt=""  />
                </div>
                <div className="flex justify-center mt-8">
                    <Card  className='w-full lg:w-8/12 p-3 lg:p-6'>
                        <p className='mt-3 text-center'>Ask your Liver queries to our experienced medical gastroenterologists and receive instant medical advice and second opinion.</p>
                        <p className='mt-3 text-center'>Our medical panel consists of over 50+ highly skilled medical gastroenterologists who specialized in Liver treatment.</p>
                        <hr className='my-8'/>
                        
                        <Tabs.Group
                            aria-label="Pills"
                            style="pills"
                            >
                            <Tabs.Item
                                active={true}
                                title="User Review"
                            >
                                <Card >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                    </p>
                                </Card>
                            </Tabs.Item>
                            <Tabs.Item title="About">
                                <Card >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        About Hair loss
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        Hair loss can be due to hormonal changes, heredity, or due to other underlying health conditions, and can affect the hair on the scalp or the entire body. Signs of hair loss are thinning of hair on the top of the head, bald spots, and excessive hair fall. 
                                        
                                    </p>
                                </Card>
                            </Tabs.Item>
                            <Tabs.Item title="How it works">
                                <Card >
                                <ul className='list-disc leading-10 m-5'>
                                    <li>Your health issue will be shared across with our hair loss specialist panel.</li>
                                    <li>A hair loss specialist will pick your query and send medical advice to your health issue subsequently.</li>
                                    <li>You can then follow up with the same hair loss specialist.</li>
                                </ul>  

                                </Card>
                            </Tabs.Item>
                            </Tabs.Group>

                            
                    </Card>
                    
                </div>
            </div>
        </div>
            
        </>
    )
}