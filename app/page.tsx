import Image from "next/image";
import RecipeCard from './RecipeCard/page'
import { url } from "inspector";

export default function Home() {
  return (
   <>
      <section className="flex justify-center align-middle h-full w-full mt-10 bg-gray-100 bg-opacity-95 p-12" style={{ borderRadius: "150px" }}>
        <div className="text-center w-1/2 pt-24 pr-14">
          <h1 className="font-extrabold text-3xl font-mono text-gray-800 ">RecipeX</h1>
          <p className="text-gray-700 mt-7 font-bold">This is the place where you can Search and Find thousands of recipes online of different countries and cultures. In our platform World's Most famous, tasty and ethnic foods are available. We provide Recipes to our customers absolutely free at our platform RecipeX. No one will give you anything free in this world but we provide you recipes not only of tasty dishes but of healthy dishes. There are up to 10,000+ healthy dishes are available in our web-app so you can stay fit by making these dishes at your home. We are the world's best recipe provider </p>
        </div> 

        <div className="" style={{borderRadius: "full"}}>
          <img src="https://th.bing.com/th/id/OIP.VRHcGE7A5CKp4373SOj81QHaEo?w=302&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sorry" className="w-full h-96 rounded-full" />
        </div>
      </section> 

   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-95 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <img src="https://th.bing.com/th/id/OIP.BaRNV4hLT_CHCcB2YZRD3wHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sorry" className="w-32 h-24 rounded-xl m-auto mb-4"/>
          <h2 className="tracking-widest title-font font-medium text-gray-700 mb-1 text-xl">Healthy Food</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Salad</h1>
          <p className="leading-relaxed mb-3">Salad is vital for any health consious person to keep fit his body. You can simply cut some vegetables and sprinkle some spices over it and your salad is ready.</p>
          <a className="text-purple-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>  
        </div>
      </div>

      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-95 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <img src="https://th.bing.com/th/id/OIP.jZWOny2NopFb7olnJjASPAHaGD?w=271&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sorry" className="w-32 h-24 rounded-xl m-auto mb-4"/>
          <h2 className="tracking-widest title-font font-medium text-gray-700 mb-1 text-xl">Fast Food</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">HamBurger</h1>
          <p className="leading-relaxed mb-3">One of the most loved fast food all over the world is HamBurger which is made by simply potatoes, some spices and some time we can add some more ingredients to make it more tasty like Chicken HamBurger and more.</p>
          <a className="text-purple-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> 
        </div>
      </div>

      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-95 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <img src="https://th.bing.com/th/id/OIP.PRvFOTG4BIzYWYzJ64OPPAHaFO?w=272&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Sorry" className="w-32 h-24 rounded-xl m-auto mb-4"/>
          <h2 className="tracking-widest title-font font-medium text-gray-700 mb-1 text-xl">Vegetarian Food</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Carrot Soup</h1>
          <p className="leading-relaxed mb-3">This soup is made up of fresh Carrots which provides us the energy to boost our immune system to fight with bacterias and diseases inside our body.</p>
          <a className="text-purple-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>  
        </div>
      </div>

    </div>
  </div>
</section> 
   </>
  );
}
