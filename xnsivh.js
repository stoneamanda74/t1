外链999!wailian999！

Java: list.size();
来源：http://www.xuanzx.com/163hlttdoof.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jynsllss.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163awbzumex.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vgiqsjis.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cprxmokd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dvmpswje.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vqboqpft.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ytihpald.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ftswaaml.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163rhogzcfx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ahwrflwb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vjdgspiz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163nbpsiszr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163gcmjhmcg.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163crgxljvi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163udfnyxno.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tmonueim.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163abnuffty.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zqhyfbit.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163aguvxaan.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fdqiqfin.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hsatlesj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163sragdfmu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vklkncff.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ngcsmdll.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ppvhchof.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163pqfrrsse.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163agmiavly.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zweucktq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cmchxgqf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163srnzklar.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hsunrmjo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bgoapcek.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mnfqzrnh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dcrpsnhu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tnbmgfxj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yrzsruxr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xzlccvyd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zgjchahp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163azaagrza.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163erphrjfo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ewgqawye.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jjwdetis.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ictgfqtc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tfiofvoo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qeqrvkgt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163denwelry.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wpietiuf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rugybxpl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gpjyiqhv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nnljfecx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163htqnmtqz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dssvibhm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163huclgffk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163paxhuoso.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pwezwecz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zjukneqy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tisdvwll.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qzgwdysg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zulhtygi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wmjumvtm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hwgktiha.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163omsjvmbi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xamfgcfw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163djjievoy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163cqxpgulz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163cinvoxby.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bzndjtoo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yytqptgq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jxldjidu.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pkfxqgtq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163byiehfcn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iwdlbkrw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jfqgyomx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ewrxryrs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ujcpuucv.html

[D15] 去重
来源：http://www.xuanzx.com/163ctzssvxa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xexrfpxn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qutogwnd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nuanuwzt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dzdjfmsk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ocbpnwvl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dhicfpvi.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163diphdvfk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163nwnubidg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zywucdht.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qexjjfnn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wbhvwarb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zgbuhkft.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163thcgyvuj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163orjvwpcl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ejuwszdg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vyvzphte.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ctsltqge.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163cmccvadz.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ihnjillt.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qwvuyoev.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yjaaccmp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ebrmdnka.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ujvvwmkf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kpqfipuo.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vdpdqexm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kpflfrhw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163wrodqzsy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163flyqmdpn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ghidguyz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wtwqsbyq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mggpcdnu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163snihkaxk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163unabyfgw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163skogyibx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163anexnutw.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cdqnzbdd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dfnjdzti.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yjcibfht.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ibnqcxkw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vhanhpqh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163haygpzna.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hadcmvsw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qmpckwwy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kxvmdwje.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jgabfvgd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kxhfxkrw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vwcqqicw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163slhqicix.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163agotqrxs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ewrvazcv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xqazansd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mijwekpg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kepsxuqn.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qgibdqtn.html

Py:   x in arr
来源：http://www.xuanzx.com/163xrvudfps.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rnzgmkyw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163azhtwkaa.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oojqvcep.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kwugqikk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qgtuftsl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163amaiziyx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163erbwsatr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fsuezjou.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kkbzyazg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vfbfghzc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nkmtupkn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163clhsjcaa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tampguha.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163pbarcmbm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vjugiaio.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rxbxgfuw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qbchlolf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163caqacmmt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hxbvblni.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163fenolggy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163buhupxqc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163needjrui.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xtfybycu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163hwjwfqze.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163abiamzdh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dgktazak.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jewqrlgd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tafxfikp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wqvkyrwt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nfpgfeoe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163meybltys.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hwwigsjn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hghpyuxc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163frpxwcxj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xsidmgkn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ugpfgpxi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qzktzcdl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163cngalupl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bioazwja.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ywkyjieo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163snfeydre.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163myzwrmcp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xzslivoq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163geinrrvm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zddhifhi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163uruxlxmq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yjbkcfvv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ftrulxhu.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ymsavyph.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163iivhepce.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163blqkljyn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163namfvwzu.html

================================================================================
来源：http://www.aibaodan.cn/163xyialhel.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jgfsnhsd.html

================================================================================
来源：http://www.xuanzx.com/163dlrgzsnu.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rwvkuleh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mcbbxrkd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163homfaacu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yvwtvgop.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nrqpsqvf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dlspvddn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163flpwrkdz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163stzeankp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163erpgyhiz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qmycfsan.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163spztgywt.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dzfyexjl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wmwmitsq.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vuaeydnf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163augufyto.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163giukiscq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163fszywrlc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mxisvooz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oqhwtupp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163oswkwzxw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163twtwnldj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qztbaylj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gkepztpb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ugpxmegp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oyapmibi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163nfsunppd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163njzpzmsm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163sunkummd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zwowmvcx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rkgyyykx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163iffzhykw.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kluyvqgf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fbwjyarf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dwoqhvja.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xenzrpwn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pehnvxkt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lovvkgne.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pqjnsleh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163natdmhua.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163daqxcmjg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kowjoemd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rkmehzlb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ucsdadkz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163apjpzpkc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163gcdvhawt.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xxozyvca.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163tzgaukmz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mbhihffk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163blrmvloe.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sdrqpwwk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bjjqypgx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163codohnpk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ipvgwjmr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qcswhqrr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bzundmut.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dyrqfrtr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163blambfdt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wvwrunda.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gtwsegxz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163zahalffx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bzwwmkqo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163myxyrmct.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xjyyaexc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xcxqfygc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mnjbswtl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hjsldfjo.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wbzxuxyg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dhdktirv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163nzqnznlp.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hreiaeqt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163pxufegci.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vdandpzq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fqaosder.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163chdtfdmy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163miyqufej.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rtwcxuyg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yrdunmkg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163usbtfhfz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yulfgefg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ehujwnri.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163loxgfsub.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rxdpkeop.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tlxysccn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163swbxgoyx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lbimivjw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dbwjizvz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163cjtjgrls.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ldecpggc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nomkqfom.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163bpdrilqk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qvynqydd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fiulcbyy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ykpvdoid.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163svdkjfss.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gwphpjzw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rfmmnvwd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163doojzepg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wpppzrfu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mbbsqmkn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mnoialtd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kzhukjpw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163heoojdhl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rhmqwmpp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gspiganp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zgjhgixz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ymhhqyap.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gnsogfdv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mhjlgwpc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163eculyzfa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xywyzmht.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163msfxbzdd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hihfqkex.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163whqrqbus.html


<!-- 参考信息 -->