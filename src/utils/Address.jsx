import {
  agailjharaArea,
  anawaraArea,
  babuganjArea,
  bagerhatArea,
  baguraArea,
  balaganjArea,
  bandarbanArea,
  barajaliaArea,
  barakalArea,
  bargunaArea,
  barishalCity,
  barishalTownArea,
  barishalUzirpurArea,
  baruraArea,
  basurhatArea,
  begumganjArea,
  bholaArea,
  bianibazarArea,
  bilaichhariArea,
  bishwanathArea,
  boalkhaliArea,
  brahmanbariaArea,
  brahmanparaArea,
  burichangArea,
  chandinaArea,
  chandpurArea,
  chapaiNawabganjArea,
  charAlexganderArea,
  chatkhilArea,
  chattogramCity,
  chattogramSadarArea,
  chhagalnaiaArea,
  chiringgaArea,
  chouddagramArea,
  chuadangaArea,
  comillaArea,
  coxsBazarArea,
  dagonbhuiaArea,
  daudkandiArea,
  davidharArea,
  dhakaCity,
  dhakaNorthArea,
  dhakaSouthArea,
  diginalaArea,
  dinajpurArea,
  eastJoaraArea,
  faridganjArea,
  faridpurArea,
  fatikchhariArea,
  fenchuganjArea,
  feniArea,
  gaibandhaArea,
  gazipurArea,
  goainhatArea,
  gopalganjArea,
  gorakghatArea,
  gouranadiArea,
  habiganjArea,
  hajiganjArea,
  hathazariArea,
  hatiyaArea,
  hayemcharArea,
  homnaArea,
  jakiganjArea,
  jaldiArea,
  jamalpurDewangonjArea,
  jamalpurIslampurArea,
  jamalpurMadarganjArea,
  jamalpurMalandhaArea,
  jamalpurShorishbariArea,
  jamalpurTownArea,
  jarachhariArea,
  jashoreArea,
  jhalokatiArea,
  jhenaidahArea,
  joypurhatArea,
  kachuaArea,
  kalampatiArea,
  kanaighatArea,
  kaptaiArea,
  kasbaArea,
  keranigonjArea,
  khagrachariArea,
  khulnaAlipurArea,
  khulnaAmadeeArea,
  khulnaBatiaghatArea,
  khulnaChalnaBazarArea,
  khulnaCity,
  khulnaDigaliaArea,
  khulnaPaikgachhaArea,
  khulnaSajiaraArea,
  khulnaTerakhadaArea,
  khulnaTownArea,
  kishoreganjArea,
  kurigramArea,
  kushtiaArea,
  kutubdiaArea,
  laksamArea,
  lakshmipurArea,
  lalmonirhatArea,
  langalkotArea,
  laxmichhariArea,
  lohagaraArea,
  longachhArea,
  madaripurArea,
  maguraArea,
  manikchhariArea,
  manikganjShibloyaArea,
  manikganjSingairArea,
  manikganjTownArea,
  marishyaArea,
  matirangaArea,
  matlobganjArea,
  mehendiganjArea,
  meherpurArea,
  mirsharaiArea,
  moulvibazarArea,
  muladiArea,
  munshiganjGajariaArea,
  munshiganjLohajongArea,
  munshiganjSirajdikhanArea,
  munshiganjTownArea,
  muradnagarArea,
  mymensinghCity,
  mymensinghGaforgaonArea,
  mymensinghGouripurArea,
  mymensinghHaluaghatArea,
  mymensinghIsshwargonjArea,
  mymensinghMuktagachaArea,
  mymensinghNandailArea,
  mymensinghPhulpurArea,
  mymensinghTownArea,
  mymensinghTrishalArea,
  nabinagarArea,
  naniachharArea,
  naogaonArea,
  narailArea,
  narayanganjArea,
  natoreArea,
  nawabganjArea,
  netrakonaArea,
  nilphamariArea,
  noakhaliArea,
  pabnaArea,
  panchagarhArea,
  panchhariArea,
  pashurampurArea,
  patiyaArea,
  patuakhaliArea,
  pirojpurArea,
  rajbariBaliakandiArea,
  rajbariPangshaArea,
  rajbariTownArea,
  rajshahiArea,
  rajshahiCity,
  rajsthaliArea,
  ramganjArea,
  ramgharArea,
  ramuArea,
  rangpurArea,
  ranpurCity,
  regions,
  sahebganjArea,
  saidpurArea,
  sarailArea,
  satkaniaArea,
  satkhiraArea,
  savarArea,
  shahrastiArea,
  shariatpurNariaArea,
  shariatpurTownArea,
  sherpurArea,
  sirajganjArea,
  sunamganjArea,
  sylhetCity,
  sylhetSadarArea,
  tangailBasailArea,
  tangailBhuapurArea,
  tangailDeldurArea,
  tangailGhatailArea,
  tangailGopalpurArea,
  tangailKalihatiArea,
  tangailKashkawliaArea,
  tangailMadhupurArea,
  tangailMirzapurArea,
  tangailNagarpurArea,
  tangailSakhipurArea,
  tangailTownArea,
  thakurgaonArea,
  tongiArea,
} from "@/data/address";
import SelecteSearchBox from "./SelecteSearchBox";

