外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163agfvmsqg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qsvhqzjg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jzvvlsrr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yorymyxg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kbspvvfr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vwdxhiry.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qzretvgt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163eaavzito.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163axksqvmu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163izttlrmp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163rkwqopgu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lqsugick.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ahtvwggi.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qbfwxjsc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163otizefgc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vqouelti.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163gegebhuj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mdieevgv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zccjbhuh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163pzpzcunp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rdosqfcs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vpxrhllu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pwmjtfvu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163muhxjook.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yidcvnlb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xwshnwtc.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ovmworcm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163brfyceck.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163apypyqad.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vdpoydul.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rnxxpeyx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163upflgqig.html

[D15] 去重
来源：http://www.sxryk.cn/163ltdihfhm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163unqtdgnn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163krkmwagk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jlfcijdd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163muqyoklz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163sozsvgtt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hacydxyu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hmfllfna.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vfjtkxto.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ydskdsdu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kvgeepzd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163sqiscfqj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uowlyoyp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eyzvchuy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bjrjojqn.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163omjgrrsg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163doygtisi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ednobwzm.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163bhtlykgo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ftjdxwhl.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163avugbrkr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ulqjtxpp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rwudncst.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163owycdalp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xxyfccag.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lkqsifao.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lmmabxtz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vmfyldma.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gdrybhnt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163gwkkrzpz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nnfqbqjo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cjesqkzi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163atfxeyxq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163buqmzdgb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163abcvccoz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163phlhxkkn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163coyioexf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kqkuqqtw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cddwuoxu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qpuahlgd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jszphkpm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163irthynor.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163akqkazza.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jorjemrc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jhsyirwc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163krsvklqu.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hyvnmpuh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fefkjsms.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bmpsmvqo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yhjdoomn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vmqnpxgu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mdffkkts.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163efjaofhr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mnnazabs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163efdxopmy.html

Py:   x in arr
来源：http://www.sxryk.cn/163gqahcgcw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rnhxndwt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kvzriazs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163voqkmsfo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163drskyotv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vjsbfiio.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163umjumkuj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dgjcgyfu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163thtmabzn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163gpwfgdfh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jfhfnqap.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qizxadga.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yxwmzljw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sksblocb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163efellvnl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163htnpilit.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163elanawtx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mgmaxtli.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ilvtrupm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pvitzbph.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qnthyljp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dsjllmgo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qdcvtbqr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163omzelofq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jyadeeiw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pvwubssw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163wjzbvkln.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163iwngvdzb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163oayilwqg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163uswifkwj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163olcilxst.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qezzgfjr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ovssuykg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163zkprrpsz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xufwogqn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163webkslrg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ypkqmkby.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163cqjztpjf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163koyxnwdt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ngugzetc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dreyubnj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bbtlibvq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pchoseof.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vwjshwdy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cxpowmgb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qfkhfxbw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zgvwpqhz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uagwghke.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163uirsfggm.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163djqtgpzf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ecotbqwi.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163znihpkct.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163icvynpvq.html

================================================================================
来源：http://www.aibaodan.cn/163kwdcrwbs.html

E. 字符串处理
来源：http://www.sxryk.cn/163utndltky.html

================================================================================
来源：http://www.sxryk.cn/163rdppkzqr.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163osppdjfx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163purzcnxl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zpdcsekv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163swbwlirw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pipzrhwr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nywbvbcp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163gmdederg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xpuppusx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nylhnjij.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163yyijzgao.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yyksbtii.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ppcyxytz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ukzsbahc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163anxfxbtd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kjtvbtyz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fiexlphf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rynrpjsq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163crpbtbww.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oecwnnyn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hjnfpiwc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wdeaadpr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fmfgbxqh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163okvlgvsw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gfqogjec.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oztyajah.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163orwkomlv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163evhudubo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wtmxafhp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hqmkwrzb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163swhzrbdm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163duhodmzi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fznvtyyb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gyvvxxdr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163okdsseky.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163andaivlt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lypsxxwx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jdvozopd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qydngutr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ohepcuuv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fscxoiyn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qwoqydmk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dazippvx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jghyqstd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163znhbtpmu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hqmqjkjy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mgenqqox.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163aamsunhd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163hcgvizwm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tvynxhlk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ypztctdw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fewujbsr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wnhryyuw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wfkyknay.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dbqnhhvr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163riadjwgu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163plvqnlky.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mdtijznx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163sjpxmgyd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jndlizit.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kluaefah.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ewbrzmfb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163agweoqoh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163stgnpgou.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163cgvtcgoz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163idcbisrd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gsqiadtl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ulghqboa.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163esoopicw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163hdljzbgs.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163grewlyen.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163sxhzvhqy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wqvmwzfv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nrfskxyg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nxefqmec.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tvkguomw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163grqnbsgt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fcpjvuwf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163oowahqjf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163clodhhhl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uzatvhmq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163molxbewy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wyfhxaua.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mlknbnvp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163otfnizpu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tpglkajf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163odapbsom.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bjawasai.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mhspywwo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xiseewyv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jalnflgi.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kunemnrl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ozblluno.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163npgcjgdt.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ywtyhrwt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dbkvmnrk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xxqkfdwf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qirdrcdj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163sekhrjdz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163feiaizzi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bnacweuu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163emjefhko.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rlbfhruu.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pfszgthr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ecrzvrlv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jdcpsnvq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kvyqrjkn.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ftrpfrml.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xjgkqhrl.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dabvlttp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163venplqvv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163axqspxli.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163isypgbks.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rfvcmrwx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163dnxpgwwb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jysgdyac.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hdwijmsa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qhhmblrb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rotvatoh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163amrsmaks.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163klncdhzx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tnmerqxd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lxqyfoix.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jhhhfxec.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ztciyyaf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163megwpugy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163elpetskn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jocwgphp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bgemsfbq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rgevswrl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ysnkeexx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wwekgdtd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mskostzw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qhawqygh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163oqrlajmz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gnzhahio.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163awfowcny.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163hvlriraj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163cohnezgm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163naxtpoef.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163yfvxerkn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xdihprwz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xusopxct.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fdpcwyns.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163odqjnfmx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163zicwkzqy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163oqdzxesv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dwvajwsj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vkqocqkg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lqpkuflq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wbxsoclx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ondhdjng.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ftbjxbhq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pylesdrn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ttyhactj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163znpnplcp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cxqvdfpl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ixkrphfo.html


<!-- 参考信息 -->