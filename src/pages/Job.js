import React from "react"
import Footer from "../components/Footer"
import JobBox from "../components/JobBox"
import JobForm from "../components/JobForm"
import Navbar from "../components/Navbar"
import "../css/jobs.css"
const Job = () => {
  const jobs = [
    {
      title: "Sales Coordinator",
      description:
        "Las Vegas DMC is the market-leading DMC Destination Management Company Management, delivering unique experiences that move you out of your seats, minds and businesses forward. Passionately building, rich and memorable moments, Las Vegas DMC works collaboratively with clients to craft creative, multi-sensory attendee journeys to leave a lasting impression.",
      responsibilities: [
        "Generate client proposals, budgets and cover letters as requested",
        "Draft budgets in excel for all proposal components including events, teambuilding, etc.",
        "Maintain accurate and updated service proposals",
        "Call vendors to book reservations or place on hold when proposal is being written",
        "Plan sales site inspections and coordinate all vendor details, costs, and site reconciliations",
        "Coordinate client gifts and collateral for sites, planning visits, and program operations",
        "Coordinate clients follow up for Sales Managers Sales trips, trade shows, meetings",
        "Assist annual rates/tariff presented to major clients",
        "Maintain client information in Salesforce",
        "Support National Sales Director in logistics for sales site inspections and key account FAMs.",
        "Receive, review, and qualify all incoming new vendor information and pricing",
        "Work with sales to develop new products to offer to clients build into proposals",
        "Remain current in local destination events, happenings, to trigger key communication opportunities to clients",
        "Collaborate to contract suppliers, reconfirm, and manage on site during events",
        "Work events on site as required",
      ],
      qualification: [
        "Minimum 1-3 years administrative experience",
        "Strong administrative and organizational skills with aptitude for attention to detail",
        "Experience in the hospitality industry in the sales or conference services arena",
        "Exceptional written and verbal communication skills",
        "Prior experience in writing proposals",
        "Experience with budget development and management",
        "Able to juggle tasks and set priorities on a daily, and weekly basis as needed",
        "Prior experience in meeting client deadlines",
        "Knowledge of region destination and venues",
        "Preferred knowledge of office machines (fax, copier, color printer, etc.)",
      ],
      capabilities:
        "Creative Event Design + Production; Local Excursions; Tours; Teambuilding; Offsite Events; Dine Arounds; Digital + Hybrid Programming; Health + Safety Logistics; CSR + Giveback Initiatives; Sustainable Planning Services; Transportation Logistics; Staffing; Content Creation; Graphic Design + Branding; Gifting.",
    },
    {
      title: "Director of Sales",
      description:
        "Las Vegas DMC is the market-leading DMC Destination Management Company Management, delivering unique experiences that move you out of your seats, minds and businesses forward. Passionately building, rich and memorable moments, Las Vegas DMC works collaboratively with clients to craft creative, multi-sensory attendee journeys to leave a lasting impression.",
      responsibilities: [
        "Develop and execute Hotel Partnership acquisition strategy in conjunction with Vice President, Strategic Partnerships. ",
        "Lead/Direct consistent hotel outreach plan for new and existing hotel partnerships and reporting of regional results on a quarterly basis. ",
        "Determine annual Sales goals in partnership with Regional Leadership and Chief Growth Officer. ",
        "Manage Regional Sales Managers to ensure goals are achieved. ",
        "Develop and maintain sound employee relations at all levels to include counseling and disciplining employees, planning, monitoring, and appraising job results. ",
        "Forecasting expected sales volume and profit for existing and new products. ",
        "Implement sales programs by developing field sales action plans to ensure generation and growth within assigned territory. ",
        "Maintain sales volume, product mix, and selling price by keeping current with supply and demand, changing trends, economic indicators, and competitors. ",
        "Maintain professional and technical knowledge by attending educational workshops; reviewing professional publications; establishing personal networks; participating in professional societies. ",
        "Oversee `closing` program contracts with clients, qualifying leads and developing program ideas for leads. ",
        "Develop travel budgets and schedules for regional leader's approval as well as monitoring client marketing budget. ",
        "Represent Las Vegas DMC at key association and industry groups through membership to include tradeshows and local networking events to meet potential clients. ",
        "Responsible for remaining current and knowledgeable of industry trends and developments. ",
        "Contribute to team effort by accomplishing related results as needed. ",
        "Perform other duties and responsibilities as required or requested. ",
      ],
      qualification: [
        "Minimum 5 years' experience in sales Leadership, specifically in hotel sales, DMC, incentive travel, event management, convention services, hospitality, or related field.",
        "Bachelor's degree in Business, Management, Marketing, Hospitality, or related area.",
        "Effective sales leader, with notable experience developing strategic partnerships, leading and directing sales teams and deep industry relationships.",
        "Destination knowledge in the areas geographically located in the surrounding areas of assigned office(s).",
        "Record of success in sales and marketing strategies, accomplishing goals aligned with organizational strategic planning, including annual goals and gross profit.",
        "Ability to provide solutions and/or resources to challenges/opportunities that may arise during the development and sale of programs.",
        "Ability to develop and maintain strong supplier/partner relations at venue and community locations, including negotiation on behalf of clients for best locations, terms, etc.",
        "Ability to professionally represent Las Vegas DMC at client meetings, site inspections, industry and association functions, supplier/partner meetings, and staff meetings.",
        "Proven experience in the management of a Customer Relationship Platform (CRM) including training, motivating, and regular job appraisals.",
        "Strategic planning experience, including analyzing trends, establishing sales goals and profit margins.",
        "Expertly proficient in Excel, Word, Power Point, Outlook, and a CRM Platform.",
        "Must be able to read, analyze, and interpret client proposal requirements, RFPs, contracts, financial reports, and other legal documents.",
        "Must be able to respond to common inquiries or complaints from clients, supplier/partners, and co-workers.",
        "Must be able to effectively present information and respond to questions from clients, supplier partners, and hoteliers.",
        "Must be able to prepare sales reports, using complex calculations, for sales meetings and client presentations.",
      ],
      capabilities:
        "Creative Event Design + Production; Local Excursions; Tours; Teambuilding; Offsite Events; Dine Arounds; Digital + Hybrid Programming; Health + Safety Logistics; CSR + Giveback Initiatives; Sustainable Planning Services; Transportation Logistics; Staffing; Content Creation; Graphic Design + Branding; Gifting.",
    },
    {
      title: "Director of Events",
      description:
        "Las Vegas DMC is the market-leading DMC Destination Management Company Management, delivering unique experiences that move you out of your seats, minds and businesses forward. Passionately building, rich and memorable moments, Las Vegas DMC works collaboratively with clients to craft creative, multi-sensory attendee journeys to leave a lasting impression.",
      responsibilities: [
        "Responsible for strategic staffing throughout the region - hiring, training, setting performance goals and overall management of Event Producer regional team.",
        "Responsible for staff training on all Las Vegas DMC program standards and processes, including Health & Safety.",
        "Conduct reviews, set performance goals, perform disciplinary actions, and make recommendations on compensation and incentive schedules as needed for staff.",
        "Manage high profile accounts with budgets ranging from $500K-$3M events, overseeing post con meetings for large programs.",
        "Develop regional supplier/partner business relationships, negotiating contracts and setting terms of contracts.",
        "Lead Performance Team meetings in the region alongside other regional leaders, reviewing all program particulars, and client needs per program file.",
        "Represent the Company and its affiliated brands at industry functions.",
      ],
      qualification: [
        "Desired 7 or more years' experience leading teams, operating and managing large complex program in events industry.",
        "Bachelor's degree in Business Management, Project Management, Hospitality Management, or related degree beneficial",
        "Track record of managing and motivating large teams.",
        "Excellent interpersonal and communication skills with a diverse group of clients, supplier/partners and employees.",
        "Must be able to work well with all levels of Las Vegas DMC management and staff, venue staff, clients and supplier/partners.",
        "Must be able to work flexible hours including weekends, evenings and holidays.",
        "Ability to travel to venue locations, client sites, and Las Vegas DMC offices as needed.",
        "Must be highly organized and be able to work within program and project deadlines daily.",
        "Ability to read, analyze, and interpret client proposal requirements, contracts, financial reports, and other legal documents.",
        "Ability to respond to common inquiries or complaints from clients, supplier partners, and co-workers.",
        "Ability to prepare reports and write business correspondence.",
        "Ability to effectively present information and respond to questions from clients, supplier partners, and hoteliers.",
        "Ability to calculate program costs, percentages, discounts, profit margins, and perform other mathematical requirements involved in a proposal.",
        "Ability to anticipate and deal with problems involving few concrete variables in a typical office situation.",
      ],
      capabilities:
        "Creative Event Design + Production; Local Excursions; Tours; Teambuilding; Offsite Events; Dine Arounds; Digital + Hybrid Programming; Health + Safety Logistics; CSR + Giveback Initiatives; Sustainable Planning Services; Transportation Logistics; Staffing; Content Creation; Graphic Design + Branding; Gifting.",
    },
  ]
  function convert(str) {
    let arr = str.split(".")
    return arr
  }
  const st =
    'Develop and execute Hotel Partnership acquisition strategy in conjunction with Vice President, Strategic Partnerships.Lead/Direct consistent hotel outreach plan for new and existing hotel partnerships and reporting of regional results on a quarterly basis.Determine annual Sales goals in partnership with Regional Leadership and Chief Growth Officer.Manage Regional Sales Managers to ensure goals are achieved.Develop and maintain sound employee relations at all levels to include counseling and disciplining employees, planning, monitoring, and appraising job results.Forecasting expected sales volume and profit for existing and new products.Implement sales programs by developing field sales action plans to ensure generation and growth within assigned territory.Maintain sales volume, product mix, and selling price by keeping current with supply and demand, changing trends, economic indicators, and competitors.Maintain professional and technical knowledge by attending educational workshops; reviewing professional publications; establishing personal networks; participating in professional societies.Oversee "closing" program contracts with clients, qualifying leads and developing program ideas for leads.Develop travel budgets and schedules for regional leaders approval as well as monitoring client marketing budget.Represent Las Vegas DMC at key association and industry groups through membership to include tradeshows and local networking events to meet potential clients.Responsible for remaining current and knowledgeable of industry trends and developments.Contribute to team effort by accomplishing related results as needed.Perform other duties and responsibilities as required or requested.'

  return (
    <div className="page">
      <Navbar />
      <div className="jobs_section section_mt">
        <div>
          <h4>WE ARE GROWING</h4>
        </div>
        <div>
          <p>
            We're looking for talented people who are constantly pursuing the
            next big thing. Apply to join our stellar team.
          </p>
        </div>
      </div>
      {jobs.map((job, index) => {
        return (
          <JobBox
            title={job.title}
            description={job.description}
            responsibilities={job.responsibilities}
            qualification={job.qualification}
            capabilities={job.capabilities}
            key={index}
          />
        )
      })}
      <JobForm />
      <Footer />
    </div>
  )
}

export default Job