export const Region = ({ hiddenTitle, value, setValue, preValue }) => {
  return (
    <div
      className={`w-full h-auto  ${
        !hiddenTitle && "p-2"
      }  mb-1 relative z-[25]`}
    >
      {!hiddenTitle && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2`}
          for={"id"}
        >
          Region <span className="text-[#ce1c34]">*</span>
        </label>
      )}
      <SelecteSearchBox
        titleStyle={"text-base font-medium text-gray-800"}
        boxStyle={"px-3 py-[6px] text-sm"}
        datas={regions.map((region, index) => ({ id: index, name: region }))}
        setValue={(e) => {
          setValue({ ...value, region: e.name });
        }}
        value={preValue}
      />
    </div>
  );
};

export const City = ({ hiddenTitle, value, setValue, datas, preValue }) => {
  return (
    <div
      className={`w-full h-auto  ${!hiddenTitle && "p-2"}  mb-1 relative z-20`}
    >
      {!hiddenTitle && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2`}
          for={"id"}
        >
          City <span className="text-[#ce1c34]">*</span>
        </label>
      )}
      <SelecteSearchBox
        titleStyle={"text-base font-medium text-gray-800"}
        boxStyle={"px-3 py-[6px] text-sm"}
        datas={
          datas
            ? datas.map((data, index) => ({ id: index, name: data }))
            : [{ name: "City" }]
        }
        setValue={(e) => {
          setValue({ ...value, city: e.name });
        }}
        value={preValue}
      />
    </div>
  );
};

