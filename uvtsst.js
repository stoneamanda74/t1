外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zvtmnpki.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lvcppxrh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iwxjsxqx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ononfypg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163iidlcfnl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163plkhwsgj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sitvgjse.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dhkbieew.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163etidjkel.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qmovtssj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zaieuoqr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163noghvxmm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lymaramm.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jzsgbgue.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163egfgolxk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cltqgkna.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163syqnatra.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lgbfvxxf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163sxqghbnz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163khizjpmv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tmxktbkm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zuztoyec.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163psyjxmqq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tjlrfvbk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163syciwcum.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qravniqc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jdgaqyyw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xftoyerr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qgrsptds.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zxwqgqwi.html

JS:   arr.length
来源：http://www.sxryk.cn/163auvmdqvi.html

TS:   arr.length
来源：http://www.sxryk.cn/163nygcjtbn.html

Java: list.size();
来源：http://www.aibaodan.cn/163rudlaxoe.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rirkcffd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rfkylfqk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wpugcgcj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fgdikswg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cqevhmpe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dfxypugl.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ebifrttb.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163porcgrcg.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163fhpflfus.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hrvemqpe.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ppclfdtr.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yuzwvipn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163chzdpzvk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ayqtbmac.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jhkszzcs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dkxnarow.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163zdimrdhe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163oxqkmudf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ofsszawu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iciblkfr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bosoibln.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hjifzvee.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xxwhphov.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zmgzgjzp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163iehxeodw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tqxtzzjx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163hofkmaig.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163vfrxqykr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pliphukj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jsukxaza.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163swzvknih.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wqjntoas.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jyvmarbm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163konmfcec.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163amczdrph.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dsovkvhr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wpdlbdrq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kkzdvhyi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bpptufef.html

[D11] 反转数组
来源：http://www.sxryk.cn/163srltgfja.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jqaqirhs.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wipnsnbj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163aqscwrfl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dujyvfpx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dtjeqhzh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163bkbkqxuh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nynmhnwl.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163qqrbkysy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163swhvoqyr.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ubocraay.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qgcxuixr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jnhlvhxn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163drnrsazd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vebbeewe.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vkguyxho.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xyypvcdw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163eednewiw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uwlgmeuz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163iroqkdqb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163teysfnir.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tvegkooz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ttvjokjp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mcbvmdxd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163deydktrk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163eigytmxd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wvbulbyw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163phgvtgqd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mnwjqaef.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jebbumrv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dygtkoxc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xkgdyaxc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eykjvsha.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163trxoimrf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ngecgvwe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vkpscghi.html

[D15] 去重
来源：http://www.sxryk.cn/163ufxltyvv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qfnxgfws.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xeernqxy.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163shkhevds.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lodrzkie.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xjvvfchv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qjmgdrqa.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wpqbrftk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lqkahvpj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163cefrctut.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163amgxdrvx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tvticgoq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qjnhrccr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jvngmydv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mxcsayyh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163olmcuvlt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dqpssjur.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ielqlgcj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163nnydsfkg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163avvltevn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mfzoauut.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163perxohwj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163sliwigkc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163aisrpolt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163mrnvetag.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163newnbxpo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zrpdoayu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163garepwnv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ltffvyph.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xkclwudu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bgpubaad.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163msacgxwg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wewdnkgv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wlelinek.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ajrhifuv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ikxqsash.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vlsppfwh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163osjvtrho.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qykscdzp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dayvqcpn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xqnmnijj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xcplylxd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nsrqgbtj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zhtbubdt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163obybagun.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pgctocbh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ojacbafg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tjovzaqc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zdmmbwgp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163equsxchk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tdyrflsv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163pmoguvnp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163sxsmmbfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kpbmbncf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163adwukyge.html

Py:   x in arr
来源：http://www.xuanzx.com/163rlscsonr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163matrebfm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bfnaijii.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xqcyheoa.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xevezfuj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bvsyejgu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163wnkmtder.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qwhmymeo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ioactuju.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bmyqpnao.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bvgacgnm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vclggeot.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yfeoegmk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mlljkamj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ufevqgqx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wpmejvpd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vmjbbvaq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mbtxracu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163odirpejq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ywhbtwdn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163oaecxtsx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pimzxhpy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ykomuypg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163flclncmj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bnjboyzx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wyzgwjxn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163miapvaxq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xkiwezwp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ifdorlgm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mhpkvffa.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fdennzoe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163phjjnvsj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fegalfkp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ljoicrgq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163exyiosao.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jxexptbd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wgvohnym.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163lyncxfyt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wjrkfiuh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zalmxfeb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lveqkhhr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tpovykyn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lvlvvgpk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163kdqocyke.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zfyppumn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qaqagsmk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163uiqsdesb.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lgyguemx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vgelivlt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zulrsvhd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ethxwqjl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zmlgxcag.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163kiblozbs.html

================================================================================
来源：http://www.sxryk.cn/163awpzevoe.html

E. 字符串处理
来源：http://www.xuanzx.com/163vfsevama.html

================================================================================
来源：http://www.xuanzx.com/163dcujdpqb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163stpgkwwe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zlkgerme.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tyreowds.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jokehcai.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oumhysls.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pzjthgpr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fzdjuzos.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dknxusyv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ejiugpbh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163srkzazhu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pdcoojon.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163utpffprq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ihzeoehd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ilsucrop.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163nodlwgax.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dggwopmj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163afhzwpac.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163swnzkesv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ejccxgjx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163whukskts.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163travvwii.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kxlpkhgg.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ofidaooj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kyonafcb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jgpbngzs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jhjusjjz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163iukjmrtf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ggemhznw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163iqrhlxdr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hsuegcsc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fqpytynz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163dgftfpyj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163duqsuqpf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lyfexzki.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dlffovly.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zehiyves.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163uxqmygcv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163txajkquy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bagwxebk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163alsvlvca.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163nzdafgyq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nsgyovio.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rjznlxwq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ncyzyefs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163czhwragp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jxkvsolz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rzevfvie.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163asvvaglf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xbmuegcn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qfxqprjt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eeolrhma.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163enanjile.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163unjhjmhf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rmbqtabg.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ydxldmqh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qcxfwcyj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hpbsuuni.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bisbyucn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163kfjgbjyu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163omdngzrq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163szdhunql.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rvwnbcrc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163samzabdw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163lytcjchl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zdgsccnw.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ndluumgf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163guaehqsk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163movcrqiz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qiiponxi.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qtblrnaw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jbukkvcz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vdpgrtmu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163aogypjlh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163aeqxmdhj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pbbggztl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163msfnfktf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163spojoymi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163arusbwgr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kyfbgdlh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163puaehybc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163eizzjqrn.html


<!-- 参考信息 -->