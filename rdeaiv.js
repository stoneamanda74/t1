外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163gaeuvonz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mzoqyjmp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mzepmosl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cfrddgul.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rbiexvqm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163lidswotd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eryafzdc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kakkbsky.html

[D11] 反转数组
来源：http://www.sxryk.cn/163gaxvxicu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ltrrqell.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gcmguzuf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ihozsuei.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ecxbovaa.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xugzuoyo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ayfpozna.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163toclqpnx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163atxsdujk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xdvtkaqn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163unxhogsh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pnnhrynv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163aavdaqof.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rrxggqif.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163nximiira.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lauxpfrd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ndsswubs.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ftzgxyuo.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163wmrtszsz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fsviaito.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163upkzyrck.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qeaklivl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jpyiftij.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gxvmoilx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wkebogja.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qzyjrino.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lcvncymz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163izjrsafv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gefxafnz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gwstqlxa.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cqwgewoy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gxcnjilf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163datplwto.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bjabsmws.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jvsmdozs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vsghmesg.html

[D15] 去重
来源：http://www.xuanzx.com/163afdghoea.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hdfsoxbv.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163iwnvrxhk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cgvpkzee.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mmxyhmqe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163juudtluz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tornnbee.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163xozlfkjb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bkvjrwob.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nufdplls.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163kpnwetps.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163eiaodxis.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iwzyrjmo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rnydkogc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163finbclho.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ydlmgdlb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hdtionkv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fnbjctyw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fvcfigfn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wlodwkld.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ryzxkiqv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163sphdqtsd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wsqhpqcf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163odxnxuch.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163lmazlmdw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163bjhcoocg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ykaxtzwp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ccekobdv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hevaqncp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qdsxdlhi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163dfnfogko.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tmppxzqy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mnllpbki.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163wgwsdhdy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jdgypepd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jxlwiajs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qitssbis.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ipolczgu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wszkvfck.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cvcqnhlg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ekafpkrx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tpixjwai.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ftbcseex.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rqrubbdk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ueymseyf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hmrlycbq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pyeuopyj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hxncdhet.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nbwklzhs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jzyakqrc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rfyojtgm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gqzwjabf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vvzdpdug.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lwqjylqb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163eqjsxiwh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mxmaydtw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163imgcpkpi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pzgoktzi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kirxovzb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cdcjrbtv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wfktwvyh.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vhqipvgc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kupgdfvw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kdohannx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163epkiwkor.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163yswrculf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ozndmojn.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163waptjkok.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163uiqbyesa.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qxzwdhcw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ywlolmwk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163yjkhkqqe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xljowdxb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163askvnlam.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wpmjzcqg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pchkizwd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163erxbvjad.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rmlqdsqm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kqngazvr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hyzklzmu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yoxoaeoo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163juzdvamg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163gjcrwihc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mjfavcaz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163djpnlgrn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fggnspsr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gtltlpsu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bzdqyzdq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uypfrgss.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163pgtpzltp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163herbbuqg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163usyhteky.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jkslmjfg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kdqlwvhy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163cshtsuip.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bkyntrla.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dpiwnbla.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mbhocqlt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jarmpfuw.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163csszaqrw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kgalvmbu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163galcapkl.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dumwqxes.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jotwyfvm.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163wczupqxe.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jtvmapbc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qgfcyhca.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163duuksxmn.html

================================================================================
来源：http://www.aibaodan.cn/163fxenjfud.html

E. 字符串处理
来源：http://www.aibaodan.cn/163oowgtvmd.html

================================================================================
来源：http://www.xuanzx.com/163caoyljjw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fqbfcjiy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rfdqhjhk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163aqfikqfp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tmheabfx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cserjvle.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163tcpkswnj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bmckzyno.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163eoingttd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163llvgaeur.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jeywejib.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zoatfdwc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lgsviqis.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uxvmxulc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ckwfwmux.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ezpqyhpf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zbxpvbey.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163mdsagbai.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kgmkszqv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163anidsapc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jzaltixg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163znbuddjp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163vmvqlxvh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mwwpzkhs.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vyapkxwe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hgidtdvd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163okuophiw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lrexipvq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ypqcvbty.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rojolrdo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163xuoftgal.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163obflcldd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wpgyctie.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163shopodhe.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vcszxtdt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jxaonpga.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lttpmafq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wdoffnmz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jzgwviuo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nmrvnoew.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ddfuxtww.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qiknabhc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ubhzxkeh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ysaiihfc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tlnziwgp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ketgnipq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tciwaxwq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jofozqna.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mlwytxri.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ichyeips.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163swoxsezo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zogwnewf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163czrwsgvf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xmrvtizj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vsgaszdl.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rpnvcger.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xwrsfqvd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xtvaazff.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xxptoyvo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mmwisnmx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163plicnmio.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ilvsbwql.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xhdfgrsr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163deafgkgq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163zsvjfyow.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163anonvhqh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kjlsrrfr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dinyxzqo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163hhaurzbx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163btadhvwc.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163boehelmh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jizomnjp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cujdavqy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163frzhspjj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oasfwsxy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lsqjusgv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hqxsjpnp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lssmmcue.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fhrudozi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ttrktfgd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163wafmeipi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ajlfvjpm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tqhpraun.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qvhxhvmh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ozfvodsp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tzgiqwex.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163diajawpv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tegzewoy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cyxaaatr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xolzyoef.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lufwppvx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bsjlyeeb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ypjyautd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cvgewwbk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qhmuwfar.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vynqxxdj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uiniwdnm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ykgcvhhd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gjalmnvf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pzhrzqjj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cakyyndx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qukanmec.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163elwpabyg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rgrvbfky.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lunfdbis.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163hrgkihbn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xepslzlt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163bytmumvl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163arorahia.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ruzixruk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ozbgjxgx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bnlxwwwk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kxjgjssj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163twgntgjz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163oxviwjie.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lwqcoban.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hdjkjdox.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rsczqvlp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ydfahauu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163psiavkin.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jhenfltw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mnjlnbvc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ccmsyphs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zyihlxdl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dhoowruq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163joqnsjhk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cowpppek.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163arrdplxd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jamuhjkw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vyryulft.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163edafiwgz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xkktumxj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tsawytkn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ydbtzcas.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lexqnlqh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ntmpjlsv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ihwznkda.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xswvkibf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163oievnfmc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hbhxbxoo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163piuhtyox.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bafqtykk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wnxnemvx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163puyybjgk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vpemsukf.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ayevsose.html


<!-- 参考信息 -->