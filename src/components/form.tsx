import { useLockBody } from "@/hooks/uselockbody";
import Script from "next/script";
import { AiFillCloseCircle } from "react-icons/ai";

const Form = ({ toggleForm }: { toggleForm: () => void }) => {
  useLockBody();
  return (
    <section className=" grid place-content-center bg-transparent w-full h-full justify-center items-center relative z-20">
      <Script type="module" src="/register.js" />
      <button onClick={toggleForm}>
        <AiFillCloseCircle className="text-white w-11 h-11 absolute top-6 right-6 m-4 cursor-pointer" />
      </button>

      <div className="grid place-items-center">
        <div className="bg-transparent text-center">
          <p className=" font-bold tracking-[0.7vmin] z-20 text-white mt-3 text-lg">
            TECH INVENT
          </p>
          <h1 className="sm:text-3xl text-2xl text-white py-3">
            Register as an Ambassador
          </h1>
        </div>
        <div className="bg-[#fff] rounded-2xl py-4 px-10 w-[300px] lg:w-[400px] mt-0">
          <form className="text-xs">
            <div className="flex justify-center items-center gap-4">
              <div>
                <p className="text-gray-500 py-2">Name*</p>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                  placeholder="Name"
                />
              </div>
              <div>
                <p className="text-gray-500 py-2">Year of study*</p>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                  placeholder="Year of study"
                />
              </div>
            </div>
            <div className="">
              <p className="text-gray-500 py-2">Email*</p>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                placeholder="Your email adrress"
              />
            </div>
            <div>
              <p className="text-gray-500 py-2">Password*</p>
              <input
                id="Password"
                name="Password"
                type="text"
                required
                className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 placeholder:py-3 px-3 focus:outline-none focus:border-gray-300"
                placeholder="Your Password"
              />
            </div>
            <div className="">
              <p className="text-gray-500 py-2">Phone number*</p>
              <input
                id="Phone"
                name="Phone"
                type="text"
                required
                className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
              />
            </div>
            <div className="">
              <p className="text-gray-500 py-2">LinkedIN ID*</p>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                required
                className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                placeholder="LinkedIN ID"
              />
            </div>
            <div className="">
              <p className="text-gray-500 py-2">College Name*</p>
              <input
                id="College"
                name="College"
                type="text"
                required
                className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                placeholder="Chandigarh University"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <p className="text-gray-500 py-2">College ID*</p>
                <input
                  id="CollegeID"
                  name="CollegeID"
                  type="text"
                  className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900 py-3 px-3 focus:outline-none focus:border-gray-300"
                  placeholder="XXX-XXX"
                />
              </div>
              <div>

                <p className="text-gray-500 py-2">State*</p>
                <select id="State" className="peer rounded-lg h-10 w-full border-2 border-gray-300 text-gray-900  px-3 focus:outline-none focus:border-gray-300" >
                    <option value="Andhra_Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal_Pradesh">Himachal Pradesh</option>
                    <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya_Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil_Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar_Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West_Bengal">West Bengal</option>


                </select>
              </div>
            </div>
            <div>
              <button
                type="button"
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
                className="bg-[#393c44] w-full py-3 rounded-full text-white mt-2 no-shadow"
                id="submit"
              >
                Submit
              </button>
            </div>
            {/* <p className="text-xs text-[#64666a] text-center py-2 login" id="login">
          Already registered as an ambassador ?
          <a href="./login.html" className="text-black font-medium"> Login</a>
        </p>  */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
