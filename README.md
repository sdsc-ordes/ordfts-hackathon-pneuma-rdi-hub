# PNEUMA RDI Hub

[![Badge Name](https://example.com/badge-image.png)](https://example.com/badge-link)

> [!CAUTION]
> This project is not an official RDI Hub by the pNeuma team. It is a prototype created for the hackathon and intended to serve as inspiration. We would like to express our gratitude to the pNeuma team for their support and guidance in this endeavor.

This is an example of a hackathon project proposing a Research Data Infrastrucre (RDI) Hub prototype around the pNeuma project. The RDI is designed with simplicity in mind, a flexible structure that allows iterative development next to the community, and a low operational cost. For this reasons, the RDI takes advantage of Github techonology in order to host a catalog of research assets, provide a discussion forum, and distribute the content via github pages.

- [Go here if you wanna know more about the hackathon](https://sdsc-hackathons.ch/)
- [EPFL pNeuma project](https://open-traffic.epfl.ch)

## Features of this RDI Hub

- **Catalog of related assets**: These are cards 
- **Contributions & revision guidelines**: 
- **Automations**:
- **Static landing page**: 
- **Blog**: 
- **Interative serverless webapps**: 
- **Tutorials**: Basic operations 


This RDI Hub follow the FAIR principles: 

- Findability: It helps to find related assets via the catalog and the static landing page. 
- Accesibility: 
- Interoperability: The catalog follows the schema located in `./catalog/schemas/` and is available in machine-readable format allowing for easy interaction between tools, programming languages, and frameworks.
- Reproducibility: The mandatory request of D.O.I. of each asset used increase the reproducibility of the results in related 

Besides this, we would like to add more presence to the importance of the governance. With this model the 

## RDI Hub Structure

This RDI Hub Catalog is organized in: 

- `catalog`:
- `site`:

The structure can evolve with the time as a function of the community needs. New RDI Hub structures proposals can be made by the community via fork of this repository and requesting a pull request.  


### Catalog

This is where the catalog of assets is located. The assets available in this first prototype are: 

- Datasets
- Repositories
- Publications
- Models
- Webapps
- Projects

Each of these assets type has one basic metadata file requested. 

## How to...?

### How the community can add a new research asset? 

1. Fork the RDI-Hub. 
2. Use the schema template located in `/catalog/schemas`
3. Fill the template with all requested data and start a Pull Request (PR) to this repository. 
4. This will open a discussion thread with the community and moderators of the hub. 
5. The PR approval will trigger a github action, validating the item added.
6. The action will render the new information in the page


#### How to add a new project to this Hub?

TBD

#### How to add a new datasets/model/publication to the Hub?

TBD

### How the community can add a new research asset type?

Adding or editing a research schema is as easy a modifying one of the files located in `/catalog/schemas`

### How the community can add a new webapp? 

Making use of the last development in webassembly technologies 


### How the page is built?

### How is the roadmap organized? 

Open issues are registered in the repository and taken by the community. 


## Development

### How to test the github action build index?

The github action can be tested by pulling both branches:

## Develop by

Develop by SDSC in the frame of the Open Research Data for the Sciences Hackathon in collaboration with the EPFL Open Science office. We thanks the pNeuma Team for the support during the development of this prototype. 
