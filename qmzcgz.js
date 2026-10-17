外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gjyamgyw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ktqzoyiw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163snxvoygf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hewfdrty.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163afqnwawz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pmweabjg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163kzoyppne.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163efmfoxwj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163icvzgwjm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xwvktlwy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nxtxttpj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bdwsxeyn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163iljljwll.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lsebycnl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rmifoiyn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163slihqpbq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mfwjvdav.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163acgepavm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fhahkjnf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163oubysgop.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qseypjcr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wrfjhoii.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jzenxpnx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bkuvizyx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xsrrwoyt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qdfonxsl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xlsahtyo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tczghfak.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163utbwcteq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wnnsqiik.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uuwfjmzo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163unisgypi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vrgtuwmw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zvwaqbzl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uijurgzc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yxvbhuqf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163frwfwvto.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163epnfnuhz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pqsadssy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163qzgsqkav.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nypzccop.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163glplbrjb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kpwaxwnm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rrjoeetm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qkrkfcpl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ddanfcbg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163naiqchwj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nsnhufbj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zgnwrboz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ccdefcfg.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dftdzhzq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nmuadttr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163bfgzbsmn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rwxtgoyg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qropatnj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163awlmbedk.html

[D15] 去重
来源：http://www.sxryk.cn/163jqlaggsl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lnbtyfcw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163sytafzts.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163drcehgop.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aemwddtp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tyaplyxm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163qmugrypq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163aewaskuq.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163aaxangta.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ydlddkvh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qsmkitpf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qbctvkxz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rkdldglg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yovwlsha.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163tievtfhs.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bhehqgrc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pwpmfkif.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kweqphyz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xwrkbfqs.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mgntragv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163aqzhuuka.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ndxfnscj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gqsnukvh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bzdhktpp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wghtibjg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ftbigyxj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kvtincxc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pfviwncw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163difsaxlv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163iwfhbyyf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ozlsqmfr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gljguqly.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gxwvfusl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163yayzhxvb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lsngotpg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pasnkgvc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vwkmcxzm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cqpdtiyo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pyiwyllt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gpcchgwq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dlmakjje.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wprnibne.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kyvgegle.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bspjfjvl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pieklwrb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163whhlsqfb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nuibzbsf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hxqiprws.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uuadcpqc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zqlyjfjq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sialctaa.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vyqjpcfg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ckieybis.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ekwqlwtv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163adiitdrp.html

Py:   x in arr
来源：http://www.sxryk.cn/163dqcfjbxy.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mmsyihep.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lcggvghu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163stjzjvtf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lzxlmviz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hgmoheru.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163snheggdg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zqppeebj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163aoybboqd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hqyxrejm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bocxvlel.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jvieqyzb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vcengvky.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xbyqwjln.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163vjutxviu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163piyyabmc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xzudasyg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bmekeyfb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163eunynrnh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ixewdovg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hwyreydo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hmxearjk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163igkoytty.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wanwviep.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163tqveauwt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pyjetlud.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vnqyxopn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yhykkrkd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tounpblm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kkzmxrfi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163aiqvsomz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163hekjikjo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163dmsmjxjh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163oqhsgkgr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cvvtawof.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jcdjaped.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wmyjgdkf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tpocomef.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fmkflgke.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sjphysds.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163oeknskqo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zuqdlfif.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qeaczuej.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nubhrtyl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yxoqeywb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163nheeaxmq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ibcnjsuo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wqvupjgw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mciwkbjo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rgcivmue.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dgtnrvfb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qjtzqsrd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ogoazbyr.html

================================================================================
来源：http://www.xuanzx.com/163aleoyemy.html

E. 字符串处理
来源：http://www.sxryk.cn/163wjarrgkz.html

================================================================================
来源：http://www.sxryk.cn/163tulezzsm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wnijsgaa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163gzrjmnxm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nauvyyzw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ymfgnibn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cyfqlwje.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163bnbxvwws.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ywassidl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dfrflrip.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163kklfgdtu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163avbzfzoa.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dwsjeozx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rzsfqtyb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wuvcjevm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jlhcaahl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nogtdanx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163clbntlpe.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lailskym.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163sumblpss.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yeaudnvw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vdhphblt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163icxdrxqs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nuhelfqn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pqyjhcro.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163arafuham.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ptatyafv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hnomcgpg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uxqqcxkl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163moqjokii.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163tfmlcdku.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ajegdych.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cqjglmzi.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rwspiynh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163dsvqyrli.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163utfhnlhc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ecpmyywd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kxzxkjxo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vpqgzool.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163unsosfom.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mfxuueqh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sphrzrpk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xombwqot.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tlczexpr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163glpebehf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ucpsookx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ylfnnsuw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163jhtxteuk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163cjurxpwa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cyyjzsbb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163syundpct.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xmwkbhwv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vfjynrqj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lrcznwnh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ifkktheq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163iyravdmp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mruayivu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tnlqvelp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hhlrgqro.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xggoenrd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fzodjuwd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ixcevrpi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dbgpoout.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163piannuag.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bhkfqqdf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163khphwzlv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bbnhqudd.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zyreliec.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163eezqydid.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aqvsxzmu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163egvgnhcs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163piostotj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163aykhgvin.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163reoyafka.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163evoenzfl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hwzvbahu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163szzvveps.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163blwzesal.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jgxvufoi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kwndsele.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oxiccjli.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vtjkcitv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163credbxym.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kaksfxsp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vzrlwxuu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ycrrrmsy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pkzenzvl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qrrvdvld.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wguizmve.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jqcnxanz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hsbsqdwo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vmflivjp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vklcdbjd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163otfzjqmx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qehybnhw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163akruzhcp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ppuhetou.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rnrljvqg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163isbeooao.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wnvbtesp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zgteuglq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163efmfiyxq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163klbptzdi.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163uuwvqsyp.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fqaxlbmv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tnitckti.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gyoewanf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163fgmlxald.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163sgaudvcz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vkmdxgux.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xqswsvnj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xonrdkau.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163echhchoh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xcsqhjkq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uijvoatq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vsxscach.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xjbsedja.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163gsnpxvri.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qokhcnvo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rudydiln.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fgakfhpj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163swsqcpxn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163geqyuaia.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mxwmapjf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163enhpmnsb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wadslgrx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163orltsvnh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163iiinglua.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tbalbinj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qqgnoiot.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kmyebqdl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xoposbps.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xnfabbdq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jimgaioe.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163iinmraoo.html


<!-- 参考信息 -->