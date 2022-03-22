import {SubmitButton} from "./component/button/submitButton";
import './App.css';
import {useState} from "react";

function App() {
    const [load, setLoad] = useState(false);

    const submit = () => {
        setLoad(true);
        setTimeout(() => {setLoad(false)}, 1000); //set timeout to see the animation
    }
    return (
        <div>
            <div className={'placeholder'}>

            </div>
            <form className={'form'}>
                <div className="form-control">
                    <div>Name</div>
                    <input type="text"
                           placeholder={'FirstName LastName'}/>
                </div>

                <div className="form-control">
                    <div>Zip</div>
                    <input type="text"
                           placeholder={'Zip'}/>
                </div>

                <div className="form-control">
                    <div>Result</div>
                    <div className={'placeholder'}></div>
                </div>

                <div className="form-control">
                    <div/>
                    <div className={'save'}>
                        {<SubmitButton type={'button'}
                                       words={'Search'}
                                       event={submit}
                                       state={load}/>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default App;
