import styles from "../../styles/projects/projectdesc.module.css"
const projectdesc = () => {
    return (<div className={`${styles.DownloadProject}`}>
        <div className={`${styles.problem_statement}`}>
            <h1>Problem Title </h1>
            <div className={`${styles.problem_description}`}>
                While visiting any website , if you want to change the background Colour of a website or if
                you visit any website, you see the dark mode button to change the background Colour ,so
                how can you do this type of thing?
            </div>
        </div>
        <div className={`${styles.Ideas}`}>
            <h1> How to Start</h1>
            <ul>
                <li><div className={`${styles.step_num}`}>1</div><div>Download the Initial Code from given repo</div></li>
                <li><div className={`${styles.step_num}`}>2</div><div>Set the project with version control before starting</div></li>
                <li><div className={`${styles.step_num}`}>3</div><div>Read the Readme.md file to have an insight of project</div></li>
                <li><div className={`${styles.step_num}`}>4</div><div>Prefetch the fonts and colors used in Project</div></li>
                <li><div className={`${styles.step_num}`}>5</div><div>File architecture can be according to choice of candidate</div></li>
                <li><div className={`${styles.step_num}`}>6</div><div>Happy coding !!</div></li>
            </ul>
        </div>
        <div className={`${styles.Skills_Improved}`}>
            <h1>Idea/Solution</h1>
            <div className={`${styles.topics}`}>
                Background colour changer is a project which enables you to change the background colour
                of web pages with ease. There is a button on a web page when a user clicks on that button,
                then the resultant colour will appear in the background of the web page.
            </div>
            <div className={`${styles.brief}`}>
            In this app, the background colour of the canvas changes when the user clicks on a button.
            </div>
        </div>
        <div className={`${styles.Resources}`}>
            <div className={`${styles.Tech_Stacks}`}>
                <h1>Tech-Stack</h1>
                <hr />
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
                <div>
                    Basic knowledge of HTML, CSS, and JavaScript needed. The HTML file adds structure,
                    followed by styling using CSS and JavaScript adds functionality to it.
                </div>
                <h1>File Structure</h1>
                <hr />
                <ul>
                    <li>Index.html</li>
                    <li>Style.css</li>
                    <li>Script.js</li>
                </ul>
            </div>
            <div className={`${styles.Prototyping_sites}`}>
                <h1>HTML Files :</h1>
                <hr />
                <div>
                    HTML layout is created using the div tag, id attribute and anchor tags for function calling.
                    With the help of an html file we will create a button.
                </div>
                <h1>CSS Files :</h1>
                <hr />
                <div>
                    By using CSS properties, we will decorate the web page and make it look attractive. colour,
                    width, height and position property are given as per the requirement in the project
                </div>
                <h1>Resources</h1>
                <hr />
                <div>
                    <a href="google.com"> Google.com</a>
                </div>
                <div>
                    <a href="google.com"> Google.com</a>
                </div>
                <div>
                    <a href="google.com"> Google.com</a>
                </div>
            </div>
        </div>
        <div className={`${styles.submit_project}`}>
            <h1>Submit your repo at</h1>
            <a href="mailto:contact.us@codeate.in"> Your Repo Link </a>
        </div>
    </div>
    )
}

export default projectdesc;