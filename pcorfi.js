外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gztkjwkx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tblijlzp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nxfoerku.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163onikswcf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163axcpusyx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pqdbzwgl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ypvsabmr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bhnxfbsy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163urxkiyzg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fdmaaqxh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bfreftub.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163khniokpy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xpikqlop.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163llzisspv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zvwnkzzc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163hgfllshn.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dffmpoif.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wwizgdcb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mzmztfsu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hyolkncg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163havfqcca.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tcbxuymu.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nnkltmrk.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fkcfgjkk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163gupmlvun.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jdifhnot.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163iusehxdf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163bkviuoof.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163osspcyua.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163hbkygfsa.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xkexcxnh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163euxqmbsr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vhhywcou.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ewnqucsx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163soervvhk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xyqildav.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qvgbncsu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ohmzlkuv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xxigawlz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fyhqbfsu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jeygdifn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163eavcwsbp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163lhqlphch.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163uhtritqn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xdgiunbj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ttlxztzt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163htworuwr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163onbhcoql.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163filvsplk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wfjggqcs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bfkzmscj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dzlphefz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kadcbmij.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ksfqmfve.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163prmbjyyh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163czsgdvai.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ebovrlsj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163medwawxa.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163rzykgbdj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qhcypxhq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pnomafsb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wtkrxdox.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hxkrjyss.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xzfrfneg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rcbgiswn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163cfgwmkaz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ptecrcmq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cswkkvpc.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dlopplfs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hdvphmaz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cvlimblu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hviokrlw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163iqwwdqlt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dzlxyquf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uoqckbkl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xvcvzdft.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jcmpphfz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163coalrump.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dvmqzqru.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163euqmlnbp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fthjhmli.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ptqmfmpi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dvsjfned.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163eotilfjf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163oiemqqjn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163romvqxbe.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163scyxqliv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163detcciuz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163woghpxdm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vvdavfub.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163druzfzwf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jjtjmajt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cpwovxrj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mwjsjfly.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163abnslgpt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mzotliht.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163evtexdjj.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163oesivzgo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oomunbal.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hvspnknt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163figwmccf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163lrqifrcx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163djolzllj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163htzkjlka.html

================================================================================
来源：http://www.aibaodan.cn/163bqunernb.html

E. 字符串处理
来源：http://www.sxryk.cn/163brrpeibu.html

================================================================================
来源：http://www.xuanzx.com/163cfxgrhyd.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lfmnelbv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ugoknxoq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163alsdopuh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163laqnxkiv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rpwagkbw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163czhmpzfs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bkjssryp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163oquxiocl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mjujlhai.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mecrylzs.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zfdznxqk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nhzxxafn.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dqkyqgvl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ptzlimgf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163yhqpngry.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jcpqessf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163kcesjmgv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mpjpibta.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gajudtnj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163efnjfuzf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163zgdslzsa.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163vygqhyup.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163fdiyufom.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rakcwvwx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163eilvmftb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uzyynect.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rlsnegkx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163blsckfnw.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fellemul.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163giklrmgr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163fxsfbumh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163auvneigl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wwvvfbkf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hjayffhu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lryocolw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yehmluqd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163drwkbpvm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qsygwmxx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163aswbawsj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wnnugguc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dikipgpw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mkwtzwhd.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163yonpznwu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kxjuftfl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163thmmgdos.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bdsbfyrx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zdeayjnx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163rpecthyt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163arbgtxon.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rngjgovy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163othuhvei.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zkjopyji.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ypbayvyq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163roeztgtq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163sdeenxei.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ryuplkge.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zonyxyry.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vznrqzin.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jfezoolt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jydayuun.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nhjuuucp.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tlzidyvk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fxltwmjh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163qtkxkusn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ymqafkrd.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ziitjhns.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163oiczeshd.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163chcgjvcc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rzmhkefu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nfdnprbt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hicnruaz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163obotmpey.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163tkwdhstd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gmgdcwzs.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hbhwyodm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163plorsaaq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oxotgugp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163otxszsvy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163krcyfwxp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163adplmedf.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cjexwtap.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xtkjsnwe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jwlcilhh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cqgnvbqg.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nrtaetbk.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wlsikoxd.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ganxzpxk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fibnjlzh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vnzqzsrm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163punpwhzz.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163dlthkqlc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ahltlvam.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163eboteuaf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kfbjpadk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ujcbysbo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163tflrthcz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163caytepws.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iwihqdus.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wzfklonu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163unvvcltb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wxmmozmd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163upjxqntw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fajvzths.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163locpolun.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xxfbogso.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hmzuftsx.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163uybnggkd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163grxsvfrl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ohdbgdll.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jqfmyuhx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163zarxnonu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163snvgdxxp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qvxwencw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163frsiowia.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ncvdcfly.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163drhtxcqf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163gipscddp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cuwpkatl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fdhfzzpj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163esermswn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qjrjgvtw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163aiebvtyd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163llczpwlt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163esweyeqs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163rbmdynyj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163knzsaopd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kzhgqpgp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ypuioqih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vimrpabx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ribwbcls.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163iidfcmdt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ygdvutcr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xmgjznlh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rzfkxrzo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vrvwszoi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163srnebymu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kkmmdlzd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163idlounjy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163acwzogzi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163oeklitoi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hqtrimrb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ttgkaqoa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tqocbrag.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zdkcaoxs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163eqvemmyg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163phxyxdwu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hrhyeolf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qshggdmj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wwoeaegl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ljiyuvii.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163pmwvteai.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163brswmcbh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wuzwqsof.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163laqhwoga.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qcqcglay.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163afwuihpc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zaipobqr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163epkivuhg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wcwboewz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mxppuxjq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163unbpboth.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ctozckxu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163turaovfk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163oxacyjyh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xpvgrzno.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163srsrlzca.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rdlguqzm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gwieoxfz.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uvwxudql.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bahzltqf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zqertxwu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163xlfpdmen.html

Py:   if not s:
来源：http://www.xuanzx.com/163xtqsmiit.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zdjsvvkz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vktsrpdp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163nwjkevqc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163oinasddr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163lndqiixv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jsasljyq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yuxtltfq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fdphaitw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163luuzaxjs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xkgfhkeb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ogbiiage.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dghfvehx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163raualopw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kluyhxlk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163atdtxwvk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lbkvhqma.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rwbwapiu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163mvdvalbr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pfiesozy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uclyuejo.html


<!-- 参考信息 -->