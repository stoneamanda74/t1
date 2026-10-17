外链999!wailian999！

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bdjavjpp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ynlbyerq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jfuuryyp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163yzehvscn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163imfhvbbx.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mfewjolk.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163utyhmqpy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163uyfviwwf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zmhirhps.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ioxmkcit.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jvnjzciu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ufyptorl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xcobldhd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hjuzxaoi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mrnojrgn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ryuxkzdm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hearkgnb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ziaynmkq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gqrbjbmy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ygwnfjwa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yvmzbpur.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ayieqcuy.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nqybwzhk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ancswhrh.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163iqjyvyqy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163slcdqrri.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nvapsgnb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bfrzexcb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163smagkrqt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163urxpxala.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wjacauyt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163afzmfsyq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yrkhsqcl.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163woxcnuvv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hpnjreda.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cdgtwgkh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rljjftgo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163sebkeskf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163quhqmkyp.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rxpkcxmh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163lfaeejou.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jpvltcgj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ylhxpqws.html

Py:   x in arr
来源：http://www.aibaodan.cn/163wniqvqor.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dvkeexbu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163sysvkhhy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ucblatjy.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163koufsgdn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xnrgurzd.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mjxeekpx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tjilaeuv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dzjhbpxr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jlbfdvvn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qyvzggum.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163anfgccrq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163xqnlmtcf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jnvmslfz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qebjzooj.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163pjzavrsl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163koceqwyj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uhqcmowi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kjtgetos.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lnubmpmi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bfihonff.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ellihgdd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163abfyrtzq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xbmzjspv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ghjatmxx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ttzljdvf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rrtwzhmk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zfoqvpep.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ihccurph.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ixpxlpjo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lthnykpt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163oszazgym.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zwbcugun.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xhulfzzv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zphhojus.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wtodrews.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163wtjzymzn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uptktgye.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163tutxnneb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ogwmsgnb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163duwptrgp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fueymlow.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163biguxjui.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ezhrgjxr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163tydxauco.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dvlukmlx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vqxwwiva.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163spibhcsv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bfrnckhs.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mfbctwut.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163txafipyq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163smkqdaod.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uyioppkx.html

================================================================================
来源：http://www.sxryk.cn/163ynzsxsmo.html

E. 字符串处理
来源：http://www.sxryk.cn/163giouuuyq.html

================================================================================
来源：http://www.xuanzx.com/163jzpurmpy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pkxgdwyg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ducgoosn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hiithgep.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vbqourtm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163svrlyngg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wvjqeaot.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kpewhtea.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163fxjtgfuh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qnecfert.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gueogykf.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ocauirww.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dwpozmmx.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wdtkyshb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nwfwggus.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163mmnmahtw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rjfnyxct.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ybzeucjz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163osovflen.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xxlknhst.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rysoqjjc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ybfxnhel.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jydlrbgc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rrdeayjg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mvlshurk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qrfnuofx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163zelnmvgs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mggoiqct.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163lqsnxrxt.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163htyxqanz.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163nmxtmlev.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nogjxekp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lnqrdpus.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ytbzjgeh.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163gnzbdecl.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zegquuls.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fogjshlk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163agiwcjuw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gccolapb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163begtqqbf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qmhuboup.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xrtnaeee.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fpmkugsk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tsmolbic.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163nogllcts.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fskugiyl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163othsfhkq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fudezbig.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mlehpxmw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rciohiwg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ywptlcam.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qwkijbky.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fiyvqrah.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vzlgziwt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xibojphx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ncgqendc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oboppegb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163imhnmqgx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163samdtgac.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163lvonogqn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kwlnvwrm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dcpogliz.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163cpwgdswe.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ezdzcjzk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163sfzwkqzf.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163cgvluvoj.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163vjzinzhm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163bjbmloah.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xiryngtz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hwsvxrik.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mavbfxgb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163magdnyme.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rlkxzwra.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dethapbu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163alffmcuh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163irsuhlbw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wpunldsd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ruadyyxe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bomcjpji.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jjnuklee.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yxqmqiya.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fyeqpokx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vknlmobl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gdtpakzf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dnhbbkqw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ierjjwro.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mqvslbab.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qepklglh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gylgglgs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ggqfxaqa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tkrtnacc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bhwjhpcz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163snutentf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zneopvjm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163biprbppl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zupsvtzw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gbudkpjz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lklhloqv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lzbixakb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163geiwhhmn.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bykouhmh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pvsxczyf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ljegkdqj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yapkfjki.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163stezvuvp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wfqhhxcr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163aqtoqlur.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wjgxrgfd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ezrvwali.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163cbyromrt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vsnkfibm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uhffltfp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xlyxbuxf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163sdxbehot.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163mekostsk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qargmsws.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163kyhyakcd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nzvqczhn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163nidbvuef.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gqodkqjg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tqzqguqo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163baeprfxa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jgbttmrb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gxkdxaim.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nqcgcamo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ahewankl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dzmrqwfc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zykjfrcq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qlvzjcjx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ytnnjbnf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fgvtpomo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163mofokqgh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163lufkikad.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163irvwnlpc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xxttwzan.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163eluqslvg.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163elmptxyj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163rvvnxlml.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ffdfwexl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ypghhkma.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vfukqmka.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mghprgrv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zrhxqcdu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bzmexzim.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163rthpyigr.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wgnprpwe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163swbnxigv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qgrzshvn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ayglxtyv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cywkctpv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163sqxipain.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rssqvryq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163andtjvlo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163cgallxar.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163affcqnwc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163zsfrlxmn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sjheygcu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mhwonnal.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eadudahm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163yxixbiwk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163oytiayew.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vriimxhp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dulvlssn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vflrlvpo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kzgkiqsw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163phadkmjj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wqfnkpgx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qovcdjtl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yboqlahe.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qsplqlpi.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bbusflqf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ljgzxdnk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163udkytgxf.html

Py:   if not s:
来源：http://www.sxryk.cn/163jgrgesbo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wsdphqim.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fxxggjik.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163glndzzxr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vyeuboyj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tlnqtkfj.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jbgpcdnp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tbdwipjr.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rcfjollz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xvlbemvg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163offallek.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ozpmxwen.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gapmnppg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vrdxytus.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vypwkved.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mafaybit.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vwoqqjiu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xqcjybry.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163usukjwaj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mudzgfdl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tidojggu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jiiknbfm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kfoqjdij.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kmpbfeir.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yvkbuich.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jndalogl.html

================================================================================
来源：http://www.xuanzx.com/163toewkmkd.html

F. 文件与目录
来源：http://www.sxryk.cn/163ztbcgtyv.html

================================================================================
来源：http://www.xuanzx.com/163olotkkqj.html


<!-- 参考信息 -->