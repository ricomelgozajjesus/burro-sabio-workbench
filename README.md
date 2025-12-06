# Burro-Sabio Workbench  
*A cloud-native simulation and visualization environment for electric distribution systems.*

The **Burro-Sabio Workbench** is the foundation of a modular ecosystem designed to support
simulation, visualization, and natural-language interaction with electric distribution
models. This repository contains the **frontend UI**, the **backend Lambda microservices**, and
the **automation pipeline** required to publish new features to AWS with a single `git push`.

---

## 🚀 Vision

Burro-Sabio aims to provide:

- An intuitive, browser-based **Workbench** where users can load feeders, inspect data,
  run scenarios, and visualize results.
- A suite of backend microservices (PyDSS, OpenDSS, Kersting approximations, hosting capacity tools)
  exposed through AWS Lambda.
- A natural-language command interface powered by LLMs.
- A reproducible CI/CD pipeline where any new capability is published automatically to AWS.

This repository is the starting point of that vision.

---

## 🧩 Repository Structure
