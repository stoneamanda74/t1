外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163llczixhx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gfcdnppv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rwwyowpt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163udcazjdk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wqnbtcej.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163lfyictbr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163dzjnyxei.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gerpmkhk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qbxewmtc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ucnxsnjd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hatdxffk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bdsoanjr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jegzkkbp.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163muxasfvg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163asaxkmpg.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163bbgopaan.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vkmfwpfw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nphwyzpr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jldflyxu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kgtguklv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cvhlcayq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fgnyniig.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163borefvxu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yctmcvza.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163dmvinmse.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163irngkrju.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163czlevioy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cxpjgike.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163arbtqvdj.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qjbkztbl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xhluvkzz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163hhztxuhn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ztcrknrt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ujxjjpfe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yxqbkcaq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163icfjpicc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wquqtnpf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163sqcvoblh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163inlwgzcv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iewkfslx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mojxotmj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qsiwuhmc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dkctglne.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gwegowke.html

[D15] 去重
来源：http://www.sxryk.cn/163wfoylsqe.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uhziooho.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163swsjutxg.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nrubikho.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vdeqlxmv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xxdihclv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vjucitcu.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dnddjdvn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rzduevsf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rdunioii.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163dzhelxvf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163risaaoji.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tsuabnpk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jdofbvyl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163nqfuipra.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wgcrzuoa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163barfkpmk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yvvcrtba.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mxcijkfn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mpavikzn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cfliprdm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fkwwgdhi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vzlexboc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vbnrjjnh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dqxndwrw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gpaxyyrb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163doidkihs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163aalwwbaj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xtvfxuge.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wgxsvzmw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jvourlyq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gmjqwymk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163idihpoqz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gwdvpwgc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163tkcmqcci.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kxnmyjxf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xdqcrslg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qfurzjks.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163iqmveabc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fpcmjomh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bkwulvdv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fimnbopm.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qoqczqth.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zoajtboc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163phppcfjd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163eqaqtfgs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lfstidbq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163umkrtjtb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zsbmzxfz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ebtqyako.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zglzqxiz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163akiiajbf.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nhmmnnvt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cwrprgxq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163awskjogz.html

Py:   x in arr
来源：http://www.xuanzx.com/163koxnminu.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163eiexbpig.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vxkpnnta.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zoqnzdgx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bxqafpfo.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163thkphpyy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yazerise.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ylpmohne.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kiakmwvs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xnjbgtsl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fhaxsatk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ltcceehe.html

TS:   [...arr];
来源：http://www.xuanzx.com/163hnurbahn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dsmbkwob.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zimkpmdl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nkmuiami.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gznspqmo.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mmmelnav.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ymgzjfti.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mjlpqfrp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yowghhpp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163youmdbte.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zcpbzokh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163llssyyxp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ezzbhmgf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163uimpzyhx.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mgojumsu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163wnriiagl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163leckmlan.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hpsjzeet.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163etbcltlr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rzbzgbnx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163yzecfifb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cbnoonhm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xbcpmoip.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bpfeulme.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xlymntaz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hdyjbtjf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163hclcbiaq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163yduickcj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lxmfggep.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cglaaiff.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fzouikfx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ghcayfgz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ddfypfke.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163psctjfos.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mtyfacfg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wtpqibsx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dixpqzwm.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qqbbcfch.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jlklqqyb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nmrtolax.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qiqpgphq.html

================================================================================
来源：http://www.xuanzx.com/163xescczkw.html

E. 字符串处理
来源：http://www.xuanzx.com/163eltucvej.html

================================================================================
来源：http://www.xuanzx.com/163plleyloo.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fgtwvuvp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bkgspcwy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wbzdkxtb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163psljixix.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jlccyuht.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163queufltq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163tniisnpz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163houyqjsy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163igutsntb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163fxrnynyy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rsnstlvk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163rmrrxrtg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163fyhlggcx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vxhmatvq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bsnjayvl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lxtytlzb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wlpqlxcz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163offwyjjc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vlsffcni.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163lbtdayiw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kcuanxxu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163frcmnysw.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ruxgzbcg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163naxhbkfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163oytlmtut.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fsoaqdxx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163sksgsapl.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hiendnrg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tgvcwepm.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rvohlrln.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qiyeawhl.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163poxtcmjz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bnsbnthv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nptggzwb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zrsabarr.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gcmskkov.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xkowzrvh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ypmpfoql.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zmkorytu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163stzdbaxt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kurvxkay.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bktrmxki.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163uvgyvnfg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nmimtmpw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zsdtirib.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ydtazyuo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163sdtrtbxq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163evpskkyf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xcfppgpx.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xluzagpe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163myngmziy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hepermxm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hlacdutq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nublgshx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kmtfmgnx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cyvuqvqa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jovfoobe.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163znqtmvtn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cectoykt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kevywygn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163awwgnovd.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ejxxckwy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rdlbmziz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gozgmazr.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163chyszmgt.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ziffhpyi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zmtcdqlc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gtsytnqg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163halawcxw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wsvyeqgw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hakntctj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gnxagakf.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163tkelcjnt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163skbzowtb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fnkmkexg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kwxjumyb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pgdrsqrm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jvuumeot.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wsfqgtwl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163qzqjpbmx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iajbpazz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ugmcvoip.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ycsjwopw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163inisjrcj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163klalbceo.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iskwnkgr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xhoaogtj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ixsragua.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pxbmawke.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gtzbihvs.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jzbtcmas.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pbscbveb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tktxaaec.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dbyopgmv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hdwbjocv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jtcetikw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cqnmskmm.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iktwltmq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gqmpotol.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wodyhbfc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163sfwkafwl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lrfvxagn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vqavigyw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mlxkprnk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163asfdawzq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qiposqdc.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mrnyocbq.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kdcomkgb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jevmdrnm.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jcnzgfvc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pyjyqzem.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163enozezay.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rbzxbroz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ohyfctjb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wmowesjj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jcmoozuu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ezutdthi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zxvjbzia.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163vsuxancb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163obnrflwe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qhwfcneh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ldmeemnn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gkbglbdr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163owozkinf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yqjyjdix.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vyxiiqfi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ybsgzcwl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yyupofxl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163irodtcpj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ydhlregu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163rkmtrsud.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163hhwhuaxy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fudgiksx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jxwhozqd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vtscxzyw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wssqmchq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163msblhcvw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hdmtooof.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163apqwundm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kiilzwfm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163daxmhepb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ifongefe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gzoeijbx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163smxfpzrf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hyghywyf.html


<!-- 参考信息 -->