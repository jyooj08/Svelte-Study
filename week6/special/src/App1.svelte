<script>
  import Address from "./Address.svelte";

  let address = {
    label: "대한민국",
    children: [
      {
        label: "경기도",
        children: [{ label: "수원" }, { label: "성남" }],
      },
      {
        label: "강원도",
        children: [{ label: "강릉" }, { lable: "속초" }],
      },
    ],
  };
</script>

<Address {address} />
