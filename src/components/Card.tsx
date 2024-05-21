import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

type Props = {
  title: string;
  desc: string;
  workAs: string;
  company: string;
  stacked: string[];
};

const Card = ({ title, desc, workAs, company, stacked }: Props) => {
  return (
    <div className="w-full bg-[#112240] p-4 text-white cursor-pointer border-2 rounded-md border-primary-dark hover:border-primary-color duration-200">
      <div className="w-full flex justify-between items-center">
        <FolderOutlinedIcon
          sx={{
            fontSize: "32px",
            color: "#57DFC2",
          }}
        />
        <p className="text-xs text-secondary-white font-medium">{company}</p>
      </div>
      <div className="w-full mt-6">
        <h1 className="text-primary-white font-bold text-xl">{title}</h1>
        <p className="text-xs text-secondary-white mt-2 h-12">{desc}</p>
        <p className="text-secondary-white text-xs my-6 font-medium">
          Working as : <span className="text-primary-color">{workAs}</span>
        </p>
        <p className="text-secondary-white text-xs">Developed using :</p>
        <div className="flex flex-wrap gap-4 mt-2">
          {stacked.map((result) => (
            <p key={result} className="text-xs text-secondary-white">
              {result}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
