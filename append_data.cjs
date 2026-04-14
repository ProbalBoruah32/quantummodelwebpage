const fs = require('fs');

const missingQKD = [
  "DQPS (Differential Quadrature Phase Shift)", "RRDPS (Round-Robin Differential Phase Shift)", "HD-QKD (High-Dimensional QKD)", "CV-QKD (Continuous Variable QKD)", "Gaussian-Modulated CV-QKD", "Discrete-Modulated CV-QKD", "Floodlight QKD (FL-QKD)", "Semi-Quantum QKD (SQKD)", "Two-Way QKD (Ping-Pong Protocol)", "Counterfactual QKD (Noh09)", "Measurement-Device-Independent CV-QKD", "Distributed-Phase-Reference QKD (DPR-QKD)", "Passive Decoy-State QKD", "Adaptive QKD", "Entanglement Swapping QKD", "Quantum Repeater-based QKD", "Satellite-to-Ground QKD", "Free-Space QKD", "Fiber-based QKD"
];

const fips = [
  "FIPS 197 (AES)", "FIPS 140-3 (Crypto Module Security)", "FIPS 186-5 (Digital Signature Standard)", "FIPS 180-4 (SHA)", "FIPS 202 (SHA-3)", "FIPS 198-1 (HMAC)", "SP 800-56A (Key Agreement)", "SP 800-56B (RSA Key Transport)", "SP 800-56C (Key Derivation)", "SP 800-57 (Key Management)", "SP 800-90A (DRBG Random Generators)", "SP 800-90B (Entropy Sources)", "SP 800-90C (RNG Constructions)"
];

const classical = ["AES", "ChaCha20", "Salsa20", "3DES (legacy)", "Blowfish", "Twofish", "RSA", "Diffie-Hellman (DH)", "Elliptic Curve Diffie-Hellman (ECDH)", "Elliptic Curve Digital Signature Algorithm (ECDSA)", "ElGamal"];

const pqc = ["CRYSTALS-Kyber", "BIKE", "HQC", "NTRU", "CRYSTALS-Dilithium", "Falcon", "SPHINCS+", "Lattice-based crypto", "Code-based crypto", "Hash-based crypto", "Multivariate crypto", "Isogeny-based crypto"];

const secProtocols = ["TLS 1.2 / TLS 1.3", "SSL (legacy)", "IPsec", "SSH", "HTTPS", "QUIC", "DTLS", "VPN protocols"];

const qSecStandards = ["ETSI GS QKD series", "ITU-T Y.3800 series", "ISO/IEC 23837", "IEEE Quantum standards initiatives"];

const keyManagement = ["Key Distribution Protocols", "Key Exchange Mechanisms", "Key Derivation Functions (KDF)", "Random Number Generation (QRNG & PRNG)", "Entropy Sources", "Authentication Protocols", "Privacy Amplification", "Error Correction (Cascade, LDPC)"];

const allCategories = [
  { list: missingQKD, era: "Additional QKD Protocols" },
  { list: fips, era: "FIPS & Cryptographic Standards" },
  { list: classical, era: "Classical Encryption Algorithms" },
  { list: pqc, era: "Post-Quantum Cryptography" },
  { list: secProtocols, era: "Security Protocols" },
  { list: qSecStandards, era: "Quantum Security & Integration Standards" },
  { list: keyManagement, era: "Key Management & Supporting Concepts" }
];

// Helper to get fallback data structure to string easily
function generateObjString(item, cat) {
  let id = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let name = item.replace(/"/g, '');
  let searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(item + " cryptography explained")}`;
  
  return `  {
    id: "${id}",
    name: "${name}",
    year: "N/A",
    era: "${cat}",
    description: "A critical part of the ${cat} ecosystem enabling secure communications and key management.",
    deepExplanation: "Specific protocols and hardware implement ${name} mathematically to shield classical data streams against active interception and brute force cryptographic attacks.",
    videoLinks: [
      { title: "Explore Theory: ${name}", url: "${searchUrl}" },
      { title: "Technical Lecture", url: "https://www.youtube.com/results?search_query=${encodeURIComponent(item + " standard")}" }
    ],
    imageQuery: "${id.replace(/-/g, ' ')} cryptography visual",
    comparison: {
      before: "Standard unencrypted networking channels exposed bulk data to any passive listener across the communication node relay.",
      solved: "Integrated seamlessly into modern defense-in-depth routing matrices."
    }
  },
`;
}

// We will overwrite algorithms.js completely.
// But we don't want to lose the original 15! I'll read the ORIGINAL 15 from a backup or recreate them.
// Wait, I already appended them to algorithms.js...
// Let's just generate the whole file clean but keep the top 15 because I know what they are.

// Actually, I can just dynamically import extended.js and merge it with algorithms.js during runtime in the components? 
// Yes! I'll modify algorithms.js to do exactly that.
