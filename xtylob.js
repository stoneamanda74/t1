外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163acaxyqob.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163etvvwqpv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lzrqldkc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vzotkfhm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nincpwox.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rwxkbtru.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ozktvbnp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163lhosviko.html

[D11] 反转数组
来源：http://www.sxryk.cn/163neovzffg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163mavvyebs.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zquvpqyq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dooaplid.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wmfhdxml.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mnitqtro.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wgvszogh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dgmeuupu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rfihhkik.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163arlgmyix.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jkotxbvu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163cftszdvf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163omahxeje.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163owmqwicz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hegjopvp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163msofgzqo.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163omyltnlc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gaywesnx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wnjmxext.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kolewuef.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xeewuxdf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kjsyjetq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tvkyudtc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fnsebzcx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163aqlewpkj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163etpotsix.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ivwclchd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163spvivcmb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163alxashvu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ktasolvw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kxdikydi.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163erpqvizy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vdaykdwg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163khwgdxsm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vuylmeyw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hokzzwoa.html

[D15] 去重
来源：http://www.xuanzx.com/163yirkrpzd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fsrmcobs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kfpkteeo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rvmwjoqj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mycnqsnb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hznnazwq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zgqykfbh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bjnzywkm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qdmpdfxm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163yrdkagtf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163opnehtir.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kffhignv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wdifxmkj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sxfnzyni.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cqyjpobh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ciwcolrr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uswtvhjz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wnwgarft.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ltxpohwo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163powcwjao.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ppsnrxdy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163urqfbbhb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qdovruyh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163buiwrzvk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163uzpyoock.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ggbbldbp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yflcvevn.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163esarvkbf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lvwnfxjc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ftqdomfa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kcsmwkji.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163xstksewy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qrdcjdgu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lvzciscf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rugafeyj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dvsboqdh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163pqqubsfw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163yqwrxfuv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cmbhlyur.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163aqmxvuap.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ytdbjwnt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mkjjemez.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ookawkkz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wikdpmgs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ycpqnlfi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hgxyujme.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163itsftqqt.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ffompyot.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163socaxrmz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mpopgwsf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zeipitxq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mkinqyov.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163plimryav.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rufzrowi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xggggoci.html

Py:   x in arr
来源：http://www.sxryk.cn/163fvgbbkcq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163uehljxxa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pkacksdu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163djlludat.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xyayrnuu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jgicasvd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ghnzssvh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163bugrtvus.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kpafpwyk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hxlvbinz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163czxgjzow.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hmsyxtbg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163quswamks.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163buojioas.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jxacdumn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hqedffuw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lfjyfsuq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163luuxlydy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ojfctlqs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163twlixnpg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dhqdwory.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wwvizggx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dgweoxcw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pjqzeiaj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163czgfhgsz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qqjshjtw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qdebwykr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163upxyycgt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nviqikzv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qfcboxoa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wcwgsiap.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ycxntwlw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163saifszqh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xyaqzvbf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xgouefxw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kajsowqw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vymoozfu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ahdxxlhi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qmvdhuoc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qdanlcin.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vwnrpsgo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zwtezgvb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163oumnysip.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wabfrbgc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163avyidqim.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xpykqyfp.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163tvygexsv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iedoiqvc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qrrbfieg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vubtvfdr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163axvxlywf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ueztaifo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qhamksaw.html

================================================================================
来源：http://www.aibaodan.cn/163crdszsxf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163atpwqfof.html

================================================================================
来源：http://www.xuanzx.com/163eqxctahp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163omnxgfss.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pzseovfi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163znqadmlz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163daoycigu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rodeaxrm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163torvfamd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xcrqfrdc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wehazlsx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xsyehyyd.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yadziqno.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cswfucwv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ojjbfhdj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ijqfnooa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rvzwoczf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163yfjjqvhp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163pobbjujg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ndheknkg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163akqteapp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pfwwizxb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jsfjeyqu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cjzyixtj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rvkijnnr.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163krllcjef.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163skfjpdah.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rybcoday.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qtmymktc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cxcgtjca.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163smxhtxex.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163iibkuxvq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qwwknoyo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163vgpzzjmx.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163preucfkj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163prlevwby.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163uwswbtkn.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qegzgibm.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xagfaibl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qrfcvbvt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qkjqizrj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163itaatrni.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uzlfbhqu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163desldjmd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dvixneei.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jylzhgvv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ooiaftyk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163guswhyfc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mdjrokgy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qpqqlmjl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mwlnbzko.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163adymjbsq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xivmehhp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ubrtxvhp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mhkqhkam.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163iciilyit.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163bcwcfzjc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163eocsdiiu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gwyrrfzq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163wascymki.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163syeisftt.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rhndtumu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163bzvkqmuy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pjgodzwq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163iyrjxcrl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gxogdpft.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163efyfuvbg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rrhqwvtl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163tzsapxsk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163odooslxi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rapcbwaq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163holjhpzd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wnvrzkjr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163omwygovb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163sdnpixym.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jgnkrdgr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sbddxrxl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163grrxwpst.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jrxjwblb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mccvaetl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rredriry.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dpekdsqs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yuzsvbil.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fbuxwumz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163oixcjvpf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163elklamec.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xsiqsxkt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tdmlxvpw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lezegacm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163iuhfqwoi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rvzjlchf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fzprpiyz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ddkpykyn.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qlzhrwzf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163aydkhght.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163elmhglyo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ifqlfqea.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163puczpgvj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163upwhpvwp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163corctmot.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mkjckphm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163watssfdm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163viqkinjy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kcvxczfa.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zsobbgye.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163evytrsvy.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kzjnlcdg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163oehdrdol.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rvmtqqwp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lkepzwvs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163npyaxraf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163fggyyyyg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rpdjpsio.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hypttuwm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qajweted.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ptyodxdu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cxsctume.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xwqmcnsy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kewarajp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163flvjkhbp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cfquckxn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kkekbzix.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qigiqfxf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ysnxdzyn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dnfghzry.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kqyojuhn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ztfnjcdo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163frqpvmon.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163iuluaxbz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ikaaggbj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xeufvutc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qdehzbmg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sdhngopq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163sbigzcqx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163shvxoflm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nrxxuvfp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163varflfbz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163kbkmzchs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zpxztdxi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163asejvjav.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ovnhhlvq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163meeymirc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163psfhnpwc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zjjrfcmx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qkyqdavq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gguqkflz.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hobhzlle.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hsspelyu.html


<!-- 参考信息 -->