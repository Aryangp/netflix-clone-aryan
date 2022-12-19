import React from 'react'
import logoN from "../../images/logoN.png"


function Cards({months}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-10 mb-6">
      <img class="w-full" src={logoN} alt="Sunset in the mountains"/>
  <div class="px-2 py-3 bg-white">
    <div class="font-bold text-xl mb-2">{months}-Months Plan</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
    <div class="px-4 pt-4 pb-2 bg-white mb-10 text-center rounded-sm ">
    <span class="  inline-block bg-gray-200 rounded-full px-5 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">Subscribe</span>
    </div>
</div>
  )
}

export default Cards