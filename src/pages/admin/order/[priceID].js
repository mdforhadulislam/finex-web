import AdminDashBoardOrderCreatedPopup from "@/components/Admin/AdminDashBoardOrderCreatedPopup";
import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { ModalContext } from "@/context/ModalContext";
import {
  getRequestSend,
  ORDER_API,
  ORDER_PAYMENT_API,
  postRequestSend,
  putRequestSend,
  SINGLE_ORDER_API,
  SINGLE_PRICE_API,
} from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import SelecteSearchBox from "@/utils/SelecteSearchBox";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const OrderCreate = () => {
  const router = useRouter();
  const { priceID } = router.query;
  const loading = useContext(LoadingContext);
  const authContext = useContext(AuthContext);
  const modal = useContext(ModalContext)
  const [isEdit, setIsEdit]= useState(false)

  const [createdOrderTrackingId, setCreatedOrderTrackingId] = useState("");
  const [getOrderfullData,setGetOrderfullData] = useState({})

  const [nextStep, setNextStep] = useState(false);
  const [weightCalculate, setWeightCalculate] = useState({
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  const [parcelFromAndToId, setParcelFromAndToId] = useState({
    from: {
      country: "",
      id: "",
    },
    to: {
      country: "",
      id: "",
    },
    priceID: "",
  });
  const [itemName, setItemName] = useState("");
  const [creatorPhone, setCreatorPhone] = useState(authContext?.user?.phone);
  const [customarPhone, setCustomarPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [serviceType, setServiceType] = useState("dhl");

  const [parcel, setParcel] = useState({
    from: {
      country: parcelFromAndToId.from.country,
      id: parcelFromAndToId.from.id,
    },
    to: {
      country: parcelFromAndToId.to.country,
      id: parcelFromAndToId.to.id,
    },

    sender: {
      name: "",
      phone: "",
      email: "",
      address: "",
      zipCode: "",
    },
    reciver: {
      name: "",
      phone: "",
      email: "",
      address: {
        city: "",
        country: "",
        zipCode: "",
        address: "",
      },
    },
    weight: "",
    serviceType: "dhl",
    item: {
      types: "Gift",
      list: [],
    },
  });
  const [payment, setPayment] = useState({
    pAmount: 0,
    pType: "",
    pDiscount: 0,
    pExtraCharge: 0,
    pRecived: 0,
  });
  const [box, setBox] = useState([]);

  const nextStepHandler = () => {
    loading.loadingStart();
    postRequestSend(
      ORDER_API,
      {},
      {
        parcelFromAndToId: parcelFromAndToId.priceID,
        customarPhone,
        creatorPhone,
        parcel: {
          ...parcel,
          from: parcelFromAndToId.from,
          to: parcelFromAndToId.to,
        },
        weight,
        serviceType,
        itemType: parcel.item.types,
        box,
      }
    ).then((res) => {
      loading.loadingEnd();
      if (res.status == 200) {
        setCreatedOrderTrackingId(res.data.trackingId);
        setPayment(res.data.payment);
        setNextStep(true);
      } else {
        toast.error(res.message);
      }
    });
  };

  const submitHandler = () => {
    loading.loadingStart();
    putRequestSend(ORDER_PAYMENT_API(createdOrderTrackingId), {}, payment).then(
      (res) => {
        loading.loadingEnd();
        if (res.status == 200) {
          toast.success("Complite Order");
          setNextStep(false);

          setGetOrderfullData(res.data)
          modal.open()
        } else {
          toast.error(res.message);
        }
      }
    );
  };

  const updateHandler = ()=>{
    loading.loadingStart()
    putRequestSend(SINGLE_ORDER_API(router.query.trackID),{},parcel).then(res=>{
      if(res.status==200){
        
        toast.success(res.message)
    loading.loadingStart()
    router.push("/admin/order")
      }
    })
  }

  useEffect(() => {
    getRequestSend(SINGLE_PRICE_API(priceID)).then((res) => {
      if (res.status == 200) {
        setParcelFromAndToId({
          from: {
            country: res.data?.from?.country,
            id: res.data?.from?.id,
          },
          to: {
            country: res.data?.to?.country,
            id: res.data?.to?.id,
          },
          priceID: res.data?._id,
        });
      }
    });
    if(router.query.trackID){
      getRequestSend(SINGLE_ORDER_API(router.query.trackID)).then(res=>{
        if(res.status==200){
          setIsEdit(true)
          setParcel(res.data.parcel)
          toast.success("Only Updated Parcel related Data (Sender Details,Reciver Details)")
        }
      })
    }
  }, [priceID, router]);

  return (
    <div className="w-full h-auto py-2" id="createorder">
      <div className=" w-full h-auto p-3 shadow-3xl rounded-md">
        <div className="w-full h-auto 1st-box-style">
          <div className="w-full h-auto flex sm:flex-row flex-col justify-center align-middle items-center gap-3 pb-6">
            <InputBox
              type={"text"}
              title={"Bangladesh To Destination Country"}
              name={"parcelFromAndToId"}
              value={`${parcelFromAndToId.from.country} - TO - ${parcelFromAndToId.to.country}`}
            />

            <InputBox
              placeholder={"Customar Phone Number"}
              type={"text"}
              title={"Phone Number"}
              name={"customarPhone"}
              value={customarPhone}
              action={(e) => setCustomarPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full h-auto 2st-box-style pb-6">
          <h1 className="text-base font-medium text-gray-800 mb-1">
            Sender Details:
          </h1>
          <div className="w-full h-auto grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-3  pb-3">
            <InputBox
              placeholder={"sender Name"}
              type={"text"}
              title={"Sender Name"}
              name={"senderName"}
              value={parcel?.sender?.name}
              action={(e) =>
                setParcel({
                  ...parcel,
                  sender: { ...parcel.sender, name: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"sender Phone"}
              type={"text"}
              title={"Sender Phone"}
              name={"senderPhone"}
              value={parcel?.sender?.phone}
              action={(e) =>
                setParcel({
                  ...parcel,
                  sender: { ...parcel.sender, phone: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"sender Email"}
              type={"text"}
              title={"Sender Email"}
              name={"senderEmail"}
              value={parcel?.sender?.email}
              action={(e) =>
                setParcel({
                  ...parcel,
                  sender: { ...parcel.sender, email: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"sender Zip Code"}
              type={"text"}
              title={"Sender Zip Code"}
              name={"senderZipCode"}
              value={parcel?.sender?.zipCode}
              action={(e) =>
                setParcel({
                  ...parcel,
                  sender: { ...parcel.sender, zipCode: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"sender Address"}
              type={"text"}
              title={"Sender Address"}
              name={"senderAddress"}
              isTextArea={true}
              value={parcel?.sender?.address}
              action={(e) =>
                setParcel({
                  ...parcel,
                  sender: { ...parcel.sender, address: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className="w-full h-auto 3st-box-style pb-6">
          <h1 className="text-base font-medium text-gray-800 mb-1">
            Reciver Details:
          </h1>
          <div className="w-full h-auto grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-3  pb-3">
            <InputBox
              placeholder={"reciver Name"}
              type={"text"}
              title={"Reciver Name"}
              name={"reciverName"}
              value={parcel?.reciver?.name}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: { ...parcel.reciver, name: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"reciver Phone"}
              type={"text"}
              title={"Reciver Phone"}
              name={"reciverPhone"}
              value={parcel?.reciver?.phone}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: { ...parcel.reciver, phone: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"reciver Email"}
              type={"text"}
              title={"Reciver Email"}
              name={"reciverEmail"}
              value={parcel?.reciver?.email}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: { ...parcel.reciver, email: e.target.value },
                })
              }
            />

            <InputBox
              placeholder={"reciver Address Country"}
              type={"text"}
              title={"Reciver Address Country"}
              name={"reciverAddressCountry"}
              value={parcel?.reciver?.address?.country}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: {
                    ...parcel.reciver,
                    address: {
                      ...parcel.reciver.address,
                      country: e.target.value,
                    },
                  },
                })
              }
            />

            <InputBox
              placeholder={"reciver Address City"}
              type={"text"}
              title={"Reciver Address City"}
              name={"reciverAddressCity"}
              value={parcel?.reciver?.address?.city}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: {
                    ...parcel.reciver,
                    address: {
                      ...parcel.reciver.address,
                      city: e.target.value,
                    },
                  },
                })
              }
            />

            <InputBox
              placeholder={"reciver Address"}
              type={"text"}
              title={"Reciver Address"}
              name={"reciverAddress"}
              value={parcel?.reciver?.address?.address}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: {
                    ...parcel.reciver,
                    address: {
                      ...parcel.reciver.address,
                      address: e.target.value,
                    },
                  },
                })
              }
            />

            <InputBox
              placeholder={"reciver Zip Code"}
              type={"text"}
              title={"Reciver Zip Code"}
              name={"reciverZipCode"}
              value={parcel?.reciver?.address?.zipCode}
              action={(e) =>
                setParcel({
                  ...parcel,
                  reciver: {
                    ...parcel.reciver,
                    address: {
                      ...parcel.reciver.address,
                      zipCode: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>

        <div className="w-full h-auto 3st-box-style pb-1">
          <h1 className="text-base font-medium text-gray-800 mb-1">
            Parcel Details:
          </h1>
          <div className="w-full h-auto grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-3 pb-3">
            <InputBox
              placeholder={"percel Weight"}
              type={"text"}
              title={"percel Weight"}
              name={"percelWeight"}
              value={parcel?.weight}
              action={(e) => {
                setParcel({ ...parcel, weight: e.target.value });
                setWeight(e.target.value);
              }}
            />

            <SelecteSearchBox
              title={"item Type"}
              datas={[
                { id: 1, name: "Gift" },
                { id: 2, name: "Sample" },
              ]}
              titleStyle={"text-base font-medium text-gray-800 pl-2"}
              boxStyle={"px-3 py-[6px] text-sm"}
              setValue={(e) => {
                setParcel({
                  ...parcel,
                  item: { ...parcel.item, types: e.name },
                });
              }}
            />
            <SelecteSearchBox
              title={"Service Type"}
              datas={[
                { id: 1, name: "dhl" },
                { id: 2, name: "fedex" },
                { id: 3, name: "ups" },
                { id: 4, name: "aramex" },
              ]}
              titleStyle={"text-base font-medium text-gray-800 pl-2"}
              boxStyle={"px-3 py-[6px] text-sm"}
              setValue={(e) => {
                setServiceType(e.name);
                setParcel({ ...parcel, serviceType: e.name });
              }}
            />
          </div>
        </div>

        <div className="w-full h-auto pb-6 4st-box-style">
          <h1 className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
            Item List
          </h1>
          <div className="border-[2px] px-2 py-2 rounded-md text-base flex flex-col gap-3">
            <InputBox
              placeholder={"Single Item Name"}
              type={"text"}
              title={"Single Item Name"}
              name={"name"}
              value={itemName}
              action={(e) => {
                setItemName(e.target.value);
              }}
            />

            <div className="w-full h-auto flex justify-end items-end">
              <button
                className="bg-defult-button text-base rounded-md text-white py-2 px-10 text-center w-full sm:w-auto"
                onClick={() => {
                  setParcel({
                    ...parcel,
                    item: {
                      ...parcel.item,
                      list: [
                        { id: Date.now(), name: itemName },
                        ...parcel.item.list,
                      ],
                    },
                  });
                  setItemName("");
                }}
              >
                Add Input Box
              </button>
            </div>

            <div className="w-full h-auto flex flex-col gap-2">
              {parcel?.item?.list?.map((item) => (
                <h1
                  key={item?.id}
                  className="w-full h-auto px-2 py-1 shadow-3xl rounded-md border relative bg-gray-100"
                >
                  {item?.name}
                  <div className="flex gap-2 absolute right-0 z-10 top-[3%]">
                    <MdDeleteOutline
                      className={
                        "w-[30px] h-[30px] p-1 text-red-600 hover:bg-white rounded-md"
                      }
                      onClick={() => {
                        setParcel({
                          ...parcel,
                          item: {
                            ...parcel.item,
                            list: [
                              ...parcel?.item?.list?.filter(
                                (fitem) => fitem.id != item.id
                              ),
                            ],
                          },
                        });
                      }}
                    />
                  </div>
                </h1>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-auto pb-6 4st-box-style">
          <h1 className="w-full h-auto text-base font-medium text-gray-800 pl-2 p-[2px]">
            Weight Calculate
          </h1>
          <div className="border-[2px] px-2 py-2 rounded-md text-base flex flex-col gap-3">
            <div className="w-full h-auto flex flex-col sm:flex-row gap-2">
              <InputBox
                placeholder={"Length"}
                type={"number"}
                title={"Length"}
                name={"name"}
                value={weightCalculate.length}
                action={(e) =>
                  setWeightCalculate({
                    ...weightCalculate,
                    length: e.target.value,
                  })
                }
              />

              <InputBox
                placeholder={"Width"}
                type={"number"}
                title={"Width"}
                name={"name"}
                value={weightCalculate.width}
                action={(e) =>
                  setWeightCalculate({
                    ...weightCalculate,
                    width: e.target.value,
                  })
                }
              />
              <InputBox
                placeholder={"Height"}
                type={"number"}
                title={"Height"}
                name={"name"}
                value={weightCalculate.height}
                action={(e) =>
                  setWeightCalculate({
                    ...weightCalculate,
                    height: e.target.value,
                  })
                }
              />

              <InputBox
                placeholder={"Weight"}
                type={"number"}
                title={"Weight"}
                name={"name"}
                value={weightCalculate.weight}
                action={(e) => {
                  setWeightCalculate({
                    ...weightCalculate,
                    weight: Math.round(e.target.value),
                  });
                }}
              />
            </div>

            <div className="w-full h-auto flex justify-end items-end">
              <button
                className="bg-defult-button text-base rounded-md text-white py-2 px-10 text-center w-full sm:w-auto"
                onClick={() => {
                  if (
                    weightCalculate.width &&
                    weightCalculate.length &&
                    weightCalculate.length &&
                    weightCalculate.weight
                  ) {
                    const cbmWeight =
                      weightCalculate.width *
                      weightCalculate.length *
                      weightCalculate.height;

                    const cbmWeightCalculate = Math.round(
                      cbmWeight / 5000 + 0.5
                    );

                    if (cbmWeightCalculate >= weightCalculate.weight) {
                      setBox([
                        ...box,
                        {
                          id: Date.now(),
                          name: `box weight=${cbmWeightCalculate}. cbm weight(${cbmWeightCalculate}) is calculable because cbm weight is greater than actual weight(${weightCalculate.weight})`,
                          weight: cbmWeightCalculate,
                        },
                      ]);

                      setWeightCalculate({
                        weight: "",
                        length: "",
                        width: "",
                        height: "",
                      });
                    } else if (cbmWeightCalculate <= weightCalculate.weight) {
                      setBox([
                        ...box,
                        {
                          id: Date.now(),
                          name: `box weight=${weightCalculate.weight}. actual weight(${weightCalculate.weight}) is calculable because actual weight is greater than cbm weight(${cbmWeightCalculate})`,
                          weight: cbmWeightCalculate,
                        },
                      ]);

                      setWeightCalculate({
                        weight: "",
                        length: "",
                        width: "",
                        height: "",
                      });
                    }
                  } else {
                    toast.error("Enter Valid Data");
                  }
                }}
              >
                Add Input Box
              </button>
            </div>

            <div className="w-full h-auto flex flex-col gap-2">
              {box?.map((item, index) => (
                <h1
                  key={item?.id}
                  className="w-full h-auto px-2 py-1 shadow-3xl rounded-md border relative bg-gray-100"
                >
                  {index}. {item?.name}
                  <div className="flex gap-2 absolute right-0 z-10 top-[3%]">
                    <MdDeleteOutline
                      className={
                        "w-[30px] h-[30px] p-1 text-red-600 hover:bg-white rounded-md"
                      }
                      onClick={() => {
                        setBox([...box.filter((fitem) => fitem.id != item.id)]);
                      }}
                    />
                  </div>
                </h1>
              ))}
            </div>
          </div>
        </div>
        {
          isEdit && <div className="w-full h-auto flex justify-end items-end py-3">
          <button
            className="bg-defult-button text-base rounded-md text-white py-2 px-12 text-center w-full sm:w-auto"
            onClick={updateHandler}
          >
            Update Order
          </button>
        </div>
        }

{
  !isEdit  && (!nextStep ? (
    <div className="w-full h-auto flex justify-end items-end py-3">
      <button
        className="bg-defult-button text-base rounded-md text-white py-2 px-[62px] text-center w-full sm:w-auto"
        onClick={nextStepHandler}
      >
        Next Step
      </button>
    </div>
  ) : (
    <>
      <div className="w-full h-auto 5st-box-style">
        <h1 className="text-base font-medium text-gray-800 mb-1">
          Payments Details:
        </h1>
        <div className="w-full h-auto grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-3 pb-3">
          <InputBox
            type={"number"}
            title={"Weight Charge Amount"}
            name={"pAmount"}
            value={payment.pAmount}
          />
          <InputBox
            placeholder={
              "If Cash(write Cash) / If Bank of Any Mobile Banking(write Type/Account No)"
            }
            type={"text"}
            title={"Payment Type"}
            name={"paymentType"}
            value={payment.pType}
            action={(e) => {
              setPayment({ ...payment, pType: e.target.value });
            }}
          />

          <InputBox
            placeholder={"Extra Declaration Charge"}
            type={"number"}
            title={"Extra Declaration Charge"}
            name={"extraDeclarationCharge"}
            value={payment.pExtraCharge}
            action={(e) => {
              setPayment({ ...payment, pExtraCharge: e.target.value });
            }}
          />

          <InputBox
            placeholder={"payment Discount"}
            type={"number"}
            title={"Payment Discount"}
            name={"paymentDiscount"}
            value={payment.pDiscount}
            action={(e) => {
              setPayment({ ...payment, pDiscount: e.target.value });
            }}
          />

          <InputBox
            placeholder={"Total Payment Recived From Customar"}
            type={"number"}
            title={"Payment Recived"}
            name={"paymentRecived"}
            value={payment.pRecived}
            action={(e) => {
              setPayment({ ...payment, pRecived: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="w-full h-auto flex justify-end items-end py-3">
        <button
          className="bg-defult-button text-base rounded-md text-white py-2 px-12 text-center w-full sm:w-auto"
          onClick={submitHandler}
        >
          Create Order
        </button>
      </div>
    </>
  ))
}
      </div>
      <AdminDashBoardOrderCreatedPopup orderData={getOrderfullData} />
    </div>
  );
};

export default OrderCreate;
