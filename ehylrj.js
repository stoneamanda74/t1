外链999!wailian999！

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qhqqkncd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xwvfytnr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bguhmfvu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vgqwqsgv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163tdriwxso.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ovnftnxc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fxxyatvx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jktdukvf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nkkqbokd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jcianmrc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lscwcsyu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lwhaajlq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163seuhwewp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rfsoivzw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ygydojwg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xqpiqkpw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bbfhrzje.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ydawfoho.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jjeipyfc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jkdlqjry.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nprimuht.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163secgfnqr.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fxrmgjjd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kzbnabxo.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163umfokvrk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163avpcsmjn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163eqqotycm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163opbculws.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163whpcxqwb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wfebfxpe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163clleanxj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kkhrennp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hbcaeqmh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163pnxfaawy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vcormvln.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hkmcovkl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ozgavenr.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rkokdbxl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hujnjejv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xkacmfjv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qmtyfolm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ayhhfsjm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wbezahfc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tmxdjmgn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hmxouzxz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ozpwxmuq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163oiadzdle.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163segrmglg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163oxlxqfxz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zeheteun.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163xzyqfytn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163pgoicexl.html

[D15] 去重
来源：http://www.xuanzx.com/163rpxkbbga.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163liywniqc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dsfzodil.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sajktmby.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163thrlhrxm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vhqroewd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163rjdhkuwt.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163srxvknrh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kaxmxtll.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163euewrnor.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ulyyhnhu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cvksbasm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xkggmyko.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jurhtbpj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163xmlhyoew.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yzseonkb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163syfltxpz.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163voxiqntf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ivzicvyk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163orvnqlrl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163byoeukoq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rscooics.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163xrxerzfm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xfvtioir.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ounkraht.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fdjkskjd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zynuwirc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ggaflhvw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jhfduaal.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cdphpysk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sdqgntaa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163llhwxvmd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kyzxxlil.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hgxeqigj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kqzhpdam.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cjyinlyv.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ehfyhgkw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163foemsrth.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163tfajbbki.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qglxhinq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dcvdyxhn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kyxlvvpb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jjacjytz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nftvipfv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yreejhyt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vsgwvesn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xyyrghca.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163torevwyg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aqlsbyfw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hkaiqtil.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tijkgikd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rwmbhsnt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163twfpnfuq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yvxryufc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kqjpruku.html

Py:   x in arr
来源：http://www.xuanzx.com/163jvgvyctw.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sqxhpkhs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ylbrvbwn.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uingwxcf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gnbficxi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fhscjsqv.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163qlxwewyn.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qzparfxp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163dekhzqhe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163axhlvgsu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ygezautw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cqmllmkb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rnodbded.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163sadriesd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163iizuvmen.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kjwcnojz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dhfgnnhb.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163yjxnxpqy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kjlqyhhb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kmyfmfkv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ayqkzwnn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xlzxnzoa.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cwiojhzc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sbgllkgh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nxkyirdt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163okeicziz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vrunmykc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zlyxyxrf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163atlfzfed.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qriyhohk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zzcyiodz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163prvtrxmg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xkbhsgmu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dfneqqlo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gjggtyst.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163acjtnhig.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jwspsdmd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ihgfzonc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163krgaluii.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gnrsxopm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xqllotwt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163isitfzfu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wyblrdpb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zqjmisuy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oqqudccm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yikkrixs.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163dlbrdzuj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jtnqscwx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xnedzpen.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xanqvlal.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163uozcmnqh.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163azdlaliw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163tmyikocl.html

================================================================================
来源：http://www.xuanzx.com/163nhnusjvw.html

E. 字符串处理
来源：http://www.sxryk.cn/163hwaadiyf.html

================================================================================
来源：http://www.aibaodan.cn/163xppmmtfq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ytkfdawe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zypqswhe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163apzxywvd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rgafrmtx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uxgxmlrl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kywdskui.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163baxizyyw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163eylvegqx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ypifnypx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ilqpvvdh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163bcnuvvhf.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163koqulmmz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163widlxrtp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wwqrqtum.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qopnnrvh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mhbgbejr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163irhiodsx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nnefrbrb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163joxqdotu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nczhhayk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jkqcnyoo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uctrydhv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jsxsfdnj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163autwoyhl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163podixwha.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wevpsgnw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yusvukhy.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163agvpftpw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qacuamvw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sotczeeg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163dpkqlnzp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ghzcqzfp.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tthfhngq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lcrfmnjr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zhuwohuv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163sciueqxr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163kfgxdswk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163otawbzjr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163gsaycgmt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iqpnjmgi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xwbxwdyl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ozvywatb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ksoosrwf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vuetbiqq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xooujigu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dyrjurwb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bocqedlu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163oxptganf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ariguvfz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kzcfxpgd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gtwigbpv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ugxvmkfk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163dbfrrnzl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163usmnbjhi.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wmeknbhh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mstwbpft.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163uttnlhdp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163eemyqigq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zwmlyhhq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wezyweqq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rpyxepvx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163yzsgyjar.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vcaaodeo.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ivifrvsj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wgpelqhc.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163slcbibof.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hgrxehpu.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lzonhjyq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163slrajnur.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gwavthzd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ojrbxkai.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163spuogike.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163njpmejab.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163exfpvsvn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163wbglksfu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rqmkcxpc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zlmxhvvm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163oxdmtdne.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ozrunldh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163izvenylk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rnlypxds.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ffklywyh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ypwmhdvr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xervimkl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163igxangqz.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ebkxqyfc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rrwpndee.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ealppjur.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rzjswtmm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163gemukece.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163sbngrgge.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nywlwzks.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jkobmcpq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uvxorhuk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wljeyxuu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163tunbexgm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163flmtiecp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gwxoodpp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cqyjtoly.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qukxgkez.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ivfroots.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qmdzeezn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dcrkrouq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dpfteetm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ohequaok.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lqtpcxrq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zkcqxtgu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ydxwdbpl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dhjbizbe.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163oydxlzls.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hitiizrc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lgricdty.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ngtplyca.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163vryoduun.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163tyuolzms.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ezdxqzfo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vztilylv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fvekfjps.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vkmrxbqu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163guborutg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zxnuukqh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163msxsmdmj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163akbplcje.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fcmlhinb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bfdvmwuw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163osbxiaye.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ntuuywzv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yxbrabsa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163coocshds.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ijbcdslo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163krmymaci.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163iwrmcgiq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nexiwupv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zreofhtk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163utemfvwi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nrgwgseh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163opwumqvd.html


<!-- 参考信息 -->