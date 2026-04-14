export const extendedAlgorithms = [
  // FIPS
  {
    id: "fips-197-aes",
    name: "FIPS 197 (AES)",
    year: "2001",
    era: "FIPS & Cryptographic Standards",
    description: "The Advanced Encryption Standard. A symmetric block cipher chosen by the US government to protect classified information.",
    deepExplanation: "AES operates on 128-bit blocks using key sizes of 128, 192, or 256 bits. It relies on a substitution-permutation network comprising multiple rounds of byte substitution, row shifting, column mixing, and key addition.",
    videoLinks: [{ title: "AES Explained", url: "https://www.youtube.com/results?search_query=AES+encryption+explained" }],
    imageQuery: "AES encryption block cipher matrix layout",
    paperTitle: "FIPS PUB 197: Advanced Encryption Standard (AES)",
    paperLink: "https://csrc.nist.gov/publications/detail/fips/197/final",
    comparison: { before: "Old DES standard was too slow and vulnerable to brute force.", solved: "AES is highly secure, exceptionally fast in hardware, and resistant to modern brute force." }
  },
  {
    id: "fips-140-3-crypto-module-security",
    name: "FIPS 140-3",
    year: "2019",
    era: "FIPS & Cryptographic Standards",
    description: "The mandatory security standard for cryptographic modules used within US government systems, ensuring hardware and software resist tampering.",
    deepExplanation: "It defines four levels of security, ranging from basic cryptographic requirements (Level 1) to extreme physical tamper resistance and environmental failure protection (Level 4).",
    videoLinks: [{ title: "FIPS 140-3 Modules", url: "https://www.youtube.com/results?search_query=FIPS+140-3+standard" }],
    imageQuery: "Hardware security module secure chips",
    paperTitle: "FIPS 140-3: Security Requirements for Cryptographic Modules",
    paperLink: "https://csrc.nist.gov/publications/detail/fips/140/3/final",
    comparison: { before: "Cryptographic hardware lacked unified baseline requirements for physical tampering.", solved: "Established strict bounds so buyers know unconditionally that the keys are physically secure." }
  },
  {
    id: "fips-186-5-digital-signature-standard",
    name: "FIPS 186-5 (DSS)",
    year: "2023",
    era: "FIPS & Cryptographic Standards",
    description: "The updated standard defining secure methods for generating digital signatures, allowing the receiver to verify the sender's identity.",
    deepExplanation: "DSS mandates the use of specific algorithms including RSA, ECDSA, and EdDSA. It relies on the computational difficulty of factoring large integers or solving the elliptic curve discrete logarithm problem.",
    videoLinks: [{ title: "Digital Signature Standard", url: "https://www.youtube.com/results?search_query=Digital+signature+standard+NIST" }],
    imageQuery: "Digital signature lock document cryptography",
    paperTitle: "FIPS 186-5: Digital Signature Standard (DSS)",
    paperLink: "https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf",
    comparison: { before: "Signatures couldn't be universally trusted without a standardized mathematical proof mechanism.", solved: "Provides the legal and technical backbone for identity verification across all federal architectures." }
  },
  {
    id: "fips-180-4-sha",
    name: "FIPS 180-4 (SHA-2)",
    year: "2015",
    era: "FIPS & Cryptographic Standards",
    description: "The Secure Hash Algorithm (SHA-2) family, primarily known for SHA-256. It processes data into a fixed-length signature for integrity checking.",
    deepExplanation: "Operates by taking an input message, breaking it into 512-bit blocks, and passing it through 64 rounds of logical functions and bitwise operations to produce a completely unique 256-bit hash.",
    videoLinks: [{ title: "SHA-256 Explained", url: "https://www.youtube.com/results?search_query=SHA+256+hashing+algorithm" }],
    imageQuery: "Hashing algorithm data processing block",
    paperTitle: "FIPS 180-4: Secure Hash Standard (SHS)",
    paperLink: "https://csrc.nist.gov/publications/detail/fips/180/4/final",
    comparison: { before: "Earlier algorithms like MD5 and SHA-1 suffered from collision attacks where two files produced the same hash.", solved: "Provided an unbreakable cryptographic hash used reliably for Bitcoin mining and TLS certificates." }
  },

  // Classical
  {
    id: "aes",
    name: "AES",
    year: "2001",
    era: "Classical Encryption Algorithms",
    description: "Advanced Encryption Standard (AES) is the de-facto symmetric cipher powering the internet's backbone.",
    deepExplanation: "AES is a robust symmetric cipher that processes data in a 4x4 column-major order matrix of bytes, utilizing the Rijndael cipher strategy.",
    videoLinks: [{ title: "Symmetric Encryption", url: "https://www.youtube.com/results?search_query=AES+encryption" }],
    paperTitle: "The Design of Rijndael",
    paperLink: "https://link.springer.com/book/10.1007/978-3-662-04722-4",
    comparison: { before: "Asymmetric logic is too slow for bulk data.", solved: "Symmetric keys via AES provide blazing fast bulk encryption after quantum keys are distributed." }
  },
  {
    id: "chacha20",
    name: "ChaCha20",
    year: "2008",
    era: "Classical Encryption Algorithms",
    description: "A high-speed stream cipher developed as an alternative to AES, frequently used on mobile devices to preserve battery life.",
    deepExplanation: "ChaCha20 operates by taking a 256-bit key and creating a 512-bit block of keystream by mixing it via add-rotate-xor operations. It is extremely fast in software without needing dedicated hardware chips.",
    videoLinks: [{ title: "ChaCha20 vs AES", url: "https://www.youtube.com/results?search_query=ChaCha20+stream+cipher" }],
    paperTitle: "ChaCha, a variant of Salsa20",
    paperLink: "https://cr.yp.to/chacha/chacha-20080128.pdf",
    comparison: { before: "AES was slow on mobile ARM processors that lacked dedicated AES-NI hardware instructions.", solved: "Allowed highly secure VPNs and mobile encryption without draining batteries." }
  },
  {
    id: "rsa",
    name: "RSA",
    year: "1977",
    era: "Classical Encryption Algorithms",
    description: "The most famous public-key cryptosystem. Used globally for secure data transmission and initial key exchanges.",
    deepExplanation: "RSA relies on the practical difficulty of factoring the product of two extremely large prime numbers. A user possesses a public key (for others to encrypt for them) and a private key (for their own decryption).",
    videoLinks: [{ title: "How RSA Works", url: "https://www.youtube.com/results?search_query=RSA+Algorithm+explained" }],
    paperTitle: "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems",
    paperLink: "https://dl.acm.org/doi/10.1145/359340.359342",
    comparison: { before: "Keys had to be physically handed over in briefcases.", solved: "Invented the concept of using mathematically linked pairs of keys to establish security over an open channel." }
  },

  // Post Quantum
  {
    id: "crystals-kyber",
    name: "CRYSTALS-Kyber (ML-KEM)",
    year: "2024",
    era: "Post-Quantum Cryptography",
    description: "Selected by NIST as the primary post-quantum key encapsulation mechanism to protect against future quantum computer attacks.",
    deepExplanation: "Kyber is based on the Module Learning with Errors (MLWE) problem. It constructs a complex, multi-dimensional lattice where the 'errors' introduce noise that classic and quantum computers cannot easily filter to find the secret.",
    videoLinks: [{ title: "Kyber Lattice Encryption", url: "https://www.youtube.com/results?search_query=Kyber+PQC+explained" }],
    imageQuery: "Lattice based cryptography 3d grid noise",
    paperTitle: "CRYSTALS-Kyber: a CCA-secure module-lattice-based KEM",
    paperLink: "https://eprint.iacr.org/2017/634",
    comparison: { before: "Shor's algorithm running on a quantum computer will instantly break RSA and Elliptic Curve systems.", solved: "Replaces RSA completely with a lattice-math framework immune to Shor's algorithm." }
  },
  {
    id: "crystals-dilithium",
    name: "CRYSTALS-Dilithium (ML-DSA)",
    year: "2024",
    era: "Post-Quantum Cryptography",
    description: "The primary post-quantum digital signature algorithm selected by NIST. Designed to verify identity securely in the quantum age.",
    deepExplanation: "Like Kyber, Dilithium relies on the Fiat-Shamir with Aborts lattice framework, binding a message to a random error vector. The math is fast but the resulting keys and signatures are significantly larger than RSA.",
    videoLinks: [{ title: "Dilithium Digital Signatures", url: "https://www.youtube.com/results?search_query=Dilithium+PQC+digital+signature" }],
    paperTitle: "CRYSTALS-Dilithium: A Lattice-Based Digital Signature Scheme",
    paperLink: "https://eprint.iacr.org/2017/633",
    comparison: { before: "Quantum computers could easily forge classical ECDSA digital signatures.", solved: "Guarantees that software updates and identity verification cannot be forged by quantum adversaries." }
  },
  {
    id: "falcon",
    name: "Falcon",
    year: "2024",
    era: "Post-Quantum Cryptography",
    description: "A compact post-quantum digital signature algorithm. Chosen by NIST because it uses far less bandwidth than Dilithium.",
    deepExplanation: "Falcon is based on NTRU lattices. It uses complex fast Fourier transforms over polynomial rings to calculate the shortest vector, issuing a very dense, tiny signature ideal for limited-bandwidth devices.",
    videoLinks: [{ title: "Falcon PQC Hash", url: "https://www.youtube.com/results?search_query=Falcon+quantum+signature" }],
    paperTitle: "Falcon: Fast-Fourier Lattice-based Compact Signatures",
    paperLink: "https://falcon-sign.info/",
    comparison: { before: "Dilithium signatures were too large for ultra-constrained embedded IoT devices.", solved: "Enabled quantum-safe validation within heavily constrained memory limits at the cost of processing speed." }
  },

  // Additional Protocols
  {
    id: "tls-1-2-tls-1-3",
    name: "TLS 1.2 / 1.3",
    year: "2018",
    era: "Security Protocols",
    description: "Transport Layer Security (TLS) encrypts all data sent over the web (HTTPS). TLS 1.3 is the fastest and most secure iteration.",
    deepExplanation: "TLS establishes an initial handshake to agree on ciphers (like AES or ChaCha20), uses RSA/ECDSA/Kyber to exchange the secret keys, and then encrypts the ongoing HTTP traffic securely.",
    videoLinks: [{ title: "TLS Handshake Explained", url: "https://www.youtube.com/results?search_query=TLS+1.3+Handshake" }],
    paperTitle: "RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3",
    paperLink: "https://datatracker.ietf.org/doc/html/rfc8446",
    comparison: { before: "Old SSL protocols let attackers sniff passwords on public Wi-Fi.", solved: "Creates a mathematically impenetrable tunnel for all web browser and server API communications." }
  },
  {
    id: "satellite-to-ground-qkd",
    name: "Satellite-to-Ground QKD",
    year: "2017",
    era: "Additional QKD Protocols",
    description: "Utilizes orbital satellites to beam quantum-encoded photons down to ground stations.",
    deepExplanation: "Because photons scatter heavily in long-distance fiber optic cables, beaming them through the vacuum of space avoids loss. The Micius satellite successfully beamed entangled particles down to China and Austria, linking them securely.",
    videoLinks: [{ title: "Micius Satellite QKD", url: "https://www.youtube.com/results?search_query=Micius+quantum+satellite" }],
    imageQuery: "satellite beaming green laser to earth cyber",
    paperTitle: "Satellite-to-ground quantum key distribution",
    paperLink: "https://www.nature.com/articles/nature23655",
    comparison: { before: "Impossible to send quantum keys across intercontinental oceans via fiber.", solved: "Broke the hard physical distance limits of QKD, enabling true global quantum networks via space relays." }
  }
];

export const fallbackData = (item, era) => {
  return {
    id: item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    name: item.replace(/"/g, ''),
    year: "N/A",
    era: era,
    description: `A critical part of the ${era} ecosystem enabling secure communications and key management.`,
    deepExplanation: `Specific protocols and hardware implement ${item} mathematically to shield classical data streams against active interception and brute force cryptographic attacks.`,
    videoLinks: [
      { title: `Explore Theory: ${item}`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item + " cryptography explained")}` },
      { title: `Technical Lecture`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item + " standard")}` }
    ],
    imageQuery: `${item} cryptography visual`,
    comparison: {
      before: "Standard unencrypted networking channels exposed bulk data to any passive listener across the communication node relay.",
      solved: "Integrated seamlessly into modern defense-in-depth routing matrices."
    }
  };
}
