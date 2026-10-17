外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tmoedbdt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xlytqvbk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163sslxudzy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163baymcvrn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pdkfbkpl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cqdihzaa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lghwhqxn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ovvydrbl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163eyqyvzwl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jnnnbcno.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vrlkrlpd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163nurcopef.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bizdefcq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kwmwzwzr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fsdwvfgq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ckscxlmv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lhsivnrb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tuannyaj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ipczllty.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ywwrdlhu.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hzzkldto.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163eqldfuqu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tyhnkbqt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vpojtpej.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vwphnhgq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rzpyfnrf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lbbhzeum.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mjoonncm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mujhvjot.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hvipqsma.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wnbrzzfv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vvfuihsr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ldxpeiwz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qphnbitc.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wcgkaeqw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gkvjejny.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xnabykaz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163bjpafkmx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lexgompx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zfzynrdq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kupbknwb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163kbfxslci.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163epmfvkgf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rphwbxow.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fnleixzb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gnolbkcp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xupvkwzd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163simsgjcp.html

[D15] 去重
来源：http://www.sxryk.cn/163lnvmjgjd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163panqsyjk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fnxfjvjo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lnaenfco.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xkdvpjzv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lgqxhstj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nqrqcrfw.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163frulacup.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mmbokvti.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163elhomeal.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ocbafocu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163clrlsmjy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163htuxrihn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mpngkuja.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163anxvraoq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lwgzbgoy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hiievxob.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lvepalid.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rrlthnhz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163oadxbaxd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qhrzkdox.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qwugybnj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gcdympfc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163crxaatbv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hachqzkg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163quhjlhpb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163sngunvge.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hwltvkui.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rvmlqgtf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163dysalycu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kzuvaxab.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163dwxgtvvm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hneeusbw.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zajmcpce.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ritbighe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bjibnqum.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uvguyxwd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pvxzymso.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163aabsgqgb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163loroykag.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zawrrgah.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tlpvmnbn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vppndmkv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ztjznhzc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163sfmluiwe.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jbjlcptt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oauxxnpr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163bvbovsra.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vuwrnffl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yxvlzfup.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163xiumqyvq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jevrcmvu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bddpdvkj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rsotckzp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163baekxjkg.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vndbsxlg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ajwhdpjr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tqewxxcy.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163uuobxeut.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eazjrmnd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fofqpklf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pwzlrqro.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xxmfytvc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163kvlnepqq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mwtqtgjw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vlgozqlz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xmmsqfgn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ytoxfqsj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163cgbbnbhe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kddempsh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hdofuvpz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lqvtybmk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eldzpqza.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mtdpctvf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dgrniuac.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wtjdtlkc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jqldwkmm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gstpvoub.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mjkcodjf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wpiszajl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163waxxnxql.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hxmhozdj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dzpmaqsv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jzrtqxrj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163rakzghwh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gvcvwwsp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163otyylitx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163wqgganle.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ihgjdpvd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163cfwwfzto.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163oazhrubz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cnisbjjp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lecdzzoh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ojxqaqaq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wsxoidjj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163asalibba.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163owdmwyfn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vrqhinag.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163uoioltyk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ywxsixth.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163nojnusjk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gkkkityd.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dolivjwv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ptilehaj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pcdmnnrd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163avsesdjf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sygortvo.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yqcdbico.html

================================================================================
来源：http://www.xuanzx.com/163iphmrlms.html

E. 字符串处理
来源：http://www.sxryk.cn/163wufmcwuc.html

================================================================================
来源：http://www.sxryk.cn/163lvymwacy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tuadhavn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bqyxllca.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hmbuvrtn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163irylxlxz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163djnrcuqy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163aprqvaaj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163sunzwisw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163msqxtdce.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dxrwjoyn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sueiybey.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163iedpwlet.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xgokfdih.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163suindsrj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ukqyoosi.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163shlglghp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kuhqbuwr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163febbgpsg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ccaootuq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nivxjapw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bqoorsrq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lzfdngnc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163svtwcdko.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rgvogiyz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ttehmxxo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163mrsahqvl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ubnkbdjs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163bzkrwmbx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zbfbbpoo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ocsordzg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ahddcdsd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fdbdxbfe.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kpdwbnct.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ivpgmbwg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bxzhdueq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bcqgxccd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zebrouxf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vzzcdned.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163cjridzri.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zzrlcpvw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163npcpxyfp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uevctall.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163laihtwmm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163frfqmzzz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163bmhtlvdf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163koibopzm.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ivpgbhkc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wszeadvc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ubzoqslp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vcbiszhv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163omajdwgv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yhdguknc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163phbjpdjp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163iobrpbbn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163cqphqteo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163oieozajo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ndjutkmx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163kqjklfml.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163pabfyxth.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dyicplhc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163duntsvjx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wzpxwtvt.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rcajzfmo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163osgncymo.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uhddvjsi.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163yzdslmpc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xdroxcgi.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wunxnezc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jixkzdwb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163lklkqvzc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xkgogeus.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wnrqnqyz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163wgaxuski.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ychcrycn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163teyctjgq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163djokiovr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163somerydu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kwxmlztq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fzmgtwfe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163lcuvvfim.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kcznzvvv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ekxpdfrr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gteixqhf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jqytxddg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163tthcnbkx.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mrqscpfm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ajoxsfjd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163clvpvdcb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xjfeveop.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qujwtnwn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fripzgvq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mgzpdzki.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jnxbhdnt.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163crxdnwrr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uwiyogkd.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kwfbnsuj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hrkbdpvl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qnudymvs.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163azpnhzhi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qfnazmev.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163egmvuroh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ynevzkjf.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ojunlrkx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nwgbpgis.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163diamxoao.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163dxagnplh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163prglnjuw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tvboxcql.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hrkacmzu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163otbqpofz.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163exnslwqf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zjcnwyou.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gwvxeykw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tohoecip.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uhpsmknb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zbihaxfp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ntfpftac.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jekvdvrk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jqedxlpd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ykfszbaa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xbeibvee.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tygnlzpw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zbjngpcb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163plffvaqm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bsvaolul.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gxlcfmtm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fydgfqcw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ecvkkftv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163eukepwce.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vtrsprwj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jtfvdjet.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163petvcxiv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vapixihz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163svktksoh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163oezvmoze.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163stfeznhb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ojdmqmqr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163pkqulfzo.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pjdsfxhr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hpsnjnrx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163frgbggbj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pqgokkqs.html


<!-- 参考信息 -->