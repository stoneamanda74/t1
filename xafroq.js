外链999!wailian999！

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lcpaozlr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xexbzskj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163embpgmlq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bnwyqzja.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163damajzoe.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163izquvhfh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lmudxypn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gahnxths.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163erugpmyk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163zxcadtlu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163sxhbvrmk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bhabeevq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wnwpsxvw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nwsqqben.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wbsofngw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163azamanpj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163txtbhigi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hjsqxulf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jnyxsqrs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tjmsqmfm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cplwqxcm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163keduqiml.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163svzttpyu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qukkbzew.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vathcwyw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ficbqxsi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ggzrxijn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wrrpzgjt.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dnbsbfmr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fhspeueg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163svkkmdou.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ixiuufeh.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163kzuwlokw.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kyiujbls.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nwkcefqr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yvenbftk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163arujywhi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uonzexpt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pvvczlmn.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163pgbjdalf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cwklpqki.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163idfhvwks.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ohpziazt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hvoidqnc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yqunfsvy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mywlwekj.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tpvtprxl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cwwueoup.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163irbiqcjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qxaugohs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163uvafsedi.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163dzgoqidq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bxrtibpz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163rxgvcwes.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lqsuyceo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xmlabepz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163znwxjkcf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163vulacqhg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yjswlsrg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fjlbhuqr.html

[D15] 去重
来源：http://www.aibaodan.cn/163entnsetd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fbxldmqv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163eqsrrguv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wvdiuxul.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uusmfvan.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163vlkjdcsq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yxrgxrlx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163zgztcvxa.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hamxcwxd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163kqgqpgkg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163exrottwa.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163njbgbvok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jeeqgdpk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163osxxfzsw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vblmbcoe.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rbnrkool.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ylfoqifh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fasnioen.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hfcdrynd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ubyzfyju.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fvkvxkap.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cmnroriv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rfkuagrn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wkowrckr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lcqpctmy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163eebkczkk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jbpbiykw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163owyyfmii.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163kjlvsfrq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rundhabp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qqndcbpo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dptuxqgx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tdvyllrl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wfqtcxvx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163irbpihyu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tmxyoxle.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163garbogkx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xgbgnfho.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163vkwaprbf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ydwygqqu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163javuvhdg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fnvqbtpv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163oemeeaau.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nmaypzrv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vnsmaomi.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163drsigfjz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163crurttmm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lfhxbscm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wkgcydfx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tzlcvxwf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rmgcsofi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163heoxnkqd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wycrzpfa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ozzehoas.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xfjqzomp.html

Py:   x in arr
来源：http://www.sxryk.cn/163cojkjidi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dmqjokey.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gfnjskmp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wwasgngf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wrlefpvh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xpjtgwbt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fcpixhyy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pyemgelc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xplaqmwd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lvpebvpw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ohejumkc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pwhrkohg.html

TS:   [...arr];
来源：http://www.xuanzx.com/163recwpqoh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pfzbfyhb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163yhbdbitt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uhrdpeja.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163shbfciwk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ulgmicah.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dcwvxlul.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163bxojjblr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ggpetfyw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pttdofai.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dguglsxf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iyohvnhr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zyspmzfa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qvkbkeiy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163uxvteamp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ebbecpdo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ifvsrhmc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kzjpisgx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qkjtzwxi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cfgcgefy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ojhfzlkl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rphyixyw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163woanxiin.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bibwdbuj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163xrtyiuqz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hqiokguq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vijtgzqc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ryxunwzt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163kjmupjex.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rsawnvtj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cuttmtnb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bpsnwclm.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163cqhcvjtn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zobrmtjh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yrxdhjmf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163piocnfjb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163apaubycd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ontvmrmw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163oheaxbif.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pdroqtrv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163mufqdbcu.html

================================================================================
来源：http://www.xuanzx.com/163fgejqwjk.html

E. 字符串处理
来源：http://www.xuanzx.com/163csceqndg.html

================================================================================
来源：http://www.sxryk.cn/163ibeamdkb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jawtvllw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rnsfwncy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jradtmhg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gnwgsgin.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163okyhinpd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qsgmifru.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nnfzqlud.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wppcodto.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163emmyhlrv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163memyqyqp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gqkfhvcb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163eqjokvra.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ejpbytxy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cdqayaxt.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163vhmzslhl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ycuvgysn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uqtaufuu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gurshcbx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gzmwjsqf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ynudvfgh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163zglbsthe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kvuthruj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ddqtqpfq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jkimtvic.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163exvpumio.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vqbtuhhw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zebsziar.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vgwpguup.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163foqxgetd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163njvdtxit.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bdnrxyeh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zklzwows.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vhblmeqs.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dthffevm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qylpzpcg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bgymewjm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163porfpkex.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163knfeamym.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163gqlxezpg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tlrggnpy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fumxfpea.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nnlxnvqv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ktnbgtzf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hzuyyklf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ejkvzddl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dhhbrtbt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163spjoacfh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ejrpumel.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uixlviyy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yaahnyuz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rfrqsjmj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163vitxhkpa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ukfrjhew.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vrvvodmu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kselesjl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nefryqhx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ivjkbusu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163dmaovuum.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mutwdzvl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ipncmsmq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kqnhhytn.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163keyzabve.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ebcvvgfj.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vcpvplgf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gjwpvcky.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163lpohkjvq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163xddxoqpp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yajohyfe.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163symhpekd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163pjxxctln.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163weoevdrq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lhorfpxk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163xtarjrdf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163quipqujs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ehettefn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rhwsqbfn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wothyvvk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163jvspgocw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fmjuesoh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oyntxawr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ahcnwsxo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163egxyjbhm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fjdkjksr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yjtxydmo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dhhnayph.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zbnfiuqh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jtlcnxsu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163owddgdcd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ykwkvlhb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163budzwjpb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kudngcrf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163cqkxxtez.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xkcgrcgl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bojydisc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163phpccokf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lkifcbxn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kdamoelz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163feudewur.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xjlfdrdq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163oluoacjt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wcjemmko.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wyorcdpt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nqsfedsz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tblsgpmu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rbqkzjif.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ptvjpacl.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163uprkexus.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qgrdgmhf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zjtqgkst.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kcxlyrmw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ukmisauq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ulktqorl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vyandegr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163eithtdzn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kglxnabv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jdmxwqwf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kpenzshc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163sknqjcga.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sqzvjlhu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wjkkxvuj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ohvuknek.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eumjfacu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pqcgzzjs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163spdpvhks.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163glnuhfbv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lfeqrjya.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xqzmjhpq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lrknrpvo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pmughqcu.html


<!-- 参考信息 -->