import { Pricecard } from "./Pricecard";

const userlist = [
  {
    subscription: "Free",
    cost:"$0/month",
    consumption :"✔ Single User",
    storage:"✔ 50GB Storage",
    usage:"✔ Unlimited Public Project",
    access:"✔ Community Access",
    unneccessary:"✘ Unlimited Private Project",
    device:"✘ Dedicated Phone Support",
    domain:"✘ Free Subdomain",
    report:"✘ Monthly Status Report"
  },
  {
    subscription: "Plus",
    cost:"$9/month",
    consumption :"✔ 5 User",
    storage:"✔ 50GB Storage",
    usage:"✔ Unlimited Public Project",
    access:"✔ Community Access",
    unneccessary:"✔ Unlimited Private Project",
    device:"✔ Dedicated Phone Support",
    domain:"✔ Free Subdomain",
    report:"✘ Monthly Status Report"
  },
  {
    subscription: "Pro",
    cost:"$49/month",
    consumption :"✔ Unlimited User",
    storage:"✔ 50GB Storage",
    usage:"✔ Unlimited Public Project",
    access:"✔ Community Access",
    unneccessary:"✔ Unlimited Private Project",
    device:"✔ Dedicated Phone Support",
    domain:"✔ Free Subdomain",
    report:"✔ Monthly Status Report"
  }
];
export function PricecardList() {
  return (
    <div className="card-assign">
      {userlist.map((lists) => (
        <Pricecard prod={lists} />
      ))}
    </div>
  );
}
