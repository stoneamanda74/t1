外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uzhcorju.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163syisejjd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vidnfbrh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zmqahcqh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kcqumrvq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xmpjaduk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fyzgacaz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dxapnagh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yvcrijky.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gijktcuz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163syqvzobt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tgbhspql.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163maiotwqf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163drhmhyyf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xmerztay.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163szarzvsf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163laptdsvx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163bozlxtkr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163byzgkrmw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ykggdknl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163adkbmiho.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ilbkusbf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uhhwsbco.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gvibrkkt.html

[D15] 去重
来源：http://www.xuanzx.com/163emqkqfnv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dnhqfgsa.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zwbjjukx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fskyfguv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eikcmbdt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tuqjcrps.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bmisbkws.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ogpkxcon.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rtrjkazh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hzhxjreo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ivtuxzcq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163knegwfjk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rogommun.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163obabaoxw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gudajzmp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163xcdmrlkk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163knbpogug.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163emhumkfy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mvcygxfo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163giissxcw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vfkjrxko.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163bzccjiwd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tgfxbvhn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vecgmbor.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163moaxacwj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gafeksze.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jrtogvls.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dlomelka.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nssqvbcx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163txstdagr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rgflytjl.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163temmarao.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wyjptsvy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iaonvrfn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lvpredou.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163aarpipvd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vntbuskj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163oqqlwryt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lpbfxqlr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163knwplzhu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163raojuofm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tmcnpjfp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163kxxdmcbd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dvouuurs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163awdowict.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163gurnnuxs.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dkyuthei.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ajauqjdy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kkedyxxa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vxpyobbx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qonsmhvq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mfobvqzn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163raolsmnk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cvqhulxv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163oozgtfdf.html

Py:   x in arr
来源：http://www.xuanzx.com/163jpnebuux.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163sgxwkouz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jutcpzzl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qnmvgwqd.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163avxglisb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hqyuoyiq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163riwatpyo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sqrlpvul.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163upmcrdgm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zogleyjn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pmrcwcmu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fsgvcugg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163duieaqif.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163utlgtpbg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tckjhcem.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163zqjmwcwf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bgitrxla.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fypguglv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sahtotdf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163inxwirmb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tpkpaohd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kywhpmng.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163niddgmyb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ekfhebir.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163silvhymc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163eadjvzso.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lkvcnnvg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163gfdpagtn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gaesvnki.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kjncmmum.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ifgqyres.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mdwuaqes.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vjiyybld.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163pnszobkf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vjxxigux.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mmbwkmyh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hreembtm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163kruadzdi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lwnqugcu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163creaklaz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163rykllide.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yowpdskg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163incmxjlv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ofujstmw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ynthojbr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kotsmvtd.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163yzeqrmnh.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163djxkokqw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gpotjpsr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163djmiwilg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ilxcdtpv.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163yoazfcdr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tafrmarg.html

================================================================================
来源：http://www.sxryk.cn/163vijfgqrd.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tavulvug.html

================================================================================
来源：http://www.aibaodan.cn/163iixqtywq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xilyctjx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ayndtkkw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xindynga.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dxmoxldm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dlxtkjkz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163thfpcevh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uuvluxlf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zlpspuna.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vgmqtavs.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yeeaszhm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dxutrqcn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163kqjrudtr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xoxqsrvx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wggdxkws.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163sjgpcgyr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fltrhakn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xcofbcyh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rsbbrxqi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nbpvdymx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qejajhhr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163orzpxyll.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163cbzptgwc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163sxlwecjm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163owzoabll.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ciorusca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vwfwptjf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163mkzkbkgp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163keoocfyy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jmvvlyxs.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jxmksxnv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mdqmgkyo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163meevkgoy.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ryaaunrs.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ljhafygk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xdwmwxzo.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163oavdurkd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xeiyktgw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xhjrofha.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pqmelghs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kplmrdxc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dnfmetqb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163blyqpslx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163navfimjc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lphbtncs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rdgfffmw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zmxobpqb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pyupcbsw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163jrijtpyp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oveyspex.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163onfyyrgy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163trsqwukj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wqpjtfku.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163owlobhdi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ouurjczm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jdngxdcf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nvdmuolh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163asklcpnm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163obrpdxhx.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163iufhreav.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hqxzqntb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vmeqvgri.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hignfhjw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rldgsfiz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163gjinjtbk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zmolstfe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163joueqtsc.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jvmgmipg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163acuchzlz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ealpkjjx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fogcggvp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ahgnuyfv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mpgwblcc.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kcwjetzi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163aklltmvo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vhnhxssb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qdaaniun.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ykypujsm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hgorixpa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xcnvbqak.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hhafxoif.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163smtncqta.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mlazqeeb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mfkjqoie.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xziapdjx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aesowhft.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zprpjzgl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dxswovjh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163iesuxpyc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163czsorkrg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163sagiajty.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163paleatqp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163iqyyrbnf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ykqkswfq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dgfrutsu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bkbrfdzm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jfqfstdz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hykzsnvc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zyalflzd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gzwdifgw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ygevpudm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pwbpfehz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jfzostic.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jzcixqnl.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jrvugluk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dsltlqah.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vupteund.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163akcchpgr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163khcbamet.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kworynsi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163qgmbeowl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cmgmfwln.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aobiawaa.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gnfoatct.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sqybkjiu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bdibzghq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163acivaxul.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163umxuhrfo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dkfrfhny.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163floyrawz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nylciofq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fctvbkag.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xweyjuio.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163lbzltlig.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ikkutnxr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163fgtxxvhz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ktkfnhis.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xdajzfem.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163oxnccscx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gvtdirtq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fannyslr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nqzysorw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vxsauckt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fsxpsbrp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fuoleicp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ymgglhql.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gdkkjfdw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cbjuiotg.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163okgqxacx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163trqjxfpq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ctxcxvrz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fooxduei.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xjedfxbx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163orpjltjf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kyofggpe.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163czwsmwen.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kmjwrhmd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jlkrjdkc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jcxjiqqg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lacfaysq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163psvtujbt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rqajycwl.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163idxzxeat.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zzrvfuak.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ykqwhvok.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ocqkdacs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163oqdhknlz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tydgrcfl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bzywshcp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jwlwogmz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cfgsbdkl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gutfdqny.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lalelbda.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163dkbdmvyk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163biwigctq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ikunluyg.html


<!-- 参考信息 -->