import iphoneimage from "../assets/images/howToUse/iPhone.png";
import counterImage from "../assets/images/howToUse/counterImage.png";

const HowToUse = () => {
  return (
    <section className="my-12 px-48 flex flex-col gap-12">
      <div className=" flex justify-center my-10">
        <h3 className="font-semibold text-3xl">How to use</h3>
      </div>

      <div className="flex justify-between items-start">
        <div className="w-[40%]">
          <img src={iphoneimage} alt="iphone image" className="w-full" />
        </div>
        <div className="w-[60%] pl-28">
          <h3 className="font-bold text-3xl">For drug buyers</h3>

          <div className="flex flex-col justify-between">
            <div className="mt-12">
              <div className="flex items-start gap-12">
                <h3 className="text-3xl text-primary font-bold ">1</h3>
                <div className="flex flex-col gap-6">
                  <h5 className="font-semibold text-2xl">Create an account </h5>
                  <p className="w-[80%] text-xl leading-loose">
                    Get access to our platform by signing up with basic
                    information on the Android or iOs app.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-start gap-12">
                <h3 className="text-3xl text-primary font-bold ">2</h3>
                <div className="flex flex-col gap-6">
                  <h5 className="font-semibold text-2xl">
                    Input medication search{" "}
                  </h5>
                  <p className="w-[80%] text-xl leading-loose">
                    {" "}
                    Input the details of the type of medication or supplies that
                    you are looking to filter amount, composition, location etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-start gap-12">
                <h3 className="text-3xl text-primary font-bold ">3</h3>
                <div className="flex flex-col gap-6">
                  <h5 className="font-semibold text-2xl">
                    Connect with pharmacy
                  </h5>
                  <p className="w-[80%] text-xl leading-loose">
                    Send a medication request to get advisory to assess
                    desirability or purchase.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-start gap-12">
                <h3 className="text-3xl text-primary font-bold ">4</h3>
                <div className="flex flex-col gap-6">
                  <h5 className="font-semibold text-2xl">Checkout </h5>
                  <p className="w-[80%] text-xl leading-loose">
                    Clear purchase carts and get delivery. Assess our tools that
                    improves your dispensary experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-start">
        <div className="w-[50%] h-[600px] mt-14">
          <img
            src={counterImage}
            alt="counter image"
            className="w-full h-full"
          />
        </div>
        <div className="w-[45%] mt-12">
          <h3 className="font-bold text-3xl">For pharmacies</h3>

          <div className="flex flex-col justify-between gap-12 mt-12">
            <div className="flex items-start gap-12">
              <h3 className="text-3xl text-primary font-bold ">1</h3>
              <div className="flex flex-col gap-6">
                <h5 className="font-semibold text-2xl">Create an account </h5>
                <p className="w-[80%] text-xl leading-loose">
                  Get access to our platform by signing up with basic
                  information and certifications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-12">
              <h3 className="text-3xl text-primary font-bold ">2</h3>
              <div className="flex flex-col gap-6">
                <h5 className="font-semibold text-2xl">
                  Search dispensary leads and add inbounds
                </h5>
                <p className="w-[80%] text-xl leading-loose">
                  You can create an online dispensary counter via your custom
                  webpage, get and manage leads on your dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-12">
              <h3 className="text-3xl text-primary font-bold ">3</h3>
              <div className="flex flex-col gap-6">
                <h5 className="font-semibold text-2xl">
                  Manage and automate pharmacy operations
                </h5>
                <p className="w-[80%] text-xl leading-loose">
                  Manage pharmacies, procurement, vendors, payments, customer
                  feedback, and all other integrations for your pharmacy,
                  powered by our end-to-end pharmacy operations manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
