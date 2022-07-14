import { useFormik } from "formik";
import * as Yup from "yup";

const UseFormLaunchpad = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setTouched,
    dirty,
  } = useFormik({
    initialValues: {
      token: "",
      currency: "eth",
      fee: "5%",
    },
    validationSchema: Yup.object({
      token: Yup.string().required("Token address is required"),
    }),
    onSubmit: (values) => {
      // mutation.mutate(values);
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
  };
};

export default UseFormLaunchpad;
