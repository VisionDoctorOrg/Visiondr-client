import React, { useEffect } from "react";
import CardLayout from "../../components/CardLayout";
import ImageCard from "./ImageCard";
import { useParams } from "react-router-dom";

const ArticlePage = ({ dataContext }) => {
  const items = dataContext.data;
  const { index } = useParams();
  const item = items[index];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-6 md:px-2 md:pr-4">
      <div className=" rounded-lg lg:col-span-5">
        <div class=" bg-white flex-col justify-start gap-6 inline-flex">
          <div class="h-[185px] relative bg-gradient-to-l from-black to-black rounded-lg">
            <img
              loading="lazy"
              src={item.imageSrc}
              alt="img"
              className="object-cover origin-top absolute inset-0 size-full rounded-lg"
            />
          </div>
          <div class="flex-col justify-start items-start gap-6 flex px-2">
            <div class="w-full justify-between items-start inline-flex">
              <div class="flex-col justify-start items-start gap-2 inline-flex">
                <div class="self-stretch text-gray-950 text-base font-semibold  leading-normal">
                  {item.title}
                </div>
                <div class="self-stretch text-[#404453] text-sm font-normal  leading-[16.80px]">
                  {item.description}
                </div>
              </div>
              <div class="rounded-sm justify-start items-center gap-1 flex">
                <div class="w-6 h-6 justify-center items-center flex">
                  <div class="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.6181 5.968L19.0711 4.515L20.4851 5.929L19.0321 7.382C20.4678 9.17917 21.161 11.4579 20.9691 13.7501C20.7773 16.0424 19.7151 18.1742 18.0006 19.7077C16.286 21.2413 14.0494 22.0601 11.75 21.9961C9.45067 21.9321 7.26307 20.9901 5.63653 19.3635C4.00999 17.737 3.06799 15.5494 3.00398 13.25C2.93997 10.9506 3.75881 8.71402 5.29234 6.99951C6.82587 5.285 8.95767 4.22275 11.2499 4.03092C13.5422 3.83909 15.8209 4.53223 17.6181 5.968V5.968ZM12.0001 20C12.9193 20 13.8296 19.8189 14.6788 19.4672C15.5281 19.1154 16.2998 18.5998 16.9498 17.9497C17.5998 17.2997 18.1154 16.5281 18.4672 15.6788C18.819 14.8295 19.0001 13.9193 19.0001 13C19.0001 12.0807 18.819 11.1705 18.4672 10.3212C18.1154 9.47194 17.5998 8.70026 16.9498 8.05025C16.2998 7.40024 15.5281 6.88463 14.6788 6.53284C13.8296 6.18106 12.9193 6 12.0001 6C10.1435 6 8.36307 6.7375 7.05031 8.05025C5.73756 9.36301 5.00006 11.1435 5.00006 13C5.00006 14.8565 5.73756 16.637 7.05031 17.9497C8.36307 19.2625 10.1435 20 12.0001 20V20ZM11.0001 8H13.0001V14H11.0001V8ZM8.00006 1H16.0001V3H8.00006V1Z"
                        fill="#010D37"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-center text-gray-950 text-xs font-medium leading-[14.40px] min-w-[80px]">
                  {item.timeText} read
                </div>
              </div>
            </div>
            <div class="w-full text-gray-950 text-sm font-normal leading-[16.80px] flex flex-col gap-2">
              {item.article.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div class="self-stretch md:h-40 flex-col justify-start items-start gap-10 flex px-2">
            <div class="self-stretch justify-between items-start inline-flex flex-col md:flex-row">
              <div class=" flex-col justify-start items-start gap-2 inline-flex">
                <div class="self-stretch justify-start items-center gap-2 inline-flex">
                  <div class="w-8 h-8 bg-black/20 relative rounded-full">
                    <img
                      loading="lazy"
                      src="/images/avatar_img.png"
                      alt="imgAlt"
                      className="object-cover absolute inset-0 size-full"
                    />
                  </div>
                  <div class="h-3.5 justify-between items-center flex gap-1">
                    <div class="text-gray-950 text-xs font-medium  leading-[14.40px]">
                      Daily Tips by Tukur Idris
                    </div>
                    <div class="w-1.5 h-1.5 bg-[#8c8f98] rounded-full"></div>
                    <div class="text-gray-950 text-xs font-medium  leading-[14.40px]">
                      Wed, August 14th, 2024
                    </div>
                  </div>
                </div>
                <div class="pl-10 justify-start items-center gap-3 inline-flex">
                  <div class="justify-start items-center gap-1 flex">
                    <div class="w-5 h-5 justify-center items-center flex">
                      <div class="w-5 h-5 relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10.0007 3.77415C11.9582 2.01665 14.9832 2.07498 16.869 3.96415C18.754 5.85415 18.819 8.86415 17.0657 10.8275L9.99901 17.9042L2.93401 10.8275C1.18068 8.86415 1.24651 5.84915 3.13068 3.96415C5.01818 2.07748 8.03734 2.01415 10.0007 3.77415ZM15.689 5.14165C14.439 3.88998 12.4223 3.83915 11.114 5.01415L10.0015 6.01248L8.88818 5.01498C7.57568 3.83832 5.56318 3.88998 4.30984 5.14332C3.06818 6.38498 3.00568 8.37248 4.14984 9.68582L9.99984 15.545L15.8498 9.68665C16.9948 8.37248 16.9323 6.38748 15.689 5.14165Z"
                            fill="#F2415A"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="text-[#404453] text-xs font-normal  leading-[14.40px]">
                      100 Likes
                    </div>
                  </div>
                  <div class="justify-start items-center gap-1 flex">
                    <div class="w-5 h-5 justify-center items-center flex">
                      <div class="w-5 h-5 relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M1.66651 10C1.66651 5.39752 5.39734 1.66669 9.99984 1.66669C14.6023 1.66669 18.3332 5.39752 18.3332 10C18.3332 14.6025 14.6023 18.3334 9.99984 18.3334H1.66651L4.10734 15.8925C3.33237 15.1196 2.71779 14.2011 2.29891 13.1898C1.88003 12.1786 1.66512 11.0946 1.66651 10V10ZM5.68984 16.6667H9.99984C11.3184 16.6667 12.6073 16.2757 13.7036 15.5432C14.8 14.8106 15.6545 13.7694 16.159 12.5512C16.6636 11.3331 16.7956 9.99263 16.5384 8.69942C16.2812 7.40621 15.6462 6.21833 14.7139 5.28598C13.7815 4.35363 12.5937 3.71869 11.3004 3.46145C10.0072 3.20422 8.66679 3.33624 7.44862 3.84082C6.23045 4.34541 5.18926 5.19989 4.45671 6.29622C3.72417 7.39255 3.33318 8.68148 3.33318 10C3.33318 11.7934 4.04234 13.4709 5.28568 14.7142L6.46401 15.8925L5.68984 16.6667V16.6667ZM9.16651 5.00002H10.8332V15H9.16651V5.00002ZM5.83318 7.50002H7.49984V12.5H5.83318V7.50002ZM12.4998 7.50002H14.1665V12.5H12.4998V7.50002Z"
                            fill="#A17E02"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="text-[#404453] text-xs font-normal  leading-[14.40px]">
                      60 Comments
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-2 justify-start items-center gap-2 flex">
                <div class="text-gray-950 text-xs font-medium  leading-[14.40px]">
                  Share:
                </div>
                <div class="h-5 justify-between items-center flex">
                  <div class=" flex gap-2">
                    <div class="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] rounded-md relative">
                      <img
                        loading="lazy"
                        src="/icons/instagram.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                    </div>
                    <div class="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] rounded-md relative">
                      <img
                        loading="lazy"
                        src="/icons/Facebook.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                    </div>
                    <div class="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] rounded-md relative">
                      <img
                        loading="lazy"
                        src="/icons/twitter.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                    </div>
                    <div class="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] rounded-md relative">
                      <img
                        loading="lazy"
                        src="/icons/share_icon.svg"
                        className="object-cover absolute inset-0 size-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="self-stretch px-3 py-2 bg-[#d2dbfe]/20 rounded-[32px] justify-between items-center inline-flex">
              <div class="w-3/4 h-11 pl-3 py-2 bg-white rounded-2xl justify-start items-center gap-2 flex">
                <div class="text-center text-[#8c8f98] text-sm font-normal  leading-[16.80px]">
                  Leave a comment ...
                </div>
              </div>
              <div class="w-10 h-10 p-2 bg-[#8c8f98]/10 rounded-[20px] border-2 border-white justify-center items-center flex">
                <div class="w-5 h-5 justify-center items-center flex">
                  <div class="w-5 h-5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.5 10.8334H7.5V9.16669H2.5V1.53836C2.50001 1.46596 2.51889 1.3948 2.55478 1.33192C2.59066 1.26903 2.64232 1.21658 2.70465 1.17974C2.76698 1.1429 2.83783 1.12293 2.91023 1.12181C2.98262 1.1207 3.05406 1.13846 3.1175 1.17336L18.5025 9.63503C18.5678 9.671 18.6223 9.72384 18.6602 9.78804C18.6982 9.85224 18.7182 9.92545 18.7182 10C18.7182 10.0746 18.6982 10.1478 18.6602 10.212C18.6223 10.2762 18.5678 10.3291 18.5025 10.365L3.1175 18.8267C3.05406 18.8616 2.98262 18.8794 2.91023 18.8782C2.83783 18.8771 2.76698 18.8572 2.70465 18.8203C2.64232 18.7835 2.59066 18.731 2.55478 18.6681C2.51889 18.6052 2.50001 18.5341 2.5 18.4617V10.8334Z"
                        fill="#030712"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md:h-[156px] flex-col justify-start items-start gap-4 flex px-2">
            <div class="self-stretch text-gray-950 text-base font-medium  leading-normal">
              Comments
            </div>
            <div class="self-stretch justify-between items-center inline-flex">
              <div class="self-stretch justify-start items-center gap-2 flex">
                <div class="w-8 h-8 bg-black/20 rounded-full relative">
                  <img
                    loading="lazy"
                    src="/images/avatar_img.png"
                    alt="imgAlt"
                    className="object-cover absolute inset-0 size-full"
                  />
                </div>
                <div class="text-gray-950 text-xs font-medium  leading-[14.40px]">
                  Tukur Idris
                </div>
              </div>
              <div class="text-gray-950 text-xs font-medium  leading-[14.40px]">
                Wed, August 14th, 2024
              </div>
            </div>
            <div class="self-stretch text-gray-950 text-sm font-normal  leading-[16.80px]">
              Potter ipsum wand elf parchment wingardium. Lies flat answer
              horntail portrait fawkes time-turner time-turner veil horntail.
              Padfoot spider potter glory filch together bag he. Match the
              detention palominos parseltongue fenrir patronum elemental.
              Remember stand parseltongue match honeydukes a. Dementors harry
              floating doe would schedule wand jinxes. Totalus hippogriffs black
              sound for. House voldemort scarlet tap-dancing erumpent portkey
              floor.
            </div>
          </div>
        </div>
      </div>
      <div className=" md:rounded-lg lg:col-span-2">
        <div class="h-14 p-4 rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex w-full">
          <div class="w-full h-6 flex-col justify-start items-center gap-[7px] inline-flex">
            <div class="self-stretch text-gray-950 text-sm font-medium  leading-[16.80px] w-full">
              Read Next
            </div>
          </div>
        </div>
        <div className="border border-[#d2dbfe] flex justify-center mt-6">
          <CardLayout className="md:justify-center">
            {items.map((item, index) => (
              <ImageCard
                key={index}
                index={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                timeSrc={item.timeSrc}
                timeAlt={item.timeAlt}
                timeText={item.timeText}
                title={item.title}
                description={item.description}
              />
            ))}
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
