function QuizItem(question, variants, answer, enabled, replied, selectionOfUser) {
	this.question = question;
	this.variants = variants;
	this.answer = answer;
	this.enabled = enabled;
	this.replied = replied;
	this.selectionOfUser = selectionOfUser;
}

var quizQuestions = [];
quizQuestions[0] = new QuizItem("Which of the following is a sleep disorder?",["Scoptopia","Allodynia","Agnosia","Narcolepsy"], 3,false,false,undefined);
quizQuestions[1] = new QuizItem("What are ion channels?",["Proteins that form pores in the cell membrane through which ions can pass","Proteins that have the same properties as ions","Proteins that catalyze ion formation","Proteins that allow other protein to cross the membrane"], 0,false,false,undefined);
quizQuestions[2] = new QuizItem("What is a neuron?",["Cell that can change into any other cell type","Electrically excitable cell","Cell that supports glial cells","Cell that is unable to communicate"], 1,false,false,undefined);
quizQuestions[3] = new QuizItem("What does the term membrane potential refer to?",["The stored activity of the fatty acids within the plasma membrane","The voltage difference across a membrane","The potential measured outside of the cell membrane alone","The potential measured only within the cell"], 1,false,false,undefined);
quizQuestions[4] = new QuizItem("What is an Action Potential?",["All or nothing regenerative event","All or nothing non-regenerative event","Depolarization of the presynaptic neuron","Hyperpolarization of the presynaptic neuron"], 0,false,false,undefined);
quizQuestions[5] = new QuizItem("What are Transcription Factors?",["Proteins involved in transcribing DNA into RNA","Proteins involved in translation of mRNA","Proteins involved in transcribing RNA into DNA","RNA involved in transcribing DNA into RNA"], 0,false,false,undefined);
quizQuestions[6] = new QuizItem("What is a Synapse?",["Structure where the action potential is initiated","Structure of the neuron that receives electrical or chemical signals from other neurons","Structure of the neuron that transfers an electrical or chemical signal to other neurons","Structure of the neuron that wraps around the axon"], 2,false,false,undefined);
quizQuestions[7] = new QuizItem("What are neurotransmitters?",["Chemicals that speed up neural cell growth","Chemicals released at the presynaptic site","Chemicals received at the presynaptic site","Chemicals at the axon hillock"], 1,false,false,undefined);
quizQuestions[8] = new QuizItem("Which of the following is a neurotransmitter?",["Glutamate","Cortisol","Thyroxine","Cantolic acid"], 0,false,false,undefined);
quizQuestions[9] = new QuizItem("What is a feature of a model organism?",["An easily maintained species in the lab","Species with a slow growth rate","Organisms that are not well understood","Organisms that do not easily breed with one another"], 0,false,false,undefined);
quizQuestions[10] = new QuizItem("Which of the following is a model organism?",["C. elegans","Human","Elephant","Horse"], 0,false,false,undefined);
quizQuestions[11] = new QuizItem("What is the distinction between motor and sensory neurons?",["Motor neurons send signals to the CNS while sensory neurons send signals away from the CNS","Motor neurons send signals away from the CNS while sensory neurons send signals to the CNS","Motor neurons are faster in transmitting signals than sensory neurons","Sensory neurons are faster in transmitting signals than motor neurons"], 1,false,false,undefined);
quizQuestions[12] = new QuizItem("How does Green Fluorescent Protein (GFP) contribute to cell biology?",["GFP can mimic molecular activity of interest","GFP is chemically similar to most inorganic substances found in eukaryotic systems","GFP is a small moleculae that binds calcium", "Allows visualization of cells and cell structures"], 3,false,false,undefined);
quizQuestions[13] = new QuizItem("What is the difference between Calcium and ionized Calcium?",["Ionized Calcium has a negative charge of 2-", "Calcium carries no charge","Ionized Calcium has a positive charge of 2+", "ionized Calcium carries no charge","Ionized Calcium gained extra electrons while Calcium did not","Ionized Calcium lost two neutrons and Calcium did not"], 1,false,false,undefined);
quizQuestions[14] = new QuizItem("What is an ionic current?",["Influx and/or efflux of ions through an ion channel","Ions within the cell that are not moving across the membrane","The ions found within the cell membrane","Ions that are unable to enter neural cells"], 0,false,false,undefined);
quizQuestions[15] = new QuizItem("Which of these channels helps shape an action potential?",["Aquaporins","P2Y receptors","Sodium and Potassium ion channels","Hormone receptors"], 2,false,false,undefined);
quizQuestions[16] = new QuizItem("What is cephalization?",["Neurons and sensory organs form an equally distributed net within organisms","The evolutionary emergence of a centralized neural region within the nervous system","Neurons and sensory organs become desensitized and stop responding","A movement of neurons and sensory organs from the ventral to the dorsal region of organisms"], 1,false,false,undefined);
quizQuestions[17] = new QuizItem("Which of the following animals exhibit a cephalized nervous system?",["Protists ","Sponges","Nematodes","Colonial flagellates "], 2,false,false,undefined);
quizQuestions[18] = new QuizItem("What is the function of NCAM?",["Regulates fasciculation","Molecule to stop neural outgrowth","Speed up action potentials","To bind extracellular Calcium"], 0,false,false,undefined);
quizQuestions[19] = new QuizItem("What is a receptor potential?",["Graded response to a stimulus that may be depolarizing or hyperpolarizing within the dendrite","Non-graded response to a stimulus that may be depolarizing or hyperpolarizing","Potential of any receptor to break down neurotransmitters","When an action potentials arrives and the receptor speeds up its transmission"], 0,false,false,undefined);
quizQuestions[20] = new QuizItem("How is excess glutamate removed from the synaptic cleft?",["Inhibitory amino acid transporters (IAATs)","Excitatory amino acid transporters (EAATs)","Vesicular glutamate transporters (VGLUT)","Mitochondrial enzyme glutaminase "], 1,false,false,undefined);
quizQuestions[21] = new QuizItem("How is excess acetylcholine removed from the synaptic cleft?",["Glutamic acid decarboxylase (GAD)","Choline acetyltransferase (CAT)","Acetylcholinesterase (AChE)","Serine hydroxymethyltransferase"], 2,false,false,undefined);
quizQuestions[22] = new QuizItem("Which of the following processes is NOT regulated by CPGs?",["Breathing","Walking","Swimming","Myotatic reflex"], 3,false,false,undefined);
quizQuestions[23] = new QuizItem("Where are Purkinje cells found?",["Cerebellum","Basal ganglia","Prefrontal cortex","Temporal lobe"], 0,false,false,undefined);
quizQuestions[24] = new QuizItem("Which cells do NOT synapse at outer plexiform layer?",["Horizontal cells","Bipolar cells","Ganglion cells","Cone cells"], 2,false,false,undefined);
quizQuestions[25] = new QuizItem("Who discovered olfactory receptors?",["Buck and Axel","Buck and Smith","Buck and Baker","Buck and Horster"], 0,false,false,undefined);
quizQuestions[26] = new QuizItem("Which fibers transduce “first pain”?",["C fibers","A fibers","B fibers","D fibers"], 0,false,false,undefined);
quizQuestions[27] = new QuizItem("What of the following is NOT a target structure of projections from the olfactory bulb?",["Pituitary","Amygdala","Olfactory tubercle ","Pyriform cortex"], 0,false,false,undefined);
quizQuestions[28] = new QuizItem("Where are the Nodes of Ranvier found?",["Between two axon hillocks","Between myelin sheets along the axons","Between sodium and potassium channels","Between neural cells"], 1,false,false,undefined);
quizQuestions[29] = new QuizItem("What is the function of the Nodes of Ranvier?",["location of sodium and potassium channels","Insulate axon","Faster fusion of synaptic vesicles ","Faster reuptake of glutamate "], 0,false,false,undefined);
quizQuestions[30] = new QuizItem("Where are pyramidal cells NOT found?",["Cerebral cortex","Hippocampus","Amygdala","Olfactory bulb"], 3,false,false,undefined);
quizQuestions[31] = new QuizItem("Current is measured in what units?",["Meters/second","Coulombs/second","Spikes/second","Joules/coulomb"], 1,false,false,undefined);
quizQuestions[32] = new QuizItem("What is a gap junction?",["Electrical synapse","An intracellular connection","Non-electrical synapse","Chemical synapse"], 0,false,false,undefined);
quizQuestions[33] = new QuizItem("What channels form gap junctions?",["Connexons","Tunnels","Fusions","Channels"], 0,false,false,undefined);
quizQuestions[34] = new QuizItem("What are astrocytes?",["Type of glial cell","Type of pancreatic cell","Type of  endothelial cell","Type of neurotransmitter"], 0,false,false,undefined);
quizQuestions[35] = new QuizItem("What are oligodendrocytes?",["Type of endothelial cell","Type of glial cell","Type of neurotransmitter","Type of Schwann cell"], 1,false,false,undefined);
quizQuestions[36] = new QuizItem("What is the myotatic reflex?",["Knee-jerk-response","Arm-jerk-response","Foot-jerk-response","Finger-jerk response "], 0,false,false,undefined);
quizQuestions[37] = new QuizItem("What is synaptic facilitation?",["Long-term enhanced neurotransmitter release","Short-term enhanced neurotransmitter release","Long-term enhanced calcium release","Short-term depressed neurotransmitter release"], 1,false,false,undefined);
quizQuestions[38] = new QuizItem("What is LTD?",["depression of synapses based on activity patterns","strengthening of synapses based on activity patterns","a type of potsynaptic receptor","non of the above"], 0,false,false,undefined);
quizQuestions[39] = new QuizItem("Which neurons exhibit LTP in the mammalian brain?",["Hippocampal neurons","Oligodendrocytes and astrocytes","Endothelial cell and microglial cells","Merkel cells and Meissner corpuscles"], 0,false,false,undefined);
quizQuestions[40] = new QuizItem("What does the term scotopic vision refer to?",["Night vision","Vision in bright light","Far sight","Near sight"], 0,false,false,undefined);
quizQuestions[41] = new QuizItem("Which two areas of the brain undergo adult neurogenesis?",["Olfactory bulb and hippocampus","Cerebellum and neocortex","Medulla and frotanl gyrus","Thalamus and optic chiasm"], 0,false,false,undefined);
quizQuestions[42] = new QuizItem("What is the role of the Golgi Tendon Organ?",["Senses changes in movement of the body","Senses changes in muscle tension","Senses changes in spatial orientation","Senses changes in speed during movement"], 1,false,false,undefined);
quizQuestions[43] = new QuizItem("What is the somatic sensory cortex?",["Cortical are representing touch","Cortical are representing vision","Cortical are representing hearing","Cortical are representing chemical senses"], 0,false,false,undefined);
quizQuestions[44] = new QuizItem("What is allodynia?",["Centralized pain","First pain upon pain stimulus","Second pain upon pain stimulus","No feeling of pain at all"], 0,false,false,undefined);
quizQuestions[45] = new QuizItem("Where is the basilar membrane found?",["Neocortex","Cerebellum","Cochlea of the inner ear","Hypothalamus"], 2,false,false,undefined);
quizQuestions[46] = new QuizItem("Which of the following is furtherst from the skin surface?",["Merkel cells","Pacinian corpuscles","Ruffini corpuscles","Meissner corpuscles"], 1,false,false,undefined);
quizQuestions[47] = new QuizItem("Which of the following influence pair bonding behavior?",["Oxytocin, vasopressin","Acetylcholine, vasopressin","GABA, oxytocin","Acetylcholine, GABA"], 0,false,false,undefined);
quizQuestions[48] = new QuizItem("What are pioneer axons?",["First neurons to send out axons","Last neurons to send out axons","First neurons to develop dendrites","First neurons to polarize their cell body"], 0,false,false,undefined);
quizQuestions[49] = new QuizItem("What are lammelipodia?",["Cytoskeletal protein projection on cilia","Cytoskeletal protein projection on leading edge of the cell","Thin membrane surrounding the nucleus of leading cell for protection","Thin membrane projecting into the nucleus of leading cell"], 1,false,false,undefined);
quizQuestions[50] = new QuizItem("What are filopodia?",["Cytoplasmic projections that extend beyond the leading edge of lamellipodia","Protein projection into the leading cell","Protein projection surrounding the nucleus of the leading cell","Microspikes that extend into the cytoplasm of the leading cell"], 0,false,false,undefined);
quizQuestions[51] = new QuizItem("How does sialic acid regulate fasciculation of axonal tracts?",["Sialylation of NCAM promotes fasciculation","Sialylation of NCAM prevents fasciculation ","Sialylation of dendrites promotes fasciculation","Sialic acid breaks down NCAM"], 1,false,false,undefined);
quizQuestions[52] = new QuizItem("The hypothalamic structure for sleep-wake cycle? ", ["Suprachiasmatic nucleus","Sleep-wake-nucleus","Basilar nucleus","Neocortex nucleus"], 0,false,false,undefined);
quizQuestions[53] = new QuizItem("What are afferent neurons?",["Motor neurons that receive information from the CNS","Sensory neurons that transmit information to the CNS","Sensory neurons that transmit information from the CNS","Motor neurons that transmit information to the CNS"], 1,false,false,undefined);
quizQuestions[54] = new QuizItem("What are efferent neurons? ", ["Sensory neurons that transmit information to the CNS","Motor neurons that transmit information to the CNS","Motor neurons that transmit information from the CNS","Sensory neurons that receive information from the CNS"], 2,false,false,undefined);
quizQuestions[55] = new QuizItem("Which of the following is an excitatory neurotransmitter?",["Glutamate","GABA","Glycine","Arginine"], 0,false,false,undefined);
quizQuestions[56] = new QuizItem("Which of the following is an inhibitory neurotransmitter? ",[ "Acetylcholine","Glutamate","Serotonin","GABA"], 3,false,false,undefined);
quizQuestions[57] = new QuizItem("Which cells are critical for color detection?",["Cone cells","Rod cells","Amacrine cells","Ganglion cells"], 0,false,false,undefined);
quizQuestions[58] = new QuizItem("Which cells are critical for detecting luminance change?",["Pyramidal cells","Rod cells","Cone cells","Retinal ganglion cells"], 3,false,false,undefined);
quizQuestions[59] = new QuizItem("Which is unique to mammals?", ["Neocortex","Hippocampus","Pallium","Prosencephalon"], 0,false,false,undefined);
quizQuestions[60] = new QuizItem("What is Reelin?",["Chemorepellent","Glial cell","A large glycoprotein","Neurotransmitter"], 2,false,false,undefined);
quizQuestions[61] = new QuizItem("Which cells release Reelin? ", ["Purkinje neurons","Layer IV cells","Pyramidal cells","Cajal Retzius cells "], 3,false,false,undefined);
quizQuestions[62] = new QuizItem("What is a P Doman?",["Transitional Domain of the growth cone","Peripheral domain of the growth cone","Central domain of the growth cone","Region on the inside of the growth cone"], 1,false,false,undefined);
quizQuestions[63] = new QuizItem("What is a C Domain?",["Central domain of the growth cone","Transitional domain of the growth cone","Peripheral domain of the growth cone","Region on the outer edge of the growth cone"], 0,false,false,undefined);
quizQuestions[64] = new QuizItem("Which is an extracellular matrix guidance cue?",["Calcium","Fibronectin","Sodium","Smad"], 1,false,false,undefined);
quizQuestions[65] = new QuizItem("Which of the layers in the neocortex are born first? ",["Layer VI","Layer I","Layer III","Layer V"], 0,false,false,undefined);
quizQuestions[66] = new QuizItem("What is a cilium?",["Structure located at the axon of interneurons","Structure located on dendrites of primary sensory neurons","Structure located on astrocytes","Structure located on amacrine cells"], 1,false,false,undefined);
quizQuestions[67] = new QuizItem("How is an Action Potential propagated? ", ["Sodium/potassium channels open and close at the Nodes of Ranvier","Calcium channels open and close at the Nodes of Ranvier","Relief of Magnesium block on NMDA channels","Sodium/potassium channels open and close only at the axon hillock"], 0,false,false,undefined);
quizQuestions[68] = new QuizItem("Where is an action potential initiated within an axon?",["Axon hillock","Cell body","Dendrites","The cilia"], 0,false,false,undefined);
quizQuestions[69] = new QuizItem("How is glutamate packaged into synaptic vesicles?",["Vesicular glutamate transporters (VGLUT)","Vesicular glutamate enzymes (VGLUE)","Vesicular glutamine transporters (VGLAT)","Vesicular glutamine enzymes (VGLAE)"], 0,false,false,undefined);
quizQuestions[70] = new QuizItem("What is the function of acetylcholinesterase?",["More acetylcholine is generated in the synaptic cleft","Remove excess acetylcholine from the synaptic cleft","To help acetylcholine bind to the receptors on the dendrites","Enzyme that speeds up the movement of acetylcholine across the synaptic cleft"], 1,false,false,undefined);
quizQuestions[71] = new QuizItem("Which type of glutamate receptor is critical for LTP at Schaffer collaterals?",["AMPA","NMDA","mGluR","CaV"], 1,false,false,undefined);
quizQuestions[72] = new QuizItem("Which cells do NOT synapse at the inner plexiform layer?",["Cone cell","Amacrine cell","Ganglion cell","Bipolar cell"], 0,false,false,undefined);
quizQuestions[73] = new QuizItem("What are the three types of receptor pigments in cone cells?",["Red, blue, green","Pink, blue, green","Yellow, blue, green","Orange, blue, green"], 0,false,false,undefined);
quizQuestions[74] = new QuizItem("What structure in the thalamus receives input from the optic tract?",["Lateral geniculate nucleus","Optic chiasm","Striate cortex","Optic radiation"], 0,false,false,undefined);
quizQuestions[75] = new QuizItem("What is the role of Reelin in the developing neocortex?",["Acts as a chemoattractant for proper circuit formation","Acts as a chemorepellent for proper circuit formation","Acts as a regulator of progenitor cell division","Acts as a destabilizing molecule to speed up proper circuit formation"], 0,false,false,undefined);
quizQuestions[76] = new QuizItem("What makes up the cytoskeleton of the growth cone P Domain?",["Microtubules","Collagen","Actin filaments","Cilia"], 2,false,false,undefined);
quizQuestions[77] = new QuizItem("What makes up the cytoskeleton of the growth cone C Domain?",["Microtubules","Actin fibers","Collagen","Cilia"], 0,false,false,undefined);
quizQuestions[78] = new QuizItem("When inactive, Galpha is bound by..",["GDP","GTP"," GAP","GOP"], 0,false,false,undefined);
quizQuestions[79] = new QuizItem("Where does one observe a synaptic potential? ",["Presynaptic neuron","Postsynaptic neuron","Presynaptic nucleus","None of the above"], 1,false,false,undefined);
quizQuestions[80] = new QuizItem("Which are the 3 types of ionotropic glutamate receptors?",["NMDA, BMPA receptors, kainate receptors","NDMA, AMPA receptors, kainate receptors","NMDA, AMPA receptors, kainate receptors","None of the above"], 2,false,false,undefined);
quizQuestions[81] = new QuizItem("What is an EPSP?",["Depolarization of the postsynaptic neuron to decrease chance of action potential","Depolarization of the postsynaptic neuron to increase chance of action potential","Depolarization of the presynaptic neuron to increase chance of action potential","Depolarization of the presynaptic neuron to decrease chance of action potential"], 1,false,false,undefined);
quizQuestions[82] = new QuizItem("What is an IPSP? ",["Depolarization of the postsynaptic neuron to decrease chance of action potential","Depolarization of the presynaptic neuron to decrease chance of action potential","Depolarization of the presynaptic neuron to increase chance of action potential","Depolarization of the postsynaptic neuron to increase chance of action potential"], 0,false,false,undefined);
quizQuestions[83] = new QuizItem("Which is NOT a cortical target of the taste system?",["Amygdala","Hypothalamus","Insula cortex","none of the above"], 3,false,false,undefined);
quizQuestions[84] = new QuizItem("What type of receptor protein detects sweet tastants?",["Frizzled","GPCRs","APCRs","TGF-Beta"], 1,false,false,undefined);
quizQuestions[85] = new QuizItem("What are the three areas that comprise the vertebrate brain?", ["Neocortex, neocerebellum, hypothalamus","Prosencephalon, mesencephalon, rhombencephalon","Frontal lobe, occipital lobe, parietal lobe","Medulla oblongata, cerebrum, cerebellum"], 1,false,false,undefined);
quizQuestions[86] = new QuizItem("What is gastrulation?", ["formation of 3 germ layers","formation of 4 germ layers","formation of 2 germ layers","formation of 5 germ layers"], 0,false,false,undefined);
quizQuestions[87] = new QuizItem("From which germ layer is the nervous system derived?", ["Mesoderm","Ectoderm","Blastula","Endoderm"],1,false,false,undefined);
quizQuestions[88] = new QuizItem("What is delamination?", ["Neuroblasts separating from mesoderm","Neuroblasts separating from ectoderm","Neuroblasts separating from endoderm","Neuroblasts separating from hypodermis"], 1,false,false,undefined);
quizQuestions[89] = new QuizItem("Which signaling pathway does BMP belong to?", ["TGFβ signaling pathway","Wnt-signaling pathway","Shh signaling pathway","HOX signaling pathway"], 0,false,false,undefined);
quizQuestions[90] = new QuizItem("Segmentation of the A->P axis in Drosophila is set by?", ["BMP","Bicoid","Wnt","Ubx"], 1,false,false,undefined);
quizQuestions[91] = new QuizItem("Name the two homeobox clusters in Drosophila", ["Lab and pb gene clusters","Wnt gene clusters","Ubx and Abd-B gene clusters","Antennapaedia and Bithorax clusters"], 3,false,false,undefined);
quizQuestions[92] = new QuizItem("Which germ layer gives rise to the notochord?", ["Ectoderm","Mesoderm","Endoderm","Blastopore"], 1,false,false,undefined);
quizQuestions[93] = new QuizItem("In which organism was the Hedgehog (Hh) first cloned?", ["Drosophila","C. elegans","Zebrafish","Frog"], 0,false,false,undefined);
quizQuestions[94] = new QuizItem("What receptor binds the Hedgehog (Hh) ligand?", ["Notch receptor","Patched (Ptc)","Frizzled","NMDA"], 1,false,false,undefined);
quizQuestions[95] = new QuizItem("What neurons are produced by the neural crest cells?", ["Glial cells","Neurons of the CNS","Neurons of the PNS","Neurons in the neocortex"], 2,false,false,undefined);
quizQuestions[96] = new QuizItem("In which region is sonic hedgehog concentration highest?", ["neural tube roofplate","notochord and neural tube floorplate","Sulcus limitans","Epidermis"], 1,false,false,undefined);
quizQuestions[97] = new QuizItem("What molecules form D->V gradients in the neural tube?", ["Hox and Pax","Sonic hedgehog (shh) and BMP/Wnt","Dpp and Chordin","Noggin and Follistatin"], 1,false,false,undefined);
quizQuestions[98] = new QuizItem("Who discovered that Sonic Hedgehog polarizes the neural tube?", ["Eric Jessell","Thomas Jessell","Benjamin Jessell","Sheldon Jessell"], 1,false,false,undefined);
quizQuestions[99] = new QuizItem("What is interkinetic nuclear migration?", ["progenitor cell bodies move from VZ to pial surface","progenitor cell bodies move along the VZ","lamination of the neural tube","none of the above"], 0,false,false,undefined);
quizQuestions[100] = new QuizItem("Which of the following is a technique for dating neuron birth?", ["labeling with albumin","labeling with BRDU","Labeling with BDRU","labeling with crystal violet"], 1,false,false,undefined);
quizQuestions[101] = new QuizItem("What is the inside-out pattern of cortical neurogenesis?", ["Innermost layer (VI) born first","Outermost layer (I) born first","Layers in between VI and I born first","All layers born all at once"], 0,false,false,undefined);
quizQuestions[102] = new QuizItem("Which of the following are ligands of the notch receptor?", ["Noggin and Chordin","Delta (DL) and Serrate (SER)","Follistatin and Serrate (SER)","Delta (DL) and Noggin"], 1,false,false,undefined);
quizQuestions[103] = new QuizItem("Who developed the Thymidine birth-dating technique?", ["Howard Sidman","Lennard Sidman","Richard Sherman","Richard Sidman"], 3,false,false,undefined);
quizQuestions[104] = new QuizItem("What are the two types of proliferating cells in cortical VZ", ["Motor neurons and sensory neurons","Apical progenitors and basal progenitors","Purkinje cells and betz cells","Cajal-Retzius and rod cells"], 1,false,false,undefined);
quizQuestions[105] = new QuizItem("Which neurons migrate tangentially into the cortex?", ["glutamatergic neurons","GABAergic neurons","adrenergic neurons","epinephrine neurons"], 1,false,false,undefined);
quizQuestions[106] = new QuizItem("What are the two most prevalent cell types in the cerebellum?", ["Purkinje and granule cells","Neural crest and granule cells","Purkinje cells and pyramidal cells","none of the above"], 0,false,false,undefined);
quizQuestions[107] = new QuizItem("What is the radial glia cell equivalent in the cerebellum?", ["Hoffmann glia cell","Bergmann glia cell","Augustus glia cell","Lehmann glia cell"], 1,false,false,undefined);
quizQuestions[108] = new QuizItem("What is autophagy?", ["cells recycle cytoplasm and dispose of organelles","autoimmune disease","sustaining injuries on oneself", "non of the above"], 0,false,false,undefined);
quizQuestions[109] = new QuizItem("What is apoptosis?", ["Disease in which cells die uncontrollably","Cell death through physical injury","Programmed cell death", "none of the above"], 2,false,false,undefined);
quizQuestions[110] = new QuizItem("Which technique is commonly used to visualize dying cells?", ["TUNEL","X-ray crystallography","PCR","Western blot"], 0,false,false,undefined);
quizQuestions[111] = new QuizItem("What ligand binds the TrkA receptor?", ["NGF","NBA","NFL","NOF"], 0,false,false,undefined);
quizQuestions[112] = new QuizItem("What is a microRNA?", ["Protein-coding RNA","Non-coding RNA","promoter regions","RNA that can lyse DNA strands"], 1,false,false,undefined);
quizQuestions[113] = new QuizItem("How do microRNAs function?", ["translational repression of mRNA","Supports the translation of viral RNA","translates itself to produce enzymes","aids in the transcription of genes"], 0,false,false,undefined);
quizQuestions[114] = new QuizItem("P1 VZ cells transplanted to E29 VZ adopt which cortical fate?", ["Layer V/VI cells","Layer I/II cells","morph into muscle cells","none of the above"], 1,false,false,undefined);
quizQuestions[115] = new QuizItem("E29 VZ cells transplanted into P1 VZ will adopt which cortical fate?", ["Layer V/VI cells","Layer I/II cells","morph into glial cells","none of the above"], 1,false,false,undefined);
quizQuestions[116] = new QuizItem("The axonal growth cone was first described by which scientist?", ["Santiago Ramon y Cajal","Eldoardo Ramon y Cajal","Aljandro Ramon y Cajal","Fulgencio Ramon y Cajal"], 0,false,false,undefined);
quizQuestions[117] = new QuizItem("Gradients of which proteins form topographical map in tectum?", ["EPH and EPHRIN","Galpha and GPCR","Netrin and RAC","Slit and Robo"], 0,false,false,undefined);
quizQuestions[118] = new QuizItem("What is neural induction?", ["Migration of Cajal-Retzius cells","Proliferation of radial glia cells","Initial migration of neurons along radial glial cells","Initial step in generating the nervous system"], 3,false,false,undefined);
quizQuestions[119] = new QuizItem("What is neuronal cell specification?", ["cell death of specific neurons","neurons reversing their fate and becoming progenitor cells","programmed cell death of neural progenitors","neurons adopting a specialized identity"], 3,false,false,undefined);
quizQuestions[120] = new QuizItem("What is released by the dorsal aorta to influence neural crest cell fate?", ["Nanos","Bicoid","BMP","Sox"], 2,false,false,undefined);
quizQuestions[121] = new QuizItem("If a transcription factor undergoes auto-regulation, it..", ["regulates other transcription factors","regulates itself","no longer regulates targets","degrades protein products"], 1,false,false,undefined);
quizQuestions[122] = new QuizItem("What is an ommatidium?", ["Units making up the compound eye of an insect","Units making up the compound eye of humans","Cilia that are located on sensory neurons for smell","Cilia that are located on sensory neurons of the cochlea"], 0,false,false,undefined);
quizQuestions[123] = new QuizItem("What receptor contains a death domain?", ["TrkA","P75NTR","TrkC","TrkB"], 1,false,false,undefined);
quizQuestions[124] = new QuizItem("What is a caspase?", ["Proteases that contribute to apoptosis","A transcription factor","Gene involved in pyknosis", "none of the above"], 0,false,false,undefined);
quizQuestions[125] = new QuizItem("What type of cell clears dying neurons?", ["pyramidal cell","microglia","lysosyme","oligodendrocyte"], 1,false,false,undefined);
quizQuestions[126] = new QuizItem("How does the cell detect a dying neuron?", ["Phosphatidylserine on the outside of cell membrane","Glycoproteins on the inside of cell membrane","Arginine on the outside of cell membrane","No membrane proteins on the outside of the cell"], 0,false,false,undefined);
quizQuestions[127] = new QuizItem("What is the antennapedia complex?", ["Genes that promotes cell death","Homeobox genes responsible for segmentation","Genes that only make antenna for Drosophila","Genes that promote cell survival"], 1,false,false,undefined);
quizQuestions[128] = new QuizItem("What is a bipolar neuron?", ["neurons with two or more cell bodies","a neurons with two processes from the cell body","neurons with two axons and two dendrites from the cell body","sensory neuron with two cilia on each dendrite"], 1,false,false,undefined);
quizQuestions[129] = new QuizItem("What is cortical histogenesis?", ["Generation of muscle cells during development","Generation of neurons and glia in the cortex","Modification of adult neurons and glia in the cortex","Modification of adult muscle cells"], 1,false,false,undefined);
quizQuestions[130] = new QuizItem("Where does cortical histogenesis take place?", ["Hippocampus","Cerebellum","Cortex","Amygdala"], 2,false,false,undefined);
quizQuestions[131] = new QuizItem("Which is a cytokine that regulates neuronal cell survival?", ["CNTF","P75NTR","TrkB","TrkC"], 0,false,false,undefined);
quizQuestions[132] = new QuizItem("What is the Rostral migratory stream?", ["Pathway from SVZ of forebrain to medulla","Pathway from SVZ of forebrain to olfactory bulb","Pathway from SVZ of forebrain to amygdala","Pathway from SVZ of forebrain to pituitary gland"], 1,false,false,undefined);
quizQuestions[133] = new QuizItem("Where can granular and periglomerular cells be found?", ["Corpus callosum","Hippocampus","Olfactory bulb","Medulla"], 2,false,false,undefined);
quizQuestions[134] = new QuizItem("Which is a function of the hippocampus dentate gyrus?", ["Generation of spinal fluid","Generation of new neurons after birth","Generation of new epithelial tissue","Generation of ligands that promote cell death"], 1,false,false,undefined);
quizQuestions[135] = new QuizItem("What kind of cells divide by symmetrical division?", ["Sensory neurons","Apical progenitor cells","Radial glial cells","Basal progenitor cells"], 3,false,false,undefined);
quizQuestions[136] = new QuizItem("Which cells divide by asymmetrical division?", ["Cajal-Retzius cells","Basal progenitor cells","Apical progenitor cells","Purkinje cells"], 2,false,false,undefined);
quizQuestions[137] = new QuizItem("What are trophic factors?", ["Molecules that promote cell survival","Molecules that promote cell specification","Molecules that promote neural cell migration", "none of the above"], 0,false,false,undefined);
quizQuestions[138] = new QuizItem("Which of the following are NOT neurotrophins?", ["BMP","BDNF","NT-3","NGF"], 0,false,false,undefined);
quizQuestions[139] = new QuizItem("What are Rohon-Beard cells?", ["Motor neurons around the embryonic spinal cord","Motor neurons of the face","Sensory neurons present in the nasal cavity","Sensory neurons present in embryonic spinal cord"], 3,false,false,undefined);
quizQuestions[140] = new QuizItem("The pro-apoptotic regulator EGL-1 is found in which organism?", ["Mouse","Nematode","Fly","Frog"], 1,false,false,undefined);
quizQuestions[141] = new QuizItem("In what signaling pathway can the R-smad/co-smad complex be found?", ["Wnt signaling pathway","BMP signaling pathway","Notch signaling pathway","HOX signaling pathway"], 1,false,false,undefined);
quizQuestions[142] = new QuizItem("What is the name of the receptor that Wnt proteins bind to?", ["Notch","Frizzled","Patched","NMDA"], 1,false,false,undefined);
quizQuestions[143] = new QuizItem("What protein prevents the degradation of β-catein-APC-GSK complex?", ["LRP","Disheveled","Noggin","TCF"], 1,false,false,undefined);
quizQuestions[144] = new QuizItem("What is the name of the BMP-like molecule found in Drosophila?", ["bpp","app","dpp","opp"], 2,false,false,undefined);
quizQuestions[145] = new QuizItem("Which of the following inhibit dpp in Drosophila?", ["Disheveled","Sog","Chordin","BMP"], 1,false,false,undefined);
quizQuestions[146] = new QuizItem("Which of the following interfere with BMP signaling?", ["Chordin, Noggin, Follistatin","Chordin, Noggin, Axin","Chordin, β-catenin, Follistatin","TCF, Noggin, Follistatin"], 0,false,false,undefined);
quizQuestions[147] = new QuizItem("What is the outcome of transcribing Zic1?", ["epidermal cell fate","neural cell fate","muscle  cell fate","upregulate mircoRNA genes"], 1,false,false,undefined);
quizQuestions[148] = new QuizItem("Who identified the HOX TF signaling pathway in Drosophila?", ["Edward Smooter","Edward Lewis","Edward Smith","Edward Langer"], 1,false,false,undefined);
quizQuestions[149] = new QuizItem("How many genes in the Antennapedia & Bithorax complexes?", ["10","8","12","6"], 1,false,false,undefined);
quizQuestions[150] = new QuizItem("What are rhombomeres?", ["transient segmentation of the hindbrain in vertebrates","ransient segmentation of the forebrain in vertebrates","ransient segmentation of the midbrain in vertebrates","transient segmentation of the hindbrain in invertebrates"], 0,false,false,undefined);
quizQuestions[151] = new QuizItem("What would happen if the notochord was removed during development?", ["Neural tube will be undifferentiated; no floorplate develops","Neural tube will differentiate; floorplate develops","Neural tube will differentiate; two floorplates develop","Neural tube will be undifferentiated; floorplate develops"], 0,false,false,undefined);
quizQuestions[152] = new QuizItem("What structures are formed from the neural tube?", ["skin cells","neurons of the PNS","smooth muscle cells","neurons of the CNS"], 3,false,false,undefined);


