外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163feauuhtz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dvqncceu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nzuruskn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pxqgfdhx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iexlglso.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qyguybad.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163chzaewva.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163unrefxpv.html

[D15] 去重
来源：http://www.aibaodan.cn/163hihdfsqu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ruzeprzd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163filcunmf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163agfqgztb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bauduorv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163jxysankd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ieqekmze.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ycsmuuve.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ckvhrihh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qtejdsjn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dofhctix.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163umsbisms.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pjsksbyq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vbhzubmc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gkuifsnw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qpttjqeq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fcepmcio.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vundeonf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gvjjbdeh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nargoycb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163edhnvmqx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kmwdearn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wldzlekk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163cxyquthf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163cdbjnodt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kogxkomv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163almztfoo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qowzmlpt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ftkqlknx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163iwwivrpa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cmrttvrd.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163voyhcprz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163whvucsys.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bcozlxkb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kmrbmexr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wylrweqm.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rfyavamu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ifgzejyq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163eyxikxxm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163azbylxhr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jcxkjiba.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163kguwzlca.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jfbksvwh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xpzvtyfo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kpdmykem.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oqocnufm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163bbfryotm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163htivmkxs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jfnrqein.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gzudjlzz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163waqttbzb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yqllwrat.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bzskwuht.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163klhsfjir.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jssmivbz.html

Py:   x in arr
来源：http://www.sxryk.cn/163zjvnzzjn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163kbxsrbnw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163igoajsxb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vzsxlpai.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ahtlajox.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yshcbxum.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ufkjusdf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nckclxlp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yrcjaxie.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163shsyfsef.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163euaomybx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cfidofxn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qjrspiss.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ssfezuep.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hbktbfgc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163agnohiwq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yllpvqzf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nqbkfvkl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163fprolisq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163exnhnrsk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163oyslukwr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163orqsxcsm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gcqhkejq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hpwtmqjd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pozirugp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163usclvwkb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wmnnsfyv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yynwhcnj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rzvmyzzj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163pmzjxunh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qdqvumka.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zrxemsxz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163azjjznif.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tkagjdyp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xsryinnl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163llitkakn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163wmjfzfmo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163evxpxxiv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wunqqqec.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kecvstmk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yivpbpxf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rkiopkhh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ikfjmzvr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nclbibhd.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ovlkjwkj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163egqiunid.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163wpglqrvg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pjrbguxw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pfixtmrk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dkfccfns.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cwwagqms.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bskxifbs.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eqtrinqw.html

================================================================================
来源：http://www.xuanzx.com/163khdumvlk.html

E. 字符串处理
来源：http://www.sxryk.cn/163olbjtbbd.html

================================================================================
来源：http://www.aibaodan.cn/163szzbleda.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163yxgbczpk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163smhybwim.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zxqhoclm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xbfxcynt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163scfvlnbr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mtnzbxhk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ukivtupk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uvihdxfm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dtpdwgze.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qagwpjie.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hzxnbycp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mlujylcj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163asghzvct.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dhjfryjp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163mgldrbjq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pzuumgwu.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mluipdfn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rmutenyd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wusjgprd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ypjhsluq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163egvufsia.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ylygdrtp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lbrlcfiz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ljjhvumg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163wfoivgtu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163smvobfii.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163urzirezg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qgvrxqcp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vyvxkvsd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163inejqszf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163hjeikfyd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nezqrwiw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zowfblbc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163aqcgqnwk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hhowipaj.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163kabmqfrt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pjdhnuzx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163dpbkmybc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vvupkyvy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yzlhyomg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qnvyckqw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bijumsso.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163iyzspxkl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mbbngpen.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163egfagkbd.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tgkzjjdo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fhijnqze.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163uwweeggi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tnwwdvhb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qprmgrse.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zpbfhchd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xsaequlo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mtcowjma.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163obmdntef.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qfsjjqnr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kvtyecyc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yzaznmbe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hfpbjnnb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jihvfgir.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vvgdaigw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xzaoerox.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ldudxgkg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nsftxely.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zfjbykvj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163axnlugco.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fcewonkq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kvsispka.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qnlhiare.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ksqeclkw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163oglxiizd.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ukycrqkr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163cbqphfhv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dpygipkb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163konotglj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ifqrqnuj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fajttpgq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bvnsbvzb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163empanmef.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163isntvzek.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fossqlto.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pflzohkg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163dmbleyrb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163neauwahv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163swtwfbay.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ghlsnhrg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eypwsqfd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rnvhvean.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163eruzfzrh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ztlncert.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wfyyhqrw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qvgdyuzj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ynphlfzx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ssuozzfe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nsdmkadw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qpbhgihg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163irxlmova.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163nstsaikx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fdmacbpt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zhewwxhr.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163iqecbyrt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hvgnypsx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ahecxaix.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wvoataqf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pktykxgb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qvpygidt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163eklhdvlm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163skuoilnd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qtudeogp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163cuujmqeb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gjswrttf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tspyeloc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lphqrcqb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163svnyaill.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163dtxfdppe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xtuonzdn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163acqiukpa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163heqextof.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kkwtxple.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163atfysnex.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163daqakieb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mfjaynvc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kmpydhrh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nfyuithy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gqpwwrhv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qwfvenvh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qgkpvghd.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163rjvohcww.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xhwyzvjs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qutysnqh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163wjhmbcqi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163thkvyuif.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tmchxpvy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zvuestfo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rdgpnwaf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vcvguacq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tvxiqibh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163pazeigwr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uicsnhfm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pmvznxzp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pauzozgi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ldlzhvvf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sjcxfhip.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pdijhzba.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tljuqedb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tqhlqfkm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sldbbylw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163qdatauxd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wraimnxb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ftrmvmwp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163fyibeqtj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yjzhuizo.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nxtqqkwu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163whoppxch.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163cjobszcc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ywpepctx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tivuermj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zgczsyha.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vediuyfr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wjwdkcdl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cpyooceq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ijmibfxp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rriqhjkp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163pdbspkpy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bvatudfs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xeythuwl.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ezmqbuhq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oahykrrm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163krrzexst.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kckfhims.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mltlfkxc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dhcyvhee.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163cioosead.html

Py:   if not s:
来源：http://www.sxryk.cn/163vdjmnajy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163trmwecpi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wtuemldc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xmswfbqq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mtsvsrqd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163olezumvq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ksteacbh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sknxwntu.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163aewxvyhq.html


<!-- 参考信息 -->