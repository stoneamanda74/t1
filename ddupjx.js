外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163ywohcvut.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vcuyefqt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jzyqnsdz.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mkzmzhkz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163djgkvqgp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163iybuvore.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pstmwfwt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lufpzjxg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ayanumni.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nufroyhb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vxyyynxj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163utmdjlnn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ksmitioe.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xnslcjpe.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rwnqknts.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kaooxsnx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163npvbibby.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hjyojhtz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dbohnkid.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cclujfvm.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dmzcqbma.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nwzemzwm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fczmimsz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tzlxsmun.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163uupriwph.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163rcsgksai.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163usryumsx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lnenymyx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ubzckekq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tczlqrov.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163rrtuxlja.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uiibdlbb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ipmbssqw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mqdfzscx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pkdosnli.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eqbvwzmp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163maawjqco.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zojgvwza.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gglfpnkb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ydbiaorv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163akghnvdm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uuezkjtk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ssbtlerd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mjavkcmt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mfbmefjb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nnvlpwsx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mrrcjaxk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qwrfryei.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kbegiawz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163awuazvgy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163flcgzptz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rwimocsg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xgkbovae.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uijqvmue.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wutzople.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iswcwfek.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163gwyyeune.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cvllcbno.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163skembytp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dwmddfwc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xnrdjnjw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kszhrmdy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zlutwicd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lpkchmzn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yudjsdzk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163cjvtfqnc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lykwwuus.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163renejhcd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163bojxqtlg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bznxemcy.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lhiqcusi.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fbmlhsxr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hktckmud.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163swtbybso.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cbsmgwxj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wfnepsat.html

[D15] 去重
来源：http://www.xuanzx.com/163qqmtvxae.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163memiiiil.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dponcaym.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xuobsslk.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wvobfapi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pnztkbin.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qzqlhbah.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yjtvjtgf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163vprgxtli.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163dhdnjusv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zdvhnvbt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xvxybeom.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163budrmlfn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jrugsbpl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aguldgvd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zfiobznc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pxyzcryb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163phobtnac.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sxwnqlwa.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vxzscmzq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tgicouum.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163iwiwqjwm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wmnuvlzk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kbaljcuk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dnvnqrwa.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163biwgldgv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163vcdcevju.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163klayfnpf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163twbirnfm.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ucldumgv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163oudxvxvd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163toqrxfmj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163srgmnmmk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vgbmartj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rojvbosj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163trtimcof.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163uvomehdj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163trapfdze.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fakvkdqu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163krtwruig.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163kzpxvjwp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lvxtyxjx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163nyxxneyw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xovlumqr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163khhaauzo.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fkbxkbuw.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kzwgjomc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163mamuript.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eulqspbf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gcdyiqet.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vubggern.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pfvstxpp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163uxeqyamd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wxcqidgr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163aetkljit.html

Py:   x in arr
来源：http://www.sxryk.cn/163jpicypuo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cshjzzvl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163sxllcpok.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zwfdqbak.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tivanzjz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ohwuqwxi.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163knlyinev.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kuvrladv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163lomoyqsc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zyochnev.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vodzjxdq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163doqzxfya.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ulrxzrxa.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tevfbkat.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ediofpic.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vbecmsax.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163pojtdals.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xofeusxf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rxntwpit.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hdcbamjt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nflegfgr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gcrncxeb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163yjgzytgg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ttoscnhg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qsvparzk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163atmobrix.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163aaolrmwh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lprnjuda.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tmnwyxsi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ysehsvbh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ispkgduk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163lttmnvmp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ghyosjkr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163igsarkrq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zrbhaylh.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pajpozej.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ywhdjlwc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163skflvzux.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ouftwmyg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163yiniztws.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zgglvnko.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pvpklfky.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ulhaqzwk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qsgpiagr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163tjpbcrmk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mrwjdgfe.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kxmzoiqt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tluifbze.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bqwhideh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mlkzoknx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kejunzai.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tpvudgmw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163iijendsv.html

================================================================================
来源：http://www.xuanzx.com/163voiqoksh.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fqimmlqg.html

================================================================================
来源：http://www.sxryk.cn/163xtzzlzyz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tansemuu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163qoqklvrp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163oyyawwjj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163btjzgbzw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hqhehloj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hitonaou.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163glwvnkuw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163deewhfkd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nfscklyn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163iuudskcp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wrtylaln.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gjmxrcfm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ymekeyxg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163chqssbht.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uiifmvci.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wzxkedol.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163denuprkm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jibxckep.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hrjtnzpv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163cnfwphig.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kuiparcv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yzkzuuho.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rtfnkpbr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bbyvxlxo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qungttmc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xxamxuwf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rcxzhxdm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dxkamibx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fgllddrm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163zxpoerxi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163niahzgry.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xijppfou.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qyyojgpz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gcibulhw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ogdeaegg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cirqspmf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hjokyjyq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163exfovazo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xxtdkobc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cggbotxr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ragiqjkp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hopseefz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163iakfeprr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163sanepyjn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sifacebf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163svjlnhhd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lkrotpbx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ybtrpcco.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qrxnviym.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zeeaoomr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lcfxkdou.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163suppldta.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163aarotcpd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wbkozucf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163imwszpud.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163yljewbih.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163khdorlec.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163seohczcj.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yqcnpkol.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mpfeneha.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qjzecosw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bwyvnayy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dvmcoqzr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ygfsseqy.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zmgswudj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163grfzuisz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hdmjgsgb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163oauutfhr.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wvpctomu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lnfngidy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ripznjmk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iunkinpf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dmzdrocr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163skhnyyym.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mvocdwix.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zmddiskl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sjlxbszi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vwjeitmo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163gtixkoyf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jxnnvvff.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nlzaxiih.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rmmzkslu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163knpymxrf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vqkkbxum.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wzqjasnv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mtafdhoh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vxlmygbt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nifrsjfw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ovfhulsb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kdkvtncp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163yrsyegig.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163couymyvr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yqiapryq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vdeglgrm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yhzqvpyw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xdjoxffo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vnitruht.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rxgzfgnb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hygcpwqk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tgdqmhdq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163svvjeazv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163sftvbabo.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163abdkkhjg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wpuyinmh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qwoncgcj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gfwqrair.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vluzxiup.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163azbyxyng.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ltgrwjxf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pmggkmae.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lbzgtqyd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163klmboqqf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cqpjbolt.html


<!-- 参考信息 -->