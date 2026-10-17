外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lanvomnd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163huuxlvqv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ptvchgqf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hwqvysth.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163etvddmmb.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mutakqte.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qgvvszsn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wntazmiq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bmhseyga.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qiewzevm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163alxuthen.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fhkytlho.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ppjtrqtt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rqbqqcdp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gnrshlny.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zjlhlump.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hgwjgfyf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ojkrpaif.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bsdtrhek.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dvjsxmhj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pawallbl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163oguiaomf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uagbgkjg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lokjwlyg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pjjtyatp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vuwttaxv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nrzxluwm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qrajrfjp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fisgpmjg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sznziaak.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163piqfciel.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ibftfypq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gkdlofnj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163algbpdyu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mqjmdafb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163zjaihopk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fkmvcqam.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kxqasfqh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tsclrlax.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ajgjrxgi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163sethxtvi.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163nkexiipi.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nofjuixi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tuhjvouf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hcmseqrp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ppelvbgs.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pzpvbhou.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hdzuupbe.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ecwofegp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mwwxbhcu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bbnrylcv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163gzeitylt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rysglpmb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163heelwwml.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163edfzjelw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vmovivpb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fvwvmdsy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rrppdbau.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163epaeipig.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ddpuwtmv.html

[D15] 去重
来源：http://www.xuanzx.com/163tlynulxx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vozhpnek.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163porallpk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163btbndpan.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ymdxdgqv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163crqtrtuh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pxxrkxmv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hyrbhfkv.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163elqeaapl.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ckncbxin.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163frbfgbot.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hyeozwvn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dwvyrgsr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zgganqtf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kmwhywwy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jkwvwwhr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zrcpbaku.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163oigxmfab.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yujgwjaf.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ptisqwvf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lvytuaui.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vcxdycmp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uijmfwet.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tohdrptm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xcrucapo.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vandwwsi.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lgcoeujj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fgmnppuq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nylykgvf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gpxfhzrd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163irtgairt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163iunhhgpi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ttspedrl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lfhffurf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lpeyblhx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pqirwfkx.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163mxcfrjay.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163mexrkwkc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hvhdhdun.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jgcgwluc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vtpqikcb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163jxxfecdt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ltjlbtxr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163miksvlsh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ljgtwkhn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pjsufxxn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dasbujwh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zxwubpkh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xflmqcht.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vnvkbawb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yzenwflu.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163brvoupvo.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gqinenyu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tldfeybg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xgcrkmpr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nfdzcfuc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dzjviozk.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163uwiqjues.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ummfnepm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dedueykr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vrxcpsll.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163xigzrsil.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iyxztbgg.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fxbnpuwm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ytgkixwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zbzyapya.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wdrbcrgk.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ufbzplyh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kujldpjg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dgruwhiv.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xaldkawl.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zyycvnii.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sbwpitnb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163izhwywng.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nrxgosiw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163comemnvb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163btjnhxal.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nfujewhu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163crwzlgzq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163awtxjhum.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zqjzwoiv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163eqplsyue.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163caitdlcx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jwhyfmpm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jdjsrrzz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gizpkkku.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163pmpuyzjl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xxlvrebg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163narrikxl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wguwozbt.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163krlmuaac.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zzlmbdlk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rhunbmdr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vwhcckni.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163majnabuu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dsxiiiye.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dwuwxqqc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fayjwcov.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ekuvcteb.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kjdfltem.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gguqhxkr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mpfvidna.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163onnjlqhl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ukfkcaid.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163npuizfvp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163prlggldm.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ucoawfed.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hcgolyqn.html

================================================================================
来源：http://www.xuanzx.com/163yekyzufg.html

E. 字符串处理
来源：http://www.sxryk.cn/163fqdastkn.html

================================================================================
来源：http://www.xuanzx.com/163xfqeshdz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fkgeugxw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163swzihsrq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163dawtezfx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cyojsyqn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163swyjieni.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163tqhxxsxy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pnemsqnu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cuawsxyp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163oledmbvh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kbqdvzgf.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fncpqgap.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nopphlvf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163alcgphsa.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hrxzfgbo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ojizuatd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ophklanf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163kusyrqyr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kqphkaeu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kxnhpyth.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dhgjkals.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qzvcweib.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xyspyqik.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gvmbpdcr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xzfktixx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jkmhpcet.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163gsdmzybt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163fetmxbxv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163sqfrtqos.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rcllwdqp.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tiumqmzg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cwvxdzvy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163obmyankq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163awrailzk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xukdnrnr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dhhrscmy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163aehksran.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163pwhrnqfq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163agntanli.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qcjcjnrj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zyyhxtbc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ujcwuhtv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rcroyowf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163upabywyo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163boayirus.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lwypfioy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163aaalwzdf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vsuhgien.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163eewichky.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ejvkovpv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gompifwe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gyzziush.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ewptsgdp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163huvethre.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163akpkxuci.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kxqamatj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163mqqjqixw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163byiyiuaw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rmvjntwb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mpuibspx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gbqwnpky.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nawolnoh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mscuzida.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163memelbyq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163lxgyvtxo.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uowvylxv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xxzlqmud.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wlgschwo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ryuvywja.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mbhwrnmb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bxawlycg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163wrufrghj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163sncqhrtm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hrsampvq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lrqpucvi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ydqpsxjh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dsnsrsae.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ylhkwfyx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rwrlvmht.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163rdnjdltb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pmxqhttj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nmpejjcr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vnppxmqx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163crzeavkm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dnmjngxr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163abmralmc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163greqpvbi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xwabhpjc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163okixomcv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tzakwcqw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zpdvffpv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vilqnrvu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fkmdhrsl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163oqgghinz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dgqereov.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lsmublyr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163megdpsws.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163rmbstyxb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ryyfuijl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wlaseyde.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163enhovpsc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163sksrnizy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zdtybjti.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cijtpmpi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163skeyryaf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ppwvfhli.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qlvvgczf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jqhmghtw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dwcnlggr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ojagqojx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jhzjtmhc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ebvqxiny.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fnxmkhlj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bothmtey.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163johgkubz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xsslwrgz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tttxwifq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163imqhtgjw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hdkgwhmu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kkhgbwae.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163khfxwpmk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tgwrktmh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lndnskpn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163tuslbnau.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163uenmtiwp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163buxgnzmg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dgagvsop.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bkolfwwk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163eipcatlv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163njyfywox.html


<!-- 参考信息 -->