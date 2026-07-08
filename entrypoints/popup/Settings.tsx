import { memo, useCallback, useState } from 'react';
import type { Config } from '../../lib/config';
import defaultConfig from '../../lib/config';
import { useSettingsStore } from '../../stores/settingsStore';

interface SettingsItemProps {
  name: string;
  value: string | number;
  title: string;
  onChange: (data: Partial<Config>) => void;
}

const SettingsItem = memo(({ name, value, title, onChange }: SettingsItemProps) => (
  <li className="flex items-center h-[18px] mb-1.5 px-2.5">
    <label htmlFor={name} className="mr-3 flex-[0_0_30%] text-sm text-gray-600 dark:text-gray-300">
      {title}:
    </label>
    <input
      type="text"
      name={name}
      id={name}
      defaultValue={String(value)}
      onInput={(e) => {
        const data: Partial<Config> = {};
        (data as Record<string, unknown>)[name] = (e.target as HTMLInputElement).value;
        onChange(data);
      }}
      className="h-full border-none border-b border-gray-300 dark:border-gray-600 bg-transparent flex-1 px-2.5 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:border-b-purple-500 transition-colors"
    />
  </li>
));

const Settings = memo(() => {
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
      title={key.replace(/_/g, ' ').trim()}
      onChange={handleChange}
    />
  ));

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-10 flex flex-col bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 px-3 pt-2 mb-1">
        Settings
      </h2>
      <ul className="flex-1 list-none p-0 m-0">{items}</ul>
      <div className="flex">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 h-7 border-none text-white text-sm bg-purple-600 hover:bg-purple-700 cursor-pointer transition-colors duration-200"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="flex-1 h-7 border-none text-white text-sm bg-red-500 hover:bg-red-600 cursor-pointer transition-colors duration-200"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 h-7 border-none text-white text-sm bg-gray-500 hover:bg-gray-600 cursor-pointer transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

export default Settings;
