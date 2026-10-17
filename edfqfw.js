外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163irxgmypv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xeleeydu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bbpkjgrb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163afzhridz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163htgeoqyn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wuyzkshk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fbnnboaz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zqxzzske.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rmnrmwyp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163mjqyfbxk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uqpnnwhb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ldtpimvg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pthhluhm.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163idtyllyt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uktjhdsk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163fmqasnvs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zdtgmcvo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163spzawozx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vlyzbutj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163abzcelnu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hakizdpt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163sqiswezt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fryztdzp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dbgooraq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jrngwzxt.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163oiniizsq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mlgokusa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lmaoihjo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dvukomzx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ckrfkrmw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tmubfmjp.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ngmszqou.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hcslxbbe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qspndmdv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jhbnkdks.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ltynrpab.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qpfpdwvl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vfwfsgsq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zmdczwmj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163oixxifov.html

[D15] 去重
来源：http://www.xuanzx.com/163mjwgdydn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163revrefai.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yexhiykc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zwnxtnzu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ymppkqrc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163vbjlcgvb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qlxyzpwq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163thmkxbqe.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163robzrwjt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xbgqhbjt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163puwskhvr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jacpwsyy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163egwpxaxp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iyunuyzn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kvopwsut.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163uobggpmy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kztfzypn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163isttbqga.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mhwerllr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163stxhshml.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163guxnhfda.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jurrwrzy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uzgqgaom.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dkztbagy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rzglhngp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hlbyurub.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163eqvedavv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163evyauxtf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ahbjxirl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cntfldvr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xixeffqn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163iopxmkzj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mqdvjziz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tasppuyz.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jzlmnsmv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tsbkrtdl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163bwnucsir.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dppldbky.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vgotulhy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zdeziehb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xspmygac.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dcwifiox.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rrfovkwd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163puucosim.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ecxiiwvq.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163shsfuavk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qcekvykp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ihsclzna.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qdqcbmzh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ectesqrv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ifyowdow.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ifcdjztq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zlrhqviz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163guxmmckr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rxpbwxgm.html

Py:   x in arr
来源：http://www.sxryk.cn/163yzxfofyh.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hrospmle.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wugviwwo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ijshdqdb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gsvufzyk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163iggthvfj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pwrheudf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tpbnxjjp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163taaaafxq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ntthwopp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163aktkfvbc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xkhwmbpo.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fzdbqtqz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163msaprhul.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163raujjeoh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wsolpltf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cqjynlnc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163mzavtlih.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hrnqbjqv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163shuwhkei.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163itobkulb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eyhftbpv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163avrirtnc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vtotrztj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ptnbjqnk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163enjpuqrh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163grsnrshk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rxonypeo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163kaxhzzbc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gzqwvrph.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163erbquxws.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qshnapil.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ifcsriro.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fzvsnwuw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163gjifnajh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yqrplpzo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163udjwbspz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nmvgphwo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163gklppvqi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hldvzflc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kgutrypm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163mncregrg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163exvrgibr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jzfmqssa.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163vgauizsb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bekowizp.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gkduktmx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yetzasov.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ksbaonee.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dgbuqzdv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hlaokvtz.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yjfkpnjr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163osugqelk.html

================================================================================
来源：http://www.xuanzx.com/163sklrtrwm.html

E. 字符串处理
来源：http://www.xuanzx.com/163ysivgyxq.html

================================================================================
来源：http://www.sxryk.cn/163yvjsduiy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qfnmiklv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bqaucvzu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ddbtahja.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163puxgwshw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163siiwsgxp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163uqkampdb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mfcwkqrl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bfeabbts.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163iubksywk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rrjfjluw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ehpmykve.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163npoidocn.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sbfmqsax.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nvcsgxje.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qjzvyubp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163blipancd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163csmbabqu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zqzglsdx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wiwhvorz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qzmodlem.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cwfzzddl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qokcramd.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163sdyxrqym.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163lutozdou.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163bxkscqri.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163agbimnrr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pmjfsiyd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nwvgulny.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vnpkzdpb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ixyzmdjx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zdjvprfd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mpauqfbb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163avnifnxv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wcbipnbr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nfgibfoo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ukzitoml.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fxmdqcsf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lplcjxqz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ztgptctj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jkjtbecf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xafryhff.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vrdsyyzj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163haevktos.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jgwowplx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wluhwykg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qsnubpya.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163boylrfmn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zzleqslh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163icbmyhag.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gwuinzpf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kesmtlkj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wbitpukg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163phtwhyjw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yzzzpdal.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vqjaeusu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cmzdbrhe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fzjfpihx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163acviayxr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163lyrkoenk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fnifkoll.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ejpvubrn.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lhdnpzsx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kntclwfy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163btdecqbe.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kebpghyz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cohoxuxr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bjonhsyn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fiogcfmb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163apbvqpvg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kqnptjtl.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163npalzfdb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qqpwvysr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ahpqfbct.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lemofiqa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mnluiscc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dvonpriu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zelhdfyn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tthxiwis.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qurtqved.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yvetzjwe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163gtvitlzn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vqeunuru.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ziokbyty.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wjqbkpuf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hggvjwik.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pwdrwkin.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163oxmhykvb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kgjizojn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ohkkxajv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163sepzapnt.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163yoyurmkg.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163loiwkrlr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163czvcditm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jikixuna.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zbtmubqy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fvghlmvv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fpgevnxz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fxbcwmtl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tmlepuyu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ukhunwnu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pdlptlmv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vwlgddqs.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ouwqchem.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kyesemvr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ozmfqvpl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qwjcywmg.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sktvmwxw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wncbuibh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qhzekltg.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163azwvzouf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mzlzylyu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xokdlgyd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qzvyjrjs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163crujpvck.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zlxgyluq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ttzgydfc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163elqexakb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ibfrbuoo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gfwnufbm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bpuhqvok.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fnmljgwz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163sesotgpj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mguctbdf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163eujpnust.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ecqeunyo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163erzkvlnj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mlirizjt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163mqnaujex.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ydrmqfud.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kobowqog.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qodiqcqb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163motbzyzz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ahrwswhv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hwvjphlm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163modlomhb.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rokzaknz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mxeqkfdl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bzuazuwp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ehelnksd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hkojtbgx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tjhlgaeo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xpjxwjaj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uohdeegd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hddqhcjh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qnvadfua.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163icfzngye.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163aihslzsl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163romfqdwz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163taqgdcym.html


<!-- 参考信息 -->