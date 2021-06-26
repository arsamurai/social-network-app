import s from "./FormsControls.module.css";
import { Field, reduxForm } from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return  (
        <div className={s.formControl + " " + (hasError && s.error)}>
            {children}
            {hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restprops} = props;
    return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, children, ...restprops} = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
}

export const createField = (className1, className2, name, component, placeholder, validators, props = {}, text = "") => {
    return <div className={className1}>
        <Field
          className={className2}
          name={name}
          component={component}
          placeholder={placeholder}
          validate={validators} {...props} /> 
          {text}
        </div>
}