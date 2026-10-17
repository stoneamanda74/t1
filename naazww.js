外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eebbjpqe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qrudzyab.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163sjxpysrf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163umijthqi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163rnctkjjz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163lpbnjbar.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aksefxgx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163joehvijq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nubbbnlb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163oxslavdr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163xhnfoqlg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163njgsfxpk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ckzngctp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163solcdcnq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163oycszedz.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ppjrevlt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lhbcscaw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163vvrkwsqq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vejlvwsx.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163rxihjboj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bhbggula.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pmclspah.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163iamcidlc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163msrqywpj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nhtwzxff.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ptduwbcp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163dsmuldoh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163obhzstyx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lkjrwsnp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163oiofaluh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163keaknthz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wtcidgfm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vqevpqrx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163afbrcusk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bewxrjbx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163efwuolpk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163flmoyytj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cdfkbfhg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163mqoawhud.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yaubbaxw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hdcifwqg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jiokgodo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jqwgstkm.html

Py:   x in arr
来源：http://www.sxryk.cn/163euplypnu.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mpffptin.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zvbwwnfp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163esvvpmgx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yadsnbfe.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163esvblwoo.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gadeuyhc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163crjvmlna.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163skgnxqkg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163atytumyf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ytazcnev.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163oebdymkq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xibgdmqu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mlmdsbcv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163unlcqdge.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wrgosldz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163kcufukwj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163evxdcglt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bmjdxpjf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163zncbwlwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dyslzsyv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qobzejtv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163znivksbc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iktdrbpk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zsjrwgjf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163niptdemr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163huekezgf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dmbmhafj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163eipuxquc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163erlksatd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163edesljbi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kbsttzft.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gzggjsid.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vtzrvhec.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kiolkolf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vmbknnld.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nxasmmir.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yfxyixik.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sareutqk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163srauuecn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cqoitzep.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163yvfngpjh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zccaaaoy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163kmnixsbx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163nqcmrurn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yterozzc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zsikxooq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jtrcuflv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mumhnoib.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jknozagm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163petjtroo.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ldvzvbux.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rqlfsbix.html

================================================================================
来源：http://www.sxryk.cn/163hucckfbf.html

E. 字符串处理
来源：http://www.sxryk.cn/163edydlxqa.html

================================================================================
来源：http://www.aibaodan.cn/163zjggrzth.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kzcmiofv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mswtvdve.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163kiocvlxb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vvcetism.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163astsnwge.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wcotsyno.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163unxhvlls.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xwgwnuka.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ckiwcdwo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mqzriyjy.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163mpmfqtaw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wxgkyfnr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163chlrodfc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vtyhtlrd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qredgwkt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mreatxth.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jzbljmsi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mzhcdics.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163dbgdorne.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yxuqpbqe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pxnisuph.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zppqsnpo.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bqugrshk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jlgvzszy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163uqcjrjxc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jvgmpwsh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163hgmjjrke.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zsiohkar.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mbyxfplv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163frzcqizj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rvhokrom.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ruyogocg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jmyyuhbm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cqhnixpm.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zrdsvphd.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qnywjftc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163radlkmjd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ekevtaba.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163raihopvs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jvichzdd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ijcydxly.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ujnekkmc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mfaohucw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163imugbtro.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fxzgmvnq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qqcwnlrn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163urddyymh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163znuzzlls.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bwfxxjuy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163orlgkksh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ikuitzev.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lvbdddit.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cdqdjccx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zdlqfwlf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pjfggkps.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bookuibx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rdyvjdtp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163eoanewuh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rzheumws.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vegwhusw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xvrmemjb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vxfuxdyc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163uselzczz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163iddwcyjb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lmvtcdiu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ywstsowx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pzmcvnvi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jqroaetd.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163acyjtlwz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ameutopp.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wigecxsv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163eknrdiyv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lxtrxsdx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ndkhmajk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163llgtfbpp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lygkfdmo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ydydvorl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bhwgirbe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xnbhcblj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lxreedsm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rxqespol.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wcbfwjlu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pvcaqarj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163kumaslmz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jfnicbwt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jrmmfsnp.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ngitnkjg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bbizhnjq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hbgceixc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wfpviuxt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qxxpextp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ugauzkol.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ubppvoxi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yauylhjz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ehjdjpcy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mmxworng.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163syuuvhsv.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163icvebjaj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zklmdhhh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hasgsxeu.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ydwjiywn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163wwibznrk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163egslngnb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163egpoaasg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gjbqqwee.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163umyyjkal.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163baghhvjd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163sichwnaq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bhjhguas.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uenhbmeb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nhatadsh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163yjnjxhsy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163khsdgkma.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jxttaxlx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ygzxxuti.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iijzddsb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vmnxpexz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bqgjpbge.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hsfwhohq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qjqfifnp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163cxdkohgq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163sjyazaam.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rnufftyc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163knwmopnj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dopfjote.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163tekwzbti.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vlgtdowk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wdhjbuki.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hybfejtr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163shvtqdjt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hjfchjrw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163witbkjlx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zhfiwfci.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wofabtoo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pihzgbmk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xmcpaamg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163uwythctn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163vwlgybeb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pwsibbfe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xdiepjlq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mtptcewo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163csxvsahg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dsyipafj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gwnelsxc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tgxwbcyx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ibfkaisn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163vopulavx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163epwnkbet.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163oujzrtsd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163wlksftww.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163awbyfjgq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nkhxyitm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wlewhmeb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163abjeocrj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163htujlhwl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jkbfqegw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163otnyjxbm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bysybetd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hhrekxbu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dqdkkrhh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163sksrdqwo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pdsvwscd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163anxgazki.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163brfqldbr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hdteapnc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eqiikiyo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kjtxayqd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zyyjbiyk.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163maujhivk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ryudxzay.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mqjfqute.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xhqgagsl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rqtbaumw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fxldddac.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qnekejwo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tdbbualh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jucsrbuw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ikbpkouw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163izdqvrix.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tyumcwdg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163udmgtniq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cigpxhlf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fidopjeh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dofyrwgz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wkiiwlxw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jggvxpwg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ihkyfkio.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163eshxjfgy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xttkbfqp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wbejudnn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163chapjxtw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ndjvqkmb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gnssfodp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dsgiyyqx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jiompjgr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xkaowdct.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jwngfnmf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jswldzan.html

================================================================================
来源：http://www.sxryk.cn/163cmseuopm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tqkguudy.html

================================================================================
来源：http://www.xuanzx.com/163wdpqsmmb.html


<!-- 参考信息 -->