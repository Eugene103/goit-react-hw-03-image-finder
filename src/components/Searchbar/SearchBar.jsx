import { Formik } from "formik"
import { Searchbar, SearchForm,  Input, Btn, BtnLabel } from "./SearchBar.styled";

export const SearchBar = ({onChange}) => {
    return  <Formik
        initialValues={{
        descriptor: ''
        }}
        onSubmit={(values) => {
            onChange(values)
        }}
    ><Searchbar>
        <SearchForm>
            <Btn type="submit"><BtnLabel>Search</BtnLabel></Btn>
            <Input id="descriptor" name="descriptor" autoComplete="off" autoFocus placeholder="Search images and photos" />
        </SearchForm>
    </Searchbar>
    </Formik>
    
   
}


