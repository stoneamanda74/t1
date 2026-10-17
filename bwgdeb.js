外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163glpdfvto.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163iavnthoj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163pgjebqvt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pnwkjwze.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fmdpavuf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wbfntevl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hauwzymr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163spoicywx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nupmetsx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dfdqzvcj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163sotfosjf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163srtrlxwo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163drabfsws.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dyjxwwov.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qbtaacbv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163muvgwvsu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tfqvbfjo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163flznuokc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wlnscbgf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rdjhvlzu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163orvxcfft.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hfpiwctx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fxybqvro.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fwyxvywr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163stpophpo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mcoyzduh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ogdijdww.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bdreamxv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dmtrfmez.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wkpdiful.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ddfkrusf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wjbgglfp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uxpzrjgc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jusmfhiu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wejrpdrh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163efrlblcc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lfxvyinv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cjmphfed.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ahjhyvpd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mneosxgb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vdvflgsk.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hqlptaif.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fkkdrbcw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zurwhfun.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163pbcqrruc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wmooruso.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163tnqkunpo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wpsbexfc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nldjzvwy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163brbvwvps.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zxcwrphi.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sjtnhtnd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xgaczgcg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163baqgvfee.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163helqbnzv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163wzomsqwk.html

[D15] 去重
来源：http://www.xuanzx.com/163ftnfeyhh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iqslotww.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mnfgibbi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ysjwnwqd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wfbysran.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ffhrcokb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163isommdij.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hzeailpq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mqbilcgd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zzbyfhhy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ankacfai.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163anjxctan.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tlufaacp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hweexgkg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163znyhppwr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163thuxzxam.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pptsqtzw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163dggqgiky.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163crwcyvzs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jfwafvvx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gyudskbs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ctawkqty.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163auwqulfu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163amowrjbx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rlwgpfgi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163iyacqtup.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tsxitamf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nsdftyhr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tzbwlika.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ifixuyff.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163hagoojni.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qzyytysc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163espnycqy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ihvotphy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nelzxnpn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163guudetyt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jzyirjcx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qthpclkb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163upwcuvdd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cryhdvfh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163acxrqqjx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163koaehiob.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nymfafzx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rqetedfx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ffcpntkt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jmreexpm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mxescxnv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zhmesssy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rrhhjkut.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163suoyefhw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163tevtvjcj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163fhiaysvl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sknyygzo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fdyejjwf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yyiwdzdp.html

Py:   x in arr
来源：http://www.sxryk.cn/163aaunucpm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163osmqyvji.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yserblai.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zshycxgp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dbowyfaf.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163snjqieeo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kgltqllb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qphooiff.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163obbomowh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jfstutqm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cuagihpc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163erdqivdx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163puzoaalu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yvwxsjkt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wqfaawaq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wzflyqmh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163dwwarjed.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163anyjzqyl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yyzerzpv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163buzpgzbj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cecjnfao.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qmuaukmx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hmcioqec.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dxuoboua.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dfyjqskt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gcrzybsp.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kmguvdwn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163acmkhroq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163uorevpxr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163kasugyil.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wrtguydh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uuvbvvtj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163bwrbexmx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gfxnzlmq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163qxxcklzz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qpljrqwu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163peesahbr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vgoeywow.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nadvafkw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zpgbzpuc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163tbhdldtc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163iomsjzkk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163shbdtmdw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qflldwke.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163agxpghbe.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163aoxekvdd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cadmvalm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hhkwzkrf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163erzkizsv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ftsihbbm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dvxdpqao.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gofakdqk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dnqdlywk.html

================================================================================
来源：http://www.sxryk.cn/163okbnipzn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163atwzapkk.html

================================================================================
来源：http://www.xuanzx.com/163wrdfbppm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gmkxlpja.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dpciedzj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qofjyquy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163icmsmpgt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mlvrvphj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163itkbgunt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163pgfoiluv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yrrryxsl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ioqoqiuq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kvsvvqlv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vbpifvyn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163psffbtuh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bjlpjult.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163prvpafug.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kelpqvhv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zyqxvnel.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fyoinkbv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163llqebnne.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fexjspxq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ehyvscvb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uhnnsaig.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xltpgagg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163solkniry.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163nhxjckji.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jfupwjna.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ziwsirsg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nfmivmzx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163phzchdmy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jcwflkaa.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163naefqjmq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qydmjwvz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kjpwbnmi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ztibglru.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ioipugxs.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ovqkwixh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xlhzyfak.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163rxxzjzje.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nvhhdrik.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sarspygx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ttzobdpz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kbspikyu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163snfwalza.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zbmbsrrw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163chibpbme.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hkczhqcf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163sfgsmdke.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163enauuvww.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163caxyvkgv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dehnqiuz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qyhyzvmh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aymkbjop.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qdelxcar.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dlrkpovu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ojbssbts.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163npfxhzwy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xfikgpif.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ltxennwe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wwvlkzdw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163nsskprff.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ddxcvzuz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163merewmuc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ehuszpjn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lqzwlzxx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vmxiijrb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dtbmkxqf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163odojzavo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163elmrngkh.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163cjtbjapa.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163modizrql.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dizjoobh.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163skvvrfhd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163aoeopnem.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163pkuynwwi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nbttggap.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mxxzvdnr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163peuugqtm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fmwswifb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gysdnkhj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163spghvnfz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163amxlzqax.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163eoajdweh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fxgtgapm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lvoojdll.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mtxsjkeu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zvbwqevg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tuuvjzyi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zsbxuhyb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163irmhkppa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ocevkcnx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cuwgdvzs.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163rdsasalt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cwnpyokg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163uktrrhew.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hksphgjl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ormwtjli.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hxqlidju.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163xahlowhr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rzjezexm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xkcpwfyt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bfegjdcj.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jrdweqrx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163thodgalj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bcpdozup.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163riyzoiyo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ufmspaib.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zkejcxyd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hyuulujz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wtiuiqwz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163rfbigasf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163rhhmieqa.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163czfccfoa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rdxpectq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bhavoqag.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ailjuumw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xbirxvpx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hnvviznp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vagqthns.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163njjnmljw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ibljtpqs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163paxlsixp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gbgnmreg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163illtlxku.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aozcyili.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cxsqnhpe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lmhkidst.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lvouveyh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zqevbotq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163rskiwobt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163aqcnlmvw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163eydhurav.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kmpmjxqg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163eapzdiek.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163eewceubs.html


<!-- 参考信息 -->