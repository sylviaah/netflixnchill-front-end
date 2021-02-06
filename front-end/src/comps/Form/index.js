import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import AddImage from '../../comps/AddImage';
import Inputs from '../../comps/Inputs';
import RadioInput from '../../comps/RadioInput';
import Buttons from '../../comps/Buttons';

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const ButtonContainer = styled.div`
position:fixed;
bottom:40px;
`;

const Form = ({onFormComplete}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [checked, setChecked] = useState(0);

    const Handle1 = () =>{
        setChecked(1)
    }
    const Handle2 = () =>{
        setChecked(2)
    }
    const Handle3 = () =>{
        setChecked(3)
    }

return <Content>
<Inputs
title1="Title"
title2="Description"
TheTitle={setTitle}
TheDescription={setDescription}
/>
<AddImage TheLink={setLink}></AddImage>
<RadioInput
check1={Handle1}
check2={Handle2}
check3={Handle3}
/>
<ButtonContainer>
<Buttons text="Add to List" onClick={()=>{
    onFormComplete(title, description, link, checked)
}}></Buttons>
</ButtonContainer>
</Content>
}

export default Form;