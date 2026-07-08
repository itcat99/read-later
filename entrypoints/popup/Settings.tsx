import type React from 'react';
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

const SettingsItem: React.FC<SettingsItemProps> = memo(({ name, value, title, onChange }) => {
  return (
    <li className="flex items-center h-[18px] mb-1.5 px-2.5">
      <label
        htmlFor={name}
        className="mr-3 flex-[0_0_30%] text-sm text-gray-600 dark:text-gray-300"
      >
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
        className="h-full border-none border-b border-gray-300 dark:border-gray-600 bg-transparent flex-1 px-2.5 py-1 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:border-b-purple-400"
      />
    </li>
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
    <section
      className={open ? 'flex' : 'hidden'}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 9,
      }}
    >
      <div className="flex flex-col w-full h-full bg-gray-100 dark:bg-gray-800">
        <header className="text-xl mb-2.5 px-2.5 pt-2.5 text-gray-700 dark:text-gray-200">
          Settings
        </header>
        <ul className="flex-1 list-none p-0 m-0">{items}</ul>
        <div className="flex">
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 h-7 border-none text-white cursor-pointer bg-purple-700 hover:opacity-50 transition-opacity duration-300"
          >
            reset
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 h-7 border-none text-white cursor-pointer bg-red-600 hover:opacity-50 transition-opacity duration-300"
          >
            save
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex-1 h-7 border-none text-white cursor-pointer bg-gray-600 hover:opacity-50 transition-opacity duration-300"
          >
            cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Settings);
