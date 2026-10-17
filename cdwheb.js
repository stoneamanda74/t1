外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ewnyuzgh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ozsquleq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ganrvxho.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163clwxknsh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jdmsdbix.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163waiydkne.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gbnxgqjz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hlawcoqe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ydzhvufl.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163edpgccpn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nddsfigi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163igoitufx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oyecuokx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163exmsuqlu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ylgbdecj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vilfsnnr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163qaxmowcw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dwiyyigs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163spfxovmm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dbzflpft.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163fhkttusk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nktevvkw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nekxrmoh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163oqsdquff.html

Py:   len(arr)
来源：http://www.xuanzx.com/163aeoereuh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qjxzubqs.html

JS:   arr.length
来源：http://www.xuanzx.com/163pgdbrvok.html

TS:   arr.length
来源：http://www.sxryk.cn/163imldaofr.html

Java: list.size();
来源：http://www.xuanzx.com/163pdzcyeen.html

Go:   len(arr)
来源：http://www.sxryk.cn/163borzirja.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nsnhvuxw.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ggomcbne.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hmdvntep.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mgeckyyh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uvcbsnxa.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bjsuhxam.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lkopozdo.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163akqjqejx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gxijyvpo.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kcnggnxk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mfmqxvwt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vysowspk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qrbtwgyj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163enlrnqsn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kmlgppvl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163cmyuatqh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nmvkqsfl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hsyklfvz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wbuvbwox.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163cxpepdso.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xaxulnjg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zntbbhof.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nnmezijz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gmcwxxui.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163shexpzwh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kaazuqhk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163poltatdb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lgquiajy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qjjchbon.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163qlthvzhz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xggzbvei.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163krxzjszq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kswkwfda.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163psrrtics.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xdcetqfa.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163etzfptkl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rdbwmdxc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163lfyfadan.html

[D11] 反转数组
来源：http://www.sxryk.cn/163edfzwhle.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nrtstojc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zktxsuhn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bpyxyvqt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jxashuow.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xdgyybnw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yhsrzozq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163sopnyjnd.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uinihzzk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zeojcbiu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qfhosrjt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mtwhwpho.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ggxiisrn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qffqctdj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163skqhbbwq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ljxkrjcl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163volqznfi.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163eslqcanr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lcnqnckf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cnajkwmi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nfziqasc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mhswrkpn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163skgfwmib.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163bgynkkka.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dhzaaylg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ncjkekyg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163yweduhqf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163odeiqnaa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gmfhighu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ycpzlfvo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163djiutquc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163baipfutk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163drdsuckl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zftwqifo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rmvqydob.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ozsjqarl.html

[D15] 去重
来源：http://www.sxryk.cn/163iewcbfot.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uxlxziow.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hwwjjvqf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163andlfktl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ataolvjw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163thkthkpj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lyingkpd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163iwgdwntc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cfbnlrao.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fuddasls.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ttgcgehy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163svursnfl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fvhnkzso.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vpaigvey.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163chuywdxv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ejovukhj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163gsplibzs.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163msuzjgih.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rylnnwam.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163woiuhxyn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jeijduio.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xougkvop.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ohthkvnd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163byqszgua.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pmoudzhg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mpiwzqli.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163cxzajvzi.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163oqiizicu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vnpaplfp.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uxbmolmi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tzdjasut.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wmlbsyvp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jpuiikim.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xqrdiiar.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ewjuoljl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163pygftaaj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pieqcsgy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hgjdkbfc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163munzaxbz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163alvapjcm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163keiqswas.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163taupkwsg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zniacagp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gbvosyvt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163fqdechih.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qyjhdyek.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zwjoapxl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163imashief.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fernhega.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hiurjuzn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163sveqwjor.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mlesdzwg.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fqomshcr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qyckskzv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xdzufggr.html

Py:   x in arr
来源：http://www.sxryk.cn/163ikrcbvfq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163anyyptlw.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tijypbxw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dgvsnyun.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ljqbnyvi.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nafwsvng.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rdialjvv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163joxohofw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163blacubyd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cyemfauj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jxnwmxdh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163frgurfpf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dlkokvzf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ezfsyxxx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163dkhztalb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xfjwfgoy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fxrkworc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yygltcqr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mvgifrls.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pspearmf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jxctminf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vxmheflm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163uuasshoh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hkehynvr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163fqjpjuwr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fyiahlnz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163esdnvsul.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bzqljken.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mljhtfle.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wxvcahfh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ttwdzobh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xxvsbwry.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rhtjhwtu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vemhvehj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163koglplfp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163iigkzxdr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ngsqcxwf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163edhirlfd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pkfjezqq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hwyimklj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163arbbaydo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163grijeaiv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kvgafavt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fygypzwh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jksfpzoe.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ssreebow.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gtyhfqgj.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xpcwmuzi.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163gkhrupea.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163crzmxkog.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dxdkqigy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hrevhhcp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fedhmodf.html

================================================================================
来源：http://www.sxryk.cn/163sansxotz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163znwswtou.html

================================================================================
来源：http://www.xuanzx.com/163pduirmty.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vmsfushj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163drfiwyqv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pvrmftof.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vwqmrllm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ohltflcw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wuywuuyp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163duswynyw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163jdtrjlng.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zsitocua.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163chcepukv.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163krtpvmhu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pkwnafze.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mzlisygr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hrhvrirc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163obtnwqps.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163oalepzkc.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bawkknvf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rqtmylgt.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163toptxfbe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163dyebljkc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163geppxxno.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163hnewlqgo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zvbftidv.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163uahleafn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163xnnebxxx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ssbctukp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mccvdqme.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163alfztdky.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lggudctv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ilqyguqi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163qelpeajb.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ynljwqmx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lsarozdb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wdnyowcz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bokspbre.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163unsvmvrf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dnzggllr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qmndkmtm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uzpzhpnf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163paaubjvs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163sabputwa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163elomdknw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jixpmhow.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nwgidrzp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163llmxflnr.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ousabibw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163muyzkqjk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uidczzkn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163deoviioy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xhimuakr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iatoibop.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wznfopfe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uicrggth.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163agcxxcnp.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163neibonkd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yhdjquon.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jjqddhpa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bptefzfh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bxfspxhs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qknstmxo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bdjvhjvb.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163viuxthnx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163deqomwhm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ifcmxmzu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gljuheqb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163itzuasku.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163xemvbfzu.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kykrkkwa.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qpyqynwq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163srbgrksq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xbuthree.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iukwnfud.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163xszcnqyf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163sixpcpqs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nzsmcuim.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gwpxhqky.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wfmcldou.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iwyjbukc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163awuoivbm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jmdltorn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cmqvafrz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vgaiwgqm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eqqwlbes.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163yfkmetsq.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163aboeiwek.html


<!-- 参考信息 -->