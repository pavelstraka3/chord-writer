import React from "react";
import { Section } from "@/app/lib/classes/Section";
import LineComponent from "@/app/components/Line";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

type Props = {
  section: Section;
};

const SectionComponent = ({ section }: Props) => {
  return (
    <Card className="my-2">
      <CardHeader>
        <h3>{section.sectionName}</h3>
      </CardHeader>
      <CardContent>
        {section.lines.map((line, lineIndex) => (
          <LineComponent line={line} key={lineIndex} />
        ))}
      </CardContent>
    </Card>
  );
};

export default SectionComponent;
