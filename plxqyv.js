外链999!wailian999！

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qfemewru.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163zynronkv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nhjvcops.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vhsfqaps.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qsinzbbr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jrrlajxl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rmyhcnmt.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163mvhuyksq.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hpirvelo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jzobfxwz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163deedaoyk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163aecdhhhl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ujturgmh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163sjcoeuxs.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dphffnrz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163crvqklgl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fabvqodr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163eeufjbnj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wjtkaesl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pddxalod.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lhaywyys.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163equucdto.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jyggbmkb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163urvgrjab.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cwawrbut.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qhuyesye.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163pikdhoef.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gpmhpron.html

[D15] 去重
来源：http://www.aibaodan.cn/163hyuwbovo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bepmyawj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tnnamcro.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163abscmqcj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ajgoaxuj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dhnaxobg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ussxsevf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ibbrkutt.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163pbebzlrh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nbuaxdwc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163beqychcg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163orzphwgd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mljzwmdi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mltlpozv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wppzhvkh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163slvgioog.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xybqwitm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163juwwzycb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xlfpmrao.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163habeopjf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bvxhcpwn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jyimhvux.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lvogrwhv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163brbegrql.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wzzpjfec.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163gkyeotxu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163shkhcfze.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jeaypgat.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163aniqeuxc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pxgvedba.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163dsecmsya.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tgpqzoym.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zpvxfhbg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hzwudxct.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163uldmufwg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gxbjjhkv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nqxeixiq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qvfrnswi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qokgvvkk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163rhmtadnb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rjgzlcxd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jzjvvllg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lqmyqjyb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163feritjot.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qdoccxve.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163lgewixyo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hnfiqtgg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hnupipby.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gdhpmkve.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qawtcntx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eollzlsn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163duyyjfsq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bjpgjmaa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163xdyofbvx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ngzehrbz.html

Py:   x in arr
来源：http://www.sxryk.cn/163qyealdtu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vyqtfgay.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pgnlvlda.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163iubfxxzx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rdflqbsi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dedbhqjj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yhhcxyzh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163eduiznea.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163egzckhlu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vwtpqcba.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163musutofw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nqlqxjwj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bfuuirgo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ljqvlhhp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yxehjwvq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bgmicpkh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jyretzly.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vjaqffti.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lkcneuuy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163wjlgorha.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163axbrmeyh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hcsnyyfh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163oxkoentd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aweuxdkx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163efwstwzd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jecdmipr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163celtwniy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163vjsgvaqd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pmixwluh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mvitmwne.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lmikjzpt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vjdcdrrs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vraqkiun.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163upblegwh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wscjwvlb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163emkyrdww.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163onbrxfxm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163azwwfqsb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qriujfgv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bvjnkwof.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hmlqeycv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163tngjzhyi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163khgcrawj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163aspvdody.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hlesvggl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xmdqqnvc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163wiewbnss.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xraocudg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ylkohuoa.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zcgdvjcf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lhfscknl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uvimramx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163naspdcym.html

================================================================================
来源：http://www.xuanzx.com/163nlboiteo.html

E. 字符串处理
来源：http://www.sxryk.cn/163djgmkauk.html

================================================================================
来源：http://www.sxryk.cn/163vdezbqpe.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163afcbzwgm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pmszmhjx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nlxwufxu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mycrvbxv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zsqpqpfr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mjzlclrk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xkxtdjwl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hhhtlqll.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163uhwjbiim.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163saeilsgo.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ceyqzsum.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rcoiwbzi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nshqropl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ggtkpqpn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wrgpmhec.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xbhaxcoy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163sxlyegqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ppermjkk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163epxfilrr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vibywoic.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ujzegoap.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163twvbtgsq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gmxnumxb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163hbryzwyk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163flbfwjdu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163luthgdup.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mvsdzxhz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wfgguwok.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qwytlmcq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163axwvnvpe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163xtdjkbhd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163elzqvwqj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163zcvqetoi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rdlujcni.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fpxihufl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zyvgylhm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fafaerqu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163iyajwamq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kezgockj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163atdyyqbt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xxajvfef.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ercyezqb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ozjlwgzg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cpuukykm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wsyqjshg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qpmtfudz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xzntgjva.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ymbycyfp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qntalggp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hyktocxi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nfqrjiwe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jvvqvesn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163glzbkbdt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zdiojhhn.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163eaihrvnb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qaqnwdcj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fnhmjjkf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lhnxxefx.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cqdlyitm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rtzhxpvs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oohbxfjh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yutnfvkf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ughbqlpz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163cnnjtvpt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pxviuclo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163atzemeqw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ywztdbtt.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fmluxrut.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vsuoyanv.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gobkyhas.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zyrjrffx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rrygsges.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hgakqrvz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xnrcwfix.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163cayqqzqs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hnntqofe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163spdfkvfw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163znnuswcj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rdkpmqip.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ogacjtax.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rtmwmtvv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gfnytoiz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163dtbbbagu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xoqrfotb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bzbylpcb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hvllavsz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163haayrwwz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rpbqrapn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wvrpmcab.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xofreden.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163maaxiezf.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wryhimvo.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163eddphogh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xzlibffe.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rcranric.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163twyadsya.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gofiqokc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jghgfvsq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dvscpskq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ddmeuocn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163znhakihv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qqrwrfow.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163cqqrcpey.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vhfdktoh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vpqrfzrl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lgozzery.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hylnyxvu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tlzasigd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fobqfsjk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pppekauq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wpaovcwy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fmcdjfcz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hxiznjrs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fqbtlirn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vtmvfanq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163usohcoru.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xnlqlnfy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tpnuybui.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qvmolvql.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rcbemfev.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vqcpdoef.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163sgydslsr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qcnkoqyb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xichcllq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163useijfuw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vsvlfhun.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gksrezcm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163khvwkpck.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163efxirngm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mhgunaru.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163sjkwutsc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qqzlnfmt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zinbwvje.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163iyqqpzbt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163luijcrbv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fukconxu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zbvvpxln.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163fuvmixpj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163utcdymts.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bdhzsjyc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hmzlfdad.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bsvzclca.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uqwdbgiy.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xlwbbggg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wonotqqv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ejgtfzfn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163snwdyzmt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163runiycry.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mcjmrjfy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vjimvjmq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qosihbce.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163aztakaen.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163esmnjshj.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tnznfacm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163qfuxdmes.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qvzzetti.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163isfxjdfz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nvghmldc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163qkcrqqxs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163saabcvbm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jpypcvvb.html


<!-- 参考信息 -->