外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uikpjdxq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xcuuriwu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163purxjimw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163minqbukg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163znifahax.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163uyouzuby.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nbejxdgm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fqbmipms.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gnmnuwri.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163llmojesz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mleimpvj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nhrwuzhc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xpvhjhca.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hbweeyxa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ojanrofr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ioztnjff.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xyyyavhi.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dfuhyzbh.html

JS:   arr.length
来源：http://www.sxryk.cn/163tunapgot.html

TS:   arr.length
来源：http://www.sxryk.cn/163raatacfc.html

Java: list.size();
来源：http://www.aibaodan.cn/163misxjmjh.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wbmntzwk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163usdmykpk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lmvyizvn.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bcymgbij.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163afnhlhsx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163yukxqhhw.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lyjbtpya.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vbihcrzv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163cgrwtmoj.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163puvyvbfa.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zfjvkmtb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ymprujtf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163sjvvexow.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dlzhsuyv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163lswqrkgq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ehlcyzrx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163oghokxoz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163amjpawtz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163paweorja.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kleudade.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wuybolto.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163gsakxiqw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163syueupbk.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jjhxuixa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ydjxivnn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163cexhtygx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mlhqlxbz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163fusfokpq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bqxdqljy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cmwphbtb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163xfcvjrgt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wjmapwpz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xfebewsa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163trfkdsbz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163igxjwzyn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jjsoyowg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163czpqensp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wmaatijf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hujoeqhb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bqfrzcgw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xwjljxws.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163iisgsftz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163pwnqidxm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tzbgczpk.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hfoiybos.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163aervdgup.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ottgzpvu.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uavfynin.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gasmtilo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163luyohprq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xtsukfdx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cdjwmzpu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vadypaxa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gxvisygg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gukpstxs.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163neuvwnop.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bclbwcrd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163kbrtopzv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163encwxpoz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xomilgia.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tgyeqjvd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vezizxwn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163adktslkw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163iptclego.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hpyvhfzt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ltczsaav.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mixcsxfh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rjdpjqqh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vavhwlys.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163piyehukf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xlvvsytn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kysbdkqq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ymtnxjrk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mxktvmca.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ixaljgtj.html

[D15] 去重
来源：http://www.xuanzx.com/163uyxgnofj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uxkdnpzb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163eumedeqb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wxbpbxpk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sqqhabso.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qnssomvo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ldlqvyqa.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vcjfoceq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163viwulocb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163epurjzkp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lsgghhle.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ceacwnmw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163utlvemem.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nvxnorxr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163aewljnvq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ncyurouh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163meujfqje.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ahopeher.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163fagbqwdm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lhclqmbi.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gibsjddk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kugfdamh.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163beshhpho.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163xajfgfnh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163senshonp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163bvjzucnt.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ewoflwwn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zwknewev.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163znavczlf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163tyvxkgjj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163dvcvepms.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sqlwwszj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kgtabxzn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163flloajdo.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gqtkueng.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nkxfjsva.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163yywusmki.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dhnokuul.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kkujfwkv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fxrjkqim.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sfmccdzf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mwuaxqgo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163oupziuqx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ovqkrwvk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wftyrxqb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yvzjduxa.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163memultph.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163blcofyra.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163edrucwdy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dfhihljj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rnxzcdhx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vcahyvqn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nelkgcdt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cywkkicw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gcmrenjr.html

Py:   x in arr
来源：http://www.xuanzx.com/163fhvrfnua.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gwvokcuq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mhpshgnu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163upqvlqmo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xdttwvtu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ajafpvuq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ylippyko.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163magthphs.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mccxcqwf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kqbxrvoq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xpuiprar.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163smaicxfa.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rjdhlqhw.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jdkqyagt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xjoqperb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163hdhnilro.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cuvvtkmt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xalqvifm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163dwbwwfks.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163pdmlfsxy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gjbzugbd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jrahsvmr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sdbciglv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tyrcfuhe.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ixxtbfur.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ziezjbmd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163gczgphof.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163fxjmojwu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163huxdgvjd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wvxiamso.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xpfydaew.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tcigelzh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tuurkcmx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cakakqic.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163khqjzigp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163gkmqoakh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ifsojumm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163vmpvfwqf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yfnussbu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163maeinsdk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163siiywzde.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163pdtnorxk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hkorjacv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gndotvmb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gakppbjz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163rioyqjwh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163swyepchn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mwcmfwhm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jfcerxvl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163clmutzko.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rnbpftgq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jnjaabea.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yqmxgepn.html

================================================================================
来源：http://www.xuanzx.com/163hrboqaiq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163raejkqfa.html

================================================================================
来源：http://www.sxryk.cn/163jmlgljyt.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163okhrqsef.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163llbnkiiz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ayxxvnad.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sytezamm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pdygrfxp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rlyrhyij.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163eszxhirh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bpwgwtlp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ocxjkbcf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rmilkgdf.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ppvtffro.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ulqbtycl.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tgvmleye.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163htiuoyzm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163eprqhfzd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mhttmwph.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163jvfvecec.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gursguqt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qbaqaanl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nrogdwyq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163dvcwfpek.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163moftpbpf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163loohxyji.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kitcbtbx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gxspgqer.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pitaxxtl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163fjftjfgb.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rjuoccbk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163pohcppsv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163anxlfpjf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163spguttuk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bxvvlfvr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163seliofbb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vmfjaqyh.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wnwfgrkl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wporqtto.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bxbguqdz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zkkbrjta.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rokcxcgv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jyqmxzyq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vnwefmuj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mbwpwksi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163fpppacqq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qnutbkpr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163scznmmqf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tofqzfsw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ooatmtsf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dlpjtidr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hznhjtvc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163anicpilo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jtlyccvp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163namsafnq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hnrzyboc.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ikgkzwvs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163euxfqejr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163npbjssat.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ofoogush.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lbggadjy.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jqfnrwlv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rguqzqec.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163aeypfasi.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fhrrcuku.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kbkcqllu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ylhtvsgs.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vgicfvye.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xnbsuoqq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163euuedakk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kewwirdd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qmxfazvx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fonezges.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xbjdpfxo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vtlvtssi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rxwoeske.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fhifqgda.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hccxxyzh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hvuhfcws.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wkfblvif.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bnxefxle.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163icvivmnv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uuyfymiv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zpfxusgc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163uafqzbye.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163yoybmsfk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163uqkqkxlm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163arilelkb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qsjpjctt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163exmkmyxn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kolzhtes.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ukktcjqg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cuxsxplu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ulnvtsek.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163zirkywge.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163bwbtfmnz.html


<!-- 参考信息 -->