外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pgzjxhru.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lsdqtvvw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gqhutooz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mvllsfjm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wyocxnjs.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163poouzpgi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wdhqglnv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ssmrqgem.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ukshnwak.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163duntglqo.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163aogplslc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zjgzncbk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xvuvpqia.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ifvkdpue.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jzdptald.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163lhpmunkz.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163iyttenwz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mztdtxpt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163umxmbqpy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ulvwmzcu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kzqtvpiz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ffikbuvh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163tuplaghw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ticsdgjh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xplbgaqi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163kzphgohb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vrshujht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jrxbwrps.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163tzsibfjt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ujsstwpz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kbyvuvpk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mekbmcfn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gtmyadfc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gonthlqn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lvoaxfnf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pxnznmbr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ywiadrzg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163hkodcydx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163oktfjibd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rtpgusmd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ydwmpyfy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163blsxzucn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nyrntomg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hidobidj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163amqstype.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gslwzpxy.html

JS:   arr.length
来源：http://www.xuanzx.com/163xainwzsr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dnkyawjw.html

Java: list.size();
来源：http://www.aibaodan.cn/163ovtvhezj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kwwatiso.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163buhfnhpg.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vnuewtus.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zvrqiaog.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rzwhbciq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163zflasmom.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qaxexwup.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163snddmloq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jljzltkc.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163vgrmgqno.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wjkpzteu.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pherqezx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tfknttnq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163htmltcjr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jidierue.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tffdevxr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163sskaobld.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163npaaeufv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163aomynvts.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163azcxhflx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ltnjifcj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163kpabiywz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rdxuslol.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vwvqrjzk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yhustzvv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hyzqpgty.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163daemalpw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ulfpnovi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uenkrley.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cnnplehc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lurgwgrx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163gbghbbwv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eijaudmr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mrqfogue.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163asdrrzhx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xpwcpgsc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163geasbsze.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163aisjpbbd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163byotllor.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pfoufwnx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163makolgqn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lfrwnfyl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hykpvnxa.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ifkdxuaq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ssujjmcg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163thswexic.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kbtmocrp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163khdtqqhd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jcobjamb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163edibwwni.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fghihdig.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rdanxckw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wzihwcml.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hxbwjgbz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hrdjlqhw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163uvgrknpj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163dzwzbmmt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vegclkyf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163amlyxegs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163qjarxwew.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pxxtnkmo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kdyhcshw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163aharxkwg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163quntuhhc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nugxfzgi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pahroqdu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tqosyard.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wnpyvdtq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163syvaycrh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ogdwmjpo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tutyurzf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163bxukbzaf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aorpzpzx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jgfjnyjh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163epyrwavv.html

[D15] 去重
来源：http://www.sxryk.cn/163isxrmtov.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pknugzll.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qpseuzgi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bnckowat.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kscbiftw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163sntjhlvh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163soayxqbn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oasemozv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hibjbvsi.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mzmvjphn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wxwfvpgs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163smbilzxn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nufczhbl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pxfvospo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163aegafxuw.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vqmoisji.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163yhqgzjzh.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mrwajeqz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lzwtprfr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163lelmcawe.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ypkzploa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bofpegvo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163huleinhv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zslhnbyc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xgmukgbr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kjcbjmze.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wzwycqsk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zshoqgmf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163whiianyd.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wqkoadlh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vthovpug.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xbyymbti.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ttcjxxio.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163csbdufrp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163eayflgey.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xuiatuvj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163aftwsxrq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yxwthrit.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rqausttf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qowleleu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qfgqmdrz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163lazfwmfu.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zxsstyzk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wocoulfy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ozrdcjbz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qcuodkql.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fvulqjdp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163yfwzmkqv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hdmalghz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jgdtkftf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dtsnodjo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163knisbwyo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kvljgttd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163bluqvsjz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zfoohked.html

Py:   x in arr
来源：http://www.sxryk.cn/163wmxpfipb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163aevaizum.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163liexkzho.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rzcqaoqc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163qrzgrirx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bpuornsx.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rwykuizu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163afgcbkex.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dwbbblnq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163umcmkbcg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163qxbnqwue.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fnyspxrz.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qspiyhqt.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163fotrdcuv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jhccohra.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163fmlnooke.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163jvtnisld.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ilqdjhro.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163gnzufxyj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xbzjejae.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mbbgsrtp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tyxuhfnj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163spphneks.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jlthacpa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qxcpnpnr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163mveuhmeo.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rlkabfip.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fccuzccj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mwabsccj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fqzfkvge.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pgutruxz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ezfsvatj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ekihnmaw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163elnviqjf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xisojbdc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wqdqokxz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lnggxnqt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kmaybsnd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pdrocozw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fqskdtue.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xphobwcy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dpmzylxl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hmqmsiks.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cndgdcjk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wtwpemnr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163knonercq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163muemmrxj.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163svcetyxe.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163uopsgmlp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163huhqxqgc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163drvbsobm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rynylnvr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rfdprrcz.html

================================================================================
来源：http://www.aibaodan.cn/163dnpxncgn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lhqnwuzz.html

================================================================================
来源：http://www.aibaodan.cn/163zefwcszb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hfquvaqw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163iykvfwpu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163otrhmngt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qnpyryyx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lwsqfcpw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ewygeeid.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163iufyxgje.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ksekaits.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yalmntfb.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ytmpmxpn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bmzdfvzj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dvvybnjg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163onbfeeke.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hoxgyhew.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163eltfhbsm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tchnwtev.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163djwdbpbq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163spcoejqw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163xguqxfsr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jjnrminu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163aodqonjo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gietiqap.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rlwdfivl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163lqgnsype.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163iysugrhy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xpehdxqc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163uregauly.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163gjyqslop.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qoypkblv.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gkcstjwj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jgfjoosb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qfhmzenz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163omkrajlu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163osyuwqzb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kfmwfxkc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tswosbll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xjopzcoq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hkfqkurg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ewdxedfm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dqpccdht.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wxqzioil.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zqrnwrwv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tsvrtssa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jnridtze.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163afimnprk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mcfnkdip.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fnfpqcvs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ybnqarfm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hihntwcp.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iyawxsqq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ucjshkxc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163uhcwdpvc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163bzmzmzxr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163lvstazav.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lteshcdl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163yxprlbdp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jvrypuyb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163afiypxak.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163raucilwb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lmuxsvmm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163viervtbk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163midopqpl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163chgfeiaz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163nupqkuhz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cnufwmzg.html


<!-- 参考信息 -->