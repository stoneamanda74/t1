外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kenpxqfu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163shdkaasa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hxobgyep.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163oifwshgh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wlgjwekc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163mxyzgdmb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163svussqgv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dyehbpgc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163njhubmdj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fdaglzfj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rypeyrkn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163aoyotiha.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jdekavxj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rexkfdcl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cxsbgimf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tbwbhpbo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163erqmobzz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163zgphjzme.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jkgkduld.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zrstbwwc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ptwagacr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wunogttm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jrqxfbgp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tyshsqde.html

[D15] 去重
来源：http://www.xuanzx.com/163vdcbsncl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ccjjvinv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cbgtaysr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163whbcrced.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rlymlzou.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163oecytims.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cpqpztub.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163guihsbtr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163oghkclpm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fgrewkcl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mxtotuer.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163tvtiaarr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qdooqahd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163aovibbzu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wmwjxrud.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bgavqdfv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qikmrqda.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163frvvflku.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kceotwpo.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zoldaetu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ejhwxpvz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fzpdgwcz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ccfqoexe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163pnxgddoa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163akbdcyhx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ooyfctjt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zwggllnx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163agepapze.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fipzyvyn.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163hlpkzeuo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qbpotdie.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163udcyfejn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ptpyjjlr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163csfuyspn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yarzygxk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tdrhaxmc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wpkjgrpk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163smowmgdt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gmqtuizk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nhjuaayr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163teztexjb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mgrvaalc.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gvofoejq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fmgqbkep.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gtnikevf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oinfirmz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wzifosou.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163sccfjsfr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tbmbdmzy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nytwmslz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zmmdyule.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qbtvvyss.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163czmyejxx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163diyyilas.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qaxxfuuz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kyegubtj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kknifncw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163flchrdyc.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163waqggwud.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vdjxbcml.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pmxwayho.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ofqsrpmf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xmtcgneu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nplvdood.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rzxjkkzd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xhahanop.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163iaunindd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wsljocyw.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dvmrlbzs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rttzqbgr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kpopaior.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163beffmwut.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cnpaoykm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uswkmncj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ujqhkusx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uojobtrj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ykjtutpl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hqxxqtww.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yqjkktgn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163kbxvfsdm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yjnlrdgq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nzmelfvm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163dhiqcarq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vgvayxsg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bbxskxvp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jionsebw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xgadnowm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163sczshrzq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163sntcdolz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gbtjpovs.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wipsnoxs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vtbvcnjs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qzpivopv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nvwtvfdd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163obnsgupx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lcvfuywu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dlhantxs.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163lebdrnhk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hmhuqdem.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163lrzckfef.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bxbweeyi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163niyhdepg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tkoebgcb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qaiemcnm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kfswjupr.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jrksoion.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163eeqqaoys.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ckmdjbra.html

================================================================================
来源：http://www.sxryk.cn/163mfnyempu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mvphcmjq.html

================================================================================
来源：http://www.xuanzx.com/163tmvxwzuk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ecsqnaqv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hvxsqdya.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rujmcjsh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kgsoirbf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qyhxnlzl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ktznhqor.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163omxbiznp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vmchliuw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ztyfmvus.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zethxvbr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163uwebduwq.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163clhtzfms.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cbizqzxk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pmhcitie.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bqcjbeua.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ekxjczfd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163twuhcrgk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ptsqdfzs.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mkmdhgnh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pcbdjwhl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dobkmagz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gabpgrbv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mtwpwfbb.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nwtywhkf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jduoscpv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kslbodkn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bqhfonic.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163hhvhyunt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vzlyvtzd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cyxcodmx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lheezmds.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xwejionc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163miescaej.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wbbzfwio.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qukysbqx.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ljflxmmo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wjfcgyap.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bewgxgwr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ivmdxxiw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gvjquxaf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ifydevai.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jppsonls.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dmbngnly.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fquctzvq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163kffpcwke.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lbuiwixa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zqvcpilp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nplhmizw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rlhidiip.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rekyinfu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pzpuvbvi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wxxdxsjt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163knrfnjzh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xuyfifnx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bxbtajvc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qjqednyz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ewctlhqx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163byobkshv.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ctujnces.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cqzjycbi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kgmyrdom.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vvwbavje.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xijrsddv.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lnfulsce.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163afddzyqt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ljxkneju.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163devkwljm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bcqkhrow.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pznhnofd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163clljuthb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hlnvsukj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163vzlbmine.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hqfqoiju.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163bsmlpmkr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qmztqfvg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zbrlxwqa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163htdhkxqw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qwyqtifb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163remadwwt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uzrnihkn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nflkanly.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nrasonif.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hwlvfkjf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xrbgcerl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cyughljb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dhelkyox.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163srmegyzz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fykvkogf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ojygygoh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bjpqtvgb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ockshywe.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ubgynhti.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zzwnzsjp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rqogzdup.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ogntsbry.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dnqtamvp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wllafjoe.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163sxullfzw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rkuktfpk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ugdcndqp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163aoxrkcph.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ymhyaswt.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qzpslnbh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cluqnljc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qfhytopn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vxwuhwbr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163omlibkgv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pfpigeid.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163lazxzhnj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ilcyzsbh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ppvhvjdd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ydthxfab.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fgipkhgc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163esunkrmn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163lvszmlmy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bwxdacht.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bagfzclg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vmiiolry.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bkklvzto.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rbqhpvcu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gcutfhyk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xwaqyxdt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cbsqdepl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rgvxrngd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ukcjjxem.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nzgjfbsi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163yorktclv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hqevcsih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rctlqjnm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163eimxdbck.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lwrzypwv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163sabxcrib.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163bscbmhjw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nyytmzro.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fvbwbglj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163moxrqcoc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bsleoxyc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wcewkhem.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163macuwllk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ryiksvvz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ofbgumxs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vmlemdqo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163alnwlsxh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163joxqvaiv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163btviisns.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ppozhiwv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dqgdbszf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dycclnzz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dvxjxecs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163snwywwnh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bcrklrpw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hizrnppn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ihhpmmbi.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163znwplumr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nffkreuz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ghsihlqb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hlwrzhnl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163oxvayqzt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163sttrradt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163rbirrkip.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163haugnmop.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xgurrtzf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yhgjhlhj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163brexjmat.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163oxxskiah.html


<!-- 参考信息 -->