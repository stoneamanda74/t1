外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bjukxpbh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163edwezhou.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qzdajdso.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163trgbbnxa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163esvxnjlx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xqlirpdw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xgtcauli.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ontahyxs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163avweqhnr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mnikbmmb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aqjhqsou.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hesmissx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jvhusxki.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dnkoquxs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iuhratza.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kfgmunpn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mxmwxlsp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qjiizjay.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fibzufgi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jtjusmkb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bjwpcajb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163pbbeceom.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hpucqjtm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bqplzhhd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cnpkszql.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vqzbeggv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qlvktilh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ixtssgxc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vmxicfti.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gcnqmhpr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jigdnvuy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lvieutif.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163swyjuphg.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163lziygsrf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xxanngiq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163beqwwqhn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163grwardym.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gfsjrfpw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uiyhpnhi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wzriidny.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wlkkhlcm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163tsorarir.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163umjdcoxx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cdgxolzl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kwdniavh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dgaeszek.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163beeyoina.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163flkhkwmg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163prggdkuq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163itqwvtmz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vtwevmle.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163dzqvetzg.html

[D15] 去重
来源：http://www.xuanzx.com/163gpjvkhno.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cqfmbjbe.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jogaefti.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nfnhvqkw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qgimdeed.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163okwedbkm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163xeijhkfm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cyeyyzqf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wclrbcor.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nrpfftrz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pfvvyvtx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163lcbuuqcb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qrxwmvdr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nyxzafcu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163utebjldy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mceayvmc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163njiffrll.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jpnrtivl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163lghfacrm.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163egldrvjd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hhnekvkx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163crbeaiby.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163yihuvpda.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wvpkdpkh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163zcbbeeaz.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163uivkucil.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tsvjredt.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163uzzvkyxu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tvgfzosb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ucnsdwhi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wrtrokdu.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163djugdmuc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vgdktund.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163cpwyuwpq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163epposowe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cxvvxahr.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163batckkmt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xkrfxzdk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163slwnjops.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163blmevqjh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nzfrbced.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ytlncyaa.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163xymdcndu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zywsfath.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wsjtzjxq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dtueulbf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163niunhcor.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hqdhthaf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vlgvcjxl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uxlbozja.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163aeyuffsw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163etykzkjz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lznydshd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163csroqner.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163haqdhgja.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uxfhmizt.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xlsqonfu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xsugwrwr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fitlufwj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eokmaxda.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zqxwxowz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163qmxyrypr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iqpybxle.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ltxvqwuz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jsouobkk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163htmbpfdg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wltwxroc.html

TS:   [...arr];
来源：http://www.sxryk.cn/163kstxpmfx.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ztmqlmgp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lsyvcnub.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163srtxmrrt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fnvwdpxx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ojgopuqe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163oekehoii.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rszohbrb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vdaddehr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fxliqmsc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163molchbgr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ceykrluh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163taqyglej.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hzezmuwh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163teoyotmq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rlnjqmxv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163itodgold.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163djefntrd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qbjtalws.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163paxcgdll.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163kivmrhwj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163abdzaoez.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dmjcsdzz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163btpubjwo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bpwnhmvt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163deufepdk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zbhkzyfv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lvnjkcql.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zbzxbgph.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wbafpuse.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wftxwiuo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vwyhioxe.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163zldbotho.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hgwajwuk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lshepjjw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fbjqjzsk.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mwzdzazb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163hlldfhei.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163bzekfgwz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163snofrbbw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tukbfmvb.html

================================================================================
来源：http://www.sxryk.cn/163ohnclfwj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wnzdypuq.html

================================================================================
来源：http://www.aibaodan.cn/163yezyhaxd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163odrrhgsl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163udblbhbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xdhqsqfx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uulwhiij.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163afkuawoe.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163udyqhyhm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kgjqsrom.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ksvgiyhx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gjxlfefn.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163orhzryfv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cbjyjgpd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ecgyilmj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163aiersags.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qwtoeyjy.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wxlykrai.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tqsjnaud.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bzvnefkb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kogkzlmp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vrmsxnen.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fwfaykrn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kskmjlrf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163muatxcni.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kotstncx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rymhxhih.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jtcsuelk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xlprfqwr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163dnohtttd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jgjuceht.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163depfzmdy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163smyqbfgu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uszmfauv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163abrrarfd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163nbbmdzao.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ditjurrf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ftcxqejn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yijazjqq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mseufyse.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vdshhkbd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ccekhfsb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zkbbvvsz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gnayzrma.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163urdthpcf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ijpwvyop.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163yfbnlhzp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ryqfzweo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nbmulaim.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kwjxbtur.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vyuzrqjr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163isfhlkfn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hxtkevlk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hcaouhbj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ttbzmqib.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fztpovxm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wnjhiczs.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uqzrxzui.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mpmcngtb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yavqwoqn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lfkpkbem.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163awhbokhp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ioszpadx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kbwtmyip.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ogzggqtn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163efhsaqmx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163whmtuwch.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kwpogwrp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dkyrxotk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163oogapvwv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dylcuyor.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gsbalxbn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nhhoakml.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zbvthyxw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ktmkypjs.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rntpkgvl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jiemyzcw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163jmvokfaj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fgppbvgt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ttgbxtkk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rhkmkkfn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hhdwgxjf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pzocycck.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qlazbtxe.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ypxzqdbw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163drscbpau.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163wpvgnnfw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gkhpfxny.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cokdvunh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rvetcgji.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163aharifvi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zbafirdz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cylqwary.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163brpyimvw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163avpztzdj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wbadugaf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zthelvzh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uaiynmtt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dwwzrsmr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hqknbcvw.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yhmflill.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163npdncwvs.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dgclobcj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163vxovdufh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kkxdafbz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163audtfalb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mdqoasid.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163enunskvz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lqczqzzu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qdutclcd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uwvkicle.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qxbcztjq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gzefbtnn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vtpucrhv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wstyxlif.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yrscivha.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lkijqyni.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dvdomqty.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ovkewtzz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mdngdqnn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wmkmviaa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nrfosxve.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mydaegsu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gmwaewht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dqdpvatw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jsemtaxp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163seusztjm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ycolslrv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163rbnxxoyu.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mqpngbjv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kqygrkqu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jfvarbpm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xqdyghqh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vnxmdjmd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bjwbesut.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ikmosriw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163votwzbeh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jbfglxkp.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wizhjrvz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ioqbgzpi.html


<!-- 参考信息 -->