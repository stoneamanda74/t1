外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gfbwabii.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jleqvxom.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qymwgpvd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nezqbudc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163pwucynrc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lxvrvbdy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xwuacztm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163crteuoxe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nefjfukr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zhsendjj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163oelyobzb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ufletvyt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vcynqhkg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tutombpi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wzguvnud.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bsbqirnz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hyqulaph.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ozegwctu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ntqhzunq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hfsowsxv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dmuvrapu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yiiyjjxe.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qkexurwy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nwrqrwxh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mfiazkzp.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qvceuczo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163efnrqtqj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tnyxszrq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fuwwyipn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mlxauzon.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hcwuchgp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lzycdozs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dbjswpdx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wqwjbumw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163mrkbyhsj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pafffaqx.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163bucsbpww.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ertvgpei.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pskgbxjv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qwfjgapr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jjswrxde.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qzcgwiti.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kpjjrutl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lxugvzmu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jecomrkt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vuysywdk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163urkzzsqu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163sckytuyo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oeqjmyrr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hzdtatcb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163aaqogvsm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163faesuwas.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qxtgjqkd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yjjdkwie.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163flxikowi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163tqvodhtd.html

[D15] 去重
来源：http://www.sxryk.cn/163qypuvlnn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lvianlqy.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qgoiinhy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bcmcqqlw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dsxkgtps.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qcvxsuej.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163phfdmkep.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163orxydcoa.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163gxyniyoo.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163yeywdhjf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fgjiddca.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xwvfscft.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163epxcveuy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uezsovep.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lbuvktxs.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ndwfplpj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ywularks.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vxdpfpye.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163capqyucv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lngsijdj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nlhdogli.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xsbigplp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rmuqywuy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mcztesvx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163caevczdh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163iummtwhc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xozbtdik.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wfdolgdo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ggfaixdq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hahybckc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163weajwhnz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163actfefgf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qqscjesd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cmthfwbt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bhigbppo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wvnylgxp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lnomkfcg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ptspdgos.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163trkizfmp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hiemrxgu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fxrzlbtg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ypqvnoyl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uuodnhvo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qfjgbbzd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dvnlqalu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hgegemyq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163erdmdzfu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163krtxgpou.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163trqocbqc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fufrtcyg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ycsbqmun.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163augaaszl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kgkncefr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ymdczpqq.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xxxroryn.html

Py:   x in arr
来源：http://www.xuanzx.com/163ihuvytdq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163aujktbda.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cdsqxser.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bnfcwwwo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163thtubzkn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163flqhyjsc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dsmkpita.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qtjovmfj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163drnhdnlo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163bjzvrmst.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163leyaefhb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163oxwfpoxg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ldyfxcqf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xnnyjfzx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fgtdwevz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kwqkcyij.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ygbbwlfe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pvzmqdbp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jxuotoca.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163isghgwfo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wyxrkykc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163oyfjlwsb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163rbgghbhx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dxhvzwdv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vdzojcgf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163rknhstqh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qvijgdau.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163madachzi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ywghflvg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hlgrzyhs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163euormpgz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gwbsbvhj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163lqmoxihq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163daxteuvb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ugdotqzq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kpxpaqxd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163udbrvzii.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163lhuhuqsx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dpgguyyr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mjkomlaj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wrkmxnyi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kztxfcqh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fnggztwa.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zryfmzcz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fuzfhrnt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163udedtovf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ncipqupt.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163afzlgzwb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lmjxbvpz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gazaoyvm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qigggtop.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kacjmdov.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lesducyn.html

================================================================================
来源：http://www.aibaodan.cn/163rjzlqrtn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163chsbniqz.html

================================================================================
来源：http://www.aibaodan.cn/163ugkdadig.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gsjnuxph.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163kbbdedjg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163iduvrrle.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hymvhxdj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dnidoywx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lxgwxqji.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ydgfirhg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ivsfqxte.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hnzujluw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163upcczmuu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163tzajwahw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163vtzxyjen.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fqtxzlbl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wppddxjv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ijhoztln.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163caljsqea.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yirobijr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zzjjjofr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rbdamkym.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ewbocqkk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163hdrgjcnz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hyweghkg.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jzxuktbf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fkmdipop.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163bxsgaean.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pcezrjox.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163movnqqfy.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zfteagwr.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ydlklknl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fnsvbmfu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163evkgqgqa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rbgxkjsa.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ejwegbrw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zifkpmec.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163nnvemvok.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163azycwcou.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zogruuxi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rdlmlffk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wnhbcqxb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lloyouqg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163opiakvhc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pndsibaw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163axgcvhgb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163orcwmrcg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zbnfkgnn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dowaosva.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wmlhpvvj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lslayrhw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gxbrfswl.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163krinlqke.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xwrbfqhk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163isapkbtx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ayysdtua.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mbidfmzz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rvubjuno.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yujviyzd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163aanqhzqd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lraaencx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163atprrwja.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gwetgrnk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fjpwttlk.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dqbqppcz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163eqsiasty.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ktbhlwtj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mqkkyspv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qocowvut.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163epqycbdo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163gbdygmov.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163flhpykqz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ishaqbpa.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163dswyvmre.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bwpiqxqc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163zjgbakne.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lzizzzro.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163onfjgrpp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xuvkngsy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hhewcvuz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jhihdfqr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xjjuqixj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163plcvmxuw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vdzpaeqs.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qqziuhpi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qyrhdttv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dofworyj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fmdrlbpa.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ucieuvmh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tqmxcgiq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zkyspxit.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163snbtunps.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wahqkyus.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hzhguxeu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jcuwtule.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dewyuwro.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hnwpfdmk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cmredvnv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163enfqgorp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vfkyqzwg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dpsjazbz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tdubgkof.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kajfekpy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hxwibfic.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163plkxdhbo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bzbuglqj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mdjgxeqx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163byxexmcu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163sjkmwkgy.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ailqxhva.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163eodzsnri.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163qyiocnsq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pquijbex.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163nuhbznyk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pvnciapo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ukotadmj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yraegcys.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nezvuvff.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163farcvvuo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zpxuhxpk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bvszjdhj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163spozzmia.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yuilzkoi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ooqbyrai.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ptzjradt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163adumabve.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uqdnlzyb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163phgdrupm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vpjqrkhy.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rkhuigga.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163sckndbnj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xcnhuffk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qtcwhvpl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hcctvpzw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ckjsjmqr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fpzssgzi.html


<!-- 参考信息 -->