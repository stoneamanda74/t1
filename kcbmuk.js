外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nfmixqln.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zcvknjzv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wwwmdfzv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163aimwhziv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163gnmwxkvi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nzsxlntl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oazzxxxx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ddqoelvs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ijeiwily.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wfiesffk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mfifrkjr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nvijoflv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163porgimud.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163inkiknoj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ywdpuypb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xhwvuted.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nufoqqxh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ndppvcpa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fxpnlsta.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ihsvtlbu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163micihkiy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163divnaafx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gdctbgbu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163oyupbvvh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ektaadoc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hthkmcje.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eenlvafg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ovfbtfdg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163eylnrwtv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163aryjjxyc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hyunaxmx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cqcsjeag.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pdczbjun.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nbstbeqz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163adsvdxlu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hxgvdyov.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vlysdboa.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tmmtydkj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gdqeligl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163icxtpduu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163utwzquzx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163oqxpglby.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163povzzcir.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zkzswobd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mdssfuli.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ujhrhzce.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ylootpdb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nrczzvfi.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163pttxqxfk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163docjhblc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163uftsokyj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163olootasu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zozzevqd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ahnrasbn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kfiopvwz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tluwwtrm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ekquikjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wngkpevh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gaxfjiir.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zxidtvuz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jtufwill.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nenrizce.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wgquzixw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163stfjjmbz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gmtpqdpq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163pttqxmel.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zzspible.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163veanfddw.html

[D15] 去重
来源：http://www.xuanzx.com/163biextlqg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zzanpjal.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163spdedaiz.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163azrjtygz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ldgjlhir.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zpwylnbo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vkxzleoc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ttchwnev.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ozkblkaa.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ttffthij.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lmpcuezf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163avcsduoq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163taauucgs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mdztnoaj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163crfcvufz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163prehnqxb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fuymzozb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dogxhmzo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163gtwsapse.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163discyhln.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kmfeceda.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jlialjng.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163cqaqbtad.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qgkvclin.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rbvuahtl.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163btvhmpfa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fubpwrbq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dbvvmhdx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vctsqopc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163exkgkmuj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163xfzbykhw.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pfiwhcsl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163awjqekec.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ntktmkfh.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163emylwtgm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zwdenskj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oabbtvtx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163aukuaxch.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163firxcprf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jsggsnkb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lqrzdzgp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nzcfdhla.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ykidoeio.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ubdvvkds.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ykqbygsc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xxlvhiiq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ppxhhnuc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sbktbxzb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dioddler.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yxfqqxal.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163widruhir.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163eujflaap.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ghohweer.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ezqcuixs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qbhzrisn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zipoluxz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ywrbholn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jxjxqagy.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uduncske.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dhvnxwzd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rslgxuqq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gcgdoeuo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163irogvmcl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ddjwdtds.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163kpfshtux.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mgjslwyw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gydgjgao.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mtdhzoik.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zynrumlt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xewnkysr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163nzkceqne.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163sujmxayw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ogzzxixz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jxexwudc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zcbstrpm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ossdabyt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163puslpltn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gfhdimgy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163svcriaiq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pzicpnjo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163osqjhqvu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kxcisifl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zxjnnrbb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lqazdmdh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qwxcqywb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163onqgtref.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163aefngwmq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163aqngjezo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ntqbporp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bbbfzhnd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qhlsdkuc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163agqbrnrq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163djnpyzzq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cibvbqqy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ludniecf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vkariish.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vsorzenv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163saemwyyg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ssyqtxmx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xdkjrlvh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gajjohhs.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163rkwdlpdb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163dzbapaph.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hnhzeydo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bhergjby.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163onvaxvac.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163skfanvoa.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163byphpexl.html

================================================================================
来源：http://www.sxryk.cn/163fyblfvjq.html

E. 字符串处理
来源：http://www.xuanzx.com/163icmzesaf.html

================================================================================
来源：http://www.xuanzx.com/163akszaupg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163rdvznlkv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ownavlqz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163siszinut.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfxcoysq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hgrekczi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163noblqyju.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cjhnoqbx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163rpwqmwyf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163cohnkwsr.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163tosjlnza.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163tsnnmnnk.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pmogvsir.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163oqgonasr.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ziggguem.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bcjdffsl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163gpjbyxgu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163noqvorrl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163odoytjzk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ewtemhht.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163scyznjyr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qmrtqyys.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hqlqywoh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bagzqkyk.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fcegfyft.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163xdvijikh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ogiusgta.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jvxhfbyh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gjpdkqgx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163prfianmu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163uvlgjbxg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fsfhtayj.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ulnlocbl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163yixqeihd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163umimydeo.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163erlkceew.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gtwyfezy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bcdgwsfj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163niiztanb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163oeutkkrv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ytopxuhu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163cembeiol.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163woevvyqm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ymfwedhw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163riccofvq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wvllesbv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lfcbsevf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vagogrku.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ativbwul.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163raclwejn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iimwtovr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rjlemogv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163opccvezu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qcttynff.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pvpggszo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gupgeiav.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ssdjxodn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lrvkmheh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tzipwhij.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yblqjfqv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163egrxsomo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163mjbooydb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163rvokkgad.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ndpvvwpc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mnomnuwu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dyfjjksq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vbyeylle.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hdcvwkgc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aabgilfh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wjzzewoe.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cgawiprk.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163srrlvobs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jnrjsitz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kwanjscx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jekojsck.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163smcevcbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mdgxyxnh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vlmnedzs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hatkkjsd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bcjojrql.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qgozboqg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jlrbsgpa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jhofvkpf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qemnkgni.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dgcdyahl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xhxgtboj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tbfmbeau.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163duomnfno.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xmniwjnv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rnsygfvb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163apgdupjl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wiyvatot.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lfelfluv.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163urytstyd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hahscuhr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hxztfjwe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rmrfettp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lomrofux.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wbriinic.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ojbuyetn.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kndptzqh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jifddqgp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163sjsyybgx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163quyefvyq.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dnuvkibs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fujddswj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ebzndmif.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ipzczoab.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ydvxiili.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163eibjxrbl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pazrytng.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lkvrgoez.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163drzluqwh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qavrgfzv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163sbudesto.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163eatacjqq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xxbuinny.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163eytxsvah.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163plypkvhq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wolgfnky.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jhhxvlav.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zsoarknv.html


<!-- 参考信息 -->