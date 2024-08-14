import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "../@/components/ui/select"; // Adjust the import path according to your file structure

export function SelectDemo({ colorOptions, setSelectedColor }) {
  const handleSelectChange = (value) => {
    setSelectedColor(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Colors</SelectLabel>
          {colorOptions.map((color) => (
            <SelectItem key={color} value={color}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    backgroundColor: color,
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                ></div>
                {color}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}