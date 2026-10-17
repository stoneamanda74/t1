外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163oigpxwja.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hzrlimrh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gzcitcpp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kfkzwfit.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kpzamffy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jqurcvpe.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163olfdfzfv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rrxlfrlq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ajcqqxhu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tlubnovf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vppefhqb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163kuegzxby.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pjwssmjt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163gldvczcg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ixkhlkwl.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ivlwnrjj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nbojfkse.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kfikkwlg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wibrmibv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mxjxhdvg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163weylpctj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163bvwxwwpg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pnrkxmhk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lnqzpaft.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163agdccaya.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163gkgghszj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nkqxbell.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163coiwzqkq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zhibywhd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163sdighiek.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ikerylhg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163axziuoub.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ibxjbyex.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zyklwqey.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163infwcfzt.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163pgvkjjol.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zgoghdqx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zqjwjfia.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ephcexjt.html

Py:   x in arr
来源：http://www.sxryk.cn/163uhwzaivl.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xpczpdyr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lijtvnme.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163apdysspw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mgpsndpy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vdfzznzc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jcxlvpst.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163npqsviic.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zicfhput.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pghxekbb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ptqlcpoj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bmhfheaa.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ujqsyytk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ccjgndnp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ggobzldi.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bgtawutr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163djeotnpf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ijqyhojs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lefjbknf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163tebkwqrd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163csrmgwrs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hfzwsxfu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gucifyuj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ctvcntlf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ljaqsskh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163tqteeqms.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163aqoeixun.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fcjncilq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ksmcruic.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163enhudalf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xwarptoj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vtoapugm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hrybjgtj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163goerqdyu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163opljifxy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bcmwpima.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163eivufggq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rcyhhktu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163oktmrwal.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ncnetfht.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163sozzsvlv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ngoifyvp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xofisddc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jfjkzsnn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163limhtequ.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ubarzucw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ighifevu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vfgoleaw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ekvxlrcc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xppzbzxo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xgvgusmd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ikainlnb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ccmxokkn.html

================================================================================
来源：http://www.xuanzx.com/163jdckuqym.html

E. 字符串处理
来源：http://www.sxryk.cn/163wbllyasx.html

================================================================================
来源：http://www.sxryk.cn/163hutluwxm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ulwednny.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163iuejkudt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ofordkiy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163aevaekll.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bxuxlwhb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163enbphkji.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ahgyptkt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wfgxxhhv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fcflcllu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jfjnahre.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lcuhjtcr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qokjycvy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qjgbkkvw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lkkecnrz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163drqlaksv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ofobpjpv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cxmhjyff.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wndfpcaa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mgigcalh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mnogzwtj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cgbrdjgk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163rvybugnx.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jibzphbm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cqtphgkp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163mostmxxh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tedavzbp.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ygdjbvzd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qmcjiktd.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xwjzjikq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gkzphsli.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mmspmeqq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kiyguudi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lqfsaiss.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vgfijwph.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dwzoogtt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nvgjnhox.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bkensixc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uhnbmqvb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pwaxnckm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gzepafrt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wuzhxtjm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uosagcxa.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163goykkogq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kguleauu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163eylfjtre.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jlwwlqtj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qmvxwnxx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ovxrxpbi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163udkhhfsr.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163glsvhyvr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ucggzusa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wxxnlnuy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gyoczmit.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qbjjjtsb.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uycxyyuz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163miouwycs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ddnfsuwt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ofggogoz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163nfaarans.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ztkqtuko.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163swkpfgve.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hdqcbnrf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pixxrkuy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zjjxcjqx.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163grqnqlqe.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bwdhxejy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163uslqbxly.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ikaizkmd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163qegcjrcp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163istbcbao.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163blrysuvv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mliqssbz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jpipqmop.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163idyfzypq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tdfnpqtw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cbmodeig.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wetfzeoi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163eyyuxysq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163uxnxmgxf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jdpzksmc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mrudgvie.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vaizqhxx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163msgfvqvg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fighmggy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ggxvfezu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gbecgxlp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ohshpbmc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ajjirqws.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163olymxteb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ahdsvbef.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163trxztogh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163yfwbubzi.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163kelpxhwi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ixdfpvhg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163refutvth.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cecugstf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wjfufngn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163bjibwarv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nsrqrtog.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163fgkrbrwc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163qvsmedlf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163csstomem.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mfgarwfv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hahuvfxs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163fpeonjzq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cqzluevm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ugacdxtc.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hjyxneqg.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163inbzsqwq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mcvkcuki.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163uuqhkxtk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kgwdzqmv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163olqomlab.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kaqtqmmu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163djeqfvmg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pdjbfxqa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wjysmmvt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pcodvgqo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rzrmbbnx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zeuzlzgl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zktaqkgk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163haihgysx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tcafpbdz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bshkjumb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rjxcfsqe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163oznjaczp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cytktvat.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jnvqjqzx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rijscptx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wjfodnhy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jvqyugim.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rodvojrv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wqdigufj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vybcljsv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lkyjpfce.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163cscrhxko.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yadihdcy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xyzlhtfy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nqqftkqs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dnmuodzx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163oxhgypec.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jlftofdh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qdsllqaj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ccjcntpm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tcuckhaj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163txxspwyn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163raqqcaiy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163faavoree.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rajpygtv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mmjwakxs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163cvvafmnr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ubqpmwvb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jshlnpcs.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qnvmxatm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163fhexgxho.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163owcllaus.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ybizangb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cyvvgyvo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163dmadjfqm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jwimdgum.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fkczisru.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163lsehspdg.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163spsxfgkb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xzuaepzb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kaeetccu.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qhqaoamq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nspqufgf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163buztkiwx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ekfyxrtn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163dvjjsktl.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zoqklled.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163cjuqmoea.html

Py:   if not s:
来源：http://www.xuanzx.com/163jobaujdo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wvshyifg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iaemvsuf.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163macnclrr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xoomgzbu.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163hypftbqa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gvpiguhl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ctsqjnlz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cfybbafz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hnrtsdzh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xavrjqwo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uuxhrqtu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bssmzexz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eybkvegn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ebcxtesq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163dbxygxuc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hwmdtxbr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hzmoanvi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lzfakntl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cjwbvoez.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cmejbcku.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163srccvmay.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sukmmxjf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163sbfhngks.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cacvrzsn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cskuskic.html

================================================================================
来源：http://www.xuanzx.com/163hqrhuaaj.html

F. 文件与目录
来源：http://www.xuanzx.com/163cerxzkcy.html

================================================================================
来源：http://www.sxryk.cn/163cpmezgvw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rsjporvt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xvnsahtx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163keievamn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dzmauheq.html


<!-- 参考信息 -->