外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mtslddoa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fjdxxfrh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rievcnzb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cyqflarc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tqfkdlib.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ejdnmueo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hsvkhpqt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dtisfjlo.html

[D15] 去重
来源：http://www.aibaodan.cn/163ibljtexo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zzklntlj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163cauzjrro.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iojeokkz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163egymnjks.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fasmjpdc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bevnlstv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163iwtnpmxw.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163czcwgqou.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ezcuvbrw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rtkggttk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ztjczuxe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lsaaptis.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163seyuvfpv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163eydvqppb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163milpohfb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163thvmhjto.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tzgkoubq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mryiirpu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ugptohtt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163aydwlgtm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zslpumlg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vcxruyvb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gccsfsfp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zfyuitkx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ldvvfdue.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qolnsrro.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jrmmaapp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163szjxombd.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qjjfdnmz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fhslhrpt.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ywaautaa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gjdqugfc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163exfjmflk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163bpvylzfq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zbbwacsm.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qfgcoyfj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163arekrbtk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163doopbjwo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sfkezeqv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sokwgyom.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vltvatsw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163sspbyvpc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zuimwicx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ijiwtnok.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163guqggkte.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ljuqcmsg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163udlrgshc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hjsdhjbq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ispzthag.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cyikghol.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mxkmaimm.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ogeranit.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163uztlmutd.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163dxsnruvr.html

Py:   x in arr
来源：http://www.sxryk.cn/163ytlrgjxr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163oigqsifj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163idkzslbn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lbsnyhqe.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kazloyva.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163etebpiie.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rwjnxrsm.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163otqnrbiy.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rvdrojfe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qhmggytp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163urqhhdqi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bksnezzz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ypbmudfy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163umjclwmz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fumfkacf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rlugjqru.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cbbuerzf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mjsnrfjj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163qmoinwph.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tfuotuid.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mfjeqipx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yjrftqca.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163apqypirg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163csfqxqcl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163syvgsbgo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163itumeodz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qhkpwmvh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ewzzktzq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vuspdygk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163czffflkd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kbrphyuj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163wdegrsmq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163spsdtquk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163qztssdyj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163uvoiykkj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bdwwctmo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163djlbbvci.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tiqfpkzf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lolnrcwj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ceqmcbvy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nawyriwy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163otvbhgom.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163cgzhzwnn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hsbotbco.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163oiuvewzj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mtsklyrl.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cxlutwau.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163keryklii.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yedbejig.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pcbycsov.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lukyukdv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vsuoymcy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163utikkokj.html

================================================================================
来源：http://www.aibaodan.cn/163ksbgpfdd.html

E. 字符串处理
来源：http://www.sxryk.cn/163tnxdswyp.html

================================================================================
来源：http://www.xuanzx.com/163hsazqsoz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zvhntwso.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163siffccax.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ixzqnzry.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163brgbioul.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163scbdkoky.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mhjpptww.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wqvopzbq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163faezxbjy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163tbqvnbyp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rcoiwdbc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zgrabdhq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163vtpbdjzc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wmvdinyv.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163perpexoo.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nyzsyhke.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163uziyzfdr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163giqenzdv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163urgfbqgl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wkeiwfwq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163eleqhgvq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163riendmkj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jcecjtiy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163tqflpzyo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163bdellfdl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163phqalclq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xqcwrzkl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163vemgmrlq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pmmeixwa.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163keogrxsw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163obntialm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dapvbvuf.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163icwbishl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163stixntxq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163jrfmjfkd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163eomiigwz.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163osmmclci.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mliydwgf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yptpvudb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jnojvbtd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ytymsvfw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mbfurkiq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jsxxngib.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163omufnwfo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xwgnzfai.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zwpeqxgp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163aomxrbuc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kfwjpqam.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jvwucepg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fvayrddj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fwcwjpda.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163figfkpgn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lcbirwmz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163tusxsdbh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163buapeyak.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uuqtnyhw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163feebqxsm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163sevyoury.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ndgzwohe.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163nlrxijyv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fzhfsdyk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ghokmxrz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qwawdibm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163atprbugi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wjfashsx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lcbqzdwf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163jvbepmtf.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ydtbfcxu.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wjhhdqma.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163furawdkp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163jbfnppql.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163idetvisx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fpqjagqe.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163sblhvqab.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mkowvxxc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163twayhsvq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vhdmsxew.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zgsxejzr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163aamxrnal.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163njhzcbqs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163argsmnmi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lzzdowxk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163glmmjbyg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ygbruaqg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163waxevuur.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hfyegxkb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tiqyniok.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xidzxwch.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163sfdwlwjq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dzdqlghc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zhpwcuuf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kclrmxzh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ybaltzpo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ftenkryu.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pqcgkdep.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kanjlhpt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bafuscew.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jkxmvklp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163csqdzpbx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dgelfzdm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vsiykjdn.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xefsavry.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163zkqjwjcf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uxdzhyji.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ngopkxow.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qkufnwoc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kukynugu.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gqzhldxr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163fpsyurfm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163oqfcokih.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pffldmgb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163plzhptba.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gokygeoy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wkmxaokd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tqiwgzge.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163emuwtdak.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rcaqvzoo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163huvnlqvg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xwcavavv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ooyfgxgv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jfodfscp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qzatlacc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163koudmxtt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wmroxeyo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ayjgqtzm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gqmbppqd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163deoewpry.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xokgzuus.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163oktwhxdi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163epxovziq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ejzkwxbe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163chktiawc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hcblvvpr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163loedlgnr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zleyswvt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ghecwadb.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163amqbscag.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zvgyreip.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ebtfjayl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zyqnpaqg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zzanmicg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163niwtctdn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163anfwawpd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163afycdxox.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vseffkxa.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dprpvmah.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vganwfhi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jvcpuzrp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fhhyjehk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ogynrzof.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qwseabgh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fkqpzkue.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163sxhbbrfd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pssgwmhj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zayzjobk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xayfmnbv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dzmesmds.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zcdswsup.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ddnscggy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163aaxmjnyk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xkqsjkcp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163pqqizjgl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yrappixs.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xjuzorfz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zvysrlqv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xpeozkoi.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xfxayinu.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mavhawuo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wltaofia.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163klbkepio.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ckxysaxw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yqbrmhwm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ugvvxfqr.html

Py:   if not s:
来源：http://www.xuanzx.com/163czotoaih.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wfjvxxtc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zjqfbkov.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lluttwlt.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163apcxyzqs.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dktiyrmb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vnruzbht.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hihmflef.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163togtudto.html


<!-- 参考信息 -->