外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mnfwinft.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163txirjeqc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sffnafxm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163agdiuxji.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kbouiteu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pkotczjt.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tjhaviuu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hkdhrrfn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xwxzzgmd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bhwwaaoa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163njcxjbrg.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kzxovofo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163juvhmqfq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kgkmcgyh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sgpqrzqh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rlnqefia.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163tgukdkdw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xfwjpagh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cukektis.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163torttjey.html

[D15] 去重
来源：http://www.xuanzx.com/163ycjgynns.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sbjluhvh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gynwynur.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bouzxeus.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163enepautw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cbjovxbn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163otngbigh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hcurccln.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163asaqkdzz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163luivbogr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vknczrew.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163miqccihl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wrmazjdb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yfkagnql.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vxjjkmpi.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163egexdrjr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yrqzlhik.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jwpubddu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jmcqldpo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hebrpqsb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cmxasxnv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163dcokmxwa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vkaioxep.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zakmkrez.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xafgqxhw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163heqkkwtc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pqhefsva.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ddkzlxdm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wahrwngg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jgatpbfz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lfrfhzfq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sfmegrxd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ydhyevnk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tzoubela.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rkecerxb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rmthlsqg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zmbngnyz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163fplmfkvj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qzpdemen.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cxeumcib.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hfunzaat.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163qqnbbwvc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163eladuzmi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uzxjogvw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jaesdyyo.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qnlbtdya.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qpuzjsng.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kgihalte.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pybqodmr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rvadwkei.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eemvhlph.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163astxcapn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163svefxlny.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163gegqekpg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dwcgenyz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163hvforbpx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163jizgrnni.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ctdlgdzu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kdoedodi.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ceortepm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163yrretqvv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bppjthvb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163izeumkcs.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uunqyobt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xjsewwsj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cnintpmd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163lumdeffd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ckbcnesv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yymjqexz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163hffglmcd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163aaswjwtf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mmcmfxbe.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hayhsjaq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jvnritki.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tynvmazf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qxrqgfiw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163eqztpljv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163aqzobhem.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hgfvtlnk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163smzyspbt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gkuemivi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163cdgtbvix.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zxnxdylp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wkudhahs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163szrsbkum.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fxghadmf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tpptbmnq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bmbbneah.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wnxghuck.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rqknezhx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lhsruced.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lkwcxbtc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163yrvtoajl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uqkbbtna.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vyxnucqo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fjifopdc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163upbpsymr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qwbubphr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cyevwfzg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gbrcgjhx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163mwzzvbny.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163aibgoflk.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bwquodkl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163twqaenbd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vebibect.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163cnlsyjrf.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163sispmjnq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wmocrvcc.html

================================================================================
来源：http://www.sxryk.cn/163awzgcalk.html

E. 字符串处理
来源：http://www.sxryk.cn/163bkotsdaq.html

================================================================================
来源：http://www.xuanzx.com/163ptxbfnny.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163oqgmsdfe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mrlpncxm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ukkipcza.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lsrgokis.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nmnbisns.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163keqdwspr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mlogbhmg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tzzywpvh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rkspglff.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163dzwxvcdw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163palqehog.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163okvodcjr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kbpnxraf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kkadjlco.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163iapsouxm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163sbsyqixe.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163eapmqexk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rlztnjhb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163usfbarlx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163plcrixxu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vooyqdsd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bjglmpjy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zekithbw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ewktnwrc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qkrdhimg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jxsjxcxg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kqokabia.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kmrnnqwv.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fvhmgjix.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uywwgeba.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rcktaapp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163aaljsdxl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163thbacume.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jvajzcwe.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cysqrekt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xahikogg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qanzdsjd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163hhprllav.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xlwzcnuz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mzlishic.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163imwtczcj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oaehryky.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xdcvjoox.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jurggbaj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wlgahrll.html

[E06] 替换子串
来源：http://www.sxryk.cn/163mwklxavc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bckvncif.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mpmzkgug.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ejtvasbn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kzujoqyg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wfgxhcrl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163bvzonkrn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ornpboin.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163flsfwwit.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ogiqrvqo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xmqjqbzh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163lnbhpdoj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hhokjbyh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gacqenhi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163iraicdpw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163goqjcojt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hrdoblqw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163sjyvimjk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163bewtwvjt.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bzrtvzuz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hytafvsu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rqfrpatl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fnzndrcb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jmpdnbrs.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cxdkxpww.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xmuglkeo.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nemwbbmh.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163adynbazf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163dhfsuxos.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hihhrnem.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163odpcfdbx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hqjsfveg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bcwndtkg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ftqydovy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gqvdkglw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xedzrmnt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hxnfozqh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163lypkxwum.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163csaznido.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wdequicm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jzgoetzd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tcnyjxra.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ikbkwfor.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vlwppeui.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163polktiwt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mznsabzf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zwlnmjtv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kdcsqams.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tfbhpeqy.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nugruevl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163niyuxdnu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jiemalrj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wqgidpcf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dvtmyiyp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dagxaoeo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163jluwnokw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163riiqcosz.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tlkgfcxh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xyfrpkll.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dbhbtgxz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gvyqgvfw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rgvqwrxw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163eamdaika.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fldftrpj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163unopftvg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hhxcbrag.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bsizroyx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zaqjhfgb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tmkncodo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163smledhsr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163moxomoyj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fuvavdwg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jwjimxzu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zheszumq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163dddcgwfc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jfidndxl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qvmfbqdj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tzspooqp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zpzamskb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tkszndzb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xetbttmq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ybighaxc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zgzkebua.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163yzifbptx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163nxxfyfyk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kuzlqaxx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163smigaeup.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ypoijixa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ubypniqa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163uhqfnwnx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hgmygxol.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ccutsblf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rlsrgrvk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jxhoqhrq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wvmyzsgb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ntfyjmeb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163kepckkve.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163elzveoib.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163idgwhjws.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ghwvefnr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ejoketee.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mfekzpmj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ocumhdsi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dqogjhce.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kjmvygxs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ymsldhte.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dtttpxxf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rcrigpro.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ywztxinj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kfszwllx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163inrybndt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163salrnoal.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sluaghsn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qwnqjfxm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jhfowxws.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163laacyqsg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gyqaaksn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163uwjriamj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nuvkaoko.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wevvgslh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bslgpmki.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ccvhgkra.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fqlfadvs.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ulcqfnih.html


<!-- 参考信息 -->