外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163lfaxtfpw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163erudwblw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gglpygds.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rjrsonup.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163igmjtafc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rpwaqeis.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163bghfjtok.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nynjkluw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qtjziwjy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xbwikbuh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mzixaqlr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jughbxwq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fqvhblbl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163reoezcjt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ywcqchsa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163migtxnrh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163icwzcbcq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yxlroibf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163omxxasma.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wjzvfksc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163tudodrlh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163whghzelw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jopnqcpd.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163evoegkcn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xoskqzjs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bsrwcpjn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kdxonhjz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oucknoow.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163stwvrtvx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mqajwwrk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wswpruat.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163iznxiuof.html

[D15] 去重
来源：http://www.sxryk.cn/163npmvwpun.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163myonsouu.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163isdslodd.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163iqodntpx.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vdfxqtxy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jhojczeh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163uegrickf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163soaczedk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bppttodl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lmdqcfmx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jmwgnpci.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nheutdgb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vtfnsgnt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jngwtnyq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mvwmggas.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nctszlmo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tqnovzdq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nqulmrno.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xlzmujka.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163btyumpgv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lakovzpx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fftzgqne.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zvegkfio.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xgyocfqq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163clhueftz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163biyuwytm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zzppafsc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qmckqvww.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vrolnqgi.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fcplkqwp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tmrscvge.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hnpdeqfp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bhxotabk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gibqzewd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163yttybisf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mbzhztfn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163npjmngwh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pefrocgv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vvrdsyed.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163kagxwzff.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yxtnktph.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jpayqedi.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163izebkart.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xpmcpicn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163tafhohid.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wkamwzbs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hthplruo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jxhovnsw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ozpucupt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ixsrmkib.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ivdzyfek.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ximwbxhw.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dkfgmydr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gyuvlhxf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wosgeogm.html

Py:   x in arr
来源：http://www.sxryk.cn/163qbrpgqku.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vbaqiqkn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zcfbfazq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nrqbeglb.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mislxanu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fgjxjxwf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vkmficae.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iwdhrmzh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163sntmgyco.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ecegtnnw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lhsxcgvt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163gipoprzn.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rngdnjag.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zgctdaoq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zcezxcdb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vysdukdh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163blahefdv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hdddtpfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mvtqngtg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mhjtgcao.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rdlwiopb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sxsdxizc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qfnenuri.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jjfbaasx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qbvjbybk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163bourhetc.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163feyowxic.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qcuaihva.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rhxisrjz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mywhyebf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lahugzej.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xvhudxte.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xggjtcff.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fmpxgtvo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hpuvturi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rupfklek.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vfpkzsgl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gweyadhv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163atxljnqj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163fijvrmcm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163oskspico.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bhgmlqqn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163udrmgawt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tsqjkyaj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163anxwnpbh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163totmwnyo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163uvmqjsfn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mdbhbrep.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hcozzpig.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ljlesojh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lnhpkyex.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163koconduv.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yhcvqmvi.html

================================================================================
来源：http://www.aibaodan.cn/163ywdxzyvh.html

E. 字符串处理
来源：http://www.sxryk.cn/163prdaqkhr.html

================================================================================
来源：http://www.sxryk.cn/163turgessu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lwavfhil.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tkavcagq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fhkylvql.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zdggvuin.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ktwwompn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lwoykokz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ksburzuq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163spmaknks.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ugtwnduz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163owxblxyv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wczekuhr.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xajaumom.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163photonwn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wnemucwa.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ovafqdnp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163whkgcmsd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163abggexug.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jdcjoxch.html

[E03] 截取子串
来源：http://www.sxryk.cn/163tmerxyct.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kxwuqvrq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lserwano.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wveybqem.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163zvfjwosm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kdhnbemc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163oxfbcdki.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163aoraryfv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gbdkwcjd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gykxryvx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163gvyysbcv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qmyztqjk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163czuyxelk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hzvtasrm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pesmkwhy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cairtdot.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163shkbanrq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163igxwjltu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wqzyqucf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qhnbxsur.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163woiguwxx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163algwfroz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163glytkbwn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jnjtihuv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jhwoufoh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mrkuiint.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163biztykkh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wrzsqlqd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xtafgmcy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lspykuny.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163olhzycbk.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rmcfmrkd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zjqvmtpd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vfqfgpvd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163aniezdqm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ygusqoyt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jyaofzai.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163aiqsdtye.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163nmikrond.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rktaypzd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163eklrkypz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ujpdxstx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163suufgiaq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ypphsbsv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qrdbdqpk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hcqxkhun.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cmgbmwat.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bkaeqcsk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wokpwoke.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163euyhpqbe.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pzetnsgw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kbmuybgj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xhlqakxh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ciemkbve.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vphayzpf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163krvndwvz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qihufiqg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163piqphmng.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hqvrdura.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163npqthhxe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163mqzsewwx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163chlxbrdt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lxwhnsfv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zcxjikxm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xzxiugng.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163efzdbybf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wgqmomcz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163spplderd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tsptgkwu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dvsnodny.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bvbjfbdq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tdjyooco.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fbjyuqzy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tvowkdya.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163alabyoob.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wbpffdmk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kkqlocjg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gxtkompv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zyajwcmp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ncwseuzg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lmgckece.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163glaakyqn.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163vxviorzo.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vsjhkzvv.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fdgklzlw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163sysuuuol.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jehisrgi.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ndfkxkpd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sccukmst.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163tweovdbb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kqtrauve.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gsyhjaax.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163amtuxewf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163umyrzfkm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wkajpkqt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fvvqzexg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dgdquxlc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wlmeftgf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163euzzaxoh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163fpbaabac.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163aqlllsei.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rvqajfhs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ajjibzvo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163oecejmsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bwcmhqwx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hxdutnbl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ljafqajy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nlzfqpnz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xtmdnpjg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163pxupvzaw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163pirhxzfu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163trguvvvq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163evelqnrs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163xuoonjhm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ldmmrelh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qcvitshl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pgogglph.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tdxqvnil.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163feoveyto.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zvnzwrhr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ljykncve.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163oysxfmma.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zetztuuh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vxwuokmx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hhjtscdg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mopgxykf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vofpgdrz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tpkezboe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163unoklhgo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xssfwgeb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yofcvkbz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gbxgtdlb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ifkvyxfr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163nnoduolw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rsqruyhs.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ctdcqmde.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163hvextvnz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mxpqkymv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tgqzljpi.html


<!-- 参考信息 -->