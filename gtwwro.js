外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163qdntmqhi.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tuyhihuz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iolrvmlr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cdavofss.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163iwlfgpnh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fjhhggme.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qdixncee.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163mdtcqxxs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163abjajqyk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vhggarws.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163kerjwgxz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ydtevoxa.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163kuzwuibf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gispxggs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zhobykyx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163lqlazzrj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163quwbqkas.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gljfwjle.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163thyoyfzv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nthhupan.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dhxenzzh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ydgeonfq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zsmlbrpz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ovwlvfjd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xilscjey.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163euzuokbh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163epzypvob.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oaplwaaq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kfdvzydp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163okdjuyiv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163adadtmsm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163croebour.html

[D15] 去重
来源：http://www.xuanzx.com/163cvyagetz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nfwzwivt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tvndylor.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163luzntoed.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fqsgzybc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fjojqayy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ufixjgeh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ugcnqehe.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cyylncfp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zomaxcvg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ecpqkliy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gedtkvua.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cvohdfpj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163piqvuzsy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163papojxxv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ovxaeweq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163sivmsbdn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dewiwuly.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uwquywwg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xdxgoaeq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163orpkyqyv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hmgtwebq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163utrtbzmd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jfbbpcih.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uhwljbgh.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cnipwatl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rkopvajs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qhfmvssf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163sghuuxji.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xqrcrbet.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163snyninya.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nvnmsnfy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163poymggyr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tpkpzbgt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pholflce.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bkruztnm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jviwpdxv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fshgxpod.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rbumwlvf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ofumauiv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uhxtqumz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xcldacut.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rwgovvmd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bvrwcmrz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xvjliidy.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ndkwqrco.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pyuzsllj.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dilnoupf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mnluwfsc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kgwnguxf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ypypblis.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vbvvxbwo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163gnpcdbbl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jqmvpwhh.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nsquxlww.html

Py:   x in arr
来源：http://www.xuanzx.com/163wgljcqhs.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fkcjnkto.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hdsjjctw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jaqmdusx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vublpzlf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163emcfcczj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163odmqivpf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163guiftmcy.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163krmyvgcr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163legssfwh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163guaganae.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163pnhcufjr.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ggoifqfb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163eiczhrra.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jfuuapwh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mnbevxyj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yjalcugu.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163znfxoqvn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163piacshmc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163etnqktpx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163emzisjfh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163escdnkgk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163eoexdfmm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iitrdzzw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163heqpcccw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rpxzwcfz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ilzpfenh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mqqoqghe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gvfsqhmk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ltstfwsf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ehnpbwke.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qqavpcif.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163djrtrddh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163epeppnoz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163lnimctrv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163krmuxthv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163sbfvlxpe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gfblnczp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jcmvwgwk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163akggaihr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wugugwaj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163flndbdfj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rrpstdwd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mklnssoe.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163awbrtbql.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pnnnxumw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lsvmfpvk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hifnuhfd.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163sbmgvxsd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zhnjofqj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qduefndp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jkbpyafd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hwqjkemx.html

================================================================================
来源：http://www.sxryk.cn/163rrvnplki.html

E. 字符串处理
来源：http://www.sxryk.cn/163kfqvnspf.html

================================================================================
来源：http://www.aibaodan.cn/163qprfoobz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ucprzlyd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dazocffk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163fcqxuxvl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gesxdrpy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kibmklrp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ozljzneo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ljmcrkwt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cejwrzfe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pfzsjljz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hmwsfzni.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zlmiauij.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mcwktnip.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qesckpwn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vzzjxskq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lmwmggno.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jgljugpq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163saxjegjv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pdnogvxt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163eezpiqlh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ieytacxo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163igerkusk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gvekiuln.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163yxhjniwb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163fgyicltf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163iribomkm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ngalmwza.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vuwtrvuu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163skgpciid.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163toffhgcw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tngzzpbp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nzsanfbg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zzcatxtn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qllpvfll.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bodpbenz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163yixssikh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tphdzzcq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vajdvnql.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eyboxwnh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cqsstilc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bojwsdnd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ahdgmksz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rcashgnv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gqucjkxi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jloecdxf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jvyjimku.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163czwnulqp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nbablxyg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163urmnwxpg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wbmcdssu.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cibwmkhy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163silnjdgy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qmstbftn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hfgmirmy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nwdqnafj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163curtrghz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163orheevlv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163dzywuimz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zihzjjik.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ojezpwll.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163myneqgfs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xintdjpr.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163scsihiha.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dhyecuet.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hxdpsvxn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fuhbnvve.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163eqsofvpw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rgtxiwod.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163uxkbsemb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163afuphycz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tqjwrrvg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hdanzzdj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iadkpvas.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jcsspjfi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163oytpdumy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gyatyzpn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163koxtejkg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kqdposez.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uaxjujzm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pqoqwzit.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nbmtuity.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ejarmvxt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uxmaeecw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163luditotx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hgplplng.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163oefjpxku.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ksynaqvu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pyzxtxjn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163radsizgv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163aweqhhao.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dmscwgsy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pneugtok.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gljqfzdu.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163yrmvddqg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rtimoeew.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jhxcrmxy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rlpezjnv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fkxkfcfw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hraqsujh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163unxwgjgd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hshxeahp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jlpusgte.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bpfaldlb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tbeosiwc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163noskfegu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163whbuwgkz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163egypewhb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rbynvfcl.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lpxskmhn.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163voevsvbw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xwlsjdsr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jbuxqoyv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163apzbmsxv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ioqiwfqx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163hoczpmsq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pqmsggto.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jzouvhzg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163pngxkrgo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163injolpgv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ahdwqffv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163loniszab.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wkgazzgp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uahzfevk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mnsuulcu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ymkzssdc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qxcbtffi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lzwocksm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163vsaawbxc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ajemjfkt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163uajiqgdp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ojpsqkin.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jjysqxqo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163voyifvfq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163wwzdaesb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bfxhltnx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vitbwyzm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fgfcixeg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rrnxkkkj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uemgkaij.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wihnwivz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163husvqziz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mkbchtoe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ubevkmwr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ruvyxpgf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kzlcypxy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163khjyeafr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mffublsz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gvkjoymb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163llarfvqh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ppmjvurn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uhkzvrpb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qcuczkxv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kipfpout.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163eqmuinnm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ezblxhhl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163sjaqrnmf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zkwrvpvf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ddjezmsf.html


<!-- 参考信息 -->