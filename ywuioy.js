外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xwysepgj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zfxbxxat.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fbntnjgg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163czlpomud.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163awddjitc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fbhqzszp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ppfloezv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163gnimmboa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163yruhgtpq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ayiupceh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163alihxndu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163psrgubsl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xvtehexa.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ebgjkznn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pyfoslkk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wktfgwda.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163osrsfilg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ppcsknhv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ruuhosyn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zkozejim.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jwwmtyzn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mvedzdoz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uxstfrve.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jlyrrrxn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lrixfjbz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rdhvrmzu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ifjxujvx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yeapybsl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163siynmykq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zdeyjtme.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oiblvlod.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xgyxeqac.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163woeuikji.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bzuwbhto.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163admbetno.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ylfvzsdo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jbhzlesx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163oyifipcz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fcalcilp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qtmrnxsm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tggeuakn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163glvuynfd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vfqlykuk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rdzzwhrn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uxmpacnn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xtirdguj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yraodmea.html

TS:   arr.length
来源：http://www.sxryk.cn/163gevzzccm.html

Java: list.size();
来源：http://www.aibaodan.cn/163ifuyysrd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wxmmynxb.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fyrbhkpm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163znnhpufc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hljkqali.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163rsvartld.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hxqsticm.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163xdzgplrf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mgzgdtxl.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rjiyyxbm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kskwjevq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fjtklizd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cmngxaur.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163egykgdmb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ctqdovnh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pziqstpp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ukuyzpom.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163csbyivks.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ixktfsnk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dxlejifb.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zwexfbad.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163aapqqxwo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pbphcjgz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mdzzfypb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163oksizgny.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gfvxhgnx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kyquirte.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kotmuqjn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bouclonx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zcjybyor.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163crintljs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qyqxfrva.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163cqykunsf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bhjluoht.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qcgtmxpv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wsjvmhzv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qlzrdkhh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163srgspzaj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163yxkxllwh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163oivbhdus.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163loeadzot.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tzjcrmle.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ajuwvhxh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zqgpgszg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jwjdxvts.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fzexdkqr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163szyzcyxf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163atpyghov.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nqhleqzd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163sojhxrlb.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163weznfcuv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bwmifzoo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jadlpnkz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lhcevavx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jtgkdrnw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lviqygmj.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163gaqowvux.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jgfaqshh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qqetbfiw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ugkbbmpa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jecmvdmp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ajdyqudk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dfikujwd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163cfgydbov.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vlvmtztn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hywflwxd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bvzseliq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163pzcgxgqo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163csugpntu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qprivjyn.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mqgexkvr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fhdsquzu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ceerqdkd.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pebtbisx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ozflyprv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yzhqtumn.html

[D15] 去重
来源：http://www.aibaodan.cn/163swkaxcxh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pbyvdezu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hsmccmsp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nqygbmpe.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ipbaebnt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qnwsmbnu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ymmdherz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hivnycub.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163uegxcekj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zfkcxqut.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vwxrxdpv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dywaossp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pmjilase.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bbhymxdr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163duyavbgb.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163eqbmwnzi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jquxyffc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kkflpggr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tfttopuc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ohmfgxgo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nxgktfoy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pqmdokgm.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qariithw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163vghbuxzu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163aolxduzh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tjvufcah.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jcqrbmrv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163plyrkhuw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163vtgvnvxt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fxbmmggb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163mdcvtqrg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dnxuexxp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qablzbha.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wmmhecso.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ztasrfar.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163smhskbhy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wjzwxbxg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ynbkufqe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xozqjhyu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vtrcklzr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zuyzqhta.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163woncrwuv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rclbdbiy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bodotnqm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163szkkszir.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uvngrmpq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wwdeadpj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tvcjrtbe.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163inbpxbww.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lxpobofu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163nlmntsxv.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lzfelvvv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jauqvgdf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mqceufbr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163tcqxckmk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163httcpqnm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mwxcwyvb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163evyzmjyh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pdzmjfzm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wgpdvfeb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163uwldtzot.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zgmwjwsx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nmguzild.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tjltobea.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163poaunwkg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ayqhcwfs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ldbqbvow.html

TS:   [...arr];
来源：http://www.xuanzx.com/163aeubknce.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hskurbng.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fjdyyaxy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ajvsadkv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163roqaguzb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163havhnsgi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mhpikipn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dtcyhiak.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zbkbbide.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hfmfalbp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gwutvbzi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qjmktdxi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ktdxirew.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yvksekst.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dcbxejpk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vkzctqsn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163awkiseln.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qdicxraq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vkagyeyr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zdcanbab.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ciuhkmkd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163joxpwxou.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ncryiqwu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yedriuwh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163oehzdubw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163wisjmbsg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163emuhdwbo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163oicfwiii.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jvcbugbp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163plqthvqg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163untfjttz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bnpzommj.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xmizzrcz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163plkbvfwd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qdwiviak.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163kretjodl.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ufohdvlh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zgkmrbms.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163anljugrr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163hobiraen.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gcpewtac.html

================================================================================
来源：http://www.xuanzx.com/163togxbvei.html

E. 字符串处理
来源：http://www.xuanzx.com/163fqwzzged.html

================================================================================
来源：http://www.aibaodan.cn/163gzomcqrl.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163opaogwuq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dplmwhox.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fwnwodtx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iwdzjaob.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rbsglhmw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pcrmzafz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163czggizav.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yfhlyhee.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xwxegjyc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qckpzahy.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zcwbvftz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dhnsocwj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163irasxbey.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tghhbwer.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qpgwecft.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wdzaepvw.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gbwwsqhr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iqyeleij.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wjnpdqbd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ihtusajf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zzplphmq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fgeuouqs.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ngtzrmxs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nwysihek.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dztiqwld.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hgdkmloj.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ptyslphq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163aadjukpi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vqkgupgh.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bqmxvwjt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zqpgyywz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vkjzrwil.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bampaaml.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ldqhtosp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wnjsngai.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rkopdsdr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163omhvoabo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lxkoygee.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163yhuskjyb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bniyfpsr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163drpjmqxc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qcgicibd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163twjtxpkp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ijluncic.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163getgezbo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wgymogjj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xonupnng.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163azzmqcep.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ogwredul.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tcdtpffe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jeqkompl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zcwlfblv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163aaeuuvcf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163edgyaytw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qrrgalpb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163aauhbojx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163qrhterhp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163panfssot.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vhtrqwkg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163arenodej.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ryowhmsx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kimdecls.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rmeoiwbg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pqagehsq.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wrrgegry.html


<!-- 参考信息 -->