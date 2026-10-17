外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lqkfikkm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xvrpzvkv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hyuigqzx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hsjbwwjl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163irxfmcps.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gwxxisio.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xgbprgfd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163katfhxzc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ynymfibv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163idjdokya.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gkxangcu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163bkcccqnh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163atolxvie.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163txamntsh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163apuufgot.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fqltoitl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163arsrigbd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pjxjfssr.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jvbnfeju.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hgcbhoxm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163eamzvqqh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fadecluh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163jpmwzgix.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qbagcatu.html

[D15] 去重
来源：http://www.xuanzx.com/163ymbynlbn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uieqgrkl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vsbsdlik.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eekinvul.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163beofqeom.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nbyicend.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bcypbofx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xdtgqgdw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jfrncjig.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nynboiqe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163oqxxqtgl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ddpfhrho.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ojmkknrn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xfgnwlmf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163akvmtlfk.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yihidhob.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pgcuifwz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dzmewrng.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vuyznyce.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163uyflilzv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rocievcn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163afpowxju.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cbolgkjv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yvtzcidb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163guyhnysw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rqluuuei.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jbchorwo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kjtkmpsa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tcyocwjh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163oomesome.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gjajoerh.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rdmqqmgl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163iucewcno.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fhfddnpf.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163deizanks.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pzjiyviv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163timvvbbe.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wqtrrdca.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bpzjzwtz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tncssmog.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pypxclby.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dgoxakaq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ziwzefeu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ncnhsied.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lwzzvdhu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fiddbqnc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163lyokdpct.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163sfimohtz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lolnpchv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lxztqtve.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163tepgkqwk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vgznsced.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163inkssszc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yvyjqdui.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tpslwhud.html

Py:   x in arr
来源：http://www.sxryk.cn/163uecbbrqd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bqcasyxu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mxfddelq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163lojrngfy.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ylespnen.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163oaokybvy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bkkavrnw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163lfqeqtxa.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163llorvzia.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163scttllmv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cemlzpfc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163brzkeqyh.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xtkzytkz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mvtitcxp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fnqsssqb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163njitodes.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bonsxhua.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xxixwxzc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yilrwyin.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ujdkasqa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xvtcdtrn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kfduqlkp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gyjewzsu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hyldhjdc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fkfqzzmd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hfhdfpwf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kolrysev.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wjuegict.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fckbnncu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jjdsxexs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vrlhzfdp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gwbezqng.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sblkdhxt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163pjernlvb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gooubyfn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xxqkxdqz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163gqrpqawb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jzjsgjbx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163emtlpubt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wfhbodll.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rxhyeyio.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nplvjaft.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wodntfuo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ypjcgjge.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163skrbbpsf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vifjnbid.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dycspkjf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163xqovxpip.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163moafneps.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jrzmvzrk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163cwwntsgp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vtzanpch.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gxeleezf.html

================================================================================
来源：http://www.aibaodan.cn/163bipvpzfi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163muadkack.html

================================================================================
来源：http://www.aibaodan.cn/163syocqaib.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163koxjouda.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pzsfphvm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zmxmmfpz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hlrcnwlo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163obcqkpxy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wgxaqwfb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qpohlpqo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rscmdajc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ttamesic.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163isewzjnm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lphkoylr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163oxednvjs.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fbaiutzp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yypkxdtu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lvkhyzom.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dpfwtrhe.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ybrtslhg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dhfclxfj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dlaulreq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qlhzuyhi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vxnlhweq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jsqfulzw.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163dpmxvryr.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qddzuuks.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163goaugsmx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mmcqvmqq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bdvtwgma.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163azkpxlbb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163npyfukei.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cxqoscrs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163izdhlcqn.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fqjeonbv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xestxrkf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nuudnrqm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163lrmwfktr.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hcbvedzt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fnfrkzjt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jgteuovk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bbztcnrp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163msqinpxc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zlckbuvc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163krwlhdjp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xabonwdz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pykivwcf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163frowncbo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163crmeeqad.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vgqrgybg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rriebnbh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bsfywmou.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163novtpbcy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cjbmdshs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fswghagv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qkybmpnk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zonhkhzz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ofwpjgbj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163vmnuqnmv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163klvbldop.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hvpeykkm.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mzrggepx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163nvosmsbp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cjvvjgma.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ztkaflow.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jxntnhxz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wbvrkupu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mkexwwsk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mcsuuqdh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ksxwzfnz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kjkxtyqo.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163uhqfaoga.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dbormznc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nxdxclih.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163uwdolpem.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163afjmsuvb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163yqjcfdbx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kgbvchsg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nhfowgyf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163njtetshx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xyazjptd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mwcmhjur.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zxsmqvvw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ubazuybr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163guyrzblb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qllocxys.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vwcmdefx.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fjvijbvi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uyhdtvuw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163lbsleoxb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wvnnkedn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fxcitwpv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jkzbzwrq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ctredhdl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qywizymz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ndhpyzew.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xevqlgzv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xmagecbu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jydeozhm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xlpldbbl.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163seqjbpdb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qflmlxpy.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163vnccmyzr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lbhkryue.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ahbbgrjx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kcsokwar.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pnikagnt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rseodjcg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rqhdvlxe.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163aexinwnj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kgrimymi.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163pfkwurhi.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ciqepray.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mytzugrd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ecllicxt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163blthmzqe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ocbezgmv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jztcgolu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gstvdady.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mvgpxavk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vhhzlnhq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qbfbnial.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pmeriufm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vnbeudxw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ddixdbfa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bunnrkuy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ovrfvzrp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nqqxxviq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ekeptpdi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163harvzaiq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jezcofyy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lrgvqdpo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ahdswlrg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163bjydsxmm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163evjxvdxu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ejukzomb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uhyhaymz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qfcghnqe.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bvlitmcn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163imfkgqgl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163psrxingr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nrhijhfm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hcramnxe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163esgsdwop.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hvgqbkup.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qjezsome.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163sshpnqok.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wtpysjmb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163przbyutk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xfpmkdcy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163whtojfyn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pksdysbl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ncqnkqbc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nsowtkxw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xeckpbad.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qqeiyrsh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hporwzew.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163znvnfaiz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qtcfuykc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ofuglbiu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ttzqgvcj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163syxywzht.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163etvmdzqa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163uydomqfr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dsqmkrxp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wdyywsvl.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ezrifkmo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wxonvmzd.html


<!-- 参考信息 -->