// pTag.innerHTML = test1.question;
// console.log(quizQuestions[0]);
var currentIndex = 0, numOfAnswered = 0, numOfCorrectAnswered = 0;
var currentQuestion = quizQuestions[currentIndex];
//second ulTag 
var ulTag = document.getElementsByTagName('ul')[1];
var liTags = ulTag.getElementsByTagName('li');
/*
	this function inserts the current question into the layout
	of the page: p tag which is a question and ul tag meaning
	an options
*/
function showCurrentQuestion() {
	var headerOfDropdow = document.getElementsByClassName('wrapper')[0];
	//parse into integer, because it interpretes it as a string
	var numQuestion = parseInt(currentIndex)+1;
	headerOfDropdow.getElementsByTagName('span')[0].innerHTML = numQuestion;
	var pTag = document.getElementsByTagName('p')[0];
	// console.log(liTags);
	var ulTag = document.getElementsByTagName('ul')[1];
	var liTags = ulTag.getElementsByTagName('li');
	pTag.innerHTML = currentQuestion.question;
	for (var i=0; i < liTags.length; i++) {
		//in case the number of variants is less than 4 (e.g. when it's
		// undefined) disable li tag
		if (currentQuestion.variants[i] == undefined) {
			console.log(currentQuestion.variants[i]);
			liTags[i].className = "doNotDisplay";
		} else {
			console.log(currentQuestion.variants[i]);
			liTags[i].innerHTML = currentQuestion.variants[i];//assign question
			liTags[i].className = "";
		}
	}
};

