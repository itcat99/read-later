import type React from 'react';
import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import type { Config } from '../../lib/config';
import defaultConfig from '../../lib/config';
import { useSettingsStore } from '../../stores/settingsStore';

const StyleRoot = styled.section<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #eee;
  flex-direction: column;
  z-index: 9;
  header {
    font-size: 20px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const List = styled.ul`
  flex-grow: 1;
`;

const BaseBtn = styled.button`
  flex-grow: 1;
  height: 26px;
  border-radius: 0;
  border: none;
  background-color: rgba(44, 44, 44, 0.5);
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 300ms;
  &:hover {
    opacity: 0.5;
    transition: opacity 300ms;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const ResetBtn = styled(BaseBtn)`
  background-color: rgb(75, 52, 206);
`;

const SaveBtn = styled(BaseBtn)`
  background-color: rgb(206, 75, 52);
`;

const ItemRoot = styled.li`
  display: flex;
  margin-bottom: 6px;
  padding: 2px 10px;
  align-items: center;
  height: 18px;

  label {
    margin-right: 12px;
    flex-basis: 30%;
  }

  input {
    height: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #eee;
    flex-grow: 1;
    padding: 4px 10px;

    &:focus {
      outline: none;
      border-bottom-color: rgba(75, 52, 206, 0.5);
    }
  }
`;

interface SettingsItemProps {
  name: string;
  value: string | number;
  title: string;
  onChange: (data: Partial<Config>) => void;
}

const SettingsItem: React.FC<SettingsItemProps> = memo(({ name, value, title, onChange }) => {
  return (
    <ItemRoot>
      <label htmlFor={name}>{title}: </label>
      <input
        type="text"
        name={name}
        id={name}
        defaultValue={String(value)}
        onInput={(e) => {
          const data: Partial<Config> = {};
          (data as any)[name] = (e.target as HTMLInputElement).value;
          onChange(data);
        }}
      />
    </ItemRoot>
  );
});

const Settings: React.FC = () => {
  const open = useSettingsStore((s) => s.open);
  const settings = useSettingsStore((s) => s.settings);
  const setOpen = useSettingsStore((s) => s.setOpen);
  const updateSettings = useSettingsStore((s) => s.updateSettings);

  const [localSettings, setLocalSettings] = useState<Config>({
    ...defaultConfig,
    ...settings,
  });

  const handleChange = useCallback((data: Partial<Config>) => {
    setLocalSettings((prev) => ({ ...prev, ...data }));
  }, []);

  const handleSave = () => {
    updateSettings(localSettings);
    setOpen(false);
  };

  const handleReset = () => {
    updateSettings(defaultConfig);
    setLocalSettings({ ...defaultConfig });
    setOpen(false);
  };

  const items = Object.keys(defaultConfig).map((key) => (
    <SettingsItem
      key={key}
      name={key}
      value={localSettings[key as keyof Config]}
      title={key.replace('_', ' ').trim()}
      onChange={handleChange}
    />
  ));

  return (
    <StyleRoot $isOpen={open}>
      <header>Settings</header>
      <List>{items}</List>
      <Actions>
        <ResetBtn onClick={handleReset}>reset</ResetBtn>
        <SaveBtn onClick={handleSave}>save</SaveBtn>
        <BaseBtn onClick={() => setOpen(false)}>cancel</BaseBtn>
      </Actions>
    </StyleRoot>
  );
};

export default memo(Settings);
