import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const UseFormLaunchpad = () => {
  const navigate = useNavigate();
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setTouched,
    dirty,
    isSubmitting,
  } = useFormik({
    initialValues: {
      token: "",
      currency: "eth",
      fee: "5%",
      presale_rate: "",
      whitelist: "disabled",
      minimum_buy: "",
      maximum_buy: "",
      liquidity: "",
      listing_rate: "",
    },
    validationSchema: Yup.object({
      token: Yup.string().required("Token address is required"),
      presale_rate: Yup.string().required("Presale rate is required"),
      minimum_buy: Yup.string()
        // .min(1, "Minimum of buy is 1")
        .required("Minimun buy is required")
        .matches(/[0-9]/, "Please input a valid number"),
      maximum_buy: Yup.string()
        // .max(1, "Maximum of buy is 100")
        .required("Maximum buy is required")
        .matches(/[0-9]/, "Please input a valid number"),
      liquidity: Yup.string()
        .required("liquidity is required")
        .matches(/[0-9]/, "Please input a valid number"),
      listing_rate: Yup.string()
        .required("Listing rate is required")
        .matches(/[0-9]/, "Please input a valid number"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    },
  });
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setTouched,
    dirty,
    isSubmitting,
  };
};

export default UseFormLaunchpad;
