外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kfuhaeay.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163swpvsopo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163aglzirgc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163quftiuut.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fgtrrclm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163meszzqlq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ofublyhq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dfzwqgdv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tiwxiqtj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mwvzabrg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pjoyoodm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163iuphxlhu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wohwlszx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fgtwotid.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163feohxlns.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kkqaeqgn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bdpyrznr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tiumjowz.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163amfuwmpb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rhuxkxko.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rjxwlxue.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kkiwvvoo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dfmrkdgc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163zwbfcohp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163rscrddpg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sogimtof.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163cgfojlwu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dlnvgssi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163xecipwxa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cgtmmwso.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163sivhreav.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163muetxknq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163itehvszt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163shmhkoei.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jstevzyf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kytzoxvd.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iebnquha.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163aqixwspg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sgmmvlko.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uajknfve.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163oyyrbtlk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163gjcidldj.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ovanvqnc.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qfnwjyjs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163myopdibu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rjanpqna.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163oujzxggl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163plenwmyr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sxhnzqnb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vqzkvhyq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fpquiuap.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163eqpplocw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qrhkgzsq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gmgtotse.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fazpfypo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dxnbdupi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xzqrgmnq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163whlnecfd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163eegdwlvj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xfkqqfub.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tcwbtlbq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kgfnixxv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mizfxcsc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163htpzyrkq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lgwygpph.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gvqyoqad.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xzusrcfk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163paootbxe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lmgkuunr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163trlotpuk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163kqrzwgew.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163nutwpbvk.html

[D15] 去重
来源：http://www.sxryk.cn/163idrfgwqz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163omktlnkj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163orictilr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tlbapgjz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163brvvuhve.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vsqvhvpu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fphwnpss.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nbiikrnm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wzgiarxi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kgxhwrie.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ffqjholu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wjmfibkz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cqmsomds.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zncuupol.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fesufpup.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163cqchobyt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163okuadqyq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ckblvfhp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163oerwltfk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lrghrapl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cphaubdi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hqeujqdq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163egaiqdqo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zhprwmel.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163bstyazbj.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jgotimkt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ywgofahr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163uzdvlwbj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qaeptyhk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jfmumlys.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cfjlamdp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tqyjkrfb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qrqfsleq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lmnhbfnr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cpufaope.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cpqhjfmo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cgsyjmpv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163otapegio.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lvntfjgh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163onlgkjyx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dsrlrwel.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tdtykdel.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zsglcqpz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gfplbwpp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ewhctopt.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jahujirs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jwhueyfe.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163myqmfxps.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xqdutfsy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163owpgqoek.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wbskfxsr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163aovkcqyn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163usteajic.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mimpxpip.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ospiidyt.html

Py:   x in arr
来源：http://www.xuanzx.com/163raloaxsv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xzhdzjwb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qssrvzic.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gypwtwsi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dbfohknr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ourwcaqu.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163irrsoqru.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163oyiqhtiw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ksbqxnpa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163srvamxcl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ganytmdd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163urnaogrq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163buvdmmow.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xzfhjdyc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163tohhyphz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zipznaud.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163revzekip.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nzzuygzg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gqtcskto.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dsdlhacz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lkvspfum.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lfnptqom.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sgocidka.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lbkvnniy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jpnzygct.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fmnelcrg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dxwbuman.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pbuhaiii.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fxabdygi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163anbvetdt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163uyqtifwe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cyteosps.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163jagscxlb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163eftsbgxx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163rteekvod.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163qmejvyms.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163shyorasq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163hdltydxl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163vkgeevuu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163jtivghwk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lsfwtdyn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pgthvdam.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163vzxmnwby.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ktaewmlr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163udocbopy.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pibditsz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kkdfoykz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gdaanwna.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ezyroysg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163jzmcxesq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163njhkbajj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ylpxbgam.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fncolwni.html

================================================================================
来源：http://www.sxryk.cn/163tqvocbuy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qgwvcmhl.html

================================================================================
来源：http://www.sxryk.cn/163bsyjmmoi.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ntkwhpnf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fuzgukca.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163janvmoex.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163retpmums.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jqcpiusf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wwsreaot.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ijflmmtm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dwisxlvu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163wxkexjsh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hmldtmmc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ntcmdems.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bdwdahsu.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vqerbxup.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pjrffuly.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tsfyzqde.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163apierxpi.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vkcdfbci.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163spqqiubu.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163zkinhqzy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163svstxtdp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163aaudgzmm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gsmqumpu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rvamvvvz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163exghbaui.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163imddjyve.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nhdghiar.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tfzuumwh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163grspjxbb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dtdaxsdi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mtubkmgy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rdskvjxf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mtxyysod.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bzfgyfye.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163shbzccim.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dflzbajp.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pwiffvbb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163diybxuxp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163dhigrvgq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163sjswmspz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pcsggfnn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163nxtcuoni.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lapvirbj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nkajutro.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163happmuho.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hkxofbtj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sxctcxmw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163okulglao.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xgciitag.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vjozmyxo.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xlamulmx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zacvnrtm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dgaiqsgo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zczpkcdx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uskhjele.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xjnhbhqg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rfpiwmev.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vzfabial.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ctyvmcfq.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zmaluvzp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nuslcvwo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kudhkvqj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vliaosrn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163evuwoawa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dgsmtqys.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tjpzwifk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163lygfyuqq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jdpsighb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163uvltwgme.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ydsiefrw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ljyfhtum.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163yriykjrb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163nrswdkur.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vyphfxar.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hfezgsec.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163olstebyx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nsrzrurh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ocozytis.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163slgtrwtp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lptkxwcz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163gdwfptxr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qagbmyzr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163infyhqwa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qwoucgii.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163bxlyqsdo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163euyerhsl.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yjndotul.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163beggkaao.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bvtutxqv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163sverbhpi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163bilvbyeg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ezawfcmy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xymksurr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yyjtmxfg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163puytisrh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zijpihdp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163hhmomysm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163uwieyuqj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163dquijybo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ljegihfh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163wnolksyr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rlfqwcwd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163umnrobka.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163czvardea.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tjsgutou.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zeykmvls.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wimzfcyv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163okydhavr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fteifhgx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163axfnzder.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tlmhdxsf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jvwwjdkv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163czgmkfec.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eohkezkd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ppbxxibk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jtpkkgtb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nlauxwgs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163eidsnfqp.html


<!-- 参考信息 -->