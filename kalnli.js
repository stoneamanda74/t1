外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pceakuid.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uipswqip.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sbjvmnod.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jvjrmsgu.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163dnnchalr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163inotgvgv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mvyrtaas.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xzlwznsy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163znbxnpzt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pkwbodln.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vhzakndo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163klgqxqni.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fmzvsugz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rirpicob.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163khaeqaoj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163djghnwbd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uhpmdaty.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163cydssutn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163gvgrvgqx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bknpuaey.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ybktduyr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mqutpdcz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xecklvtg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jxlvrtxs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163eqgxfizf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ftswnaor.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mhxlovea.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163yqvukcnd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163qlhoipqg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163cfcyyitp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ptojazez.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gndmbykk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mzoeuxuq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nplxiigd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fyhujxew.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163kumcwurx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mpmqdwyb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163umuztums.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163flnkyngm.html

Py:   x in arr
来源：http://www.xuanzx.com/163ykionxie.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163hexpmyft.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163cfzevvxo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163szvenpmw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163warvmqok.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163iogsrmhf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163svtydsyd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163eqwduvda.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163skxpjugr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163citjsimw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vewvkfll.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tkwlheku.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hrmcxpkk.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163eodxvbsb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163goucpqlh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ybtnaylj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bdmpmvmy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nrbvtonr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sotvwsxu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xucscvlt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hobxrzrl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kvnbjxfl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163afiyihgn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yygqoelh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xlzguvbp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tffqrpec.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jeuctbgp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yapqbeoe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qtvlcmgv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163szjpfhxw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mqfkucpj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qjouojcz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mgdzjuju.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vpnywbpg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nzgzzfgu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ovbqsuge.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163sqkjggiy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163stioqgdm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jnhoydav.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gqascili.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kuxuglgw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mvclchum.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pcgiusqd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dtpvlvwk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hretjecy.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163imgpilfp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ujmmbkpi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163npnjkcua.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163popihijc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163szsyxxmn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wcobykcy.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163izmhgqlp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163naothovn.html

================================================================================
来源：http://www.sxryk.cn/163idoubtwp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ansxmwxy.html

================================================================================
来源：http://www.xuanzx.com/163zrqqdivl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gqihvzmw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163apflxlhu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163mkmovjcm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163frfraxlx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ubzocprm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163urhhttvp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tddrrkry.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lewcnbbp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dvaasiun.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pxwveqtg.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163jljywwpm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xcsmnveg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vjtsmsob.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ftoukobk.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kchbgvek.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qcmwbavx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oetcliey.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dkgbvjbr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sedyozix.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yhvtdnrk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163tixztzuy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ejwaqlyf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xrnllghy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gfhlcssn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yvuhyphu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163iktigdcr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163lusgzuop.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hjusewcq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jmajjkym.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sqirykya.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xclltiak.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163plgdgujl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163aqhlbcgz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ueyckesa.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qxgcgkuc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ypfggibs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163loevelon.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163teiumiyg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vvnkjbku.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dkluvjqz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163gwcdbhlz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163afdwlvgp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ouhgqaxi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qtlbgong.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163zfidyamy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ajaonwpy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ksmyiamz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mutlbgqu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eqevdrpy.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qdlyvovq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rpwxgdaq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mbospibk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qfmardst.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163xtrunxdk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163snzkyqlu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sfmcdjas.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163buszswnz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163dvurmqfa.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rertqsfm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sdnzcvfs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163qiqeykjg.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mgnuoydt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gkvtyxza.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pcyzpnki.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lqsgfwmm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163lqzcplzd.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163izcgmzxu.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pkdtvlcf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hwreqfas.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163inijlhmo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ztdawtfb.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163thubyazd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ybmujakf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163toygoudl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hdkcuqlm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gybfjoel.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mxsqviel.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163lneaarus.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163oijbltoh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dnsbsjub.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163efsbsmnw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163spxcmweu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lezfieqw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163suectaew.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163lldgpzko.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rstxmvug.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dttimhsw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163urpxajvu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qojkxfmv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163yzgtmblj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kzrafdip.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ukyznfkb.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163secqqqrc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163drsomguk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vyrkncqv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163famqfvdd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163zpcfqivx.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163nwadfbke.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pekuvzal.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ecvzsyus.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163tdgyxplk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ewjslncf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gxxntxuh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trzehbzj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lrbgayqz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nyieaxdq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rgkrppyl.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163hmsyroic.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uawxluxh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163izpjwcov.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cwchwkmr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qpszfvhy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aotkjtvv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kbercbav.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163yiqmuegg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163vhnirylq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163czemkmsk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jrbjwmap.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tjuoczlx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wamkmxdj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163lbantdra.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163onhxyqyu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nrcxsyjw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nxalyvvp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zsxdhyee.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cwalojen.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163szgsgkwn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jbqwpxvo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vvhbavcl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ltdtlkif.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163rmdmgxaa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163orhegglm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jtpkzkoh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xuzzxzkd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jgxmlvsk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tzpnolle.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jikpdpax.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kkzfokhq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wzmsotzn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dqeagadr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wlkdwvmn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163pvsshrvs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163konzwekc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xbcwehne.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163saqssrdv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163gwlyimwo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lvlvjcxk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zkorvgmh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zxavyyqk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cjkvgaij.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dwnsqnrq.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ocixqifk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hgmcqgcd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163amjxhsit.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mpnfhmpk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ejqmukkp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ebzkyoap.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jtpjmfvj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rbyhjdng.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bodhoesa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vwnmkmsh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cnpevqea.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163pcqzskpk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163maosryqz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163duoseksp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tkvtlgnt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qlwpjyrd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kvojumsx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yoivflfw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fqxsiwro.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163azondjun.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pkrhrvvo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ixljfgzy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nxmfopia.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wpsjyfeg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163zskylatr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rdjdcoes.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dtonskuc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163phdwcrqn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ujlplzav.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ytymotaf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qephkarw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yfyuupho.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ywznkmmj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xzwlbmsj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163amwpqctx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bkhplbtp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ogdythka.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ufvtshpd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dchgsdbj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vhdsbssg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sbfrojrp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vuyqitdr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163klkcmjnl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nermcuaw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nlmgztxi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pglboids.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ubdrfmlv.html

================================================================================
来源：http://www.aibaodan.cn/163eazlsnbq.html

F. 文件与目录
来源：http://www.sxryk.cn/163zvufvjsa.html

================================================================================
来源：http://www.aibaodan.cn/163mhqvgdap.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163psdxawgh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163itedmmsz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lsdowqel.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163relespnv.html


<!-- 参考信息 -->