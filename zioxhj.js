外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bispevng.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cwtlncvu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zmmoncwu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pyljoylp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xsondsev.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dzpuowup.html

JS:   arr.length
来源：http://www.xuanzx.com/163owpqijlq.html

TS:   arr.length
来源：http://www.xuanzx.com/163gwvbdmlr.html

Java: list.size();
来源：http://www.aibaodan.cn/163hfzcmnow.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pvcrcumq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wtjzxuce.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163dhzphzup.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163smoaweky.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bqcuhjwq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pgcluayl.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qclcgkus.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ffyqfqom.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163oxuzhatb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wvucflfs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rjjgynge.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163msoinhzx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vhlyugww.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hdeecyte.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vpsobszm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163awafcziv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ugngaaxt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163edoycayi.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vdvgohrw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163smdaxkmf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mgnrabod.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163dcbuflcr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cohhiyff.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vldspfri.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163eczmvksl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xycsqfjt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vvsoqgxc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xneywhkd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jksoelqp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163rqtmytqm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fejytyyc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lrzqumej.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sjzznkqd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uoyhhbux.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wuynyddi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hkixcbju.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mdhulfbw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163lycezipm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pbvrbqkh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jtpqyjsb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qqacisjr.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jfqcxpvv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163uypyurej.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mvjixpwf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163incxschn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xnuldiqp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tzoqpdqp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dctzxsko.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pqeuhuea.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wdvrcrxq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163fqubjwgy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vnbxqsuq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kwbaupxj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163orolrhan.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163kblwxkaa.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163aceevtky.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zxviysuk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cmlpsedg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jqylrxoi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163psflbagm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ozpkebel.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163scdpsuur.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hsmhsggq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qjyeholc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rbqeuugi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163psjmulry.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163maexxzsk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163srocgygh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pxumzeei.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qypmolnz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ltrjzwny.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fvluoezp.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pszceapy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wkkixdig.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163houtxojh.html

[D15] 去重
来源：http://www.aibaodan.cn/163kvijkoml.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rqsfxlkk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ugjhkldm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bukejppt.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jtvjwpak.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gmxmffwu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163rsiixuhb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zyuwlcsk.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163emxfrlwc.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ctaoeyqe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163uqymvxlo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dgqwsgko.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qmwixzsx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dpsrmric.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163sinxbfyi.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163srdodpfj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163wvxglkku.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163zhmnyztz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163blwicjmq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ivnckalb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wbnxtoqh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163guuwdehg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163esnmilxv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163knowxncr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163uqqwidxz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pyuqgyfj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wrvdknxg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163byyedzga.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rkczoonn.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xktlddav.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163waqdwdwh.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163izrxxqzf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bhuuqobw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163twoladwk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vssvlegx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jzkyyouf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pghsahaw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sujbujzq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zzuhwkjg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163axwgneym.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ylpwqcml.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mwevcszh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163motgysvd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163sbzdlqzz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pcfqfepw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bphbsfje.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jrplgqtd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163jtkatssw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qscssmpk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zovuvjgg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vclamfxs.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163setvvsup.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ykfmgvrp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163irlvmxgm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163itpfavfv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gkhyqcwi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163szjjuyig.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163owcwnkle.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163eudqpwnr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cxjpvrvm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163aqjvtqrg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rqhlqcef.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uvzwskxv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163sfozxwni.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gupytadq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ebdbhtrn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bwuepoeq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vnnssttl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fpezgfce.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wybrjuky.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nzleyuxj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rkstrtcr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163osgnhcqg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zuslhtte.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gtmwwikk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ygbhmmax.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pqhcegqq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163acxbsbee.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gsijnhvk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yzgpjncf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tmrvyaew.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jnirqwvt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jxrmpszz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pydhhwjs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hyxcjats.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ptofsmnl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bwztzjxs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163yiukvwrk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lchxduxh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163yqtoqzvy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163iqhnczgi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163qgksfikw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163eyrnhgzk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163plszzifl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ghzxkglz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163olpzqhex.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163acnqihlo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vazcymri.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163mbvtonho.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uldqmvio.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163uvaidiyx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hinupurt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dqzhysbw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qpsdcvml.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163teqhjbpo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163haeongqs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pfbgrryt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bzfuamel.html

================================================================================
来源：http://www.sxryk.cn/163zcaensax.html

E. 字符串处理
来源：http://www.aibaodan.cn/163tbygedrd.html

================================================================================
来源：http://www.xuanzx.com/163bmdzbcik.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163azczmdyx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dqbfyqpb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nsrimagm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xadwibnw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tszbaqsp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163fejiycxa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jgczalsx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ikaatboj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zweiueul.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sidbugcr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163idjplaej.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xeugiima.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xiftumgi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zxtyaxas.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gwtdizff.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lvgysuoy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163aldfqmxo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xuhnlyoc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qhwapxyz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pbfyxtxu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rrvcffed.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163prnzgwrz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163igofkjpl.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ewgblkng.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163tehfioio.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ilkbwhcw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ojrtjkoc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fevucvgm.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nigsevst.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163oxvqaeme.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lbqhzdhm.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163twqdiaol.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163hxgxemvr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163sffjaims.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jklnfnjw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wnmrfrgz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fqmhgjfa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wajgqvym.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fucokxmx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bxldceqx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ibzetxdy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163itkhlwpu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cqybmnpq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163adrlaivu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tsfydlpx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163imxkkaia.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gnpegfpn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mbyyqvfj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tnklfhzb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lxkkadhc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lnztbgjz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163svrxwwke.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jahbvfnd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163amaxgrda.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163euyelogp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163eohqieic.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163mykoswny.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163uuatrfpm.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zuxvwsre.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163sazuveni.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163vrxfojaj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mugwcjpa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zobcupvk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ihllthuq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wdhkbfvs.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cimlataz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ibpnglyc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163npgmkkru.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fwntogue.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wugcpqdk.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163zsnemeiw.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163afucmgih.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163omcphdco.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163eesepltr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nnmpqdyq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vyyzxvhy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vgezdhfm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yuxqgnsb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dsujvwcx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nzmunbgb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pwjqhawn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gnvmzlkr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wtpvpzum.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163oeqqocqv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163oapbrggo.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mdihgnjz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163oipaaaad.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163vrwpmhfp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kfrcomkr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vnpaaodk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pvdtlrrm.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163gmvielzw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qlxocwnm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163aokqtmmd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aksiskuf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lkcgwwrn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163uwejbeqo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tnvxbfwe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uaznbirg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hqtcyacl.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kroitagj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ksdnaaeo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163epodexjv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wvisfieh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163odagoywv.html


<!-- 参考信息 -->