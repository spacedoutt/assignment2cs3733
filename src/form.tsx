function Form() {
    return(
        <>
            <form action="#" method="post">
                <label htmlFor="textInput1">Name:</label>
                <input type="text" id="textInput1" name="textInput1"/>
                <br/>
                <label htmlFor="textInput2">Email:</label>
                <input type="text" id="textInput2" name="textInput2"/>
                <br/>

                <label htmlFor="checkBox1">Shows:</label>
                <input type="checkbox" id="checkBox1" name="checkBox1"/>
                <br/>
                <label htmlFor="checkBox2">Video Games:</label>
                <input type="checkbox" id="checkBox2" name="checkBox2"/>
                <br/>

                <label htmlFor="radioButton1">Hello:</label>
                <input type="radio" id="radioButton1" name="radioGroup" value="option1"/>
                <br/>
                <label htmlFor="radioButton2">Goodbye:</label>
                <input type="radio" id="radioButton2" name="radioGroup" value="option2"/>
                <br/>
                <label htmlFor="radioButton3">Who Are You?:</label>
                <input type="radio" id="radioButton3" name="radioGroup" value="option3"/>
                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form