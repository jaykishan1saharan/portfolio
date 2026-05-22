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
py-32
px-8
"
        >

            <div className="text-center mb-20">

                <p className="text-cyan-400 font-semibold">
                    WHAT I OFFER
                </p>

                <h2
                    className="
text-6xl
font-bold
text-white
mt-4
"
                >
                    My Services
                </h2>

                <p
                    className="
text-white
mt-6
max-w-2xl
mx-auto
"
                >
                    Helping businesses and individuals
                    build powerful digital experiences.
                </p>

            </div>



            <div
                className="
grid
md:grid-cols-2
gap-8
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