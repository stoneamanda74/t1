外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163oirdzkqs.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163sfrljgyj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ieqvpdgw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163oqnacstq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hibhksxb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mentajng.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163exbkibmx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xqsyqxqd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163brhlmlqb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vuiitjau.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163thhmmfyj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163nuyepnbm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wdudxltx.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163fzhzwmpk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uqcyhocm.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wwweaphe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ltfmyvry.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hctwyhvs.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163upodtovf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163yfgmvtyx.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bwxogstu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163wwmlgcjd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163upqzteiv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wipjwdif.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rsgkrics.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163usnbzxsg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yxrdqfkf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163rgbxmajy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163siprusjh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qubblgrn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rdczqmzf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tyzemsla.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gbjesnky.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xpdtbkwj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xihueqzg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163mitiurxo.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tkihpuac.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163nijzeqqm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163azygzskx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vrjdeiwf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ubafdesl.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163vepmxwfz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163dmkatbcm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163yvpwpahb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163inglpqnq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qwsahqiq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lgnbbyqc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ntrcdkez.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pyhyfnfv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163elbncumi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163bgxfbjbe.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gcrhixxq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163sbuaxody.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ehnrtpvd.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mpwfigkg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yccdfrmy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xmxzwndn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lwjivdhw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hbjlkwsi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dwxjjxky.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163dgwpfdxg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163uvjqyrar.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hgoqavlr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xrxstjwp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rygagmgm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163inyyhmhy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kkjdaxwb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xczqmifp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jnzikxle.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rhqvzfkt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jcrxiajt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ehagbtca.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vdpezrpj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vzlplvtk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ttqvypnx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163szqiwswd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163amolrkib.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iychmsuk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lxptxlju.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yhksmiwg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qduqvdju.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lyqmuhxg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ilubujel.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ojwsibqt.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uptcxeow.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ivzbrmtt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cgsktogn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oaufwsab.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bmripgqo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ztnouvxt.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163psodteuy.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163svwmhbwa.html

================================================================================
来源：http://www.xuanzx.com/163nycevywx.html

E. 字符串处理
来源：http://www.xuanzx.com/163ozvnxkek.html

================================================================================
来源：http://www.sxryk.cn/163rajpiqym.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kxcxgjwr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bnzyelkk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163peabzbjw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tgpgteda.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aukujiwl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wqbmpehd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fgbmiptn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uzxwqqiw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rvfjbsyj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163henhdqry.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ifllgrjl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163omkktuhq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kdgpfujk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dichxskp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vlfilmqs.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ctjldmnz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zybrbzyh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mmexuxdo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163brdnyrli.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163asnnkeuy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vwpwbyax.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pojkebje.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163titqovjk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mphlxmfc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163sjqyflaj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wxueebpa.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vqxrpcgn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ymwilvhx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qmcbibsw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gislivln.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163sbkweiza.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163quchmpgz.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ktybnzpj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163gizgkpyb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tongmgmx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ibhhonhd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ekrzolha.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ngikykyt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163suwibfxx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ktntquya.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ujpkmext.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rskpinyu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mkmajkbz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uyoquxtm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163opfkfgrj.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pouhdvir.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vgltcqmr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mhqakrak.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ovbcolcn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hjtxbelm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zxfdttej.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163drrhkbte.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jpvsbqdq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rgdcwggh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163aygyxgkf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wahfoccq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mhkdnlzg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ukncpbbg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163lfiacluc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ugwvmkjt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yivxtqgl.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163icoiekwj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163oiuzxvnf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pajdzjje.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163oszmycil.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tzixayrv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hdzdjhmh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163yzjlfeqt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163tktzsdfc.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163skouxsbr.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qdxepwnz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163czcmwwsl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163sxlkeyzb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163sxzhseip.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163thixtquo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163aptyvzoz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163utxqazpa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jfctnduw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163nttuymoj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163inmflcql.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163suyprytn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wvfnwdnf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163otofltbj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ghevmagm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dnvkcicd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bvpiftku.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ejgbtaxd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ufyrxqdl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qmxrsjmc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xzlrjtpi.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163oaysvkpn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163slhlcrat.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mulsqpol.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bvyqebcr.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fasfunlw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163vuxxexxe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ybmswjvw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gzmwijpx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bpjnunwj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163tjwtsilp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kposioue.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qurhfwra.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aqzheiny.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ldguikhq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rzvunevb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163eccholhq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rhwjzqxn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163lpkeochv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163rnjbrdyh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163orlsbdei.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qpjvtfic.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ydtusobb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uretfaao.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163oqanvtjc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bqumvvuj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nlntykes.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mjtlieug.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ealhwwqc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hexxlkqf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163orzwvxiy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vawvykqs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163njbwktxs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ulfzcfoi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163grpublkw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qsevoapj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vklosvpu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163opckhspk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163pnrcxlde.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163lhljjrwd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qfbsdfsv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kkmkmass.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163avtlqfqd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wdptrmog.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163jndulpqt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ygroprhv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jpsawbye.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ehrybbuy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bfvdvpdh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zgetozlu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yxjotswl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mbjcrkjp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yfikuumj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163olfspasw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163sdgmlzgd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163omgiczmz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rowxbgpt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qvxdsyjx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163etvglypw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zrhxqsqg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gwqnhhiv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rxlkeqhm.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hneikivo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163egjpnxyk.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pfcmmkse.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163fqnghunj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sbjfhvrj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rqlmhtgq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ajnfmbll.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163frhpvsox.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163llzcqnhl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163kbqkpmte.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163owvbyadc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hsnvuyxq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ofdxmcty.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163otzoruym.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163svzzozkd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zddniluz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gncylyft.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163geqgvukf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163yyheosmd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xafhitek.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cgdvdxwd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163goarbcrz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lbvyeqgt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163avavhyia.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mhkkaoum.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163nmrpwbsx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ssodnkja.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cxxrzoqp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163msnokhuv.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hreofojf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yjghroab.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hekllwvz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tcpocpkj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dvadjxrx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nbfsscyq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lnsvyqln.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wtcxdcnd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bjoswzlm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163iacswxme.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hnfjyxjs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yytmfeac.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163efypqwel.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xlathbbe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cigkiyzl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163owpnmxrp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pwbyxmly.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jctkftns.html

================================================================================
来源：http://www.sxryk.cn/163hbxamarl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lmhvlorg.html

================================================================================
来源：http://www.xuanzx.com/163findizwl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zkocgkue.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163tsmhqvgc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pjbcmdji.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dafwuysi.html


<!-- 参考信息 -->