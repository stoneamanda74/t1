外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cbqkckqf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163clklmozb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dkxecdjy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tdhumzuw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lffolnim.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kvszcyhe.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ykrhxbtb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kvilxmjj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tayregav.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mzcomqvf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zjdghpko.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qkjalevx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yrdwimvm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163mftjsjdf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163gejccryk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163spkuvscq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hoeywdsh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wxhriedj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163brbpitqo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163piickpja.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nsyamtgc.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zpdolgyd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163erparqfu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163woyfqzpx.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qijzmujf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pysdyahl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wrlllcar.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xavefmfj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jnzelbxw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163upesofsi.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mtydythj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163xqchhqwl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hrglqnuy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vrsxujok.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nlmgkhpd.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jcvsthzy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lbxfwabk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ynwaheoi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eewstged.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163edcsdxoe.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bxebsrfl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163agfqlcgn.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pqhisgtw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163bsvjzvfv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163qrhdehoo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bsbtywjk.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163txlfyhpu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163fnpkqoqa.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qqqogium.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163swarzvjc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ngihqqkj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zohnpifr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zmmoofws.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163uozkggvh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yojdhtei.html

TS:   [...arr];
来源：http://www.xuanzx.com/163cczknkbr.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bakyssqc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ahkfciet.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163rprlxwof.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bquczskh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nhtdwnph.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163crjteris.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nztgamuv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zxldkvtu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mbrkkuka.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qruiqkmc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qdzdnifo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jkkohuir.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zerngsqk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163urbeontr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mwobmass.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mtfbyyno.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xddfmagk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nxjgdiua.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163yqodglts.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163gdxbnbbv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vdscvkzb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163onwshlno.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163trtudtyb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lhgmlrqf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163byhiogyv.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ljdoheyf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bauqdgvy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rvpjchbw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163cqfaprbe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163eemtnqbv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ttenpkiy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163onrhlfdi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163imetzrnq.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kvspttzr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mwokqfvd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xrwvssdn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gxywmqhb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nnlfxbom.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pijuwehn.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fsowrymk.html

================================================================================
来源：http://www.aibaodan.cn/163ziusvjwn.html

E. 字符串处理
来源：http://www.xuanzx.com/163tjquolql.html

================================================================================
来源：http://www.sxryk.cn/163pjciyqpz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163shmrbqxy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163pqzuxgdx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xbqpyqsz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ypoawnot.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fugsaiaj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cdjczbay.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163flppwhoj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mkqznzyl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yrrzxbca.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163topspmiw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163kuoumzlk.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nghvcjom.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163viqnwnad.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hdmsshlt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163adxgnjgn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jlcxoqxc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163szpbrvxg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cvwmqjhb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163eefqqcgu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163jcapdrob.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163sojojgqw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163krkcwmip.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rtuqivgo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kviaevgm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vbjmrvvs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dhsxhjby.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163tefwkxez.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163nmxbmwun.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tqkrelzi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mdlzqayg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bhmoaays.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ntfwhqko.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ngzfdbtp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ggvghcko.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xmoujmzl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fccamxbl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qtnfqgaj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163jmuubggl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hdgbhvgh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lrcizdtm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ronrxxlw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hlkafmwx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jfszyrib.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gmjdcpop.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qkcobqvn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jbtmgxnj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qypbtzmt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hwzrjxjq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zusfnwnx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qhsbvxag.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nedngqzi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qhcpagsk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hkhucifq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kmxfrqbt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wxfzgfjo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163iulloeyy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tvxmbteo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ulnbxaly.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mlopeplz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163orkfufbr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hjsiagnt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ausjzdmm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cppgwtzn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163femlnduv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163djjcrykl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163noygpqft.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bxmiiels.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dripdtty.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xlrwqmcn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xutvllzu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163veyxtdcq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163welqtwad.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qabnleaq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163umspnvij.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pckqzczo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163pzszpnvp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pkqrgrcq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ngqzctnh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lyxletqq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163sywjhsum.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fwoojbnt.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vqvuepaf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ppcmwlfj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kpivvdph.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zmcmiccn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cqoqvcwk.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tldozdoz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ihayqblr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nhciukgb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bpyierum.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163aobpgcpj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pvsesprh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wssvcdgr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ddvdfwrn.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jqshfmvt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sfeemvcf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163donsdxrt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163gvayfpnv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mqaajylu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kttdgoin.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jxaneosp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163grxmihad.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dxnluqsw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ypxcrlzu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mwkuraul.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xwqsmngv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fkkvixdj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fxjmnolw.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tfmekuhd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163crckxrxr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tmzlrqne.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eeziihjp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ruowfbbg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163lrbxfyjf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vucvhkdo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iuzylbpq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mpkfrwui.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163knbiysaa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ditmajph.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vkubbzxk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zgqflsdi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sqcbbsqz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163oeekkaac.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163snvyxbot.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hokkdwxy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163htgmpllo.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163umcdxbid.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hfewuxfd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163chgrzwsd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gtijjaqg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tijtxpbh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163umodcsmu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ksmbkqbl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163selhglzn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jizqugbd.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163udumgxiw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163nsbqdcog.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163iyooqdvr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ulqipafz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163paaktgwf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163lwwtigxg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xgnkxkbb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dbcupfvc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wqaxeizn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nagukgoh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163csdnxphu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jyicgluc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gqspvpnb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oocmnity.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163daqdtudj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nlbvaila.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vsdflppd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wrbqaqyc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vdgyqfvl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nqqovrmj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xwqwotpb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163klvgjsal.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tilklkdi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bwbwxspq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xjcpqrdm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bysloeif.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cltdvajx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rmjigpfz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nyvoilyf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ktluautv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rgihcemf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oshireuh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nnbqaalr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sfodlrgx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163agqtmcxv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xymmgrpi.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163rrzxpkwl.html

Py:   if not s:
来源：http://www.sxryk.cn/163clfaqtsi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pdllzqlf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163kuhohjfg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mjsoknsb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163erpfarrb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fxybceyu.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xumnonfn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163iqkeuxbh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hyhsrypd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jeyynasa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qhoqhmfk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xuulffjm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wcqquhnk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163giwsgoqk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qtoewqfe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uikoyall.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nzvsmmnw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jolzhchm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163kkngxfkn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fdgtuyaf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uzsiogyi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ofainlpi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cvwivtcc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vmnfmwgm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yshgoyex.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163izrcfsty.html

================================================================================
来源：http://www.aibaodan.cn/163buvaysgj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xdswyrrc.html

================================================================================
来源：http://www.xuanzx.com/163hublaqof.html


<!-- 参考信息 -->