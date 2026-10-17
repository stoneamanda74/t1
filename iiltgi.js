外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163faryqtek.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fakxcdje.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wdnqwmlf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ykkgidai.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xacbyfiv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yniyufdk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163spwolmni.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bggpfbck.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rkgizita.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ezrioimf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tphopnie.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163fyrhslcv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qbibeiug.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fioylejt.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xeabqvbo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163eahxwoss.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zlfgemmw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fpbvkarr.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fvqnybvg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163sqhwjcbj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163axjiwamj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pbkspdcu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163cyosxsxa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xgvanjcc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163haiwwzoo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163oklbrgrr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163fmnaycgx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ctfxfgcp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ftoiyovh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163floknyso.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163qhrerhdk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163dswmymit.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vguuboep.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163agbbsrdx.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vxbtvgah.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bxoewupv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163wiqzdmnt.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wcjoxqkz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yrqibsdn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ayefgpnr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163eagbvmyf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bxbsrdpq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163nsrlflzr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zblwbofh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hkhynkuu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wathogdb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hdozzgso.html

Py:   x in arr
来源：http://www.xuanzx.com/163oosxgqrf.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ljfxkcsy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xcodvmak.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163rjvzemvb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163assxhyte.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pgkyhdro.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qxigfcnz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163damojblp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hwxchwyr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zqcfneoa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bsygrppz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cmolhqqz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kbrdpmbo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jkhddupw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nvvsehcg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163pjattdcb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ychgtboo.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nmsofmfq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ephjyxke.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163idgcebxp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ujfttstp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wuqxglow.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163rbkfwvox.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nkpvsgrg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163odxlctoa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163dyknewfs.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nwttnmwa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zcwxuazr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163novkbvan.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163afoxlauw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jkqvorkn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ofqogofs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vafqbndz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dlvlddvs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163arajiyna.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163esecddhe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nbsjhjbo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lanfyzum.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nesdahqn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163mkuadwqp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vkabhyke.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163exhjbcat.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rqcrykkw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tnxugzny.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163bqscdkry.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163osvmxifx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163mmeklcik.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ciyuxpvh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163zvyfeufz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163aiqpslva.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vlolwuhd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163nhznkrmm.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163xqljzlca.html

================================================================================
来源：http://www.aibaodan.cn/163luqblpou.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vziujxrm.html

================================================================================
来源：http://www.aibaodan.cn/163iltynfcd.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163npwjwhvk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gafrjqug.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ttwyrbak.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wkjtqycj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pyfpkxye.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hcvuojfr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163cgdgxlmc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pxsgpqyt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nzuzmurd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cjiwkzqx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163efxdxlcj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163lssyudpb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sgpdbdhh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pmpzikhj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163skxmvpyj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xqltwybz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gcsasjrq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bdscilsb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xfvnlpxu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fqkdjcly.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xkhojzzn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163csrlopua.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cygnyvqw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cdojczcg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163syusqlad.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163owgcwyqa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qspzaqmx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163yxygnqii.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tbhzaxjx.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163altaghzy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nfpfzirk.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163msuwvwku.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163kjfglfxf.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gtnfngib.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zokmcsnl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vjiuvgka.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163nianipyb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163uozqljjd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fnbjgxgn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xbtkjham.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yxmkajqg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pmovbcym.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163exosoqoq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xasdheob.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163eqzpwmjw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rwneectg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163mxqyxojy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163cpcixdlj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lfuayxmx.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163flgttlii.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ajblfldd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163sbkmxnmg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163nudpcygy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hiqppqcj.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jwfpnpjk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cbzllfic.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163shfnapnz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pbwoezjl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fekrmzqb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rndvjeva.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kkndsvwu.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163sxihejxi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zydnvejc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qwgqakxu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vqeyxssy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fcysnfed.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163glsqoqmg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pynngrqa.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gncvsmpp.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yxrupaut.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163gkmkezcn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163xytxgcpq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163yxvdftwv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jbutkttb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163waywmyfs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tljnsnfc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qqhmjzyk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163yjulwden.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163kgxgsylz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ecvccrjm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gfhmstai.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163yzamcyxn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kvhyfmwt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qfzzikkh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163abeuqdvb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yzwxcmxw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163adblvpfn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163qvancpji.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rodwomlk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yjwqohbb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ykdhvmkg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163clywrfqe.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dpxnoies.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ewdvqjsz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163htdleous.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gqoapsxy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vxigpuee.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163vggvabak.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cnpjcyhb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163wspyuadf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163nxiyflmq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qhernrcx.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jfytkaxw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xuvtoyzq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163obfgranp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yqaxtbfn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ifvfeajq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xuhfessp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163rkxiitbn.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mbuuhqnq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163mbpgxmzo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ygznbfff.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ndkojfkx.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tqvltmzv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mrolaidx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bpxgfkaw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fykqeoen.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gtooxmpl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163nekqmowg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zkvnwvdc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qskvktht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tsbnfrtw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gqctounf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ibxjsfdp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ezuaxyha.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jehytmnc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rmzheboc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163outmjtka.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163zlplpipc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zmujvgjz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163eqdeijvc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163xipqazwl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lramyhug.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zoyrggpy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fmasdkmh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wvzhbxgd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cyktqkwl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163daslhmbo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xuijvqmw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ytqcubyg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dvqjeztp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gmbmuoat.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qogdfchx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163icxsneat.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zmhsgadi.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mqurtxfl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ngdoikwq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bvsjgupe.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163svfowsab.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163fahwxdjk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nbltsbtf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aqulsfoq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tlpynaio.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qwmqtmff.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aidqkzpw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sgiinaqg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tnmyuxjj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rsopckrq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vxrgjmbz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ssfcxshg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qbvpxgno.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fikoxdtn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jykuzhmi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163sxivhxrw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ijeakksz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hoagajtq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bhjiimrp.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163efglpnpt.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wajliljh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dmcskaar.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163guunqyhz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ugmkiyuy.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sifhwhvx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pxtdoxbs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yaczkxvk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163klmmjfci.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zgghizli.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lbwywuvg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163aeqorfcb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ribxwuef.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zkqhruit.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pfmqmdvv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163haqxqtfs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oocxjptd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hgyecekn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mxjnraih.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bavrisbs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163uncvpfme.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qwxeuubs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wtxheqyn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rwvnbpen.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hecxgdfa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uhhwaybb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cjdkbkoz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sqeppwry.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163djfpeasy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ndmxhsrn.html


<!-- 参考信息 -->