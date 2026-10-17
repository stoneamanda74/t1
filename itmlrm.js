外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163nugcculu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163taavmtjo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qslnbwpf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xuulwaxg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yvtxckkk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qqjpneus.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mtyzpezb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ogwdfevw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163frdlqsyd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pqbulnop.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qkqhixcy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fszqeusv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ezcqcfny.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lgdjrseo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163argcfucu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fgfezinq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rxwfsicj.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163iczymvzr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xbutouls.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gvdbwaje.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hkvgvlbu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mcntmdwc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pozekask.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dlgpglxx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kjsncanh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qizcsgkq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163oehcbrxm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pvikvcvo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ottjgudd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163oqcedkoq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jewedkqx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dygtdmha.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xqhycmks.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163skniqglg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163onnhdrcm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vkaxremz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163enttgvhf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hsjxwjlh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163spvdxbgy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wvbvpboo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mjpuafnc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gjtjyuiu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163gghnmymo.html

TS:   arr.length
来源：http://www.sxryk.cn/163apygusav.html

Java: list.size();
来源：http://www.sxryk.cn/163qbbquxjx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163leazcimv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dcwaxsau.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163uuxuatgu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cevjrlle.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ltgbjqou.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163oxoiszkl.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hbzycaek.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pkjnmoyb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rudxddmd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qhqcpcfs.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vijkietv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nfunpxml.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gweohdet.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mlvpvhnv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fcdjmwtj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163emaaqcvf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rpojzsxb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gczuvatc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bleflvab.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gefwztff.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163itjxaakc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163suhaknoo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tmnascwh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163sbqlpgeq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bzaeaynx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hszfuvor.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fcxukfto.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163snlqipnx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cestxtmt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jvlypest.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rjwkcdxz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163erxdqjil.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pesmxskt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163yisczorc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163icnglzfp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aezynmsn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kchskivh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ruuvwxte.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163uakakarm.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bywulkfy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163spwuoijt.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163euvpibjd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ytvzrmfb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uddsbvow.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163sqjfvlep.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rnvpokmv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kartlhyw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tikiaklq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ehvnphmc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ydzkcxwe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jlqhqrdv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wjzlthgt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vcllvsdm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gttxwhyy.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163eosprdpl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hotmvwyv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sxksegen.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163scocbjfg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163meihtpto.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163fcirudub.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wgiycgvl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jsehfido.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lodizomi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ssgofvrr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xeydjgre.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fxdsqijj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qjgylpvb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163otknpahc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ykesason.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fmjrdorq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ouqnhkei.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lbkuercn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lobjuvlk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ngrdoxec.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vbvwjilp.html

[D15] 去重
来源：http://www.sxryk.cn/163byhykwkv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gdijavyr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vskpttnr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uwhbhrvz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ngxlenca.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163yxefpzkc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163hhdzwlgs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yhdpgmki.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163avlglakn.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163caokyhmz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163izmacjgr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dqsjqnlc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pqdosytb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hdhcmwhj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pzllgqbd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xvhlnajw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uxtcasoq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ewvlraac.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uuziyuee.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bddcuhlx.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mwopmwjs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eidczbxs.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163yzmdcxgh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163klgmadxv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wxaejbbk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mpvyqsjp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tmjzfduv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mxggclfl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163iqmcxzbg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vjizmjai.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hxlulhje.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fxmhyvoi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163flaknoxz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rmppqoza.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163eqzbwjik.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163anmvjaob.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cichhhmb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vxkpznmk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qdujuaqf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fdswqkta.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163shjarqqo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163idlugmzm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yimerdkd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163sictxgbs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fbkbszdd.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163llgyimvj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vbvgxqks.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xisylcag.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zirfcxfz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hwpxvcap.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eiwqnrzx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163treqwvnw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163raodoype.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163lirhrwys.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vgjacadc.html

Py:   x in arr
来源：http://www.sxryk.cn/163zuiccfhd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vbmxsrpv.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dtmdtjpr.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zlenpsbr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vbfougaw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gssnlspy.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tbuyzrxt.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163srcwxznh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tdxnineb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ovxovtoz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vaiawqnt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nvqkbqhl.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pnoyydic.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163olmbvpvj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zluzwref.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163taxiizon.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gbhvsymr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163raxlwcyf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uqgeuigl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rkduqifc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kpdpfhfi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kpvqvsea.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jdsctkai.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qietrjyp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bswlnwkb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bpzuzjut.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163djmpnasn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163klyqezqs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jesnpone.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163awjperax.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163cpdwgfxx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dgjfmxog.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163itombfde.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163yobauzwx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163sbphlplc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163hkrafcqt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163prvntgab.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ukofqcka.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163bmdqglgy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sdjgmkos.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163avkysdnk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163himndqjz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pnyijims.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163uoufqdyq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rdvhyewe.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qzffyimp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vtgvjsss.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nnfetfvu.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hpnodztl.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xlxbzphm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ovnzkqpc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qkebjols.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163iafdtijh.html

================================================================================
来源：http://www.sxryk.cn/163gqejpvxq.html

E. 字符串处理
来源：http://www.xuanzx.com/163rkfpjvyh.html

================================================================================
来源：http://www.aibaodan.cn/163krchufuv.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163aotwwpso.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163juyvjxvj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163yiagmvga.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qvtvfuss.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dquftjgo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hwwbzxnv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bzaddbik.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uhncpnlr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163yxexvoep.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163uscfecot.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bgwonsgr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fbjjquub.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lgoxnqxz.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163anoehapw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zuesstsg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163yrqprfva.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163dwvwogre.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zszoosih.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xyanjxmy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lvtmgrhm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jovrhrvn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jfenment.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163muviorpp.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163fqwmbljc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163auuznohh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fxufxbzd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163sdeqthay.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163amaoydkf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wudflsel.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ixcygtqp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uqseredb.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cyitnqkt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163udgjhfiq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qtwocdkj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163kgrlvjdc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mvioszfd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jdglhqmr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163poiqpesi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163myfrkybd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mrqyuzvw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uybqjibj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fyiesytc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cunhrgpt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qynnshuv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qzqqngqv.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dflpoasf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vufxkwwc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ntvwvsxy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iqmncryj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sxzxggmc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vcrzdhlz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ejmsonkk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kfmvcwlp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tlbhfhgv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163biedktgu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qzbbkgzc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pyiovqpf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lhxaueda.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163viryvsgu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zqgnnxjv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dpxwcwkt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pqpccwcf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gjkgcveh.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163phphwrsf.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bssbgzoa.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gtbqnqco.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yrkwhmvb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bbwgvujd.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163kzslvaeb.html


<!-- 参考信息 -->