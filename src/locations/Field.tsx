import { FieldAppSDK } from "@contentful/app-sdk";
import {
  Autocomplete,
  Button,
  Flex,
  Form,
  Paragraph,
  Stack,
} from "@contentful/f36-components";
import { useFieldValue, useSDK } from "@contentful/react-apps-toolkit";
import { useEffect, useState } from "react";
import IconResolver, { AllIconNames, Search } from "../components/Icons";

type FieldValue = string | null;

// height when open makes dropdown list visible with no scrolling in iframe
const OPEN_HEIGHT = 250;
const DEFAULT_HEIGHT = 155;

const Field = () => {
  const sdk = useSDK<FieldAppSDK>();

  const [icon, setIcon] = useFieldValue<FieldValue>();
  const [filteredItems, setFilteredItems] = useState(AllIconNames);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    sdk.window.updateHeight(isOpen ? OPEN_HEIGHT : DEFAULT_HEIGHT);
  }, [sdk, isOpen]);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = AllIconNames.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(newFilteredItems);
  };

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (item: string) => {
    setIcon(item);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Form>
      <Stack
        flexDirection="column"
        alignItems="start"
        style={{ width: "calc(100% - 2px)", left: 0 }}
      >
        <Autocomplete
          items={filteredItems}
          onInputValueChange={handleInputValueChange}
          onSelectItem={handleSelectItem}
          isRequired={sdk.field.required}
          icon={<Search />}
          style={{
            width: "100%",
          }}
          onOpen={() => setIsOpen(true)}
          onClose={handleClose}
          renderItem={(item) => (
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <p>{item}</p>
              <IconResolver svgName={item} />
            </span>
          )}
        />

        <Paragraph
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          Selected Icon:
          <Flex gap="10px" alignItems="center" style={{ height: "16px" }}>
            <b>{icon}</b> {icon ? <IconResolver svgName={icon} /> : null}{" "}
          </Flex>
        </Paragraph>
        <Button onClick={() => setIcon(null)}>Clear Icon</Button>
      </Stack>
    </Form>
  );
};

export default Field;
