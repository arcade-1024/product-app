import styles from "../../../../styles/toggle.module.css";
import { Moon, Sun } from "react-feather";
export interface ToggleButtonInterface {
	buttonId: string;
	defaultButtonState?: boolean;
	disabled?: boolean;
	onClick: () => void;
	setChecked?: () => void;
}
export default function ToggleButton({
	buttonId,
	defaultButtonState,
	disabled,
	onClick,
}: //	setChecked,
ToggleButtonInterface) {
	return (
		<>
			<div
				className={`relative inline-block w-14 mr-2 align-middle   transition duration-200 ease-in `}
			>
				<input
					type="checkbox"
					name="toggle"
					id={buttonId}
					className={`${styles.toggleCheckbox} hidden`}
					checked={defaultButtonState}
					disabled={disabled}
					onClick={onClick}
					readOnly={true}
				/>
				<label
					htmlFor={buttonId}
					className={`${
						styles.toggleLabel
					} flex items-center overflow-hidden h-8 rounded-full dark:opacity-95 bg-gray-300 dark:bg-stone-800 ${
						disabled ? "cursor-not-allowed" : "cursor-pointer"
					}`}
				>
					{defaultButtonState ? (
						<Moon size={18} className="absolute left-1 text-white " />
					) : (
						<Sun className="absolute right-1.5 " size={18} />
					)}
					<div
						className={`${
							styles.toggleSwitch
						} absolute block w-5 h-5 rounded-full bg-white appearance-none ${
							disabled ? "cursor-not-allowed" : "cursor-pointer"
						} focus:ring-0 mx-1`}
					></div>
				</label>
			</div>
		</>
	);
}
