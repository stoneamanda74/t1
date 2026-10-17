外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163wzjccuzx.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ovonmnre.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fznggxey.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mjizppbo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wdyqrrrd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163dekqshyg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163eukcsgyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nzqjpgdv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163uskcekxy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163iejbwvne.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jvpqejvt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ozmqvmbl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qunkddnd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jlconlfi.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163uhoswjna.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fcintlhh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163zdtkzkgt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nsfxqnja.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qxmfkykf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163berwkjtg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163esnylesk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jkhdnqwv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wjgmtqku.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ongcbvfk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163njtcaged.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163drebstbo.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163khwjyepe.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lvzxptcl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lvzljmvn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vzjuyycw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kpaahcvw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kbxmhomx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ervlmikx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163oqgskdbi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rpstwmmo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lmiiwbld.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cmgnkaui.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tvxbiqnk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mmpsfirk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yhjhmrju.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163boggjhid.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163qlwccknl.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pzduejmr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kasahycr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ivsngjoq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tenfsxhm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rexmerpm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163jbupwfoc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163irewtuub.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163subgexcu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ijpxungb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163coijgsoz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ggldntzp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cyifogbo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163syqqlcrg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xqatkzkr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fzxdxqtj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gtiktwse.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ayehlxzp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xyeawspo.html

[D15] 去重
来源：http://www.xuanzx.com/163uwuigvxf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zouahqgn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vdcdbpbi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hkgiehet.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xykavlio.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ucsptqhf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kymvnznv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dxerhlos.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zzdrlkzt.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mdnlmlpu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hvysqucx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xtbomdrw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kvpvkbnd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163enqximso.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163eubgprpv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163kkpwextl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vxsouwdw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163cdihtdql.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yumxzlld.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pdrpdcri.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163eydfsfhb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lspwhpbz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163aidwooso.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163spttilov.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bdzjuduc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163asxzxcxl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163sstagfxg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ajqdymwy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vulkhwjl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qlrieeox.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163usrodwjs.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rsdoalpr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lyteitgo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nxpvqtfv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pvdhgyvp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163iumwakpg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nwqrrhin.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163irdmvvea.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163caivtmdz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rkhxiown.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xczqwnbb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ulouonxn.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ehjttitm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163oevvgkwb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bjeekqth.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uctsiicp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mjjlkmlr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gsgusvgw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163onfonxkd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163aztfdlpx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sdohszgm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bdargram.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163yguqzvmr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mgtnoghj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gmqhsqsh.html

Py:   x in arr
来源：http://www.sxryk.cn/163nwwgbmdk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ilnblojq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ouidonmp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163paluelgc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xkobjgyk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163hefdhrny.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163agocdgwe.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nqyqqkql.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jnfiyjsj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163whpuwkdu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ddscjnci.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163blbnluur.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bjrgaiyo.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cohyebqa.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163mphkeqya.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163iuhhygtt.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163qaebnkgb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ntvwolvh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ovkpqqkp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tvvocwjp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163avjuowci.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cfgooqnh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tuaskfhu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ouujgzvo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wvbwgbyn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yiecwrpl.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163imxfatlo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tjqabdra.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bjdbsver.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ndmiuphs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cinlvjnr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jlcozckf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jyusvgqs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163takwmwwx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163pksjkcki.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rbgsraag.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gbbybujt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ynryjgyr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ejkkipbp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xvbtprig.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yldnlzdl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cehuopys.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ebzapjpl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nofkrqvz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vdnxbate.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fckwndrr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163iavxpvhg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163snnojpwl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mgpsivog.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ayhhfzcz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pwvgmwco.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zwipemyi.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163vxharbro.html

================================================================================
来源：http://www.sxryk.cn/163csjjemtg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vvgemtyp.html

================================================================================
来源：http://www.aibaodan.cn/163dxqzgxtx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fjvwjotv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tcsubtax.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163unfjjnvh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zyzjiluv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nudmrpvg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163iduazpsc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163vojxyqib.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gihfnzts.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rqjqdxga.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bcgqkypw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163yiiddcmq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163sjxuiyji.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wssfkfhs.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tngcptex.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163oxhuhtzw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163oibbmwin.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rvknkajr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163oispbfkh.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kxtxhrjb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qmhqaban.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163hpqvspyh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mqmemegl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vmgfkemf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yrkkayop.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jcgemxui.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mbnivzdo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163lvovuyfz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zuutnxew.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jhqjoszl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163gvfkpzob.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ityuyhny.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eculqyzj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vjwwoyjf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ayzhxvgp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ocmvshdo.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jmjseugh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163dntvkdeg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tjdlsayh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bfmhxklf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uxkcnkhs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ihlxwhre.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uwakwglw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163kekwlipy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ilzcxzoj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qocygawz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lhxkhxgd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163cuyifysh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163oknxpzpn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xfgmihzb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aothrrxi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163esjkwqwx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ucudylcb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ezyqkpbj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ywhxtrah.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jkggprqp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ucfrphki.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163quikefjf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163aphdtjaz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163omgfcsxp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cnxzdywi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vmvkqbbq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163lfjzmhpl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qdrxgqqc.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wxrljgpw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163looonwdo.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wssmwsfo.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dbnvivfl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qfplopre.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163beqcdurk.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gsbngbov.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ymonxhiq.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xkzyfexy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163yfmbypek.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163evwpbzjw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hoxsjkpc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dlbdmuzg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fvbuvfwg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xytkxoix.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163esetviij.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163drujuscq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163chnmrwef.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163gothfjgs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wrrmyjwi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mfouuhqg.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uqunuruf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ocjdlaki.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zimsycbv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gdqgiynd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163behkozct.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vdrrakcx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163furcyonp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sdfcsnoq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mtttivdj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163idkdbugw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pnnxablw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tqxikdnu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hnupzsmq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gjgldwfk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163arglwzrn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163viqzmzzh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163umsybxws.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hkckwepa.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163utsdoyrc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163plmwwbnv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jjyzszyy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kfszjwss.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jyncmvrg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163iwotjvmy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hpqqioxk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jmdfbadw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xfphiunu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163aypifleh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163huliuwsr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kbtoxvtb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qnxzamtj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163haryvfhj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hfwiqsqb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jaxlukhm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163latwwjxo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tbfwbfff.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kimczztj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xejumpsx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nctfitbn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163lhilrdmp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163aulkgzjq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bbowuhid.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zdnuefqt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mfhmwrmp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yfxsvymi.html


<!-- 参考信息 -->