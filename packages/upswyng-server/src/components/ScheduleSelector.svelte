<script>
  import { onMount } from "svelte";
  import { ResourceSchedule, Time } from "@upswyng/upswyng-core";
  import { RRule } from "rrule";
  import moment from "moment-timezone";
  import ScheduleItem from "./ScheduleSelectorScheduleItem.svelte";
  import ScheduleMonthly from "./ScheduleMonthly.svelte";
  import ScheduleWeekly from "./ScheduleWeekly.svelte";
  import ScheduleYearly from "./ScheduleYearly.svelte";
  import Select from "svelte-select";

  const { tz } = moment;

  export let value; // TResourceSchedule

  // Run once mounted so this logic is executed on the user's machine
  // instead of on our server.
  onMount(() => {
    // If the resource is not always open and it doesn't have a timezone zet,
    // try to guess it.
    if (!value.timezone && !value.alwaysOpen) {
      const timezoneGuess = tz.guess();
      tz.zone(timezoneGuess) && (value.timezone = timezoneGuess);
      value = value;
    }
  });

  const repeatItems = [
    { value: "yearly", label: "Yearly" },
    { value: "monthly", label: "Monthly" },
    { value: "weekly", label: "Weekly" },
  ];
  let repeatState = repeatItems[0];
</script>

<h2>Schedule</h2>

<div class="content">
  <fieldset>
    <div class="field">
      <input
        id="always-open"
        class="switch is-medium is-primary"
        name="always-open"
        bind:checked={value.alwaysOpen}
        type="checkbox" />
      <label for="always-open">Always Open</label>
    </div>
  </fieldset>
</div>
<div class="content">
  <fieldset>
    <label class="label" for="timezone">Timezone</label>
    <Select
      isClearable={false}
      items={tz.names().map(z => ({ label: z.replace(/_/g, ' '), value: z }))}
      on:select={({ detail: tz }) => {
        value.timezone = tz.value;
        value = value;
      }}
      selectedValue={value.timezone ? { label: value.timezone.replace(/_/g, ' '), value: value.timezone } : null} />
  </fieldset>
</div>
<div class="content">
  {#each value.getItems() as scheduleItem, _i (JSON.stringify(scheduleItem))}
    <ScheduleItem
      item={scheduleItem}
      showDeleteAction={true}
      on:delete={({ detail: item }) => {
        value.removeItem(item);
        value = value;
      }} />
  {/each}
</div>
<h3>Add Schedule Entry</h3>
<div class="content">
  <div class="field">
    <label for="schedule-repeat" class="label">
      How often does this entry repeat?
    </label>
    <div class="control">
      <Select bind:selectedValue={repeatState} items={repeatItems} />
    </div>
  </div>
</div>
{#if repeatState.value === 'monthly'}
  <ScheduleMonthly />
{/if}
{#if repeatState.value === 'yearly'}
  <ScheduleYearly />
{/if}
{#if repeatState.value === 'weekly'}
  <ScheduleWeekly />
{/if}
