"use client";

import type { StaticImageData } from "next/image";
import React, { useState } from 'react';
import Select from 'react-select';
import Image from "next/image";

import frenchFlag from "/public/france_texture.png";
import unitedKingdomFlag from "/public/united_kingdom_texture.png";
import portugalFlag from "/public/portugal_texture.png";
import deutschFlag from "/public/germany_texture.png";
import italyFlag from "/public/italy_texture.png";

type OptionsProps = {
    value: string;
    label: string;
    flag: StaticImageData;
};

const options: OptionsProps[] = [
    { value: 'français', label: 'Français', flag: frenchFlag },
    { value: 'portugal', label: 'Portugal', flag: portugalFlag },
    { value: 'english', label: 'English', flag: unitedKingdomFlag },
    { value: 'deutsch', label: 'Deutsch', flag: deutschFlag },
    { value: 'italiano', label: 'Italiano', flag: italyFlag },
];

const FlagsComponent = (): JSX.Element => {

    const [selectedOption, setSelectedOption] = useState<OptionsProps>(options[0]);

      const handleChange = (option: OptionsProps | null): void => {
        if (option) {
            setSelectedOption(option);
        }
    };

    const customOption = (props: any): JSX.Element => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} className="custom-option">
                <Image src={data.flag} alt={`${data.label} flag`} style={{ width: 20, marginRight: 10 }} />
            </div>
        );
    };

    const customSingleValue = (props: any): JSX.Element => {
        const { data } = props;
        return (
            <div className="bg-slate-800 -mt-8">
                <Image src={data.flag} alt={`${data.label} flag`} style={{ width: 20, paddingTop: -40 }} />
            </div>
        );
    }

    return (
        <div style={{background: "#000", marginRight: "20px"}}>
        
            <Select
                options={options}
                onChange={handleChange}
                components={{ Option: customOption, SingleValue: customSingleValue }}
                getOptionValue={(option) => option.value}
                value={selectedOption}
                className="border"
                classNamePrefix="select"
            />

        </div>
    );
};
export default FlagsComponent;
