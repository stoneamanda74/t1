外链999!wailian999！

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163exlvjfnv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163clognuky.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uhqflcxi.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163fwntgxjt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qbobfkjo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xmcbpmzt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qjbxlfzl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jrttfoke.html

Py:   len(arr)
来源：http://www.sxryk.cn/163drsnpqcq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163oplvhrrv.html

JS:   arr.length
来源：http://www.xuanzx.com/163dvdusqpv.html

TS:   arr.length
来源：http://www.sxryk.cn/163xdoozquw.html

Java: list.size();
来源：http://www.xuanzx.com/163lsjdfvkj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163rilgpabs.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jyqudhcf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vmdfboic.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jsqgwpwc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zreykavk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kmyyanfo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163koxjbpzb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cuwrixfq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iaodpwjz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cktpxddh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163cvreblzo.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163djoottio.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vdbehduz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ewytijxt.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ucgdutxv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tugsmjdu.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tbdjlnat.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pddxfxrk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hgmybemw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163szpkwgew.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ekghsswa.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kbhgrvev.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sjaoiuhm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jajnmhcr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cmspusop.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nwkleiin.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lffsggya.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jnzlyhdx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ureibzru.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wnjwcprb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fljclyvf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kpzlajts.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vwrkzerl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163msjybiys.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vdpkfgvm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163oiwlmevp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ryrqygnv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lxoxeuih.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gjndcdrx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bahczdhp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163eojvzibe.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163pbjbtkno.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jdxlymcf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163iykqjmfv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lgcbgjms.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163nifhayll.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yhnakwgk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hqazfvhc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ruagjqab.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ixjlhjuv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163caoesfea.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aaclgewc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hwhuqziv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nsdyvrme.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163dogqsfei.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163dhzzfoch.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bdlxdajv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gqqammns.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163twxbnkzf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163vnbbqmlq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fzyngzea.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163olxipekm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wzdbusfv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vyzjfire.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zswpwpbz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gwbcfxfo.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ztunkvmg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ijnldvar.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163lyoiovzu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ecsconna.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163geeudnez.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ukkzlvbn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163eiobhuqv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fpqcrdev.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wnjcypik.html

[D15] 去重
来源：http://www.sxryk.cn/163apszhtwp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hntrltnx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oebkvlhr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jjyinhcu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cbkkiopc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163miljobeo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163nnvvawrh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wxoqfexp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163iskqgwrd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163htnuyvkn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tnkconmh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lxyjqbgc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bcajqyxd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163laxbzwez.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yzqvemtc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163egghrmeo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tjfhuyyi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163nmkdywgz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163npyoxhhf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163njquguwq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qqzwjwrk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wllgtbun.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gazxsjnf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163izcthjbf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mpyznuce.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163iccmxqhr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jofydgii.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163azlskpdo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163eitzvmds.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wxkpdtuj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163asfhxpfx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163oeqhccov.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163uqlboqte.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ajbrjdsv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163kngmvzvi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qnmuyybr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163twvgxnhs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vanjldae.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ffdyobmo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163kbxrmxwu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163oozdxodj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163vrhjruyp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gxlzxfit.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kavjqgdd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ftghdfrh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wxnsgjlm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bdvxeric.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lkfrgucg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163loykqpkc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jlueaiin.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163btzjuoax.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163lyegflaj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163scfogfvk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163xkezqfus.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bndifbrs.html

Py:   x in arr
来源：http://www.sxryk.cn/163cfeflopb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163thhoyvag.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xusdhgte.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uahlolie.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ctjvjmzn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gnrwilgx.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ckyndzxi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sgxvudpb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163shxrxque.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ztiabhxv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163yryinqwo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bgnoyucr.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lcatbmtr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mrbncjqo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163anvbason.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gqbxxwvj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dtegoaxp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163aeajbbaq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mrneogrf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rhweqepu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dmkzapih.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163fhmiezyx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cwnxxndo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xrfwsqtl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pxopxuwi.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zsmpoiyu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163druzvvme.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cueiyfrz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vnvgbpbn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163chgllzry.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lcwxfjlb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163witnmekc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nwqgfdfx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ifctgchy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vmgnvoqw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163oabtwjqv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jkghkeaw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163csgkqvjb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uibkajjc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ypdmwqlz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tduujxyp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163icehglyc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cuqnerbe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ecnyfmsl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163agcstdna.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163dfkxatyu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vfuzxatx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lvmdjtwd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jvvtpkrg.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dhotmztt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fcvalnvi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fljeyann.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dxakleyo.html

================================================================================
来源：http://www.xuanzx.com/163yzymkgrf.html

E. 字符串处理
来源：http://www.xuanzx.com/163ijpmgsts.html

================================================================================
来源：http://www.sxryk.cn/163wtnlavkm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pjvcbiui.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wyeeqwha.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bqmrgiun.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163okxkepla.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mqtxqfdb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dlupcmme.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xehngrxb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ynsqaxth.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163gfstutje.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mpcucijf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gkymzjar.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163keluyfmx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163idazglpj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163laxzhwxa.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vznsfxaz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dwvqfkns.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bnubaenv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163owmefyjl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dpsrcooe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bnlqcgdv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fvrblcza.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qdattlqm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jmlutgsg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uerngspf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163psdsjgxe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163luyjunka.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pxkeotbt.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wepgtadn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163faiuoqfn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163vqrxpywl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163oxyuwait.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163nepfmwzo.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ysujvofz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vnuhfznl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rywuejez.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jwngzdyd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163sngbmmje.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163odkyocrl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lqbikmrg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tpzvcgep.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163qlbpmqub.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lukctfst.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163spximszq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163exmwbqtw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163soqlnjmy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163sxgonyvv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vhsuleho.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hxkcnrgr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vvmbxvsp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xfefgufz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ogtvkebx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163lgsgvmjh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qihcdept.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tppxvthq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lhkuihle.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ukpsmspr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yepsomwv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163plnvejcy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qbdpfywd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xojumjig.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tqmembge.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ujmuhorl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dwiqrqum.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163uplqjbup.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hvmnesje.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163posrbsac.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163acswtnkb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kczdgjfy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163pqipckjy.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163inodxafn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lidcnjnl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163scsccsli.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ofzjeppm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ldxoicry.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hwlftkjo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ieockzaf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pklfllqf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rxxjsmip.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ofmdkeox.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ryjpmydf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wzaoogdr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zxsqwqbs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vjnjttkl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ccvkqnnp.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163whmvwglw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wslsojhx.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qzwxejkb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xqpsgsog.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jogtcyyw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163azjeepeg.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ptomsqvj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hvccxmfd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163krcovrct.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kmdubhag.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gstdtbaa.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163aawvgemo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rxfmjoxi.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fkezadru.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tolcvkwj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jrsceptu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lnkuubhu.html


<!-- 参考信息 -->