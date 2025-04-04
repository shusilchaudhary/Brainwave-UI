import { companyLogos } from "../constants"

function CompanyLogo({className}) {
  return (
    <div className={className}>
    CompanyLogo
    <h5 className='tagline mb-6 text-center text-n-1/50'>Helping people create beautiful content at</h5>
    <ul className="flex">
        {companyLogos.map((logo, index) => (
        <li className="flex justify-center items-center flex-1 h-[8.5rem] " key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
        </li>
        ))}
    </ul>
    </div>
  )
}

export default CompanyLogo