export type openDBType = {
  onix: {
    RecordReference: string;
    NotificationType: string;
    ProductIdentifier: {
      ProductIDType: string;
      IDValue: string;
    };
    DescriptiveDetail: {
      ProductComposition: string;
      ProductForm: string;
      ProductFormDetail: string;
      Measure: {
        MeasureType: string;
        Measurement: string;
        MeasureUnitCode: string;
      }[];
      Collection: {
        CollectionType: string;
        TitleDetail: {
          TitleType: string;
          TitleElement: {
            TitleElementLevel: string;
            TitleText: {
              collationkey: string;
              content: string;
            };
          }[];
        };
      };
      TitleDetail: {
        TitleType: string;
        TitleElement: {
          TitleElementLevel: string;
          TitleText: {
            collationkey: string;
            content: string;
          };
        };
      };
      Contributor: {
        SequenceNumber: string;
        ContributorRole: string[];
        PersonName: {
          collationkey: string;
          content: string;
        };
      }[];
      Language: {
        LanguageRole: string;
        LanguageCode: string;
      }[];
      Extent: {
        ExtentType: string;
        ExtentValue: string;
        ExtentUnit: string;
      }[];
      Subject: (
        | {
            MainSubject: string;
            SubjectSchemeIdentifier: string;
            SubjectCode: string;
          }
        | {
            SubjectSchemeIdentifier: string;
            SubjectCode: string;
            MainSubject?: undefined;
          }
      )[];
      Audience: {
        AudienceCodeType: string;
        AudienceCodeValue: string;
      }[];
    };
    CollateralDetail: {
      TextContent: {
        TextType: string;
        ContentAudience: string;
        Text: string;
      }[];
      SupportingResource: {
        ResourceContentType: string;
        ContentAudience: string;
        ResourceMode: string;
        ResourceVersion: {
          ResourceForm: string;
          ResourceVersionFeature: {
            ResourceVersionFeatureType: string;
            FeatureValue: string;
          }[];
          ResourceLink: string;
        }[];
      }[];
    };
    PublishingDetail: {
      Imprint: {
        ImprintIdentifier: {
          ImprintIDType: string;
          IDValue: string;
        }[];
        ImprintName: string;
      };
      PublishingDate: {
        PublishingDateRole: string;
        Date: string;
      }[];
    };
    ProductSupply: {
      MarketPublishingDetail: {
        MarketPublishingStatus: string;
      };
      SupplyDetail: {
        ProductAvailability: string;
        Price: {
          PriceType: string;
          PriceAmount: string;
          CurrencyCode: string;
        }[];
      };
    };
  };
  hanmoto: {
    datecreated: string;
    reviews: {
      post_user: string;
      reviewer: string;
      source_id: number;
      kubun_id: number;
      source: string;
      choyukan: string;
      han: string;
      link: string;
      appearance: string;
      gou: string;
    }[];
    dateshuppan: string;
    datemodified: string;
  };
  summary: {
    isbn: string;
    title: string;
    volume: string;
    series: string;
    publisher: string;
    pubdate: string;
    cover: string;
    author: string;
  };
};
