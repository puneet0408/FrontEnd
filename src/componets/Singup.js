import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Singup() {


    return (
        <div className='signup'>
            <form style={{ width: "100%" }}>


                <div class="">
                    <label for="validationServerUsername" class="form-label"></label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                        <input placeholder='Username' type="text" class="form-control" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div >
                    <label for="validationServerUsername" class="form-label"></label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                        <input placeholder='Password' type="pasword" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                           
                        </div>
                    </div>
                </div>
                <div >
                    <label for="validationServerUsername" class="form-label"></label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                        <input placeholder='Confirm Password' type="pasword" class="form-control" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                           
                           </div>
                    </div>
                </div>
                <div class="col-md-8">
                    {/* <div class="form-check d-flex">
                        <input class="form-check-input mt-4 mb-1" type="checkbox" value="" required />
                        <span className='mt-3 ms-3 text-black'>
                            Login As Admin
                        </span>
                    </div> */}
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary" style={{ width: "100%" }} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Singup