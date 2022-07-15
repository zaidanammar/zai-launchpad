import React from "react";
import AButton from "../../atoms/AButton";
import AContainer from "../../atoms/AContainer";
import ATextField from "../../atoms/ATextField";
import { FormProps } from "./OVerifyTokenForm";

const OResultForm = ({ handleSubmit, values, isSubmitting }: FormProps) => {
   
  return (
    <AContainer>
      <aside className="sm:flex gap-5 mt-4">
        <div className="w-full">
          <h1 className="mb-1.5">Token Name</h1>
          <ATextField disable value={values.token} type="text" name="token" />
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Fee</h1>
          <ATextField disable value={values.fee} type="text" name="fee" />
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Currency</h1>
          <ATextField
            disable
            value={values.currency}
            type="text"
            name="currency"
          />
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Minimum Buy</h1>
          <ATextField
            disable
            value={values.minimum_buy}
            type="text"
            name="minimum_buy"
          />
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Maximum Buy</h1>
          <ATextField
            disable
            value={values.maximum_buy}
            type="text"
            name="maximum_buy"
          />
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">Liquidity</h1>
          <ATextField
            disable
            value={values.liquidity}
            type="text"
            name="liquidity"
          />
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Listing Rate</h1>
          <ATextField
            disable
            value={values.listing_rate}
            type="text"
            name="listing_rate"
          />
        </div>
      </aside>

      <aside className="sm:flex gap-5 mt-4">
        <div className="sm:w-1/2 w-full">
          <h1 className="mb-1.5">whitelist</h1>
          <ATextField
            disable
            value={values.whitelist}
            type="text"
            name="whitelist"
          />
        </div>
        <div className="sm:w-1/2 w-full sm:mt-0 mt-4">
          <h1 className="mb-1.5">Presale Rate</h1>
          <ATextField
            disable
            value={values.presale_rate}
            type="text"
            name="presale_rate"
          />
        </div>
      </aside>

      <div className="flex justify-center items-center mt-7">
        <div className="w-fit">
          <AButton
            isLoading={isSubmitting}
            onClick={handleSubmit}
            title="Submit"
          />
        </div>
      </div>
    </AContainer>
  );
};

export default OResultForm;
