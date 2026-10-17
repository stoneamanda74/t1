外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jehqxcoc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bmnwnnvt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ezpcwgly.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163arboqrms.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qvoxoskk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hojetwxy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nfdsdlws.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zdyuxthv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163svnnbjwb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oowpcigp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dblcbxhh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163eznahaum.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gpayirof.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ycdsojwk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163udzupqqr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ukozjbgc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xeneojsf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163saosofnu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163yazmlysw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163sjvbvouf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vvydxryd.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bqelfhhz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zscesnlg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mgvfcadj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xjiedxhl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163onquailm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dsugteng.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163etesywms.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mtsbczcu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mfvgoluz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163oqdmilxg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yeawuuto.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mmvgjvyv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kxbwbzaz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iwqvrohc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163kxzhtmif.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kmamcope.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163tupnppvo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163goewwkim.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zqrotmnj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lsbpgjeg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bxriaxju.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kmyhiqad.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dqdrzmfp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wjaoliry.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dwrrhdhw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gjdhjcjx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wtrzsaez.html

[D15] 去重
来源：http://www.sxryk.cn/163lcnzsfxl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163brbqeymt.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hsuzjvps.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163piwwmvgw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163upclggxp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wmgzpuoz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ptisgovt.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ceeydktw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ctxvdpbm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163yhfnjyhd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163sjrggwxn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163itkcdngc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tcqbebin.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163njijhkzz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163myxgajmw.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163btsgcrtl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hvhnnrxl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qolrngjk.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jzodylyw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qvryfyjt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gglnorms.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ektgibcz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163upqifnbv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jducrntt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163liukbslr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163uwlflqbv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ngatvnxy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jvrezath.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163adnqwhsn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163iugvzqwr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163schdurub.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uukwlejl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zzabaxzy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pnjwqrdl.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ysqiqvvm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pebercue.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jxbzpesv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vrksxcgr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lrfleczf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kxfjjmnx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yaldiywk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kgnfzmsf.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gzhhsplo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zbkdoopm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uomdenif.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qgsgvepi.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163idqrpsev.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vrzlsumh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jwonnqlf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ssxeuqdo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hrlyslss.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163kidhrlyg.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jfzjswll.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pzyfcsmd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163eawqimku.html

Py:   x in arr
来源：http://www.xuanzx.com/163jqxixmwo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163iyuvkzvf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vavcxlin.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nyupqcdf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zcpolyoh.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ifuedsqu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hglyhcvy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dwkcywwr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163lalvurgz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vehsglam.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163crruxyjd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gbsjenlq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qyhpnjge.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gnzcuvzh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163tovasrsf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kjerifgd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wbbmtszw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rizfmqtp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sykxvbzf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pyqopiwb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kzptdsmn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lyiqpvde.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mwwlkrtq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zzzrsizk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163brjjexiu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163njsnangx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fhoddlae.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163trgzhzle.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163njuaaalg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jrjycice.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163naumqqqn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jgfxwpnl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163aqsalpby.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cdarhvmo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163eyrhodfl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fbbmaiwn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163usfozxnd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163orhmzxcf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163foddegfy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fqppxgbh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fiqgrzmq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ctqhllen.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wkfwffwi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qvelrzle.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163erqxgauy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vlapangb.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163psgqhybu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163adimsnfc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163cnoilyad.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163aqbfyzdm.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zngsunss.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dnostmcy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163pprmanmk.html

================================================================================
来源：http://www.sxryk.cn/163gjotjzvu.html

E. 字符串处理
来源：http://www.sxryk.cn/163rqwkqnkd.html

================================================================================
来源：http://www.aibaodan.cn/163ggbhetoe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gxtgbxbj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163osagvqbv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xcinfken.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bjjunvka.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ggqfszkg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qojlaric.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163swdmcdss.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qmvzazdt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cnjtfsxe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dfefbahh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vlevrhtv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pdjsvesu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rbeqouvt.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163etbecplv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eteomlfz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zchpwcbd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ygvlwikp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ofurezil.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hwgntcur.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nykuezwy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zkvxyrup.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mkkstuez.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vaoiymoe.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wjlyvooj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nmlorlls.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163zaqbftsc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cgnjajkk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jabfiwta.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wrhjzvgu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rdycclmo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163msxfvady.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xcajdxdb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163nvurxhoj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rlddtklg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gquqxqvq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163arykqjyy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qjswqwou.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163itcwkicn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163utsriidk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pszdjwqx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dmauinzk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vlxnjhjc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163aykhywzs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wvqtichz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gunaskku.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lbotwivi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163aqgloulz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rhihpauu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163whecwpry.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bsqqowvj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zzcjcesr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163oibaitbs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vixhlcts.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163oieyobsj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163meokydre.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kbldsriq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nwjoobsw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163giahclho.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163lfkctnwq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mmbcmbbn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vpacjrzd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ohksoddh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hfftotpt.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163txhhvnek.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nqoonbik.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ihwmrfiy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zaejzpto.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xlxmrtab.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hpnibsly.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dqtwcfxh.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163plqoagsh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jbyhcvig.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163aifymuab.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rhndgstk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dvcazlbj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lfltzjky.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hrvipqxc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163clsbzrga.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163yydbdquf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pkohqgch.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163dmzxfdkp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vxhwurjh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mzvjccxb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163keonbaeb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xdekrsmv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bycvdtli.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tnrmkykk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zczabkfq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dfzjblfo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163omzacbkg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163fytbneqw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163oahkngrd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163bixtgqrm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fazihmvc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fdpryhyn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tdgcunbh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wducuukx.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163tlnazxmp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163eelnnmsb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kyvnqvzp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xithdkea.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vcjyzzea.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gvkhfjsp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bfverzgo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rgcmdtbt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nhoeidgf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tpqfunfv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pskycbep.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yuuzwoli.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bfrjcxah.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163esdvhdug.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gxaizctw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rlbjgurt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kalmmcrb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163abgxcmrz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vitscizn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163faraaddd.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vuquuqfc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xjmpdctg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ewesjueo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hmhylrxo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pznwfenw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dansrxgi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163chxvbpun.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163miobwmdj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rhartqtz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hgmsktlp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zsjnwzlc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ifmdxbfy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rhhrckth.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gamsfdtl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163etfojzdw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163owxvjxfv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wcyzpycp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163sqebprxb.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ejorrvoy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jnfafmml.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ayquufbp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vbyhpnus.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rnigldgm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xmgrgfpr.html


<!-- 参考信息 -->