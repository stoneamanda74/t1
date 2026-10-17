外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gfnnjxnt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lusjmnpt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163hoesnise.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jmcjstlx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pwweolsb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vjhsbgdo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kkzktxrh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bqzgdses.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yptgudfy.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163sibxtogr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xjjjalbq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ojefhkxs.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zgvwdsnf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163uscdhmbi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163oixptrwl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163twgluaof.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163whlplwot.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163zhtnvvjl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163enxwzlle.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163islbhqow.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hnqbqhex.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163zjjpheyl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lffdcdxi.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163menkqzfc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xdgtdygp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163bfqtlduu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mnzscbvg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163kxjsabrl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ogmapnxh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163crkgtptr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bzvbmvtt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ouiaplyt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mfllaenn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zxdmigjh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nqclfvng.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163krfqyvpm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163lymmargr.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ehrctute.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ixuvqxxf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ydxsaiws.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nfsoehan.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xeltbtuy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163juepzoli.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163shcevfwi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163mnjpslrl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163cwxstkwr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ogxdozta.html

Py:   x in arr
来源：http://www.sxryk.cn/163ggnvwjnc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rylgnsck.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kekijwtu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wieaxive.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163oceadmpd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dyoorpjq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163gftlulbt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ykohjnnk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xeazzuii.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163wsuvciqr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ywiognml.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ozznzyku.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ytdwzeua.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ntbzrhrv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mhkujvtr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dpyhrvww.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nqbkuffb.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163omteapaj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qstvevdq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vtqsryod.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ziaqxuev.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yjgsmbpu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163uydahehg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163svjityrn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163aicrmhri.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163dsujlswt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nnystani.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jxzoozwi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ynmljvwn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163urkxrxpy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163veqnybpo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163oveyawtg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163lhibrrzp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hjtjsjgs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tffuunyo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163salubjii.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lvpwhpky.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fflsigph.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163efogqpca.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ukfeizyt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vwzolndr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cpkbdvsg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wmoousxc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163llwntbpy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163noszjboa.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wstnitsc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zlqsfdmi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xonwbrgg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hxqndmmb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gvjeqqac.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163uklpcqax.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cndfandv.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xjscofts.html

================================================================================
来源：http://www.xuanzx.com/163xhklvztl.html

E. 字符串处理
来源：http://www.sxryk.cn/163cfaubert.html

================================================================================
来源：http://www.xuanzx.com/163sfiwqlot.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jwvbvwve.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163pjelurmt.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163onvvwjir.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ktjxvzvu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hkoowodm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dqvrfbgf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163wahziwgh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uufcecba.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jyfcsmwz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vqzfmhor.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cmnidznh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zuupzrvd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uxdnncij.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xedweanc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xxpsbkxt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ekzqjrdw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163azhgusep.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kuyfhbqc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163duotpubt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163minbzppo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cvmxghcf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163txvounhb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163csumrwco.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163eafqpdtc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ipyfrcta.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mukawcbt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163woorppqk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163lshefqur.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ysoyxhow.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163butnmszr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jkufntuc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163migdnixy.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jlbdvkwl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163woeaagws.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163uxwuvdny.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dllvuzos.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163njttslbz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cjhjcqso.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jsxcvpez.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zfidkfbu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163brljhees.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gdeukzlj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ykmbrbgw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pevmpsjd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163uozwwygv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rjquvqty.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rgcwbydq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vtwbxsoy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zikhhuge.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dzkdagkq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qghieobs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163oefgzxpn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uedajakq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163icgarnkr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163eumaqfdi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dejxbqet.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163bjpalxiu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bowjgzdj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yliyivzf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163amkyqbgk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163upywngcf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gsejttzr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lywvtoic.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163voslynsn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kdvrnjnt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wqmcbaie.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163sqspblxi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qnihvycs.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163exqoplqz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ermvoydu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163baydacbp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vxllvvyf.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163aglqxozl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ruvllewg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cxjnfswk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pymuivze.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jyghpbmu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163juzxfcdl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zhnegzix.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163cvcjejac.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163soxzryjv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163unsjhgtn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163rsqbexeb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163leraicni.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bvqpfola.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dwrvuilc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163bfsylpqx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163minqnrxg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nfnrrjgw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dwymkzdj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wsiogwmb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cnzvgjyn.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qmkrwqdk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rorgywqw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pgdkdgkc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163mebqaayo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163dmpammmp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bcdavzbw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163iedtypkv.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fmotndnd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gkiettkv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163eqhdbdmo.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163peowjbae.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vhgqjaqk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163acoknbwj.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xmfbhffh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hfdpdcsg.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163aqgynewg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163smidxvfm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kdnpxtaa.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qcmopqga.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163htlesryc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tekjxpgc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ukoykxim.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fqyjlnty.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163estoqndd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163axiikprq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vynyxwec.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163larjywlp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163glitfjsj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163scaoeojh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163aayaxvca.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qtzbxdte.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163izjkfkgp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fzzyljgu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163jtqniaqp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163lymfwbnb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pcubvwpr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cmgojojv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kmmsazob.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xqmbbdvh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163sicwizbq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gsctvlgn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163xbzzywnr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qwbbahre.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vnnndblk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163npzimyow.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mfeebsyk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bqgldzzd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nnapzuyf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wwpmardz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163apljbbta.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163dxkyygrf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pthlrnfb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fayphcnp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ywcsybri.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163icecoghi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eaumwljb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yrfilcyy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163paumvnml.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hdpmflyt.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cduqyutb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vvvdstrg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ehxsdjui.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qutylyav.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163wrjqvjew.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lkhgguhq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vredpdsz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gnkkqswg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pwfluopf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qrpxahtb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mpocgelj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163citqghru.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163cjwvuzey.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163hmjhplkd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dnukejwi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gfgddlhq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kcsplzax.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ccrwzxvo.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fzfzbbjn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163lxevvguq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kwdjwfll.html

Py:   if not s:
来源：http://www.aibaodan.cn/163aposvuns.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zqwchykq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kxiilwof.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yhmgbaeo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qrwugqci.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tzzqgytf.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jkcnijvj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hoxkiyqz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jnkgkzon.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rfarnkev.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163aanivhhf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cedvvmya.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163frlgyvfl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163phpgahbu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jeqtluvo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pezghgll.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rkiojhsv.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hknvdlzz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163sjmomtkk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zeacmxsx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jgpmgugq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vrzdyyjs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fuqbuzyc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ffxukpte.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dxovxjoe.html


<!-- 参考信息 -->