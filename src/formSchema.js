import * as Yup from "yup"

const userFormSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("Please, provide a passowrd")
})


const addRecipeFormSchema = Yup.object().shape({
    recipe_title: Yup.string().required("Please, provide a name for the recipe"),
    category: Yup.string().required("Please, select a category for the recipe"),
    source: Yup.string().required("Please, enter the source of the recipe"),
    description: Yup.string(),
    img: Yup.string()

})

export {userFormSchema, addRecipeFormSchema}