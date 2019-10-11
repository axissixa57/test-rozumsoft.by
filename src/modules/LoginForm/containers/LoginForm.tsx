import { withFormik } from "formik";
import { connect } from "react-redux";

import validateForm from "../../..//utils/validate";
import LoginForm from "../components/LoginForm";
import { userActions } from "../../../redux/actions";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: values => {
    let errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    const { fetchUserLogin, history }: any = props;

    const data = await fetchUserLogin(values);

    if(data.status === "success") {
      history.push("/");
    }

    setSubmitting(false);
  },
  displayName: "LoginForm"
})(LoginForm);

export default connect(
  null,
  userActions
)(LoginFormContainer);
