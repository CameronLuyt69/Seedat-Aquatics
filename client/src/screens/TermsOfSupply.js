import React,{ Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

function TermsOfSupply() {
    return <Fragment>
        <h1 className="term">Terms of Supply</h1>
        <div className="terms">
            <div>
                PLEASE READ THESE TERMS AND CONDITIONS OF SUPPLY CAREFULLY BEFORE ORDERING. YOU SHOULD UNDERSTAND THAT BY ORDERING ANY OF OUR PRODUCTS, YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS. WE RECOMMEND THAT YOU PRINT OR SAVE A COPY OF THESE TERMS AND CONDITIONS FOR FUTURE REFERENCE.
            </div>

            <div>
                <h4>1. TERMS OF SUPPLY</h4>
                <ul>
                    <li>* These are the terms and conditions (“Terms of Supply”) relevant to the Products we offer and supply. These Terms of Supply refer to the following additional terms which also apply to the offer and supply of the Products:
                        <ul>
                            <li>Our <Link to="/terms-of-use">Terms of Use</Link></li>
                            <li>Our <Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </li>
                    <li>* The above terms and conditions and policies are hereby incorporated by reference and together are the agreement (“Agreement”) between us and you in terms of the provision of Products and related services. If there is any conflict between the above terms and conditions/policy  and this Terms of Supply the latter will prevail.</li>
                    <li>* Your attention is therefore drawn to these Terms of Supply because they are important and should be carefully noted.</li>
                </ul>
            </div>

            <div>
                <h4>2. INFORMATION AND CONTACT DETAILS</h4>
                <ul>
                    <li>* Who we are: See our <Link to="/terms-of-use">Terms of Use</Link></li>
                    <li>* How we may contact you: If we have to contact you we will do so by telephone or by writing to you at the email address, postal address or other  electronic communication facility address you provided to us in your Purchase Order.</li>
                </ul>
            </div>

            <div>
                <h4>3. HOW THE CONTRACT IS FORMED BETWEEN US</h4>
                <ul>
                    <li>* No electronic signature is required to conclude the contract between us; the mere sending of a Data Messages or click on “I accept” “Register”  or “Submit” or “Continue to Payment” demonstrates your acknowledgement and agreement to these Terms of Supply and the Product specific T and C's</li>
                    <li>* By placing an order through our site, you warrant that you are 18 years of age and where you are under the age of 18 that you are using our site and placing your order with the consent of your legal guardian / parent.</li>
                    <li>* Product specific T and C's: Certain Products may have additional terms and conditions that will apply. The Product specific T and C's will be presented to you prior to submitting your offer and should be read with these Terms of Supply.</li>
                </ul>
            </div>

            <div>
                <h4>4. PRODUCTS AND PRODUCT DESCRIPTION</h4>
                <ul>
                    <li>* Products may vary slightly from their pictures: The images of the Products on our website are for illustrative purposes only. Although we have made every effort to display the colours accurately, we cannot guarantee that a device's display of the colours accurately reflects the colour of the Products. The Product may therefore vary slightly from those in the images. Such variations shall not form part of the Contract or have any contractual force.</li>
                    <li>* Product packaging may vary: The packaging of the Products may vary from that shown on images on our website.</li>
                    <li>* Stock Availability: The stock of all Products presented on our website is limited.</li>
                </ul>
            </div>

            <div>
                <h4>5. PRODUCTS WARRANTIES</h4>
                <ul>
                    <li>* This Agreement is subject to the Consumer Protection Act 68 of 2008 (“CPA”) and does not override or circumvent any rights you may have in terms of CPA.</li>
                    <li>* All Products sold on our website does not come with a supplier warranty</li>
                </ul>
            </div>

            <div>
                <h4>6. YOUR RIGHTS TO MAKE CHANGES</h4>
                <ul>
                    <li>* Before submission of your order: Prior to submission of your order you will be allowed to make changes to your selection of Products.</li>
                    <li>* After submission of the order: If you wish to amend your order please Contact Us as soon as possible. We will confirm whether the change requested is possible. Should it be possible, we will let you know of any changes to the price of the Product, the time of supply and delivery or anything else which would be necessary as a result of your requested change and ask you to confirm whether you wish to go ahead with such change.</li>
                </ul>
            </div>

        </div>
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
    </Fragment>
}

export default TermsOfSupply;