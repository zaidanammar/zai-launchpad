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
import { FormikErrors, FormikTouched } from "formik";
import AContainer from "../../atoms/AContainer";

type FormValues = {
  token: string;
  currency: string;
  fee: string;
  presale_rate: string;
  whitelist: string;
  minimum_buy: string;
  maximum_buy: string;
  liquidity: string;
  listing_rate: string;
};

export type FormProps = {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
  handleChange: any;
  values: FormValues;
  errors: FormikErrors<FormValues>;
  setTouched: any;
  touched: FormikTouched<FormValues>;
  dirty: boolean;
  handleSubmit?: any;
  isSubmitting?: boolean;
};

const OVerifyTokenForm = ({
  setActiveStep,
  activeStep,
  dirty,
  errors,
  touched,
  setTouched,
  handleChange,
  values,
}: FormProps) => {
  const handleNextStep = (step: number) => {
    if (dirty && isEmpty(errors.token)) setActiveStep(step);
    else {
      setTouched({ token: true });
    }
  };

  return (
    <AContainer>
      <div>
        <h1 className="mb-1.5">Token Address</h1>
        <ATextField
          handleChange={handleChange}
          value={values.token}
          type="text"
          name="token"
          placeholder="ex: PinkMoon"
        />
        {errors.token && touched.token && (
          <p className="text-red-500 text-xs font-rom mt-1">{errors.token}</p>
        )}
      </div>
      <div className="mt-4">
        <h1 className="mb-1.5">Currency</h1>
        <FormControl>
          <RadioGroup
            onChange={handleChange}
            name="currency"
            value={values.currency}
          >
            <FormControlLabel
              value="eth"
              control={<Radio />}
              label={<p className="text-sm">ETH</p>}
            />
            <FormControlLabel
              value="usdt"
              control={<Radio />}
              label={<p className="text-sm">USDT</p>}
            />
            <FormControlLabel
              value="usdc"
              control={<Radio />}
              label={<p className="text-sm">USDC</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="mt-4">
        <h1 className="mb-1.5">Fee Options</h1>
        <FormControl>
          <RadioGroup onChange={handleChange} name="fee" value={values.fee}>
            <FormControlLabel
              value="5%"
              control={<Radio />}
              label={<p className="text-sm">5%</p>}
            />
            <FormControlLabel
              value="2%"
              control={<Radio />}
              label={<p className="text-sm">2%</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex justify-center items-center mt-4">
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

export default OVerifyTokenForm;
