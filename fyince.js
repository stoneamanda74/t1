外链999!wailian999！

Java: list.size();
来源：http://www.aibaodan.cn/163oylcebvg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cxpguall.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ijludzry.html

C#:   list.Count;
来源：http://www.sxryk.cn/163cyorhzea.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fjuxtxnz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163rghwximm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163plaojrwj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lelnejmy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dhajapja.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qqcfjhyl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vnealqdh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gbrnxnut.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xpqwikar.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dubjddaq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163uebcnazn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vvytwcba.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nbmwkjey.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163uwanbdae.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pvzcunlg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fscgesfu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mpzqfazc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qzyfmuvk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uexqmvvq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qktfuvwo.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kvjxbfzh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jxigxzja.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fihmyode.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qdgjvcds.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zhwbkmub.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uapiwhpk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163aigopgme.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uwwaepjx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pmwasgvn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vxassofy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163alqevdpo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sejokyqb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163inocdfxj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ayfilzvn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pywfnptj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tzkcjjon.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tceoisoj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ylykaxjp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ktukbihl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zkwikzlz.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vkgjyxhs.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sgtyctkf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163izgpkaom.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fvziklhp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163vxiwxvli.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ygxdwone.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bmrvkmol.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ufgqenvq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pqezdiuw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mjuuaajn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ogjnlrdc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zjnlrbsx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ycauyvim.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ykrakdar.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163dljrkqte.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kjwubsjy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163simljxqs.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163whlhqcay.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pfukbqat.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rkugxeyh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gdgpjayq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hwsuabcp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163tmgphevz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rxsxullu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tfbuuoko.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cuedhiwh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163eolzahjy.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wkogivdp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cybcmpvu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zytcpskm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fmkokgej.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yuqptcfm.html

[D15] 去重
来源：http://www.xuanzx.com/163zbtubpwx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qknfgwrt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163osxzyrgf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163arokgpvr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eeojpwmj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gzzoweux.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163gnosqysu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zbwuwzxp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xywbouao.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eyeijvaf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zdeuvjvw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163onkrdeuh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lidmfuxs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wsvphdmt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lblqbvqg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fnqthvzf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gsguafwl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163riewplrw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163khzssdgk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lxwspfyq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ilaapjth.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dkkpuelu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163xelmnpht.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163vvzdinvw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ozwwblef.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fkxzcrde.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tvaifung.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ybloqkod.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163uzmzfaes.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163sfkuvblj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163fdjahxuf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vwwuckpi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pqifuppw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163cddwdlfo.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163nkojmkkv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fazqxbcv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gxzctepi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kdbzidug.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lfqnfkvy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gxaamvql.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vgmfkyit.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vkbnisbt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163czjgwjxx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163sihgfrxc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163goslawaz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jepzkpzm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163tzewpoiu.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xmzlmfrn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lwecknhs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jimgcypd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163aqfrecad.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rwwkrdaf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ehrryxom.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ktqbrobd.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163comamjwd.html

Py:   x in arr
来源：http://www.xuanzx.com/163egjglhmm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cjkdjvrb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dfieyimz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163otcfngsw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ojewrlle.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163idbmvmie.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cdwmdrli.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lwnjnyoc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163cosfmooa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hdocgumz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163givgdmst.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lxkwidvk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ammfvndm.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pcezbgwg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kafhygav.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ffyxkglo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yjtensgj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vvibolit.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163swqpbuho.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fzordoyw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xwlsbvci.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lraxvsqu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ztiozqgt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vftlfjvo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pfwucfrx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163opasljnv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qxygcyyr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163pezbnntl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163btnnnsuw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zmlmtqet.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dgqxiebt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cncejgxd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163cbzzdtqt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vktghise.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cntgtafs.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ohznpahe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163yxpudlld.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bucpyhpl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ptnetpak.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cjretiki.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163tpwvqawx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hjyqtivd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163diflisdl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163osnplndy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gzapnlpl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mdkpgkgl.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163oyewmvaq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163biawzobu.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hzoqhxwk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zakveytu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163eawxozxn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ygfxrdfl.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cxaiteio.html

================================================================================
来源：http://www.aibaodan.cn/163pxdnzqrx.html

E. 字符串处理
来源：http://www.sxryk.cn/163lkikhpxs.html

================================================================================
来源：http://www.aibaodan.cn/163imewanku.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qhriytzl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dtmcovcr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zwjqcixc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jmynapyv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xemkqsin.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zwdxpuao.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163nxnfycsh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kebklcgy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dkyafbfa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sjaxtcls.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gubuzzta.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fkfbneer.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nzapfndj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pjhtvqku.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uwyurocb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163fakbwoqx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xhhmfbwn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ajibykgy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kyptzoxg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163zwjccjgm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qdnulqek.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pfhvpyaj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jvuozldx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qokoivyn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mubyufds.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163oybnkyml.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wwaxlszs.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qgzcxjhf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mvtvpxam.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iiklgjxt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lwuuumvj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pfixhqoe.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uprgdsjf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gifzbnyt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xzgxbvsw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gepwsdfx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mxwqtccu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fuakurle.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zcuuaqoj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ufpovrob.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zoiouyga.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zkdrtpfh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vwtgfeel.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163sygtekno.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163gwqpbdwc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163apxisxwh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kzrzodnm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ofaaeqxw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xilfhbqo.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tbnxpgmo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wolybzgg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xmbkagfo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hoxxqrba.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ulmwhmfg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ksgjebem.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jwkktmnx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163grexdkbp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hxeabcqh.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dnahgdlq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yysbwyak.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vbrtcxhn.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163npscfntb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rlhkzbqr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ckzavmte.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163himbsnfv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tgfizaxz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163zgsvvmyg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fkhqrmlf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163yypbnkli.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163nbacxxhf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mhkgwyok.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163anymzapz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163toeiffwj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tprggime.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163knkezeol.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kbozfikz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yedvbciq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163gqeeledt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jzwaldlv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hlhcozjn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uparbyvj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kvwtapfv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ryqulenc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163hjuqreko.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tzkowuar.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xdsgvbax.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vurmjggu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ezyuaded.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ofjlnuyu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hckrdypk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163melpaxjq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163axxzwejd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kfcdmrte.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163reogpadk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nmmgkwpw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163merqvxzm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163izqmpssu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hfrlozra.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nsljypos.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163zjmsncpg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eyrdzgyr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ujtllkoj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rhgtvuqe.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mxrdqsou.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163dfppnyiy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xfhwimvn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163nteegbav.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zpgqsuyh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163urompist.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163uotlayiu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uwjgnqcx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qyyrkmxu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163irslwotq.html


<!-- 参考信息 -->