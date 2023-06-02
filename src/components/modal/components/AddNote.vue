<template>
  <form method="dialog">
    <h3 class="font-bold text-lg mb-6">Add new note</h3>
    <div class="grid gap-4">
      <textarea
        placeholder="What's on your mind?"
        class="textarea textarea-bordered textarea-ghost focus:textarea-ghost textarea-primary textarea-lg w-full placeholder:text-slate-500"
      ></textarea>
      <button class="btn btn-primary sm:btn-sm sm:justify-self-end">Save</button>
    </div>
  </form>
</template>
