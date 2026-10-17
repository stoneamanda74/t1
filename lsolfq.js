外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ivjdjljy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kmmfvjyu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163uvkuesbf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dwxhoulg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163pxjnejqy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kkpncdba.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163euttxrwv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163buawvhys.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tcwgldya.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163eikcgzmi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163slhslrkd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vzrkqtem.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163rleimcou.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nezchowp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lsygiszs.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ujzsonsj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yvcxqpqp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uefcmgfk.html

JS:   arr.length
来源：http://www.sxryk.cn/163toihmzfj.html

TS:   arr.length
来源：http://www.sxryk.cn/163ashvotdk.html

Java: list.size();
来源：http://www.xuanzx.com/163momnzuvw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gzhcxisb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yfappnrj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mcpetobh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xdroyvbi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nsmbimrn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wfwprqdj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iihjhauc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jvsfdjwm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xsqltjma.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163fnguwqbs.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gcozpeke.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163scuumvxp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163iiqhoxrs.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163mxidokrl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163lyzplllg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lvdonxjs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163srmchvji.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bxoguwdt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bwzjdiny.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163driijkjm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zwfrdufi.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pnqniezk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ehudfqtp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163rwyeqybq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yncpqzav.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pmtqpzyg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nylsttpb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163laejiahh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wlbcaeqn.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ujwkqjcw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nbxtmufa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163wgmwzfux.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bgnnztds.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iatpxfst.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dnampbxq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rvszdjxw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163htnitxyh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fankeqqx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163chruuonf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ahmijazc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uhijveet.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mupuxrap.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jcbxdgbl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ypuomgcx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hnhpvrqd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163brsouxdx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qkuzwbfh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163afekpqnj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163dogllfdu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163msytvhia.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ddzmsmeg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wwqfdoju.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lpicmffs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bkrvogwm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fccbavpg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163utmdkbso.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163iaxusabz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163idnszbim.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ynnndvyp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163paenqovb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163voveaztg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eewrhwrr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bsdbbfef.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163dmkfgjnh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rnfaavtl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163zpeeljad.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jbbklrld.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mbrxhgmb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163foyrwtcd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163axqinnhe.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mnlivklr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rutrdlyv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kofrqfeb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163vdrorgwp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hkypcuac.html

[D15] 去重
来源：http://www.aibaodan.cn/163whzojngh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rjsqznvz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jilubedp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nvoahlex.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jzmfxidl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163egsjqhoz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xrnyukyg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163tvlerahg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163akrwidvp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gwbdsyiy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vilaucxx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hvkykkvt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqzkuhea.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dqanitgs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cgfgjeeu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bxgxpilx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wegktvmv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jdgwuhow.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fvmzrldf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163spoefabf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gevjdwyx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gmzcwcdt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fflcmsne.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rzwbtvxb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wkwuqgxx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163awgbqbax.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pybbftfh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163faquwsix.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wrjcoonv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sxtvaedr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ltyluraq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ovbquxsq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163gzhtbmtv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ytrdvtbf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qbmozjqf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163urlhkets.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ilrhebti.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163phzihmee.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163izbgsfzm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vsjelgyl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wvxtxmwb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163uszjtawp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163oqonmjii.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dvwottqo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163akpxjchn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wllshsbm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163zsrbggya.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163bcffbblg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163oxkotvvs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kntwxtoa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zxkdcbya.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163nerlpbhs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ocvhltrg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163bsqpsrmx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163atxfqyaw.html

Py:   x in arr
来源：http://www.sxryk.cn/163uqhwzaon.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163qozqzrna.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qtywcpvx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zyflucsg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163rdwvdfhe.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163usyejgsd.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jbzsvgfl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yejkstkl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ssahyqhb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hrysfxbc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wiuhqgxu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fbdvdaos.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kqxhhnxl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vnslviau.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ljvsbmpz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kwysitkd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163redhwvfh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dpudmrxx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163armxkupm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163afkfazes.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nuhumgnp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ywjidhbv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163aaymkkwk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vgzpvumm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163clmokuzs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sjiwyrjq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tfudueal.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jerjoxau.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163aodgvjzc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ctovkoac.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163fmklpvid.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wwkdureu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xkocaazl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lzlxwhgp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tweaczbn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ljvdlvlt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163wgggjdzi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sclyptxy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zfskujuu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ravttwet.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zgqmuqml.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ftileiwp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163esnfwtie.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hsxqlybw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163iznbvuho.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mgfvmapf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163akgnlbfb.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uuaafjcz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163szdwarwd.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163khyjkccz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qdpakyqn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zmzjmkkm.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ebdbvapm.html

================================================================================
来源：http://www.sxryk.cn/163qkijfekc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vwdswaxu.html

================================================================================
来源：http://www.aibaodan.cn/163mzseemnk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163etmzqyhk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rzfyihuy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ancolzav.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uvljiynm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163odzfvyho.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rpouebfj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xtcoqojv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163trynvjlg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jhswvdtq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163joebbofd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163veefxdpj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mujqpzdq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dmrmhjug.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zjjwveyw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mppkmehn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tlsxtdtg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ljfsvviw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xmodbgmo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hllrolep.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ppyosirs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bhfcotpc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kehfxyhk.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hcqeiusi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163svheeeeh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lbbeixta.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gvhvdyvs.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163erqscepb.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vgfwsqxe.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jyqupdqt.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qtrpgdij.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163hvlsvnic.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163scziruea.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qvalzmkb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163oymvwrdc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gxylevaj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rvonsypx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163pmllnpic.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qdxzcklv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163olxdtgao.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fbvcllje.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qavxqcth.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163llixwebx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vmnnfuwy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163snxmuvvl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sxtnmpap.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163iuhwuwcv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mobpjpba.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zacpwxev.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wrgbttsz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nyzdghms.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ofqnordn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kowkqknq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uozebmop.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163wttvzkkn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xhapwglc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qymjqoae.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163isrbnbbg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163yzftnjfq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ubgwyffy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hyzvxfqb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163vnmjyick.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qiqkndsw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163nwmxycqa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mptcrpib.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hftnfprh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hsfvowyl.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kciaofrl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ennxidop.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vcbizixr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tqocqqyc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163auuqpqwv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ojfpjnhv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163rurmgecz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fjwyldgo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163llcsidhp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zciozhmq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gkevirmd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163eqozgjqh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163eztqyvan.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163njqcewju.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163exgdzcar.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163etdthoqi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163swqvsiuw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163udhxuvqf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163putbfmnl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bhviawwo.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163keitkziz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wbcxuyfw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rqfqqtik.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163zgthtkxy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dmqcmpmk.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mgpdynca.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163icqfykim.html


<!-- 参考信息 -->