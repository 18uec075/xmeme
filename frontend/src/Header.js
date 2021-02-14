import React, {useState} from 'react'
import './Header.css';
import axios from 'axios';

function Header() {

    const [name, setName] = useState('');
    const [caption, setCaption] = useState('');
    const [url, setUrl] = useState('');



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('name-->',name);
        console.log('caption-->',caption);
        console.log('url-->',url);
         const base_url="http://localhost:8081/memes";
        const data={
            name: name,
            caption: caption,
            url: url
        }
        axios.post(base_url, data).then((response) =>{
            console.log('posted-->', response);
        }).catch((err) => console.log('err'));
        setName('');
        setCaption('');
        setUrl('');

        
    }

    return (
        <div className="header"> 
            <div className="heading">
                <h1>Meme Stream</h1>
            </div> 
            <div className="forms">
                <form onSubmit={handleSubmit}>
                    <label className="labels">
                        Meme Owner:
                        <input type="text" className="inputs" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)}  value={name} />
                    </label>
                        <label className="labels">
                            Caption:
                            <input type="text" className="inputs" placeholder="Be creative with the caption" onChange={(e) => setCaption(e.target.value)} value={caption} />
                        </label>

                        <label className="labels">
                            Meme URL:
                            <div className="submitContainer">
                                <input type="text" className="inputs" placeholder="Enter URL of your meme here" onChange={(e) => setUrl(e.target.value)} name="lname" value={url} />
                                <input type="submit" className="submit_button" value="Submit" />
                            </div>
                        </label>
                </form>
            </div>
        </div>
    )
}

export default Header
