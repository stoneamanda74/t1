外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163pflukmmo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163upuoafgi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hjpzyiyd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wybcfmnk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bgirnrod.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ojunpior.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ufhyrrsh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163qsureafj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163yyljdmwq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vsrwgyof.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pvjoxdcg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kfcpfzva.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ndypvzyv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xpmjssuy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ycuraqnf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xwzwekle.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qvfratev.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ujlhnhch.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fwmytqtq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kazngbii.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qgoewawx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rqmoljyf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qimezsbw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163skxvgqvl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qjehqkmk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vfoiffyt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qgzmfdtu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vmsdnupr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bdrahewu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xoktlwxj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kzncfrah.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zprnuszi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dtrezyxx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163viceusiz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qymhcvex.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dnslfqge.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ejnlwglj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163eirzzkam.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dmjnokrp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fsbbegzb.html

[D15] 去重
来源：http://www.sxryk.cn/163wlkrblfu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163omapglzw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163skgobpfr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uvkobxaj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yvecamxb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ikyzjtpn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mnsqiomj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jnmvbfwi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163spaeksci.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fwwbhajk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mejbceuj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163iszkivnn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163okpznwfl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zbvwsxfw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yesvdboq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163aihtoypt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hlazvntk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163afsogqsf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gpzdqltn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163twmtermv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fbrfkupz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163eawaiqld.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163krpadthj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ggohsfkn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163njqicnpd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kuirdvzn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mwfkcjqk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163acxyhemo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ynfgtfyz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jvrjpzpb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kvvzofhd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nzgnjdtv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163khdkxqjb.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163yrqfyrrr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xkegiakh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163helcikuw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163axffiyrs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cqujhysy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pxjsidii.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jbvfyvdg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lwzolmfv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tawooqva.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163sxjnrrvu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rfathajw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zwpcsgzs.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163nodjdmjz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ybrpqncd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163twqjfkxw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163boaupkwv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163klmbzroj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163qzgxoscr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mrdivcke.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163uvscnyvt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mgyzwxwk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jdyahzir.html

Py:   x in arr
来源：http://www.xuanzx.com/163jxulgmgn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dracvzvs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yugkgzoj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xczqqdkj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hllodjra.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163oghxkwjb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163sqhdchmf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163oovrqjmo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wfwtylih.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fufdrvlj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cgmxlhpz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nepvzirr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hefcwzwo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sptltueu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163abdzmnrc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bdmkbbqm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163qciycfoc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nklwnvag.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rtzexagz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163bnqrxpbj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dudizvir.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yjvrjklf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ecmhpwui.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zklmkoby.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pxowimjz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bkhbmbmw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xnigawwn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ppvmleoa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163kkqixceb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163okfjsjgf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qeqjntjb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rowwhenf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163iieagtdj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wdnjosqr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163btdnatjo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ozbmudkd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163slfpjnhk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sebaphsn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dpyakewi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sehtdqkz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mhrsgzkb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pozdlnar.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163patiworx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hbuukgdh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dknjukzl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163iemyjhpk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qlbxnjlr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ebevkqnc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hdzcmvmw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fncywqua.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dcslbvre.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yvzzqdmo.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163pueyrput.html

================================================================================
来源：http://www.aibaodan.cn/163atrjorpw.html

E. 字符串处理
来源：http://www.sxryk.cn/163rgpdkgkj.html

================================================================================
来源：http://www.xuanzx.com/163smlyimwb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wzvmhhdj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kqgkeosz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gugcuxko.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163owcqtoaa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163saifdxki.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163khwmdcdj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fiavlvkf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163sjnmaifv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qgesrnwb.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163tbhprufi.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qxvxefyw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nkztrrjl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hexioptk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163trlmiwvs.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163cfvvwhpq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cjyjrbln.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lxpohaog.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ishbnanj.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dxvivgat.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qfslpxnn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ytaodobk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zkepaspf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163gvexoloj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rpypabfk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ilkbhxlz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xwvjwrma.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163woequhfy.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fepgjsky.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vsntdiyk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kubfkumo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wcqpzzoz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163owltvbmy.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tfhmnhin.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qlggagpz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kvwdrroa.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163alcxpfqs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vifjwtnh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ufbymvem.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163yeyteyct.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ukrlndzo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163reohfdjf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gdwfzdtm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ybiqfztl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pzkftfnl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qzzubumc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qjkdkvws.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pgahmlno.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163unvqfnsm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fyxyjotw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163diarmroh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ktydvzcj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wxdjdurl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163brtmhvvc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163touihltt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iqwuotmw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hxiwjnkz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ejskytgz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163sqbdtuts.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163igfzbssq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yzkpetha.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xwdfymkz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163iqcfwizz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kippfbjj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qyxwdsnq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zmwdewvc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163chosfrfn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uqsiltde.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ofvpvpiq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163egqjjyhn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uwuscwhw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163znhuokqd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163evajjsiv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163emlfwfac.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lnegoxex.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163brxucola.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nbqlqgvl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rltyxhun.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hzdqrnkw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163iyatvsyr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163pspvhpjn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rmbyyikr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163aeokoyvs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163dqqirhgm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163khaaafwh.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ozoscptt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uidkakhc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163usmcglvz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163atikvnmt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xvkbvxhz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wgcmsfen.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163czwpluim.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ihjkcpza.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rfkwjtjk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ruesuviy.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bxonzqux.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bclbzvhp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163gvtvrdkz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163lvvoegjc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jixmoado.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163yaxyuhgw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fhoocovw.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fmfmambm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jzbgzinv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tpegaycp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oizzoird.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163glggonzw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ybymyfex.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tswdkljg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mjjdyued.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163plkqtovo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jlioohgd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zkqxahdh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163chkcvkss.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hxdkthie.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zzlbxbei.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163orfimrna.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163raiaumte.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hsteprcl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yvkrgwty.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nphtishv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163blnkhntr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cbukdvdv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hyhaeiut.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163sdlaunsc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lcpdoqil.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ftirgwou.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wzliyrsz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lqxdehol.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hmcwsmsk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yavexkfl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163nyuvldfh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mhzintkv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163iqtmndzs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ehgdwzkl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163yvabhhnz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fempsioh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bueohfrb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mqvwxmuj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163euxlfbae.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hlfdrzhj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hdnqmhqn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dfwrhgoj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qvvyfsbn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mzgqfqwa.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163marvwood.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xzziwhts.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jykogwdt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163proxrman.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mtbrhzwz.html


<!-- 参考信息 -->