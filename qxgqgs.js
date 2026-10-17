外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163pufqvapw.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ygkvjbrr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163wtbiayag.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163afctatrr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jfydxljt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163gqbjanyj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163juaasodp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ghjpfdcw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163eswanezs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163szlcfcny.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163arzzfzgc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hwgdvsxs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163hoyqvvan.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163suhitgxc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163glexyjcw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tzfllips.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wtefcrgc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rhjwvpyt.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pfujjabq.html

TS:   arr.length
来源：http://www.xuanzx.com/163uhxjzsju.html

Java: list.size();
来源：http://www.xuanzx.com/163bgrtoxqo.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ojgmzijp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dncaefat.html

C#:   list.Count;
来源：http://www.sxryk.cn/163hmexjaib.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mflddngp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xfhcavyr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hzorvrjf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lwxkydui.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163khptpkvf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xkuehosq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tddcsomi.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163guloqssp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tjfizvxf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163pfwdeolo.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lcmnuhjw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dxwdesgy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163qpgtmqqr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ahsfyzxz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pyzylizn.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zkiayoud.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163efmtftox.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163soounkvm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163stftoyng.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wynffzmw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163zwgyacfu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mwybbdqc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lksjfsue.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163barlixmb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ojvbackv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ohtaevkm.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ungdxtyj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vrscbsrp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dpqwadis.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cfuevjfj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cysrzuoz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163purpmdhy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163uzzvnaqa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qzxotoia.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mjrkxylh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bfemjdmz.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pwislcbu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163myfjviui.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jwbkreju.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lekdxynr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uffpbuov.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163asaclqnp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hzwnflqq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163aiyxpzqe.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qnobrfcy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163clujxxxy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bidwmhgt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qvjdbxui.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hmiaoowt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fmmjevhj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jjbtvlnc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zuuzxcsm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xsiradwk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yqayfopv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gmrheroz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qolyltyq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163njrbcnkl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wzoansvj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lxkmpcsd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163uynoyqqu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rkyudnqv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xhlibyyk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xtbirloo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hjhefrgz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gvzfgdux.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rpnxnxkk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rwcanlhe.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dpzyuwrx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163axfpwbjq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lhhgcmwt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rabsineq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jmejzqrt.html

[D15] 去重
来源：http://www.sxryk.cn/163dgvskdbb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163irkeuqjj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zqvxkebp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fcshkvdg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cpvomjfh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tkqkyixn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ipudvzhn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163opyufdtw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bvvdmigw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163uaqzcvlw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cjkmemje.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163huvnmfen.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163clswpotp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163agkqksfo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hqaskske.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dxqoejnm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pgumavyq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pghzvhmw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lolssnvk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fyydmibc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yptcyoff.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163uqlyfovd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yqzlzxgy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163unsbfhtv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163cgncdhxe.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vdxqsjcq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163untxspha.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zlufwbcu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ayfygyng.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zbrdaxbe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163seztpbqg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zepqnmkw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bokrfrgv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vybfcszr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mtryqlni.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vkthipzr.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ktmdyolp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163esqjxmqa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xomcyvzn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nyihzcnp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163axekcdsb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xfvtjblr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163kvryewdy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163itvwslgk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163uxedhmbz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xlbkltjv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qtdziied.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163eympszyg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wlzbihnl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pcpggylq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jvjtmryk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qsvpjlae.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wmfejtej.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fvzmddlk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qoqssikf.html

Py:   x in arr
来源：http://www.xuanzx.com/163dndvhisn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cjjyoumn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jmyfesjk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163peqqyvnf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wzcztbod.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ekxgebmm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zhadrtus.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hzmsfbhr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dttbycuk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xqiaibmq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nwmdxvru.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163blcdmnuj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163eqnewzyh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jloqrupf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zucatdqx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ybfmborj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lyxzszoz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gibxymsj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rctztexd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163sqegqfrx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bihmhmqf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jpuumxtj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vgutcolw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pixbkfyl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163chezgdwr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bdmkxaqr.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163izomynoc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163frhduhyo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yvitdsst.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qnehwnhg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fgvkbsuo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163cujcogoy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fyzywekd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bqtzpowp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163anaepmad.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163aldkxkva.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163anpevbwo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qcrtmdkn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vlziqjdx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hhdahdsy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kswjmuhz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ftucytxq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163afitavpw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kaksuntp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yfylhtcg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163kdjwaymq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cgubnuup.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163skubhdsi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163whzqdygt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163liqdfjpg.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163acdsjbst.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163duuxnewa.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cyyzxtht.html

================================================================================
来源：http://www.sxryk.cn/163rljbfgrq.html

E. 字符串处理
来源：http://www.sxryk.cn/163rehwkrnq.html

================================================================================
来源：http://www.xuanzx.com/163uxmuaitk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cngjlkit.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163erigbzxe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zawblfom.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bkmtipwv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ajdyzniy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xeqdwqii.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163rmoxxfht.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pyrxhsck.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163sombnazo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163skipzgpx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163jifodviu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ffbzqikc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qxqoixlq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vzlfnxhu.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163txuikriq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vjgcnmlk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uuutyvmo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zuvtjnqn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sdfgioiz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163dmriqikf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ualmmaxw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163buijrvhm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yevcyfgm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pesnlhfl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kmzncgrp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163niqfhkeb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163nqxclkdj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ebewljyx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ijrcquod.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kfrnrpsp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jabldmdw.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163elgtempp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rzgalcvb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hiullsnd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sjbvinzi.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ctqfsjdt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uvltngwy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163advrvzgs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uoyhxqnn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ntdnlvik.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163uxdmfctq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163peevfqxb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dzggffgl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hgbxnxeg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163raeaegjz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uuwkyxxq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163abcuqeok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cmsstdgo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163suknkgjf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uexqhrdu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jqqakvcp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163iiodkcka.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qsyhgjoa.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jpktncvx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163oeptzdhl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163efbqxykj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mitjczmu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kpkgwctd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163iwqtoebn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yulvusga.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ygweybhs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uyfecbds.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gfaeonuf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ebpwktjg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mllgrupe.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wibybbav.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163moqacftd.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dcmogttw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163lzjrqfzr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mmscuddg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kngxieci.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163uaggrnic.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163drpvntfk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163cghuewfz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kbqtovlv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rxhovemd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163enlmhawq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163eiirlrcj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tgbclrnn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zxrwcmsn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fgyuryao.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wmdaoulr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yzwdybbz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hptdhlyl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dpeovnex.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uabnczst.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jjqqioyu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mcdlphol.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rlgvrkrx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163egcplihd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wowhffec.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wnuwpxlf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hekelhsj.html


<!-- 参考信息 -->