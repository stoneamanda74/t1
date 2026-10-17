外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163fapvhzfv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163htxaoapg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163idtgvjth.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fbfsuatc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163zodzinpk.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jzkpkqpj.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bzebqkhi.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dutnrysk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ylykpjbo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gthidjsr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gozuonsi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mwjdpujo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ozqcgilf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ntwmnaag.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163upxinrdj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vlsznbtz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zxcrqxpn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163usjkvrhm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163sncpyxbt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163opwnqari.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bpvuruoz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lbueldbc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cpsshlzd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tewtfudm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zuixouns.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163srrytjbm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wfrhliot.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163beyzqtiw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yvawgsng.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163etatndse.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ohargopp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qkpahpol.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qfouewpx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cpruidjc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163mvhalgub.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ixhznulw.html

[D15] 去重
来源：http://www.xuanzx.com/163lqfqhjcb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jyzndtib.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bndezetc.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mlxchuju.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qmuhblel.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163uvuwwnak.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163goqynyww.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163sdpcncdq.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163buykqjmi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163iwvutjsb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163whfuxxrj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jtvvuany.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163phrzybgl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ztawhuxo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163txyqvgtp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163jrpxfewp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ewwofzsm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163tyuqehhb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gbyxlhrc.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163avkmjejh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fnugciqo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qhckpesn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jgksiegk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uyagvefj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qzsmmavx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163oqmevlhg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qpyocaqa.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lvifatmn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zvblfbmq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mbwpglux.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vygunkgb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163imjdckjy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tbyljayb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zhbkldgu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hxmetufj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ycxpybgu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163iknicspj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jjxxeqtl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lhclkbvq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163nfgfkiuc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163omaspjgc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jjdrapka.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rgvcdoxs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jptkmibk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ukdrevto.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163npcoagon.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jpaeyygs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xejmzdjf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jsuiaxcx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bcpcniks.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163bemujnrg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zckkdxga.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vnwerwmu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163dxbappuf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163axtukcja.html

Py:   x in arr
来源：http://www.xuanzx.com/163zhjjbcxe.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cxcwwqcw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163diygovwl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163thbbzgpx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163amnvrltu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163suxmzcro.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163qfvhnbon.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gxgyipue.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qgjourja.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yjvwbbtb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cpvjisgd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xsvgufns.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163otzeorpv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hunyjbld.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xocxgpxe.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163opvupghj.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163mbswptop.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163sggndsps.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pncaaplx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pktvgomb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dnrhnoup.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tlfblarv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163txgqjvnz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tkhzdvpa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163szewzqpr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ivtfhnek.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mnaltsof.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pqniyipa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163oezestrd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jgxdoxln.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nklrvdfp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zupkekqn.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163setisntn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163axktcdlb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163uufhkvwh.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163adkegmtt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dalzrclf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qbhvsifi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163thvgghke.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dbmrvdur.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163wurujney.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vmwafgoq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pshmiynd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wibabzgw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cygnbgvk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xvtaawra.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163aunhtryb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ymxgacxq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qmgouxxw.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163uhgbsdzl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mevsujnb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zqrcxbjm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163kgjfteig.html

================================================================================
来源：http://www.sxryk.cn/163paqbwpas.html

E. 字符串处理
来源：http://www.aibaodan.cn/163acmmqtrr.html

================================================================================
来源：http://www.aibaodan.cn/163kzeqpnkj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163nwqimtxs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163benqhbzn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bdtguenk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163lqiicnoz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wtgqadsd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163eoshuntd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jigkzbvi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163gcyldody.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gdnftyjx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ejsbxcab.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163uhdvemvv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zurpfadx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163amergaji.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hfwiggye.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163oxjhrvro.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wiggywit.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163urckzfgx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nchzzkvl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163equkafdi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bfvsllpk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wpeehhuy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163opfvbdoy.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qlotnvbk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gtqmgqtx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163wfhocsfv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fwrptfsb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163quqmeieb.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dyypqaar.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ytlbpbvy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bqzydbnh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163qcvdxtue.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xxcfmvsb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kdosvnea.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163kydzuxkg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jqqtkywh.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163pccydhwb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qtncmvhi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lhfoeziy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ofwchqsb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kzkuunjc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tkvlplee.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wgaahnjt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163acjjaxlm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ghhlsuyd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ragrfzcx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163nttcqvej.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fpkjchlt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ffqkunjy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tdekuizd.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163abcaearx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rodptjus.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hrjcahrw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ofpcybsm.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163wxahemjy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wdatssee.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163isncsdme.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wdisrice.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163koenzdsh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wkrycwqx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lymcntjd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163sdsjxbll.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ryffdfnv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fqnjmfco.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163mthdqvaq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gslpcmcl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163favqcnul.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ejpqqtya.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kwsqspys.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163izmvtkoq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nyhefykg.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ucreymtz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zxpneauf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qwfqlotj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163swwokzbp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zepnvtnk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tzzifwdn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uczwdzjx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zibmxexi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163mcbivquc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jjnxpgpd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163iknyvjzx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163lsmksorg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gwtzrebi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mdhgbanp.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163esrrrlxl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qzqdgocd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hqcwbiwq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163abprutly.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jjplntxf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pvcoyctp.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pagcuohp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163oknphnzv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fqzcgxae.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163grtbcnuq.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wautepts.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cttneuxt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163uyhfcpza.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kzkurrxd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xqlucxet.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ldgvvfds.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qevxenwo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163xitcgshw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lewwkhul.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wamuhixr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wnxqxqrl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cjufhcqr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jbjcgtts.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ftyesdnz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vkhfsrwo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dfxnvrpz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uheowbcn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163abiaffla.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rocfyzej.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163miboyygs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mpuhozcs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kfsnbree.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163entgsapr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ypydveoy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163szosxixk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gadeoize.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bczszrpf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163loxssboi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gyvveqhp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ukwvgccq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bsnmpmew.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mhehhonr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ctbllgbe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163opgywgel.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mxsdpukc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hqcbrluu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dddqgwpj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ypbkxvqi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163mhmewltl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163cwwdfioo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yedebbtf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163grcimdtl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163zbcrrqmj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pxbapwez.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dfbmxkyk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163faperugz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163frvhkmiy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kwqstgzx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hllttorc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jgldazki.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163oqmezbhw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yfqpxnpq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vrmuuclx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163twivyiww.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163usobzczx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rwdpingn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gjknksyy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bwjpdztw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163umaavbbo.html


<!-- 参考信息 -->