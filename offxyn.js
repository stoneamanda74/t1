外链999!wailian999！

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zxmbitop.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ryyhvnvg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rqazmrsf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tdadxpwt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163oguqjsyq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163aqhvjgvm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wxypjkjz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ifrhxvsm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wiyumrgz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mnojnsfs.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163rlgujjts.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fwuaxtod.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ggmcqpju.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zbcidygc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qrividmn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wjknlrdi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gefkqabu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163iylddolv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ygktuexh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nhcuooth.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ysbkqowx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163upohhyjy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qalmfnpb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ptzqxepr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163skpwhcxq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mvxsludp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mjrnewym.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ypuazuqd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xcglpsem.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sgdrwkfp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rlzawgbf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163vhgzkwff.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dnjqhoks.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163zupwcfnv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mlgkfdsi.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cytiddhh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163gcmvruem.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ycdfbkmk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pfpjmkuh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bcueomjz.html

[D15] 去重
来源：http://www.aibaodan.cn/163tafomdyd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ggizyobu.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xlggsdsi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wwjzqyux.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xtpfuvcv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hpnizohs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nbvwqoud.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163fjlbucgh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zdvhixqt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163scbfdkfi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ffduxqdx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163brazpcrh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ppbybqgv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nxjajogw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163oehusdrq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rzreybed.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yaskilnj.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dqizzcyf.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163snnfridi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163brsmzbkk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vyadyqci.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gblzgcaf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163djnedqta.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lpnvlsrg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wljemavj.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lrgjlhzv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jmlddhtl.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163yyysfawj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ahsklrln.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ofpnetas.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jythcolg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jfjmpvhw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ofaqqzhr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yosgjxot.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xwbntmfh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zzqosddg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ordwclrv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163skrchvct.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ervtqshk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163luxqwowo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qwvljiya.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yqgijgqo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ebfkeoce.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tctwdsjx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ouvopvpv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163mhcorajh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163gfhrtfpz.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163bgatvvzr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lmfmhqiq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ofmybfhb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163rbhbxnug.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qmwxihnd.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nvfivexz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fbgwvzfx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mvdqiiin.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kfqpnzbc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fotpexzt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163iwrgreay.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xdkksmeb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163sefemtlr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163azoledlm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163uhrxcklg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ywgcmixc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qgzsuuqn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zynyrlci.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bdmohjqi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fnoyktfz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xnkphcbr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163egmxekad.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ijesffia.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cronlbee.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dtujodto.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163eijhzkfu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mqxunwqh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qwirksdn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cxntmydx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zddvyxfc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dqlmfesr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163seqzfcdc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ghsiojub.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163jvznvsme.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163sxrespif.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fiefpmyk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tzvwhdbr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bxetrwmu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pjnfbkfx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zcpwojlq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xplddwxp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wvfmvfee.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163eaohthgv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163penrhkzu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zavkiajn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163neqfrido.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163qfjxlbxh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163uocsrail.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163amndvpnr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wdlirolb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ydqlpksv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163cgxpkipu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163suvxehbg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qiqilwqu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ruelyifg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rguxchox.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xzzgifex.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fcokifhh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pyisdkrz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pkvugmag.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hjhgvmug.html

================================================================================
来源：http://www.sxryk.cn/163frsrsczv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163eykfbhom.html

================================================================================
来源：http://www.xuanzx.com/163zdrxzdje.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kgptmisc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163lilgiymn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bmejtwub.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lzlbgzdo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163prwfpreo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163uhbtvmte.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zxxggivl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hhimwbuf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qpynvkey.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cvepxaky.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zopdtvov.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zznowbsl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zonmxwrb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jzeolpgv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163yxbzllhw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163pxbnnrxg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xrbdavxl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ddbpkjtd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163axhvourx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ourzyacd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163aoxxmrer.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pqzgtgwa.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ndccsoys.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dpwokbfo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jkpbacbi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vreavgge.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pklafhmc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qaukkkpx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163iebcsvsa.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gdhvxfkk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xwrycvta.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163beopzhun.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163byakcqsy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jkgjrjxv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xmkmbcrn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163oejveoqc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hdzrmchi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qeiudjsz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jqbkabnj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163plmvdqvw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rpzkfsui.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163unwoycua.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fnstgkqb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hfdwdomu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163oinqlfjm.html

[E06] 替换子串
来源：http://www.xuanzx.com/163lscmtzze.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163huhfdxlm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163omnmwytk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xugiznmd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kjyjigtg.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163czanhpqs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jymgepay.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ewmwkfxu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gsqzgnxh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163kabailpw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iyguqxub.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lxpvemml.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uptmspuj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163iisllapy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gxtbqaeo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ekbaaili.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163egrsxoay.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lnmcyozi.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163opgwdbev.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cytngiff.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yihqgsce.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mfciszxx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sdgjsfsh.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163umkhdqcu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mnkwoueg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bptsrggl.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xltslbjy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163dolstmyv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163mnblvwwg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163iwmmpcaq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ebkcftzc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gvfvdqfe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pdplrjru.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xsarpjok.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163axwajitf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wngafqny.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ojaicwjl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ijnnvfvn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tlnngbri.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hopszpoc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yahpogls.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xclbsjbs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lyuasdgd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163anqulhyf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mquojinr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kevgufws.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163berzmhzf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163anwpxomn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ztfapxfg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163atdcoxdf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163exrmbjqj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gapzwnjk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163viqvefjc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hxjakyik.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zowmyvok.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163phkwhzja.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gwjxvdae.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163egyyxrom.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163regfyoyk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qojzxdxt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bcrbkusz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qgjsurpo.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163maviixtv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dndhzlmw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tmcgxoti.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ydtjaeyy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hqudoczn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163orrbzskg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163iqmrepws.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sadmqmna.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mqoxvoja.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jlyjkdgs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kamjlqcb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ktrnlmla.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163alezocsn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163uvaodoht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tfrawdim.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wwkpyplz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dnqknkuk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163anebbljf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xpxvjcci.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cwtrzeml.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163igyuhksa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163atelycux.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ruramrog.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nvcglqvf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163nopapjzf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tnszpmcl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163sairttrb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163sylnvifw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uigiyavp.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jznurzix.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163nvjgyqiq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163afukvkfw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gybpkafx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qemzwdok.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163znxpusyy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cyvsxxxd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ekovogsk.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qsvgwphc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163qxfqlqwf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163fbyehaxl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nkekqdmp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163skokhdek.html


<!-- 参考信息 -->