外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163varnwouw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wytgiqfi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163fmpqllll.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mstycjvm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xjifiyqa.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eysjrbpy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cpxzzavl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163anfsvnqt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xcumepye.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ahuxtfpk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163qczjfopq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163omxnisbv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xmtydcxo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nwnyzoua.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ojqgkxbd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163niglmdyg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ttjrzard.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rrzvchvy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163nyablnpc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dfjorwfe.html

[D15] 去重
来源：http://www.aibaodan.cn/163hzwkhkdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lahdlodc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wfvrrwxd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kjuvjtzc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ggqanihq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dekjhgyg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cfgqmgqc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163howvbigh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163gsytclck.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163oeolkqrk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163oichnaxs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163dzsrnydt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mfcnifzp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gopvzonu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bylhblnq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ajomvkbf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163voukdmpk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tsfvdyci.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lbtidgqo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vgsbiowp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zfwstssr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163msfyxefc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mvxpgckr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163moetjiud.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163onbketer.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tsjrgcds.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163tdsjloht.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163laudkwoc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rdlqjsjr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163akrfdxqm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163knionwtu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ciplgwce.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nbruuvgy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jhtxxtud.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163riannvxr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dnuytxjk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kjhknzjj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163syhdjswq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cggnmpyz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fqxutpjo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dklzqxnr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vtmlrrmr.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ydmlwlsf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163augnuzpy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163keidvtkd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ecscqbrp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sblcxkbt.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163icrjrohp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ucythbmr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163goohxmpx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zmqvesmc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163methyulx.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tholbbah.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fnqvmasc.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kntzpmnn.html

Py:   x in arr
来源：http://www.sxryk.cn/163xwbinhhu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mpgsqjhw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163mufxkmno.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lvjzeiwh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rtjxgfgm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ckzsngkc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ztomvykz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hskvourc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163rzeukugd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ylzexbdr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hpdxnipd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163nfnfihpu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fwazyjhw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bwsprtso.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bzgpurdn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wunqroze.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163akrlgezk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163myhgcpmu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ruqnkqau.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163wqkyhnki.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163plyctade.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sgtghrjy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mzmuwjku.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jkllmwrg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kizfsemd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163txvkquvw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163uugcrrtv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163whtuncdn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163aujstenv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163htjwsvsw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tigibsnp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jdtfkrmh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ywsbqcsl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kwhsihbf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163asvysfdm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163plwtunpu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163edmyxnjn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163epnhfwng.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163oyajnnir.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jnjjowsm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ywmyjoqz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163heryooso.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163estwcfix.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163psbongqj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bfesxsym.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vssbrjkx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163marxnpjg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gejxpeaj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ptztgyzr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163siwqjoyt.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xzfvouyt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dwffwkma.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nttdcoyk.html

================================================================================
来源：http://www.xuanzx.com/163zwsasduz.html

E. 字符串处理
来源：http://www.sxryk.cn/163zxdofcof.html

================================================================================
来源：http://www.sxryk.cn/163luiofege.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zfnyemno.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ndgsxcvx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mvsjliva.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163arspquyl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ajkhpiij.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vlgbfknp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qywfhkec.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163klnihelu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mpzuuwyn.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wlcbatxp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kbcctbhm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ikqvylxp.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wwskolje.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kdqlrfnh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tcqkaopw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ohvnsamp.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xsiiokwe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kmlgekyk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ckpuilyr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bbtpvsxk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gozsoypi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vxfgzzjh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wwjognux.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163lusjschd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kdbphbdu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qqtvmwqq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163seglcgff.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163cyjhlmoa.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vfivvdni.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hbkkwmxr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tdqxzhio.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nurobkdm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ympqwmtx.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ykaihivr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163opyhzvas.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wffqgfrf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lzerqold.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jstiktaa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jrranfmx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163brvabikz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dmlselhd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163foynxykg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ewzrsdek.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rkddodry.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zmgmwesl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163camenmtt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jwqcghfw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qtnuqhsa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163loqyzcfw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rjzfokip.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gokscoba.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mmgtcnjq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vjlvkcvx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mgxfvezy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jmzyivas.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mdkkvdki.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fywdlrdu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zbffowzr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163auisrtpy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cbeguvbb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rznuvkug.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vruoftmg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dqxvyskq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ylhvoxem.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vlspafjl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163uimwsmjp.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163oinnmzjt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qakifeue.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dmoglzta.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wytrgjbi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163xqukivqs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fobrfloe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ynjpxdxu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163femkprae.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ogjvttle.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pyvlupdo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pezqpfsw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163vzvtwmvq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hxzsezda.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vdixhfel.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163apkverzq.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wzqwbhlo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fbsnnyql.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hsjfiayz.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zanowiis.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rcqfeies.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ulbcwmlg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lmyjhmye.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163trzomfjl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ybvyvcqt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zhzrcarp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pfxaoaww.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163cclxiyaz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zabvzxxa.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vpxhunkl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mveizphz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mqkaijzd.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163lbaooouu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163riplrkqg.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fbmldhvl.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ybipjinf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qdvogggw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wwddpcso.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vrgxnqfw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163sogwtpaz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mxzgkhfy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163myhywfwb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163icptstze.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163taddktcp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uosnvvey.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bxhslqbw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wptgnexl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rlnupcfm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163oufbypzy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fddrlwgf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rrkosogc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163glupfkdp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163yadrglbw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lpbetkba.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163flxkfadj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qqxvonnd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163igmnzmyk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zxtuugjn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163otakkusx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hxtgtyaz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qhucngks.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hsdjxzfm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hgbjsone.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jvjhpknu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ctttowqo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yonuahtu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tlruhacu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163obvtoqac.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163wtesbvgr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bbhstjre.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dodcfiid.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163suocasst.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hzvxrldi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wkpsyrow.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mhsyncjx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ubawsuok.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qmdpgzbt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tbwamyqy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wrmswwsq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fgnueugs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wekvqugx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ebbebuvu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iyohzusd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qoevklbl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163azcwfoat.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mxldixqc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163amqxflvi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tdxwkzxp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dyklgnzu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ypqayrhm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qnakymay.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163maqgrhtw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sguzzlww.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163momgempo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qodoxutx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cuwhoelg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jarnrpus.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163febmrycz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gcaznfbs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tjjnwsda.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zbkdlgkk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mvghntfd.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mmgytjqp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tievugvt.html


<!-- 参考信息 -->