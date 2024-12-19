"use client";

import type { StaticImageData } from "next/image";
import React, { useState } from 'react';
import Select from 'react-select';
import Image from "next/image";
import { useTheme } from "next-themes";

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

    const { theme } = useTheme();

    //const [selectedOption, setSelectedOption] = useState<OptionsProps>(options[0]);
    const [selectedOption, setSelectedOption] = useState<OptionsProps>(options[0]);

    const filteredOptions = options.filter(option => option.value !== selectedOption?.value);

    const handleChange = (option: OptionsProps | null): void => {
        if (option) {
            setSelectedOption(option);
        }
    };

    const customOption = (props: any): JSX.Element => {
        const { innerRef, innerProps, data } = props;
        return (
            <div ref={innerRef} {...innerProps} style={{ width: "100%", padding: 10, background: theme === "dark" ? "#000" : "#f5f5f5" }}>
                <Image src={data.flag} alt={`${data.label} flag`} style={{ width: 30 }} />
            </div>
        );
    };

    const customSingleValue = (props: any): JSX.Element => {
        const { data } = props;
        return (
            <div className="-mt-6">
                <Image src={data.flag} alt={`${data.label} flag`} className="w-[25px]" />
            </div>
        );
    }
    const multiValueStyles = "bg-transparent";
    const menuStyles = "bg-transparent";

    return (
        <div className="mr-8">
        
            <Select
                unstyled
                styles={{
                    control: (base) => ({
                        ...base,
                        border: "none",
                        background: theme === "dark"  ? "#000" : "#f5f5f5",
                        borderRaduis: "5px",
                        marginBottom: "-4px"
                    }),
                }}
                options={filteredOptions}
                onChange={handleChange}
                components={{ Option: customOption, SingleValue: customSingleValue }}
                getOptionValue={(option) => option.value}
                value={selectedOption}
                classNamePrefix="select"
                classNames={{
                    multiValue: () => multiValueStyles,
                    menu: () => menuStyles,
                }}
            />

        </div>
    );
};
export default FlagsComponent;
