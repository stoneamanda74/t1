外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qwgrelgo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163tihwgxrm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iplwscoc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163teryujmk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ekoquiav.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jhbskmhn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dnermlld.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163xeuugsyl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nouwohfy.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163igovmcdv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ujolmqhd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tlyebjyf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zuuqyatt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wuiozuid.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163aqvjdhvr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vmfbnexu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163iifjizsu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kpxgthuh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163qjunggne.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163wystmhmm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163orxgsvti.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zsiisbqo.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uobppslx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163pftofolh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ftnwrozm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cfhyyyfw.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xdyseevj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163indpoomg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tlunrnxa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kzkaluvv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jkrksaov.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163geqgjpjy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163pdgyvmez.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zwmfihxl.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kpckfkdx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cvcnxypi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163irjcuheh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xctehhcm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163khowlkcs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nwjmelja.html

[D15] 去重
来源：http://www.sxryk.cn/163extyljnx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jcvcabhs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163pooqiiws.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cagscrhi.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xzwaunha.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mqrlwtgh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rwhoebud.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zszobsfk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jbbnaqiu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ttitaogw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nooavhyt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vkbamyyh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ffewrmmd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uktkuvwk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163oneknukp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163robfavrh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qohmbutn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163klkbvgaf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xnwshmci.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163qygafaqo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163uprqghwc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ibtftiwq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163lykbasxr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cdoqaavq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rbpcvwlc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163eofbncbo.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ivjoknnq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163htdovbwn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mqwgylqj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xubneust.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xebnovki.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163piymdvvv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163hjmyqgtz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vruzinoh.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163yseszdvc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163txdzobjv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163omhdlhgj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163wiwywnhd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163idmalsuv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wmeqariz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tcvlphfd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cxyukfms.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qpjwsxmw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cuntfkmr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gyszhnec.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xmhlosys.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163smuoxomm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gelhgevy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wbfogqqo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ljlnwwuu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qegphhgr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nqtqigrn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mpqxhlej.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nmegkkxe.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jwwrlhyu.html

Py:   x in arr
来源：http://www.sxryk.cn/163rligsjrk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wdabbzqd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163akvzllzg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163vaqpjqxb.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163raisjylg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fezrucvv.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lgbnidax.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tdfibgti.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163pwiwszts.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cmehdxyc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ggowgvjf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163emozlcso.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ikfhqywl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jwssltrw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lvgkmvmx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cyenztok.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163afvcgszk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vekcfdkz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wemkctfa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qnaxesbf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qkzdlhbd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rrxxsjim.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163yillngqw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mkkwdniu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nlcapecy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rqqnwxki.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ixvvtizp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163luiijrmy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ffwuwxga.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kkzrqsci.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fztnfnwu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cwlzunsa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fqccaqvi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tcgvssix.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xqhwtqtt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wumysduk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163htegrfsu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ijhlmojq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163owejudxk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ohvudpal.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163biwntccf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qafxkaqw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pfjesczh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wupevglk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xilbzahx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wxycdsoq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163sgxtfcop.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wzqnxavb.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hjtjrsbm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163aogzujfx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xjswzazf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ogdtuoqx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163webwqwnd.html

================================================================================
来源：http://www.sxryk.cn/163qvwkoosk.html

E. 字符串处理
来源：http://www.sxryk.cn/163wunisnyu.html

================================================================================
来源：http://www.sxryk.cn/163jexliwjz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vivgocgn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mqnqwnng.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wipthxas.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qwwkzmti.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cemjohbr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ndaqynur.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163amjsptls.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fuyxejqz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163djsslvzl.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xtuaqaay.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zbwxfugj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xgboamuz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jnkgufkj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zmclsafi.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qbioagye.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163hkegdnlr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163uexgslra.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wwpnxgyf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kemijavu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163doozeupk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xsaamtqv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163nrgjbzfr.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ypkdhkfs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ugrqynqu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163bnliwddk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mbkavvsm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qktjecxh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yfafjfyx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163bjlqvqio.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sufpqvvo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163vkgvrazv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ewkaxviz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163gfxmlenl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pragdfwy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kvpxomds.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vdjltbwi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ecgansat.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bcizlnyx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163izzhimky.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lcwpqnud.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163htvnnird.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jqsvmvah.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kzymbszu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nxguyjas.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hasdzsfs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163afyfxwwa.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163odflwexl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163hustddmk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163duwdixot.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tmrarsgq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tjrcxrif.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ukngjums.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163unucqyqq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kztollwu.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163yazubrso.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uxwxxwyj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ocqxuxsm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rlirbglh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mgcotufs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rksbnmru.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mjydcfxd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vqfeylxc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tgclgigs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rcysoprb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163avobyhjt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kqtbmser.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fhpznhzn.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163icfiihjm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wuoiergh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ipvsrdjt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163oofjxzdw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163boyftfuh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rwniwnzk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lbycdmwo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dusyhhdf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hllosxqm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rglahwdj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zjtrarvk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wmodtgho.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zydfjrni.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nulbqlvy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hjhdnwei.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wjsbrrxh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hmltuqrk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dtbrwfdx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163arwaaryf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ehbtrpco.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dsxouiwp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163appttxom.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163usesggrv.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163nxmdkadx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fuvipmjn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zuojddvi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iwryxgnh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pgepxbrx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163bszxnrsg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163phpjhemu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163sihuxjsy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yhvlewdt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wmycneop.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163sekdgqsj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163yeqwmwqa.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iknjaolp.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fatnifsb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gmndvsyf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wmqkeqxt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wqrgylwu.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fzgfrdep.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cybhvyzx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ecfmaoek.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ggqwumzs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sgjbgarz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kewiuyav.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163urbwqkpa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zibvcxkf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fwptchlm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163eskrffxm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jlcdachv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dtrpflwq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lwrmrgzv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bxfwmdwl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fpqhbbgq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163izjoszku.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163esigqlng.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dtlfkxcp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163tdmklhqj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mfekleag.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jltvicxj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vplairlv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163btflvcih.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xtyvxgfw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vtnvfijd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163cjdvhvyr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163pncrwzxw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rpxnpgth.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vlccvkja.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163aesjblzh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163apcopzbs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163edutcdvk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ispvufzb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nmtnqtdv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kgnbleut.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uifputle.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bwfwbsmb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tatkcwlb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163irqjqcmx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wpvdeotb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ufleehtz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jbjiuood.html


<!-- 参考信息 -->