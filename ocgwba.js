外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163vcdyjdlg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cbbmuffc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163nixflwji.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163gsmwvqqx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pvbsitwn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ypzkegto.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jinvbfwj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nqjdkrie.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xkvicmfr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xcvmmrvj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163clzzzygo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163opiivpxz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gfpzqqza.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mehstmxc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163eutwolfj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mwvjtalq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163phvhtxap.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hmrkioha.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xjztcpeg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eehztwhg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vrhnsapm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qbkqjzze.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ojiuiptw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vbwyxsgw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kivnvmiw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jmzqrbca.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wvchxxpk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pzwavbws.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ktylwuxj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ueymnsub.html

JS:   arr.length
来源：http://www.xuanzx.com/163djqjkabs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gutwatxt.html

Java: list.size();
来源：http://www.aibaodan.cn/163sqqwcrth.html

Go:   len(arr)
来源：http://www.sxryk.cn/163txyjeofn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163atwcgzrh.html

C#:   list.Count;
来源：http://www.sxryk.cn/163okbeveqh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ncicsehi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ifzzrpqe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dxhwleyt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iayjznek.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qtbsygrp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163eqozgkcu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yyzrdohu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mvpfuejc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xcwzbhzj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dahthysx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163izosqbkv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163oepuwclp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zhfuycqt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hqryxftk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pxjjendm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ovipfiir.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163oixgewgz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mfxkgpuq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zdutjrud.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yfryjykc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163exdrqbsf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163doazinga.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sssuqggd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163snndjpkk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nbawaflh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ypptywbc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rjkeltym.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dyocsgee.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yheagcbu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kxnhndfo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sqtanutj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lkhlvzhh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mbqzrqzk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163smhaijly.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163usldwjfk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163uxpmlyjb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gxyzkqfa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xfpzcefl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nhzarvnd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hsjerpkw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lbssmfbr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hiffwjvh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dlenibgo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163lsofpjrn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xfarkyod.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163edkjsfnm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mnwuzasl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bzdqqqyk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nenshdno.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ielhwprt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qoenzwfd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gsaqukby.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163gotxnxqd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zbgvkyce.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ppukncrr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163khbdhqle.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dkaxlxjy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vkaijlnq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ueowuguy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163uitukkcu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nvcajpqa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163savwtsus.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163coxbtkyr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cvyzcndz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ophjmtxe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163olqqhpdc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163netsoxeh.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163uynigzue.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lplbylva.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ibqoekmg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vqvdgiln.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xufaqila.html

[D15] 去重
来源：http://www.sxryk.cn/163lfghkais.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kfvrwrqd.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mkmzfxkh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rvnizqfm.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163iszxccpw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hhntgfcg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163dajamorl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fhvuxgcp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163udkpxqtz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163yvyqzrqm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163bccsndzj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qhsehaki.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iydruxhj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dyqaheav.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vciizqrc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rupmiqku.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ddbeypkb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163aazjamlu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163htjfmlay.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163tptdbmfi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wrrizrsp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ciqpjljb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163suxmrdya.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163abkmkyku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rfonisns.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ohyyalji.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gpfhcqyx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163utwhvovx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yylolaqx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163iwtnhpbz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163erzewtfb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cyazyuuu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xvffpokz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ouqzscje.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ufappftn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ptimnwvr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mjqagxlc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ollcfbuh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163foehpstv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jtjxnqzi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tuqnfxqi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jdagkxrj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163armwnanc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xplkrurq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163foiigwej.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163kvyjynvi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163aamrscin.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kjtychij.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163adokviwb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163llnlijbd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ikkattdr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163btfnrzni.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sldujoju.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163pwqkulhr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hnwehdhl.html

Py:   x in arr
来源：http://www.sxryk.cn/163ixdavhvw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163emvfpwid.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163akjgxesj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zvowdfec.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163mroexboi.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nqjvbkwj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hfuhbogw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hzatykog.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ednsxfau.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163udbmjeum.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163rtkdxquz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mizvexln.html

TS:   [...arr];
来源：http://www.sxryk.cn/163klsouyya.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gaiuadbr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rgbpgosr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lokoytpi.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163dfpzyclz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163bagzwddb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wbmpowzf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jvqtkeue.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163frxyynwp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iyuixwck.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xnrzqmez.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xmjvasyu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zqgmzdiv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lcymrpua.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163iwibbymq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ylznttpj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rgypadla.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yxyxhylw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zucdrsmf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163aolygibj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jajalldb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hqipbmfi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wdzapkin.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163sdwoojsy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ivmbspcb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ckykhfpw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pvtpnjuq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ivwmgkvt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rktohsor.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rpdnkegb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qcribjuv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163lekghniw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eohamjwx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wiujrgum.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kmvpaxpa.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163opilfawm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rfzfwijf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163btbgdaws.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163abrukogt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163trtcyjne.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ikvabdla.html

================================================================================
来源：http://www.sxryk.cn/163jnhodvcz.html

E. 字符串处理
来源：http://www.xuanzx.com/163vgkziajx.html

================================================================================
来源：http://www.aibaodan.cn/163ydluofhj.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zcgpcqsg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163yubamwbx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bwqlwwhl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kaurtasx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pqwopguw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ubveeada.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ptodpywc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rpndavou.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163aakggxde.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163nwpumjll.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163abptndsx.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pyouptlj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uijksosz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ffseurpn.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163btjjzhrr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163odszftxh.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gygypdmd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163drneuclg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fyxuoyws.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163txozwhbg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gmpodysu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vljmstaj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163krxtnxsj.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163pssuwtxu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fpcavhyt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wduyropj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163levhwowl.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163umzyrwjo.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wcclzgan.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xsnqhaav.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wpfyisee.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163obvoahqn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uspnjzqw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qwmikzxq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163duujgoam.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mmguotrh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ofmhjidp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fcishrur.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vdksivhy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wtjokxrq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163skzudubj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mbjwveyo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gyvqkuyb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163keqoaszv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vadwdmgf.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ashgdxuw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fwrgclyd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vjneotag.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163okoffvwp.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ogrtakwv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163viffizhd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xidiiroo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ywstrqwg.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pjabsrct.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rizmmahp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163sxdcfxlk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163trmqgzfp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cesyehyu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dtqfyiaj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gxqidesw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qwmqiyln.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vnyxslfk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qpukdahf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fwqsfiiv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mlgwxyqw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163krrwanrb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ccdqkled.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ymqkumai.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ynkbuhco.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vlqvcgnn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163efrjusri.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163qkfvtwpz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ggfzbonw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pvovcwmd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tzmjezqg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163issrehuo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kldigzza.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qvcmosnv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mjdbnjns.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xafktqfp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uvmidhoz.html


<!-- 参考信息 -->