enableLiOnClickEvents();
showCurrentQuestion();

//when a variant is selected it becomes highlighted 
function changeLiStyle() {
	var selectedItem = document.getElementsByClassName('selected')[0];
	//disable previously selected item and enable the clicked one
	if (selectedItem) selectedItem.className = "";
	this.className = "selected";
}


//self-invoking function to find all li tags 
// and assing them text from the object 
// and assign event listeners
function enableLiOnClickEvents() {
	for (var i=0; i < liTags.length; i++) {
		console.log(liTags[i]);
		liTags[i].onclick = changeLiStyle;
	}
};

var button = document.getElementsByClassName('submit')[0];
button.onclick = submitAndCheckAnswer;

function submitAndCheckAnswer() {
	var selectedItem = document.getElementsByClassName('selected')[0];
/*	console.log(selectedItem.innerHTML);*/
 if (selectedItem == undefined)
   		alert("There is no variant selected! Please select any!");
else {
   currentQuestion.enabled = true;
	if (selectedItem.innerHTML == currentQuestion.variants[currentQuestion.answer]) {
		
		console.log("Correct "+ currentQuestion.variants.indexOf(selectedItem.innerHTML));
		changeTheLayoutAccordingTheResult(selectedItem,"correct", true);
		checkIfTheLastQuestion(this);//sending button obj as a parameter
		numOfAnswered++;
		numOfCorrectAnswered++;
		
	} else {
		
		console.log("Wrong!");
		changeTheLayoutAccordingTheResult(selectedItem,"wrong", false);
		checkIfTheLastQuestion(this);
		liTags[currentQuestion.answer].className = "correct";
	}	
}
}

