<script>
  import { ResourceSchedule, Time } from "@upswyng/upswyng-core";
  import { RRule } from "rrule";
  import Select from "svelte-select";

  const monthReoccurenceOptions = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
    { value: "third", label: "third" },
    { value: "fourth", label: "fourth" },
    { value: "last", label: "last" },
  ];

  const dailyReoccurenceOptions = [
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
  ];
</script>

<div class="content">
  <fieldset>
    <div class="control">
      <label for="monthly-reoccurence" class="label">On the</label>
      <Select
        id="monthly-reoccurence"
        name="monthly-reoccurence"
        items={monthReoccurenceOptions} />
    </div>
    <div class="control">
      <label for="daily-reoccurence" class="label">Day</label>
      <Select
        id="daily-reoccurence"
        name="daily-reoccurence"
        items={dailyReoccurenceOptions} />
    </div>
  </fieldset>
</div>
