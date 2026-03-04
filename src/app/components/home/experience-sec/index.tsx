import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "June 2024 - Present",
            title: "UI UX & Graphic Designer (Freelancer)",
            company: "BI Tech Solution - Malaysia",
            type: "Remote",
            description: "Delivered end-to-end design solutions including social media creatives, Amazon product posters, branding materials, and web graphics. I independently handled client communication, ensured clear understanding of project requirements, and consistently delivered high-quality designs while maintaining strong professional relationships."
        },
        {
            year: "June 2023 - March 2024",
            title: "Graphic Designer",
            company: "Zentroa technologies - Dubai",
            type: "Fulltime",
            description: "Designed social media campaigns, branding materials, brochures, and logos for multiple clients. Enhanced business growth through creative graphics, video editing, and website visuals aligned with brand standards. Collaborated with marketing and development teams to deliver cohesive brand visuals and engaging content."
        },
        {
            year: "Sep 2023 - Dec 2023",
            title: "UI/UX Designer",
            company: "Senchola University - Chennai",
            type: "Internship",
            description: "Worked as a UI/UX Design Intern at Senchola University, Chennai, contributing to user research, wireframing, and prototyping for web platforms. Collaborated with the team to create intuitive and visually consistent user experiences."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.title}</h3>
                                    <h4 className="text-lg font-normal">{exp.year}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2 mt-2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-lg text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;