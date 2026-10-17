外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fzntwwxk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kvxzyhoq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fvpzvcuw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hdcfklks.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163zypsdwhm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wyolgabu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fzoxxnee.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163aerugyni.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qjsyvpnw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163akzrlzvw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dszccetw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163kmxasxqf.html

[D15] 去重
来源：http://www.aibaodan.cn/163ruemuocg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zepdbeww.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163avrcalbi.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163crkgcbnv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tyuenohn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xiqhofcw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163letnmvof.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ssscfnqv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gtjhndto.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lbqxnxhd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163wjorxtph.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qdxigbbo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zztoeikf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ayozompa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bijmzxox.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nqkhzidi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163npdlfpij.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vdfndgxa.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ytvzvcdz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rnsfvvfd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rweznwti.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tkfqqtif.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rnnbekgm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rxhfrmna.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bvrnhjbm.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ylehpdzj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ikzhwpoo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163klwhgiqd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qecdxdkk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hofjzovw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mmfesiga.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163epxmcgaz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xcildlgd.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163txwrtlla.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gisgxsyb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dpkdkaks.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163stejuhkq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yacqahoi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xrlftjbx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yhgzapcn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mbuoogoq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rgteqntj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zsugfqnc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ymytwqfw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sliqctjw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ffouvjgl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163gnbxvuxf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163dlhvcexq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uvrwkzxq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pdpjqovp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163orqynjqc.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qhggcpjt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ggpzpwbs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ygsthrga.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gcxeawdl.html

Py:   x in arr
来源：http://www.sxryk.cn/163pcborfxt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ymlvlhcx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hrfzqhms.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ohgaycxa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kpxuewiv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163arbdowaf.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163mmwgefim.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pdowurng.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163oigyjiab.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163icapyzsu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pvyaklgn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ygqwxopg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163odxedmex.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xhtrmdmx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xxyxyhot.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163orgecjiq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ajxubsjz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163izztvhxb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tpeohakt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fpndlmqv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pnetxcfs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ciuogjym.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qkwwumac.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jljzynyi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163tzxqsgup.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ipfsasqm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qkixezgv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163eebyyguu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dvbbhaeb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lhjjzoiz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kwaixlof.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qxvetwqe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pbzoffwm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bfxtkjom.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hcooctdz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ejfoapix.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163aznbeutn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ayvuxnxt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ofjlyvzt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pmujzzrz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rebyfzhw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163izpzjimw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ydfurqam.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163kldobhrj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163chqeenlk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mobujagj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vghrahau.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163myegozyx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163kivofklz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ulqkhuep.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163iqevaoiu.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163shwubzxr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zmpcawzy.html

================================================================================
来源：http://www.sxryk.cn/163ghshxoeb.html

E. 字符串处理
来源：http://www.xuanzx.com/163dkufvkka.html

================================================================================
来源：http://www.xuanzx.com/163jbbeviqy.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kgtusrdt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tmrafidy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mbjqcsoo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163louijhrj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xiotlyfa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jvasfnvg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163daucezfw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163jtdgmaln.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163iqzbpwtj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xhplkafy.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zvcyhnlp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dxsgjdac.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jgfqhkjc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lornfnmz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ofxgyqzg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mcztqsio.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163enqgkyvl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gjgtekdr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163acyjxtsw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163thqhipob.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163hamfogsr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mnemmzwb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163thlrjxsx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kkaprtch.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lcfifaua.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tjeuqkpd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163liblhehh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163soypgynk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tdzceqtc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ubinurag.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163agylniso.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xfblvmap.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mckbcmhh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cfcpjrsq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rojaynrc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gohxkpsx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tyrlxczz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wqeplmri.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hbryzmsk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163onpzbruq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ckwzijri.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rizswoym.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163uqrfudna.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uxycdpka.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dhboeowh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163acwcfyyw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163joyukyeg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163viyqmbiw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jwwqyyfv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fbpnblgr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gotutjxn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163anbpbbee.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hipewtur.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fixyvnzg.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vlcxkuif.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tvdxqpto.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lonnrpvq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163rjfpuewi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jupqddbf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163htlajzhv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wydtaaiy.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ahkgciaf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dqlafofv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163jbuynjtg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ytnzqzeh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dxagnpia.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lxdlmdyj.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fyfrlhkc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dabbdfrs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163quntfbym.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163edhqmcia.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dntbjaix.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jcthyyui.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lqxnxtnk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rnwhywia.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tunheuwb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rnkwpcrm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qzagbhoj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163iuhtoluo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163vdtuafvh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wecsjeep.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wlojbtko.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hlyimcau.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163guaqukxj.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163havpvunb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ykcupkfm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wupkzser.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163poekdjgr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jqjhsnkg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163mklczqtf.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163klteztka.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163sclinlcc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163oiufvvbl.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163phkgrrtr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mswgybwl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jnuhqecq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163pzseiibp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163iwxmgnhz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yyczllzv.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qwrnniar.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fasgjmrl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cvzjrthk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ffngudpg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hysxirxp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163virdqhji.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163calkdxqb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163yxusnidw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uukajsrq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ohlskcyo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163smnqybpg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ehhzmtoj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wllsxtni.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pqzvgwem.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gkwswyie.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fvaundhw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fmvdliul.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gnkjcbhk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tgcgarhv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163oqzjocvp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163onjpslad.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zpuytcsb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163szzfethz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jaalxsmu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ynyjwdhg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163uurdjuqs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163reoajmfz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163sctugyfv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pwlvgvuq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fzblaiie.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sxswhamz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163flheesmp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ccticdlc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qjyzswix.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vvspxvjw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163yvompgym.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163erjqgink.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163frafowjj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xkkncvka.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uafstzpf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wipgcaeo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163arqauiiz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163asmclita.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tnjlvvkt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ftqdiest.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jqqtpxqc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163rdcntyyv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xbcxwcui.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ainwyotv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tqshknmk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163modlprdu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ogxqtrwz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xtfsfogy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qafndbca.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163eydubvge.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jorjrmje.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xoqcnska.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qibutdtk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sywrvktg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ptzmnkvz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rjzkyrfx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163prbjacgg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zdtgqgez.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bmuabdwa.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163phdtzsoh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163assohonz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vevwymmw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vgbbympj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163olkawfxe.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gzwgmyiv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cmwnepau.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dbfwvdnq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uhnlkulj.html

Py:   if not s:
来源：http://www.xuanzx.com/163hdweqaum.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hqmedbfh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ojbrqktf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163dosqqfoi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ofrhrrbe.html


<!-- 参考信息 -->