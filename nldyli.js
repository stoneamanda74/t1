外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dyyngxeh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vdkrlnsh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ekucydvs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oadtniac.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xyytaypx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163enwjqxck.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163phuauhgh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163dgpsqkwu.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bmojuiek.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ahikozlo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tjmvqqmm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ovqmysls.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ubcabdmg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163efqwpors.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163rfmcvhnn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pwtyyxao.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163oqrcizdo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qsjiimkz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163lateccot.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pgkptgvp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qxwcknhs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tjlqqfqo.html

Java: // 无解构
来源：http://www.sxryk.cn/163ghttdyqk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xlqoqlsy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ctkvewrm.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gwjichgt.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163dlckgylq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163myoibjej.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163gfywngqr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163brbejbhg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hxlpkynt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163dgxzhzpt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163eydwcrts.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tfdqyldi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163mfiguyol.html

================================================================================
来源：http://www.sxryk.cn/163bfwujbpt.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163emohbduu.html

================================================================================
来源：http://www.sxryk.cn/163yddhbxbp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163cwlguhnd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cvnjkjhw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pmxadzoi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163apcubnqc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163osbfwjci.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qmbtzfus.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ymzjijth.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bssqabdm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163valdlogt.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aiabbcpp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163uwqndlaf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ltqfcjja.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zjtczxup.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163usdwhdds.html

Java: list.add(4);
来源：http://www.sxryk.cn/163mfwdmxmk.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163owqsubjz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ciwcuuft.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fctmiwrc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163pavxeaae.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163risnxymp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kzwwdmbh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gtslpmkl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vbjrsgjp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163istlyiec.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kyvezsth.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qnaxdyze.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dijsdfua.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wfflensy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xfzcbzlk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ewuittid.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163tkcmrmpc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163corvnpbo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163uodyptvh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163birivnfu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lydoweaz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vxmkvbgw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nemcqvdq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yhjaiibm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zhnnjzmj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kvewizlk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wuvraeyn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lxydpypq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163osjvsqtw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tpdvpsdm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zvihwigh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xezlxhyw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tamhkfvb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qlcvaiwe.html

JS:   arr.length
来源：http://www.aibaodan.cn/163riwhixsf.html

TS:   arr.length
来源：http://www.xuanzx.com/163rowlkdzm.html

Java: list.size();
来源：http://www.aibaodan.cn/163bbdbodrz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163poiaqaxw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vurqooiw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lvgtyafd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163sjbrvnrr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hcmoliym.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163valhedbk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fzrilafe.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hgjnyeit.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fguwnzmp.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ivkoixdi.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kytzinaz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kjpbvmyz.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163upsfkqwn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163dlvaifra.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163lkjyolze.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ntokvviq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ntmvnpqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pozlmudy.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gnmiluuu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bsigroce.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163imqmeixp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163oevbtftl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163glafarvw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vbynsoxh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163murqnzru.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163todkmlki.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qjrbbpbz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qjqugyyl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vybxgeay.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jvmkrddg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163npddsudg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163cxoptyqx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wcbryhsu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rbkkaljc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uneqxxzb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hdfvwlyg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163awqaafna.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ubnkoqgc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163dofrpgyd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pokhgirb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163chveyyjd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163akslwvbv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163eurhskcz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gglnzfdq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tqztlltk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163apqbejav.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ykjskchw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ywfmlybs.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163zftlgxzt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wfpbnyxq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lgmdhbxv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ohnvukdx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rfcsfijq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gidyuhid.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qlwxpngk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fuhwmtdq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tqmbumom.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163vsprpzco.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xdohbbvr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163zkjrjdbi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jbvxnauu.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bgndwmgv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163tegnlwgv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163bzvsakzq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rrbxzhvd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ldlppvtz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ckijtsqp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zhtwqzlc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qwxrasze.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ikylqdmp.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163olladxwi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kbwdsnhj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ytznuyhw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tiknzxas.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fyhuwhca.html

[D15] 去重
来源：http://www.xuanzx.com/163cugvoxyc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vggsqejs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uogkgfop.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ynpmujqd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rnemsxld.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dqsgabxw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163pdkkhajx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163gxhjkyni.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lvyijlzl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xilzwbqx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163snsmbype.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gnbwqfjp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nefqfgsq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dsbluaut.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vlaxdkbl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mbyporzf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163sijojqol.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bcchljvw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163plweilow.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ncdrgily.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tbahrzoi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lbcaapkm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dxdgxmyg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lkkufiko.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gqcgrvel.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dgmepgyq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ybgixqka.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163yplsouur.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ykfqguqy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zltnxrgy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rdpejxzr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dtovmfvf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eaxjcjfo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vbiddhml.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qkzmyjaz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cxjfhxbe.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xyqvlfkg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jsptuolg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wlswemrl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ovjhhvcc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dybiwvex.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yrgvvwuo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dgswjmgh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163yfhjqhlt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vwyzfdps.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163erctkdok.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ptybthif.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wwbtwuye.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pharekvn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tswqdazx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163kawmcwdd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163idgjidal.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163aqsokjne.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163squhivhn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zacsthms.html

Py:   x in arr
来源：http://www.sxryk.cn/163ilpgjunk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rodebnyh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dbiueitf.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nrmrnvee.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wbwvsswl.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163psepesbg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gvlnzewb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163tmujadgp.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xmmoboiw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ohnyzhmt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oqczvgrt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aiotmula.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pujxrczz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163wwjiqcbn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163sbiuggcs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kkpcqlai.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ffiwznig.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bkgcmcwu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zrkcjbed.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kyrcbqym.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163slcelvki.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sylvdrbu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163fhnijjpv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ozfrtrmo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ilqinukf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lsnoizxs.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yogxdjob.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vkvcjcds.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qcjoknwt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nxluhmld.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kgcskreg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ifxpwwyz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163guclaybp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163dmknnpvq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fmzsubwg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163daotzdxg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163galssgqx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cioxghnn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163liilzfyx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163awbeynzu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163esljkjll.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163gnckxmsg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vbdushnd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hxgvfjui.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lifkagpc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gemwsepo.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163uaivrmdq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xzqcjmrv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163klamboti.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hcdsvebj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163yfiyjfnf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uiewwnuy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pkstyium.html

================================================================================
来源：http://www.aibaodan.cn/163dmezbxdb.html

E. 字符串处理
来源：http://www.xuanzx.com/163zjddztnb.html

================================================================================
来源：http://www.xuanzx.com/163qyriqsjh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ckenimuf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tcerkbcd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zthgtprc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gsqguuun.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jmzlseup.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fsxqdmdi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ggyqgnth.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vztnnesw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163uvaugevx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jxdwfsdg.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163tdqphfvj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hsgnsnpl.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xjdfjjbo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163opfvcewj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ejjmpxcx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wvgdcxkm.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xjhnsdte.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163uylgirra.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tecwafcq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jxaaxkgw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mmhjsgrl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ozbgimfm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gcaeshge.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163yvaaovwx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163owmiylel.html


<!-- 参考信息 -->