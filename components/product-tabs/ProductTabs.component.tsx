import {
  TabContainer,
  TabPill,
  TabPills,
  TabsContainer,
} from "./ProductTabs.styles";
import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  Document,
  Node,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import Image from "next/image";

interface Props {
  description: string;
  overview: Block | Inline;
  specifications?: Block | Inline;
  warranty?: Block | Inline;
}

const ProductTabs = ({
  description,
  overview,
  specifications,
  warranty,
}: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  const overviewOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const { file, title } = node.data.target.fields;
        return (
          <Image
            src={`https:${file.url}`}
            style={{ width: "100%", height: "auto" }}
            height={file.details.image.height}
            width={file.details.image.width}
            alt={title}
            priority
            quality="100"
          />
        );
      },
    },
  };

  const specOptions = {
    renderText: (text: string) =>
      text
        .split("\n")
        .flatMap((text, i) => [i > 0 && <br key={text + i} />, text]),
  };

  const tabs = [
    {
      title: "Overview",
      content: (
        <TabContainer key="overview tab">
          {description}
          {overview.content.map((section, index) => {
            return (
              <React.Fragment key={`overview-${index}`}>
                {documentToReactComponents(
                  section as Document,
                  overviewOptions
                )}
              </React.Fragment>
            );
          })}
        </TabContainer>
      ),
    },
  ];

  if (specifications) {
    tabs.push({
      title: "Specifications",
      content: (
        <TabContainer key="specifications tab">
          {specifications.content.map((section, index) => {
            return (
              <React.Fragment key={`specification-${index}`}>
                {documentToReactComponents(section as Document, specOptions)}
              </React.Fragment>
            );
          })}
        </TabContainer>
      ),
    });
  }

  if (warranty) {
    tabs.push({
      title: "Warranty",
      content: (
        <TabContainer key="warranty tab">
          {warranty.content.map((section, index) => {
            return (
              <React.Fragment key={`warranty-${index}`}>
                {documentToReactComponents(section as Document)}
              </React.Fragment>
            );
          })}
        </TabContainer>
      ),
    });
  }

  return (
    <TabsContainer>
      <TabPills>
        {tabs.map((tab, index) => (
          <TabPill
            key={`${tab.title} pill`}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </TabPill>
        ))}
      </TabPills>
      {tabs.map((tab, index) => {
        if (activeTab === index) return tab.content;
      })}
    </TabsContainer>
  );
};

export default ProductTabs;