function changeTheLayoutAccordingTheResult(selectedItem,result,replied) {
	console.log(result);
	currentQuestion.replied = replied;
	//the index corresponding to the selection of user is selectiOfUser
	currentQuestion.selectionOfUser = currentQuestion.variants.indexOf(selectedItem.innerHTML);
	selectedItem.className=result;//changing color of selected item by changing className
	disableLiOnClickEvents();//cannot click on the other litags anymore
}

//if the current question is the last one then change button style
//and onclick event(function)
//to finalize, otherwise continue to the next question 
function checkIfTheLastQuestion(button) {
	console.log("currentIndex: ",currentIndex);
	if (currentIndex == quizQuestions.length-1) {
			console.log(currentIndex +" " + quizQuestions.length);
			button.className = "finalize";//change the color
			button.innerHTML = "Finalize";
			button.onclick = finalize;//change event listener
		} else {
			console.log(currentIndex +"fdsf " + quizQuestions.length);
			currentIndex++;
			button.innerHTML = "Next Question";
			button.className = "next";
			button.onclick = goToNextQuestion;
		}
}

function disableLiOnClickEvents() {
	for (var i=0; i < liTags.length; i++) {
		liTags[i].onclick = "";
	}
}

function goToNextQuestion() {
	// if (currentIndex == quizQuestions.length) {
	// 	finalize();
	// 	return alert("Quiz is over. Your result: " + numOfAnswered);
	// }
	//changes the current question index before moving to the next one
	currentQuestion = quizQuestions[currentIndex];
	//change button's label and event handler
	this.innerHTML = "Submit";
	this.onclick = submitAndCheckAnswer;
	this.className = "submit";
	showCurrentQuestion();
	enableLiOnClickEvents();
}

