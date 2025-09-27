<!-- SelectInput.vue (formerly TInputSelect) -->
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useBemm } from 'bemm';
import InputBase from '../BaseInput/BaseInput.vue' // This will be the migrated InputBase
import type { AcceptedOptions, OptionGroup, Option, SelectInputProps, SelectInputEmits } from './SelectInput.model'
import { Size } from '../../../types'

// Define a normalized option group type where all options are Option objects
interface NormalizedOptionGroup {
	title: string
	options: Option[]
}

// Change the type to allow null
const model = defineModel<string | null>({
	default: undefined,
});

const props = withDefaults(defineProps<SelectInputProps>(), {
	value: '',
	label: '',
	description: '',
	error: () => [],
	size: Size.MEDIUM,
	allowNull: false,
	nullLabel: 'Please select...',
	disabled: false,
	options: () => [],
});

const emit = defineEmits<SelectInputEmits>()

const block = 'select-input';
const bemm = useBemm(block);

const toOptions = (option: string | Option): Option => {
	if (typeof option === 'string') {
		return {
			label: option,
			value: option,
		};
	} else if (option && typeof option === 'object' && ('label' in option || 'value' in option)) {
		return {
			label: option.label || option.value || '',
			value: option.value || option.label || '',
			disabled: option.disabled,
			icon: option.icon
		};
	} else {
		console.warn('Invalid option format:', option);
		return {
			label: String(option),
			value: String(option),
		};
	}
};

const hasOptionGroups = (options: AcceptedOptions): boolean => {
	if (!options || !Array.isArray(options)) return false;
	return options.some((option) => {
		return typeof option === 'object' && 'title' in option && 'options' in option;
	});
};

const hasGroups = ref(hasOptionGroups(props.options));

const optionsObject = computed<Option[] | NormalizedOptionGroup[]>(() => {
	if (hasOptionGroups(props.options)) {
		return (props.options as OptionGroup[]).map((group: OptionGroup): NormalizedOptionGroup => {
			return {
				title: group.title,
				options: group.options.map((option: string | Option) => toOptions(option)),
			};
		});
	}

	return (props.options as string[] | Option[]).map((option: string | Option) => toOptions(option));
});

const handleChange = (value: string | null) => {
	const finalValue = props.allowNull && value === '' ? null : value;
	emit('change', finalValue);
};
</script>

<template>
	<InputBase
		v-if="model !== undefined"
		v-model="model"
		:block="block"
		:label="label"
		:description="description"
		:error="error"
		:size="size"
		:disabled="disabled"
		@change="handleChange"
		@touched="$emit('touched', $event)"
	>
		<template #control="{ id, value: inputValue, disabled, handleInput }">
			<select
				:id="id"
				:value="inputValue ?? ''"
				:class="bemm('control')"
				:disabled="disabled"
				@input="handleInput"
				@change="handleInput"
			>
				<option
					v-if="allowNull"
					value=""
				>
					{{ nullLabel }}
				</option>

				<template v-if="!hasGroups">
					<option
						v-for="option in optionsObject as Option[]"
						:key="option.value"
						:value="option.value"
					>
						{{ option.label }}
					</option>
				</template>

				<template v-if="hasGroups">
					<optgroup
						v-for="group in optionsObject as NormalizedOptionGroup[]"
						:key="group.title"
						:label="group.title"
					>
						<option
							v-for="option in group.options"
							:key="option.value"
							:value="option.value"
						>
							{{ option.label }}
						</option>
					</optgroup>
				</template>
			</select>
		</template>
	</InputBase>
	<InputBase
		v-else
		:value="props.modelValue ?? ''"
		:block="block"
		:label="label"
		:description="description"
		:error="error"
		:size="size"
		:disabled="disabled"
		@change="handleChange"
		@touched="$emit('touched', $event)"
	>
		<template #control="{ id, value: inputValue, disabled, handleInput }">
			<select
				:id="id"
				:value="inputValue ?? ''"
				:class="bemm('control')"
				:disabled="disabled"
				@change="
					(e) => {
						handleInput(e);
						handleChange((e.target as HTMLSelectElement).value || null);
					}
				"
			>
				<option
					v-if="allowNull"
					value=""
				>
					{{ nullLabel }}
				</option>

				<template v-if="!hasGroups">
					<option
						v-for="option in optionsObject as Option[]"
						:key="option.value"
						:value="option.value"
					>
						{{ option.label }}
					</option>
				</template>

				<template v-if="hasGroups">
					<optgroup
						v-for="group in optionsObject as NormalizedOptionGroup[]"
						:key="group.title"
						:label="group.title"
					>
						<option
							v-for="option in group.options"
							:key="option.value"
							:value="option.value"
						>
							{{ option.label }}
						</option>
					</optgroup>
				</template>
			</select>
		</template>
	</InputBase>
</template>

<style lang="scss">
.select-input {
	&__control {
		appearance: none;
		background-image: url('data:image/svg+xml,<svg id="chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><polyline points="13.95 27.23 36.23 49.5 58.5 27.23" style="fill: none; stroke: currentColor; stroke-linejoin: round; stroke-width:4" /></svg> ');
		background-repeat: no-repeat;
		background-position: right 0.7rem top 50%;
		background-size: 1em auto;
		width: 100%;
		height: var(--input-height, 2.5rem);
		padding: 0 2.5rem 0 var(--input-padding, 0.75rem);
		background-color: var(--color-background, #000000);
		border: 1px solid var(--input-border-color, rgba(255, 255, 255, 0.2));
		border-radius: var(--input-radius, var(--space-xs, 0.5rem));
		color: var(--color-foreground, #ffffff);
		font-size: var(--input-font-size, 0.875rem);
		transition: all 0.2s ease;
		cursor: pointer;

		&:focus {
			outline: none;
			border-color: var(--color-primary, #3b82f6);
			box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary, #3b82f6), transparent 80%);
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
			background: var(--color-accent, rgba(255, 255, 255, 0.05));
		}
	}
}
</style>