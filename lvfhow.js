外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163scifowac.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pfiluczr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cocghopg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163qxnrptkx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163owgsfkgk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zassshpg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gkbqurza.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vduumesn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cmcegojh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cynmekfq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gkemdzge.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163otxdnohu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gqiolbgf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ysbnlaij.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ancpfktf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163yxkjscze.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163igzyiabd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yxzyxmsf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tgirsnfb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tjudyeha.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nzcnelwz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vblfualf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qczjewwz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gcbbfmgs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163sigjjvys.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163twfdzelb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vnzbvipt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ohzixdez.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ivaavhrs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gfrxffik.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tjjazjxt.html

TS:   arr.length
来源：http://www.xuanzx.com/163ppyffczn.html

Java: list.size();
来源：http://www.aibaodan.cn/163orljrksb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nepqypsf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jdynrboy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163czqpxblm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zmduzsek.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163yhsyyujp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pxnyljcm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163canknwrl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vyhcetum.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hrnasaef.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fnbqrflf.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zfctwbhr.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163iuukdqpf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163snjaskgl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lluvrebl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mhukvwvk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ynsmghil.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163vdgxzuhp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163haehznkw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163euxchkps.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ntcithcz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gdeuevfh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qcjatawi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dhrkklvr.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sgdzabnm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vhorycsx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gfvoeufv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zirqvigj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tbjoqcse.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mlfhixir.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qlfbtgpw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163axggvhct.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qybwifsw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163aqkudibk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sisnfdye.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163suadvsqx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hhzpfkjd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gbmmsouk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jlhsjlwr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163zptnqbeo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163drsbpgba.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dafpqhdi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hiwsvlal.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163cwortoat.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fxdnusln.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gaulegaa.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iunuobsg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yxsajkeh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163futdliax.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ipxhwqva.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vlsasejg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163slgarzhg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xogvftfz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ytdoanst.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lhcsypdw.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lggjdioy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163nztodfjs.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163tekxzwpj.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163brwclxht.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163opchqhmg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wbhwzlem.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jojcpdkl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ahbxrnfg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zkhiuonx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pvovpkqn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zojpuiqo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163tiognpwt.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vobkgfjy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jikarbps.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163gqcxczwk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163semgnjji.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ktxxnicm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163idvkrzfz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qyoslvwm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163igqntwrl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163awtwhojr.html

[D15] 去重
来源：http://www.aibaodan.cn/163hhnrnxuu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gsymfavn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dxncdasf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163swxftscd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163njfboeai.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dylrngpa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163trnzvumz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pmepgncm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163fugqnlrv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163apulztnq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163sqaygpxm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jbwzpvbm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gwvuzuna.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mafxdaua.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gcqlwqdr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qxobhmqr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vrjljphi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163aknybrnm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ofcqwdgl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163byqastdn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mugdwzwd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163mtyvdynk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163oxlujkur.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163cjpsztxp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ecjqkxde.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ymhikdcf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nvhgwrpk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zhwyxsdh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163dqpwqmrd.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ckozcjpl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163cxhawmzq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ztnqrjns.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zidgqluk.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ygrkvqzb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ejlsydsw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vtbgiomr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163nyryywxy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vwacrtrw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163idobeuej.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xdtzgkwg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163icjvfhxm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163wsshrzdk.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163flbnvjla.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gwibfran.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ussuayko.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163csflsjue.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ziekppuf.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163voaapdpi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fyrumnxw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163blsiiqkt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163crmkblgj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163satgbvqn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rvjtzkqo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vairqpuu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xmfcvnrh.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zrwthwrl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ueflvipr.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163uqquyrui.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mpbtvxcr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163igznucks.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163empixyun.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rqalddot.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163vnqmziix.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163lrrekyih.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163vxyoujvg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nbhdfkpy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163isksteej.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163agocxzaz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kevtjgpu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qkhdwnul.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nilbaeem.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163utfwzidq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lhccsxnn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163munvppxk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qgvqsctt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ebfcrway.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pvvalifk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vcozxprw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zwffmxxl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163frngjozf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zpmjovml.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lrnrivdd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dqlvehcg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163fpzinsyz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gbplnkuc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zvlrujxm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jfhigojq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hednkctd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fnytrsfe.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dmyvrkwd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gwwbgkgw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163yuhlsaxx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163oahiinkz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wfgyiaxk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163smzcmceb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kodpfkjj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tfivttwk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163awubotvz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163awiqcvzq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163oblfafiy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163cifcijoj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163myjgzkci.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mhoyjaxk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163urymxkqj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jegciuji.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vkofbluq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163uikredib.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vqukkiol.html

================================================================================
来源：http://www.xuanzx.com/163rrwgewhx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163peyecrxd.html

================================================================================
来源：http://www.aibaodan.cn/163vjvjgmwn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jmqcahnr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xiyzdazd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jyfvbbom.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pxgktkyz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163avgejusy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163egxxaqqc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yjnkhbpd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163cxkufiwf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163njtpakcv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dszjoadz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dgbueupy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mqgzfeqv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ealhskgl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pkbgoctb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ixmsphjc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163htfwshlr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ycizpgxk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163etnzhwfi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163donrpuvi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ywfglyrf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163aqcylobx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ktkunuxr.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fodumzlo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tdtdksed.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pnrdtckg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qgxfbfyd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jjxhbxve.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qyqjojxk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163uarwjgkc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zfvdajfw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dymdkzcs.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tehesmxu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xuhbdwuq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163puceviqh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163exbfcpor.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tigmxtia.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zjtgnlqz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163vyzmviis.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qvalaarg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rarrmijv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xvvarwqt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ihrszuoh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163lsoogxcm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163aqbfxqos.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163udaxumui.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bfoktpoo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dhlidmhh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iopmhhuu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163afgqjzma.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wkvxrasy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mjtnlbeq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bqevurkh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163edamiual.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pexrsxdc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gcbbxbwa.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mnvgorru.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zvdjkunj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163modkfdxp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xzmpkryp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163btjresdm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dxvqhbfg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rjackqwg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fzvtjsvq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ngbciopz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163zuvifmdm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cskftstp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163rdvcyigz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163iyqufgbt.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tqffpitj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rhsssmcj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sgfovjel.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ayioefcx.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rrhrjwhh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163swlaclyd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163byzogofi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zndbwvnd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tnpuxwsw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163kvdamocy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wfdpinfl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kzamrxid.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uhxxkocy.html


<!-- 参考信息 -->