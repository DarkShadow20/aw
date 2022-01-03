import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

const AddContact = () => {
    const contacts = useSelector((state)=>state)
    const dispatch=useDispatch();
    const history=useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkContactEmailExists = contacts.filter((contact) =>
          contact.email === email ? contact : null
        );
        const checkContactPhoneExists = contacts.filter((contact) =>
          contact.phone === parseInt(phone) ? contact : null
        );
        
        if (!email || !name || !phone) {
          return toast.warning("Please fill in all fields!!");
        }
        if (checkContactEmailExists.length > 0) {
          return toast.error("This email already exists!!");
        }
        if (checkContactPhoneExists.length > 0) {
          return toast.error("This phone number already exists!!");
        }
    
        const data = {
          id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
          email,
          name,
          phone,
        };
        dispatch({type:"ADD_CONTACT",payload:data})
        // addContact(data);
        toast.success("Contact added successfully!!");
        history.push("/");
      };
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>
                    Add Contact
                </h1>
                <div className='col-md-6 shadow mx-auto'>
                <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            className="btn btn-block btn-dark"
                            type="submit"
                            value="Add Student"
                        />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
