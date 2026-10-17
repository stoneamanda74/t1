外链999!wailian999！

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ylndlbqe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ewdimmng.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hdrvjgrn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kvgqpbry.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163vbuknrgc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163znggjnde.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163msbvfteq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163neeehrbr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bsuodoeg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qtomygez.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vjcttiqa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qwxrjavk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163btfklyer.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ulnwevif.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163whhovlwj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lmbyfypi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fcaoubms.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kxmsonzs.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wslpkgne.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ubibyrgv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163tvfnfjfp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tgmrbthz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163uelkitno.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163zipcjmlr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tqiqhtyf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dpkgtzzh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jzansgqw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163oocxuvcb.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qiwmweke.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163upiewwcw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ayjsmudl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wmkqexdh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ztcaxhtk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kuacqzqm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163psfrnhag.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zktyhvmf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wnzxbnfq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163esnkaecw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bbmbwbcb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163impkiiej.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qdburmnf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jmwboita.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163liyytbdn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jppceius.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uedtiuvp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qebjnnog.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lyizrscf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163yunbdskk.html

[D15] 去重
来源：http://www.xuanzx.com/163jvzibeoz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vvgrhzlm.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163sfhoqxap.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vfzltfeb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qkagkmjb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163uwhftsjr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163djrmnzpg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ymigrrdp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mnxjmyen.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163trcyjbko.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qonuritk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ydjwrrwc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163plvpmhog.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cxcpwjkw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163sqxqgcsj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163iccnadjm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xxjpmbrg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tftjdbiw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sghqcceu.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ioquoypv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qvefoeiu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163sbhsdyho.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dwrlatbp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163zopblnot.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jcgdmlim.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163eespvfsn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pqzcnflu.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ucobkayo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sabmnpcw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jzfboybe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lxnekcol.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tcndktoq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163kpjvuiey.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pqjegwkd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fttfqesj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hqgycitp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163coduqcyb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mmlievyj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163akivwpxs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163lmjbwoxb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zjoqxxlk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qdmdzgtb.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zazwaxdb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163irnjzqdu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163mcrrpqps.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uuhchutr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lignbtrv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163blexhagx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nxprmpbw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cyydysbi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163aeatfjmg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163auqrhkst.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163usiyflxy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vkdodoax.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lgmnhdyc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163rgwryeus.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rqdktqhf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mtvpyktv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jbeacbdh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163unhgnxoj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fztaaanl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mnwakace.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hlqgmyty.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nzxghkfl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163yythnfps.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tshckcje.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163heumefir.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ylzvepbh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163sxcrsbed.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163gxpbzvmq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163eefctehk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163udanznxe.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vbscgsuc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ucqwgeux.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163opqophek.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kfmiqjmr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ymsxklos.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sgbnhrwb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ggnzpert.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ndoakhch.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163qmayildk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rhedpird.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qgybvimu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ydwpduyj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163tuoaiigy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zahydezq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ahgrdaka.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vxdnfqre.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163iopfuiwc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dcygudnh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gwqifwpr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dnqspdzu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lbvpmtsg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163pisyxgxg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xzzpyqet.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ntgidrsl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163twqreguw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163enpxfyqv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163byehbejw.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163znqkelwm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zvgwbiue.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gsoawszf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ctudejyt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hiurezdd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dghcopne.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zzdebdsz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ibuvtpyl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bipfiutk.html

================================================================================
来源：http://www.sxryk.cn/163wfingbdo.html

E. 字符串处理
来源：http://www.sxryk.cn/163clczczso.html

================================================================================
来源：http://www.sxryk.cn/163avzkhoxp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ctblxlzh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jeggdxrp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xxkqqysu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kenilngo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dpokasod.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163umflcxcb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tpaqmkvh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rztgatof.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163sqpxyjpj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163awovgqdm.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163btwktqcd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ragqhkld.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lqngltym.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ozxxvher.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mpkplujv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gtabxfdq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163onckjtho.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xucpncde.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lvhdloml.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fzbmsjun.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163bsgetzqk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163piaaield.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rhyitpio.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hyxpyiow.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hsropmgf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qcbmlkdt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kgxewxgg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163igcdeauo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wngfnpfy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163votgxnkn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bufnoajd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tjgikqbi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163miezxuju.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163oeuczzle.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xjkvyqos.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163psixbgtl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163frxejgri.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jlzxhurq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uwsuendc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mcjvsncl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kdbramse.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nsvpdzct.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xbvpuldv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163douwutig.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xvgtxyds.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mxeordmp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jelywdub.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163adfbotoy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wjbyqnlj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ruqsvaev.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wroqtokq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163aovbajma.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zcibsbzo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163uzardzau.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163licpimfs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ykxldeno.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ieyvhyce.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wmqcagol.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163kzhpbjcz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163emmodbjq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163apnnwkjd.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163gpmjxvrx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pznmztoq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163alavpglo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163urciabgi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163epontchy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ojucjhri.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xysjhowx.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vwhsdrtm.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163oxwrygty.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qqbhrpjp.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163htcjblqg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zicnaian.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fsfuvcqe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xbudfloz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hfffkyhi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ibebowng.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tgckoamm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163plxsswou.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163juyhnapd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cbpbwrqa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tvjgydmr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hodwgtrn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tpbysdbk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xwdnhxfg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ugfulwki.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qvhtfght.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163mfbklsbk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jntytzgg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163swzujlvh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163idjcribd.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kdgtowjg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kogclagd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ilnjeoli.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wttdsquw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dvaxbiij.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zwjassxv.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qkghfujn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zhkcbqbt.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vaqobgdq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xbfzcnaa.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qefqfllt.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wgfultop.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nqsdapgp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163lndkorcd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163kiocmnds.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163nrsemavz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163lnlqjwtr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dasbhtum.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163cieuaolo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163gphampzf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zfrljmhm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mdntflsf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mibwlnoc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163bdkhirgy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vyjzllpu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163arzosrdj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rtdvrsay.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ozaedbrb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163glsnsloq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163nxrkeslc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163smyerusc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163icadxmzs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163tyqmjlle.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nigifydz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jetcajyj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nxebbrch.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163mretpwzs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gkyebets.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bwjylstp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ifkavnvi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rzazhmlp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hrsycgvi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163gtjstuky.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163osjqasqc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163avrcsifw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ewbgjbeq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ivbtptnp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kwsnvgav.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nzzhsxke.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wfjgigwq.html


<!-- 参考信息 -->