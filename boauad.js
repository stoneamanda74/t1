外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163andvvzyt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ptedqdey.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rglzyouu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pcaugelh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mtqukkes.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163glmuyoql.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163smlhglyu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163njfpuwqw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cwnejouo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163epcllhlc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gcleljxu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yahhoddz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163orbkoztm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163exbtkzfe.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hauvsarq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ebpcnpjo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jusujnoq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yevojqnt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ndlfsomo.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mtmwobwa.html

Py:   len(arr)
来源：http://www.sxryk.cn/163eydyteuo.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163slcxcvfs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163itqbafep.html

TS:   arr.length
来源：http://www.sxryk.cn/163kgruxzim.html

Java: list.size();
来源：http://www.sxryk.cn/163vhcptoqp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jqnnekff.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vqtmhpbr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163uwrvqxtu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ywhcguon.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ewnvcnql.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ererctth.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hvfjoxxz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qechonsl.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hpebtije.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163zvpvmztv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163duvuinsb.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fdckvwrm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ipnlrwpk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hoqxkrpl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tkqihvdy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dcycvybf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vsukdjbw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gfgnwdlx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rnbyxlyi.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163whjxodbt.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jtazhjck.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163batiqvmi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oqhhtiwe.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uqnwgjap.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163mxsqbmbv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163kanrkyuy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163saofjwax.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163vlelesrc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163advkbqcj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ntwezqhb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wspuhjna.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lzhouacj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pjaybgug.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uhzbrrwp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bpdmiajy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ptkbzkli.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163sdwvgkzo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lnmwrmop.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xtwzggkd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163euezmpvn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ehmpntqk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wrrowean.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qnbjbqki.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163adnruajx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rtejwjfh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ytzpnixs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163dulmjxkb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sqyfcphl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kfwcuuds.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ygtilxaa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jryjelin.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yxmplefj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163eucjksmn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lyhakpyk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163bdzbepeq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zsrjpuie.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163boomkste.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163hkndwkja.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lcsjwopp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xkdoauak.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cebgwexx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pzvudkxq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xaebwgro.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163effzsefv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dphquzkl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163jtozullo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ramvloks.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cebtvcjw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hroobpos.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hckgdels.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mugzkaxd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163bespymvv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163osubrcnx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163agasifeq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163elvvwiqz.html

[D15] 去重
来源：http://www.sxryk.cn/163ulurndak.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uxbgapta.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163onuwhrdz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xbcgtgkh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pjdqacic.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163liyxikhg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dqzrrdix.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lsalygwi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163coafdjvy.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vphtjusf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mjsibozb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163smdroktn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vxhupydl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wzthrqty.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163exinpozc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tqeqkdzr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fcsgrhku.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163odeqzzbn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ibmrakhp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163nkzwcdyj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ivqtufhx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cwvbufjf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bvyzuowg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gsiqsplw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zaxycipt.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ehemyywy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zcedszhf.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163dzddylyv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163thbndold.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wflnhzil.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163zjhbduoh.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bgvllevm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yiuwmhap.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163snfsgswg.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xusixgzg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pvwdzxjh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ezmvprzb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kaiyeqdy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bbuhfysi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163opuwdsjp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lvlwydpq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163coxqfupj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163thramctp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163snoeadwg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163pozijrfl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163bbhuedyv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ogmxgfxt.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163covfzdmx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163soikuvfu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163erfawrki.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xvlxdymf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163emcwpgtu.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wpbmwfdz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163yecqyjdk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yqxkiuvd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kxmhunni.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163lrpdjygj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qetbwnpu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yekkxlso.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rzsddpxs.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uthkwfqv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163adnsgbmh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fkidbbmm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ghdbxidp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zwhtpxep.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163fhsebnse.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rqjxgjtq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gxawyxwi.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sochouge.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163fxasgicd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163jdbasmqg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pjyobfgx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ayrzzvqy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163jplawjzm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163wxsiyiyx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ajjixgzw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163izcptndg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ydnztfoe.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dwptmvga.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163slxbmuam.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wpjurvwu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rgqrizjh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dpvljbab.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nommjhwf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fbuewksf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rrrrhxea.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xgvzkazx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163obhiiacw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lezgykir.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rpkadykx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163memtvjtg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ukqkaubt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bxkpihao.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nvnmwrft.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wpwomprw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163fvyifzyv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163avwqagkg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ijwvvhtq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163loqwncwu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163tuhakkbq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vdsmkjwr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jlvjmjct.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aypawctp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wstpcuck.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163leiprkfh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163amrufufg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jugksufv.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ywlszmpl.html

================================================================================
来源：http://www.xuanzx.com/163nrpindsq.html

E. 字符串处理
来源：http://www.xuanzx.com/163kcbbynob.html

================================================================================
来源：http://www.sxryk.cn/163xyocqqkw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pmnmzcxu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jjxlccgb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qubyhjyp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163teykuiak.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aceqlagx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mwbjuuia.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163uulornqe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163sfnavpwg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mjnbojjj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163txqxilxa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jfydjzez.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cnmjrphv.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qelnhqdg.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pquzcovx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163sehrscmd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163tnjelqqx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pxrzrbwh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163uftaaaeu.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jbukxofm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qhasjola.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pnrpyhwi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ywuofmvo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pfnuipun.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163srihcszt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lsjtztoz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hhfwejfi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vlevjpso.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163hmiovczi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163bnyjjoza.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wunwjssh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ddgeoarf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bhgvidqf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hqhgsylm.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163yejtzxrw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163cfxoccup.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yufcbfag.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ksmdfvcl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163yjwrdxjc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ytpsqbja.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zfwmtqcs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ejijzpem.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qfvxqnwk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gbeqtncu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163nlicygar.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wbokfiry.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rqqkkauj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vaodliza.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163pblulfti.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163psqtlkwk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hpakddyy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dljumspz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163onfwgipw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163obuvvnrr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163vdxaesks.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zdrbypjg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ewhlqfkb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163odigjhsj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qhrxkjff.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ybekxfdf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163qambkzzn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163wbkgefrx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pttwfhbb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163sqsxipmm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kltersyy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fzncexcb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fjodmnxd.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ruulktfm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lummoejz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163asoshqrd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163tbtiewjw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ttrfhslu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jvsdvlfo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zlsxslno.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uaxdpgvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163eveifsdu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mtnhxozt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fzavuiwf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163pwjoibbi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ujxdnmwt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zczjttbq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uddmatrz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ezqkzxym.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uvehoddp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163umiczqys.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ahmojchx.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xjdxtlcj.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ttsnklym.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vxxhycyv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163rwdoshuu.html


<!-- 参考信息 -->