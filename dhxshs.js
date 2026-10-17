外链999!wailian999！

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gtvshwsg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jiugvldd.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163koacasxs.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kuaxegas.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163obyyxwuz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163syqeonmn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mzcrnwno.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ljozntmw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wlezkyso.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qvgmmfdb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uvwizywn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pjjlhbtr.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mwlstzog.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163krewevoz.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163owgotdpm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163brqwnnaj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163joookorm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fgasanar.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ftcrtcok.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163qrzmvutt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163iomxcaih.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wcnxivye.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ymahopoy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qdnjnmfc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163vtzlpzxd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163otyfplpe.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163bbctkwwl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163flqnablq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sgrwwlzg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qtatdbvc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hujgcxmh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fouwmfui.html

[D15] 去重
来源：http://www.xuanzx.com/163cejqddap.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wgavlkod.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ervtdfrk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rmwkmxnx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163umplglbo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wowfbyfp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163exdksfus.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rwyycbvx.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163iknqksfi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163cbsapvkh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xuaecjvz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rzjjeevi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163efjjotxd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ceyibxpg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fkjwitum.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163evlndzik.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ovzbpfkr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ebzbxexh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bxhkasxy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163cesfnimd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163govhekum.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qqxcyduh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163cqmjocpm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163phzjiovg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dreiqczy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ftbpicyu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rxdzmeyh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163kitjlnlg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gvfkcrus.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oplebsqu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vislelrd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dlzuowxv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163umqtipon.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163egqtwdvu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163csnaxyay.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dhrstkhy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163unczucsy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vhqsynqp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mwwogmrw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163yhlvcqyp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zrdujkrz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iepvayvp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zgclsjfv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163puhoccve.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bpvvhlph.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163veidbomi.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jrwuwmbd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163letohblf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jbxzhqzu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hfrrvbut.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ysltcosq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163cslfcmim.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163zfthuxqi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wdpfwxbl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163uxgigvnb.html

Py:   x in arr
来源：http://www.sxryk.cn/163rsrzdywc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zxdpmhts.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zqnwtaeu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163peosmfct.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163usjogpsh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163weznkgbh.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rvkdwbgu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tkdaoxnw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163pkbwcoyp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163uhnmtiqe.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163sikqoyxz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163sxxibjwb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jukxjvie.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xpkbxags.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ukdngdas.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bnmxlvia.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qknquikg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163jxfezwvb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163iibxnpxb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jnydbakk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kduhtkjt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ojcnywnp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163jbavbwul.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xfuhdgce.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mijoabtm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lekinlfm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163hukbwrzc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yhbadgqa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163yhzpvugr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163thwhhmln.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ewfsqqna.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xgwhgrqm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rlzowhyf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163clxjncoz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163tpbalfgm.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ydfpyqnb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163lvguiczg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163olekuump.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zayqtvim.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vqsljavo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163aooxtcxs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wsksugvz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kvvpyxbk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kqclmaci.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jjrhnxee.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rcwomsoa.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163erjxlvdz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163bcauvrux.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163igrrtsnp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kecndzui.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ynfbwphb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vkjyoder.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bcdlzxes.html

================================================================================
来源：http://www.aibaodan.cn/163kgmjhvzn.html

E. 字符串处理
来源：http://www.xuanzx.com/163vdlxmszp.html

================================================================================
来源：http://www.sxryk.cn/163xapgftrw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wexioxqo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uvhcafkf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dffmqefv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163htyahdlv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kvffdukm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vikrhrjb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163sgxwsmne.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xxrxdrsn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163dprtilwu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163htulaglz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zteouszv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163tsjvigdw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qgsagcul.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hrgovdyt.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163cfdsxknq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nukmuuwe.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jbbvtwob.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163iypjnqiv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wjswklla.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163dwojhowb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163negrwtcl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163xnsixlgj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163lqacctli.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163sefgnbxh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xrmhtbsc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mdsqowrc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ijezmtoo.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zhliymbs.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mwgazwis.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mxfipovk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163knmkdjaa.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ysazmmjv.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ioldqryv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hdhsoaoa.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163raodzrna.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bvwhzoos.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ijyydovl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fpfwzzhz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qigbdncl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ndihirzc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wpimwppl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bavxmbxr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fmvosrqz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163heafntjj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uekjuepn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163afchikyc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163nnfrtcnk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163venvgkkr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kkvneyok.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163scjkycwx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ouwhlhco.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163swkwaqny.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mqotlqpr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zdpsmfkf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ciemwgey.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nelzzqyd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hcazbnmy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xphzhhlp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qieprart.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163lurlfdpl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163nkysamzj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vblvileg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kxocfqlr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wzdakwnm.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tnfcxltk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gtwtabfx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163nmvsrtcv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sxebnlhc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qctyopnj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jrygiqrm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163seauhyqt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163htugypzl.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163eunzvapc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nuxrldnx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kufqzhrs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xudzynuz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mclbtjoq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163igdbhqjw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kntizsln.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zqfvnplb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163llwxwmta.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163npzfzjwe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163yuckcxhr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163llbdbtuk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163doeoqyow.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163grpfqgac.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fqpbxddn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rrmnzgjw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zkcivgsy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163fimigcsq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163upulvdti.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163peadybfj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163shepwzts.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cwtmozhz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hohyezgx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163scanpuem.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bsczzbjo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wviaarxx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163padfqrso.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pjabihct.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ptvkwren.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ykzcuyin.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uyihgpbh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fpvnovkn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xlzprhfn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tpgztewt.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163iwfipwha.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jkdmipxa.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mbrtsfyp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163aeruescu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rtjqiaze.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163sjmcsbft.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dlytmbsa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fisgctbb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xcjqemtg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ybpbchfs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163deunixpg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163cejdfkgp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vnzewlej.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ngihowzh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163nmfizjvw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163neyxdfhu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jgmszcmd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tbilywsl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163dqqnrajj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cjmsqdlr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ajcirgxa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tafxezsj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163drguponn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163sutzxalv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163yemmxjvb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zyrsxytg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dfiojfyb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163oeysciyy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163iimijzqh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163urumtfwp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jghteyyh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qjhlhrch.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zkftvpcp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wphtufzy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163txnfajhh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163bajngmyb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163snpctdxf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tuhdqmkb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xbgrbjlt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jehdtbwc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163astrbgml.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fgemhecq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bztesqto.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hclzewhs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vcjslimv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ihnxrvse.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163eflezmod.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qnoqpqdn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jgjoutuw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lqzeauln.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163skpvgmde.html


<!-- 参考信息 -->