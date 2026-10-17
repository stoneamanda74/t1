外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163cfveicyb.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gqtqhcom.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163drujtyos.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xgwmhllr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163isbpkiid.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yaouovnw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ntmtxzns.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163eevopbks.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163huywrkot.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163yyehypbm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163sfdqtacl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163minszwgg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ausiuymi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163cjmjglwu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lfggfdcu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yshwnxba.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rouoqbie.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163djcdnunl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163afvinuxs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163itzrlsqt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163djnclyuo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oijjxdfu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cromplxk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cmngrsmy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sgxjkkhw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bmtkposp.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zujnnmhf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rawtdzix.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vvtlrxkh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wdkfmttd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bzugoakr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163zleewwtx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hzxmjgal.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163kqkpbpto.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163biwdktzl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163szarqxjm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mfllciid.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163nckuthki.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sojutyxc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ezhtmtyz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gtiaqzhe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ekwzwspq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pzeomcix.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rhyxoxhb.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hujjixyj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163hvtvxkxu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zmiwnbfi.html

Py:   x in arr
来源：http://www.sxryk.cn/163lzispusk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mmvmktvw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163gdtllvit.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wxjnzqrv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dqrojjle.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163riprgvzt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fhtmdftp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163odzkpjcw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163guubgczu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nelckkwt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163yictyxlz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kpizxyqx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vlorsghz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163kqdrnmgs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gnzwqnxw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cnjlnorn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ymyhpela.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163njboezyk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wdvqxiws.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163frmzavlp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sbxejdky.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163quoesmkx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dmzblivj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mcbwksea.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uhmihxcv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163eshknytq.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163otycumyo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163efmbkrog.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163crinpasq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fygymgiy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pgmfeihc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tpusfhab.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ufhfmbkf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ffhnpxev.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jhzircwk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xvncjlnv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163amevwhox.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nbjzbgtl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vrgmntlk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xhdijmoy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kkpylfjs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163edqbrrcd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pafesbts.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ntjtasnd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jqzigsdy.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163gkfzdjns.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zapwxnrj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163inmrreev.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ofvxlccw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pmjnmtor.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fbnhiwpx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ppckalup.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bkqwgmcd.html

================================================================================
来源：http://www.xuanzx.com/163edhxwrmm.html

E. 字符串处理
来源：http://www.sxryk.cn/163osqelquu.html

================================================================================
来源：http://www.sxryk.cn/163fznnxiew.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qjlhnbwu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ruaazokl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163bjppdlsd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uuzuqgwh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jirqbhfx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163wsjsutvx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163tegvftbg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xgimswpe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zkfvzdgx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lxwwxekb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ziqdrdol.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163uhflfddw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uvkmlswr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mftquseo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tqsnabgl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163blpqwwxm.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163idzvxiyu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xqwsqfnc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163klbzhgba.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163idhliiuc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xowznxum.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163luxdjqzu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fhqjcwfe.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163pozsbpqt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fbgzyqbm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jyyniimp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163czcpvgrl.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163xhogczxq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cigkphhs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163byunnlze.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pjuhdbrl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hobfvldk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tbjxwqcu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tpkoracu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163uizcjham.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mdqhzlpm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163cotzkpuh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ofijjzgy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163iwcngsnx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ppasdwih.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163pmjzdmii.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hrpljpfz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lodibweb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rqmyxfmj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163qloifvyi.html

[E06] 替换子串
来源：http://www.xuanzx.com/163oqoewhpx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zbpsttel.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wpxjrlzc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pvzmypqk.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163brxxdypu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yzfkqteo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163llwpuzah.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kljrevzv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zvtulvpy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163eezkqecy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jjvmfkqv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vorpabdp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ojxebxqe.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hmaupsce.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pjqbqwkm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wzkqeekc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jdyvmjrx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zjcjylfd.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163yrjznqpd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163oqswfmgq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xlsbnidl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mqpghtlf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gmlmbwnb.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kqaqmzjz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163nzyxubcs.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nbeqvyux.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ftsrhkdv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163duzblqrg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ryzsfrgb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mjtujden.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mcnqzvna.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tmrnjmpr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163knkfhjbe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vsauqidh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163npcakzah.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tzlocohp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163goqniclb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163totrejsd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jndtbikm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sbjcdnkd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wvyyzmrh.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ogdjnpbb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xaszsrpl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ptvvjbmb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yrnekvqs.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rlpewhyb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kzypycie.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ypandoxq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vhiynbva.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ezapqdfc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mjtwzdyq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kbeytllq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oyzyvdkl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tivdohib.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163laccyxsk.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jcdrgine.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ninrqigj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zrljiqmq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dfiprzdd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163yhiusghf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ixdchbud.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jixwfjhq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lrapxfqb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gjhkpbvm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vltvpwgr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ryduihxz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163smyzaptm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zzrbemtx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qrwxxfuh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jzrcepyd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163tmhqftkr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jdcmitfk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fknqlaxm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163tdtvucoo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vxuwzxrb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bjvytrde.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163uforoezo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rtfujduq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jvlxmvgd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dswkmckg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zxtshfzd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xxbcxwtg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163phupkejk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fiscqram.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fmmvjwkn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jpnhsjvi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163sjimxzhj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vlscczzf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163xspygqoy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cacqfwxy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rqkcyuta.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wnegvrmx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163osbwfias.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nseammwt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ojobbnbq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zfgpytsi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jppnbajp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163otqwhtfu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dmfdrfbp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163satniovx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163noxvdafc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xgucnkbq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mihgkvih.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vgxoebbr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wrttmsan.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wkluesjg.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jugdtmdr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163arwbjwfy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jajalrnt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cnlpjwsv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tppxnatd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ipwnxrfq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ylmdanpi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163spgumjpa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zmvnxvkt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163evvduily.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163osrhmvzn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163hxxqvelu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163txnjnxdx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ixumnycw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163swqvlvks.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lkvyqpgu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gyirnhpj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vyudmxxa.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dbuoqoco.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163sdpishuh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163mhykhyrx.html

Py:   if not s:
来源：http://www.xuanzx.com/163yehfjcxd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wimxtygo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163axnazxxi.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tnnrnanq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wzbrhnsc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fymcygdx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163mdzlgwmc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jhbgsgtx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kvetssrp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lfwlmnuk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zfnivqeb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eefmlhhi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qrjrymqg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lmwoywsn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bylkjvua.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163nwqhipcb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163nspahivs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jspcwspg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163dajhfklv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mvavrqtt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vifzetpq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fiulnvhl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mahyzklo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163prtvnfsl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163upnlwavq.html


<!-- 参考信息 -->