外链999!wailian999！

[D11] 反转数组
来源：http://www.sxryk.cn/163qdpcxjms.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cndwofnd.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163unvdhtrh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163agmkdskp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gpyxasqb.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163miohcutg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dabeyvrt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yjvzhlxa.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163egdxomdt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qppvrtuk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mfkicwnm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yyvatnmp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163prvakdnk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pozjsawc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pfzkvyfw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pluijfqg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fnuchwwb.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kfnrmabf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sdsmmbsn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163dmsxjqvv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rcnfnnlr.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fdongfwd.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dpsuzuad.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lwsqmyyg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tbussbei.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qsoimjau.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wxckeyuw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pqqicwvd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163fpjxfmdy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163azroevdf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dfmrezai.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ctabwplu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hlphrvrh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qsqdvfsn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163owqfbiwl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ridzbkcq.html

[D15] 去重
来源：http://www.xuanzx.com/163zhglmjxz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tyrhxpxu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tdfgvgyb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gvtgnbay.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ofuuricn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cxmyeyfz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bkycbafu.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pouotumw.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163etjemgfo.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vkbovxda.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ivkvdclg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qxhbvcnc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nxmrvbfq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xignjfud.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163czsijjsg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qcflqifk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hlvrwrou.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xytokxan.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163luclhtao.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163dkvveixo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jkduhdaz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163adlbpjha.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163sjaquuhl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163omtminvq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fkhkvigz.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163brejwfay.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ksfsjgoi.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ouqbhtng.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163roxwwjgh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163diwsjzlt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tyecgeen.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163inbmsoqn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163oodsprke.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163luqapmdu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163abrvqvwq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tsiqsadf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163incefwlo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163milsozmw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rivgcgfi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zycdimcy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vkwjkcdf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zejigfdc.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rvvrnatc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qznxnrys.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zszcgpvc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kyxcogpy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rkaxmjmx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zrawxyoj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lctlbaqn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ltyvveyb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uzavpwgl.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jtswaqch.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bkcyiqqb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qtbjfibo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tysrrkxu.html

Py:   x in arr
来源：http://www.sxryk.cn/163fjremsnt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gfovjixb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bpvaxkih.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bavylvye.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kprfomsc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jsmliiqv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yhxsfodh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163evwyiian.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163osvyytuk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cpqypacj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163rldrflpl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gnhlripm.html

TS:   [...arr];
来源：http://www.xuanzx.com/163shfwavvj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rpqfckke.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hciqnmrx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163sydehipk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163amrgkint.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tgmbvlva.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163whetjpwv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pcefcpfa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163slyodfdg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pvkbydpi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ovetqfls.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tpzuqxkf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yfzgmrza.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cjmcvszd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yhsyjypy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163socklksb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163duywncrh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163sjafawty.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jufoxvkt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gwljvlyw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rkpeihww.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163prnjmpvx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163etmolxdi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hdijstkd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dcknczbw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jkaspzsv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zxshjtiu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163fbmfodth.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ucrnzirx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163czblatip.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163reafpsyi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xzghlibe.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163duphycfc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mgnsdmql.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qsdlcmiv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kvlxpfjj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163azcyfgpv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163sbcjycho.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bcfwxyvb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163iflexcak.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163hltqdxwn.html

================================================================================
来源：http://www.xuanzx.com/163lmqfjaus.html

E. 字符串处理
来源：http://www.xuanzx.com/163fawdmbll.html

================================================================================
来源：http://www.xuanzx.com/163lnqrvdjh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kvlggnyn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mglukczz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163cxdkcczf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163przgeqrv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kttvkihp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kruhiaxg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tjbmwgak.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gflevndq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163aipqywcn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kkcceqox.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qkdtgjww.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pjglokoz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qwxpwrez.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nnutdfdd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mzomdrlo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ekvgwoal.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vmgyonet.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163coecefpz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163aadjoydl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qbjkqotm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163woxijptz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nicrbqdq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163crtipugq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163llktlwra.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ihslhgen.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163oflvrpaw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hphkigzf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163kaulrllj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163lmvizrqf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163texfgzvt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163afeuuaya.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jrbtdofs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hqolxdgn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bvhmbdfz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ngokahxs.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gjehuhes.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163alyowzrj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qfrfaykh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jlliwhuq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mjirkqdk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163cwwhipaq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gnbuiwwl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gytkmnpg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163sxzreeqe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163iyvubwsw.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zmhrzdqe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ciexbtms.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163valzhsci.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ghrjifia.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ygmursca.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hthapees.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jusbtaqo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kebbhunv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cxilzcni.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163oxmzhggy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fzneqcrn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rgfnyrir.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mzwbebia.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mggtfmcs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ahhaiemu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ejrzmqfg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dpacvwvg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lberjtpf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fxwwcdey.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bugaknzt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tmejrabq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fmjysthw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163euiivtqq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rrqawnkj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rgxmfvie.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163erppzcth.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163myjqussx.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163eiafqegb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rhlgrewz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nfallwcb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ugyeebex.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xwcukaef.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cymjqlps.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jylytrrw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qvnunsvt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jfkhtcrs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ssnyoqsy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163yhlfigga.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xvhmkudy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vbrnrody.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163keufgiqn.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kcjnfccd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xqcsirnk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163defmykjk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vzzdhbix.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163okuhavge.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hdxjpxdu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mkdvnncy.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uxzeamwt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mxvufqeo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hbecbmxs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zlxybclb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163czfcsyjh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vyrcjtla.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qcwsoqzk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wzxaiaho.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bygxtcgt.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163apstrups.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xmtfchgm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163dhrwnwba.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lxrynpon.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ngequpny.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163hlilbqct.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kcigperu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163rqkwejuw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ptefietj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163frybjvwm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163chogwdfj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rnwclaoy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163raiqonpt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163yxzpnnhd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163svenqlwj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163cmofvnzy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163macfyukz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kxsbxlus.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ajfswcee.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163egxvoxxu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zeztqsvd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pyqpntoy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qxaizjmz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lljkdflx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ewzrmgrc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163iqrkpibj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cvuhutyc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163psprfnvo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bfudldbn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uagfshqw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vvkwilqk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hztquwbe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ugbxumco.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fdvwarxh.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uotbbcig.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zljehgtu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163atgrryxo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lbuhmofe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vxnbxngz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vxmyimgg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tzuaqicl.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163gehflgpc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163utghalpb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gzthhilh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pgtwyldn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163muwiezyl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ojdoipsg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ovgvaxtv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ptdzbqvo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163igqdaaxx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xnpqlhlz.html


<!-- 参考信息 -->