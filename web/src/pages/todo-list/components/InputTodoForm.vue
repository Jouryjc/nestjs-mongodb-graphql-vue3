<template>
  <IxForm :control="formGroup">
    <IxFormItem label="任务名称" required>
      <IxInput control="name" />
    </IxFormItem>
  </IxForm>
</template>

<script setup lang="ts">
import { useFormGroup, Validators } from '@idux/cdk/forms';

const { required } = Validators
const formGroup = useFormGroup({
  name: ['', required]
})

defineExpose({
  valid: () => formGroup.valid.value ? true : formGroup.markAsDirty(),
  getValue: () => formGroup.getValue()
})

</script>

<style lang="less" scoped>
</style>