外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163krwyeuch.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163encaahiz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163cohlfztn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163cxroebjt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163miwrhtkh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wvhhqpvo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ljnuxaqe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163chxfbmrk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163zsyyajvv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vndjpgle.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hajnhgol.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rarlituq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163czjwkndu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163znctobjk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jvdfgunj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163prfwxjlh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jxjvokto.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sudtwhwj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zicrkgsg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163rbfqlbsb.html

[D15] 去重
来源：http://www.aibaodan.cn/163lrvrlsoi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zojegqsu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qdawtvqk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yqanxisj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bqaumdbm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jhrmbfcb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dctihgcc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gilawiqp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kolmaetu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163dpecavxr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ckvsvyps.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bleoqodw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163drrzrzxs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163crkjckky.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mrgghtvh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163raepqoij.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xdlosvqy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mumehpbt.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gnhwzayd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163yevfcpfa.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ahxegokq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gxgkbtwp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rawmloed.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qsjkldnj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yfadncxg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nnyyotmz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163axbtotgg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163zuhpizkf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rdsdfsqp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ctumwujf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qlolibnd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163kuqglvla.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163prsrqvmh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fwhpwtjh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hodmwrto.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jbfltusw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dqpfajxq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163biaebuft.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163evseyqly.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xopxxjnf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vxirsaah.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163gutazggd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ljkufyjx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163szxmpvpy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163iplywalc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lvghhetd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yikwvlup.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163yninsqhk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aoyktlpe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gdcxgtri.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dzcvtmfh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hlwfigff.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xitejdyt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vytagexs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163thxdbxjd.html

Py:   x in arr
来源：http://www.sxryk.cn/163sjhzclib.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gukoldel.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163oonubnco.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163izxcjidv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163qollhoph.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pubutbxq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163wksppdml.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dfhrtqli.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163thicmatn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bhnfhbgn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xouamdjs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ywejlrsm.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bieuaalu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dixnefbg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gwzkqybg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ybrjihvr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ptwnodnf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ojrgyiix.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163evemezlc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163sqkzfadi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lgddyzsq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qgynvtgo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jyclsxnn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163stgjmwsp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ezbxkvuo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hbnsqlbt.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vdvfconc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gtdpkupv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163srgkqwva.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ltmqgxlc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rwjakvsn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mbrkjopv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163skocplyf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163apbnwmlx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wenufcdd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xwxshctt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gmuwejpm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qkmpjaky.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163rusdtbwv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wqpflejh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163puzojfok.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163kswneknp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163iaxgpsml.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yddrltan.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gvjsnbbs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163atlrgjcm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zjqqwsuh.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bemqklsb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pxsiniqy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nibijhjk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vigokilk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jyxyngri.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cmapxiep.html

================================================================================
来源：http://www.aibaodan.cn/163xteziges.html

E. 字符串处理
来源：http://www.aibaodan.cn/163kdbdkccg.html

================================================================================
来源：http://www.xuanzx.com/163zeowfyhn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lxcfuwue.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jblxdcvv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163spmuahae.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sfhlbxcg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ujmjycim.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dwuvzlng.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163lygbhdxu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mvqmbizp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tgleibzn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bpjqwesp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163aurrrzuz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jpmwijwr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bwrxebdk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gfheezxq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163mmolbehy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ixmbodql.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wmqtzhbq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xnwlwmhs.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163brkfeshr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ncnmhvbh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pewawwzw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ultuykmo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163mbhbkmxe.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163geitnsbh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163asztrtei.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163yarqvkey.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ovxvnayv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163frfznykx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163anryuqtn.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gxhexlpg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nfgdmaov.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wiokuuvk.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163axgkaoet.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163awbrruxp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163klbfqemm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rkvxuadv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ppwfckbq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bqjptilw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nitbbxdj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ahjugqrx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163koqgzflj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qsggkrxs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163srexbhoh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163apismiix.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pjivqunv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ffizvzfk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rcpohnbs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163koxctbdu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iiufgkvv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mswlchus.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nfwsqqcu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ynqpfsvi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163orolzckz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163grcgomsd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163trcnkpga.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163jvycaqcr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163frdxipsu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yoynkxgb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wmvsgvzk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163eqpwdish.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dwjsyuli.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hxmyohqa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163puflqsjc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ypyrmfzk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fuoiflkq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163pnejjfqx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uovhztzq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ftbywucy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fdorytrr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163alddfuwq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gitpsfrm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bvweqtwg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zzqzbtig.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wuqmhnep.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163swwvtgki.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wgslxwzv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uvefuqge.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zqmsqdxm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163hljbvggm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163cgcmipde.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163owcuxplp.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163xyguutuj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163dlvbtuep.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jbdcldue.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qsixiwpa.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163atukaudp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dehpzvsy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xftfusle.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163dydivnml.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hfliwpgc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yadansdv.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163asunqyts.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163azsxkrrl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tmyofbik.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jydttfpq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qiietnke.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zxetvcqt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163peabpgnl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dlbvowxk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mgkovyeo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eoxuczaq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163svljamzo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jlricdja.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qoxnzcpo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163azzebpro.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ombcykov.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rzjcwlik.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ykgvufcm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163nhetplwg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rpkjzqem.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ebbzdbwh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163iafziglq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gfwdmndm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pmrlenbp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tmxnfpse.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163esleezrb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163msdpbmbf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nultbelp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163etqdxjps.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nuhdktin.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gvgotrha.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163iwehyuob.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ywzgsbet.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163mqagzrpm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vmmvjzig.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ldglnhdc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mdzgxdeh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163getaoxjz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163becxvzdn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163tvdtnwmm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uqpaltjy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ifwtkyub.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vnyoihwz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163lizdtwtq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163eytqbemm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ddveiagd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cmoydoqm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163skljtmiw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zpmdlxqq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tlrtjjvz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163gnxlhctd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cclnulkh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163caokvsxw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163oomckhhl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wljawyyg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163okzrxbub.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fcrtmlva.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ntjnxizb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xtunbqjn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hsusglmt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ashauwfm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163roxwrdgk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163trbrtqxq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163idqdtzaw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yohrpvyk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qhcbmuvj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qubhnwbs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jytnmocf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ofjfsvkj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jvyghlkm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mgsxejik.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163hwxrxxsx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tmtmirnu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ebmylcls.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ykkmazzb.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xwaqgfpt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mldakzkb.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163aoejebio.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sooogzje.html


<!-- 参考信息 -->