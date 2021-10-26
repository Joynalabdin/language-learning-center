import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
           <div className="about container">
                <div className="about-img">
                    <img src="https://cdn.newsapi.com.au/image/v1/a71ffa2a1a03b16f8a38a36282c016e3" alt="" />
                </div>
                <div>
                    <h5 className="text-primary">About Us</h5>
                    <h1>Know About Best Online Learning Platform With Verbalize</h1>
                    <p className="fw-normal fs-5 mt-4">Would you like to ‘parlez-vouz Francais’? Or perhaps you’d like ‘sprechen Deutsch’? Whether it’s French, German, Spanish, Italian or Japanese you’d like to learn, our free language courses have you covered. At Alison, we believe in education for all so all our language tutorials are completely free - all you need to do is register and begin learning. As more and more people work remotely.</p>
                </div>
            </div>

            {/* teachers */}
            <h2 className="text-center mt-5 mb-4">Out Teachers</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://thumbs.dreamstime.com/b/portrait-young-smiling-professional-man-arms-crossed-104861751.jpg" class="card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">John Smith</h5>
                        <p class ="card-text">The word ‘education’ comes from the root e from ex, out, and duco, I lead. It means a leading out. To me education is a leading out of what is already there in the pupil’s soul</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://thumbs.dreamstime.com/b/smiling-indian-businessman-over-grey-background-business-people-corporate-concept-160100873.jpg" class="card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Maxwel</h5>
                        <p class ="card-text">A great teacher can teach Calculus with a paper clip and literature in an empty field. Technology is just another tool, not a destination.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://cdn.luxe.digital/media/2019/09/12090502/business-professional-dress-code-men-style-luxe-digital.jpg" class="card-img-top card-img" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Robin Son</h5>
                        <p class ="card-text">Proper teaching is recognized with ease. You can know it without fail because it awakens within you that sensation which tells you this is something you have always known.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;