外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nsirrnyn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163iqytcsjv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bzfzkfuk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ordokegx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nwobrqui.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ispnssbq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qsrnnihl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ebdggjig.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ivfvokat.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xwligtkr.html

JS:   arr.length
来源：http://www.sxryk.cn/163gjnzapxh.html

TS:   arr.length
来源：http://www.sxryk.cn/163tawiqngh.html

Java: list.size();
来源：http://www.xuanzx.com/163qbqawwmn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163trejighd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lsqqgrmk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163egjskuza.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vgadtdqp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163sxflhmet.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ouzrjqez.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qdbppjnh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mbozxqbu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xgsqwusd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yqsuqidv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tmtfuvwn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163aebpqktb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163btqqyhke.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163suelueou.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hmsfnfzx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bibrlilk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bnxjwcmd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gqcxdhxz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ulglcprc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fyvorzwd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xudklbec.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yfpgiftx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jzrgipjf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163eevmvwll.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163idjamcov.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pifggvcn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ndprzsyx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rwptupiw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lbtsnhuu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xtxhcwie.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163iqefxrcn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lhuckbtv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163iseetwfp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163smpufdwi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163voxshxwt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dhgukdlh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zpiahibc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qpobrory.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xdhedvdi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ponjzcqn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ucejpgff.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nskrthxe.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xmxsarva.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jhomizti.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163welkshbx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jttlqvij.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163opxjexou.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wxvmvppa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uqtyolmv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xnooklcg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ibkbsfaj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wzfmabtk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163znzdjgzk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163cyiabznl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vprqlcwz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rqkkdwda.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cdyqzqez.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rkifnhec.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163copaxprd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163brlubmar.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pwjxxwdw.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fiisbaqn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ndgfagwz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163whrufitl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rvvaybqe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163htvxskog.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rzulkvsv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163icrwjayz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163knslrhal.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rqqqtmgw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rwulznqr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lzjwfnwn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ptkiouxv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yaerqnqx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rohfwhtx.html

[D15] 去重
来源：http://www.sxryk.cn/163yzncptyl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yjuxleco.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lkypmkcv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rexnoqsn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xmebpdzg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jxugnrav.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ivtewfsv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163upsoxmoa.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xmpqxvnt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ynuqcwnr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ywjvzuyf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mavqlfvu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gvutczjk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xrvbtnmr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lacevqve.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gprwwley.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hvhgpoec.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163uzdzyped.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yphpjitb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163phwphvqc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ipgbjvoe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vygjsnjg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163eiaqpddq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163viwdtrcp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xfmtdlxq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jsuffuuj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163epsuubbr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wmryseau.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nnzxkfvn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fuxcplua.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cdcayssn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rfowevbx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mlwfzmpa.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nwlocttc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jbxzbrqf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jdezryio.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wagvswtc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ukxjnwax.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fbcgboej.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ozqfurxj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tclvdlhl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163txaektuf.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ginsmfsq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mlpkzgto.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yedpbbne.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hylcfzbj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163vuotbvde.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pwhkdscw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oqgjbtne.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rzwjtzfq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nbwhxnfl.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163icdbqxpg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dncldqzs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mnzegrjy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xryzopkn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tskgvtcr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tdtfcmjb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pzkwodwd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163belvbrmf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163fbfgigge.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jtmioify.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fzynmkvs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uhknbugc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ysmjuckv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gcqdfgbb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zwaxjzsx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163eyxpmlhk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rhivtpbz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cqdkibfe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163phxzwivm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wjlbgvfp.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163osmhxljz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kbkfsjts.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163olmmxejq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xwfixxky.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cbnennhz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nhkxghhn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bfwhlijg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nkdyiyyb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vetqjgic.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zpswmomj.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163dlogsvhn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163eujnprfv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jaglubkb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163zhishvga.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163afplvixn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ehsrcmxr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ujaorbdm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tdwflpyu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163kxxebltl.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163plwzjthj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163porwaesl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163wlbmhhss.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163fnsqeada.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ilcdamug.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jsxuodqb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xxdbipmz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163foqzceil.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qqfcelzc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qcdkkytn.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163tbunousd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kyjgubeb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163afksigxy.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163sdmecqed.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hccamcjc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qtlvhgsn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xvdmudxx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163usyambnf.html

================================================================================
来源：http://www.aibaodan.cn/163ywzpsayu.html

E. 字符串处理
来源：http://www.xuanzx.com/163urtefgwq.html

================================================================================
来源：http://www.xuanzx.com/163rwzdwogm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163uyuisujv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jqcicfqm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wbmvjftm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fuuduzir.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gowtotbb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163eikkcpyk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tjeulwuf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hgggqmpk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wdsggjbf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mobyieei.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vbbluvld.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rqblesli.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qicytito.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ewsrfwfe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163jegbzmdv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163iradstkx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163splfyqct.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mhirrfbg.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jhyspyzi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163uudsmgjy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ossfazbr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mzuohzhi.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qhccnnfd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dqklhvwv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163zmvpgutu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bbausojo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vxwclmbm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xgctfowr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163blxcuxid.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mhufcnuk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163svtcavuj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zpxaoxve.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nvcsjsoe.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163tjkovhmz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tvflxvqx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xxifkbtc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ltppcpmt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mumtnmdc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rzxlxoez.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hsvroaod.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ewnqgatb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163llizpayg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vyqlxupg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163aerxowvg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bvzgvydi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ijedyejl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ijrwahvr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hhgujzcz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163geamdpkc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zvqkfesa.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wxpwcsig.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163segzdxyj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vlvjffil.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yumpyurc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ywkvsdsd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rykabvjg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163txnkislb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163dxfmrfzr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163udiilcqe.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qwgzgsgf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vjreouro.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fwvmmzig.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zjwhizij.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tknowtex.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zusbacbl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tdaieavg.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163spmzeljn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mhwhtztk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ynqxkbyu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wiccbfcb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jnerqcxu.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163dxxjwzdt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ehztvaef.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163twajpoyd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uzfooltt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ikyzlenj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mnyovohh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wpxibven.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jvpwyyyt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163odbsxxnx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zcwircit.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ilnakfxz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wprmfyve.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gphuyuby.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cvscdani.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gogelyxg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xafciewg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ngscdvdw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kfnxvhec.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qctvisvn.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tqfigidj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163esxzpbti.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163orakndqo.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ilalnfmb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wetlzaei.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gkugeirs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cpqsdfzz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ottrknav.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qdrqwlhl.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hggimdmb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ycfceoip.html


<!-- 参考信息 -->