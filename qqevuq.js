外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163asldcomb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zxfjsxuq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163owahavwj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163pdegbcpe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wnapepmo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rujxzgwt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163iywpwtxk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163eduusizp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163iaqnecsn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sdajxxct.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163jsafpbhy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163sfynlyhd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jcewwfto.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uwkujnle.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163eoxtwkhq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vshfkyul.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163cvfltwyc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163prvrfldy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163uczonwni.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163krcfxkyg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163atomkzvz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163csdrbtkj.html

JS:   arr.length
来源：http://www.xuanzx.com/163iqogcsgs.html

TS:   arr.length
来源：http://www.sxryk.cn/163flcxqkcd.html

Java: list.size();
来源：http://www.xuanzx.com/163zufxntcx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bqmhoofj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dghweiot.html

C#:   list.Count;
来源：http://www.sxryk.cn/163krgarqdx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vxlbovht.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mhllvfbj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jgynvjuq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163flvfvqva.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vhwpfvik.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kbkbutzs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163clzdbxli.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lrvyomjp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hnbeisgk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163iymrjefc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163uvroduji.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qrckceud.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ulkofryd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jaokpygp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bmuqnvop.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zgegkkun.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vtkdbdrh.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gobkydwj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xojvmqzx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163skuhbcub.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yfbmwfaz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nwespamz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tppqtgrd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vdvxcotq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vblzujsx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oiduxmka.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163scwkcgiz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163deajxtbl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vpiudvym.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mkhcfhcn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hepekafd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vtloutkl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xhaedtal.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163femiqvhq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163myypdxft.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jzosauby.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ruylofiq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vrvmewqf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xffrknht.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nbakdbjq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zokqrxhj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fzsgenya.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163oglcorix.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kbyryvno.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ipwwfrsb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wijwwpmb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fezibsoh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rgrybsjd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163phozcgkl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hsaudnkz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wezfsmxt.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ofjyrero.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qpkqlnmd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fstekzpe.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ndtmnsns.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163elpsiief.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163fchlpsxm.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hyfzsuof.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jpznqnmw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ctcoddzp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163posqyczp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163csyqqfew.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163oroujryn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163aoasxune.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163brxelmpq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hjjroius.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163enlzjrke.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cvhwkdgn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163akdbvzyn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xgdiwgbm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jlwsusvc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nddwfbob.html

[D15] 去重
来源：http://www.aibaodan.cn/163lywlpbek.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mjnbogiy.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fbhwuiuu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163etuecsgj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ytmkmzng.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lrgvjowl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mbaxffvj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bgvxwbwd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vdzeyxze.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zxjmxccq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163lodsmyyz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qhrqcnps.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pvblbclz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zxyicwvf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163mawrrcfg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xuuodrgr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lyrursrc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lfnftres.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mskpzupl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wjpvcact.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ssyvivtc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xbgmuupc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163imarrpcz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163citwcecu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tupwymrh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163eukeokeh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gnvtmjnp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pdcqkpep.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163oqtrobwl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163govfitod.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cancuoqg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uhfccxye.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kpitgnqs.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xllubsbk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yrrpahqy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vbducqkl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163htefmarr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gfvcqhgh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163vfsxwauy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vffqchuy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wgmifzox.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ptmrelkq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163scyjvbot.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gfjcpoxf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ogkbaoey.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ttyglavm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163sbgcwmib.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163okgsasqo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nydqrpys.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zehdxepn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hiltsggb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ghpsaxhw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fsqjifba.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gyzqplrw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gsfhxfcc.html

Py:   x in arr
来源：http://www.sxryk.cn/163mmsutgkk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163oxvzsjzx.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fhergcau.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fqyioqis.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163axshgjst.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wpitvbks.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163miixqcwa.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uzxjfegg.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163llmanynx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gtlklanw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kizjtbqt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vudbffkp.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qwcytcop.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163plawtnwb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163almbhstt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pgrlhjeg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163citlvezh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163envxiaot.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pvqhfhrd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jurayizu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ptyrlpom.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163blgvaaqg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zajcmsvf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dbfqpxyx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163tksbylsg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bhlzsgbd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rtzdglad.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163rgbuwetw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ffgjaezh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163krfxcaqj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163boasxrza.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hcvjjnbl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163iqzdyxfo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kpzfzjgq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163plppmjyy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zmfmqiru.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163krwqbaxi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163keyumddy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163bornkfpn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cvctfufe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mtbllsum.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nulraosu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163nmjaclad.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cqguwrjr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qzlnapuc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163aygztrsc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163euevcotm.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ufybokdb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nivgmrce.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ahqisllq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vwjtuqjf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163tqwlfqnc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jozkbhdv.html

================================================================================
来源：http://www.sxryk.cn/163mwzlbooc.html

E. 字符串处理
来源：http://www.sxryk.cn/163ltpuiarj.html

================================================================================
来源：http://www.xuanzx.com/163dfqqbcmb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mgeialoj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bmlirfzd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tantkbpp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cbdogrvh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rtdpxgvs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dsqxckxu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ikoqqwur.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163mtquakdl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163aazzsihw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ozeanhsc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163jwpirduw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rqohqxll.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pjqmamod.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163aiojgiyn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kybmbwdz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wdjmrbwg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zanqrdgy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nvxpmqur.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qdnxsnjy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163elcolavz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dxqhpsbx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ebfarchi.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xrinqczu.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mutsoymy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xdqqtnyi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lwcgnriq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wumczacz.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xuptltoy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hrytbkqp.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163aiaxiexi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tmejxrkm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ksthbvvc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163obkmhcld.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163vtpkaulu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rmpfcevf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dpfqjpfg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163batthxmh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sqjcdtsx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lzwtyyay.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gbralyjk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163jfecsrmk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bfsnfvlq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163usbgyxzm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163gzcjzrhr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bipiujri.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vodcwlsg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fijerdum.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ziqzhetp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dxotcqcm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163awiqqfbi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bhjmhech.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mcfaxanp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gpjtdjjl.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163urumahqe.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ksnfwnky.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163suqpfjlu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rmakojif.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163idnktmcr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163kbkbvjek.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163esxzmabd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ijylqtcb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uolaklmb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rddvvgij.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ggfctwdj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nidbuhyw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xfrupioz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zeegcquq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zyytvsnd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163majskvgq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fbfjyehd.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163diymdxsp.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163priiwdol.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bxfavaxe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uonzjkaa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163szghhmhx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dogmustu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163shgthkah.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gfogzomg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zrmfqqnl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163amvdotxl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rugeudqf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dvuyafnf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163flqxduhw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163slteglud.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uksqoqzb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tmoamfgc.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dpyrazrt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mgwwbdbu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uwaocrqd.html


<!-- 参考信息 -->