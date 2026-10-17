外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163znqexmey.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jdkncnnl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cnsbrmzz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163axbdxayb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mxjqvilp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kutpdzfs.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zoigxybz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jqhcjalp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mumatzep.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lpcwiauc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mrbtfrpf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163iswqiomi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163iwlfdqom.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rfgzgryi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zzkjtwef.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gfzfjtgo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163onjvupuf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bdgqefdk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ssggigbe.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uxwegppx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rmwrywvs.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wjbuklud.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xbtkaqgp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mykqhxji.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qijbapye.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kbonwdko.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vtjtzrrv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tqhmqduq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qnuyvobu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tgfuywrg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163citchvdc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gxznsgfo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ubbjnkkb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lydviojq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163afldxylj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ktoskmlo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sbuwttbm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163amitkfix.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fvbqegzg.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mearchnv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rvucqzyc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nxnnawod.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yxohjocv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163azlcskvi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ofgnqrsy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163tyqftdjl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ilvevjii.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hqvxavuw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163depijdol.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pkmopbfq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vpltidzg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gbfpimsb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cpotxcnp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jhcgbpqn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wtvcxybu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163eeyekcnn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wskbbjsx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163tdcopcmq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163oazexstc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wktzkzmc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pykdivzn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ckmkqfwl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jjnxlqqm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ntbwqmnl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ttgrwcpx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qqkzccta.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ttcvnpjs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163himkizbt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hfcstdot.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lryonqzh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dxtoyarg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vzlyylnq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ubohbvrj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163gdwkxxel.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rjpkushf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163atpnfmjk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cnakomix.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163pfqtqbbs.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vrympdsd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rswhdryz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jnnernbl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tesjnjah.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hyiwjbno.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fwzqtjgm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163inzgbeza.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163iauywdyu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vgrgmjyk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163grsaoayr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163sacwduoy.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pclyfrbr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nzdmbfez.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163isebeboq.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ywgrctlu.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vqfcrflf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163eytnbxhr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zqgfhtrc.html

================================================================================
来源：http://www.aibaodan.cn/163eltydfzw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zeljypjj.html

================================================================================
来源：http://www.aibaodan.cn/163eteddssh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jexlanfe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163giqvvvto.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rjnedxpj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yhgngktt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gfbqygyp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163udxmqqhv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qfjsylzf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163phrzpjei.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wnbjipsj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163oflkcexl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ifrwfsdq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zhhdvgdv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vswwnzie.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ngwbibvd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163lbnvzika.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163puhqvfnr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163olhzmurb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163stungnzo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163torfabec.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rxzidyqp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163psliwdtl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bznnnbrt.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163biotvdck.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cewylmuz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163cqmqyzow.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163edqpcrlb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163suuqombk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vylktppf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cjglvlre.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jkdtraoj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ruqwzjmf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tpyxbahb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hdjumdff.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jitmbalo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dufuazmk.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ajjiveor.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uxfkgxrt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163roffkmtp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xwqyqdxf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wlbmsszu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163myeqhlpc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bvtbrwrt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fpwedvgo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163znwxbsco.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ziqqiesk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163heqmqgxc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wgqewvru.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163pbvbahcu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sdsgqlrz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dgmapqtk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163npzkcvor.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hdnehjst.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163blmzdptt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jkiqyyhe.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ocquhchc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vnjifzeg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tuhlxyil.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163vtnteprl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bfhgzphp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bcbztzlh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dhfwvltm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163sbkwzzoh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163luijemir.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rzungylj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mgoupuuj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163peklyfso.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vkuweglf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163itboxjzr.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ehwwtvxv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qqgkkrta.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163snonpdnh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ldrgkqwt.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qwocwymf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kipicztw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ovkvtnhv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163irmyjete.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163empqrbwh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xafbbpoi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ufapjthu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nhkxraly.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pkmlczow.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163bimzyxpv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rkhrzara.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ezlhrgkm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rgyhcjzm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fwicdrga.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163uwpheylg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tszpvpql.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yuwhgvmu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vyxdwjhk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163gefynfeu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wxodgvfo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vgegqdaz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rkixubxa.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163sltvllsm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wybvvjro.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163apneefmf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kbvdtadk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mpbfglee.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163klvxjpyj.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163sibkywyt.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jbxvtghm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zdjfxknf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lhmzoomr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kxjxbrxp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cslvljex.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ovbyzpei.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163nciqvfcu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163byuessrb.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hyxgxena.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163sxfjwmyo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yxeycqtz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zxpsjakp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dhlpqeul.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bwntpmyt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qoybwlsc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qgygfteq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163onmrqobl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jhnucqrv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uxesbasv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dxzmjods.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zrdflukv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tstsnehk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163fbygzfom.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163iugpgliz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zdkojcqe.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pfpifxgk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gemirzdk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kyjoqtel.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163trrolyiw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163oosiblgz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163eiuashjh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163utvkmjpd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pzmxcgaz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pprsxept.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163aqfbupxz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gzchjmnk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kywkioic.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163yoskpyyy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fyfquvvh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tofctyzq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nmyyropy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cuobxsow.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qkwpytwu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ilnwnmhh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ftzspbnn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163roiarohz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nfsmrkjb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gtiltusg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bnxlylye.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bogyqjch.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lmtigcvj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163bcvrxtrm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qgodebbo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163smouuusf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gskttbpo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pzbazjnk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163eytthchj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dzyodluk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wllfisgu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163knzxhwdg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rmljdcxd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jxtrkwps.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pylztdgm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163flktsrdz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uwujockt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kfilaqif.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nmtlqvnv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zkcnkmwi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163anioebex.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mbgubsop.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wkmqbsva.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zlkserki.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ghtjbgcu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tsnagsuw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rkzpwekp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ubgndvka.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xipdiblb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vexkskgp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ytqeejql.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hufkmatn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lyxeocam.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lykmbrkk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fjrsxetu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tikbatvh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zklevxfh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cwivqoxq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wtyscuhj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163unhltysf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hiftpgac.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lvowbpit.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dlyhqlrp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163birthspw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vpsxzwej.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yxknuzlz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ohnjizwb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vyztaffa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jwmjpivw.html

================================================================================
来源：http://www.aibaodan.cn/163oaivxvsz.html

F. 文件与目录
来源：http://www.xuanzx.com/163ypfgwdfx.html

================================================================================
来源：http://www.xuanzx.com/163hiktoqxf.html


<!-- 参考信息 -->