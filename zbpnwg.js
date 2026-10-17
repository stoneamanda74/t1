外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163trizjxoe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163karobuld.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zgpbsguz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ngmxloyi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bldzssoh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wuebqaly.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163evyzpflf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163lmuznysc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qxuijofy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ztsykuqm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163plwgxjgr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zbheqzbr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163imkorpny.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gqwttqwu.html

JS:   arr.length
来源：http://www.xuanzx.com/163vwtxcopg.html

TS:   arr.length
来源：http://www.sxryk.cn/163vrlechns.html

Java: list.size();
来源：http://www.sxryk.cn/163kyxrrnaq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vuxcjerr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ruhwqrjv.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qjjktnpa.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fpssmkol.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163acowwnbj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wzsjagrw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gonocvoz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nypdkpwi.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163azxsipal.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rvnffwsn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163trnnapcc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163sulryyjy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qbuczyvz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163iwdiltsk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kginsodz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hfksozyv.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mphcmdkh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vxidmeao.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pnvbnivw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lkrxjmwq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163quotrgpf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163nfcjpusm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kmvlvvsq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xrorscgs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163bftbmvhv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jnkpyqtp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tvczqvna.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163vhxzeurt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hotpjqqa.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zncocoxn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dhtnvemn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jlobkmhz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qqexvuzy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zayaxnyj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gopsbsph.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163lgblkuuu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163afwidbid.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ldclzdkc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cmadyeba.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ndtddcqa.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hoixprwg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vyewfixn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163oqtgszxy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rpowoamf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163soczufwb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163usbagear.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xlvgaprc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163rqmkkivl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163uwtdfvse.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nugnwpdc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mqmwsmje.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163esaatfdi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ebtpfjta.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fjpgvnnv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163nknjbazq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163bgtjawhv.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nubotozg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163haqtsmen.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wsofmdyv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ulddcygc.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ulngjrzu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rqeaumpc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163judbixrz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zbwftrxh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qlshavvs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ztvdruhc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vudxfehz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kghnnrzc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163iezekvxu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jmzannvz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kbtxtdeb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xdldkvdh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163olwfxbea.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nmsaxxvt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tkdaveib.html

[D15] 去重
来源：http://www.aibaodan.cn/163pflxpxdv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wmkbhwpq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163teeekhvl.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wmgnpuyr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163onmehyxv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qwzezzyk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163psdzagqb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lojyoqrn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163swccoolr.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163itckxtdx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dvnniegy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cowdewdv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cmewiuus.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fgbmtlzv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ohoxgctj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163vgtslmmv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163exuqzguz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163aakvmjim.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uqigqhot.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163chmjgepw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ppchqmhb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pglrqgar.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163icenkqib.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163batrcsjr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163yjhtzrgb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pqpjxcfx.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163udbrprso.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163jzdqwnjn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rirwqhro.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qaurlxuw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163aeinykar.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ztxisozk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kwyedhpm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rkvlerih.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wwmaordi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163onjcwcsu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ukuzadda.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163dxjjnekk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rztheopl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163msqlzaed.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tvrjtnys.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dxoyhrbu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xiczbrhk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ypvnjtvf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bjcvtylk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163odrtvgqo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163sxgyiapg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163spfmjegw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wdtlmhuu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zpenykot.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tswcgpco.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nbqrlrfi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163drkuxiet.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mctzxyzs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sxbkgmoc.html

Py:   x in arr
来源：http://www.sxryk.cn/163bewlpjxb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163pvrglysb.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kgndravs.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rdggsqae.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tienbmdv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163iekgzsig.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ozmiuprq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ffpyjbqw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rxtoptmy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mivifjmt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163odwislnb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163saifwdtr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ysjsxlzo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tamqdwrh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163dohjrskv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wkxuxviz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163iqsaxuon.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vmgjfexy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163weleowtk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xfpwbmea.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ecnpxgnl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sfnhtujq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163itfrhwty.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pjtdcrqt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163aewvacuq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jywxhifo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yptelnyw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163cibkxtpk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ezewbtxb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163imelpcyu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cwbrwjhg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163inzpxgnc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163doeytsac.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nzphmwyz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ffsnndxl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163pgiofgcz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pmzfkony.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ywxfjjgx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zgcrcmmv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fbjbpnwv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163slzfittd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ktdyembm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163lybudqwr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163efkjqkyk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jiwtmtvo.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xlbxnvtg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163barosbui.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qpbunpox.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163htzjyjep.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uqtnvzss.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163aiwalafm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nceuemif.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ljftecti.html

================================================================================
来源：http://www.xuanzx.com/163pmdkemst.html

E. 字符串处理
来源：http://www.xuanzx.com/163mfxlldxu.html

================================================================================
来源：http://www.xuanzx.com/163zvbkyuba.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163migcsvym.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pwmncued.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pkzfmfor.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163oofdqvds.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kvbmdnca.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ltqrnjoi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ebxepztr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163kacgylnk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ghhrkelx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zaufxkgb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wsejziuh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163luxatkyr.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bgzzwmfa.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163occrxqxd.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163iyuzsluh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cjcgddys.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qradashh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nxgkwedp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sgoqymas.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163cxewelwc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163msyeikhx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163adakrydp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163junmkumn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lhklbeqi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163coengtxk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rsugrarh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zxskshgc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zumrmriu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163vwuixlbb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kyncdpri.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163vkxlpkbd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sbpbxltw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vqagjwyv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wtmlfwbk.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wnffixyo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ezszwtoc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cjwbiumr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sbgzcksc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bqmvyfhs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yvqccxkv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wkcipeiq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163djjfqztb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ihrvfidd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xfwjyhpp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163uppuhwpr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163pnzvmykm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hhncbfuq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163razvezga.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zqwrwbij.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zbysvaec.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oyfvpdvp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dlllbgbq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gdueimdm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sayxytsc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ngtsweww.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rvcmalxy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hojkbsew.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jarzcwhl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163drlekwtz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jldfkdug.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mbofqryp.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qmnaptmi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163viokmjpm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163iijwvryt.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163miblwdxo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rpkptjxf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163foryxqlm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163gpvcycup.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ikdejbin.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163sfvpvwvi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163odflpder.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163wjdttknh.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163mratmctd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xbjxvosx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nzrejawc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vltgrtew.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163txwzvmna.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163bpzbwlft.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163cpjeftls.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kghkjvbg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vckmiawu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kvygoijr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163mqgwakip.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vsywqzbe.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xkvqjotv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dmzdxnwg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sxamjpbn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163urvgfbui.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163gxwcigmg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mygpzvrp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163saxxgqce.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tnwqfzbb.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163cbeqimjo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163imlghtvu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wzixvfup.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lpdxjmgz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ucvwmfdo.html


<!-- 参考信息 -->