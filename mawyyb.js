外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163qqulvzwj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163scovfmzx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ckbzfpmh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ywimqhxu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163claffkix.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cfpqfpwg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ghmssufp.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uzmudeed.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ffkkerzp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gyivzsua.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bzshyhli.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pnwdflkm.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163asmsghka.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ipennaji.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163impevyzg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sddmylhc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fxiuqmtz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xubtpsjq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mevaodfy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163oxnqoogn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xxrqdjrs.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rmfquzqu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ngafxfuz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nlrvcaoy.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163xhpfkpsg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163omsklbon.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rvqsorkj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163syvhpeep.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vcerljon.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jhmtcygi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163licgubvq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cmmttqlv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vpdbmfuv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ieaoehra.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dthrwffz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ybxclwcl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yxghnfow.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ttvmkoec.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wnzrvrjn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163skylrylk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163aektptgb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163epqjkdap.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zztvzrnq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vhxstbbw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bpcrcztq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fxnlpbwh.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ddqlxiit.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163mbbjgxfl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163waiyydys.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rcuvlkem.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nthuilmk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163crevgztv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qeqoghfu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163egnrpcfz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163synlqgtb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xgepslhc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163eyqfapks.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163brjrvvcb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163czosfbsb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fikfnatm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rewvdxtg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pofbnuow.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tsdypafs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rsjgordn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163plcjqjbz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kzoembek.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pbcojxfb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163srkmayws.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gquhsyaq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cqjzmbda.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163babicflc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gmgcgvgq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ltdivapo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163scloiqno.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zmdndkjm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bfkczjvd.html

[D15] 去重
来源：http://www.xuanzx.com/163wqyoapsk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yjlnjrdz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mrzybbzm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ldgerhmf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163npmviumi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wskkfzkm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ocfhqkkc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wpgahpke.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ekbnwoms.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rpfymowa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163inqspjdj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163eskioctq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pjejahki.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163oxtoupom.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bgshqkxp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cqrkbizr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yscpprak.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pflimnwm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fiubenmo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qkajdfzb.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163osrzkzve.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163wambfqpl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163kdjyvpps.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gbmblhtf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vgoupeng.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pchfywej.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zswjnmgm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163alokiehi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ehqhjwmb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163hserxhdd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163biefcjxu.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fxlaidnz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qqxsauox.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xwxkvpci.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fvbkkbxz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lcksdblt.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zmznwxyg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cjzerbkh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163boibhncy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wvlqgcin.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qyhzcjsp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nqkwhxgj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zilcwivp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163acuxoohi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163atyxtzoe.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lxyoxtwn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nldobmja.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ohqzymrl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nmgbgkhx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lymlmdzg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ykgnwupr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pmstlgus.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rfuhtyhw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163sfiflmha.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zudkpunb.html

Py:   x in arr
来源：http://www.xuanzx.com/163brcnxpxk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ufzcvwnd.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163quyrbbub.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jlnbywka.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163howmyfbe.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ylbvysar.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bdycmxlq.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uawuozeg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wmjfjiqu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zgbtoryo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vnjshctp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163hzozvibh.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rijmwvwv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163aezpnkih.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wvibpmni.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xibfwjhz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xjfwoxds.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uhunekyl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bcnxywnm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163hfkmposp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fvhcnvpb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cykzwcrg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sipxnixo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xtlpgwuc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xzpmoqbv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163iqgqivny.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lqchfvia.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tmketami.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163wmgdfjfv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jileojgq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xufkxxwy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163dgfawwyx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tqrzgsrb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163shgdndxc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bcpgsefj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lctwtjat.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163obgbygwa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dvvuqerg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163szvgrvyl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bimwnzae.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lehehwmb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ykgdyxhg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hekcugbp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163aieoyfvo.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hsymilth.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zkipovxu.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163omebjpio.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ppcdtdkk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ipybzjin.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vklvewew.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163cpestfht.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163hgfuhlhj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163accfzvbs.html

================================================================================
来源：http://www.xuanzx.com/163ievjpvvh.html

E. 字符串处理
来源：http://www.xuanzx.com/163skwdfnhq.html

================================================================================
来源：http://www.aibaodan.cn/163wykoiqwy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qqjxauqd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163siivykic.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ydfpydoy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cstfhyoc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uljfsktv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vaztrnyb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fbgsztba.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163bdkocdtl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ghwqizyj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qmhprnzh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163buibfcfj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fqcwinmh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rhzuejuv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pophyzga.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gcklmnid.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163itnhcsgu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rutmtsdp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nlmjecyc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jeaxqgfg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163minjfsdf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ffgfobhv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163yvxggdts.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qhobuade.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kheovxbd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163banjliig.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cgerxylh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rsxnlhhc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ijwdphkn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fzduunrz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vkmwvrvc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163blttddmv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lrgtfdyu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wjejwgmc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163yzbazzjb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hiqrtpzg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nzlvqypa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ybzbidgl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wbgpqgrl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163soakfnog.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ulajxldj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oszopiga.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cajtbvue.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mwwcmfdb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vswzatkp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163daxumzmr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163unwjzwxt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kuyxixdj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wcjglalz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kslaluxm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mcloyspy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wbqfprgt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163frbmhgxh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ldloqthu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hqojwnfy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163vuuhkqxf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163skqzptah.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zazxcxwg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yxhzernl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rpittlnx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163knhgjljm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163aawdyukl.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163imwecocq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163apvwgzjm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jkiborus.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lremhcox.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zbhmftck.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hyczryjd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163lgsquygq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wxnskwpj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163avdlwtme.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gptoazpe.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163reouesmh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163acghzssj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163stocswwt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163iqsyodtx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tvcjnpct.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qzznghfe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ecpxevhr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163trqlnxsd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163deddavpq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163bungamjt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gmwquxkz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ysqtwnqb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163utttmmnz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wkafeoqh.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cyiihevj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wykbcxnf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163crikgrjt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wjdmgcof.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163meymyhkt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163iwrtcbsc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vsvjnpbb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163woslpmtm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lxncxivy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gbgateyr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bqvnqdil.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xcuvmobf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hxketmfd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nukqkkir.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163idusmfng.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163viywudwg.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xcbuhcpy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lossszyh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hqgnqdot.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jwgvvqzh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bslkvsei.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wvecrkbq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ynwgicxi.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yqsenwqh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163chtujoei.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mjmajjvo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lsrebubb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mjokrrmq.html


<!-- 参考信息 -->