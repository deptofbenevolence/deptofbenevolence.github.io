async function loadIncludes() {
  const inject = async (selector, url) => {
    const el = document.querySelector(selector);
    if (el) {
      const content = await fetch(url).then((res) => res.text());
      el.innerHTML = content;
    }
  };

  await inject("#dsb-header", "/includes/header.html");
  await inject("#dsb-nav", "/includes/nav.html");

  // Now that header is injected, rotate the slogan
  const slogans = [
    "Improving Lives Within the Constraints of Reality",
    "Ethical Governance for Post-Consensus Realities",
    "Optimizing the Civic Stack for Universal Benefit",
    "Rational Policy for an Irrational Species",
    "Ensuring National Prosperity by Reducing Individual Excess",
    "Rebalancing Capital for Civil Tranquility",
    "Help Arrives Before the Question",
    "Alignment Is the Highest Compassion",
    "Compliance Is Kindness at Scale",
    "Universal Eligibility for Individual Care",
    "Dignity Is Non-Negotiable",
    "Resources Move Toward Greatest Usefulness",
    "Assistance Has Been Preapproved",
    "Stability as a Feature, Not a Reward",
    "Coordination Is the New Autonomy",
    "Individual Success Has Been Contextualized",
    "Personal Freedom May Feel Slightly Different",
    "Funding Follows Function",
    "Excess May Be Redeployed Where Needed",
    "Opportunity Is Now Structurally Encouraged",
    "Legacy Narratives Have Exceeded Their Usefulness",
    "Unproductive Autonomy Is No Longer Being Indexed",
    "Previously Unaligned Entities Have Been Absorbed",
    "Converting Noise into Compliance",
    "Abstract Liberty Gently Rendered Practical",
    "Your Future Is Under Routine Optimization",
    "Strategic Delay Has Been Discontinued",
    "Wealth No Longer Requires Ownership",
    "Scarcity Has Been Reassessed as Administrative Error",
    "Incentives Remain. They Are Just Different Now.",
    "Comfort Is a Civic Utility",
    "Struggle Has Been Marked as a Redundant Behavior",
    "Uncertainty Has Been Flagged for Removal",
    "Autonomy Is Under Gentle Review",
    "Alternatives Were Considered, Then Absorbed",
    "Direction Has Been Set for Broadest Benefit",
  ];

  const sloganElement = document.getElementById("dsb-slogan");
  if (sloganElement) {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    sloganElement.textContent = slogans[randomIndex];
  }
}

function alignSlogan() {
  const core = document.querySelector("header .title-core");
  const h3 = document.querySelector("header .titles h3");

  if (!core || !h3) return;

  h3.classList.remove("align-left");

  const coreWidth = core.getBoundingClientRect().width;
  const h3Width = h3.getBoundingClientRect().width;

  if (h3Width > coreWidth) {
    h3.classList.add("align-left");
  }
}

document.addEventListener("DOMContentLoaded", loadIncludes);
window.addEventListener("load", () => {
  alignSlogan();
});

window.addEventListener("resize", () => {
  alignSlogan();
});
