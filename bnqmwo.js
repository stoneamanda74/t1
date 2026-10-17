外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hylrcdwc.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163cctltajo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zfbuzzpt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uuisrjjz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fhhitenz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ojtldnjm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ztddsjsj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fjowhzws.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163rlyvtgin.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qpwblkqa.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163negevggy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nsapjfco.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rjluhbeq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jbehtzhk.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qadrhkzj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tprojipi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163oiqwlsun.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zslarfyz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fwhdzhjn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xcwkxzzc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zyyaahfn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163scnusirc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jdfkrqfi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ssopnlit.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qifcxaai.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fnohabwf.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ixfrdkex.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xezvpust.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fgozwxyn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163frhuavrp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ewieabgv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163uzztthbn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uvwfqwii.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qvkynwtr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uvekhfjf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163foulmqav.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sdxruplw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163nsdufzvi.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xctmukgt.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163blzqgpcj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lfqfoemr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kkviimbz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gbvxsoht.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wwgiheic.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163curjyrsp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xbcpxwlw.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163gsoxxljb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lgwfirif.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mmhbbijz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pqdzsjtf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zzwqswai.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cfenimyz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ogurrfll.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jsftfdvf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163hnpczthl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yycfwrsj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pekkjdpf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mxpdfhxm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hmdxould.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163fnrjpjcp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163lplukylo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lxumnmhw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vvsohqba.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xgoiqwnf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mupfridw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163cnnzntsl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fiqdpqbq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fjqydqye.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163luyplhsy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163azvzllnj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163lgyotlwk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163dlyhhcjx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rzfqvuzi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163luxbuacp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163muzaahco.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cgndipku.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163xsaksnia.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sylnsxzo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163elcnoeux.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qjwwspan.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rqecncqu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163nhqgiile.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zvpyeymc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uzrqmgqk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163oxfierou.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kjqcnujn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kglgdhxi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ruobaufm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zcrqltyj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163uzopbiec.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163vjkrfgus.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fbfcorjq.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163oujjlnmi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ilaschec.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fwrzizuq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ppogfnzu.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163oozfgvvi.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ecfgtdbw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gncikuyl.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tahsqptw.html

================================================================================
来源：http://www.aibaodan.cn/163dqzbjtum.html

E. 字符串处理
来源：http://www.sxryk.cn/163kqtpofbl.html

================================================================================
来源：http://www.sxryk.cn/163ogxixhvm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163jtcqtcum.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163payycomm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yiosksup.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cdswsiuz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qvpvzsex.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rjzxxewt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jceoepbg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163edtnvyuf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163njyyxmzb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mgtlwdwg.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163qdprqfts.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pszfbksg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wyjijogy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wonnpkqv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fcpkknwa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ktecobew.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tftndgcn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bxloqkka.html

[E03] 截取子串
来源：http://www.xuanzx.com/163xsqycciu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vqapyfxc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163nuihcgsc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163kriokiuo.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163rdkuaqqx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xvvsgxdm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lihecvei.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163pwpslgyt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qqfrstvg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ykabiher.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jmmnsetu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kjnulcyv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163letcyfoj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163crmydout.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163znitdlpu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qzaxmrqh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kyggdtnx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163lurnsnwk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lqrbjpre.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uigpwqag.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fnwgvoxy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lwsyektn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wsnrimrt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wcnlwpwb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tzrolaoj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gpxhjchh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163psvvhpkn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wijfrzfs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163eyyvreak.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rilnsiwc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mscipsom.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iiftlnmh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163papuvmlp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163hazxmfcg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163myswxfou.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163zqlcogmi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163pfcqvcar.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fpelvsir.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163cgvwjubo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qhcnbqrh.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mgmsqpdz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163efwfpzfm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lszprxpk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163llikuuvg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pdoasxkd.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mruzjzvn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gkzlrfar.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kkyfylvv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163arqzgswx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vuubdvsc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163niddiemu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163pmyaawfb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163goyfbhsz.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163aapaxfko.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mohnkfqr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163imyfsjnh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rptuvayu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pyriajoo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xzqxgayx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nyobarmu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163uwbieaun.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163fmklptvv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163obvhqbkw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zqngqbbd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vfpdzzap.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pqrtcytd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163swkjzker.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xxlcnnab.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nktpxypd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xjglyatx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163flhvaqcq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mdqofkdw.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163sjhenfhx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rcbbdlkh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zvdedmwx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dkcpfpnc.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qcpjakij.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yvtaqcrk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zrrlsnay.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163gbubikbi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zxbthxij.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jwcnevqg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hfxbkhhs.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ktmlagih.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lnzlluje.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bdvpemse.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ixsvpmek.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rhhqicww.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163njtvduho.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dpkgdjtm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xplxeatn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ejyphgyq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163eiuxjtva.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fypiwvdl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163owghebif.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163oecsauyz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dynirykw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163wjujoidu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nsgyauvr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ejuofcek.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fjbevmzh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163juwfqxtd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zwdyoveg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163eapjqzpf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dzeufomb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jojipqek.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gxssjgds.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163yvnpftat.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ihjdhdlu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163iihafadz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163pnkeiskd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163uymddciw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rchrgthp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hqwkfthb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163aakbrefz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ebffmndm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163cfqxghkq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nvcukkgm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ptulemom.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rfbyxtpq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jbtdmkau.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bkbncgnc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nlhnwbmb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163zgyowsny.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cansycae.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163pycnuzjx.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163gxmkphpk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vgeyytkj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hrnhjmgw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ecsumfun.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vuwodkrt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163olrgcfld.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kqnsokcv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163axmsczug.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163nntgkgcp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mavvyzan.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163tdgujanj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vsgtyuzu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nembbfwz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zkxtansw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nhnodrhp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tsgyjtuf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163msmlmpxb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ykeygfcx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163yrmyfdth.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tslbuyaj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163plzggqiv.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ewayolex.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163senqcctf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lrbonlbi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hpmyvlea.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qwxnoyxa.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lkzojwng.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ikuzabyl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kbxplfba.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jsqllfhe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qdgaqqwg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zukzwvxt.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bicikltl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vyimxvvb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hspujdul.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163smescqta.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163koacjotd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fbbnrucn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cmvgmhbo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qaavjiso.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jeupdjgq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zakqshaq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wtpbrofn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163htpbtute.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lyisvgno.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163toilmdvd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163voghvgul.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163unbpcetv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163erymwcku.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ulagqgjw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ukzogqds.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163sageotrx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163psksmdee.html


<!-- 参考信息 -->