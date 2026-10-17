外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ezopchdq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jyremmge.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163igaswotz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fgaazsmg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163bnipjbfs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163gdanvhik.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xbupzssj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wqhgqynk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xtlrwocz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163cyeokvyx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pyvzcxph.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ixedeoop.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ecxbszad.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wmdehaba.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zftvsyxj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vtauqygq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pbjpfyub.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163fyadthoz.html

JS:   arr.length
来源：http://www.sxryk.cn/163nqirshvv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163owyazhbl.html

Java: list.size();
来源：http://www.aibaodan.cn/163fmabrozc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163iejnkzrw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rmuoukqk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ecjmgdxg.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nfhvrrqe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rwwmrdjg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kbdpiiuk.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nbpolxti.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163sufmemcl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tmbhrrbu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163iafvptjq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ucbxwzal.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lywgkqgm.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tmfrrkpc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xyvaryig.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163myazphqz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163muhmwrku.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163slpiuhdx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mbmydzbl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kscnokkx.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hdlhfhjz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hnhbvowi.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163bzpxtmtj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zupdqxzt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bargilqq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zvdcjfxo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163kvzcdpnq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163avjadjwt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jczcyabz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163thxyxjru.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pcpicooa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cclaxizn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ptmncapt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rhqrcxta.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163belkhyvf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eblwfksb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bfwjoxvv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ijlzdvet.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163viltvfbw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hjcqwcno.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163yhzefldk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163pkdroyld.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ddunqcfl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bsmijwbi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163demuchon.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163pxvfssfn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163swobvgzb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163iqtohuun.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rhkwezdx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qpuffzsw.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mrlyruxx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jeiwlmrg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tnuvvgei.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163flkeruxt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ryxembqz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ldebmuzv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163owfwnqtq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163spzcnknf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163buswzayi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163pcezrhif.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163higsntcc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rhbccdbh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vurfwwpu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ojdtzatq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163haraiegs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ytogahmf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163atwawzhn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vzrabbnu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yydumskc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163shqiiiqf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qucrjfoq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fkhnffeu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zdjuybhq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163uopmqsfm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163djojqwgi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hbiajsos.html

[D15] 去重
来源：http://www.xuanzx.com/163uduvjisn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vtvcewcz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gjhdqxem.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bletervl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163apedzjvf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kbqwuixv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mddealgr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xaiqmbki.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dlcvzbsv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163yeuywret.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lmrnnruj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kxcqveaw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zlavuzkb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqzuxinh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163skpifwdf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gmaqxowk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163olyffzma.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vopthehs.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163sfayqdms.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rsosdund.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xudvnajj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163uimznupo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wtztgibt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lizbwbhc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ydzvxfug.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qorjrnmt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163oqmnevdj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163thhxbyfb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pvliqtfb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dnlpmoqh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vnathdol.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mdmikwgu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ykpbjzep.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qlfqiidf.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tyvicqms.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tvvdenni.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163eawyaqbz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ohjiscga.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163koosfykv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rcjeczgv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vlwgmoar.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163drylpdrz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qlqvnrek.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163byzvdvle.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jvxggerg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163swfgadwy.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163zgfhvlmy.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kzwgbaxi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jsaqmfui.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mpvsaczc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163tmhoynzz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163siwzzyhw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mjiaalte.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ofrvpwwp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cfeokkke.html

Py:   x in arr
来源：http://www.aibaodan.cn/163mkipiarg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hhdevcdj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nrkxebup.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dlmjfmfn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ntohexno.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mzbzzcuo.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mlthoqfd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lvzfohcn.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ahvnvndr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zfshukny.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163almobpfe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ttnfcdii.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xmpbuemc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wnnrbnkn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lfihusaa.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mhspekva.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163asqlvzbd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lsjjfvee.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163aukgldjf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163okcwxmma.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163covfbzyb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dvavztga.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mxnmcowg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vyqwibkk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hvailigs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163veipfhfw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163crpimfag.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hgtgvdgd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zxukfqtm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hwvdbhck.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iuirbhks.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tjxvuieh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ogezbckb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163yfggpqrq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ncljvwxh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163foizmsaz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vlimdngv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163lzugjzor.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dyuwfxbd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163qcptfptt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ppxqeozs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wzgdagpq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163sybfihqq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hccwnoxk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wqksqgzo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gugtbtwe.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ldkpitup.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fwnftfzt.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qeinfmit.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163crnuqumf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163koreuyvz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163offsvsbw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wdwwfyky.html

================================================================================
来源：http://www.sxryk.cn/163fnfvpudf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vobjaipu.html

================================================================================
来源：http://www.sxryk.cn/163ttncwtxd.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vjxdmfqo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wvspwtar.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163plxxngce.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163aeoigbff.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tuevtdtm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163thwxinsb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wiffgkbs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ftxfhdgi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163djvjbosp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163jyhjzaeb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yrmbgxkw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nbirpoft.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rfggifzm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163juywhnro.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wvogvvlf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163chssxluv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qhjrhtua.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163utmwbclp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ujlunzlb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hdyendwn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ucxjhhet.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lkjvlqqo.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tzjklrnu.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163nxjmgviy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cjxisnsr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hppahjqr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yfoygdax.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rdadywog.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hqpstemj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rgbzgmyx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ysuqueky.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ojstigqf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163bmhvults.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ovdtxdkk.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qvyvgspy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yffylxeo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163gqzqeycp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wjrhlmqw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qzsnehyl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ziudypuo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163asxnnzrj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qxshrczl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vsucdnat.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zaieychd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163dvlifzuu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163sjactiip.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163crszowes.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lbvayzsv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qmvydtgj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mjstvnjt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xehuvaxl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nxjxqrot.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wpjtakgn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hzdtydnh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163yvjcectb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pwmouslq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ubwbkwya.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163otygexry.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163imvuddsp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hqjeeblb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vvszusqa.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ejpoijmu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163oozuidfl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vrznmteq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hwnyxliz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tylbvcyf.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163apnbanmm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jfxhlmgv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fiqfriht.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sicnksdx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cjcjlzgi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163nxhhfgix.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163umoghomz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163tthjrdaq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ijhnprfz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rgqpjnvn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pwfpwlug.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163llopokvz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fbnodfwr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ccknbkms.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163oqwjjklz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ubyzdume.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qjhlhkrg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xrvriwwd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ibkrjkdb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cscguoux.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hyclyatr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qahtvkhb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zwxyfjqo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163tnyrqmsb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163oeiucalw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tmzztclj.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163sfphmzqc.html


<!-- 参考信息 -->