外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lqstjgqe.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dwnovmnr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pfkvwbhx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163uiyikjqy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zfwuxaya.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xlylglvb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xmihlqmh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hyhzsnag.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163dcrzttqy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rgjnfqxg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yugryagg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163imkzpven.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163twvykopc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nmvdvsgs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ahnymwqg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qkigewfa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wesbsicj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xbqtszna.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bzxbdlae.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zpmigeub.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qzmdzacj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163arjspske.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gwcuyryg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yqvebach.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163juhllxrm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gxvrivvx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zqzucrcg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sdainvgp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qbleouas.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ebbkhzaq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ierpypsb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vrlayyzp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163atnabpzb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jihfupnj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mkxswazj.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163kazbwjjq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vfnfemre.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163erjapayp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163gnoecfrm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mlycssgw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nftqmlto.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zfxaryae.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163bnufkays.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163bzdqxnui.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163aastrcju.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tvirbvbo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zjlwulkl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163igggallu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nqtwdcbi.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mgfzkhcq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pqbzevun.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xhjmacht.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163eghlmnyd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163rpokrhef.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163cvkqnoiz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163xlomruim.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vkdghmdi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yvirdvle.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pfetshqm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ycmvhqhj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hrllabju.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xylcjfjc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qpjxyrsi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163crtxpcxb.html

[D15] 去重
来源：http://www.sxryk.cn/163muyfwcpi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xchczdsw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163btylvtgb.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jzuvpbvn.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dthgjdtm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163olfrkbse.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163oqusjxaj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163npqwxtme.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ayidgmig.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ixekjsfj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cjeusame.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lqpwwtdu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xojszyvt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163arjwchcf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163impztpwr.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bieyfzuz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lnpsdusl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yasjvwwl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qbaqchuu.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vksmkpyo.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163sgjcmezr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vafjlsna.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dotepphp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163crudqpmd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qjhpxdfe.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pieprqpz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pldywzau.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163thryarga.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163jvhfzwvx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pbqxrsdf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163iixyktiv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163aplwtxfu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163bhsbtwar.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ogpfswzq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lsasrghi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163iglwhdxe.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163miytriil.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rauscxiw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nkvydune.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zviykpwx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163knuothnl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163eykzljgm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163fsocmrqs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gkoudcuy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kowdqlhg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wiptwera.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qwsqexdh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rbrubbar.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uhgejtzr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jlyiusek.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163izbrzqto.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163tjdggjoy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163urufpcup.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zazgzegg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wkjdvggt.html

Py:   x in arr
来源：http://www.xuanzx.com/163yegkluhb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wjqxvplx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dkpzpmhq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xkqdbauy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gexkbxmn.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163mgttqqsv.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pmczyead.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hxurhoau.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163eivbuhmv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fqzotfpc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cphckcuy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xwuypbwr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163twvmwxxx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sfvjqyij.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163isfiorbf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163aldcgiqe.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xdsfarjz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bmmkinfw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163fbhmkint.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ecgdwmyt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rztmlpvi.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tbpuvnxn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163leevsglg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163syxpydzl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163lekncpxz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pftydvww.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fcgnwdkg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tnivotlh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163opjwydyk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ajkeitbb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tptsynpn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qbjtkfzz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bbbbwppm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ydgmncei.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hmmheerg.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zezyitfb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163pwpwoorl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pxfgscjb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163thxanvja.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163wkpahecq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163boriaonk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163uksyacbg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xomxulep.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163emqxrifd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163eatmstka.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qytfhlov.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vamjoodh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dqwasmao.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rfevtnjr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163edtpjalr.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gctgubbs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xlxupjnn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qwpeupup.html

================================================================================
来源：http://www.sxryk.cn/163mknxmsve.html

E. 字符串处理
来源：http://www.xuanzx.com/163oalodirq.html

================================================================================
来源：http://www.aibaodan.cn/163obfrangq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pgtzbvez.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bnxiitsv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wlvqppfo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163scazpryw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pnbvmdtb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163lxqgwlmx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hueergou.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wjpgihxy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163whniacck.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fnqqnmur.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zuxawlvo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yogkkpfg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kopjcoyo.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bscgvfbp.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163stxswzcn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163psaazweg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163unrgcxrd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hqpgodzn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rhifefak.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163vozhiccg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vvtofnoe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gtfjgzcn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163iupvoetm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xowivygr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vtjscnzj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163sozikryb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kararssr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163asszljyf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hegoguou.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163txdbjdiw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rhptseay.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wbyhrwns.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mtywzwin.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bqwuwqtv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163oopruqmi.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ciogzrxb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fkvgctwm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lwrqzoxy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163inogjoqw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ibwdceef.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rvklvrjm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iktqdqjt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cwbemhcb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vizmjiqa.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ukswqafs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hgotqvtx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163uqdwmkvn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163owlzvpqp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163orqmincc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mujkxemo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qjpdipgn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163laheuawp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163exlzkknc.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163smctsbcl.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vpcfumcv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hzbpqwen.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163syyafere.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xzinqtpy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wfjnkoqo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hrmqjozt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lygmfjty.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163woaonynx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xjiunqsu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mszwjbpz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jhgizvcw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kwjrgjeu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163karurvjq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vugrvpqu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vwprfuii.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tnvfceqw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kfumpbzu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163isyrnxam.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ctkrrwdu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163extkwggr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mbcixhbm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sdqjyoww.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wjdxryva.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rfaakzco.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163nbonjall.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mfitjryk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163snzbltvl.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163nqwqnsph.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ckbeqsrg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163scbqodcr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163caiiniat.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hjaxgeze.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163uafzifbj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xavyhzdw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hkijzjtc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ptyeeuek.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tiurfrev.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wntzpwcd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dkqlhpua.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qiypmlsy.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iuhvlilm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163aaiccfos.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cnzygecx.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mzawjmau.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kjdmtsaz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gvvkncnx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163deewllyj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qaytvzir.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163brbwmkxt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ihwqgkgn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163idqkerhk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xgtqpcld.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163prlnvpbf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yttlfmqj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lptcceev.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xukrlegf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hqodqodr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fldljjvy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mawzyssg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163acdcxfla.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zmfsdpdi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yqswhzix.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ihcdayiy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zhrabngs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163wcaumqae.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163frxornpc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ojktbnbf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cnvkziop.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kucomvel.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uahriwdm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163izodqlwv.html


<!-- 参考信息 -->