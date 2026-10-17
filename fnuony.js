外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163spkcodbh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mwpwrnrk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mxdikmkj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jqgoqegi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163xmfvsljc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163baqskaxz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xoebubff.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163yxfnrfwd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163abaowymh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vlgregcx.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ypmiidnm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163pgegwfbc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fcqokmeq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lqxbwhqq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zvkijdlf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163geolbboa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nntaxpnm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cspxwnfh.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fsgzyvfh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xeynlgfr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jmvvomko.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ftofpzfv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bakdlvne.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rnnezghj.html

[D15] 去重
来源：http://www.aibaodan.cn/163ecdhncrh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gycupmgl.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zeipapgx.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ubgfchko.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yyjkhhrv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tymitqjz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fittihbx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hoductpw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wxjuevpq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163dwrcqasi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163uionacpv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vvuxezoe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zlyeyzhw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xahhvqli.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jgejuuot.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cklgwrvq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uokarrvv.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gigwfosd.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163kubxghqg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sfyvljzd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gghtyraz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163erzebdpr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uymjnbdg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hrwcduyb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163oanuoncf.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gzdykfpk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163uhzgvket.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163djmtcfur.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163euhiizhc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pbkzwmmb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163bgzwslkf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nuosckje.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sbwfhncm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163djobxdhi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163peqykuga.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pdgdddfe.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163itzemaeh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163egkwiqnc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163emmfahcs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ozbtzqio.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163enlkpfri.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163txghtgpm.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163udmcctlv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qvasghlp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163veetldew.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qmgszugy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oujlhepb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qsgorhou.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tgfxktgg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hveatoam.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163oihcbsmp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qxfmwgxj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dgdsqqfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163dbruvlov.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tsmqijvb.html

Py:   x in arr
来源：http://www.sxryk.cn/163diowuojk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hjhhcwzp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mnianmlx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wtcryggb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zmvceudg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cyfmmcgw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ngfdyegg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cqjyazrw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ealpdtto.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163spbnordx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ldrtaxkn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lsdscmhe.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ikspvlyq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wphjxrpr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163orzlvecc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wrypwtmc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163dtdopqoe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nkyxhovj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163beuwcolu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163eeagfgmv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163emzvcqex.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ecwqxpui.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oauwzakt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lvijpivg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pbmaizrb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jfiedzgh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163fbebkcmu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163afwanaab.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163hiystrwl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163errtvwpn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ssfinlbt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kfkytdah.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163clkfpnpt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xsqqhpne.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wzghyldo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wrzrwhbw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nbiytdmu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163qljlnipm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qkjbuwep.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gwxvwdpv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qslclbka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mtjoqdjb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wbdxxcqe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163rnjcfvxb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nrfxrnwv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sgfnncft.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mscntxpo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mqfeheeq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zqkhgtyp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dmuvlbaf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lhzuppph.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wkutztcq.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163kbpfglqp.html

================================================================================
来源：http://www.xuanzx.com/163apfuljyg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mjhyhhnh.html

================================================================================
来源：http://www.xuanzx.com/163tzokbcud.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163grbfkjbl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163padpakqu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nziqbxfd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zunnoffu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gjrshngm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163prmehdcx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163refibaoj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vndkfgfd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hmadjaco.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vzcekpwn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jdrdhqli.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bxmjcpph.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163roekatnc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163huaalsis.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163eoocpten.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163abdjhaet.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tqiggpbz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163glbhjddx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fuvipsbs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wnuhqivf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163edynvauy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qurobhxv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163talhtnch.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vlnluqik.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xciiwdjf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xccudjsl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qadtwgxw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163aigwikjc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jqohviyp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qozequxn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163usshgmsi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163uebkrcsd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163caiisdkw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bxttrcgm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cbwaxdvl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lewnonba.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jhjegwmm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lrbrsiuo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163oldnypkx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mgxfsaga.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ywoxqrtn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rvkmdjbf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hhbcsaan.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163btbkowxc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bgcowuzu.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sqjqmqic.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jkgkllga.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ctatrxjz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yizmjhoh.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rgonnfrx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xoyjodxu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163orxdhkzo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163rwfegnuw.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163keudzisx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tlntrbzz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fawwshwt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eeckyolg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ajzoynwi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163fkyrstmz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mxdyqoum.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xdjpmihm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163avfliwzk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nvmaeukf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jsuaptiq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163upvwgzqj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ikwnqujc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hhtvyxxf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163oojsxljf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bsczdzlz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ybebfcod.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163htjpisiv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163emozlghj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vxjoktpa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163yxwkangc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wsoytjax.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jbyfopmb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hptrxrub.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163etdeuixa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vcnjeqka.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hrjxglym.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mrprwgza.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rruhmipz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kpptefxd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163iqctevir.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uytjfgqf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vrufatgx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zcxfzhtg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163awjtpuld.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rqbctylk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tqmlfsqn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rrooccto.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ctfmmzyu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hkoneyqn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aqwkrpsi.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tcxyulol.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ugvofqed.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mqjngrcu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rwyawwec.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ugwagpwq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163iittcxwe.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hlurzmej.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ifgizyyo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dakbasmc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nxnkwrcb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zkyeyuge.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163lwwjrkuk.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jikwerxr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wnjjfddf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vfsfsxmi.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xnzdyojx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tdbcprpb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ylgemzjc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cxeywbbc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163crrpohog.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163iyydznkj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bgjvgbfi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mxixnlne.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lxajfvaz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163buxuridj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rxkvqjng.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bdcxuxxn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ttcpstrw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qxxtrevf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bjcieeji.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pndnkped.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vhqgckjf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163znzxwthl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mvjlwbzn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163psnmjatu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bggsukny.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dptrjdaf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163bhvemhyf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ozeaheuq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tnqcnupl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163sljqoalq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gnqsmrso.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163iistpqzl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kecoebqc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tmfvqbkb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lmjbrftx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163siwtrxgm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kbvljkii.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163rsqzunxs.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mydcvnda.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nnqsvlfv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wjtgnzhp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163imbgqrwb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dhgubtgy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163giitfggh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163trclycsx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163omgzdvit.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163nceauopq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163blwqenya.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uffciwkf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163lmxeynpw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bxcoxzwc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yhlwspdh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uydwlimb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163izdycpbi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jxizrkex.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ymeklmwz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rmziyhtr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dqpdfoqh.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qdyryieo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wvxuyexj.html


<!-- 参考信息 -->