export const Area = ({ hiddenTitle, value, setValue, datas, preValue }) => {
  return (
    <div
      className={`w-full h-auto  ${!hiddenTitle && "p-2"}  mb-1 relative z-10`}
    >
      {!hiddenTitle && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2`}
          for={"id"}
        >
          Area <span className="text-[#ce1c34]">*</span>
        </label>
      )}
      <SelecteSearchBox
        titleStyle={"text-base font-medium text-gray-800"}
        boxStyle={"px-3 py-[6px] text-sm"}
        datas={
          datas
            ? datas.map((data, index) => ({ id: index, name: data }))
            : [{ name: "Area" }]
        }
        setValue={(e) => {
          setValue({ ...value, area: e.name });
        }}
        value={preValue}
      />
    </div>
  );
};

export const Address = ({ hiddenTitle, value, setValue }) => {
  return (
    <div className={`w-full h-auto  ${!hiddenTitle && "p-2"}  mb-1`}>
      {!hiddenTitle && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-[10px]`}
          for={"id"}
        >
          Address <span className="text-[#ce1c34]">*</span>
        </label>
      )}
      <textarea
        name="address"
        className="w-full resize-none border-0 h-[35px] px-3 py-[6px] text-sm outline-none rounded-md bg-gray-200"
        placeholder="road,house / village,house"
        value={value.address}
        onChange={(e) => {
          setValue({ ...value, address: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export const MainAddress = ({ isAddress, setIsAddress, title }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center align-middle items-center pt-2">
      {title && (
        <h1 className="block text-gray-700 text-sm font-bold mb-2 ">{title}</h1>
      )}

      <div className="w-full h-auto sm:flex justify-center align-middle items-center">
        <Region
          value={isAddress}
          setValue={setIsAddress}
          preValue={isAddress?.region}
        />

        {isAddress?.region === "Region" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Barishal" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={barishalCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Chattogram" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={chattogramCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Dhaka" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={dhakaCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Khulna" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Mymensingh" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Rajshahi" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={rajshahiCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Ranpur" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={ranpurCity}
            preValue={isAddress?.city}
          />
        )}
        {isAddress?.region === "Sylhet" && (
          <City
            value={isAddress}
            setValue={setIsAddress}
            datas={sylhetCity}
            preValue={isAddress?.city}
          />
        )}
      </div>

      <div className="w-full h-auto sm:flex justify-center align-middle items-center">
        {/* barishal area start  */}
        {/* barishal area start  */}
        {/* barishal area start  */}
        {isAddress?.city === "City" && (
          <Area value={isAddress} setValue={setIsAddress} />
        )}
        {isAddress?.city === "barguna" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bargunaArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "agailjhara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={agailjharaArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "babuganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={babuganjArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "barajalia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={barajaliaArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "gouranadi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gouranadiArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "mehendiganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mehendiganjArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "muladi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={muladiArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "sahebganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sahebganjArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "barishal-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={barishalTownArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "barishal-uzirpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={barishalUzirpurArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "bhola" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bholaArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "jhalokati" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jhalokatiArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "patuakhali" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={patuakhaliArea}
            preValue={isAddress?.area}
          />
        )}

        {isAddress?.city === "pirojpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={pirojpurArea}
            preValue={isAddress?.area}
          />
        )}
        {/* barishal area end  */}
        {/* barishal area end  */}
        {/* barishal area end  */}

        {/* chattogram area start  */}
        {/* chattogram area start  */}
        {/* chattogram area start  */}
        {isAddress?.city === "anawara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={anawaraArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "bandarban" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bandarbanArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "barakal" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={barakalArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "barura" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={baruraArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "basurhat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={basurhatArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "begumganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={begumganjArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "bilaichhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bilaichhariArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "boalkhali" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={boalkhaliArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "brahmanbaria" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={brahmanbariaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "brahmanpara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={brahmanparaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "burichang" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={burichangArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chandina" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chandinaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress.city === "chandpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chandpurArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "char alexgander" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={charAlexganderArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chatkhil" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chatkhilArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chattogram sadar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chattogramSadarArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chhagalnaia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chhagalnaiaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chiringga" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chiringgaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "chouddagram" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chouddagramArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "comilla" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={comillaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "coxs bazar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={coxsBazarArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "dagonbhuia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={dagonbhuiaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "daudkandi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={daudkandiArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "davidhar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={davidharArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "diginala" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={diginalaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "east joara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={eastJoaraArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "faridganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={faridganjArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "fatikchhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={fatikchhariArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "feni" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={feniArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "gorakghat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gorakghatArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "hajiganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={hajiganjArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "hathazari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={hathazariArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress?.city === "hatiya" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={hatiyaArea}
            preValue={isAddress?.area}
          />
        )}
        {isAddress.city === "hayemchar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={hayemcharArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "homna" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={homnaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jaldi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jaldiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jarachhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jarachhariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kachua" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kachuaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kalampati" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kalampatiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kaptai" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kaptaiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kasba" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kasbaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khagrachari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khagrachariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kutubdia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kutubdiaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "laksam" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={laksamArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "lakshmipur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={lakshmipurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "langalkot" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={langalkotArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "laxmichhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={laxmichhariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "lohagara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={lohagaraArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "longachh" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={longachhArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "manikchhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={manikchhariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "marishya" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={marishyaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "matiranga" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={matirangaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "matlobganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={matlobganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mirsharai" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mirsharaiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "muradnagar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={muradnagarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "nabinagar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={nabinagarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "naniachhar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={naniachharArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "noakhali" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={noakhaliArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "panchhari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={panchhariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "pashurampur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={pashurampurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "patiya" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={patiyaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rajsthali" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rajsthaliArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "ramganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={ramganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "ramghar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={ramgharArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "ramu" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={ramuArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rangamati" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rangamatiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rangunia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={ranguniaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "raozan" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={raozanArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "raypur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={raypurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sandwip" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sandwipArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sarail" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sarailArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "satkania" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={satkaniaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "senbag" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={senbagArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "shahrasti" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={shahrastiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sitakunda" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sitakundaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sonagazi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sonagaziArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "teknaf" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={teknafArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "ukhia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={ukhiaArea}
            preValue={isAddress.area}
          />
        )}

        {/* chattogram area end  */}
        {/* chattogram area end  */}
        {/* chattogram area end  */}

        {/* dhaka area start  */}
        {/* dhaka area start  */}
        {/* dhaka area start  */}
        {isAddress.city === "dhaka-north" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={dhakaNorthArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "dhaka-south" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={dhakaSouthArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "faridpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={faridpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "gazipur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gazipurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "gopalganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gopalganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "keranigonj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={keranigonjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kishoreganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kishoreganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "madaripur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={madaripurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "manikganj-shibloya" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={manikganjShibloyaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "manikganj-singair" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={manikganjSingairArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "manikganj-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={manikganjTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "munshiganj-gajaria" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={munshiganjGajariaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "munshiganj-lohajong" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={munshiganjLohajongArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "munshiganj-sirajdikhan" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={munshiganjSirajdikhanArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "munshiganj-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={munshiganjTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "narayanganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={narayanganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "narsingdi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={narsingdiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "nawabganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={nawabganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rajbari-baliakandi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rajbariBaliakandiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rajbari-pangsha" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rajbariPangshaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rajbari-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rajbariTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "savar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={savarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "shariatpur-naria" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={shariatpurNariaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "shariatpur-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={shariatpurTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-basail" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailBasailArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-bhuapur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailBhuapurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-deldur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailDeldurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-ghatail" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailGhatailArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-gopalpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailGopalpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-kalihati" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailKalihatiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-kashkawlia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailKashkawliaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-madhupur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailMadhupurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-mirzapur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailMirzapurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-nagarpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailNagarpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-sakhipur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailSakhipurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tangail-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tangailTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "tongi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={tongiArea}
            preValue={isAddress.area}
          />
        )}
        {/* dhaka area end  */}
        {/* dhaka area end  */}
        {/* dhaka area end  */}

        {/* khulna area start  */}
        {/* khulna area start  */}
        {/* khulna area start  */}
        {isAddress.city === "bagerhat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bagerhatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "chuadanga" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chuadangaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jashore" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jashoreArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jhenaidah" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jhenaidahArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-alipur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaAlipurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-amadee" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaAmadeeArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-batiaghat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaBatiaghatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-chalna bazar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaChalnaBazarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-digalia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaDigaliaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-paikgachha" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaPaikgachhaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-sajiara" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaSajiaraArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-terakhada" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaTerakhadaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "khulna-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={khulnaTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kushtia" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kushtiaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "magura" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={maguraArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "meherpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={meherpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "narail" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={narailArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "satkhira" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={satkhiraArea}
            preValue={isAddress.area}
          />
        )}
        {/* khulna area end */}
        {/* khulna area end */}
        {/* khulna area end */}

        {/* mymensingh area start  */}
        {/* mymensingh area start  */}
        {/* mymensingh area start  */}
        {isAddress.city === "jamalpur-dewangonj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurDewangonjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jamalpur-islampur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurIslampurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jamalpur-madarganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurMadarganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jamalpur-malandha" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurMalandhaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jamalpur-shorishbari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurShorishbariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jamalpur-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jamalpurTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-gaforgaon" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghGaforgaonArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-gouripur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghGouripurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-haluaghat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghHaluaghatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-isshwargonj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghIsshwargonjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-muktagacha" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghMuktagachaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-nandail" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghNandailArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-phulpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghPhulpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-town" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghTownArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "mymensingh-trishal" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={mymensinghTrishalArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "netrakona" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={netrakonaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sherpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sherpurArea}
            preValue={isAddress.area}
          />
        )}
        {/* mymensingh area start  */}
        {/* mymensingh area start  */}
        {/* mymensingh area start  */}

        {/* rajshahi area start  */}
        {/* rajshahi area start  */}
        {/* rajshahi area start  */}
        {isAddress.city === "bagura" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={baguraArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "chapai nawabganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={chapaiNawabganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "joypurhat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={joypurhatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "naogaon" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={naogaonArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "natore" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={natoreArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "pabna" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={pabnaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rajshahi" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rajshahiArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sirajganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sirajganjArea}
            preValue={isAddress.area}
          />
        )}
        {/* rajshahi area end  */}
        {/* rajshahi area end  */}
        {/* rajshahi area end  */}

        {/* ranpur area start  */}
        {/* ranpur area start  */}
        {/* ranpur area start  */}
        {isAddress.city === "dinajpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={dinajpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "gaibandha" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gaibandhaArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kurigram" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kurigramArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "lalmonirhat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={lalmonirhatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "nilphamari" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={nilphamariArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "panchagarh" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={panchagarhArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "rangpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={rangpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "saidpur" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={saidpurArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "thakurgaon" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={thakurgaonArea}
            preValue={isAddress.area}
          />
        )}
        {/* ranpur area end  */}
        {/* ranpur area end  */}
        {/* ranpur area end  */}

        {/* sylhet area start  */}
        {/* sylhet area start  */}
        {/* sylhet area start  */}
        {isAddress.city === "balaganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={balaganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "bianibazar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bianibazarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "bishwanath" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={bishwanathArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "fenchuganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={fenchuganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "goainhat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={goainhatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "gopalganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={gopalganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "habiganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={habiganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "jakiganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={jakiganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "kanaighat" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={kanaighatArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "moulvibazar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={moulvibazarArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sunamganj" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sunamganjArea}
            preValue={isAddress.area}
          />
        )}
        {isAddress.city === "sylhet sadar" && (
          <Area
            value={isAddress}
            setValue={setIsAddress}
            datas={sylhetSadarArea}
            preValue={isAddress.area}
          />
        )}
        {/* sylhet area end  */}
        {/* sylhet area end  */}
        {/* sylhet area end  */}

        {/* address input box start  */}
        {/* address input box start  */}
        <Address value={isAddress} setValue={setIsAddress} />
        {/* address input box end  */}
        {/* address input box end  */}
      </div>
    </div>
  );
};
