<template>
  <BasicCard>
    <el-table :data="catalogs">
        <el-table-column type="expand">
            <template slot-scope="scope">
                <el-table :data="scope.row.itemList">
                    <el-table-column label="商品ID" prop="itemId"></el-table-column>
                    <el-table-column label="商品名称" prop="itemName"></el-table-column>
                    <el-table-column label="商品单价" prop="listPrice"></el-table-column>
                </el-table>
            </template>
        </el-table-column>
        <el-table-column label="大类ID" prop="categoryId"></el-table-column>
        <el-table-column label="大类名称" prop="categoryName"></el-table-column>
    </el-table>
  </BasicCard>
</template>

<script>
import BasicCard from "../PanelCard/BasicCard";
import myaxios from "../../plugins/myaxios";

export default {
  components: { BasicCard },
  methods: {
    fetchData() {
      myaxios.get("/goods/catalog").then(res => {
        this.catalogs = res.data;
      });
    }
  },
  data: function() {
    return {
      catalogs: [
        {
          itemList: [
            {
              itemId: "79",
              itemName: "具常土为系",
              listPrice: 45
            },
            {
              itemId: "45",
              itemName: "近道工我",
              listPrice: 62
            },
            {
              itemId: "71",
              itemName: "说度片族",
              listPrice: 58
            },
            {
              itemId: "61",
              itemName: "长动发",
              listPrice: 62
            },
            {
              itemId: "72",
              itemName: "些原以音象院",
              listPrice: 90
            }
          ],
          categoryId: "97",
          categoryName: "候习便亲受场"
        },
        {
          itemList: [
            {
              itemId: "27",
              itemName: "队难千院该",
              listPrice: 25
            },
            {
              itemId: "99",
              itemName: "龙组报",
              listPrice: 93
            },
            {
              itemId: "45",
              itemName: "权计形机取都",
              listPrice: 78
            },
            {
              itemId: "13",
              itemName: "任必在且适",
              listPrice: 61
            },
            {
              itemId: "61",
              itemName: "决有专农业克",
              listPrice: 32
            }
          ],
          categoryId: "26",
          categoryName: "关队集个部"
        },
        {
          itemList: [
            {
              itemId: "45",
              itemName: "头义每她更文",
              listPrice: 45
            },
            {
              itemId: "33",
              itemName: "特县命她质",
              listPrice: 5
            },
            {
              itemId: "21",
              itemName: "家上阶和深",
              listPrice: 26
            },
            {
              itemId: "32",
              itemName: "如值格",
              listPrice: 5
            },
            {
              itemId: "60",
              itemName: "约六该先给书",
              listPrice: 87
            }
          ],
          categoryId: "39",
          categoryName: "业门布阶院"
        },
        {
          itemList: [
            {
              itemId: "52",
              itemName: "花政力主",
              listPrice: 3
            },
            {
              itemId: "76",
              itemName: "圆必到儿",
              listPrice: 71
            }
          ],
          categoryId: "11",
          categoryName: "越做书上养会"
        }
      ]
    };
  },
  mounted() {
      this.fetchData();
  }
};
</script>

<style>
</style>