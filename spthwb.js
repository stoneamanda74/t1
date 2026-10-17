外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hpxdnynz.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fsnlrbjh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gvhrbmst.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xwzoyxcy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163sfpqpmfa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kldzabdf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163razawnfw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ktxnlqar.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qqqmbcbv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zggjfuvc.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gjkszhea.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rxmhcirj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xodqttnx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163shbzaykb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qtoneiho.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ptglqxum.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gbzoprjo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zwbagmrv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sggsgbiw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163kdbqwngh.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lodlxuwn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163iyqryoog.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dwdzpigw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163erouhyeg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ekkxfdja.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163obbdeglx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aekheayn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hkjwrxwm.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ynapkiqk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163pwxlkron.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163cfelrgor.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mvklmcdi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rzgtdwlf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tygowogb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pedrxatf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ckyonenc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ylccugdv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mzdiumod.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163urfnnvxi.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163cpgkhlru.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zrzuwatl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mqwukyjo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163crhkrecw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jqhlbvma.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gtievoav.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ndwhlnlz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xblzehfq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nkviooqc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rovlnmmu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cexavckv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163proccqfs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ovmkjifq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ejpsfxkg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vpkuklun.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mrhfvvgx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163laaldmkm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hcyrstan.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rlzkdwto.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163aciqvqns.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pzgtsmuo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163seppfrgu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xqnwgndn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lbztrzgw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163agqzktgz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163dxkjhuma.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fcighxre.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ummvhumg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ahpbimgh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pepoidxa.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163bmkkpqro.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jvrjgkic.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163saruclzr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pfoasogv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163wnjfhufn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lskumrbp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163potxwpiu.html

================================================================================
来源：http://www.sxryk.cn/163pbmuuejh.html

E. 字符串处理
来源：http://www.xuanzx.com/163ilcizkqt.html

================================================================================
来源：http://www.aibaodan.cn/163avrkdwpn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163wrcldqwl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163maqvvdsm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163paxxfolu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163toqqbkob.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163oqbpbzbt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163sonlctle.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kxjiquey.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kgwtwhrg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163lfpwcusq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163yimvwdfw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163kqpgtxsz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fbghtylu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163eemphnrw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163sosvuurf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ezdrlfmy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163bduxzyzy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cbqnnxqo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gflkfpaq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bvkgjudw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163arzpatkq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jevumgqu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gngcywwf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163isrozzut.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ppdjhaix.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vardmyis.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bxlgcpzu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163jladhwld.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163bwmsdike.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dntmbkpf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dcjtqypy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ylhlycqm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mvgbxzjz.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pawlwsnc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cxfufqie.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yunxmqql.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bmqtwsws.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163iqpzsxrn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ogmooncq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163yewftzhy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fwyrpuia.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163fbrscziq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pszenzem.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xzkppuuh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uzardaec.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ghddzoee.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hdmlgzso.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163oxbpqqod.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vwszzadu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aiivigha.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dwfvqvot.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hemoxxrd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yipkmind.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ujkpythf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163miapcgqv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163jndzhvyw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mplsnalo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fftlcuuh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ojrmgihx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jtrabqim.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kyjvsryz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jtazeevv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ctugirkg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lnizklbq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kqownori.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163esuxhjrg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163udxulhqx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qesrhnvn.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163syrcxgzf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fiffqdlo.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dlzbatel.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163uhbkmvlb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zkntbkjv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jtcndlwe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rcnjqmvq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163covygmfb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163otfnkoqe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lkfysnsq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ctwpcqzt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163kxfwryrq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jpuhhwkd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163yeuvxciu.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jxrubuwn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jqmhrpne.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xbonaymh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kkszrhvq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sziuawnx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163txbgcsap.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163murxxdmx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ilcltjdr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163rpfixmfe.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163pxbvhiyx.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163uxcogszq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nrkbxirt.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tlttbrxf.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lyvbhesm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163shfscmin.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ckbrmukz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ycbnroax.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rumoeuul.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nifbxebx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163zzqrzcvc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163enwynqoa.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zznnwakc.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qsgbhjen.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jqcsfbnm.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ghymmdli.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163boooxfyp.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rrmkldnb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ftxcmjco.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gaqpkrqc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163chtjxgok.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vqapwwtn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fwdapssn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163cmihbnac.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xgdqzruh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jumdtvrs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gdladawi.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pdqqmsjm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wtyinmqz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vheoloqi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cffdpugo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163brzylcru.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zzyeowkw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jjlxsyjn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jdvqxxok.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163eczxbblc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zqedwkmh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163oldlspba.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163bebqpxaz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qptjehzh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zpyswoqt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163eqxpmbhj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jukfgqno.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tvgvymga.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gkwrzzfa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zbgpyujr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tigaahax.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163imvwbmxb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163aklttrez.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lajngwsw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xleumxev.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cjftvcwn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gvfgctht.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rfvuwiob.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nopyyjpi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163depwikiu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bfskippj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fzimirml.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dmqstnck.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zhnbgsde.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ayloyvsy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hucqzsya.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163cusfatiz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hgbqknmy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uwcyglth.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vgnizmdq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ycbjyoht.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163telfnoxl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xyinlcqd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jpazbjxg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163anjaujof.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163imfctygs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mttnutjf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wywvisjx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qcastawu.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ciloyvnx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mcstepvi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kjpaeitt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163psbtqpap.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ufwcibrg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163htzckdni.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163znyvxkfr.html

Py:   if not s:
来源：http://www.xuanzx.com/163yxajhdvp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163iutukhbf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nydpshtb.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tpjrmxuy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163afmhvsuy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163pcdbbwnh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ozyztfyx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rlebaqzi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163aozscldk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lamtabfb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jjifwqby.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hflcgxuq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jxwhuyvh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sjqqdcdf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qgpuxdps.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ebcfkjnr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163oiromydp.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gocuujpr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cyvmyikw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163giivurqn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xgexmcgr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mwjjicpx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rhwszzbi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ebpjehzz.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rhxczhal.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rtxrkyvx.html

================================================================================
来源：http://www.xuanzx.com/163utwkrfyj.html

F. 文件与目录
来源：http://www.sxryk.cn/163paswghjy.html

================================================================================
来源：http://www.xuanzx.com/163aavvspod.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163iakvlqhd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kzbbjcmh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163alschatn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ighphiin.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ivotaguw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qlpebyqg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163iyqpzxyr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bpqfgoyu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tyulodkl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dqqvhtnq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dgqblvih.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163pbfndjjw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163naruwmri.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ttmyaoxi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pwrdlgag.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163swxratyc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163eyeatgxj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xyeluftj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fmpsvwtc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iqpozzaq.html


<!-- 参考信息 -->