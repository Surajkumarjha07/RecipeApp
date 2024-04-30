'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function page() {
  const [searchinput, setsearchinput] = useState('')
  const [recipeData, setrecipeData] = useState({});

  const getRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=85126e7a27ff405980cd34abbaf65f21&query=${searchinput}&cuisine=italian&&addRecipeInformation=true`);
      const data = await response.json();

      setrecipeData(data)
      console.log(recipeData);
    } catch (error) {
      console.log("Some Error Ocuured");

    }

  }

  return (
    <>
      <form className="max-w-md mx-auto mb-7" onSubmit={getRecipe}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 dark:bg-white shadow-lg shadow-purple-100 mt-12 dark:placeholder-gray-400 dark:text-black" placeholder="Search Recipes" required onChange={e => setsearchinput(e.target.value)} />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
        </div>
      </form>

      <div className='flex justify-center align-middle flex-wrap'>
        {
          recipeData?.results ? (

            recipeData.results.map((recipe, index) => (
              <div key={index} className="p-4 lg:w-1/2 mx-auto mb-7">
                <div className="h-auto bg-gray-100 bg-opacity-95 px-8 pt-16 pb-24 rounded-xl overflow-hidden text-center relative">
                  <img src={recipe.image} alt="Sorry" className="w-96 h-60 rounded-xl m-auto mb-4" />
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-700 mb-3">{recipe.title}</h1>

                <div className='flex justify-between m-2 font-semibold text-lg text-gray-700 '>
                  <label>Cuisines : </label>
                  <div className='flex justify-between gap-4 ' >{recipe.cuisines.map((cuisine,index)=>(
                    <span key={index}>{cuisine}</span>
                  ))}</div>
                </div>

                <div className='flex justify-between m-2 font-semibold text-lg text-gray-700 '>
                  <label>Dish Types : </label>
                  <div className='flex justify-around gap-4 w-2/3 flex-wrap' >{recipe.dishTypes.map((dishType,index)=>(
                    <span key={index}>{dishType}</span>
                  ))}</div>
                </div>

                <div className='flex justify-between m-2 font-semibold text-lg text-gray-700 '>
                  <label>Food Rating : </label>
                  <div className='flex justify-between gap-4 ' >{(recipe.spoonacularScore).toFixed(2)}</div>
                </div>

                  <Link href={recipe.spoonacularSourceUrl} className="text-purple-500 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )
            )
          ) : <div className='flex justify-center align-middle bg-purple-300 bg-opacity-75 p-7 rounded-xl font-mono font-extrabold text-4xl mb-7'>
            <h2 className='text-purple-100'>Search above to get your desired recipes</h2>
          </div>

        }
      </div>

    </>
  )
}
