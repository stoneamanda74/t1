外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tmfnzqru.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rpjihddg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gldxrwbe.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mbwcjfvt.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163svcuvzpo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tjcyqvev.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163cujztzco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ykgjqjkr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rkmsopzi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kdzjsqgy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163baaazpfj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mmigahde.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hhskynhg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mplefioc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163oxmzlvhg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kitziwdr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ixcywpjd.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mllijmfu.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cntovnfe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163yjtupefc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163kmfyghqw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qubscexq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163okhcpomo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163csnolsnp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163bubblykh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163whooxftu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ypswrkum.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nddnujwg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jcttnlvx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163spmkopsn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jiqkjmbc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cdvosibx.html

[D15] 去重
来源：http://www.xuanzx.com/163xilnvofu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ztukuqbb.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hbjrlixm.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163khoyobex.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yicdoixu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qacfxrad.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163hvbeohvd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xdawwzbm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163eprzgxce.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bijsnaqw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mnzykepj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xnvgvsat.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163njiulaus.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ucaszshr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ghyipmeh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ydsogiyc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163okxempai.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163arfxkfuh.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ohjxrlmz.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163nfbtxlqs.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qehoymjc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jstceegq.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ozyviszl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cbgrmpln.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bepoqjmk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ztyepvqr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lykjpjvg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zdtkfvlr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sdbvuwdc.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163nliyimlm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163potxkulp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xnznumij.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ruatlpsd.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163umynumft.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lyfcdcgr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zjfuregy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163voxxraqf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pgixixja.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zoiwvkyf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163urybfvye.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fjtvabic.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vwqlrwua.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163svyebtrb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lbvkqjns.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163niaivqrw.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qojoaqxp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dgpsswgv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fleemryn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tkhcevqf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163njhsgbmn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ioiucpjo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ywcpocmv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rrinkren.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zavsnuyf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zkwweaec.html

Py:   x in arr
来源：http://www.sxryk.cn/163kgrrthsa.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ldqqivtc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163viljsyrh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rtlvpqxt.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163xhsgootq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163rgevnxjn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nvymmagg.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xbubndur.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ocbqsydl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bpqawbhq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xffyvuij.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ogxrlusf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163gyjgzmgs.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wzhhjkdi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gklssnid.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163eidzpbvt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pszbpckv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xrwqwnfm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163aftdajbh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ucaahjsv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wshsohns.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ftxausya.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163idvjsair.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xjfsukoo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163enzhhdzz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xhbuxhjg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cefmldih.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ssqebjvs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rwthojir.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cwijzlja.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163svtvjlxz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jrzcgdsk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pgngpsbn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163nozwodll.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vujrqmkm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xgowctzw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lozwnyjs.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sqwutetz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xzzolrqk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163xkenmowm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jvwlxaqz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xxdtyowu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wfnpobbu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163gcjfykdt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163bysjnxwd.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wgaaixzb.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163unmklwnl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pdqatkhn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wcovtsiu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163tamtqack.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163gbdawzjt.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163krlnysys.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163aicewzyg.html

================================================================================
来源：http://www.sxryk.cn/163ijeopxaf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163cnnuwhpb.html

================================================================================
来源：http://www.xuanzx.com/163kdqtekid.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cegkwvao.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ogawfwly.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nqavtrhl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tbstoirx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hiwtazwt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cpcrffgo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fndxoxxh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nxjtxwkh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163esglsyec.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ogbtbarw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rbgobwiz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rduvmucg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163svswlryb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mntcoirg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ieafopmg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ajmnaqnb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uncblnvc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163aogkfhfo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163csgmripd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hpzoucrm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gpwqvwjn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jgvlkjls.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163srzglopa.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163nxgzmtxj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163uxksqttu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bacehtmk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163qyvgmoja.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jodorzal.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163axpwqbeb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nvwqjeow.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cesmuufc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rrevsebo.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xbccikzi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xjfceagh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163eyzhjvkg.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vtgjmgno.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hdxzuuoq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ysvolqyq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163efervoeo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xqrelhkl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qafzwixd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ayllmgtu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163tdbqwpqc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163balecrwl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sllteofx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ezwekjnu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yppdflyc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163orzqhnhi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163loupqxyw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kufmkels.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wxalrnbg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163afywbiot.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163trtxvwou.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tfuwybmv.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163onicctko.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wrokdana.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163svrhyjad.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163thusdgmx.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zpkjiepu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cnivirgm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xwihceux.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163nfwozrmx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qjhkpudq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fschhufo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163livhpwak.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fmxcuiij.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163jvhnsbws.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vueikbpw.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163chowuhxx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jntztxfb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iielicyj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163akcfsgwb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gfvirucn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fdzcofau.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rhmoormf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hrmmosxd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wfffglpm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163lenszrio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dmkeovbp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zvbnkihr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gdityfoa.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qdhmdgtn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hmdrjfpk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163nbnqnuck.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gpxyzfuq.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pdfrovmz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163enxzqshj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mjlwtkwg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qpzuhhdn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163maeyjbci.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jqitbdhg.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hjwtswpn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163tvoaafpg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qegdntpc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ayfqhoux.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wpuiswkb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fdoxndlu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yvbgjhul.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dfgrfoxd.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cxlsdsnv.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ajbefgji.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sewxojec.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xeunvimu.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ijabajgj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cuuuppjx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163zaodkhzr.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tbswjnpo.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jtswlcox.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tgkhwvbq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xwjniytl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ipyhvguz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163godqzalj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cvvlihvb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vcgzxggo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tsgmoqmp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hyawusyc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163chyqdsek.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tfbwuhbs.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pwxlrvzr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xivspire.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xmnjkkbu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vvljewcr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vvlyzhuo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ugogcnvn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mwoaqwia.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163exfmltuk.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163birlidmt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dlgekctf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tixochjc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tjmhexvq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bkoguzjj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tvalexaq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nlemnold.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tfesbsjb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lusjjkll.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tihhyssb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kttiwnkm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bbkheflq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kqylnpfi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mnrvdtpc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163kffcwwjn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lgwgtynk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163oijborgg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fbjlziiu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163selvcmyx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ojojmujy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xrqzrikq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tqzzcaep.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lbvlsvkj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tzwfzikl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163saohnzyx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xggnfhdm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163laglkazl.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163yuaodmay.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163imvnoufq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163grjcepwv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hswsivyf.html


<!-- 参考信息 -->