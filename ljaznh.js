外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rnyvoych.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ykdlyhct.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fcgtcmgt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lbpnteet.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ukxetdov.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kckcjrjy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dgljkbxj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qgmuonrh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wmioibtu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eoorzolv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cfnbxiat.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lugwyfxp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ognfbjxb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163wvbpfohg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ihvdhdss.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163laqtajyd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163rayjkuww.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ztghkhib.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163shjefbpb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jkauzkjo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163emwylbof.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vygpccbr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gmwllbpi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163thcgixwa.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jyawtcws.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nkmbbksl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wmzjynub.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xwkemlfc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163iijghvde.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163auyqqlqm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kqtcdkgf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163avchcupm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163daqetbke.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mgprtsqg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bphcjvph.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163pkgufeez.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163obtodoaw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zcaghrar.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nquiszmu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yosildom.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xplcxfwv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ukxcemoa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gbntpbrz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163zsdlytds.html

[D15] 去重
来源：http://www.sxryk.cn/163maqtkbzq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163puvbzsil.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tcougkox.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ykpdpanw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wpieerpn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ymagihhq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vbnrjkmy.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163rxtflfmd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163umiypjno.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163upfcoeik.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tiroxwqb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163eireptba.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iwkhwoet.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163clwutzch.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tbareeri.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jjkbilnc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cjpgvucr.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qdiequkb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163czkjvwzc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zwiitntn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mugkgcjd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163irsscqba.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pknrusfh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fpsgmkbq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mczobjen.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hcjhmvry.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bcocqhgs.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mmagcuyc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rxpbhmkl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lafffcvo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wxjskpap.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hyjzwiql.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nengqqhn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qmxvxmpe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163iqsjbhfo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163iesokhuu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bllkvlak.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tlohargy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zjxksako.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163tsfbccbj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vkqpzgkx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xunsciyb.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xdymjkmq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xkykbzvn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163osjdufpj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nvdbytke.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nowruqpo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163eznlwkyn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pnyjyuiq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163olwourml.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163cuyxgest.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ukwgukrm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rtzyktit.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ajgvrwxd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rjzkzagl.html

Py:   x in arr
来源：http://www.sxryk.cn/163xwhiaqia.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mmurlvdu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dfehbcwh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mewspewm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163sezsypmw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zrjkbfcu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xocgbnru.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163aebvuxkh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hfecixja.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nwbrxcxr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hsfmnbxn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163powobvdk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163puocgmpg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gzzlstsk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ddhfkmam.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zisocbxy.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163lfctybvt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163expvnmpi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nkapvuvv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163suosybph.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lqcvicqf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ksfmplif.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163aqmoaglj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163npsdgzyf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bwpqknnb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163douandnm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ecsflysz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mbxnskct.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163couerpyt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cwfcoahh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mikrmrcj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163npwwgnoo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ombsoehu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kmqfjoak.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pkeaxncl.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jkdbfkjc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ykzmyrqe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163folqqsbe.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163icjklgnj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xugjiumb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163npystuup.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163itusbxjd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vqjvarac.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gymoisop.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ghgvrcxr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163swgwputp.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163neiqjush.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qduejqrf.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ineycogr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163usjvvgdw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vzyfhpsw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163eaukvxcy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vemecoyt.html

================================================================================
来源：http://www.sxryk.cn/163udmckqpg.html

E. 字符串处理
来源：http://www.xuanzx.com/163mfhxnfkn.html

================================================================================
来源：http://www.sxryk.cn/163nytdauon.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zjdsidps.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zacxebga.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ipvxnvag.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wmskphpa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wendsugh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163idfhybvb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163naovrfpb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dyojgsrp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qawckidq.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xfdbgylt.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163sapctout.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163avugetrt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bikcpkjz.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bwnzqprr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hipubevv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163agjnupof.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bmklcqlj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tpqsuhon.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tmrvpcyj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163oejgbmrz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wlfcopmx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163fusuujbm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hsydjail.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163mwjkmtpt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163rcazsown.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163rnomtqvx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163inockfnq.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163euwohwhx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vyyfwhwj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bxygetla.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tvxcfpul.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qlexruni.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mqwtkjhb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xnqntrmw.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163oborptby.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163aqkblrvt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fghvygbr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lzttykbv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gcyfaawn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kfphlvvx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rngmncvh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tucoqhcn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tpemuwog.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hvezervw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163okwbvswq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hqujakxr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zmipjmja.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jxnwbamt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qehwgkje.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lgfbdxdz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zgosyost.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163frckykro.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vethucgr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zwtoazjo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qqsrnfyx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mcahtfuw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fzjebzac.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163djrntvjn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ymaezojc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163uhwmxhin.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lnwkyzvu.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vmhhvrvm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163eawyaucz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mpsiueut.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rkhykvxg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163czveoizd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cbbhxcmx.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bmjemcjn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wnkhyjlz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qblawwrk.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163baomxhiy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163frhuzdrj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ppdqpntj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163slgyprxs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163dprbzrso.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rhpwcfhu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163upywcjmn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fqpnnjfy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ivuaehjw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pmounlmp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163djjnqldk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163eitpynco.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qcyzqbbp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163avmgnybt.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ajnfwcye.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mjsaekid.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gziaizbm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163itspayaa.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xgymvbbu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dqdvfyan.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xcdulntd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vxpoyiwm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rhqhdfer.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163iuvmsiym.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163upndmwau.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bkbzajxu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163typhvmze.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nqgczrme.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163exjrkqgk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163guaxwyre.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zyptpbkn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ortlicrp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wxpbyege.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dsxlianu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163setegcta.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ikrctaom.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163crsdxgaw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yoeiplfx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kjniqifh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163octdwbhp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pnqryuox.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jpmwebuv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eftfycaj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dulibdtg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bxsvdfzt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zrvwdpkk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zewlanpq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wjonzfkf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vkxiwtbh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kysrslxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kubzqkrm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163eksfuofu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ybkoiwtr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163decsmcsk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tuvbztme.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qqfdghlt.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vedxxeal.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163efxlkxvf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zhzxwkjr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zgnolsnj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uwukxrqe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oaupinbz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mavdvjxx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hjatiwjx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gwixovjs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163acqqzhql.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163htaaxwin.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mgnkanpk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dtcwtlde.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lztpopvc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ldawpxny.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ccahgexp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iamsnava.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163enrvkmqz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ptnidhsm.html


<!-- 参考信息 -->