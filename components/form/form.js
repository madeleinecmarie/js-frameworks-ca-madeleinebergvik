import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      option: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "Firstname needs to be 3 characters or more")
        .trim()
        .required("Required field"),
      lastName: Yup.string()
        .min(2, "Lastname needs to be 4 characters or more")
        .trim()
        .required("Required field"),
      email: Yup.string()
        .email("Invalid email")
        .trim()
        .required("Required field"),
      option: Yup.string().required("Required field"),
      message: Yup.string()
        .min(2, "Message needs to be 10 characters or more")
        .max(200, "Message are way too long")
        .trim()
        .required("Required field"),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          placeholder="Your firstname here"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.firstName && errors.firstName}</p>

        <input
          id="lastName"
          name="lastName"
          placeholder="Your lastname here"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.lastName && errors.lastName}</p>

        <input
          id="email"
          name="email"
          placeholder="email@email.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.email && errors.email}</p>

        <select
          id="option"
          name="option"
          value={values.musicTaste}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="default">Options</option>
          <option value="classical">Option 1</option>
          <option value="classical">Option 2</option>
        </select>
        <p style={{ color: "red" }}>{touched.option && errors.option}</p>

        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p style={{ color: "red" }}>{touched.message && errors.message}</p>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
