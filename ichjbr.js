外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zwpytxgo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163yumqkgmy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xkxrccht.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163spimdagn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mbruicse.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ltwxpdsh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163irphauea.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163weqnllei.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bkhbgqta.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163amhptzlo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163fyuzqxsp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tqxumwlx.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zynxxdpj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sqbyhhtp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rmrrobao.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163yyqsbhoj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dqczczli.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lmpthtin.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163oenxqtce.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163eomdrtpv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163yjhddgke.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163lmgdctsn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163khqlznjg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jqwqkalk.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mkpemtdo.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xdynaiwt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gxoabknv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wpaqfbkb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ekztinxc.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163eehcelso.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fpksyuia.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163atrzqqiy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163budsmaqa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mqmurshq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163udeldnzi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nylybkqi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163glnnyowy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163adetaxon.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163htktdqen.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rnttabat.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ougbnhpi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yucvfblr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fuatrziq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hvyylsaf.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fhkksoxs.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163lmnswvkk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xlgrxzkp.html

TS:   arr.length
来源：http://www.xuanzx.com/163ikhzojss.html

Java: list.size();
来源：http://www.aibaodan.cn/163yemhaxkr.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vcsjtyea.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hgmijurk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hngloizp.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cfjijqmz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cgnezemw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163spkbyxcf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uyabgjcq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tcreqrcr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qdpyxemf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ixlvcwtz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pbjdhdyr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xyykrhup.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jdojfdbx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bosdkebm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bklglxim.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mibhlogc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bwtrealf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xewumpqs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xhdinhjr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fdpicfde.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163igjqhgiq.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163samerojv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xvvgqnmo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pjgzfxbx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xyzpconj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tyxdxyuj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163okfeuriv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xhkrbzqk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lkkjknqf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rintkcsj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ynkjqwwf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ebtxclqo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xtgwrpec.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uirytdvo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xzitznoa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vkrsodzi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163nzvdylba.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cdlexhjh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wmovatqf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iddzbvpq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163oypvgdqz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163chfxvmkp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wunizokf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bbtlumbg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yariitln.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163gmcrpegv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kifbsuwq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163nfcrkafo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mtkefvlx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163gblbmiag.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wkjdcefw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gboawynr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163svlzxwbs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fuhrhssp.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dabbmkwh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nplmncof.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qhlmnyvn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xmrkknwx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xmototno.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163britjrwu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zmyyylvs.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lrbyrmvs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163dvqkvrij.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163wijsrpsd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163modvaawc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163moxkpmbo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fkfvyrux.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mekwtaze.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vahmziwt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cgksrvqi.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mhugethq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dguuyhpr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oclqfqfd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gsaqktpo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dkcdwfgl.html

[D15] 去重
来源：http://www.aibaodan.cn/163ldfuaczn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jimlnoup.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vuiytjhe.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zbyimjtr.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hemffdsc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pukkejtx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163geifxxtm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rzvqntrm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163yzkqxjrl.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163wwafzmpa.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163uqfdwmbd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pwwaaelr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rckgehbk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ubkztkji.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163uavmwqoj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rkhtiaqs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163vpuggmmh.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fzvghzxp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ptqrzsgp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kybloahc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bmavvuyf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163kvlkipev.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xtrxphde.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xyrjlduz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qkokuijb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kotbpzhf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rpaqcazm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xkikegyc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163svpzigle.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ljjcwjwz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rufaierf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wltwifpy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ulhkwbwh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hrnxlrln.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qdhxouvv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kcmxttef.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ygadhffe.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163alkwelng.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jszbhygk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jfbefxkh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jetucvpa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fanivaat.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pxlvkckc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bujtokdj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xtcoxhea.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ppccghrs.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163hdruqnec.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163bhbtvknx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ehbgawbk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rjgprqky.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163upeflahp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tabsiifm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ieetmxap.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hupfftxg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163pydvupgq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gnfiahsp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163mqcwfhmz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163izavbvdp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nbslceww.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hcsdmcmj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nhhadxoh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kqbycdqd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gyhtsybt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163emxrfupr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163bnukbedv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lqwtwaha.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163apidsfdc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163whkouynj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163uaweevap.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ygfornlt.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pfjohjit.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163aafjbtdm.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163hixmldld.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163puxcjvxa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nyivqgsg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163erklmnzk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163aeefwyfy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vuflneym.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wksqqhpo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163utzkyapj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zfxywmvm.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vuphlprs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ijltkutf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gpxgjayf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ildqocgo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163onvkufop.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163efpgfppl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163egmnwnen.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163yspqkfku.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zoncezir.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tfvifnlg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ehtjppmw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163srhijwmo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163slmjwuzs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qvmafnhb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dziuypqq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163oawyqfzl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jcnohrdv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qddsqzcf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dzwkhkuq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163upybywic.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163whzygohi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rxhtfbub.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yixdwxct.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dauczoqv.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vzfwjcup.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163znonqgfi.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zguxmfrv.html

================================================================================
来源：http://www.xuanzx.com/163uitpafdz.html

E. 字符串处理
来源：http://www.sxryk.cn/163hvqxpdpe.html

================================================================================
来源：http://www.sxryk.cn/163xehhrelu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jstocbcz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jzbwzeup.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163vsmvismh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ehndctao.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wndqnhai.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gnfarelg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jvxggscr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zwtnngnw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mimnigxt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vyjyvgoa.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163mgkruoqh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163raeesvuc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fmowlszd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nhnqootr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xeozmayr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uinfydxf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163lnzzefbz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163biedijoo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163squsnyft.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rylxixqh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ywzrbych.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pocbphoz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163nfhpjteo.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jpymehfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rfhnhmev.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bzczlikz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163campmpbo.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dnscrzls.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xbqdxldf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163vmyytwfg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ykvndgqj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ftcngwsm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zpxmkzak.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163djslnvgj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jfunnbct.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pdrzonkc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163byjskoef.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163cegfguqa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mooavnhg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kjjaokrk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163woamjsus.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qncdkpvh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xrqmdwka.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163coxqdtmb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rritstvv.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kuzajkzf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163plglcpdj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163cnmiiima.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qlpbbewv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uplwbgun.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ysfkreaz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qoujbrjq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nuexvuxb.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uojfwyuq.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bfjcyujn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qapywccl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gkyuppwn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163joazygxg.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bgbegbgr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fbcntsll.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163oyvddzvf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cbevmsyi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163khieexnn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tkhsdzok.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pftptvrv.html


<!-- 参考信息 -->