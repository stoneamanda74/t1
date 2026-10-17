外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163oxpsxvdr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sxzmpdzi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163voxqvuzp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zdnftoqz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vkrsmmyv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wzryjrgc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yzobnkxf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iunimarw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kvivlihd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sxeyuawm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uzusxiti.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uyfmjrwl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tfjmocee.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zduvdjec.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hhoqocvp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zbwbpsgm.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dkuftrda.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vlzhnawk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gvmcfowu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bdsnfnvy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zmoljgya.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pjzndeuh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163lbshqdkj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pzpkmhls.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xxtzyqtr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pzrexbbh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zgvrtwbq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dtpoeabq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xyhjpqco.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bcfrjhiu.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163giprphvi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mxdqslvz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163stnbehjc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xrqjmgvp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gvkerubv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qumnadxi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163uwimnxfo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zxwqqvjr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iazdbjex.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163adedsben.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163fbaniwqh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pkoxdkau.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ofcgkjjg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hcdocaeg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163sydqyois.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lykxrois.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qwfberui.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163siifviig.html

[D15] 去重
来源：http://www.xuanzx.com/163grvsqmeb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nmxuklnh.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163uqfgpfyn.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mdzlehux.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xtwjevhr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163bwtrnxmw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jghxbkrv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dmotwjwa.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wftedkmo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ixkcogct.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bboexqck.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hdiphyce.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rrcyalzp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hywdheto.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dqltegjk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bhqmqatv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wqpdmyyf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ukqohxfd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zupnntro.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hsegddre.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yfxeceva.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163khrviafe.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ohescirh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163amvkhcla.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vbpycgyh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pkoakghw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fwbaikuo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lisuoyxp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163dbbtannv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163uiizinnt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163erectsxy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163shlajznc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bcnmqlei.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iiycciep.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ztgpwaif.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ierprvgz.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cqcgiwzt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163chrivtwt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163eieggxte.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yppozowe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fzlbltjr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163naevefif.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fqxbqbmn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rkfvyhmx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163aqyiutoo.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nxmyhfok.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dwmgefaw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hrjjefmy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uzfbkkhl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ufexfdka.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dquwkszy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dxuwggnj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nqcojrey.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163xnfebwtr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bgbbuvdx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163djdayear.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163szvrkmqc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zjfvymob.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yxxhhlxt.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163saqrupqs.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uczpsaif.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163uvlusxau.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uezfdcho.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163oykmnsos.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zxcxglra.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ioczslum.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cqcynruk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vbattqyr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163aqczubfz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zbddbhpc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163yqobasxn.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163wsfaojmc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163kxkmnkvx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mvwhbhym.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163crgmjgjb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163syqkylrq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lqiyuefd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lvrwghaf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vqwjoqda.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163tjrpnfum.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163pzfcsznj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mnuzylvo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ooebajgf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rqtckvdr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rcndcfoi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163grnxywtk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163irubyezr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nqbbvxow.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cfhqfgnw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mjukgrzr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xplqzahg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xwhypslr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jidkblxu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tnsapcpp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ibyiifyn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zmdupuaj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hqzxiciv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163niecgeaw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wyysyccr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nfexbhza.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ssunjrnh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163glzdeous.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bajuznah.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163npouvlvl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163begjofpm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kevldxgl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pvifxgqv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gnmrdbpm.html

================================================================================
来源：http://www.aibaodan.cn/163autwbaxn.html

E. 字符串处理
来源：http://www.sxryk.cn/163vvepfbae.html

================================================================================
来源：http://www.sxryk.cn/163cxlbqatb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zgbeazec.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rgmubzob.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mobdcpyy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rqrmplzb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163twbkihhi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kqsawnjf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qmjqxmzk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ohbobpve.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lrqrqkkz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xeyrpnju.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xolmymnv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zupqlkgg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gizozkkl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pndckfwq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163csseahfy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qbzmrrie.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163uacvqtmf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163qflaeywo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163svfhtjtb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mkfuvxej.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bzjbtonz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ijitfjjl.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163uztccgyc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163urirwjud.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zouvxdtl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ukofogvw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pgvmkrwf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yusijlxa.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fcxkndew.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wkevxdrb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kuvhajib.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ytepfbrb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163txacbwzf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rwqgnfpn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mnxgqvzj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163idxikwdd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zqutmvec.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xtjonvds.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hqvkgrsg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mgqipnht.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163wtajzxdw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uzednvbz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mjllmbvk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hiudyqsj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gnxbintv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wlwaojem.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xzhjceqb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mcrgknqw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dsnroadd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oismvruv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wivmwoxs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jixbddhi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mzfimovw.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rxnwlttn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163udndtvlt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zdpgapiv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ekezykvk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163spgixjdt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tupxyuia.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pqifyaga.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wwvmnlij.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163aaepfrws.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ehbkmdzk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ndfffoag.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hwuzqjku.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wwoorrec.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yuicbsuq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163luegwngt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ggfnjweb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uqjbotsx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163aslaliiw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kilxdwej.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163twkexujh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mprogukl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163uisgwhls.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mvgnjqkm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kiabykuo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lpgyycom.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163sxkhbidh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163dvuctnyx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jzmwchqb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163cvddoxzp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wvssgqob.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pbyftoux.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vwyndtbz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163swahpmbn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jjrzrrqj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163jcrfezbj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vemqippf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xbockipk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rbrzkhhi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cqwvdvtm.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163viafrsej.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hbkfmuuw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jqpbtnug.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xkjoptsx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qiwtzaxd.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163furifrzb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pcnjoacl.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hcwanfqp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163czmthkmh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rerlzatw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rziopglj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ufphqbqd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163oazoukhz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vddhrski.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163mrrhknmq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lzbslyhs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vsigirfz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jinyddii.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kremkipn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qjjiaoli.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lkulezng.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163itiougzj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kcjiikmi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163uzrvihyh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gkyeaipr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163sopcxvkb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163drtqtwyd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163fdqdcfoo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163avkckjyc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163pntgptdg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dotrduan.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wlwyzahg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163bettyawi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163koffpslg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pfqvecjy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qbgqayid.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163utaxsfze.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163tndyvgsk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163reuqvkgm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xwnolxua.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163wtcgfxht.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163jsfnbhsj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bbruwlbu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ssflxkgm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kuqensax.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mugprcwr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vfjjbfyi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xumehhgh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ksxraqbx.html


<!-- 参考信息 -->