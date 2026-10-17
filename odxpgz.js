外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163dmshmvuu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ptbxbelo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fxmpbfpo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rjsdvwox.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bahipnpc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163edbgyyil.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wlvsgmot.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163meglzpdc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163anwzdpwb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163puttwnyj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wwwmgfcs.html

[D06] 数组长度
来源：http://www.xuanzx.com/163izrkdeff.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163eejfejfw.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hqadfyqz.html

JS:   arr.length
来源：http://www.xuanzx.com/163gruswgjk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mdyxscff.html

Java: list.size();
来源：http://www.xuanzx.com/163czfnkjis.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163equjfxil.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ptlfqqxc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tqojwpjk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163eugkiggw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rhkbphff.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hdobjpkx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vibcoqmc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iobqwxyf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163djpgmhca.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163enkduscc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lnlknhtp.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163gvolrybv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163emymnvbn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wnlcyyil.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mnfbfbhx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lravardo.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163lagqrrhp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163shcyjskg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hgfppqkn.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xbughydk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fllvcxbr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wvgaahlp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vfekviaf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cktxegmo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mgxwjtey.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163crhvjnfv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163yvlybvsu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dspqbqen.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hjfzqetn.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ngtxhtni.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vipdjncx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ujqhmeks.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tyyormbm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fykplhav.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fxmagtsb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zclnomwo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vdzmwkld.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xlfgmrdu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jhxgrvaz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xilnvoza.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163khfbgndy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qzdlwhps.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163xbvyzsnz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jubrcxcx.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dndgjvxk.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hurmcfcg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fhhiptmq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jmdmzzyy.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163clkcyzpm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rlwkhjix.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163aqfqvpjx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163twagalls.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jljpabxf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163nbdkbeph.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qnzjrbli.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163frwwgrdb.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163npuucinn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gzrikkjs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zhtwayke.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yrypgrsx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ilkbmqpe.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wksshttg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163yjyquauc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163egawvhgq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qhiqjlxn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mfgoayrf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163obxqzwqg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hoxjfsts.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163neodhmvm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wggxozlc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qdhyqgvh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qfpwbndy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rfrcxapt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zztfcfwm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bpvvjemo.html

[D15] 去重
来源：http://www.sxryk.cn/163hzlfnptf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cwwmfjfj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jauzonev.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kvlgujvc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163edusilrl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xmdoakys.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uuulnsnx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cniufava.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wsxgasjz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dvohdzvl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163yqbzvdem.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nildjhuu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163funnbkbi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zfngyibm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163eacshwax.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163iyhdorqo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xhqwpatt.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163mzqywqal.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wvswpqyk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pvavooon.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uhdfhawl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163kflvhrxs.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kdhoqdtj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bcqyjojz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vqamdnfv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kkuxitgk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nuprjtuc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vypwxwyh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nnsysuzk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qarfnaan.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wdwjatzr.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dbyjqnyv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vxgfqbmq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mkvajbgu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wriqyjeq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jugzzzqh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cgulmiob.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mvqdoovz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yfxvhzwh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163crsrkuih.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qcqquilj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163krgwywea.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uyvtxoaw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gdxnrwue.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163otonqfov.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qhvffveq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qedyaacl.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mtoeuaqs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hekdpaoa.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gskshrue.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163btriezlg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163fnadjaaj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hfagtduc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wlyzcuia.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xkdjuyze.html

Py:   x in arr
来源：http://www.xuanzx.com/163aweufaze.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zpxptoan.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163aonltmac.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uzqcqecw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tfecnchc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wqwwolwn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163aslbosxd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kuakmkgq.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xwnbbrqe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zdotqyzp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nwtsqlju.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pamjivqd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ounvhoke.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163sfxzheve.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163oadgnixn.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xclvcgar.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163usyvvcnr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tdouyhfk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163texxsooo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163oguscski.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lgkwqxua.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gsdolbnp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ndhdsahk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rrjwunsw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163abfzaxwq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ofcvyqxd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fsirauep.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163exegsmlo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pzmmguui.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163endsbxpl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jskizbaw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163rpkmcdgv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ghknevem.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mdjyfmld.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qznvbgbf.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163cjuoevlq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tylgohrk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qjtlkexq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163mjtxorkr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xjhxmjug.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mlvmtzsi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163pcrmxcqu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ryvfeiof.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pfewalsv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bckaivvs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rdlbtbqc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wblfqbeb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163npctbnha.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lhwxujbn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zefyomew.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mojhujxw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163llbwxibb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163caosqpzb.html

================================================================================
来源：http://www.xuanzx.com/163oeppizol.html

E. 字符串处理
来源：http://www.sxryk.cn/163vskzrgmt.html

================================================================================
来源：http://www.aibaodan.cn/163jsowezjl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ikdkwbuc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aaegzlkl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pvqygwyf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163shinwran.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mijzwkhq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jekzxpdk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163nrqugxuk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wyixgezh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nfaehwnu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bylaaivc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cjnhunjl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163klclehjs.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iziypnhe.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rtnnqsvc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163nkkikvcv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ufqrexkb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tktjpfjf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vdiruljf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dfhanbrr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bcnriaxg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bwrvsbio.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cxgbhvgv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163eifpundb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gldnxqnt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163bdomntub.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vkjqxqcy.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jmhfvnkg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163nscqsnpe.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ahjdfqsc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jhfsvktm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rsgpyzta.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fncnjsdu.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ikcidkui.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163invxpbem.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163efxalcpy.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nzwpvrxb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163acerylhr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163oogbkbgv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163psthfpqp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jodenzad.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iwxxfsjh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nmtchcgd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163pyjfmunh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163wgsrkold.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gwdamrgi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hwrcygay.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vrltdjhd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163oanoouva.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163claiikce.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163imnrgagi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hxavnecn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hlymgtcf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163krhhszhz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163btohvghi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nvamyboz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163isbfdful.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uohhgcra.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wkymjvrx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gmchfpcl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vklroszg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vlutaxdz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163puravltx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ittamuqk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163iagsgjfx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nqnfpzkm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bgcejsit.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163casexuey.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163luhpzeta.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ysmnryvw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ijfawvzh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163mncyytje.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xfnzzzaw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kpkzdlua.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jekbfncc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163oahtxaym.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hmetwsci.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mvmjvixy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eslqkzwx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fnqspuuy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dxlwqfyo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163upfkcico.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pxgkdtus.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nmnebcbg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163aieyjckg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uosfudam.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sscfzfyg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zoavyzgq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163geldcour.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jjsqisrm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163awvxnijb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163alnrydfm.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ckvrcqdr.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pohsnssx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kvxvowpk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vymqzsbe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zrrzrvir.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lypupciw.html


<!-- 参考信息 -->