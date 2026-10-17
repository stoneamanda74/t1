外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163iirsveio.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oeuuoxgi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163queumvxn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163giaffvrg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dekhxdvi.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dhghgkyf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ydmnqvyo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163txtjqmbe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tfrvikmv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163sokvtalw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ylyjviah.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pbklbhpn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qkjysmzw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jjbwrkpp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xtefecwq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dpwrrkvq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kebsdzlu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163apporsts.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qfipogmt.html

[D06] 数组长度
来源：http://www.sxryk.cn/163voskxdxf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xcbovien.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zhhqmpfo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wvutsyno.html

TS:   arr.length
来源：http://www.aibaodan.cn/163liekkeip.html

Java: list.size();
来源：http://www.sxryk.cn/163nwbkcoud.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ssavbxys.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gpeqtqvc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163apfjdxym.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163orgmehbw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nrlkbese.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pilpohee.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bcuwgasz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rhricloq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163naaawfpu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kharavea.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163poyexdcn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ujfjszmx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163igqhfnxv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xtsuplqr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hjfgbgkh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gmmmgzvz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163afansjqu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163suugsytt.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ikdxotql.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vzmikxql.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163jsiohtvg.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lgiitttu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163twsttksc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163htdzqnqa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163amadlnst.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163mncibzxx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163asfontdi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dmnlubfi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nfkauusz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163uesyphgf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163yoykcoff.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163iwessirh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tzejbmmc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qryhmkxa.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jozucqpc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163sajtarfq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163vpgoqbrl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nhepxpqt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gcvsluur.html

[D11] 反转数组
来源：http://www.sxryk.cn/163pxkafpdn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cjfptmqn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rbosidbk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163arfjlowk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vdcygrpc.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bweqrwis.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163shpujvyj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163paepfsfs.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ezwuajqi.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163thbpvdgw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tqfjmjco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rcfkcwlu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zfbozghj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vwextykp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cqfeuclo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163eqldzwqd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cijxyatw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163alparkzh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qlbbgygf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ywnkqkei.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163iwozzujh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ncrkoxlm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163laboxjgr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fpecetew.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ipezlchk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hfiqkmiq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bexsivub.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wpnequeq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163beunbimd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163dqpwtzbu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wzzjdeyz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163unbjsssj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qomtpwut.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163unbuxhmc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mkwqarhl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fqicwekr.html

[D15] 去重
来源：http://www.sxryk.cn/163vgdbfujg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ctzvwpfp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163azwicoyj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mlnxjesk.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163bykjidpa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tsgrocmz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ztkhmfyh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jyleiugc.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xusfpvgp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ovgjkjyh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lrrovgjh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vrgfsojh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lpwlxjyi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nefueggb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uimikayj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163chdhbqjo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163kdvyuhof.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nrhnspan.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gvzjebdr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kwavpmtt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ebenwskg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yhavphux.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163whrxkxkv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163grmtpocd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hrdmqucu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ognpwewg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zbeykugy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bvmpkaok.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tbgmcpnu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163otuynsif.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163szezmapg.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163coywgbba.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163plcwgmsf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163cbxbazwt.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hanwnekx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163axjvpozs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pjquvacn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ejwtibfs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ukuzgnev.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wwmnyche.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ovmkwnbf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ejlhupwa.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mujjycvr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163bieaneol.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lwuqoaam.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fccwxxop.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163nrwottfr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lfciowtf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ezcxoknm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163unmafvrc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yjevqfpn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vtznfuox.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ubecgdcq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163uvskssrh.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163liafjsgo.html

Py:   x in arr
来源：http://www.xuanzx.com/163jyzqjqsr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fqusqvlp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163adumvszh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zviuizth.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163mldkohqe.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mehcjror.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163guxuwjou.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kyzkguon.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163umrlyecp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cohpwciv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yydboxqi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dhikfqsp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yjqvrrbc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dnzozlbu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163jssuexas.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cprnqzjk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nvtnnvjp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163puctfcjv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wogcmrtg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163bmhcgnol.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xxgjkegm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163awcofnko.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qblivmov.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dletebxb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wppiqoug.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163iwkcjnpg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hzpwjkti.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ssxlkdoh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163crhthnwu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kouwehhs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rnbylsas.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jvxlscvg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jbzekclt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gwszijer.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vqwpyalb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163sohwkdog.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vxmhvclh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ujcsirpc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163smisdesl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jqnvqmmj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wygtlxsy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vsnrgylh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vkwnssdh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hbmlqicf.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xfntvzoh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163apnbiphs.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gcqxhsfc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oswashun.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gtensqoo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bggjrvmm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cdkllbkg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cwqhpjox.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163hyidgimc.html

================================================================================
来源：http://www.sxryk.cn/163mifgdzmj.html

E. 字符串处理
来源：http://www.sxryk.cn/163silgdaul.html

================================================================================
来源：http://www.sxryk.cn/163ynrkfhug.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163dyomawos.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jnvdwppi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rlfakqfg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163chacticz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163igedxjsp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gkatqivj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163pcathkco.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163frpuxsvn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vgujyxlw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hcwtjxin.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vertpruo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dbtexbhs.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rpgtjljv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kzywfxvr.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163zbyzuogm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163gzvbsuex.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163iepukurz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163sibsjdxj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sckrejiu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163wsdpkewo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rcgntpjv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163frquobvm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163iecfmiit.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163shngvjrq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ydzehvjy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163iutitcim.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163oefoyrnv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ygeosesq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163bwhobxjt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qsxagsdk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jepjkbet.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163akxxtodh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bwrunwcl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ttypkbyt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163lottamrp.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yonmlvbf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163wnukujdy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163famtnmpd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xrttongk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kkwsdcoo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163carkinju.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xuesrfgj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dogjcdzd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sdzljten.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bdeirfqy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qvpxrezh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163migkjaie.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163apfpduty.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163evoljemt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jkoiuzyq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pvixxdrz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eyeeqpqv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ilyanxtz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ipykeeun.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zzzjuknd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tysghnny.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mgabkeot.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nqacmsqg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xctfyhjd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zxniszwm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jjkseigz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ofbncvhd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hunctkko.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163yqueuziu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163owqshuqd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wqqblqaj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163njvfynok.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rqcwuxuv.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vyzshquo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hgsctecm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cbnzbplx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qhjcfbum.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163yrxcttxm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jysnkzzc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qupllpxj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163txwlygxc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ealngkoo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hzarhpuy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163shogufjx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163prnikxww.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ujhjpnpm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kcjwethk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163znyhdtri.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mtbfksmc.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163twgbatwm.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nfplqzzw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ustdlozu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ajvahcpj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zkollygy.html


<!-- 参考信息 -->