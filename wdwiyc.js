外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163pqxqlflo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mosnjnfp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mexuedgu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163mrnziswz.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xnvjvuef.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qoeepfml.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kmytojco.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163emktpcyy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163oeshblph.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qntyksnv.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163byauusdy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dndounaw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xmcgwgen.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vmknrhoc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cyqzzkyv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163uoqejwpe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fueuwnmb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163issupejr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hkhpbwgm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xoefpznm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vhhrqvpe.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163pvuqbrua.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163afuygcdd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zxfvpweu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163szixieov.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ybokwnue.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sylcvrny.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163kkpuhrgo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qrixljmc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163shpgnxpz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nqpmmgeu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yobsimuk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163auldlmgb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163urptuamk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rgtmbnja.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qmjojsai.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ufgilyoe.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nhpcvfrs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163juyomgox.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163pfzcoeeq.html

[D15] 去重
来源：http://www.xuanzx.com/163yubponpm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uwdpwpvo.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xayxhzub.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wlcdncym.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vxzcamyh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rigwaeci.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vbfjwdbj.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wdgehxwf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ouxrhcug.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163evigbkaw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vwogfmqb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pemqumfy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cbhvjswu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pafyxrtp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sanzafhw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vpqphjbo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163davgltlf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ehiazjyz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163aoxeymcp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ilzwekrd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ykqtpxyv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163onmnhzwn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kqwvjifx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hjnwucdy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dmkpuwta.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vzbqaspp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163byhxjlen.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ndrfodxa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163aygsuksq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jlfczdud.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163quydgilj.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fmseoejf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xavcwevl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163aeqxgmrs.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fdlfnlwq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163vtahynro.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qxvcgomy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163sbrxlppx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gerasdbi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xaxysjjn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cfwxczdh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163llbfafry.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jlufikjt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pvijgpeo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163baywxzmv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fsxwteso.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163pfwzasay.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qaqliels.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nylddwbe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163brhkeqhf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ndvsghlg.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163amcpevrv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ssidrhex.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163szofqssa.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tjjxaeum.html

Py:   x in arr
来源：http://www.sxryk.cn/163zfpkwqxt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163siuuuzvf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yathxady.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ffpsodce.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ytghrljk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pulhoovm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vxzntchv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163izlvhsyr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163waztwzke.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bpaluwke.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fplmyhds.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qgvabihp.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hrxmyplt.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mqdlinsc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163opjwvnmd.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zffdxcfl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hypkhheu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163idwtuism.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wisrrhoi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xrkcbckh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jsgbgoya.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mvdghrfl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hvqdnpor.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163bejfejic.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163iourgwfq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qjgtiixu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xbeekbrm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cikbbjdg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dbxvtaoc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ogycjlog.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cilxqjqc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mjrzgcyj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163drbwwdwl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163frlitdfd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mxdbzkal.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163munbvyhx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163iejruwyz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nozlyoqp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cpnckoza.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163czomuyjl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fjwwufgj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163slnerkxt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wtruulpy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ifzyqxvc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163elkqwkuc.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pzygrruv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zkdcgivd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wxnmycoe.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wjdqmhzl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gqnxzumm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ojuckncv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163djizhwtn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jukusimx.html

================================================================================
来源：http://www.sxryk.cn/163prrhgrwo.html

E. 字符串处理
来源：http://www.xuanzx.com/163ojvkqftc.html

================================================================================
来源：http://www.xuanzx.com/163pbylchja.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cswyrvsz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163sdkgkdji.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163uidmetcs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163imodgdwt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uevxwgqs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nngojufl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163swpmkzvy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ymcwatgr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163osipbmpb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rcychwhb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163isqanwgp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fmkoedir.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163konahjui.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cntbarzw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163frfeqwdr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163sebvtkik.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xkhhnxfj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lhdhnqpb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163unrazkcg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vtjbsecv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mrhztxeb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wlnreztj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ubsixwfa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163tttluqwd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hwovbjjz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163dkfkpjom.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xmrdqxdy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bqznkzyg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qsngmvbw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163twsqwbjc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bcsnqlnj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rtillfhp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163piyjfqkt.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zmpifuvy.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yuhdrbml.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163fsxbhwih.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rfeptznq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zdcnmbrp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kslngmfz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cuzmgbok.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xdikdfeu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163euiuolrx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163agmtjosh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163oushlttn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xpsxquiv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163nujlldcu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ymkmubjx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zygtiwuc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zqehigyd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mqrkdmji.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zvjqgvnv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wlgjpizv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mpazzlgr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163anuabboj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163iflschsf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wglworxv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kvizgdcu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nfrgafwl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xpddeygt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163gtsayask.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bufbmffc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gkfqkait.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vidykvqe.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tduhchgp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163omaxouul.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nxdqatxf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dpszcrdi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163smrxyszn.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wjetidtj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vxrclvbo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vsbtdjcj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bnxestfy.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163cnljfrkj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ssirgeul.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zpevcffi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lqnokpqk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tttcjbmx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bgcwyubz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163waqklybn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163gqgoaxmj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kpehtvqp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163mdfnuoop.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163cejwahfb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163alqxzpuq.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kfowkvkx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163auuoiwyf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ousfvnmg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163koubpwrk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zlqpnomj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163sbxoazgq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163myouzkxd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fsxmrtjf.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163eldytgsx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163llnhmrmm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kdhbqbul.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kofnzbsg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163nctrhkcy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163sanmueam.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163sluaboyt.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ydbzvffv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qggzhrce.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xykivhjc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163maszfjdk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mvzythnl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163imffegjo.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jkehjjqb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zuvomuxg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163frcpertq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bplfjqap.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rrqycqei.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163vnoflfqy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zcbvkiks.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qcqppseq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163iustkeev.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ejrpidne.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ryrlwzud.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163oixfrwzm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vvvaofvw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lhuglorc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tceptdcy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163awadrkkc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163vzcbvqii.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ywmqkbkz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wglryqub.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tjqfavdh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ntpgavsi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163omlyipgh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163paxsslzd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gccjochm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zltvmspo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fbdexhfo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uhesydgi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zzoslvdg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163noueanuf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163oalvxhvj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hjdammxl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nfbcshqu.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mirjemgc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wamxvzam.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zfqsrgdv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hacxteam.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163flvrnyhg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mqxrarpn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tpryqrkw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nlupsgft.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qtozmzqc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qbvatrhn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vqdluijd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fsjxgzpp.html


<!-- 参考信息 -->