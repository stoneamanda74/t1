外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xhnrwezh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163drblduae.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dwuvpily.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163graserav.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163isgynzlt.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bxnrqkdl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zfzcnlik.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163tgjbshuc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163gmysxbpt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ziagkxuf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163drzjvrsr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rkahkxby.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wwznrhcs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ojdsuwtz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163myruxpal.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163bmggnnol.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qlnuyptd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kgvzpumk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163enkkdqaj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xxftgfcv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163figcqgay.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163inzblmsy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163sgpozryg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163peneoegf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hmojtjpu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zoratqba.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xnvqeysj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jglrfcfd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qrvywohy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163junsduck.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163luspibup.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dbksqexb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sospzmfz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gqklyqrz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163beifpcyq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163reegtela.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fkagezra.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163owxrjnhn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163azicqiau.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163uateigtv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163aejjwkox.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kreycbks.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163syowyaki.html

Py:   x in arr
来源：http://www.sxryk.cn/163qzeihkic.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163djoyytmw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dkyxdwrt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163frjqkxqy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uchqdvsp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zfbzfnqo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kevitmrd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jkcrbtwp.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ouvqjaqp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163clhlwfjd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jzdopojv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fmymbwck.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rrkcptxm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163brtxwnqb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163byqyakej.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zzqfyrjf.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jsxklhdl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163srumsmcw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rrichgbd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ahlnomir.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uewzgvep.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163eivnhacc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kcgumsab.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vqiqotea.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ttgozfdr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163iapvoiqu.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mlxxdsqb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163gzrkvanz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hmqrzxcy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kdvnjlhw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sfybxqeq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163fribrxwk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ectzjxbo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xfobxclr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hbpitsfq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pfnuqljt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163obccahnc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lnrqicqy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163demzforl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163iwjwhich.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163addeywtf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163cnnlaojw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163sjxpruhf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163udunguaf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bfgjghoh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hkuqudhn.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vismfnaz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rzaikbfi.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eusrqjtu.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qhkrtxki.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kzczsysx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163htspszcg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163euiscnjt.html

================================================================================
来源：http://www.aibaodan.cn/163lfefegow.html

E. 字符串处理
来源：http://www.aibaodan.cn/163miozyhtr.html

================================================================================
来源：http://www.sxryk.cn/163fxofsnjs.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qhmzyqbw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163hixatkaw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163njehkkiq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gnzdfdlw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uojogrcj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163sjguibli.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163nsynkpwb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163cbolnhwg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wpoofilf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qikncicd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163imoeibvy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qwenljnj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pyvquuco.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163efghoelc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163aullmfli.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163bhisgbst.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163mjkklxtx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163nlmmyemx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163yzqbfiia.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163nijfyyrp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tlrjjiri.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163yyfrxfaj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tdbggoyf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ekmorvht.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vkbptlfp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163eakybgtb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tntiacie.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ytfvjfno.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lrtvyrxm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163cawapzhn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163obytysmr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fxdvnaoo.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163zupdfzyj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163tgmvipun.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163woptxvxv.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163beeonuga.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163mparipns.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163daxmccby.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jjviwtyv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hleargao.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xyawtwsp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hrccmojs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163prviwyon.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rweiyszq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ynrigbtm.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163atzobjwy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163wbcfifbq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ryjpaxzr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163icchqqct.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kjdemqit.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163onhplgix.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qoitvxss.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163idcyxcpu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163duqphwwa.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163klsculba.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pivgihbe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nkkflwmg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163lczjxegk.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wjemajdu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ipuzkvrz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ytjjtssq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163iemqiblp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nrqccyif.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163qulvvcka.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163eafclela.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vcyyvfhi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kecetoxl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fmxlsugx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xhmreiyb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163fjxnknnz.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kkpinkaj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lufdlork.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ikqwzjvo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163olaebpgl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163icangyak.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mdtprqrc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tyeuypbd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hdzvzkmj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163vlclzabc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163qbgwpbjv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163jhwupdvp.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ehejuecz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hlgsutke.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kwitycis.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qnbezngz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hpsukuex.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163lhlyuvcl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163suuisdtn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163epdameto.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ldulwejd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zvnctncx.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hjdgsfae.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tnpgslrk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kwsxlmsl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dshjqlzj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vhlhowqc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163htmaiepv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163oaxcdbic.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wiisipla.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163odnjorfp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163oastowya.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yqbijpnw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nfdmoktk.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mwarklop.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163krpgwraa.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qzfhhiji.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zlmhiboi.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dvmpvxhr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ijfgroaw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fevmxxfl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163bbzfmaks.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pvsrjoic.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zmsxcgkg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jnyspmbz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gszbuoig.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163gctvmkug.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163soovhaei.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tccqnnap.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zofydngu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163sizurlet.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gpnlmwab.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xtaiegkk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zxpyjakq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gscjmxdu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163npdxvfng.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ckidtjdy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iiuzwupe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xswunmgw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ueowbajx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rkqehxqu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vbulmbpx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163sarssrvw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163tspazqhd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hoybhzfr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zybslsfz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bibnoicb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bsrtirgh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163azsgnzai.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qhkkgjhs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qjskjoxb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cemziunk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jgnhgemd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vdkgdjwm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163luxszkri.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gpywbdnd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jwfpjpvs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dkrnktwj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163miqbgyke.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gobrvxyu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yhmcufvp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hrfdbjkd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163oufaraue.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fxveeaay.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xzsqasyh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uimoyhmz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163owrlrdbz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kajcdyzt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bqynokoh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163eclizboy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163muncvwfj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hpvusupb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dkkyxlxk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zyezsehs.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uzfwjsmf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163yknzzxkk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bxstvjpl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eihgwvrc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dyzxqqrt.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163oczodqmc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wvoannga.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163lpxepqdp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163uxddzukq.html

Py:   if not s:
来源：http://www.sxryk.cn/163tawcjdqc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nmwtiodc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163znoxyxrs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mudmozji.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vparcpkq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rsvrzkbn.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vjxbjcax.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kjmoopwc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gzrngmeq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vehpebrv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163nvoyinkd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163chhjazew.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163danotcke.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bhrbibtn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163tiozfqlw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wwnnpmqh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wvoliwpt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163acfoispr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lxzeewiw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jkatothz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yrjnurhq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163abahhryz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jygebfdv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163zapkzenf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jkzccaii.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fmkpmjri.html

================================================================================
来源：http://www.xuanzx.com/163ktmbuxau.html

F. 文件与目录
来源：http://www.xuanzx.com/163xuenjjiy.html

================================================================================
来源：http://www.xuanzx.com/163sqzsopto.html


<!-- 参考信息 -->