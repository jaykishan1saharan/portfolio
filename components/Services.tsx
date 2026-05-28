"use client";

import { useState } from "react";
import ServiceModal from "./ServiceModal";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {

    const [selectedService, setSelectedService] = useState<any>(null);

    return (

        <section
            id="services"
            className="
max-w-7xl
mx-auto
py-20
sm:py-24
lg:py-32
px-4
sm:px-6
lg:px-8
"
        >

            <div className="text-center mb-20">

                <p className="text-cyan-400 font-semibold">
                    WHAT I OFFER
                </p>

                <h2
                    className="
text-4xl
sm:text-5xl
lg:text-6xl
font-bold
text-white
mt-4
leading-tight
"
                >
                    My Services
                </h2>

                <p
                    className="
text-gray-300
mt-6
max-w-2xl
mx-auto
text-sm
sm:text-base
leading-relaxed
px-2
"
                >
                    Helping businesses and individuals
                    build powerful digital experiences.
                </p>

            </div>



            <div
                className="
grid
grid-cols-1
md:grid-cols-2
gap-6
sm:gap-8
"
            >

                {services.map(
                    (service, index) => (

                        <ServiceCard
                            key={index}
                            service={service}
                            onClick={() =>
                                setSelectedService(service)
                            }
                        />

                    )
                )}

            </div>

            {
                selectedService && (

                    <ServiceModal
                        service={selectedService}
                        onClose={() =>
                            setSelectedService(null)
                        }
                    />

                )
            }


        </section>

    );
}