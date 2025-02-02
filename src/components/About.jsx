import { number } from "prop-types";
import React from "react";

const About = () => {
    const aboutItems = [
        {
          label: 'Projects done',
          number: 1
        },
        {
          label: 'Years of experience',
          number: 1
        }
      ];


    return (
        <section id="about" className="section">
            <div className="container m-auto">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Valley, A current Computer Systems Technology Student at British Columbia Institute of Technology. I am passionate about both creating website and creating games.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">{
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-orange-700 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                        }

                        <img src="" alt="" className="ml-auto" width={30} height={30}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About