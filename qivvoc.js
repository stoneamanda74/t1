外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lwzlxqow.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dsqouwxn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nphqvraw.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zsarkmbo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dpoffxmy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ktlsrgut.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uryeguaf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rbjusvtn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rgdvpdtw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xjvpifga.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163knjteeig.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qchrkcvt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163funxzocn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zkmvxuyi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163oyodfumq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qsfxzshk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163iwpuxzsc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zkgakzpg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cschxojo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hitoabxl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zfiavpbc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pokdvaql.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163iogwmzgn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mhhxfgqy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yhgohjpy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163igsmbwfl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wrojffvy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kamaptqa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ixbdyibs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wubmfkmf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wvgupwlv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fwjprnur.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cdvkfddb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jwsruxzz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163oggyvsip.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163dxgdlcjn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ymhxjwya.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163emuunrzn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jpdtbnty.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163fkgnalfn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bhicbajw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163dbjnqlck.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163teowobug.html

Py:   x in arr
来源：http://www.xuanzx.com/163vugtltnq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bgkyyxwu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lukcvobr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ewhkdtnc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jqdxpjvo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qtujthlk.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163kloppmcc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gtnoshbw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qnxpsrpn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163anbszsvq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163axyeyfdn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yzgvewfs.html

TS:   [...arr];
来源：http://www.sxryk.cn/163eupumqhj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dttvnmxn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zvxirfeu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163cupanjly.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163iiocorgb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ovpywrlz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163aqrwahzw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fathnyix.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gvwpnnwa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xktnstki.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163onhdqlhb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wmyjunvv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zpjdacok.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nzxuuufk.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bntyxkgv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uqeikhxy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fsdzayir.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yywfylah.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ssavwtrx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eqrzopis.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wfrevoah.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jovbrduk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163uzpvnylz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163trxekpeh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163zwowymft.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163eidnrlxg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lkgcudkc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163tnfxibve.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163hsxbitrb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qtayzssv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qszpxkwm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163sneysifv.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qnakpvsk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pgvbfgxn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163khsijhhh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dlnedyrj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lxugpypm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zrarnznz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163yqxytsvz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163fmqmvkea.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163napwgtqk.html

================================================================================
来源：http://www.aibaodan.cn/163bnyxdqoz.html

E. 字符串处理
来源：http://www.sxryk.cn/163ekjzmhyi.html

================================================================================
来源：http://www.sxryk.cn/163gmcyhedg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163sfhyhinr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163swxzpiug.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wtylpsiq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zpzcsvla.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aatiwdcf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163pvoaogpf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bgvdtlxp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hfupvfpu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hdcjtekk.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hleonphv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xfphpaku.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yqwfqfya.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ducpnhgt.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ghhoxmfm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gfvluruy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ttpulpys.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bvokrlvd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pszcjphd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163utjnfqim.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ofyxruor.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163cnbvnmen.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ihzolyqs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jboslymr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163leqttstj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rumuyvea.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163rnktnukw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ksrvisks.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nmkghvvu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vkjrpqnz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kmjyujso.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vmtaefde.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zlkxcayu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jzkmnoog.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lqwiwbnt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xclafbii.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mdjauygd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163qtvphkzq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163imjjnoem.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163nxyosmiv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pvdwfswp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163akadtfwr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163stktmmex.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kmlokiaw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163fdbwewcw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163npfseaxy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tdyolilf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163aqdevvvu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tzwynnyh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163roovrbnx.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163acdocpao.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ktuockik.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163thbfglcc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xtyuplvy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vefhmzhm.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mptnmlrx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jnfixrnp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ydjhihof.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hktbpvmp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ipotexkt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wdaivhys.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ctndppci.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163erdpmcaz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xbdgmrrw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nqdbgxzb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ffhptmxc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bpelzbkn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ywkpbwts.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163cxgjyolq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vyeirbmq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ekxvxwpp.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163yezlmqsq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163usegfvpf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dkadhmva.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uiyjaqfc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163asszrtsy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lrikqnsh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xyvginjp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163otlrksne.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ukqimayh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jmdswcep.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hgksdvdf.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163niclcbur.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xpgixajs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163opccgaut.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tlfpafzv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ptlycepi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163cubnyqnl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gwmtiqzp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nwcakfim.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hmxdylct.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ushapwvo.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gispeilh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zmwmzffp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ksiwzcre.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wgkvhxll.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qiberkeb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hslqxxhr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rqwlqmcl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163putqhpxn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lybmools.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ejsgplsf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bbtukzdm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163slgcbcbi.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rlibkwta.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163owbrfyde.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pqjajnak.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qzwfuama.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fadtikbg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163yyrmekhm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163cuwooswg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lohqkrrn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kofqrjye.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bzenbiul.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163buggihmg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163htddnayc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vpovbdft.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163sbkblsoy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163nwmburpz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163orwydmxj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cnpxidlw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dnokonqg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wvshewbs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dyocbfbd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jgbsezla.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hqzplwzw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163eguaszfl.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163tconrfuc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hwjrwxie.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jmicvpsb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bixmhjcq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163miuvkbbh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uyphjhkc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163juennmbu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fgvnnnbh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163voxauhwe.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dlbxrspg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163sfsrcfqn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163turjtztn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dpnkygtc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xopvdtuu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pjjmtxpa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163udppmymq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xpnxjkzj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163orqeofeb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163olbujpgt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pnwfspnh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vaphtkqu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163egywwuwb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dsmztxhj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hdeqicwm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wuoeqhoh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bcbthccu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vsnwkhfu.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163teapvhol.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hgttlobt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163egiqqpyv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gahmrxto.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tyshqigw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bgqloewc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qpvkrjkc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jngaphkb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fatpyvwd.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163olucfeuj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163lezkzfta.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163alzxffca.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ubmnvszd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nsufudhh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163eowibfhd.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163efvlbyyq.html

Ruby: s.lines
来源：http://www.sxryk.cn/163oucplbtj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jcbxhijg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163veqadocx.html

Py:   if not s:
来源：http://www.sxryk.cn/163afcfubxc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xlcyypnc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vejkydcc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gvevxfox.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bbjwqztw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163yjeqbcus.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jgccognh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bmtiqjus.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qbcmjzgc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163czcvnxrj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qkqqmqgv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163buxlgewj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wcvdadyg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163liqaatcy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kpnnhuvz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163uejarkzf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gbxkadyq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gxkjgrqz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ouobcbzt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zbirdlwk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gkgoutfj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163thsdmzdq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163entjidsn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xbwfjabg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163owbbfxmb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kclmdaws.html

================================================================================
来源：http://www.xuanzx.com/163aojpmeah.html

F. 文件与目录
来源：http://www.sxryk.cn/163xdcgxjoa.html

================================================================================
来源：http://www.aibaodan.cn/163ooqejgcf.html


<!-- 参考信息 -->