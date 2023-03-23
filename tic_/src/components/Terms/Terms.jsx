import React from 'react';
import './terms.css';



const Terms = () => {
  return (
    <div className='tic__terms'>
      <h1 className='fw-bold'>Terms of Service</h1>
        <h6>Last edit: 03/03/2023</h6>
        <div className='tic__terms-container'>
        <p>Don't misuse our service. You may use our services only as permitted by law. We may suspend or stop providing our sercises  to u
          if you do not comply to our terms or policies
        </p>
       
        <p>
       By using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using 
        the app. You're not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You're not allowed 
        to attempt to extract the source code of the app, and you also shouldn't try to translate the app into
         other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights,
          and other intellectual property rights related to it, still belong to Bismark Boateng and Esther Lardze.
         We are committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve
         the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge 
        you for the app or its services without making it very clear to you exactly what you're paying for
        The Tic app stores and processes personal data that you have provided to us, to provide my Service. Its your responsibility to keep 
        your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, 
        which is the process of removing software restrictions and limitations imposed by the official operating system of your device. 
        It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phones security features
         and it could mean that the Tic app wont work properly or at all.</p>
        </div>
       <div className='tic__terms-accept__decline'>
       <p>I agree with the <span className='text-danger'>Terms and service</span> and i have read the privacy policy</p>
      <button className='btn1'>Accept</button>
      <button className='btn2'>Decline</button>
       </div>

       
    </div>
  )
}

export default Terms
