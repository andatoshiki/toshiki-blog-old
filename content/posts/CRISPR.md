# $\text{CRISPR-Cas 9}$ genetic engineering note

## What is CRISPR?

CRISPR stands for the clusters of regularly interspaced short palindromic repeats, what does this mean? It means the bacteria has a distinctive features that include repetitive sequences shown in the black diamonds, and the unique sequences shown in the colored boxes, these sequences in the Crispr array came from the viruses. These CRISPR is associated with CAS genes typically located nearby in the bacteria chromosomes, for genetic editing. An explicit explanation of the CRISPR system is illustrated in the following video from [YouTube]([CRISPR Immunity Explained: How Cas9 Protects Bacteria from Viruses - YouTube](https://www.youtube.com/watch?v=Aqw4DihmoQY)).

<div id="dplayer">
<script>
    const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'https://cdn.jsdelivr.net/gh/AShao0425/CDN/📀%20Videos/videoplayback.mp4',
    defaultQuality: 0,
    },
});
</script>
</div>

Virus injecting its DNA into a bacterium and if this bacterium has a CRISPR array in the genome can acquire new pieces of DNA from the virus and integrate them into the array, keeping this pattern of repeats. and the cell is then able to make a copy of that sequence in the form of an RNA molecule that gets subsequently broken into smaller units that each include one of the sequences derived from a virus together with the sequence coming from the repeat. Those RNAs are then kind of marked as CRISPR molecules by the presence of this repeat and they combine with a second RNA called a tracer to form a structure that binds to the protein called cas9. So this RNA protein complex then can survey the cell looking for DNA sequences that have a sequence matching the sequence of the RNA and if that match is found then this protein RNA complex unwinds the DNA locally to allow RNA/DNA hybridization to occur.

A double-stranded break is induced in the DNA and if this happens in a bacterium that leads to degradation of the viral DNA. but if you introduce that system into a eukaryotic cell, a plant or animal cell as you heard from dana, these cells have sophisticated machinery to repair double-stranded breaks and they can do so by introducing a small change at the site of the break or even by integrating a new piece of DNA during the process of repair and so that means that this method of introducing double-stranded breaks in a targeted fashion into the genomes of plants and animals is a very effective way to conduct genome engineering.

# CRISPRs: Biology and Technology

- CRISPRs: RNA-guided genome protection
- Anti-CRISPRs: Phage fight back!
- Ethics: Responsible Progress

## How CRISPRs operate?

![](https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼 Images/CRISPR.jpg)

This is an image that shows the pathway of adaptive immunity in cell, bacteria actually has a adaptive immune system just like human has antibody that allows us to protect from pathogens. But the pathways in bacteria works pretty different from ours.

It works by means of the sequences described in former text that are integrated into the CRISPR arrays, these become templates of the RNA molecules that include the  templates for RNA molecules that are transcribed that include copies of all of these integrated bits of viral DNA together with the associated repeat sequence. 

{{< notice note >}}

Note that these sequences are often in palindromic orders, a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as *madam* or *racecar*. According to [Wikipedia]([Palindromic sequence - Wikipedia](https://en.wikipedia.org/wiki/Palindromic_sequence)), Palindromic is in the context of genetics is slightly different from the definition used for words and sentences. Since a double helix is formed by two paired antiparallel strands of nucleotides that run in opposite directions, and the nucleotides always pair in the same way (adenine (A) with thymine (T) in DNA or uracil (U) in RNA; cytosine (C) with guanine (G)), a (single-stranded) nucleotide sequence is said to be a **palindrome** if it is equal to its reverse complement. For example, the DNA sequence `ACCTAGGT` is palindromic because its nucleotide-by-nucleotide complement is `TGGATCCA`, and reversing the order of the nucleotides in the complement gives the original sequence, as shown in the image below.

![](https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼 Images/DNA_palindrome.svg)

{{< /notice >}}

And after the RNA molecules are processed into individual units that each include a virally-derived RNA sequence they combine with one or more CAS proteins to form surveillance complexes.  they can search the cell looking for matching DNA or sometimes RNA sequences leading to degradation by cutting of those matching nucleic acids.

![](https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼 Images/F2r.jpg)

This image shows  shows different examples of CRISPR systems that are classified according to the numbers and types of CAS proteins that are found in these systems. We can classify  in two broad categories called class 1 and class 2. 

- The class 1 systems all include multiple genes, multiple CAS proteins, that have to be present in the cell and have to assemble with CRISPR RNAs to form surveillance complexes. 

- The class 2 systems of CRISPR systems include a single gene, typically, that encodes one large protein that is able to combine with CRISPR RNAs and provide the cell with protection. 

## What is the function of CRISPR-CAS9?

## CAS9: RNA-Guided DNA cutter

![](https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼 Images/1.png)

CAS 9 is an amazing enzyme that has the ability to recognize double-stranded dna at positions in the dna sequence that match a 20 nucleotide sequence in this guiding rna.

## Mechanism of DNA recognition

![](https://cdn.jsdelivr.net/gh/AShao0425/CDN/🖼 Images/Sequence-recognition-and-structure-of-synthetic-CRISPR-RNA-A-Schematic-illustration.png)

Sequence recognition and structure of synthetic CRISPR RNA. 

( A ) Schematic illustration of DNA recognition by CRISPR-CAS 9. CAS 9 (pink circle) recognizes the complex of crRNA (blue and orange squares) and tracr$\text{RNA}$ (green circles) and binds to its complementary 20-nucleotide DNA target (yellow boxes) adjacent to a $\text{3 ′ -PAM}$ (brown squares). The crRNA seed sequence (orange squares) is the 10 nucleotides that recognize DNA closest to the PAM sequence. Dashed lines between nucleotides indicate direct base pairing. ( B ) Structure of modified nucleotides incorporated into $\text{scrRNA}$. Native RNA (green box) is substituted at the sugar $\mathrm{2^′}$ -position with $\text{O -Me}$ (orange box). The native phosphate backbone (blue box, pink circle) is substituted with a sulfur at a nonbridging oxygen (pink box, blue circle). ( C ) Full sequence of LDLR -specific crRNA unmodified ($\text{crRNA}$), complete PS substituted backbone ($\mathrm{scrRNA-PS}$), or complete PS substituted backbone with $\mathrm{2^{′}- O -Me}$ ($\mathrm{scrRNA-PS-OMe}$). The following animated formation video of DNA created by *Ben LaFrance* more explicitly explains the mechanism

**video**



