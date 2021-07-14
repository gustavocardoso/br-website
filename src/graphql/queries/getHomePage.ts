const GET_HOME_PAGE = /* GraphQL */ `
  fragment brand on Brand {
    name
    logo {
      image {
        url
        width
        height
        alternativeText
      }
      url
    }
  }

  fragment menu on Menu {
    links {
      label
      url
    }
  }

  fragment footer on Footer {
    copyright
    socialLink {
      socialNetwork
      url
    }
  }

  fragment seo on Page {
    seo {
      pageTitle
      pageDescription
    }
  }

  fragment hero on Page {
    hero {
      heading
      description
      subHeading
      link {
        label
        url
      }
    }
  }

  fragment body on Page {
    body {
      __typename
      ... on ComponentPageTeamBlock {
        teamBlockTitle: title
        member {
          name
          role
          description
          photo {
            alternativeText
            url
          }
        }
      }
      ... on ComponentPageFeatureBlock {
        featureBlockTitle: title
        feature {
          title
          description
          icon {
            alternativeText
            url
          }
        }
      }
      ... on ComponentPageTextBlock {
        textBlockTitle: title
        text
      }
    }
  }

  query GET_HOME_PAGE {
    brand {
      ...brand
    }

    menu {
      ...menu
    }

    footer {
      ...footer
    }

    page(id: 1) {
      page
      ...seo
      ...hero
      ...body
    }
  }
`

export default GET_HOME_PAGE
