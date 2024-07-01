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
import IconResolver, { AllIconNames, Close, Search } from "../components/Icons";
import "./Field.css";
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

  return (
    <Form>
      <Stack flexDirection="column" alignItems="start" className="stack">
        <Autocomplete
          items={filteredItems}
          onInputValueChange={handleInputValueChange}
          onSelectItem={handleSelectItem}
          isRequired={sdk.field.required}
          icon={<Search />}
          className="autoComplete"
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          renderItem={(item) => (
            <span className="dropdownRow">
              <p>{item}</p>
              <IconResolver svgName={item} className={"icon"} />
            </span>
          )}
        />

        <Paragraph className="detail">
          Selected Icon:
          <Flex gap="10px" alignItems="center">
            <b>{icon}</b>{" "}
            {icon ? <IconResolver svgName={icon} className={"icon"} /> : null}
          </Flex>
        </Paragraph>

        <Button
          onClick={() => setIcon(null)}
          size="small"
          endIcon={<Close />}
          isDisabled={icon === null}
        >
          Clear Selected Icon
        </Button>
      </Stack>
    </Form>
  );
};

export default Field;
