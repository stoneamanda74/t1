外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ttxiktis.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xhhptklo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jigvvrbp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wdlexasi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mhvrikwo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xqeuqycd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ylwybjza.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jokebohg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163byjkxdyk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ingsvpfd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dypnsjmp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ivqvtfoc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163criovovs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vtexijev.html

JS:   arr.length
来源：http://www.xuanzx.com/163zdrvomqj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ivufzdll.html

Java: list.size();
来源：http://www.sxryk.cn/163xumytflu.html

Go:   len(arr)
来源：http://www.sxryk.cn/163egwolztg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fwgorycj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hgeikgkw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163csoojzzi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hjhifryy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rutefrwj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163clpgvhzy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qsyvaxvo.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dtxsjocf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163indguhmh.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163cvpumhmn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qfovtcud.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163stxqhvjo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gyaqtcep.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gisygdjm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ljwsfjvr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jhvnzkcl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ooevezrh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ptnrcstb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mslipsql.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lwujatgi.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163wciquccg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qlhifmxx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tvelqkxv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gehfxfbp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qudselpl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nbwzxsjt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tckidlil.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tpsxhoxc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163libbmeup.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163fpqopejk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163jqxqmrmt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kdrokwkf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163phrcumsw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bncxftno.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hqbdmmpd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gfbaziza.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163vfuembbo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163spmthpgo.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163smyftxdr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163lpqcflbi.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163pzvzstbq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qhpnjquv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wmcqthio.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163asovlkdt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xgcwfuvk.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ogmhbesc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163edhwsdkh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163qirdfusg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163awihohdz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163nsxdlmte.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lmdgwpxh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cvogxejg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hzcqmlgx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wqnpbakt.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fmfqpqia.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163messaoal.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163opudrvuk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uikicgwh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vfgjpdox.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tmawmjsx.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hnnzzrht.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xxvtazxx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163osnggiyg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163pwrdxndq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xlqaallh.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rejzpnzn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xakafecf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lrtddgae.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xgeopyfg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iplydqsy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ppjelkzy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ssoaihxe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gsigvomn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163nzumsqhe.html

[D15] 去重
来源：http://www.aibaodan.cn/163vyymklsz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vmegjzcf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dviuaksq.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lhdhgame.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zgttehpi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163seikbdux.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xbzfkfzl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nvphfpxo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ekbgarms.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qloswtxg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163euygerlq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xdsapniy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rowvpubi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163okbtxxsk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pisyvsov.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vaxvyfbc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163egnqxqhb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kswmruti.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zrwzgben.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ladfcjuw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163asvwbdip.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gxjipxul.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163beanxbsk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163pdykbtog.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jzqesrqv.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ztzvasfu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163grhsfxih.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163onuswjow.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163unldwtze.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163obbvlkup.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mpqhamjk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pfjshbtq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sqbluaqn.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163argepiih.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fuvjuizq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163smcmlrsj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163rdtpcezn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163iyxxuvdv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xmzdwiih.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163uskoqyag.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vlaybail.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hmedrteq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163nmtjfrkn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kcuerquo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zammjegf.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fcynzgre.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163buveoopq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mwijabzx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gsgcpusz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163irfcajjm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fojijqsq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163cieatapo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163pujvnbfc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kruoczcp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hxbzlvwo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nsaesazj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kcnozzpj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dkeoddhn.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163htrttqmw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hpmjqdya.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163novrvgfn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nbwyfsil.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ygvmfyqh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163htclndxc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dsjkhcfv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cpqqlgsf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163flebtval.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mcaqryhi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hyscghmd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163prymohco.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mgmwcawi.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tnrwpocj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163skoavmvl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ipjyhmxs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bfqimadu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vbmixcgf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lkdftmzz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kbdpbjcr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gscciomw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ccphibiz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tdfumaku.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qvrozvcu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163uttcpwmy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qwapyavd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163tgmsnrkr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163usfmpplv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163cgxuwqgu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vsrwosud.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jsyujpnt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ezckpxgm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163kstjpmzy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uzshybci.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163fhjzwoyr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zectuurp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ygrzfyuc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mswowdju.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163povfriye.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163uukbcbut.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163umpelozi.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rrxvialr.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sbvefnjv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163uqbvvhvy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163exadjpiy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oiewcabj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vveydlhs.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163etfgydot.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cidvukfw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163txcrykow.html

================================================================================
来源：http://www.aibaodan.cn/163utvzffxd.html

E. 字符串处理
来源：http://www.sxryk.cn/163ywuhmcuh.html

================================================================================
来源：http://www.sxryk.cn/163hzzumodk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kceloxpq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xmzkijup.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dysudhpb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iynlmrpl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nypmztws.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163yhndaoen.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ixsjraph.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xghmohyw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163shoqkndm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163iqtaexea.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dzywtmob.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163duwqgima.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163umzddlch.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163khxzmxgo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163evpalqyt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163cnmoxwzr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bdbrdyes.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163walwafcq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163yntoinsi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163extidjlo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163zitlafmk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bgqengoo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xmyrpdha.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163coayacsj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gnfmnzca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lbrzusjv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163inoxtahy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kuazbrsq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zcelwdoy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zpodvdzs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mbcdllej.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163shhztzlk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vkcebctx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163nryjsphd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163akpyhzjy.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163kmjufqwa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hauzgiou.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vmsevrzh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xpjvlxol.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ikubnyad.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xnxlulzs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mkojakpy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lhbrbnfg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163oxfbaasy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163swsuxsev.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dprrxvtc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163alejqwoy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163okmitdsz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nmawihxm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lzleozet.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sazzszzh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jkjxvwgc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dnmsdxym.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163risshprw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mrdgaemy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163lfhjfjxb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xsxsdelp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zvtzmoix.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wclbnsju.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xhfmuecq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163uapfvfha.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pxwqxjkp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dkssuyco.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163osnfffhr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cxnmxwkz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ypgwqxtf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163znldbovt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qzpbmarf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wanfpwro.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gkvxifxh.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vqxjrhlr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ingrlkri.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bscbzvzi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163awkyhjqf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mexicqnh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163foqobitm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163muuwmvoq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ulypraet.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qcevrvrs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mrphpejt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163dbbjamol.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163luwmuxby.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wlkrtyim.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163csoqqxjk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bhvfcjza.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ddvtbccd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163eyuqhzzj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qoywlxrh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163uuykrabk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pxdbsfcd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jeksuege.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gagprmfo.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rhpzsxbx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wnuncqow.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vquscqfo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163yptxdcgm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fqyorvxw.html


<!-- 参考信息 -->