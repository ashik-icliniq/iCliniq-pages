import React from 'react'
import { Card, Button ,Textarea, Carousel, Tabs, Avatar, Rating} from 'flowbite-react'
import * as CONSTANTS from '../../constants';


type resultProps = {
  drName: string;
  img: string;
  rating: number;
  expertIn: string;
};

function DoctorCarousel() {
  return(
      <div className="h-32 ">
          <Carousel
              leftControl={<i className="fa fa-arrow-left"></i>}
              rightControl={<i className="fa fa-arrow-right"></i>}
              indicators={false} >
                  {
                      CONSTANTS.ONLINE_DOCTORS['Doctors'].map((res: resultProps) => {
                          
                          return (
                              <Card className='px-10 '>
                              <div className='flex items-center'>
                                  <div className='flex items-center justify-center flex-col'>
                                  <div className="flex flex-wrap gap-2">
                                          <Avatar
                                              img={res.img}
                                              rounded={true}
                                          />
                                      </div>
                                      <Rating className='mt-2'>
                                      {(() => {
                                          const arr: any = [];
                                          for (let i:number = 1; i <= 5; i++) {
                                              if(i <= res.rating){
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
                                      <span className='text-l	'>{res.drName}</span>
                                      <span className='text-slate-400	text-sm	'>{res.expertIn}</span>
                                  </div>
                              </div>
                          </Card>
                          
                          )
                          
                      })
                  }
              
          </Carousel>
      </div>    
  )
}

function DoctorsOnline() {
  return (
    <div className='flex justify-center flex-col mt-10 lg:mt-0'>
      <img className='w-100 object-contain h-64 w-100' src="https://assets.icliniq.com/v2/assets/images/message.svg" />
      <span className='text-xl text-center'>
        <span className='font-semibold text-xl'>2233</span> Doctors Online
      </span>
      <div className='mt-10 lg:m-14 mb-1'>
        <DoctorCarousel />
      </div>

    </div>
  )
}

export default DoctorsOnline