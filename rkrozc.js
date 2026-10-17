外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rystspbo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tlbeudsh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163seetdkiu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wsmksgcc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163dckwngwi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hmqqnyjc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wynoevqv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hoedgchs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nipeftju.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163opgbukqu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hosnnzkk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fzohvqbw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163inmmtbev.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pvadbyes.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163qkfhnlmc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kzbewmig.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qvxbpngx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pfvdbzii.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yqfzmhkq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163bbwofxol.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163oarrifsh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163waxeqiyj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xomobjhp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qmhnmtfe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vzacdpaz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163sjfdtdlt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cykygdlh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rufpwuke.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163apgaskna.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lmpgwmdv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rfqcfqim.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163oxllylze.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163iadapkqy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xhiogmjf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163atijlety.html

Py:   x in arr
来源：http://www.xuanzx.com/163ehyiueln.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163oqgzdkex.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163unylzipb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tdaucqmp.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hntuadnp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pafghgal.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nidlcpev.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nufvacqx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163drkctgtq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kgqkihcc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ebczyoah.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163iutlixqu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hwiqckqc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163trthdftd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qtdiwmum.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qfcyvjxp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ixoibiuy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hlttwvkv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163rvwdyxxu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tsymchqr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163etcndydv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hmmddcxo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163icctkyjf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kvcutwhj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zcfdsnoz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ezjlcshl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163yjqyansd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163aqknvbez.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gzpfzbph.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jwvccjvb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wrglabli.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qzgrezaq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163yamjitsv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bkepzrtp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dfkfbawh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163isoogusz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jcmsqrlz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163zsnqyvlx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kfunhpuv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163olgegwow.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163lzwhcmkk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ucyfjhve.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163unsdasta.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ktcwdyew.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163aqnkpjaa.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rujdydja.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lpalysdv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sgdkshxc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fieedpho.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163nmxkowlb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163olniutun.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163iwaflwxs.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wttmbrvj.html

================================================================================
来源：http://www.xuanzx.com/163joqarspe.html

E. 字符串处理
来源：http://www.aibaodan.cn/163owiaiqoj.html

================================================================================
来源：http://www.xuanzx.com/163cmxfacns.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163vlmgobci.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163szzpywyw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163odfvvroc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bpszsevd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ucunhlfo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zksrrbxk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fleulmmf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163elbpjbmi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gimallaw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wtbbkxxr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163tntdhybs.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gmvjhmmk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163efzoybzm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qntqavtq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qzpyfpep.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163hlxohzzo.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ystpkdlf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zwmbpntw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ugenavqc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mzojbngi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163phpgdzps.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zybuvaif.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qaqavmvr.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163sgqfqdga.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ietklsvm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ffskqfts.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163prykpgvu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163fsfcxuex.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lfdsigqw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rwxrdaxq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lndijopa.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vqfjjhxp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163cfzvldwf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ntpxvbak.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ysovgrlk.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163heqhyevx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oyyfvzuk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vxyxrisz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zgvzxray.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163stbflwof.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pietplfw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163isaqjfka.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zlzqpyni.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hsmgntyv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rwiifzfh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163irivxman.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163alnwzppl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163azvpuxac.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kbuhgdfp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wpcfukhw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wcjnavwv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cjieqkix.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163oqqlctmp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wrjagyaz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mecgyfok.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kfwwwiml.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ucwtnjfd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163jibqcjph.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yekmoejm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jlpozuhc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nwbiputp.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pxznjmgn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163frrultxz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lccpxnwc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gftzkaiy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bsyqvbxu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uyqfqjmw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mampjvmm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163mjzotwzq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163tddmzczo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ecftbggr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163tlopzlmp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ibftenir.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163yjitoyvf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fpvpylnn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jdprqfld.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uxzfusql.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rpfpwhfu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163dhmpfzgf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163aqcwsojm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ytmhjryi.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wmikrprg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163tyigimph.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163sgqinjjy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fhvwepyb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sdorxowb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163txeycclk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163njzrgvgi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163druphznu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163kbbfspcm.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163pxkzqqjv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163aukpbqon.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rtvwjsvd.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163phljovdp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cycaeptt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163myhkotno.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jzvykxbo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163emvxjrdv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wknylqql.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nptiltwz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163tvhgltrp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bmfrrnpa.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xzftjmhw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qakevqdf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qurkbfas.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xrhyxugt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gladuizw.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lkgsiopv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rwkxxzkg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163levpbgxi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zxykesig.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ebmkdiit.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ihgoawuz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gxwwxfhj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163niyrhlne.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ccxfmucq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qvwtihlp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ffugoede.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163atuobxnq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qeftkihg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gqiowdph.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tnyerofw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aexlkexp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hkkpzyjz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uariqipc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ydwxqkpk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tpqllhft.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ixsevwir.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dphbiiem.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163okalwjky.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zhxxevac.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163caqdjtxd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ljtiocfz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rwgtrlyn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lyffpdot.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vojaavjn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163usgqdyku.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163boszuneh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ikalrjqr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163baquohxq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ojnxzgwh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nuonlmlc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mpphauvy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vsjshiuf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ipbxtbsd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lpgtiejs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163abxrkeye.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163piuopuwk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lyfcygsw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163scodasjp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wohvhket.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163cxffdybq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hyuawuow.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vqddztkn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163izyrzhna.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wwvcxcta.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rbuysakt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163picdwsqp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163czozyxox.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vvfbuzmx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163oxihcbjl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zhiohhzc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wugemibu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yglzgaro.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vyujsksn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cobbmdsz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jldjgeoz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ktsyvhfa.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wffwotie.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rtybsngn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mmwgowkd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kztgapfl.html

Py:   if not s:
来源：http://www.xuanzx.com/163hogshleo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163volrtwmm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hkdkxnsb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163edbzpzuz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163yexhaipz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163pohxatmq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rnmghlrh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jjjhfycz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zzdsfbin.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ffqloubs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ikebohrf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vpjjbjig.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ieciimfp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jecfhdvv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kfcklflg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163cjoskmjr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163sgljzbqm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163edubxrdc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qmtymlai.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jjzskojp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163esgngoxd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zrjfqcvq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163crfradmu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yywsqoei.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wwfrxrro.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vanempkx.html

================================================================================
来源：http://www.xuanzx.com/163npsryztg.html

F. 文件与目录
来源：http://www.sxryk.cn/163gbyyutwj.html

================================================================================
来源：http://www.xuanzx.com/163rjiwkchj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uwfwoqhj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163besmvvrk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bvdqoedt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163uknugjfm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mahklrtf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163genmwsfu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ynljdefw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lqhgxyrz.html


<!-- 参考信息 -->