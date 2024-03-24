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

                <label htmlFor="fname">Favorite Game:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>

                <label htmlFor="lname">Second Favorite Game:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>

                <p style={{lineHeight: '0px'}}>Gaming Devices</p>

                <input type="checkbox" id="checkboxPC" name="checkboxPC" value="checkboxPC"/>
                <label htmlFor="checkboxPC">PC</label><br/>

                <input type="checkbox" id="checkboxConsole" name="checkboxConsole" value="checkboxConsole"/>
                <label htmlFor="checkboxConsole">Console</label><br/>

                <p style={{lineHeight: '0px'}}>How many hours a week do you play video games?</p>

                <input type="radio" id="option1" name="options" value="option1"/>
                <label htmlFor="option1">2 hours</label><br/>

                <input type="radio" id="option2" name="options" value="option2"/>
                <label htmlFor="option2">2-10 hours</label><br/>

                <input type="radio" id="option3" name="options" value="option3"/>
                <label htmlFor="option3"> 10+ hours </label><br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form