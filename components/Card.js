const Card = ({nft,i,onBuy,onIncrementLike}) => {
    return (
            <div key={i} class="flex justify-center">
                  <div class="rounded-lg shadow-lg bg-white max-w-c345 max-h-c440 space-y-3">
                      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img class="rounded-t-lg" height="343px" width="343px" src={nft.image} alt="" />
                      </a>
                    <div class="flex space-x-2.5 px-2">
                      <div class="item w-1/2 h-auto space-y-0.5">
                        <p class="text-xs text-gray-500">{nft.name}</p>
                        <p class="text-xs font-bold">{nft.name} #{nft.itemId}</p>
                      </div>
                      <div class="item w-1/2">
                        <div class="flex flex-col items-end space-y-0.5">
                          <div>
                            <span class="block text-xs text-gray-500">Price</span>
                          </div>
                          <div class="flex flex-row flex-grow-0 overflow-hidden space-x-1">
                            <img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" width="10" />
                            <span class="text-sm font-semibold">{nft.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                
                    <div class="flex items-end px-2 py-2 bg-gray-100">
                        <div class="item w-11/12">
                            <button onClick={onBuy}><span class="text-sm font-semibold text-blue-600 hover:text-blue-400">Bug Now</span></button>
                        </div>
                      
                      <div class="item">
                        <div class="flex flex-row-reverse space-x-1 space-x-reverse">
                          <p class="text-gray-500 text-sm">{nft.likes}</p>
                          <button onClick={onIncrementLike}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-gray-500 hover:fill-pink-500 hover:stroke-pink-500" fill="none" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                
                </div>
    );
}

export default Card;