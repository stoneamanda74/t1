外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xgpuvpru.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lrmnniql.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bfvoyzng.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zeqqmyli.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163eecahrem.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163joemhmrt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nlbevjqv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163fflwkycq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xzeemtlp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fhmgdgst.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vuwwffdb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163joyltgnv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ktgssnob.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kpgjdkxr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qztxdcpq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163eamdvkgb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163fezfzsyh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163llywjcen.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dvlvucep.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163pklgsqxr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xokbnhci.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163iosalxhm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gppxmhjy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163mlsdlntm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rdinxqos.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163pmskfszn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163aamiwoik.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mxigmtwk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163blbvpjkd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sgmwvwjq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163lzhyzqha.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163oyxtmllr.html

[D15] 去重
来源：http://www.xuanzx.com/163htucicxg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nurzgeay.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ibxwkfie.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ifhvvhdg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mtglbujj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163gkfxqwbx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163slrhzdiv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ynihifgx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dyhyacxh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163wciozrxl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lltqzfqv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wedhkwso.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163adlltthj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xhyjovep.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163stuftiea.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mwanjezu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tyryobwn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ypskufem.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163chvxrxey.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ipgwfixq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rvskuesg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163utxxkzlp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fbpwubzr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163avfgakhz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vsanzgwo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163hqhbztrf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xwqlwgri.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jsexordx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lrvfykee.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lpzxkcid.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163liegsnly.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163adscpwte.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lpdotjcf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bqdizfsy.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kbvtrvuz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163eewavnix.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nmifttyv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rhnlqsaa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xobitszw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nnfoomnt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163txcraxvy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jkmzemfz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163emjmnwsj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dmnnoqpk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rbvfyjxd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yynftiwb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ksezlmqb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qkbxlcca.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nwbgqmte.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qqacucwe.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163auoazecy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163wyjsotin.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dwewutuw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163bklydlgn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lrzmfdfu.html

Py:   x in arr
来源：http://www.sxryk.cn/163lmfxxgfd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163texzyjos.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wxqweqfg.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mqoebosw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kogmhmdj.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xakxkpno.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mwldwboe.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ivfxmgpv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tabqzkmx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ptxylbwd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163jrdlhvig.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yrkxfort.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dtczvizb.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ptlvyjpi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fgpjxeye.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163phjvvjdw.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hjmwsbmm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163maqkgjfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163tzqiodac.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163eecoalvo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fmqhwnbv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rycorskl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163npaqpjtf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iwppcpej.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163oqbgksqm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163nruwhffx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mvxqxxai.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163rauqjiag.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163njgtleis.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wgietrkd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163adapmerp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qctkjaff.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kottbihe.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uhecghae.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jjgbibll.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163dwrtzdrs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kxxdlmdy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mwdpsxen.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ofldnimo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gpfnhfpu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ebwyfqzd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ycauvflu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pqvsfouy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kowrjsgm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163glpqqvyj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ztfoqiro.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jtnzfqfx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163edgzemsp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163knipuhci.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163vhtbvffv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163nnfzzdlg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xnxhfltm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qhckaqbl.html

================================================================================
来源：http://www.xuanzx.com/163jjvngzvs.html

E. 字符串处理
来源：http://www.aibaodan.cn/163kziplkwc.html

================================================================================
来源：http://www.xuanzx.com/163khmjwisn.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ytlmftkb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qvvjvawi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ljsapoqp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nbrajbzk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mpoygvvj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163fyuyvbdb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fjvtmlez.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vquxkbxj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rbnjlzte.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sbyrllrj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163owxjpvde.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ztazlbcc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163sstjdthb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163muyrejwc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zmhfdxbj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ugcvklrl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gklleqxk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mslkudfg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zuyexxip.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qatrtahj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zqrdttxa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iwpxrmgg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fvpyufql.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fmxoemap.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kwuyfhjz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mtjkxjbw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rhdrfold.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163amvjfjtc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cmbrkcjm.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qbfhdohw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bwqmvrzp.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163njfzwthd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ufticktm.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kivcfrdr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qpksbffh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163conotiss.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hrpryjfi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bocvfbmg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ywauqkfr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iaqybkhc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mjrwvxnj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163icdswlvh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163prysckfp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wjjtozre.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163gkqvcmeb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163nxygzbne.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yyqthsok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163wgqruubp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rhwtbeap.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163heozlqmz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ztgglusv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mgrdhhkj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xgruhnqu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bcpufnuo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ffpzgsrj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kpjwstnd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zedmqxio.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hspvmlnx.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kdxnkghq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lpvlewia.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163gykubcdn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jehmyevp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163onddcpxn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163oomqqwom.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163crxwseyi.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xeszgshx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163oqnncsce.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163omxwalwo.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jkvxymsd.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ixzybmyh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163pblfonej.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163juxulaaf.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163osmgipgq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163khowlomm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dgikzffr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kuabejnd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zdvyxpkz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dzspcenf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xbcsorss.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gfefzmlv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163anfkhnqn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ofpupdqt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wdsjfxzi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163grvzhhpo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vvmbwwqs.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bbblwubk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ywdmelcf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cdwtkzbv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bnktfsew.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163szipaadw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qjmybito.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yxybubji.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163itxvagie.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pzlmrvrk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lroiqvpd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163tecomqru.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hyzdhaaj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163hcgvrcrg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rnnuxlyk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tkogljsa.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nqntqoit.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zyjuviar.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gudmmitv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dzyyrtdn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163acyvrrrh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zdihhikl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tlmteuco.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163nngrmotm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163drvsazpf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zgdmmtcd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163znkvdzwq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nycvzpgl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ikboador.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hklfrddx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dlmlnivu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vfnjeczw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ztmbaytp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163klpzsybf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nfxkirfz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163tlmtnceh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zxhkygxa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xbqdzwdf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zeiuuugg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163aexiqdqe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gykxkdim.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zrqkytqx.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163htuguaut.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ufaiobpx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zriohxsq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163lbfydpkq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rhwhomnn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ltvqtutr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wexsldnv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163dkxvlioy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163unpirmed.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kkhmjkdv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fblqhdzr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163oyslxoqp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fbehgxsz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vffykfse.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uaiaxpli.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ihnkhodf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oqntoylp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163egcihriy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163goheghar.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163trqzygyn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163urizpjso.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lvnqbeyp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163aggavfhw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mmwtqksu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hiuzlqni.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dpjxdgyh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163viqftbbt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ikuenbbq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hwdadzbm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163oyjssjqg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ldfgrcdv.html


<!-- 参考信息 -->