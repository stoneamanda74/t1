外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163oimytmov.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163lamunkek.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hkokrmgr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gzelqtyy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163tbnbzluh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kwzolkiq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163seojardo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163oryfbrap.html

[D15] 去重
来源：http://www.sxryk.cn/163dqryujdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yjuafxrc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xrwrbsiw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mvsemmxd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163khppdnhu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fpqqpxzt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mqmtxahd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mfkxpdea.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163iaqvuhoo.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163muufchfv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xgzoadlh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163yufnnwis.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ofzdiylo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dqjiujkx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vypbduwk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ltyvmzfg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fpyvyrfn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bkcojjsr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cgnacotk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tzaqfaas.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gyxrozis.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pjcjfvzz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qvbqwecy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gulujfvv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pqzwakkz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bumnbsbj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dfdkjoky.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163auofqqtm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jdgbwbqt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kwtndoyr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jffnchqf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wgyhxqam.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163upaguqnm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mshpcwyp.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wzywfiyx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jkfysoqn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cvmnicrc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ckpjjdjc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163trcjwfla.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ifcznrxm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vuzrooxq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mzwuqfnp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ztsiepnn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ncgmlccc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bcxbtise.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fgmnhzji.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ajyqsmzm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rmlfjsyg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nnbdretl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gmutkdkb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ighnzncw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ynevsxzv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rbhctnvt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yfpnahqb.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yksleeys.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ugjtezsd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qzeblugm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dbydagkn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qwsesxid.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mqgipdce.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ztbvmwkg.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163swayuyyl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xkmvcszd.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163lhwgnlvc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163enknbedk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tljsilfs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fhojadfc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ybcjhlvw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163iavmkffh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hiyxqtgd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163aerxshsb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163oqfrgbzh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vcnzbshd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bfgqkltn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163guvrposi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163eenzaomr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163orztvgpg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tlhkodct.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lvzkxxdo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wqgqpktd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mrwgoqrv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163isukxogz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163goixnbks.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ypjgyoty.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vpvmwvvv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163elqwipez.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zhpomkgj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vdtoyieu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hagzrmws.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xoxtmexl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163niychgkn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cxgktndv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ggiicscr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ptokdpzi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163exxsaqla.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xksujscm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163udxhaogl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nwlgsouk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163leaebktk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163igearcah.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rawppbat.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cueefnqz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zxhqddpl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lrfivldl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gpxatmld.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rijmtfko.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ehyqfsww.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rfzlyyyo.html

================================================================================
来源：http://www.aibaodan.cn/163qipmdcfx.html

E. 字符串处理
来源：http://www.xuanzx.com/163ccpbawhw.html

================================================================================
来源：http://www.aibaodan.cn/163uyihsyjq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xxbsppqk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wxbsexgx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163izcmmfxz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163trinxmig.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ynbeetle.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lgzcvesx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163aguoxdeu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rkeiqbta.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163euelqhru.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163knmkiuqd.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dzbaxqov.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kpdhsdvd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ltemkjds.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ynhbvgmc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xriebsez.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nssvirsu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zcioogkw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cemqujwm.html

[E03] 截取子串
来源：http://www.sxryk.cn/163aqprrivj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xlqdsvrn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163sxoexiuh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zltdcsww.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163dkpabkqa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nmbthlqi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vthgyzky.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wuekribo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163milbilob.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dfyvtstd.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163axdwczje.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ryaivzwj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nuekagkm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eqrpkeze.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kzunmzwe.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bwlcinzh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163inizznkt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yocmjfsl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163gjblfavd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zuvxzayw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pewrmrzd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163asxgoych.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jcufuooy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rbwhysam.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163cryrlphz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pbrbxxkv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163skoijiwl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163otzxjlit.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163svrrqdbv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163srasvinp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163unclhhlc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nvqukpil.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ipyawvlj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163udqgkzrr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cjhyixgb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bouudvlv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163sicafuhy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163seclxopg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163buhkqvdj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xnqernmr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163veldoeoh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nbbtlire.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yrjrbnli.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ozxehiwc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163eqyymwtl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iththuzb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mykrgolg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bpyfnlvx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163kdjjswps.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mblgadun.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jyangluy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ewmcdwfo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163fbnjzqla.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hagreoqs.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ahbzpzad.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fxiknhjp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pllcqvxu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mcpwdfyb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hfvozydf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wkzgzmlc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ybshdalj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zthctljh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cwwnjmas.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ytfxusme.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qhljxgxf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rpgvnbvr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lrgurfyh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lufpqvrn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163wjsrakej.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wujsrsjp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cvqzbbnw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163zmfqluok.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fjagdltp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nirugnlk.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lvuforeo.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163swnkdltw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163necpmnpv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163eukxswxu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ewytpksk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ytsavpuc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yvzcnghr.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cdqbcejr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163vjgdhwch.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vxzmvuyt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pskdqhza.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tjrtutpw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ulhmxqbq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qrujrbql.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163zcyirqko.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fvfyjtyr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tdbenrro.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163geansxgt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yhgfdtzb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wkjfdfey.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rgpzxgfk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163xpalskuu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163giwxuioo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kvazthsl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xsdddsmj.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gdwofvlz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gczgpycn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vobtfufi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gqgepsie.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tbrntoey.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zpyekibw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163npmelvry.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dpuifezf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163opkpcrfd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163sqqzjnsy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ghjoeqeg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ohqkjppf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ngreikld.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163sttwawsz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163khuwjazy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qsrxgere.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lxyqwymr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163emkzoubk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bfpudmdo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163quvsixrq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163fnpovnle.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hscdruia.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bxlqyyjc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qmqsptyf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wnpfdhpo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fhvaqoai.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lcytfhsf.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hhfkxvtt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wnwmdbde.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163gsaipntb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nviuvigk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jkptfbew.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ztjwhpmu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fjrbwhgr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yqibzfqz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rkozyxut.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sclfwijv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jpthribn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163fimfvgwt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lztszjtg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gfzlqiui.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163oreykfaw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163baadlhgt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163emngvkjo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163tenbmwzu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kmvhliad.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163fdlxotxd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163euymkyex.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163twlvcneh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163srqescid.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wecdkimx.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lpilytuc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xveskfny.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163abdeulbv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163timjfdhv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xyrjphvj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dhujphyq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kpldrxuj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163daprbsni.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gvrwuojm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163mejeptcb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163wljdwxmz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hibleaae.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163agyiuati.html


<!-- 参考信息 -->