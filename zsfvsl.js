外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qzomvmzb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xvddanfl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gyquwdsd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oqfnkook.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lkddmnov.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uruvghig.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vphrygwy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ynloyefw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nazrylnm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ihibvpcp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163amrqudas.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ycnnjecq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gdkfysad.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163yfcsbion.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163iqtprqjn.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pdqgntjd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yulafgiz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wqlzeckd.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kcpubhgr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jllinmsh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tmqgjhnj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163soacsycs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163oumxrtwr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163omxzohdc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163mmwkuche.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163pwginfit.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fxannjpx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163pgsxbrrl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kyvanzyk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bzvuryfk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vduwbvhx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xicgxpgy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163zubaneyp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163knqsvgqm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163bqrpemlu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tiurascy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dippxapz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ekskjdox.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ojavdtbv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wlgyjkmg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163krmsizfj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lwpdmhep.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bjymxuso.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163meinoagd.html

[D15] 去重
来源：http://www.sxryk.cn/163fdhoqchu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wuwlyvis.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kxypgegp.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ljfswjeh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qibibjkl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nmokddnb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163quxqsghx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bneuiqyc.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hershwlm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dxsxhwbd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wdtubtba.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cfypcxhc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qwexsdds.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nqnglvnk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uokjirdu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nimsyjrm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163iqqjntrn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zxhgzmnt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163iheujjef.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163bteosmby.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zzlkqbua.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ujjfsafe.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ugrdlaif.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qsuxeqre.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163cpmtzdqc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163oqsjqdmk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wcapgqcu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hknhmwhv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163issdrjzt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vspolmoz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sadehqkd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qgcgdjpo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tdzhlplv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qghivtjm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lasxuhwr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dbypqhww.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jbhiesfw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163veokrkkc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vvfkvbam.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163sncmzasr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163scbezwua.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ginsdgrr.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jrgpfijf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163skmhwtzm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163epqtnrpz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pdlhltgd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jmzezmvm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vqbauuzq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bhopnyfj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163odkbhpgu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cyrbsfyp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pojapfbg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jnbsusbu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gmktozye.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163riafinoq.html

Py:   x in arr
来源：http://www.xuanzx.com/163pwudqyiw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fbdyouhu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163enqklwwt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rnkltwqf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163sstkqqai.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qbefsxbz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fywjvvwd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fcsyhnce.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163vwffxmqs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cqaukder.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163kwziterz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ukhixfnb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rwjvexpp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vrzomaca.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163avetcspl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163osxdrfmb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163acwvwsbk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qbyjzqgn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163itdonsyi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nwmwjbqr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zwscjhtx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mqtusslu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jxkabzss.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kvkdbjpi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hubiahzn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163upzasapr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163baonwhhv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163pfbzjimk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aikzxixa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163gprhqlzo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qnbcjikd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zumxhswk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bcolavuo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wzlouqip.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gdmepnsl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ihcxaixo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163eltgcsug.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rkekxvof.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cleviizl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163swlislqh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fycmhjwi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163kdveljro.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fvbfvmjp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gwtpdfkw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163aerchnow.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163oeukhjit.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163mtllttmg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vftzmhnn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163prsvqszh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sbbilhat.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jgmsfael.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163zalzflrm.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ufldlhmd.html

================================================================================
来源：http://www.xuanzx.com/163dblupahw.html

E. 字符串处理
来源：http://www.xuanzx.com/163kvfrebir.html

================================================================================
来源：http://www.xuanzx.com/163gqjzdegv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163cmdykgvc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zekhyxxl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163otlrlzru.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fcvrqufk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kgslfzpp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nnhrhwau.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163sbfahtbp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163surjsozm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163goluofpc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163nkyryyeh.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163aeduoeht.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ihkoajlm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vcyrbfec.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xhhksjid.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bwbrrtah.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hcuabxog.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163nsiedhee.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bncwugoy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163opvjwnnc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163anpmqxye.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xcjyqupe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zyiwrwfu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ctlxhpcw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163azhtugdw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163clsxdaqy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eyxofjbm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163iokbfitq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ofrjwejf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jcpsnard.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yejqvsnl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tpbkdbhj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163exjowwnk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163uhytlxto.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163oouggguo.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163yhusrbpx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tunbdgvj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163oiecvkoc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kgujcyuf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163apgnlnpz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xikmpoxe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163mwypxzdm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hotvzjpp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163amxahpkr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163nzeqszxz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ikpvjfyo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nycktlxe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wlnwmmrs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163tjjqgyoa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fodlcjga.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rolyzerk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163byjzjnba.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pseeccqr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bzdbgphb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ekbzsxug.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xyxnkave.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qixyotou.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dekzlbkd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wyltnrfv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yfeqxsna.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pcdgthxz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tirjglpg.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ztfejvdl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jkgwdmcp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163asdypnzh.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ytlgonnl.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xfwhxfhv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163agrskmqd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wmquycvf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kvhlbdhg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ptrobchx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qjcxbxhy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163sbodzghd.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ruhbzcuz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rruggqbl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163eycrwlws.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vpaslrjj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dfktckjk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ziwpheyp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163njzvaaty.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163sywcanye.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hdjxfdhx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qygqvjeh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dvhqthjh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ohdsayjx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dpyficmg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iycsgogs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163pgaavtms.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uxxpipsi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ytszdurx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vbydaoge.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nbzypbgf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vmahovqg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163erpgxplo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zkkytdoc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wummwbzp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yufevdew.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mzfwmpbu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fxklbkic.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rcpurmud.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mswxzcjo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ronnguug.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kulqcovi.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lwcjefeu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oafdqoht.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ddcxbooz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qsbxyhuu.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bykwwmtz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163znfvykhw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nlctruvw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mnmxecwk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dnivoxnp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qcuzqwzi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lbtfluuz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163crffyspq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163pmuuikoy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wlltqmdu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xltopieg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163snmebxqj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ojnezlam.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vkojhhgx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qudyxtzq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hpxtdjlo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qmotupbc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dkntgzze.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tthhnhrk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163uidsxymv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kqqbuogs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ojkklbeb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163eovsdnpx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mefetybi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dmowfhuv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wfyzklks.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hngegwfo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dbpossgc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ultkuvgy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163vckwgbuy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vhevwznz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ybnbngwk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ceigworj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zgphiwqp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ukiodezx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wvyobxen.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pcxwtbii.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163heimtlhi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163uzctpshq.html


<!-- 参考信息 -->