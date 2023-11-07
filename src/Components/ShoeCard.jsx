import React from 'react'

const ShoeCard = ({ bigShoe, changeBigShoeImg, thumbnailImg, bigShoeImg }) => {

    function handleClick() {
        if (bigShoeImg !== bigShoe) {
            changeBigShoeImg(bigShoe)
        }
    }

    return (
        <div className={`bg-card bg-center bg-cover p-4 max-xl:w-4/5 max-xl:h-4/5 h-[145px] cursor-pointer border-2 rounded-xl ${bigShoeImg === bigShoe ? 'border-coral-red' : 'border-none'}`}
            onClick={handleClick}>
            <img src={thumbnailImg} alt="thumbnail" className='object-contain' />
        </div>
    )
}

export default ShoeCard