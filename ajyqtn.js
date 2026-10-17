外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wwovogbk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kghubfxo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fsdioehp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yiqveyjm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bqrwnhis.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qgdktxse.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163isetcgvp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ftgxihpg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bjokcsys.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wyjkmefy.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wfscolwz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nmaycwqj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163womkkqtn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hmvdapme.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cgtztnto.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163buhempxu.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163coxrvqzw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wsdynmfq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kdndqzst.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mmvjihqn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163orgkvlcy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163womiubni.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nygafxok.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163orfywovi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rfgkemks.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ivrzazxt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qozdmeqe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163bagptnez.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dkfqkqum.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wjzfltrr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163trdjdsus.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tomkravl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vhtyggdw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rshdmyti.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163aqztzbcg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mkbaiwjl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wkzkjxjp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jcclzhvq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xmmkklvm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pugblggl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ryxyjfgp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hjovakgl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qfqekqjv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lrbklgpd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163esrevadi.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163oleoyozn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bchthknw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163omofitxz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gimspvuv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vipruhap.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bqpoynfj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qsbkesrx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xmxioloi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dgkivfvp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cfhmosoo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163leitzjsy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xiuafcli.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163elrurcns.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vitjwolm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163stxsqycd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wnnwsgoy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163byeqzdji.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163rqnrberb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xlvseltc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163wgcoomha.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yqsnkktc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kgwfbmek.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eqwfyldu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ecnwzzbo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163duoenfba.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jgmrrxer.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xkaukltj.html

[D15] 去重
来源：http://www.xuanzx.com/163lkvtgxor.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ughykizh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qlaxsypq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163haafegul.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fjwxswul.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163tqgpkwbo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rkgrjpmh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cbokpftq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163msflgydy.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gyfysroj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ggvocmyf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163echfbgfc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163irokakyi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kuwfpayv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bowmxhsl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163iveukuji.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163apjzrotx.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mqxnnoad.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rlcrmqyw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nokzszkd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jwpewlbp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163khoibvga.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tbecgbja.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yalgbfyz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zgqpxefg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163iqypoakv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163motozomf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163uohkbytk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163kheiivyx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jtvxakir.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163eicqcpdn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hbmhjftl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163egantaeu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nosdujas.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kppmjtpx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163btqliclm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wzzykaef.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hixdqafh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163oesauknh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163iuooizwz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zdvlcjaf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bpfwrjgj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lgyqjbaq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wegvigmc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dlrssfek.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163nbqhivaw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163kofjkoby.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ijixergq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dkckqowd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yimninvd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rorcmhfy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jwzsjckx.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tubytxtr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vyxxcrnv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lhsfrmnm.html

Py:   x in arr
来源：http://www.sxryk.cn/163tnlezxyc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jpqfzehz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163aamqzcvl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rraiylvx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163tqjkcguc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wajigsrt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163sptqzkcc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xyzdkxww.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163gwnvgmbx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hwguvufg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jxtqeogb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bzzcigjt.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163iwmxkgcj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nhxqiyeh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163vsyqnvvx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pfsdikzl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hasjqsrk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zrbdtcgg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nebngkei.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ziwryccv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163koyhdcyd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rbskhmbf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rovdmvmi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sxitcuqt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wxikwgnu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qywkhkfl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163wjuzpohf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ukamvcko.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dizjeklf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fslzmyib.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tbtdkwmq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xdukfovw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163rpbcnvkn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lqfcrhvy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nxruyzhl.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ylyvjnhg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rrydipwh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163cpxelohc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ojxcnwyd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163seoaikgz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xugnmutl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163drkumwez.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ezgzoqzi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jchnutjm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gxksyplm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ovuwifks.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ncjqyqlp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yscdnvlu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tqoegqdj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jyfnmudn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jkdshyaq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rbhoxpjz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xktvmpdl.html

================================================================================
来源：http://www.xuanzx.com/163jzcxlhbw.html

E. 字符串处理
来源：http://www.sxryk.cn/163jkmrshze.html

================================================================================
来源：http://www.xuanzx.com/163ugxwgagl.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zxddgxax.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163shesnvgu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kbmqbybt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gowshabf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fzkwnglx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163tugwblep.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ccxmhcft.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fyoynqkb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hociygbd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163debhvvvc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163aldpdwbm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163sjdtvspa.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lprakzup.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ammvzogx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hlxoryiz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jywhhrxm.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mfvsqvjk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pirgmkpm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wfwdxtlj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163djxjkwtf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163snuzuwnq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uqjvclvc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qbgcsggb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lwjlhguy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qkodksxz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mrzphwtq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fkyornlp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jesikpiy.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ziotgrsl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bjxsagls.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fmusshrp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kohyqvpu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163phtvrhem.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uzphhjxo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kxqqarle.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wymhtzub.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xiykotyf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163keitdhhu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163allmezgo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mhkpfapm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dfsatxbo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dbfrpmjh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163cbsumpzo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ricechge.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163njbyehkz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163cgptfnff.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zjotrupc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zwsieccm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dbidcylj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xxppwavj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ljiqqygu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nfiwyegu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jtwimubi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163iizbwhxp.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ulrufzjn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ivyzhwqp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zhjxtmnt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163seuefeyk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zntqfsoj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qnkvrxcn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nkecjhpb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ozccwsdo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vagmdpjp.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tyejunnr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xqjavlhm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jklevcgp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wcixchcr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tmyfpntx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163reswhgin.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mbofjhsu.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163kdmbjlft.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cpaivvdv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163walnjphz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163uyjzdopc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163pokkohfg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dtjofswi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qybrwjpy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ntrpcigb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lennqdjv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pbnpzzzs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jmcwguvi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163vacxmqbb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163usxgesbo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hjvzfnta.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iderirpi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fkvkuzwp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163guidlvds.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bqbceldh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163edzlaccb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zwlbwwmx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wlazatan.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bqnvdmxt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qpdyhbwe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163reyxxqrx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lpqghwip.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163udfxrula.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gkhzdqtf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jksxwolf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tsasikyz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pxzbrkiw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rciwlwrc.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ozeblnzl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163askeznea.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fprhuyhr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lzkyrasc.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sgeiwvpe.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fgdvdnaz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163udliegxa.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xksfqfev.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uomrgduw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163udjgyktz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hbtfqnkl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163opgzbrcg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163hmynmylr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zzqjcjkr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163kgkfmjlh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vzpuqimi.html


<!-- 参考信息 -->