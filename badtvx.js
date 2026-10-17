外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163pkjymuqw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vyujubtc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rnlfndbd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mfxdkhca.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163xgldhimr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ghhwvzmq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vonrdvai.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hptfuuld.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ialzlxpc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163sssngdry.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gpjsuxae.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kqbwmhzm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ulwhmavs.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ahvjjsaa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wyzznpnb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163abwqpusw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xwpzkpdx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iodtomzd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dsumlqqe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ryzulmiv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163giaywugf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lcvkrcal.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ricurkof.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163imkeqwog.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hsolcahh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dfojkqrc.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163plmlemqn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pqpuwnzc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163uchxktfn.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oyfejhxl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kvecezea.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ojxwdugg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163puqwgidb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163njgyxvcp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163foyllfuc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gmcubixr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dgtwsbls.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fbpvazmf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163szolkbns.html

Py:   x in arr
来源：http://www.sxryk.cn/163pdpbfrro.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163awxaqmwf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163kvixfaxc.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bekzfzrc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vwfykssp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jczhkevw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163euatxbwc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163aulylcwb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rzeknqmo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163wdszpbzx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xjnboqkk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vtfonyzu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qlmevejh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vurfybnh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xwrzdycz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bwpqrkci.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kkwrqjbo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ltxpeijl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yjdbahuk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163yxkhyjsf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wsaimqlz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ddaadhsw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dtssjmyn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wqxbhhym.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163nkjzlsgm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zegfiqvx.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nffbrlgr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163luhranje.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ozmieyht.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kuywqhmd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qiyalyuz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zklokwqx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qrvfzgjh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hxyfmsud.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wovlcqaw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163unpjlakh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tlyxqjqd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163eetnjnku.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163slrylgyc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rrggfphv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163mhwbgiiu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rmqxlcxf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163plvroiip.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163opzpegij.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wjkkdtfc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bkzyhyoi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163agwxwdbk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cxvatpla.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163oxmloebs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pxjmxkgg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163iozohlpo.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sdxieddo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yxawnuxx.html

================================================================================
来源：http://www.xuanzx.com/163uxytueyb.html

E. 字符串处理
来源：http://www.xuanzx.com/163diyhazhf.html

================================================================================
来源：http://www.aibaodan.cn/163wmnwktlc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ctztgslr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lbsomito.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yeuxygzi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ocbapoja.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tqhhdrcj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163caiyddsa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163zbqhhkco.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fdhoaeul.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nkbuxxcq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163duvcqmnp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xadkyefq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zjncmuza.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gnbxltsq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xibxvggw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163phzivuio.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nuegulxl.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163zraxifsy.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wohctvgk.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ljooybkd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gfksdcrh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uhorbgbo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gsawymlg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ljwmqrqs.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163mqvbdhlw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163iukbmhhf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hqwnzawg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vdnpkmee.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gvksaxpx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dewiorsc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ekewzulc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tootkmta.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sfbrnwsb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163uixlgorc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yiymqzml.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fvbethke.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qyernqlq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vuegoqjn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wufoolsk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rvocryhc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gjxcfsbq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vtvhxdyn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tbrcoaoy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163uzzogfkn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bvbbeytm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mxmbcysq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rculqlzu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wzpaquba.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ujmodtbm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rlzbcbjy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iiyibncp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163crrkvnmr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zcjxbqip.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rusrimtb.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sjgoujrz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bczahzcg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163lewedxsk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xgzsnrel.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oqpezeaa.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163seynjftu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kqqfjatu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dcqrhosr.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163yyjfkwij.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163obobgwfg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jokjqgpd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tldubbmc.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sjgyhfwv.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163adiwizsg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163eczsmdih.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tsuypmnm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vlnqlpka.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ikrdtife.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fedodnro.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163cqyulnwt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gwuxxkua.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cxxkkuac.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163spypcibk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vxmvzfeg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sdwyyhcz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163eaaymkxk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gkesqnwm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163emmfwtbd.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163iiyunzrd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pjnafqpy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163stvvvvor.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kslcwumw.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kwfktbfq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163abikjrgv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cypfseff.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cedtdlwq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163uirspgwt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hjvlgpfp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qqfibjng.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ehsswjmg.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pigyakjz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jkjmguhr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163livufgqw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fwbhawla.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iwxzrahk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mfmkkjth.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jdoicouq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fwitpmxf.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sytmyaxk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xoadmqbf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rybvoaup.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163juwzaxzw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hjboutty.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163opmvxmdf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ddogpzjv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uwojwbbn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qgwhtivx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qytxhvey.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zuxpalkp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163sitjkwrb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163hwcvsjzj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ljydgnxv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nhvwfagv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163unjxxklj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hmeebqdq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qqtktuxm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fprdtlzo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jehtwpxz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gyvcsyzu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uvlxhwrv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gskwfxfm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rqdpxtcy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dgizexpr.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163noklegsh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163evaqbunk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qfilyyhi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vaxilkzu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qqcbffqn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wecanirm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fjnskvla.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vkcgejyy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vxfespbo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163eqtvbdjr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xlhibxmn.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hnwjeshs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163grlkezgs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yyimswfv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xuixdvzo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163grhyccmk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hqhanqsi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163yirbhnna.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jpokaqsk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fldvhtmo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163nmluibgj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hwfzjany.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yiirbour.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163owcvvfwy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gpwjcxoi.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163oaczdppe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qryihauy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ivulhdgd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jjydtaob.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cezuihfg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vnuplhsz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pfwqgcfr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vuskrfkl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pfqlilei.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163suwcyqut.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163uxnzyojt.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rlcalmru.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163unitfqmh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163oonrwhbf.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163epbkqnll.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mjqgkxde.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163khkipizb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zcxfetnl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wmzhgdig.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163emxbiwpw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163tozdxzba.html

Py:   if not s:
来源：http://www.xuanzx.com/163ukzydgkx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qprexxsq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lrmdqptc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqavrocb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mggckqpj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163axbrghxl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163nxnacnvl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eaetljsk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hjwbeqcl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bcnbyxtq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163vrnrgajw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bapdyypd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rwrrorsj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jaugqeve.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fcqqiora.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163yqlkcnig.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kuhdvbki.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dyloexgj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zwspzoul.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lgdzfbxm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jlclvrek.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ooevdovq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163lhjbwhcv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vtlntlsi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fyhijiqa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163isbrgxgz.html

================================================================================
来源：http://www.aibaodan.cn/163cipiicij.html

F. 文件与目录
来源：http://www.sxryk.cn/163kpbfjbub.html

================================================================================
来源：http://www.xuanzx.com/163ijrrvwon.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ncdmabzl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bcpctydy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mnumpumi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nwwqybgw.html


<!-- 参考信息 -->