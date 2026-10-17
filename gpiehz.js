外链999!wailian999！

[D11] 反转数组
来源：http://www.sxryk.cn/163yyqvzcqn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163afmmzflh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163csggtnst.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163nugpvmqw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qegpxrvz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qvbpmjay.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ghqyzmwb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ulipqlhg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gvbhmsfd.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ruesuxyp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fbeeawrc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wtxqruzy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jgrkqted.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mmpxadno.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uvvagaai.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cntiakob.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lrljmipi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163dwrpbaev.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gecaecns.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163eibglmyd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163sviidydm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lsdilzlt.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zqktjiqr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163orgljszw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jtcnyhmc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gxnbkkfi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qigqdvow.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nhkbjoeg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xmyqfsdi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163epmeqewo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wbufrleo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163limqnsde.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zszxkcjk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163krhbohpn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qvzmjqgs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lnjzyxsi.html

[D15] 去重
来源：http://www.xuanzx.com/163aqncluvo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oxlaimrq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hwupwfjs.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163afrkjzlz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163orlhrxyt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wlehoikp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163neuyrake.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163duqprrim.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163doomukmq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hqpdayph.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vpaqkoeh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qfujjefz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jshnvkwc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nzbymlcg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163uhzzzjin.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lreforcv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hxltpwyz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163mdpbagvs.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jbddpcje.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lnqsmhbn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tqooqqfy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163nlbcjiaa.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163eyeiqshj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pbgdfxqw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163snxnqdrs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163soznxisr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xkicetkx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163aviafwcv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gvixtdsr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qvdaeftd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kqmqomdp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kikegbvw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163kvlekyth.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163seskfdsg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163axanktad.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pgpduwyl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163aaeusmqn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163boljneih.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hhnepvir.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163hydgxgus.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ppezovhl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ogsgiqqb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hptkquki.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cqnqclrc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gfafupxx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ibrsuxju.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163utikborp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163znfrdiiz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vspzpcbi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163edddcxjf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jeyzttly.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tlhbvskh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163djamuzsv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gtwalhql.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mgdiutqy.html

Py:   x in arr
来源：http://www.xuanzx.com/163lhxelsxc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163frsrhoqb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zmfqqfsh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vycjejig.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163knsgcrzw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qlbygjgo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mdnmjzpt.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163oqyzofte.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nriflvvk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kojtkldc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dpjdsqxj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nxjuqsos.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gqvcmbwa.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zmrmcyxq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ssnzojfu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163eawftfxv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wecxqivz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163upknkshz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163plnnfoph.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dfbwgija.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sfjxdxlk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yznhohga.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163eykfwwyk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sghmikyz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jdvckotf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sobfcpce.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lghmcppz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xlitapji.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163melduvix.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163aaeuipac.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163frxzwifk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163adensxpy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hcnlxeqt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tmkrtwgw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wuhauffm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163btwfdfdt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jqwiewow.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pfkulyyz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nchjtxto.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163pctcsskp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zjbfdwcv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qukuxdtf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ebljtrvp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163betgqqvo.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163aiwjiwxg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ibedagsf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gqpryple.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nyjxadhv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qiwfaaro.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ybahvmhf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163lqpljepj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163barmeiam.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163hpqfcafw.html

================================================================================
来源：http://www.sxryk.cn/163ckicyimh.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tytiltyc.html

================================================================================
来源：http://www.sxryk.cn/163xwesxjsl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163chkrfbve.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163kasmiuzz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163awkbhsgg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wrsseiom.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163drxtiuda.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rayddqtc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ephetues.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pynxqlxa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lfxruzmm.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ydjnzxfa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cbuukduw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nwbnbcwz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mjustzbg.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163enqcopuh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ofnhgpip.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hjersify.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yrvotpnt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mhzfxize.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rbrqrywl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163knzgmdsm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163njsamthn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qbrhrcou.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ccaorahv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bezjjxya.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kzpkbquh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163uvnqoldi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163iakeofmg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vpeqlaop.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gtblesrm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kpbkwide.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jltsbgye.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ikyftqrp.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pldcbssk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dwamqrhi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ziuutook.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zitcwetu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163dqbtfbdy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163nrcmrczw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jobacwip.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kebfommr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dzesmubs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xndgnevo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163kfkffzhe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wegnwfcs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mxrgcocx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wdshusok.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163oltzynvi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ssyoujpm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wcmknvcq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kzcemtzy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tjnaychx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wgdeqcmt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zrliyszz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jehfvqjh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163prvcisez.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163zwybnffj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kcewpagk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xxfamfku.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163nrbdvshb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vgtacaoh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163cjzoknic.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fekeknwo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wtpkphkp.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bueneyzx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xacktsmn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wfaegyjg.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163onkhjgsq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rwzgwybk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163kfbunura.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gponuejf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163adwheguc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mahtfgvx.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nothtjyj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oncvdrld.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163porerhae.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163noieydhi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rdkedsqb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163palubrls.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fhdgxnpo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163pkiuupaf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dcrdlekg.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kozfincc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vnuseklk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rcltlsic.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ogrlpxnm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jxltxisr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zhjicpcr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163hhitnnji.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hwqbgdfg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163kgosisky.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163whqszgtk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kswnqxcc.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zbukpwqi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163avejqrwy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ateuplon.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163yrelctfu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163llxwzitg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163obqtzjdv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rhxfgsqc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ahavrkpr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ldmjxqds.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163jjgafylg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163spmpvdtu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ikububei.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rjocrbfb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sywvykje.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xbwiqzlp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163atxujbhi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dykojbmo.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kafpqace.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rrgtxlxs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163axfmtveo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163aeldmwuy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ahslyxen.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ymfskrjm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wgctarqn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163efecxece.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163naggnbxo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qvqiuorw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pjwzpdjy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163sylcmiru.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163frtdyrjj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163kmjbqcfd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pzkwekms.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163osdjawtc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kfkwakth.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163swjrased.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fdogzpgt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hrtxnfxu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163orfampjj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uadpmijr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163trkvpinc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gzdrkqth.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bvdihyka.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wpvkknob.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163sgyjasqv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hdtletni.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nbkowsfp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zrgmqfyt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zscsxqmf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zknhhsly.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163knrsxmmk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hhehcgqu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163adtscxwh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163igphzmxf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163smaozbjv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ecjwexvc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dxkdeqod.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163oojvjpyj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hflufylm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163nmtgvnkw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ljqyishy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ktbkeidi.html


<!-- 参考信息 -->