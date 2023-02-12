import React from "react";

const Termsandcondition = () => {
  return (
    <div className="mx-auto">
      <div className="rounded-2xl shadow-lg bg-gradient-to-b to-violet-200 from-violet-100 duration-300 border p-10 mx-6 lg:mx-10 xl:mx-20 2xl:mx-56 my-6 lg:my-10 flex flex-col gap-6 text-justify">
        <h1 className="text-5xl text-center text-violet-500 font-bold">
          Terms and Conditions
        </h1>

        <p>
          Welcome to codeate.in . By accessing and using the Site, you agree to be bound by these terms and conditions (the "Terms"). If you do not agree to these Terms, please do not use the Site.
        </p>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Eligibity</h3>
          <p>
            The Site is intended for users who are at least 18 years of age. If you are under the age of 18, you are not permitted to use the Site.

          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Use of the Site</h3>
          <p>
            The Site provides educational materials and resources to users. You are permitted to access and use these materials for personal, non-commercial purposes only. You may not use the Site for any illegal or inappropriate purposes, or engage in any activities that may disrupt or damage the Site or the services provided through it.

          </p>

          {/* <ol className="list-decimal pl-5 py-5">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              beatae placeat perferendis nemo ratione libero ex repudiandae,
              alias dicta sed in accusantium voluptatem, reiciendis a aut
              dolorum nam ullam cumque!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              beatae placeat perferendis nemo reiciendis a aut dolorum nam ullam
              cumque!
            </li>
            <li>
              Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam, minima! amet consectetur adipisicing
              elit. Incidunt beatae placeat perferendis nemo ratione libero ex
              repudiandae, alias dicta sed in accusantium.
            </li>
          </ol> */}

          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            assumenda, obcaecati numquam facilis ipsam sint aliquid vero itaque
            inventore veniam illo harum nulla ut, excepturi provident autem
            amet. Error quasi harum iusto, quis odio ut maxime quaerat eum in
            sequi id debitis inventore ipsa totam voluptates odit nemo velit
            provident!
          </p> */}
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">
            Intellectual Property
          </h3>
          <p>
            The content on the Site, including text, images, and other materials, is protected by copyright and trademark laws. You may not use the Site's content for any commercial purposes without obtaining written permission from us.

          </p>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">
            Disclaimer of Liability
          </h3>
          <p>
            We make no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, or products included on the Site. We will not be liable for any damages of any kind arising from the use of the Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Governing Law</h3>
          <p>
            These Terms and your use of the Site will be governed by and construed in accordance with the laws of the State of [State], without giving effect to any principles of conflicts of law.
          </p>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Payment Terms</h3>
          <p>
          If you choose to purchase any products or services through the Site, you will be required to provide payment information. You agree to pay all fees and charges associated with your purchase, and you authorize us to charge your designated payment method for the full amount of the purchase.
          </p>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Modification of These Terms</h3>
          <p>
          We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will post the revised version on the Site and update the "Effective Date" at the top of this page. Your continued use of the Site after the effective date of any changes to these Terms will constitute your acceptance of the revised terms.          </p>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-violet-600">Contact Us</h3>
          <p>
If you have any questions or concerns about these Terms or the Site, please contact us at <a className="underline text-blue-600" href="mailto:contact.us@codeate.in">contact.us@codeate.in</a> </p>
        </div>

      </div>
    </div>
  );
};

export default Termsandcondition;
