import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AButton from "../../atoms/AButton";
import ATextField from "../../atoms/ATextField";
import { isEmpty } from "lodash";
import { FormProps } from "./OVerifyTokenForm";
import AContainer from "../../atoms/AContainer";

const ODefiLaunchpadForm = ({
  setActiveStep,
  activeStep,
  dirty,
  errors,
  touched,
  setTouched,
  handleChange,
  values,
}: FormProps) => {
  const handleBackStep = (step: number) => {
    setActiveStep(step);
  };

  const handleNextStep = (step: number) => {
    if (
      dirty &&
      isEmpty(errors.presale_rate) &&
      isEmpty(errors.minimum_buy) &&
      isEmpty(errors.maximum_buy) &&
      isEmpty(errors.liquidity) &&
      isEmpty(errors.listing_rate)
    )
      setActiveStep(step);
    else {
      setTouched({
        presale_rate: true,
        minimum_buy: true,
        maximum_buy: true,
        liquidity: true,
        listing_rate: true,
      });
    }
  };

  return (
    <AContainer>
      <div>
        <h1 className="mb-1.5">Presale Rate</h1>
        <ATextField
          handleChange={handleChange}
          value={values.presale_rate}
          type="text"
          name="presale_rate"
        />
        {errors.presale_rate && touched.presale_rate && (
          <p className="text-red-500 text-xs font-rom mt-1">
            {errors.presale_rate}
          </p>
        )}
      </div>

      <div className="mt-4">
        <h1 className="mb-1.5">Whitelist</h1>
        <FormControl>
          <RadioGroup
            row
            onChange={handleChange}
            name="whitelist"
            value={values.whitelist}
          >
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label={<p className="text-sm">Disabled</p>}
            />
            <FormControlLabel
              value="enabled"
              control={<Radio />}
              label={<p className="text-sm">Enabled</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Minimum Buy</h1>
          <ATextField
            handleChange={handleChange}
            value={values.minimum_buy}
            type="text"
            name="minimum_buy"
          />
          {errors.minimum_buy && touched.minimum_buy && (
            <p className="text-red-500 text-xs font-rom mt-1">
              {errors.minimum_buy}
            </p>
          )}
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Maximum Buy</h1>
          <ATextField
            handleChange={handleChange}
            value={values.maximum_buy}
            type="text"
            name="maximum_buy"
          />
          {errors.maximum_buy && touched.maximum_buy && (
            <p className="text-red-500 text-xs font-rom mt-1">
              {errors.maximum_buy}
            </p>
          )}
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Liquidity (%)</h1>
          <ATextField
            handleChange={handleChange}
            value={values.liquidity}
            type="text"
            name="liquidity"
          />
          {errors.liquidity && touched.liquidity && (
            <p className="text-red-500 text-xs font-rom mt-1">
              {errors.liquidity}
            </p>
          )}
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Listing Rate</h1>
          <ATextField
            handleChange={handleChange}
            value={values.listing_rate}
            type="text"
            name="listing_rate"
          />
          {errors.listing_rate && touched.listing_rate && (
            <p className="text-red-500 text-xs font-rom mt-1">
              {errors.listing_rate}
            </p>
          )}
        </div>
      </aside>

      <div className="flex gap-3 justify-center items-center mt-6">
        <div className="w-fit">
          <AButton
            onClick={() => handleBackStep(activeStep - 1)}
            title="Back"
          />
        </div>
        <div className="w-fit">
          <AButton
            onClick={() => handleNextStep(activeStep + 1)}
            title="Next"
          />
        </div>
      </div>
    </AContainer>
  );
};

export default ODefiLaunchpadForm;
