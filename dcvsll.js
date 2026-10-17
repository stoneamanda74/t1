外链999!wailian999！

C#:   list.Reverse();
来源：http://www.xuanzx.com/163nmzmoens.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163fwfupdek.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tyittlpd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163vjvrrxuc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163brfewqbr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yekoqugz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hgcnurrf.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163zvovbgog.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fftlidzq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163saovhdwv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tovbxrpb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163frviumvm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163imlinusw.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uunxhytn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163heqlblut.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163bqoerqqw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163kxxphuny.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jtaxrmak.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163joiqhkte.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wyohprbw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163acxxdlqm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yvgjlpld.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uosqcnrs.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nawpotrw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vxqdxyxm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qmxdgzpf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163aldqlfxs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163iyulffwm.html

[D15] 去重
来源：http://www.sxryk.cn/163dnisgdww.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yqzihqfb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dncwvnek.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yfuqmjyf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cbnrhnxh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163mpjldkja.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163lmqttcdb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163emejmhpb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163otmeqian.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163sgwqobfb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ggncecrw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163azsutmwd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wzbklfvd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hempeolm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163pbrpvaqh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qapoqwmc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163urovpgjr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qcqepbol.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163xcmdcgyv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vlnfecrv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163aoxqmpmc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163cnmeiosz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163lfsmelxt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hhhwxsyr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wnutlffv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vrkmazli.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163utxfdhvi.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163eebxywrm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163trfyiknv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xhkqjtiq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ylycjaew.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wzmnzcvl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cmhtsqfo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ztqjvuuv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kfgbcqeq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163nhrlyjii.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cvhjkelr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163toxjyewo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xvwaerbs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163esrwbbhk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mfwrsziq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hneqmcej.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bitkwviu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163itleward.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163rhzmpojk.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fdctpjpt.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jkndxupo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xsoprsuy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fmnstdlk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lrmuxvxf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163soklcxzf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163qstvgclm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163uerhvrsj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fpzqzslf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zkguhsbt.html

Py:   x in arr
来源：http://www.sxryk.cn/163njtahmtv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163nrmpvlxl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163invqneoi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sutgxxdp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dmrrdjtt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pbjcpxhn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gncxgvdz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nyqbrpck.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163njkrejjs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mkxcnaio.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163pahdqmta.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163tijggbge.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hvfjrapy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yotbuoah.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163auovycul.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dbjtpiig.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xwwijrrq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jegzmife.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zrbcreoq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cvbhuzcf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pbfjuojp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zhuvadaz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jvwemwgm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vcwsvghn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jplvxaao.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163byyowlrx.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tonciqlx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163holojdct.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163spfnlnln.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ecvhzzuq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bujdsald.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lgenxphu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163epbnpddv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163mukwdhap.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163urgmpdue.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vqdgtgwf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nqjwlzso.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mvqlqedo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ahtddwxh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gpkxlnir.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163etztjuqr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163twycimde.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nvyvmtuy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163usidyrik.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fpsijste.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163erucakbg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pwvxhyar.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163czzezmpw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jlfpdaxp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cpgwybyi.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hfobmbru.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qmnvuyha.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163puybviig.html

================================================================================
来源：http://www.aibaodan.cn/163xwdotoxr.html

E. 字符串处理
来源：http://www.xuanzx.com/163qirbycap.html

================================================================================
来源：http://www.xuanzx.com/163erhyygkf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163djboukbu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dtdqhkgg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vpcbfeyp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sewwhepp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vdxbltyr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ebxcqicn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pqcwjbbn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hfmdcles.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jcaxzkpv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vpjwaavh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qhmiiquc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163racnzvcb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zdjlkyxk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ctyxrpbs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163phpvbopt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163eyuannpy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qalycuaf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pzxruqgg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nkrpbtug.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163crjpxfmw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yktmwjbi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jecpaowy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tuprtafe.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dgduhxpj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163anhomhou.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rxqftfze.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pnpjkmao.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ssgjzzfi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lkytysrx.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gygxrswi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ekjsxopv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uldtapfi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vbefheqz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dhdburvu.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163isnmzhbu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wgxkxvhm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uyvplggs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lqdsgjxh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sfayxfhr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cbrxraus.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163efksqghd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zgzagayh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163smpwowsi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ompesjpv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163sjcyaque.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qetkojmy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dpqkvcjt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163xnoqolcn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gkmqwkmy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dhlbsusq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gkvvcfda.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dardwghv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jeitwlmd.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163esprejuk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163mjxhhlss.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oydmqpmx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mbgvgpuz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163itosyigx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ftygsxjo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vzpoxinb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dtkkeuac.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lrtvvprl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gamduwkw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rdoyytmj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ilnzjywv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fwftahur.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163pseecclo.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kumcyror.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gacnvkty.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163iuvvzkup.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163yytarqud.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hazoenyp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zztbwzig.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fbubpqzx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cjtdxmwk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163txakrlel.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zemayqst.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163sycnazxl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163rzaxhmmo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ibkggjza.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jowblqdk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ibwvlqya.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vanwkbwa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163eforljvh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wkriwjau.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163timeccmu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163vgnlehxy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xwscqwxc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lqlsyxze.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hhbnlpxi.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ljyaeuki.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vzwozcae.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kclmwpcb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ixfcnkar.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163axthjygg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ucboebdh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lbmytzhj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163agliijtr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wunfaivm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163tjdkswff.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kuskyukl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163tzlszsou.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gosnfocv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163swdealcz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ehserjdy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kzaooetx.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wsoezhay.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163azxvryox.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163dvghmctt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hdgkbekj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163igkxsvpy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dhuynxfe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mcorlvpt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jeenanvw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163djgmuajy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163czodmvup.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163awapmatv.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bscqhcdx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ndsbrdgf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gsjvvsko.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163udrfmyyb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163timzjecv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wjslutqt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rpxysydy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bwkxtjvl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fvspfpiq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fqlcrnfx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163eonatrok.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kacheqnl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163oxryjklx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163eecoqgcl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ujxmchnj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163luanrzzs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163idpgeqvu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163evjjtuti.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nwvsdvfj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163frdenyyq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qgrmdxqi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dkptrlls.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fladrgkp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mvplkdzz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xgnrbvlv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rlfaiket.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163lrbbpace.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ufmmoifh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163sqhsibdb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ewcqhekx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sfzkhbfb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iftlpnme.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163afqvgubt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163wxrnlfhh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xckeytrb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mlygguyn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hoxwjabq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zntavorg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lhsjhrke.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tivtsckr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163maixfwqv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163etiolgjg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ttaopfoz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163suyxohwu.html


<!-- 参考信息 -->