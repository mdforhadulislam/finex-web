import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useLoad } from "@/context/LoadContext";
import ReactStars from "react-stars";
import { toast } from "sonner";
import { FEEDBACK_API, postRequestSend } from "../ApiCall/ApiMethod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ShipmentTrackingFeedBack = () => {
  const [rating, setRating] = useState(0);

  const [isProfile, setIsProfile] = useState("");

  const load = useLoad();

  const [feedbackData, setFeedBackData] = useState({
    name: "",
    phone: "",
    content: "",
  });

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const [isFeedBack, setIsFeedBack ] = useState(true)

  return (
    isFeedBack && <div className="w-full h-auto py-10 pt-2">
      <div className="container h-auto shadow-4xl border-dashed border-defult m-auto p-4 rounded-md border-[2px] flex flex-col gap-3">
        <div className="w-full h-auto flex flex-col sm:flex-row align-middle items-center gap-3">
          <div className="w-full">
            <Label
              htmlFor="profileUpload"
              className="w-full flex h-full items-center align-middle  gap-3 cursor-pointer"
            >
              <Image
                width={80}
                height={80}
                src={isProfile ? isProfile : "/profile.png"}
                alt="profile image upload "
                className="p-1 rounded-full border border-defult w-[70px] h-[70px]"
              />
              <span>Upload your profile image</span>
            </Label>
            <Input
              id="profileUpload"
              type="file"
              className=" hidden"
              onChange={async (e) => {
                const input = e.target as HTMLInputElement;
                if (!input.files) return;
                const file = input.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                  setIsProfile(reader.result as string);
                };
                reader.readAsDataURL(file);

                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "test_name");

                try {
                  const response = await fetch(
                    `https://api.cloudinary.com/v1_1/dw6gu0tzu/image/upload`,
                    {
                      method: "POST",
                      body: formData,
                    }
                  );

                  const result = await response.json();
                  setIsProfile(result.url);
                } catch (error) {
                  toast.error("Failed to upload image");
                }
              }}
            />
          </div>

          <div className="w-full">
            <Label
              htmlFor=""
              className="text-sm font-medium text-gray-700 flex gap-3 justify-between sm:justify-start"
            >
              <span className="block text-sm text-gray-700">
                Provide our service reting
              </span>

              <ReactStars
                count={5} // Number of stars
                value={rating} // Current rating
                onChange={handleRatingChange} // Callback when rating changes
                size={32} // Size of stars
                half={false} // Allow half stars or not
                color2={"#fa913c"} // Active star color
                color1={"#d4d4d4"} // Inactive star color
              />
            </Label>
          </div>
        </div>

        <div className="w-full h-auto flex gap-3 sm:flex-row flex-col">
          <div className="w-full ">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full h-auto "
              placeholder="Name"
              value={feedbackData.name}
              onChange={(e) => {
                setFeedBackData({ ...feedbackData, name: e.target.value });
              }}
            />
          </div>

          <div className="w-full ">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              className="w-full h-auto "
              placeholder="Phone"
              value={feedbackData.phone}
              onChange={(e) => {
                setFeedBackData({ ...feedbackData, phone: e.target.value });
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="content">Description</Label>
          <Textarea
            id="content"
            placeholder="write about our service"
            value={feedbackData.content}
            onChange={(e) => {
              setFeedBackData({ ...feedbackData, content: e.target.value });
            }}
          />
        </div>

        <Button
          className="w-full bg-defult text-white hover:bg-defult/85"
          onClick={() => {
            if (
              feedbackData.name &&
              feedbackData.phone &&
              feedbackData.content
            ) {
              load.loadingStart();
              postRequestSend(
                `${FEEDBACK_API}${feedbackData.phone}`,
                {},
                {
                  ...feedbackData,
                  profile: isProfile,
                  rating,
                }
              ).then((res) => {
                
                setIsFeedBack(false)
                load.loadingEnd();
                toast.success(res.message);
                setIsProfile("");
                setFeedBackData({
                  name: "",
                  phone: "",
                  content: "",
                });
                setRating(0);
              });
            } else {
              toast.error("Submit Full Data");
            }
          }}
        >
          Submit FeedBack
        </Button>
      </div>
    </div>
  );
};

export default ShipmentTrackingFeedBack;
