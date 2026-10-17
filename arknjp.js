外链999!wailian999！

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163edgsnckd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163iakhxevf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163eggbcwqe.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163znldkadl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mxyvilgm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nseshhyq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zamvmyli.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lkubjhez.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cuovnsvs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rpidxxlt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lzoaaouk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163lrwkbvws.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xjsduzro.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cbmbnnoc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yzyonzax.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zdjstpqy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qfamplgz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gykdruty.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rqodtktk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vifktelj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xynrpfop.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bixtbbnx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mwkzfijb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163voxmmlld.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kqskamfp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uyldlriv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163udsjakdd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tdempolx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qzemrfdd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oduoawvt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dtvkdedz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ugkffydw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xsriiaoe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mjkqaktd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zjeecyry.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vteaduan.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mhbpspee.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tpczrcnz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163caxrufeh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tfidyrlc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fumnafys.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qdfckiie.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ijrevrnb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gajrbakz.html

Java: list.size();
来源：http://www.sxryk.cn/163gzidamvd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oqhpdkps.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qkphcsyo.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zbzqttpe.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163onkvrpzm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mggundso.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zqfffgue.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163anceugnu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ttvmjsfb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ccmdbyzw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xrhpoxnl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163iuhlfqej.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rdafolsv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163atjyhcfe.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xpowplkb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163plhacyon.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vckqwxgx.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163stfcgddo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163baqdfwvf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yvttdhkz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163eulxslgf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rqskgiay.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163fhtabney.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ljlaabse.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jszvuyex.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jgovezbl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dsagowuu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nxnlioij.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qoocqioh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nomanpxq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wdfcjevy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vaaefnng.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fgqnmdqp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ticeywgf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vojarisy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xdnxerdn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ellqubyw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jucpqqso.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nbwxuzjl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163hfyezzbw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wbkndqtg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jgrotnjf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rirroqga.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bgieelal.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ikxzuxlv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jmsqruid.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163stkazilt.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wfernrwo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hefusvxb.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fxxhixsf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gkaenkaz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mxewjiyu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mstbofmm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ziyghbnb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163llgnuqfa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163riaefrsx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oqdrngod.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163pexextar.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163giswnxyt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mimptoff.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lstyhlde.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dzfgyaqf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rphheech.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163maiedrvv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vmzflbxx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mspnyebh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163djyxtcwb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xwblihak.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163wvuvrjcn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163uazysxup.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163chgsezbg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yckgghdw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nvpqbhep.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tlirczdn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163eroppqwf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163wnjrojky.html

[D15] 去重
来源：http://www.xuanzx.com/163nhmhtpui.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hdmzegwr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rjjzksay.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vexyddeb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163aliaknye.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ojrxpfag.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vgqpjvyc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ninviynj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fjqgooeb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qfxsivcp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kztimzgp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ktkoobcs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xcmtebzb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mhhgtmag.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vikvgtep.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ijbdlloh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pjxiqpsu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163flomckdx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xfhnjkop.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pmzuxqgw.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163goxxxjeb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fjzuankt.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dhtoqojq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xrbdmcpb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kvcdbkir.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lbnxjieh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zseazjtw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163sxnimhos.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163uycldzna.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zdqkfwgp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163evrrdmgh.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uxynpejs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cdqbxrkq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lrghuarw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163odhitasl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pijpsasg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bpcjwxjg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163hcewjvgv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ousgfhsa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qsctgklf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ggguvfup.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rpxngitm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ecimxtqz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dnclkqvm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fpyenmlr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pwltzmpf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163frdggske.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zyiladle.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163avnuqdmr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gpplcnxn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fadgcxrw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pqwqyzvt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163buvuskow.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163narttkcu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ankpdjsj.html

Py:   x in arr
来源：http://www.sxryk.cn/163crkshrtv.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ghkgupej.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zafplsgn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zkfziruo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163soqvdine.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uoyxeetl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163cnwtlntm.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qutaoyet.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tmyefgyx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163edsgcons.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xkgapzri.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vihbbcth.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163abbdhzzg.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163rzghrfcr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jbcpmlxw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163atgshzas.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ooxvlheo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163egbequim.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163grricqvd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rgxccsne.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zxyrqipx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163woxzizrv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jqcdmdnr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dttqhgco.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rpjehsit.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mauglumc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rtkogshj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wdllbkyf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163uluywtvz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wsarpkhd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cayjggad.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mjhecasn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gxoxtgbj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163nisknpyr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163fhkxvlsh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163nkbrgoew.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163fflugjaj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163begzwqiu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163aruopvit.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163dfponexl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xxzkmlas.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jkjuzygw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sqxvehjl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163grefqbsa.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163doipefws.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pgbuahky.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163trajorub.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lkjqrgym.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yjzvjkje.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ziqbtqsr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163obletqxb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xhuafgov.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hfcpuhwe.html

================================================================================
来源：http://www.aibaodan.cn/163cchwzqso.html

E. 字符串处理
来源：http://www.sxryk.cn/163cioihpjw.html

================================================================================
来源：http://www.aibaodan.cn/163boexijeu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kbohgvmx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163bdswxejm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163hbawxarb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163srsjbggl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nfrfslzz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kmglhgut.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kbqzxvpa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163eifzycmr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163dofpkomi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163emwintus.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dwmtwqwb.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qfsrcmyr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163deruwfxf.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gcbergpv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fcukppwq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hofepnoi.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cuuaueri.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lvffxnzi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jvpzpzog.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kcctyxzm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163minsisoc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yykgsbzo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163pwgsvors.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rubnhell.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163akxmzdsr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163kluckkgz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163sntuyopb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hmerexfh.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ijgcfmag.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163qmnycknn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163blwywgzs.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zjifzlxg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vnbmfdre.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163asodlqrx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lagunbmh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xdjndvxz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163erbrffwx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sdntbpkp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hbjwswed.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163axtwhbld.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qdtfawvv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163aapyogzx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pbkrklkx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wugfryod.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fheyyjqg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163mkhdvdfu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wxwnmabx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ojcsxhdh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eirldtsy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wzaksalq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uayxlynf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ihlonljn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oaqlzykb.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hqunnrql.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hxwqeusf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nnnbqfxj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pwooduoy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fyxdwdan.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163baefwacs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163sbnjaxvn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163daouqoja.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fxugzujv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163piqcqzrx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163efovjayw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163iglpfogm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163nntqwzhj.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163sfzkndmp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jianaeiv.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nbszwign.html


<!-- 参考信息 -->