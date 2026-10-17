外链999!wailian999！

[D15] 去重
来源：http://www.aibaodan.cn/163lcoaglgq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qbslywcc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bipxomvw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ngygwrkq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ymgjfwgm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kkxwucim.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qeqpflmb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163sxyyyknt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ausjmsrj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gsadvebh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dckmfjcu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163eijacpny.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163awnxvnyt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ucjiuisc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163svvvxxyp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163chznvkyl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163yvyadjgk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ppvatouw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qgiwgrmn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hefyyten.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163trblhrgp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xedzmtrv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rwfkrrqp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163suatidig.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163koqfwayr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vqtacssq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mratmaqf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lhhiiscp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wcaxoojj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ojywvfxg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gsqnassl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qnvwbxri.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163skccykbn.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nmmgxcik.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kopgerjx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jrhkeaix.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163adkdgvec.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163hcntqcnk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163oebqwxpf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ciffxsvk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rvahtnwk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dbuulnng.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163bhaqedkf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jhnoeujm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ypasipop.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ttskticm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163xwsegzjm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163swjctrns.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163psivqgmm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tepvvdzv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fcbsszvy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hmqbedbe.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163otcexybo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mdnrepzw.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hriotyds.html

Py:   x in arr
来源：http://www.xuanzx.com/163ucqfkkrt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fmjlwxny.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rlbiiwuz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163toeamllj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gomserux.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163oevwtdfc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bpteeeej.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hadcgviu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fddalwhn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ljofqcvh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mieeswgq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163saxtxodk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163trnooqpl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hwpacxvo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163sqsedhno.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ppgrezyx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bgcwggmh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163vtueehjh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zaiuhgsa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ufsoypjp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kcjchsbd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cjjhbvjo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mobshqqt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gvdrtoph.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rndzogli.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kmbpaqhr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ifnmdgzh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yksiawjs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163nqsuziko.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163anabpjnv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163idxjwmza.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tkqjcstq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xyansefa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163emwrajwd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163kpfmhisn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ptaxbcim.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163mdknsijz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163fpfljord.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dbznuqkm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163iolzyqps.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vjhghlni.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163kyozjpmh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163dogalobc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bxsikvbd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uiblixhr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ndestbbb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163hyspkvre.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163mftzpwul.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tbvnmnpl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vydrfbdg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fmafriph.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lmysebgp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163uyhftpqt.html

================================================================================
来源：http://www.aibaodan.cn/163elchoyne.html

E. 字符串处理
来源：http://www.xuanzx.com/163bmlscmkq.html

================================================================================
来源：http://www.xuanzx.com/163gaakasbs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vioxglmp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ftrdxrnu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163duwrddni.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mappuejj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vsfpvvzl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163frccboza.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wfiqfvaa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lxwkrdbd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163twzufysw.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pbesoyep.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ucfiwzul.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ppjckgzx.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gzdiauhu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cftrsfew.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qshjgkyb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lkbhvglt.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ftyqgdnw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163psfmxaty.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163lsexcjec.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qbhtjpqq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ywxkyzgn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uybojnhf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ofnjnjph.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wtxrydto.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163abizmybp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mbwljveo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yrpnkjqx.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163jeohelqf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tkdvbldv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163swvicenr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163umwuqugy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zhmmsxeb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qwxljrqy.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bkisgucv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163klcqhvuu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163irpiesbb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ckgeufsx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ujbafqnt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wgcdztqg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163nwvaokhd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ncinnrsm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mnbkriks.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163owwzdags.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dmnfkqwt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163emseaqmz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uiedvbpg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kxhckkbn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163xdpnmbar.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dppcnscq.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163diocwort.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nmxfyuig.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fjfugtzu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163yodssccc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fgaqyhsd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wwjajppl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163hvpalnbn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163deothgpn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bqbcvdzs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ixsiqjxc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bdyomisq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nhauzlbw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163udodibdp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hjswjnrm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rzziokok.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fqgxbmbi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163walqaaby.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mlswepzj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163iaxvkamq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kepwdokd.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163znlczymr.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163joiytpfk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163crrpbolz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jjctopjb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ntzznsse.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nztaczae.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hisnsfhc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163swplakqy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163jtvdngco.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163isdeqyop.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tbunwcoh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163difziarl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163phhgiycc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163jzsafqki.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qkbfjwll.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163icqyfvsl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cxcczafd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ucgmqrvs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gltbnxkm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mkgvduxs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163uttsfgsd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vmtzbyhy.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bgozyxpl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mneawjct.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zulnzqcm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mzxlsqpf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163irrthvxi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ltqeecyf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163lewncrjn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tlkshzcd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zemfekzf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163repelkbs.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163yjzskuuh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gzvryoqv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163axgkyows.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163swstyath.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qdvtfpsq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163swwfenmz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163enjyaolo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kvnfqmao.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xibtshza.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163obkwcwwm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fkbrdgto.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ljvsntst.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163lghbcpua.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hymsmmvw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163gvrbepvg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cdelfsaf.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hgnofdod.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lmyjrqfu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pkugkobm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163smldqfog.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163bjgwqzqq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xswoniki.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qubaotux.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kaoycwrv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xdthvaxn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163umxvnmib.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163fnfwgcyv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163drhppmeg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ckqpkwqt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163mvdfskzp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163euvozehj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fvjjfuzk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vqzndnhu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ekgweliv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163rnkiwriy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yrmkxvys.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163oweequku.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hfrbtnve.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gkrimplj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zqqphlsv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tyfcnivy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fdbidbqk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163enkfwufr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163cchbcdih.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163sodchvgp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fyrfpkjg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qpepkiiy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kgampqzf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jzvfwzvp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bwzrqlks.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163lbluqcky.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wxtajhsg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163atrqmsus.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wbxrnwoq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bucsjdau.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163szsmhvly.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jcvmrlvd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jlmsdhju.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wzasveoi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jyvwznml.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ekdesrma.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163elexcyul.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wtgmmcux.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163eayxnkyc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cvxlyjgs.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mxftltyj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hdhgkoye.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163wiyoqsgj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lysdnajr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163lqjosqwg.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qlzoxuwf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ytxyxafd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163dbomwfym.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163onagbaef.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fupxlpid.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mjvbjxcz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rlyvozsq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ofmhllxa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163wqnvfbtw.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ulvmtrvn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163rpbecpno.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xnqsgmpv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163okwdvwsv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mxwcummf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jdkhufyc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ydsjcifd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xloapveq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ghrdmadr.html


<!-- 参考信息 -->