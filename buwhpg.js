外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rvtrkpsr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163bvzvgnmr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tpbdhhwl.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163gmtbqyox.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163crerjmir.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163dcyrjqwu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lybnujtt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ykuxsvlq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163fikoktqf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163eigbzthr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163uhwinfcw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qksdavnr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ctvfchqk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gthdzore.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163udpjrxkk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163eokcysgr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cyucrssc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163gvdjjchy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163txbsbtwy.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163awrrryqo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163dpwvmijd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xnhwzolj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ffmcxjus.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163uevoslyk.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ruujtzio.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ddriqpja.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xtzlgqht.html

Py:   x in arr
来源：http://www.aibaodan.cn/163iqiezeca.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163rvoxrzoq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163doffjmwj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zecyickm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bgautqva.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ihrwdpcm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ywftcvlo.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dersbblr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zsanhnez.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163yxfyhbrz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163asvkytwa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kwujkbhv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xkgbilad.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163iwoydllq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jifffrau.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wxrbcbdz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163auczsivr.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zvqsvnwm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qkwpnbgk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vuaqrgkc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ypjnhkbq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ketahttq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dvewllty.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yhmfesjq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fuqysqky.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jcsosjbp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cglrxvup.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hahuumte.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rygcwwbv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cjschlff.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163oczvvhpu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163loloinkb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vllecjxk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pvxpgllk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mmgqbnln.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163pdzdnuqh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163usytmoil.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ekgwjing.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163oaoelhgu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mymghmfn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163iqxticfn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163namjuqyu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dusjimcg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wsdkudiy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qaqhkfgr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fexbohpx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hywawtqq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163khmzrshn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vbntfqcw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163spcwihwi.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dfmadpha.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xuhxkphw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eyfsuojz.html

================================================================================
来源：http://www.aibaodan.cn/163smjqhdps.html

E. 字符串处理
来源：http://www.sxryk.cn/163pccgqhlj.html

================================================================================
来源：http://www.xuanzx.com/163sdhvhlob.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ilxbjaog.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tmbmsvzm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163iqywmter.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163erqzscxb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qesyasuj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163khmoplrw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163fdpzgswc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163avvlicrr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rpdgudzj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bunyoamy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rwcfcaom.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163uxmindkd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jsphrkba.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lwbugmrt.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hqvxnkgy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gdrdthip.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jbiwrbym.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vdmxzoxz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qribkphn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qapwwzgu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hdjqmirc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163kwtqjexk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163mykplfvc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163enzeavkf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kpefmcms.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mvgajemp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aggvmigw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fgfnjkns.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ctjizrcs.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163amiiyhcp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163oeukoxri.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ilhpwplb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163usegewlu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qmcctpph.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ohcfkfie.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163odjcvaju.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163icsgpnxu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ythdqvwn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pkpwrlfq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mirqjtip.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dgiquugm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163njhyfnsy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jdhrcxcm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ayablthn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163glujhijg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163unoqobfz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kqhxwctc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hbsxqldn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nvqkodnc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rtrmyjdv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bwrehbov.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zkasgpum.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jlsrbxrr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fkjuykhl.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xdmvbmme.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mipogqxt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dobbeuwu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tbvizlmd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163pvcjltdr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163smuwqwnc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jdiicejq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rbwwgtsd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nmmzpxfq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nbdxxcxx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163vnzxbizf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tpfnfksz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163pdvlsbza.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pmoohzwf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pxtwdsxh.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tkmdbcpm.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fcdjyiec.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vodanrxg.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rkcbxluc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ngkkvtkt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163pkjbevxx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cucgomlr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163iqcrhnqc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dkhapkwm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163cxmrwldq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163blarkqxt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lskkakxe.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ywhupxxk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zrdykeci.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jkonuwpv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fougirjt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ydjgdwst.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sukbymxi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163kolhlmpx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163emzcejmp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163sehxhewp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zhxdeeag.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mkoaxshh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163mqkckasa.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163siapionq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tsgnlnti.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jmvbcvvp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163tmdfhyku.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ehdnjfes.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163guwcnuae.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rzhptxmp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ooxwdgri.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gzrkwlqx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xwhkcjmy.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163eqncdrez.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163izzqymbb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rgqbuflc.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163nrsobcdl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ijngqvqt.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163azybzxcq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163gqyjnivc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ooyufesw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tnevmsnn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bwnzwgif.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yiyvtsqt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fcapfndj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qeyvmaqe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fvddjbht.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lbjlgeku.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rhhtsewc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163oighfxli.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163psrnhofk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163eecbkdfd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163gxojyddk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163oqpwrcgx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jhbyvime.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163avinqikh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163vfldzlfd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fyopmadg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tenvkdzf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yiiqdlxn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163swxpexlp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kezpkoqh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tnezpvss.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qwjcmnva.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163bfoesfgc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rsgdayau.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qjgesmxs.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ykkhyqfl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ohwfqbpf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wdtscncc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163danhbzpw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ytijgmpc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163juzmkwzk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ovxowdpq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163peaxcpkh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163eqozihwc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163uoprhckr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yufllson.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rpoqgywx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163sxyfqkpm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163eeltkgmr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aathcwty.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kpgyplck.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qngqdmfw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rxiteeoe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zdocjoqh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zxbfqitf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fmzuzrgn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163nlnnbuwm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bypssowj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163uwogtijh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163roieqeue.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163stevrxhm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163yxfyevwv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163skbydegm.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xmgoxlik.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dvsuxsuo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sxeaberb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ligrqxtp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163llswwukr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zlofgxpw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bzvbbvar.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qapmkvka.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ulzpcqsw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lonodqnk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163uuxbdgff.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lohvswpv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163loqamicz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jhjpzyar.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xwojyedi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qctatiwl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mdrfpocy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163nlaajdlh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xeckrqjj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163unmtxuxk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iairwdjo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hkpfvvng.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gouuethe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lsonslwl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yrkpbiih.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qnsnxzpq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tmlxqche.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sdsikicn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mhkvvsyk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163potbfqve.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163axajkmhw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nozwzvta.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qaqaxfek.html

================================================================================
来源：http://www.aibaodan.cn/163oirsxynr.html

F. 文件与目录
来源：http://www.xuanzx.com/163udnkdbhr.html

================================================================================
来源：http://www.sxryk.cn/163jtzysmiu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gximmila.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ppautxnx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lepuzgud.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qznqsaoq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fcajpiew.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163huisozpc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ghznqbyj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163algluuwz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zfynxhox.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cyctyttc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163faisbjth.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qwbqfvlu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uljdlfee.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bfckjpjq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rpiqazve.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163uddpsayi.html


<!-- 参考信息 -->