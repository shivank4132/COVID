import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

 
  data = [
    {
        "question": "What is a coronavirus?",
        "answer": "Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19."
    },
    {
        "question": "What is COVID-19?",
        "answer": "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. "
    },
    {
        "question": "What are the symptoms of COVID-19?",
        "answer": "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention."
    },
    {
        "question": "How does COVID-19 spread?",
        "answer": "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. "
    },
    {
        "question": "How likely am I to catch COVID-19?",
        "answer": "The risk depends on where you  are - and more specifically, whether there is a COVID-19 outbreak unfolding there. For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19. COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go. WHO publishes daily updates on the COVID-19 situation worldwide. "
    },
    {
        "question": "Should I worry about COVID-19?",
        "answer": "Illness due to COVID-19 infection is generally mild, especially for children and young adults. However, it can cause serious illness: about 1 in every 5 people who catch it need hospital care. It is therefore quite normal for people to worry about how the COVID-19 outbreak will affect them and their loved ones. We can channel our concerns into actions to protect ourselves, our loved ones and our communities. First and foremost among these actions is regular and thorough hand-washing and good respiratory hygiene. Secondly, keep informed and follow the advice of the local health authorities including any restrictions put in place on travel, movement and gatherings. "
    },
    {
        "question": "Who is at risk of developing severe illness?",
        "answer": "While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes)  appear to develop serious illness more often than others. "
    },
    {
        "question": "Is COVID-19 the same as SARS?",
        "answer": "No. The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different. SARS was more deadly but much less infectious than COVID-19. There have been no outbreaks of SARS anywhere in the world since 2003."
    },
    {
        "question": "Should I wear a mask to protect myself?",
        "answer": "Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely."
    },
    {
        "question": "Can humans become infected with the COVID-19 from an animal source?",
        "answer": "Coronaviruses are a large family of viruses that are common in animals. Occasionally, people get infected with these viruses which may then spread to other people. For example, SARS-CoV was associated with civet cats and MERS-CoV is transmitted by dromedary camels. Possible animal sources of COVID-19 have not yet been confirmed. To protect yourself, such as when visiting live animal markets, avoid direct contact with animals and surfaces in contact with animals. Ensure good food safety practices at all times. Handle raw meat, milk or animal organs with care to avoid contamination of uncooked foods and avoid consuming raw or undercooked animal products."
    },
    {
        "question": "How long does the virus survive on surfaces?",
        "answer": "It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment). If you think a surface may be infected, clean it with simple disinfectant to kill the virus and protect yourself and others. Clean your hands with an alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose."
    },
    {
        "question": "Is the source of the coronavirus causing COVID-19 known?",
        "answer": "Currently, the source of SARS-CoV-2, the coronavirus (CoV) causing COVID-19 is unknown. All available evidence suggests that SARS-CoV-2 has a natural animal origin and is not a constructed virus. SARS-CoV-2 virus most probably has its ecological reservoir in bats. SARS-CoV-2, belongs to a group of genetically related viruses, which also include SARS-CoV and a number of other CoVs isolated from bats populations. MERS-CoV also belongs to this group, but is less closely related."
    },
    {
        "question": "How did the first human COVID-19 infection occur?",
        "answer": "The first human cases of COVID-19 were identified in Wuhan City, China in December 2019. At this stage, it is not possible to determine precisely how humans in China were initially infected with SARS-CoV-2. However, SARS-CoV, the virus which caused the SARS outbreak in 2003, jumped from an animal reservoir (civet cats, a farmed wild animal) to humans and then spread between humans. In a similar way, it is thought that SARS-CoV-2 jumped the species barrier and initially infected humans, but more likely through an intermediate host, that is another animal species more likely to be handled by humans - this could be a domestic animal, a wild animal, or a domesticated wild animal and, as of yet, has not been identified. Until the source of this virus is identified and controlled, there is a risk of reintroduction of the virus in the human population and the risk of new outbreaks like the ones we are currently experiencing."
    },
    {
        "question": "Is COVID-19 airborne?",
        "answer": "The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands. "
    }
]
  currentTab: number = null;
  constructor() { }

  ngOnInit(): void {

  }

  changeCurrentTab(id: number) {
    this.currentTab = this.currentTab === id ? null : id;
  }

}