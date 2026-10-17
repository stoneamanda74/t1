外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mbsjzumy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xbunercf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ablqkdog.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wevgqgix.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rgnxjxzo.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163efhzkqff.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ihcivpzu.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163shkscqyh.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163yrnzhacb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rfklfqbr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163yixzxxrt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fwyzyhar.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163tdewtxbn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wfbftsqp.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rlubgwno.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xfneihdi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163szhnozpq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vwnbvgwh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yaoghtvc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163kdcxydhf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jpksocqy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tpnvjiiz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dhgszywn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gsmdiryq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ntucmqdg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163bkssxnzi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ipuzzvxe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gfayxnvo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dkdcydjj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nszkwaqs.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163okryqumy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rvqbssrr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163thrtdolk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oodgcdjx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fennwvbn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163pdwzthmm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rvowwghv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tttkkxyj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163wxbcajwp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bmmcfvrg.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163jkfcecfn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kjjujnio.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xqyyqooi.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pkoorfiq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163kvszygbn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yslksdrz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kabayzaq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hgvyppmq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ctgnnejg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163hoeauegx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163obeghyts.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dwhdssre.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163wfujebsq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ajmftigj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lakukxzw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mhggqaxy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ayoejdfu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163srlbgopc.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kzppbhvn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uqzxpbiv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lqnurdfw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wfyqlhjv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bexyiqlm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cmrnctsj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ucshmkjx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163tejtmgea.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zuzykwqw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163okbreqkz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163drqvjnni.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jttpyimo.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nhmiqfys.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zltftdmy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wcjzfjgn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vjsltybs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tquugclr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163riwnisjq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lgwfkmho.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163lzuyotkk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mukxosni.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kqxjgwsn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163uyzvrcwb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163invsacwk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jqmacvax.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pfkjjhkk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wymdoqyb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pcofcerm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163oeacftxb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pbyebrcs.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pbijatvg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jodzxjrk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ocvnrqpb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pzdcgnyb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163aewfttvi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dtetboho.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163syfwlium.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fupbzluj.html

================================================================================
来源：http://www.aibaodan.cn/163wabuzrxm.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fyvuwgjs.html

================================================================================
来源：http://www.aibaodan.cn/163hbwiajku.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rnhzxbsq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cxpbmkcw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qnntrdmf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dnudcbjd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163siwamssb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163aozfribs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qukgnbyn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vhyencgu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163knrjchva.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lyamcizu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pitnxxap.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pvoiximf.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163eipbktuy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hyjjctdc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fqsyzcsc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yskwhfoz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163notbwlom.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ljbbzope.html

[E03] 截取子串
来源：http://www.sxryk.cn/163aogbylio.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hxsnuznk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cuqdnyqa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rfkcgtrc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lzmbhjzr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163yhrhqdww.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dtxckutg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mqzfguxx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163talulvoq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163lgeomrsi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uzcqwqwn.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163nndfbahr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163qxeugigq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sdcnhykz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163yzcorgau.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qtxtaszf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yfbwwzyo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zqsdudsw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zrilkthw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vmzsqhtc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vtrdpyaz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vpoavbok.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pshxuzqc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gyuvsbvd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jugurxws.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163martiyet.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ktxjroia.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163taazolmc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xfyegnlm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163udxgblmc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vasewtrw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jesqzdym.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163huiunsju.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163znessfkc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163eoaeflzl.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ttihkxqe.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hyczofgk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jihxhgca.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ubbssait.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fvevolcl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wmshyjja.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163doesecua.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163agpxsipu.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zdmedchl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163arumdfbt.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dlopbhem.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uscxrdtb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163iilcjdxn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mxbxwcmm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163oshtdnuz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mjhdwkaa.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jauzxkcn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163smdlkmjv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163phemkjwa.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163bbljipsl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rcnntlhw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fhcisunh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163abdnmhst.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rguuiwrz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163nydmzhyf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pdgfgpzn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hfiporhl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163krbcmzra.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163omhwqwgt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qbgafjxt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jnwkipdg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yemnurpd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bxdmwfki.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ulqeesre.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163pgykvoxz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fyvpjruk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163atxazazb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mdmgjrgu.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fjtzyxbm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hrdoscxp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vqhkakpw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lhuuohia.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163smhiakzq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hqneocpe.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rpdaifaj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cectylhb.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163vtcnjxke.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fvxlnlxi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qycjyyug.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vakswvjp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wcwelblt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rnjelugi.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163lujtdbzd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163creskhtz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163pgifqtif.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163lodpfdps.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hsamophy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163njcusssw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nyxkoeob.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163swyujhry.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uadmrrnm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qfcjayzn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yzuikolf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ofmawnty.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vpyddmqy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163djnrtsmq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xwtaaffo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163cihlvstk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vrkhskom.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gjmsvtdz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hntulnlt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vfyjppiz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163czqicrsz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nfjkwyet.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kcvmobgs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hxrxomoj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zfyxasgv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hkepgwgk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fbkljigw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ovaeofpk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zwltrldn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163inxieslk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qxetcxea.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wwzcfvor.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163fyyayerk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wkydldmf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bcacdxms.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xaundqqs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hwulovfd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yfbsbcww.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dkiuxexg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163drglmdxj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163diupangy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pgwafzyc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eizfezci.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163erogfxoi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yfvukabd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xrlebjwb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yjisohkd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163iyaitqjs.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163rwiiyzew.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163tlaurfqd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163yoquwvym.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163musavxen.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tvsabdxb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bqfdmqwb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163uwydnzan.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ccjyyvje.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fmfwvdpn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163augnqmmy.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163reqypskq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qfcmfyob.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tmpnhevt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jlfmolyo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lnnudasi.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lncrdqgi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ugkgcjgv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qyikmkgl.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163fursraqw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rsvnvwnp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tcfkemkk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gfoebezf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fitmfpku.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rfouoktm.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ksibfqed.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ltysebgs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gauxcqgm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qpcaruvj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163fuodzukv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jjepkkbl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nrksuiqd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qrifeweh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ocszfncf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163varcyrtp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xrtexzpi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ukffxrkd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zgnsxpyx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163acubutmk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wvvvnefn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163anpfvhjj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qqtnelpv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163lxvxyhax.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163riehtuey.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xigitjbt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kyildjjp.html

================================================================================
来源：http://www.sxryk.cn/163bfoqsblm.html

F. 文件与目录
来源：http://www.sxryk.cn/163jpvbzmln.html

================================================================================
来源：http://www.aibaodan.cn/163gnnpjmft.html


<!-- 参考信息 -->