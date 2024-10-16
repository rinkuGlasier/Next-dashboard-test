import { isValidPhoneNumber } from "react-phone-number-input";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter name"),
  phoneNumber: Yup.string()
    .trim()
    .required("Please enter mobile number")
    .test("is-valid-phone-number", "Invalid phone number", (value) =>
      isValidPhoneNumber(value)
    ),
  rating: Yup.string().required("Please Enter Rating"),
  description: Yup.string().trim().required("Please Enter Description"),
});

export { FeedbackSchema };
