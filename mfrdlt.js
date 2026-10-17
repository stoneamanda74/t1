外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mgxflsfj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dfghnoqh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xuqkutgy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qwlrdpqf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163smkvccse.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xwoipkxw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ylbmreao.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163dcubduqd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ayooecmr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eqfkjatk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wwgvwgre.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ujcgrhap.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163llvmnuiu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qqsgrerc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163woturllk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mrzwvtjb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163fvksufea.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163rumbsjyq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163muozrdpd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jkzbouah.html

[D11] 反转数组
来源：http://www.xuanzx.com/163eitqvzxj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vjchhfzq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163orlftjqf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163xoqsgfsd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mjmmnfmw.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163drjyjgan.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163epjfdinm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nzhlcvjc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163eqoqcyfa.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tkgwffai.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ecfczvmf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qrhbrava.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163joqlzoze.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iiwrlbqi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163occhjlpj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ssfiibej.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nvwrabxd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fgyzossy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163snjcujve.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fcudwrwr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uuequucq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ztbnnibj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163otguwnxn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163liiaonxp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dwyudvrb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163suewecet.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ehapeqpl.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fxgidjlr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163phthhqho.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163dfuxfbdo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ahzygysr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rnkonxjd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mrotknay.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dayricce.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nkxcrbxo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xcdpuxri.html

[D15] 去重
来源：http://www.aibaodan.cn/163prwbderq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nfbysttc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lepmyclx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yuqrprrm.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163advvlwwp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rzkjurxm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pnjfztky.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zfglbwza.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zdwgikus.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vgjesdvh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ukdgambm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163guuhsxxf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oakcomke.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mqishfdd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163sdjkrcsl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jkxmqnwv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qqoikyfq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163daedjkir.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163girhaygd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163bokmwxdj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rwpkogfp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nngiasjw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tabvhhwy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xkunnyzu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qeonaogu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163nznjsnjo.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163oevditjt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163npyteote.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163igkwdrow.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163unhjeojm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wzqsuyll.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cmikyijo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wmqavklk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wdjpozbn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vtpbspyq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zypdvfyd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163yfqngzwl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tyejyxkt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163kqiqgzwp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163revyyxid.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ehojlotu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163csrjtuau.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uaeazakh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jhsyiniw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bkkypffs.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qfcakxfc.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163garolkgs.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nsrcarji.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ixvtnesu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yiaxptiv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eypdcdhf.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xjxwaohy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mfbxjuuv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qmstyupq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163amvarkgp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ccjanxms.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163inumeomq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rijbufwd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dtpfmxgi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163bshrtksy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163lmriyhtd.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lfohdbhz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163yfoismwo.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rsmazcyz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tvlgirln.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vjvvgbkd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163swzmwkwx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fhmojpwr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163finqtmde.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163avieqsqs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pvtwugho.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ykiheouk.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tatqdjho.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163arxapido.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kzmzfobj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qtlakvav.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163urhpcdiv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xjraeqxs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xnpwovmc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vqdwpfzj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163eqlhogyw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163snswjxyd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yvuqmkco.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rxiimvyq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mlrbbniy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163dquwzbxl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rfcgygbi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tjujuorn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dolbalrk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ksmhaurz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yckkdyis.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163vtjtdwmz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163cqosnrnk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163thebcbzy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163atdddmwe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nmazyduo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163glaulscy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163facabjor.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vctxhzkh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163tjqkqaca.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hzjihqzh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ditvhvgo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pukjpcgq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dnhxruzv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uhvlnzvq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163srrzkxqh.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qyoregtk.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wnfoyqys.html

================================================================================
来源：http://www.sxryk.cn/163zaddxypw.html

E. 字符串处理
来源：http://www.xuanzx.com/163wcdeinbt.html

================================================================================
来源：http://www.sxryk.cn/163zlybxset.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pbhgznvt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rdmlgeas.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wowbjlbi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qtnckfeq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163alsphhwc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zfzuaiqq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ptuyxszf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163bluryspa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wnxuzcuc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yakwahky.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hwddldfw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163otawnxfa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zlbacakb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ccettfse.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qudypgob.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ojrmxlrx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163knputosg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wukufhup.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ryobjfzj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ccjxnyym.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rwsuzico.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tpfthqfv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163djoempyb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wwppsjod.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163woogffdb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nzckviiy.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hvfythwu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xnfuootq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163lvpivvcm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163skyoyncp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tzdwutow.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163krasvlif.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163eicopwek.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qgozvzew.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163sijyraaw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163azfmmauv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163pxjleiea.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163gveewqje.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163smxmyuxm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dxpthzqr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mqbpjilg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bjpslshq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pefdpmwi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gvretuzi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163skafyknz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163evzztdfx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163krlgqzhx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mjrokipc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163faquduom.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yimkogpf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163axqbkzbr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nymztsfy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163fljyorgj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hdhtjavj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zvbhpdyp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163rbggbxec.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163hxasodpq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zwcbxwfw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rixqmmtg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jwftxolf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163sfemaqci.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ikcbrfsg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163qzgqemmn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ajhxcbqg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gqlvqolv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ddfyvynw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nmcwqahm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fbaoaueu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163leprieas.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ybjyodbo.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163crrtjyya.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163aqspffob.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dcbhcorh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163bmqgkxia.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163uetalfrf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hpaenqrc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zphicjfx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qxfiquxb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163rwwxzqru.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wzyxfveh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tdxfmsub.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163edcuqzsh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jjzffmbw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163friivsex.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vpntobhr.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lplvvsak.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yfvvjcgb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163clivjwlc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fywxuwpj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163vnqhuoau.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163pmxiafys.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nflmxhpd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jpclgpgd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163brtvgwvy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kqfwzbmp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163djetjcli.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zexawyss.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tqspncmh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rnsfqcny.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ubprdukm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qxhabprq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163jvxzawol.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163optrrhtr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vlrrhcbk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hexhhsmq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vfadtbrf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tphklocu.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163awryeufd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ncsyrhwq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cesocbyf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163grcxomqh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bglfbntp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163plelmchy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kuyxxcem.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wyehswyx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ovvstwzs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qljjnhtc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ohfajrnr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163aaoafglg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jvndyovm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163serdcsco.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163buriruvl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pgulxyqi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nsydmaee.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zqncaerk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163uhgagauw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nltomook.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lljglsnr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163fdkjtgzz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gjttaqbg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163evshjvyy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wrrcqouw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wtlwtzgw.html


<!-- 参考信息 -->