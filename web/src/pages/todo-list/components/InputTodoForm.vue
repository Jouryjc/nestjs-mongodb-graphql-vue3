<template>
  <IxForm :control="formGroup">
    <IxFormItem label="任务名称" required>
      <IxInput control="name" />
    </IxFormItem>
    <IxFormItem v-if="showStatusSelect" label="任务状态" required class="status-select-form-item">
      <IxSelect  :dataSource="dataSource" control="status" />
    </IxFormItem>
  </IxForm>
</template>

<script setup lang="ts">
import { useFormGroup, Validators } from '@idux/cdk/forms';
import { SelectData } from '@idux/components';
import { computed, onMounted, PropType } from 'vue';
import { taskStatusText } from '../const';
import { TableRow } from '../type';

const props = defineProps({
  formData: Object as PropType<TableRow>
})

const dataSource: SelectData[] = [
  { key: 'pending', label: taskStatusText.pending },
  { key: 'doing', label: taskStatusText.doing },
  { key: 'finished', label: taskStatusText.finished },
]
const { required } = Validators
const formGroup = useFormGroup({
  name: ['', required],
  status: ['pending']
})

const showStatusSelect = computed(() => !!props.formData?._id)
onMounted(() => {
  if (props.formData) {
    formGroup.setValue(props.formData)
  }
})

defineExpose({
  valid: () => formGroup.valid.value ? true : formGroup.markAsDirty(),
  getValue: () => formGroup.getValue(),
  setValue: (data: TableRow) => formGroup.setValue(data)
})

</script>

<style lang="less" scoped>
.status-select-form-item {
  width: 446px;
}
</style>