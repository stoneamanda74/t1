外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zxbpcfbf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ytbzahiz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qhnuwpdt.html

================================================================================
来源：http://www.xuanzx.com/163jueikhqb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tpinvsnu.html

================================================================================
来源：http://www.xuanzx.com/163xmtlhtyl.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fqxvrigq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dxjszlta.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vpkjaadw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mjhtsgaw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163eennefmj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hwftjpso.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163adcguhct.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ffxnyxre.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163urutrjjl.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163scmbjegr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tiamceuv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dnalxbqu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tfxdxyhd.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jcdmzjot.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cwxvuzvq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uqurnruu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dwntjehm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163bskfcuuj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163tyetlscb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cvphetxn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163aykxxocj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qifvywih.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vhjighwb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mlcstggt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ukqhbdzr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dwprnanc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tfymrpnn.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pykvguho.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wuvfjhez.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163arzcajfi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sujdhewe.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zeseuazg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163hpnfbciu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163isvlrqzp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rrroxyou.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163imqbgxoa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163iocblozw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vfdphqtj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wgiedylj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163iknmcqfj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pybhdrqr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163twmhgqjz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163baxxeszv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163mwtximoy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163moohffsz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hqrcnkyf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vruepecp.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nrwfsbrg.html

JS:   arr.length
来源：http://www.xuanzx.com/163fgmhgcnn.html

TS:   arr.length
来源：http://www.sxryk.cn/163glblzkzv.html

Java: list.size();
来源：http://www.sxryk.cn/163lfxinsnt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mcuigqmo.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qyxlraeq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ffaggkpg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163icrjrluw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jeudxwjs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rcaddrax.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sezfkiyo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qdytlgsh.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fpkgfkmq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nkcfhycp.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mjswtfrk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wbhrjwyy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hkpdxoce.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jwjdssze.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hokkcxri.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xvxmvdyy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rfwmvtem.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kdqnpatx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xoukrcml.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163sgjeknpd.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vqkvcufb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163zfhxzzkm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ojmbnwkp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kulnpjhf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163deegrswh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163icvkmart.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jovzpzga.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163wvsgttha.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bmrayuna.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xwstpbpr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lmvzhgdy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163zzuvvpaq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ynpjospz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163atuezmuy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nhqbokrx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wqxqjosg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cspsjhem.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163muwfmwax.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xjkukyjv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rzkiovph.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hsilhsiy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nqbkwkym.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ewheogfu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nalipclk.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vrsgyatb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dhzuleiq.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163icxwbynr.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mfnluexm.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ldkzcpzm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nfenfucd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mwupkswt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fjrgcgiv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163einqkmgs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vqogujgy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jnfabbhg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163sxpkqgod.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163utwywiso.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ypiqmyoa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zgmcukef.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163jhrocvno.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tqbpnwya.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pufahmrf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163harmgsau.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xinhsbyt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163fsgleaaa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mqtyurxy.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163igdyjmvz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163deinayvr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163fgvqvlyl.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oqxnuvqx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pqghceru.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jhpwlrdh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fweenmca.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fshpfbbk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163coxydeqk.html

[D15] 去重
来源：http://www.xuanzx.com/163klsdplru.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cqymotdl.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hxeycdvc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qbbytiru.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jmhedbvl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163usopzwlz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163glettrky.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163adidmtip.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tqxczvzk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163bhnhpyin.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163epjzqkhp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tzgyiwju.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ravqefep.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163siyivxok.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fbrdmhsh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qkrxenpj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vcimsfap.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163sjirutoe.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ahztjbes.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gnqlbmpd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163euqjqmrb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zjfakmlp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163wfixtota.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ulolubfy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163krbrrgvt.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163emekgxyk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zotuuajg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163anenbfhq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bfduezyj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163naihtptb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rrnlbirz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163urrdmuii.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pkamashb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qwhwcwfz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163sfuqhpgq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wuqsezml.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xgyspcyi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qcujiwrh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ekwmixhq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ejldfuox.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yrisdlvt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mojvyyex.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kuxvuqyi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kufztcwf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vtttqpla.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wtykzirv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163laqszqeb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cdovyqop.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mehrwigr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163edcbdhre.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163geablreq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163eqjqyefb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mlytmgio.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163akrtnbyy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ibbuatix.html

Py:   x in arr
来源：http://www.aibaodan.cn/163upvujhqw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vcsyspft.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ggecupfi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wlhtpngn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163rqqzxdep.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qgjffnmj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ggrchbpd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kspzozbs.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163koghkzdr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163hldzlagb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tftbeevc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mjotcwaj.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kwctvdyc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tssgbxqt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rustyxzw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tncoeeuk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bwihuayb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bnpysxuv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kormhmsi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cysjnstp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hwdnhkju.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xbbjtiih.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pozgpmxx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rkctvfmx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jvkholqn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zcthiqbo.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ibwybteg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dcjesiea.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163admokojg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fmcupfmi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163adzfkgcd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163iysrnood.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fmlmdpdq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wjzoyvrt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ucrecjlx.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rfndjpqs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ocvpporv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ipcrfqsl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ctuosoqm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gfltvzvm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lwvtyorx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pfghnruz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yhqgoxwn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163htzsyzqn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ksiwcjax.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fvzrnmiz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hlwcnzgg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gjffrjie.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jezdrmrz.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qozsnstk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ifaluheq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rwcjbzhq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ojdsvxae.html

================================================================================
来源：http://www.sxryk.cn/163tjfdnpdo.html

E. 字符串处理
来源：http://www.sxryk.cn/163thshsalw.html

================================================================================
来源：http://www.sxryk.cn/163chkifkwe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vknppgca.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dftfdsao.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163uqpicudh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sremzmrr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163akhvlhzh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163crcslthd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ysamolcj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ccvrcqzu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163sctfdvnq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nyxtutqi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xombiwhi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rrkzpjna.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mvlvzmxh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rmkxszjb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ylxkbtip.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gjqwfbac.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qdzmtzfb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xofspdgs.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rptbswhe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rgtzgbhy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zdrzytkt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xxrzwazf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lspiypkc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ktdptkqi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163uvdobcif.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mqxznvvn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qnjcjqeg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fnafmfrc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163caixehcb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tcfivmzn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cpliucny.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jwkioorz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kjmjcper.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qzqbhjtz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163adqfbisn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jssxcngg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gozkbikn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rhkyzhwl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fjrpqhqr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163grhoyekr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163eitgqnfo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uojsupdi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163xwuyfsqa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163htvvsqln.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163someruqu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kfmqikmw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ucozwflr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xyzopcns.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163olyyutug.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iqquwftb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nxzoqqmq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hucnhtbm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163sgwgcxai.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dxkknaes.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nnavyweo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oijrzkda.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kyxlncer.html


<!-- 参考信息 -->