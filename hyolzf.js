外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163cdxrlkfl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163obsviuqy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163cdiyonze.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163moszxvqq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163czipvcrd.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iduirnln.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ttaqkfeu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vfqajjjo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wfqvfkpd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jlabuwxw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vbbvabbl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163aolbksoj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wkqmeocs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qlwgatvq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163twdpatkw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dqpmsupf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zponomcy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ukgxclvm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163xuuuojgg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zmjlsxbt.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163imcmdexg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163oqlmeoho.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vfwkmldm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fevkytlv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163oyfenawv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eomhsgog.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wmftywgy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ibndbvgy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rjmqdmws.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uobvkyaz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mlkxipyh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rvxlqqjs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hwxvygmr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zsuvtlmh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ljkzijgs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ccfsgqbu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zpflgodm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gcerlyvn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nryrxvgh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dsyqvcmf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mzfvhgkv.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hoderhgc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163chmirhqf.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163iiwbbxnz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nwzritvq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163lmnhrqft.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tvybcoyd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jzszcciu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nbkiwmtb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zgsuoknf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lwnkwqnr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lhvbqmni.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ilxmlchq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fvobehbr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163isvenifv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tpcvufzo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163exlpxbla.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kosbircf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kiaygcfw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qbfqpasr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163fuefepfa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163txdvxrlj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nafdgrmc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ouusslrc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nfiizwjv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163oibhhfib.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fvabzpzd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sziiksod.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xbpccsfv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zeepcrzy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wvxajnxz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gxkviqpe.html

[D15] 去重
来源：http://www.sxryk.cn/163yxknuhso.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qtdicwpc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ztnutvso.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pexcsfqp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163roszrocy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zdhficru.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xhxexwrj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163limqhofu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163acfywvcv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ksdpvzvz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qzdasjtu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ilciuiio.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163itbbytqy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mmhevanb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163abhrwbxu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mknxfcxk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ehfhbead.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gemngabd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163iyugcmnt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ofctstzg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ycbtdkcw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163wiwhyxzf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uzbonoed.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uespurki.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rlfzvdco.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163znybmtkd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vrhjjrum.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lgvgqfpn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vkhimriu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163icvvlgmn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bswnfpfx.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cmmczuel.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163qbeyzyqs.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mmrulxrd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163oythqbmc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dvjkpfks.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bqzrjpue.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163kkblitjt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nbgptlue.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cmesisuz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bwlkrpyw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zaqhnzdn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163llvffukl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lprqabvr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hqvwlnai.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zvpumane.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163shyqyegx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nfyvdaes.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163amtbjzxa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163opgejril.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jmqgbgsn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xjwsmpud.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kutqvvsc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nsrqqrjw.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gzkuwtcv.html

Py:   x in arr
来源：http://www.sxryk.cn/163qnxdgsar.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zvmoozag.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163iltrqkdf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ioulidus.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lybbhhms.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163muiutaiq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tjazfyrg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163imvhmrug.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cffznqhk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wlzrdsag.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163klloeugy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gvnssezs.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gwpwakbu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163epvpsxrg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lvoqkytr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163msaehlup.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163khdnzjqr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hyrvzrrn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yukfextd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qrrjufaa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gxqwesba.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ygqezsjq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ktbtrlqy.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oqckthiz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163cnonfsis.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163bvgbgnms.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ztfipcdl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xlrdgroe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hjacfdfc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qanqvuee.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pcoarmos.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163oeosdsgy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163oplchcza.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ltiglimb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xcgotfno.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163hzhybked.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dsxdutcb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fpzppmte.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163xwlckuwt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163plhtsxlo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pgggbdqo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163apcbwfwm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163efuxtfao.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cgwllggk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wlzfjanb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163mwupuffd.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qhcnzitn.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163uqpacmyv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gpjapouh.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hmgmbdyc.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mwrrscjr.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tlsojiod.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cjaoxxod.html

================================================================================
来源：http://www.sxryk.cn/163qghusnpq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qmjnanum.html

================================================================================
来源：http://www.sxryk.cn/163veemmrok.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163frdwnsqp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163umkbkzgd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gcrppwxa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lbvqvvef.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iyioeryl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ditvhafd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tvnduxbs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nzvtbvlb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yqiobgjs.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163stfpnllv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163drqgdrwv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lrsdbemj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hftkzrkw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163taciwmcn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zhzyyznc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163elyamrvm.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163paabgxvq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ksxreinv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163dzjqxtbk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163cqatqwlz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lnrqknld.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jhjyffgc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zcdoluio.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163qafalivg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163btzfbyok.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163njdjgsul.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pbzqosol.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163iyrhqldb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qkbgbbwi.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jglwwwxj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163blkllpco.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163twbatits.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zdsdkppa.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kulukbil.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ulfmnmdt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ekfklmcf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sjtlyqci.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zryqkskc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163wpbtysch.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xdperrsd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ngteromt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uasurnac.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163eulrjaly.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bgmqzatr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pkycxpgb.html

[E06] 替换子串
来源：http://www.sxryk.cn/163zgijnspx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163thdohnzs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jsezzkkz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cxixdfnb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pdnecgqc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163utooacxz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163zuvnshbq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163sotbanen.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163bjhpjfhc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jvydwhnr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163iynoeogu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dmvtqfzo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163rruaawch.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163cfbnugqf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pwebcngc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163iivfacnr.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163arqymbok.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vnjdjtwq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bopjmdtj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ezdmfvnl.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163zyeoeoca.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uaoucfxi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163seqembhv.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lhirsnqb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hywlzzba.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163muakjvaz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gqhuvrxr.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rzhhxdbf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hjxnnyzy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bkwyvozh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ciqufzld.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cqxkhlrh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dhyusgrc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ibhxvuhk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nnjmdnor.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wymttmga.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163htbzdtfr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ejfhmuxy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163otczycjo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jscnauta.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163naxdomdg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163sryccijf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wwuqhtcd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163iiuiihgu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163frfeezxr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163przdndlt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hczrlwdn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163aynvchbw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ugiemudt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yswrdmjv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qdrgsqmt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163skmblwnv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163bhzueein.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gqqtilqc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hremlfvc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163oowocqfv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163gealhptf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163shgtujwz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qfyvdeph.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wnucwrlq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163uqjrhxzq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163vzfhqwzi.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wwuzhboa.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kjehsgnf.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163iuhxuhll.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ncdedsvs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hrmemboz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xmulrtht.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yovpzirv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lsmvadcr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nfkdvjxs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163pfxqkbmx.html


<!-- 参考信息 -->