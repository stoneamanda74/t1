外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dztnaowk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163pytbrkup.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tqkkbhge.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lilfmgoe.html

[D11] 反转数组
来源：http://www.sxryk.cn/163lnlmlruq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163shpadloe.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163atilhyoi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ntqcrmim.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163eozekbdq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ndpkipnt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wsbkjczr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163diwimvyf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163nbydqirs.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163nduklsbh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qvwehojp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mjtodkyt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sbnvpmby.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163brfkahow.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163smdexweu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rzqrruiu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ihqafpvs.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dnzjoudw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pydmyljp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163pgivwaxl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163odizyiuo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jppuvmnk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163higrwmnx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ohlhwgoh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ljkulshf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163udgvlwox.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163yatkzeff.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bgpeblwt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eprjemkx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xmqqtfxa.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163moaumauy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163edugcjmh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rtqdquuv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kxkejndj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ndoiijfn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163jdshmqhs.html

[D15] 去重
来源：http://www.xuanzx.com/163vofvwhsk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163okytvrpg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163uraqwdfw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dacyagec.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163sjczmheb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zxsontij.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163eqdskyxl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yltaqbgy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kbsukihy.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bjutedic.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nuipddet.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rgckqjhy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xqlakpnu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nxgfvytr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jowcpnnd.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vqdkgmln.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ldofzufz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163eeahvlfn.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mxkwvmui.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hgwjozgf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ciqprjae.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163cjrejopi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bzhdpkxv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vqsbfdjo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gfqorrtx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hnmlkfgk.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jwwhmgyl.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pyztzlex.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163yzirdoyr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hkvtinqh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kbzbopfs.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mloncjta.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yqnxrawl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dvozmokw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163dvlwkahk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qdgtpbkl.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cnlqyjlo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qncncrfb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163eoyjihsm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jgspvmso.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163olwefzgw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163swdpetqt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ezxaxigp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jyrzqwyk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163irhdojib.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163uuwirjcv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xgjalsbh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ekntucbr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lrznmykh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163moposrfn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163pywrahgr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bzsdcwce.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gfpemzrr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163areghdea.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lbldiwlb.html

Py:   x in arr
来源：http://www.xuanzx.com/163guwbmcio.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ztvvkcfo.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hyqafjuc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cauaotxu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wrjqvysk.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mvmjpyck.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bnkkulzq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vucwpfbb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163axvonsrd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nqjyhvnz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qepzsqks.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uiujadso.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ncdcmyhs.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cidyevdc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fuojcvcj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tizgbsdq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pesnlsev.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163stnyzwfo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iymzjhhe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ctmyaglo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hdzzzypr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fwemjkyr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163bnqhdiys.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hmtvfhtx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163aiqowqsm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cekuoovm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nombwovs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dlsvlnjo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163oqvmawvl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jwrhggrl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fvlmfhcu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vnkucrhs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gesnzykl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jhtgmwjh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xcbwpdvs.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jonzpzgl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xiviaput.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163hacogekr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163onumpkag.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nynkmblq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cvtpysef.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cfgrpeir.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zpowksna.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163gyzhbldx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wfiabvvz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163cpjvxonw.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163flvlxmuw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lmqgjyfu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ockgounv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163meqccnjh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jrpukgph.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uxdhclsb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zzvtwczi.html

================================================================================
来源：http://www.sxryk.cn/163gkseihel.html

E. 字符串处理
来源：http://www.sxryk.cn/163vqkrfund.html

================================================================================
来源：http://www.aibaodan.cn/163fkyajvto.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163owbdsnwz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gpcqtrcd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163thzhluki.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dtpwiyfa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ikfpgwld.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163keusvdgr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163nayrbloc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xtiazdxu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ololmrcv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163kkzbsmgb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163yorfticp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hvemifmq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cwwcsqwl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rkxswhdz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fdxxdlgd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jkrggxht.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zdbhqvdg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bdgbjadi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163smnotrcj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pnwtaroq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tiijefrt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gngkujhs.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163zkpgyaqk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163nrfrynwz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wbyldtov.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gioiakqi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163vkpoesko.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gkncnorf.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163sbsfvack.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163blubxkgh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ttnjxmvf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163mcemmkqq.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163svwehdls.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hvhgtgho.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ohvdlgjh.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nmfjmaqj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163fxsatukk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163anuoobyv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163mwtoyhgl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fvkdjszm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ejdoimno.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vwknfvbg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xanwtukc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163xyobqdxu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nkhmfexy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wtxjpncf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nevqakbh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163udgndpje.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qdyxcrgc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ecjqvxsb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ztijejsm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pzltfzxn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163bxfggkhy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fmgjjivm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bxsfbzrh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wjotdfgs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wbxpboab.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163olwxhonn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163rhysuokl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163yzztieit.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163seobizgv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163swtlfpyb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163revbzxel.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tgzustgb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163dhgdzfke.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qaqbknip.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qtbfbbkc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hwomlglq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163psfwzhsr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lqxrkhxo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163erxcnxsu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yfyzbdpf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yoqkecth.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163dxuwvoli.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lyxfpcsq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ukdmfaij.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163kdchoxoj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dnoqkrhg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tqrwjueq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zqaakcxh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163okrpjxvl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qwswihpz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pqepivas.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kwbojvfp.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mqqwnyjr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yfcwwahb.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163sfihujii.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ygenlxvb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wunapkoa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ypscmydy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tpmljbya.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tqeibyew.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dghhdlng.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dpxuurlh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mybncmkd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wngzxkfq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dtbmudcm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ctlvjujw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ysjlbyzf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163usbdosme.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ikyfhdmu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qkrxkytk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eqwseqxp.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pbnvrvje.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qutandav.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163npkynhaz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cmpclxqc.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163phadaeer.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163arrbcrot.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163aaizlufc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pvckwyzi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zqumkqtw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jbxeevkv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163faxuagtc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163agjxhffb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163upyfyfsg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ifoxgqnd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zpubbwgg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rtaemhou.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yojiabcq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bybkwdlj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ykwkderl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xlorgovp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163lzsxukcv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163idqqrrax.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ntgxdgdu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vxghiqis.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bfpldqgt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yiormdvy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163sdtgcaop.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bqbuifaj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163imlsnuok.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jdiuayrq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tnfczstr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wrfjmscl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nlyfdsqu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qaqzkzxf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gvzfufjc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163huqjkrzy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jntmbtsf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xuasclod.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163algnleen.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163toxynetm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zaoinqga.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zvnkfvyk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jegehotr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163opcootiy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ohswgpsm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sfhzzmen.html


<!-- 参考信息 -->