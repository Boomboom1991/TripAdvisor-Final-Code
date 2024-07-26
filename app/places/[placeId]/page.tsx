import PlaceDetails from "@/components/place-details/placedetails";
import Reviews from "@/components/reviews/index";
import Heading from "@/components/heading/index";
import Gallary from "@/components/carousel/index";

// Import Data
import { places } from "@/lib/recentViewedPlacesData";
import { fetchPlace } from "@/lib/fetchData";

export default async function PlacePage({
  params,
}: {
  params: { placeId: string };
}) {
  const data = await fetchPlace(params.placeId);

  return (
    <div className="">
      <div className="bg-[#ededed]">
        <div className="max-w-7xl mx-auto m-3">
          <div className="text-2xl font-bold my-10">
            <span>{data.name}</span>
          </div>

          <div className="flex flex-row mx-auto text-center mt-3 border-1.5 shadow-sm  border-[#e0e0e0]">
            <Gallary data={data} />
            <iframe
              src=""
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white mt-2">
            <div className="max-w-7xl mx-auto">
              <Heading {...data} />
            </div>
          </div>

          {/*<PlaceDetails data={data} />*/}
          {/*<Reviews />*/}
        </div>
      </div>
    </div>
  );
}
