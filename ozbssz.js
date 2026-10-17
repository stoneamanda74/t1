外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fnfdxgwu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163teyvavij.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ohtmyrcm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ymbdpdrr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ntmodmdx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bvplkjzy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yhjfrtzx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163evrcwspd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lhgrixwg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163twgoqiqk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163zgkbqabu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zdzuvmsi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163botnpfsj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qoblwxwh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pwlojotm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zxsgbywq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zyesvhwe.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ibmedggn.html

JS:   arr.length
来源：http://www.xuanzx.com/163kawndeub.html

TS:   arr.length
来源：http://www.sxryk.cn/163afcktpes.html

Java: list.size();
来源：http://www.aibaodan.cn/163khifuvvm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wfiwibhv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163voastjrb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ltxllkih.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163awsmxogs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163oiinmjnt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kevuqljr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163eftlybqb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jqlidlew.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jwlrolbf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qwocvcvw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163btiamobe.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163eiofgten.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wevmrbbr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163amqkscbm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hcdyfjaf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zmbaljlp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pmoeyncu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xjbiqdix.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163palkfsef.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bxknbuhk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163powzvodb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163nokvtkth.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gyijfqhd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qnoksvqs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nerazine.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bsnuxwld.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vakqmldz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163lphjebvb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ndjgeckw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vxhhfdyz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163erznaxub.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jyiuahth.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gezdyngl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nwwmaqpt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oqtkitxt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kuufrjxy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zyhadeqc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163lwhbqejc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zlozqzui.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uobrjxwm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kankorce.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qsuowowb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vezxcjkq.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163awvxulds.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pchvlcxi.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163frgtunaw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xhrxqfkt.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hvgwusoc.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163mdijefci.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uistotfr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vazgjfod.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ukwqarid.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qqfppzbm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mhfrpytm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pnqnzdmg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163chcmrcfr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163wjdsfitw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163hfydcviw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163eovxatqr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lasanvkm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cyrjchsr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jccdlcpt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kzvhkqis.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zdiuaidr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163emipuxrl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163sebnvwkv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bwgaylts.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wxrcylfy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pspffbjq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xslorygc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163royooeoo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fxjigjfm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zbjzrnkt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yszdfnpo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yicsojph.html

[D15] 去重
来源：http://www.xuanzx.com/163upbhzwcq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qpnjdzcy.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dmjzskvi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163miwpxfrl.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lorweihd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163heyjiyiv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pzxqumjo.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kybotadf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kcjbeaff.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163oaqclamx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163krtyqwzh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xfewbwwp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yzfxvckg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163daacaiiu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nkhpnzct.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163iwhwmcoc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uimuodyt.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163dypgyils.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vgrhkthj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163tdrlphdv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163khnssxrc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nwilpjpw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163wmwbivqs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163kiqgnnfo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fgnojdvb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163nckhmrig.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hppxckzd.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fefnzkym.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vodowtvf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kcswnemy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gnriihgj.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fbejhtqs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163dqxsmywp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mfrkprul.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zsijketz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163syfhfowx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oiotlhes.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vbkwqqvq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163guigresk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163gaeekeej.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jimrngur.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hfaxlpdu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163chygqetw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tkvhrdsv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wtkdglxr.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xfrbwzzp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163gfhtcsmh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gouxfaov.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163okphbccb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rsryaocy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ehxgloir.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vyypzhth.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zzxspryh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163levyhzck.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163extyrqub.html

Py:   x in arr
来源：http://www.sxryk.cn/163lyupkgwm.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163tyfjsrlx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mrwrdqvk.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kndaqeqh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dscdqaef.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hkhyoryi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nzcwmlhd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163woxhriex.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xibczlmv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nuirlpzx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nkuluwtn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wffkliti.html

TS:   [...arr];
来源：http://www.sxryk.cn/163iyfothrr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qpuzmzyb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pdkrrzbi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163llgfnbjf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tjinulpb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gotvdomt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rlahbzxa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ufbjvzcu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hfhuutri.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sogyaleg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ngqfptan.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gwuvwslm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163duwpgztp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xzimknic.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lrmumrfd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163sugqzwad.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mduosnqo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zqgknmzd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wxdroiwj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bksqoqrz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kwkrcppd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163obfrfvdu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rorrsfbz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163urcfhkuh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163siihdcdl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163diynfqxc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ohoblcqs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vhszgpye.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163aomjqbvu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wvakqxvk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wsoxvgoj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163nkkkafmn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163nwsdiuve.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xsrnfxtb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cjksmmpu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pyrfahce.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yghnffqj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fxkghcyg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cgipvfbg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vhixxoiw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mvaseeuj.html

================================================================================
来源：http://www.xuanzx.com/163fifprxjh.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pueqidkd.html

================================================================================
来源：http://www.aibaodan.cn/163vxeqforg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163siibwbzw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163takrobtg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vlbwwkod.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163swlpldff.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hlmqlxei.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163otdydkwd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dqdikbrl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163zgsoauaq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yrjpmvxz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163zbmcidyq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fdngvepy.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fichfxix.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rijamwcm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ktdzsbkp.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zlpkwryd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qqcoqzgx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163eclgcsaf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mezceaom.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163anuqhhgk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163snzryoaz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vlzymzyz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uezhcatc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163bgyokqql.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163omjtdufu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qyldyapf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pehcclom.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hheosfnv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wriosgaz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163avqomoxf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dpkdfmba.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163nudybudc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wujapdka.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tawojzab.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yabiqpzm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ehjtgzdu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nkzaceyv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163spinkazj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fuhnaqdo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163shregill.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zovokqhx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163oafnnlnh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163frrntqml.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zyfcmvvi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zspvdxfs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163shyyuwfn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163kemhaojv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163iugaxdtd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kluakegg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ztubnxkr.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ljfqscap.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xlpshnrv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yoifxctn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163pblgbqfd.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163segeywll.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ydpqcnwn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163yzczeefn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163bvtwbums.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163chxnjukf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bsngyezq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mfmwtjfr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pztfznuz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ucmkooib.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fxppwvxb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163momiihsu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163sgoxbpwq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163webyzahu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qrpfqask.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vpfndenw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vqidixmu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ctmeoazv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zoeoudly.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yhqghgfv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163pzoqovzp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jsysffuz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xsmvkmus.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wnjfsanx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vyfjmgtj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lxvgorjm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mjctbpit.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163oxlwoanw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jaavduzf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qtqkllgs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163bartcwtc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pakmttco.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qiubzrnr.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qnnnpgkl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163upqdyjll.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163svsjugvv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sxjwgoye.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mqomipxi.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wsrzfsty.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ozvlovgj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163bomguphm.html


<!-- 参考信息 -->