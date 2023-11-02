import { Formik } from "formik"
import { Searchbar, SearchForm,  Input, Btn } from "./SearchBar.styled";
import { AiOutlineSearch } from "react-icons/ai";

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
            <Btn type="submit"><AiOutlineSearch size='25px'/></Btn>
            <Input id="descriptor" name="descriptor" autoComplete="off" autoFocus placeholder="Search images and photos" />
        </SearchForm>
    </Searchbar>
    </Formik>
    
   
}


