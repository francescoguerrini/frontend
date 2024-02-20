import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-full flex-col h-32 overflow-auto">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Rosita">
          <Card>
            <CardBody className="bg-[#f3f3f3] text-tiny">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Augusto">
          <Card>
            <CardBody className="bg-[#f3f3f3] text-tiny">
              Ut enim ad minim veniam.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Deborah">
          <Card>
            <CardBody className="bg-[#f3f3f3] text-tiny">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
