import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
              {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {

        //this === component
        console.log(values);
    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter a categories";
    }
    if (!values.content) {
        errors.content = "Enter a content";
    }

    //if errors = null submit form
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);