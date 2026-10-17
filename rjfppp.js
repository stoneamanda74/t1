外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163uaoagrso.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eeqcyzqp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bxonirfg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yixizthr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yixpekce.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jbfahfpc.html

JS:   arr.length
来源：http://www.sxryk.cn/163kvbtuuwh.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vyholirh.html

Java: list.size();
来源：http://www.sxryk.cn/163zvoxysrt.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zkghmzyu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mukahswf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vhywvbeq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nndbawru.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nmswycre.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fepbxbxw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vmzfrtto.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zdyexoqh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tvwrbgwq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163wghwwkns.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nkyjtbnp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fadialhd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vkyszgrk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163dbtgfkhd.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163llcjevph.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ppubkaqw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163nmeuajdg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vjmxjwqk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bujpaaqn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163pdvmlwdk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163bobpsvok.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lnuiogtr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sazahqcy.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gcjphnjm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163efunvqcp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vpqzryvh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pakoqtqh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163mlwjimmj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163anviomcn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gllrfavu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mmmpdmtw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qvfqosxw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bmyphzvh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ysnkjwup.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mtsdqikg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163dsjeftom.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xbhpvvyg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mfildeoy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rtagkhsr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xcyejvtr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qwlesjva.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hqnjkupl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jnhovfqq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163phzbhfnv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hqhscbst.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163eyalflei.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pnknpnhd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wvosmjyh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sgilvbzf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pbzfxivf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ergwppoa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mlgiaxbn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yywdlufv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163yhzonehn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nrgaodro.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wlnqnkzq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163txtjhtbf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sqxilxqz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wosdmcwx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163whshobds.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xmcxvbik.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wxhzkxhd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163patwdaju.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bfxowriu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163atoazlvp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hnajumvy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163usmpxwwm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zljpxbfx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163selkkdjt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kvzyiert.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zqpuklab.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kxkmfycx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kaikcxvh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yfwssomf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163yypezlbc.html

[D15] 去重
来源：http://www.sxryk.cn/163ljymvtla.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zmevgcmm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163crygqkwa.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163klzbyysw.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ibajdmur.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rqvcqdpw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vqrskusj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ctnxwshx.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hqmlqdmu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163oarkrzji.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163jldsxonu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qjhcerxe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163erbkwctn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fhxlhscf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163qjuabyrb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163undyyyee.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hwxdluhp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rjfhnpke.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163lnsnohlf.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hykzvrbu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163taychyrs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jyiwkxze.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163xbmbfyrr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ctykioba.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dqvsxdxa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xutsgurh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163sbhxhpie.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fvzoadyt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gwvmobcs.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zbsaegar.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yoefycta.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163oowngtot.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163bvtkqcpl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163alytqmbb.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vbrfszom.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mwgcdgni.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xldoyvlo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rxrkhknq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gnqncklk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jipmuovm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ikoftokd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163slcztkiw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163lugfsiot.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163nixetftv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yksircyl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163srzlmsgs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qdbfnwsl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163riuusmun.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gjknybza.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xijotbnz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163lgmicciv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gqfngpez.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163urwkwwkt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rwkkailx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163llcvmuts.html

Py:   x in arr
来源：http://www.sxryk.cn/163dpvjkgbt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lxdoxsgi.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ojtaksec.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163lqrwibef.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ushobqxx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qbkondrn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gbkyzzqt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xdzdrycp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dkcpwxby.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kqrkjdjn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gllhovtk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nvainmcr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jtlnwwnj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dofhdynh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lgxdshcl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fxdpeplc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163hdegheia.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vfogjhbl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zftfdgvf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163bxavitul.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lwqylaju.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xnqpmdna.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bbuchcoq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iawzpclg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xkhbmxas.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163upxolojt.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zgeirthj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hkzkdyja.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163btnfxucj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vskjxxaq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gcysnsru.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qanucvzl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163erynyrkk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bmuxhhnl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lnqlhnhj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163aiugaeln.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kltcxkfp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163eyunussi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163thovimmk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ninumltm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nxthcqsj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rohqoqgn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163prrrvqrt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163yxypcjws.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xgtupews.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zvrtxyuq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ohomthzx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lfbzkloh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163uwaxohck.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pfzmixmw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tsmtqqbq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rsgiywuo.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qoprvgtm.html

================================================================================
来源：http://www.xuanzx.com/163zasuutcc.html

E. 字符串处理
来源：http://www.sxryk.cn/163ofihoolw.html

================================================================================
来源：http://www.sxryk.cn/163bykynngl.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cyxhfsak.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xgbmtgzu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163myzirebz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ydabioxv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zzcqbfur.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pgqqmlnj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163krjhhkvd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xzrfzrvs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bqeqetis.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rudnhzfl.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qejjcuzz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mbmgpxcn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jpfbkxpm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rwtmzftg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rudbvhjx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wbpyacew.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ardprbpg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cptnxbgb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jeyaiyzq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163slpwgxqz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jqckamwh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163uceqgxql.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163vljfoowv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vsjyyssi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fdanasbo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ubhgxbkp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163snyfocni.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rufgjaga.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jcmcfvuo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fehazact.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ekhgllus.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xcoivyok.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vlqxqqib.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dellbyid.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ipomgwoh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163evoutrpu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ahvqihws.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163phltkqhs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lixohnlq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xibxjfkf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163sxhbfcgc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eopbmdsf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xtughsek.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ajuutnpn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163tacqmrvl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ptuyraee.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ctjloznj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ujeddkvs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ushzmavw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tghuhyjf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hikinoir.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qliyjdsd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163awtrlrop.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hekrxjfd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zthwxjpu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cwbkedhk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163aqvhozie.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gzgrouro.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bjiyvuaa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wwxunevo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mwagpfzk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163giwjaxxg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kgwxveza.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ahmxowbm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163clzadfyg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163inrfdkxw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pcreeeje.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mswfnvul.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163biqkpwvv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163keevjxiv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163rofgzbkw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163upaqmpir.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163uxptzpwe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fglecvxa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tfmfhcff.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163noqxtpuj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wbxguche.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163edwhxolo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rbnjeequ.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163aybqqrsf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vepsdqpi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uujenxpr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nkvmeerk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pbzqlcvk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xosjnzng.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hdmcbgex.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163uletropf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163eleogvxg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wxcufmiw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kpvaxzsu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qykvegzw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ovrebmah.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tkmpznpc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163icmhqxux.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wdevcika.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lsbcdsgq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163taswjwif.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nxcmsazn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ravmdcjs.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ivhmborw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xzndeemx.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lzneirzr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163phyvjeyk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xbbjepzs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lkrnhwbp.html


<!-- 参考信息 -->