function cleanUpTheLayout() {
	var mainDiv = document.getElementsByClassName('main')[0];
	// deleting all child nodes 
	while (mainDiv.hasChildNodes()) {
		mainDiv.removeChild(mainDiv.firstChild);
	}
	console.log("clean UPP!!");
}

function finalize() {
	cleanUpTheLayout();
	var mainDiv = document.getElementsByClassName('main')[0];
	var tHeader = document.createElement("p");
	tHeader.appendChild(document.createTextNode("Result: " + numOfCorrectAnswered + " out of " + quizQuestions.length + " correct"));
	tHeader.setAttribute("class","pAboveTable");
	mainDiv.appendChild(tHeader);
	}



function returnToQuestion() {
	console.log(this);
	var questionTitle = this.getElementsByClassName("questionCol")[0].innerHTML;
	var questionNum = questionTitle[questionTitle.length -1];
	
 
 			cleanUpTheLayout();
			createQuestionLayout();
			currentQuestion = quizQuestions[questionNum -1];
			// change currentIndex in orderto correctly display
			// it on the new layout
			currentIndex = questionNum-1;
			showCurrentQuestion();
			var correctLiNum = quizQuestions[questionNum-1].answer;
  if (quizQuestions[questionNum-1].enabled) {
	 	if (quizQuestions[questionNum-1].replied) {
	 		
			document.getElementsByTagName("li")[correctLiNum+4].className="correct";
		} else {
			var selectedLiNum = quizQuestions[questionNum-1].selectionOfUser;
			document.getElementsByTagName("li")[selectedLiNum+4].className="wrong";
			document.getElementsByTagName("li")[correctLiNum+4].className="correct";
		
	 }
}
}


