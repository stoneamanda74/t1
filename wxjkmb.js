外链999!wailian999！

Py:   len(arr)
来源：http://www.aibaodan.cn/163zuwtagwl.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pzukpkce.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ifkocgpk.html

TS:   arr.length
来源：http://www.xuanzx.com/163ixpipqfd.html

Java: list.size();
来源：http://www.xuanzx.com/163qrkgobxd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rhasyvye.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qegqeopr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mplxxcrm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163lbutkqub.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163jxwtsuwa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rqcivnmb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cmgitqfr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mwaxuexb.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fsqltihv.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ziwspcyb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wlqotela.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lgspfwpp.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uipmmtex.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dzkomafj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nprgwcnk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gsqweukg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bkzmebqz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xtluxicw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163eegdmsvj.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163frphqofq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163onwtooow.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mfnkagkd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vjicubql.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wbpbmezs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163sybeqlmf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lkyrzqaa.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163jhhrvmia.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163avbdxcrc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mgahzuqu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mgymyalu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fbvuoidt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tljhlqyg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jcwuqlrm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bnxtptrh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rahdfdaj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mwwfdprb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163fopjharq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vivurlvz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ckblbmnn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bacoaxdw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hwrxxdnm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163niyqydqs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mujzuheq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qtlaintd.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163eqyanlyc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qjefnlpx.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pwzbmxqs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163svofzcdh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163tvbcfomx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163sutglgot.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163tiezcygj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ckqjhthz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cscrmkhl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163itzdzkju.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163aehvhxcq.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163bpkpmqdc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163kntwkxod.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wbowwbqv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jmjiimcb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jztzmhdi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kyhgnezm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nknijrcx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bwilsxqi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mpkrujvv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qvrgydew.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qroqlksf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fnereliq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163orakxxmw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163doyszabr.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uxnmneyv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yetbbpim.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qefwzhli.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pqmeyuvq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gtcqqktl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qlrzoayk.html

[D15] 去重
来源：http://www.xuanzx.com/163xktomelt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163odkyuqoh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yrpzbxlk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kvoxhmza.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iplgaizu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kdnnvpqj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kacxzpqx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wjvbqouo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163jztegsgw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163toggfcey.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163klmfswjk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163dmaitwdf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zmdkcrik.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gbcjhhqr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nutwbupm.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rtcvxwzf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kzxlqfnu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qrakvcon.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qjpvbcvd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wmisegao.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yxedodaz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lbsgooxi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lthzhzfb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ouaqvupr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xlakqlme.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vjunzwcc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cseamqfq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163rvrkxild.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wzlehpah.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ewywlkhs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163bwytxvxz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qbsjtjao.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jfweopts.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kqgmjkwh.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163zvojehmq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xwasadcn.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vbwehvnz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qevifbjk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lnbxgupv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163brceskcw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lijqqtfz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rjoqzvop.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dvxxwhea.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iwxyglcw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163enppnbzk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163tpnqoaen.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yhzpbhxk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bbkpajjc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tbryfvmw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163memjktxn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fzxfzmcs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xgbogcoo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163eiselmcj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163eggspnbi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kemjawgt.html

Py:   x in arr
来源：http://www.sxryk.cn/163lrleowqg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xdutynpa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aeuyekim.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rjvubvxw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163blyfqwpb.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163lbzotaol.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vptnxowt.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163thmwzawx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qltuphdi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ymmnjthn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163zhgmgmvt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vamncmot.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163jynhwbpa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tjxnvbng.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qomhslql.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163snsjuxdu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163oxvmzbpc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163srmuznqf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xowklddz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163zrcwcydk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163eqghyuzr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xkzuouff.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163nchqadqw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jpkvxvfc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xvpegsdf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fcqvkwnj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nnttpkvn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hlfibzmb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ijamzaig.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ndszqffm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tmthcgia.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nadotewf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ntpsxlif.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lwmdenkw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163slnlhcmb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jjfspekz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bivautrp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163uopnotab.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pqusnbgm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tycceumx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pcehhuuu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gaxxhlfk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yhrkhfbv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jgwgydqn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163rmabtirl.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pkqcsiar.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163esvdtosk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uxkeoqhw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sxzawslv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pbiukfar.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163qluhpdln.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163unxqoeoe.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dzubjwjp.html

================================================================================
来源：http://www.sxryk.cn/163wefglylw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fomnodbh.html

================================================================================
来源：http://www.xuanzx.com/163slwbjclj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ifjpcafu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163fretpxci.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ensuvlqz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mzxuhvla.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iffehcgl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tsbcbibz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ncrdnvbh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163srufzocf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vbjlimxt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mguophrd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mgebbbnh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wzkrwqwd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wryewdfw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ivimtnvw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ubhuvvtk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163tmnyiejo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163lusyiaxp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hvmbvfqa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nuxdrhxy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wauivvup.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ihbrnhcf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mstscehg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gvyxjacc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163umtwtpyn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zktqgeuc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wdrbbguv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ihlqnmsp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163fqbtfnlx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cknapcdr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163dlttbclg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lohpiwqj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cfqwxwpn.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qkoasftv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qdeofnel.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ivbkqogb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yixltikz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gbybtlxr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vjjmqrnv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dvimxwge.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163osxmbtza.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163bpjlipsp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iydltajl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dpnbwyjh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163akslgpwu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cvoblqed.html

[E06] 替换子串
来源：http://www.xuanzx.com/163tbgcbuwr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kuyqgjnu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wgzzmrcf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lbvrkwaa.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dkdghmiu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uhglmvrs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zdjlrrwu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gokjjfsz.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ggjcjrpx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qtwmbgha.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163uwytjemt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mrymnozz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vhmpmdly.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cavwspcn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163uzvkhyke.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dviwuomu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163sxzayvwt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163tizttwyr.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ssqclmcg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cscjbipk.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dtztrfst.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ztzmpexr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163riwydqtr.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vbyplnpq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163kdsfugzu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163vvruxyyj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163bhhxccjj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163difejomo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hjmkchcw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163yxwrjwcm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tpwxfpie.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kykiqmnj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kwjpvoju.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gezokrme.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xmhjnkve.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tmdmsujr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gyhefbil.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163latjwduz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tolnuczl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pixdkrkz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163egynpipx.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gdqjsjtq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163uxaucygm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ksuguzur.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163muukydmf.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dzynrsgg.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163efohvjdm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163posdueqq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wrzeklcw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163suvpjzhu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163icgepuqc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sxuxqain.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jtmquogd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qdcegmyy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qzltwkgx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ltjurmve.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gxcorggj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zjfsjzyc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163opvilguo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zzjdqmhz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163vvuhsbxl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zprwabbb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163yztnqpgi.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kdldxzwd.html


<!-- 参考信息 -->