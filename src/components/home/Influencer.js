import React from 'react'

const Influencer = () => {
  return (
    <div><div className="bg-[#F6F8F9] ">
      <div className="container md:px-0 px-5 relative md:pt-20 pt-10 ">
        <h2 className='md:text-4xl text-3xl text-center font-bold'>Influencer Marketing </h2>
        <h3 className='md:text-xl text-lg pt-2 text-center font-medium'> Teaming up with key influencers to strengthen your brand&apos;s image and trust.</h3>

        <div className="masonry-grid pb-2 pt-10">
          <div className="masonry-grid-item containerzoom">
            {/* <img
            className="zoomimg drop-shadow-md"
            src="/common/song1.jpg"
            alt=""
          /> */}
            <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/BddP6PYo2gs?si=629PkNe6q5ASrCbC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="masonry-grid-item containerzoom">
          <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/2Vxs2TYG19s?si=4sgeIwEZ6kK3Cd4j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="masonry-grid-item containerzoom">
          <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/W8J6H92FS88?si=U9IWdID6YGNjIvno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
          <div className="masonry-grid-item containerzoom">
          <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/rMfugUZD2dA?si=Zs6_MoQvZrLVHAsD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
          <div className="masonry-grid-item containerzoom">
          <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/OzI9M74IfR0?si=H2SNRXCr8IpXwLIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
          <div className="masonry-grid-item containerzoom">
          <iframe  className="zoomimg drop-shadow-md" width="350" height="200" src="https://www.youtube.com/embed/Xm-aI4SXNSk?si=K6BcWGEjee5Dq9-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>

        </div>



      </div>
    </div></div>
  )
}

export default Influencer