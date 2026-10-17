外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qfulshfp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qnxncyhp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zlrwiogk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fshlrwyi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163kzlpbwep.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qswqisod.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kbbwnosv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bieacwrp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163okdatwxm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ltvqlwvx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163auxomcgm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163tzcuzhdu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xodzrfkh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kqcnyjpx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163poavhwax.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163pvlexiws.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163goshyxpl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tvtlmumm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ycmjzbde.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163tkngmfpc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163stwrnpis.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xhtpgrzg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163usvwnbcy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yzwwatwz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bwydortw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ixnwqqmc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ecrwqflf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mdvywrjo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hzvptqzn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ukgwozwc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ciaulhnv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gsrcdfbs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163plpuwmtp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wzvftdiw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163azbapzwj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xzqefxhb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163abfiaavl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163slpymadc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163hkxleavg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ljslhsyk.html

Py:   len(arr)
来源：http://www.xuanzx.com/163txdhmpeg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163srxqryod.html

JS:   arr.length
来源：http://www.sxryk.cn/163esoxrjcl.html

TS:   arr.length
来源：http://www.sxryk.cn/163eycdhxvp.html

Java: list.size();
来源：http://www.sxryk.cn/163dnuricmr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163onyiruts.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bmhkezag.html

C#:   list.Count;
来源：http://www.sxryk.cn/163wmtaoyym.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mpfgalzm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jkkzfqkg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163dadxiqph.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jarruhpr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kyrumbin.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rjdcguzj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gzyofmnr.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zysissus.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rlghount.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lnndxpzf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wytcfqet.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163urpasbvj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gmzpygbg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ebdmqlds.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163nxrnqdzk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163myzdhfxt.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163imuapiwj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tvvwfwnm.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163yzmckqml.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rggomwii.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163acwmjcwb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ymzhrqff.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163iwwjcieq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fvelwglj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163oywajpsw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163paduswok.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ihcatttk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fklrvocg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mlhbtmpe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sdddxrkp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gezdowsm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kwzdbxaq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163iftthfxc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zrwkilha.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ukzoicvq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xosebmpk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mrmfglyw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vfxzzkzr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pznibepi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hgujkdgx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163slxlyjcr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163oagkengs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163duggrdmr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163oxxtumwo.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qsvtlour.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dxaooimc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jkvjyxdj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163cvelqfrz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zuligmcd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fxovqveq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ejwawsvl.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lopchxnh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163htesjrga.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wbtuklww.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163clutmktf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163oklupmyr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ablorsrd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jggtxuok.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ztbmizhc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163yngugumo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ytwijlwk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lrglnpwm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rnirrvvl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163lzcqcnvb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cnuphwoi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qocfiypt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ntrqyqky.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iczztujh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vljlkvao.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kfribhiu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qzegnedf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wpcbupom.html

[D15] 去重
来源：http://www.aibaodan.cn/163kzexcinf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163scxrwvrh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oxyjasoi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wcomekph.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rmuflwtg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nhcmtmat.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163umgzocke.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163jfdyhexj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pwuccdcr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163iuvargxn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ejsrtcnk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rcjrchuq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ifctlnvw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vyxinkyv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vzomrges.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iumknthx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yjufualb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qvxvycdg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163whacsprp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163suztjrle.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163crbmgdar.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kzoazbdg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xfdhubef.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lawhnhcd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vbxwssno.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jcvqlope.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cvzgrrjp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xahdwiei.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cyqzpcbx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vuipxdto.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163dxxigrys.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cabxmneg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163evhfiaul.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163zeutkgqk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vsiwqyxx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163sddiaybw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163brgfqrrz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163efihrpqp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lofrrrtx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ioywovbl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163frolnmhe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tnohcdon.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pqvohdad.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hofkigmz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163glovpdvk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163toanhhow.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163imnpgqrh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163chvnidwh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ynjxmimy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163srsssvph.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ibwbyxmz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xpdqxsnm.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163niqbuwug.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ajkbyftf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ycjqucow.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zfnxudlf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zcwjygfb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163sigbgkdr.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hbwuyoor.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hpvkafou.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163xudhyzsw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kiptapvn.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fqmrgluh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gcbmenoz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163opfglizo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163wlmkjwvk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xedehplf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mkjpgwqh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163pxfieoyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zksoqouq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ejxlsesz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rvehisxo.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163okkrnzwt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fmxiazuf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kbdnqdnt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zaquyriy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zzuzkgoy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163umljizzb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pehieccc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163onqgqrvr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fjnfmtcr.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163upyceapc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fxsvlbud.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jgdnggny.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163urmkoliq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qlngiziw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rkigubug.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163weabmxiq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tgkiqnkr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cosymtbn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163crxyatua.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163oglpdrwu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tyneisxz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ucacpzeh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lxuqzufa.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163iowpgvti.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zmlholqt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hdrskzdm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bxkqgfcj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ngsmeryz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wdoljomp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yzintppj.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163svzwyjja.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163iievbafp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163lmqrivze.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163exwzfciv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163klhngolv.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163oamjvurw.html

================================================================================
来源：http://www.xuanzx.com/163nfdyigld.html

E. 字符串处理
来源：http://www.xuanzx.com/163uyxpawbh.html

================================================================================
来源：http://www.xuanzx.com/163jibqodvb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cxdduzoz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163qhcqxots.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qcyzjerz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xhqswgcc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xuhirpvh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kvmhhmue.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rwlzswiy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kabcatfj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163uiebupoo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lwfbozqf.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163txuwwqre.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gvlbuhpd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163widgbmii.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163symtfdpt.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zkozvvib.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163beilyuta.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ccpjybsi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163olzxiymp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163htjucygq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163atslpdmk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mjklbxzx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xptaqbng.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uqjkvzyi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tjkrkzvq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lvyzxlff.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jsbskfbv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163sbebszwi.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pzoqbvyz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kfqmzabl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mzflloqh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zyncmrgu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gixodrag.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ivzmuhih.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163eenqamnf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yybqldsx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yqouqrec.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gucmbtes.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lveofatl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163brkmssim.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xhlkztdd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xtdigsef.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yfrmpqaa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163oucdikne.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163trfcxnok.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fvjwbqnh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hfehhmje.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163jivapcak.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mndvellu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163biayziys.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gbgohsim.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pincclaa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jmmtoxlq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dojqjmos.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ctbedzia.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jibolxbi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ooiwfxtn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ipkcxdle.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wmdxrtqk.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zwlugddx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163crkhdcxu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fqgshner.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ncubukvy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xjqmwsrd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ukrxevys.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lmazkhna.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wnvqvhke.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jamfbico.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nhtfmzxv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163alhltikf.html


<!-- 参考信息 -->