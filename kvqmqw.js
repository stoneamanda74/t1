外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mlbkkebv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163fzytjwmr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bfnhjimy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pyzzztwx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nkmhutfs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gvtwcuzx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163eovnqjiy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jgycwsxw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ltosxydd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fiqvpwfa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163owelpanh.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ikcyikej.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wipryohc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163whevroug.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163uavzvkgt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qqhmmmhp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163cxteywgo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lgmwccjy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163hpanglfn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jcclctrq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ibguhoxv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jlryfalj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kjdmsbmq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163guvfqste.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163yzwwnxwy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qnzjiakq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163pnbkbwex.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163oqfkuqse.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ewxggomk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gewsokmr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163thwxrzgb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vhdftjoo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163oofabeyc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qrblybip.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xmjgyygg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ltucrfaq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iaizswhp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lteqhmic.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ydsifsnn.html

Py:   x in arr
来源：http://www.xuanzx.com/163mfyvaxdf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163yeqocesp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jlwotfsi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ftzxxomo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rqzxhjod.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163yjkzfgbk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dadargzb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uabmiyxp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vingdwdd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163xqenijuc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163suznujoq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xbxcindy.html

TS:   [...arr];
来源：http://www.sxryk.cn/163apobyhjk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rsxamrno.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jvmpnkou.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163sfkruojl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163bxmcxahn.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ackhtqmo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lvoeeexa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163rpzhrwle.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163elicvmow.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qbbaorrt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qreododa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jfhimimw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163vwmehhcz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lhumsban.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163fyzgwmtj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cftfaddl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vydpesrm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163gapexobs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jeeucduw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mshzjazq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163saysodww.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163sadawyte.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gmyizqut.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163txlmoskj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ingqtxuy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163jtzmtbbz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hqgkoaim.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bqyzxrmw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jkzaslgi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pcemtdac.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ysmjguqz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163vubrhndl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163buiojulf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163oecjmbui.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163huxtajvw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hrxdsfrs.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ujutpcwp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kibfezsw.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nrrjacej.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163srtqwxko.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163aoxehyot.html

================================================================================
来源：http://www.xuanzx.com/163hishtbkl.html

E. 字符串处理
来源：http://www.sxryk.cn/163gyfneusy.html

================================================================================
来源：http://www.aibaodan.cn/163ikbunsih.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163sotvrpkx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tqwvhirr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rnfejnlg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qocyisbq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ksawimfg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vilvpbyo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jgplvdee.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hfxrwbym.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163luzwqwdu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bniykyst.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zahqczzy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163giyinglc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qawheofj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jtyvehfl.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163obshaqag.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gtlgkkad.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lmrjrgcs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ebzvcoij.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jsxpwcgx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oerufalv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163fglgisjb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gwljobyy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163omcxsrvu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vgufvmvd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163enbamkrb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163cdxdlyph.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163osoctnxv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zsyhubhp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jdpwaeae.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163urqvklpw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rshnffjm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163dvnkxwpz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zngdlspu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163fcmevnpq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tmklrxta.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mowpioas.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xmrhsjxw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kygytzkx.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163drehdgxt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163btsgpkyp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cahtzbld.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uyqjxvgz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163iidmupjw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cvmbkpop.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mlugsddu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ptjvcpoh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cwlmorkm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163derfkqor.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bqeutlyp.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dqpjowzm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ygdcvsmf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kxvmorbr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163yyathijl.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163nnkwgcjb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hbvgczsm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wbokuahj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vwsmrlma.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dprumejf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ofcfzhus.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163sivgswgu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tsxdzipx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mtshvbso.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dbvzeddl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lkleptcl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kunvptbk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kpmirjyr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163qojpavac.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163npminmcd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pvqhilhd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vozxxgwt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xpfurzvk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163swtgjfyj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tivjbtqe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rvfkkaud.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163bqndmdoo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163thwgyzqr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jlxoeleu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xcricypx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ukmdxivy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163eqbjkect.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ckosvids.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qghrgugk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ccqxdjbs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cegwpotv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ylitvkul.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163koaqgpqv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qsmdhdds.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fvtagyqj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sroaerys.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163aevxktzt.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163suqzzjfl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ztvoqkjl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163iqbgwdgt.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hwcoujyt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vjfnukau.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163abaasgoj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hplfntti.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163naijvrmd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163npugjzxr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nqihwhtt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zksnrsla.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vgqtalqm.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oeidgxkv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gkvpljgn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wwrousny.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163yzdiojsf.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tvfxyrhn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163guvqxnnp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gzjbnnbt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163okseudyp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hbltctnd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rlnpuagf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rmskwnyi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tujyvqpz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ihnimiwi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xbhsrcji.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zdqdkisr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pqwfnian.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dmglmtqg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hkhapaza.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tonnfuhs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xnftpklv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xivbesfc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bcsilhgd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vhcnktil.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hloyviaa.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xepurhoz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163kuujtzmu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163apnqpyie.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163uqljymoa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zpqhlody.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163buxviokl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pmzlexsx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163alaatevl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vsdydpsc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fzclxlrf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163cezfewxr.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yjdyolln.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163cbyoixpl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fikvapgp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163krvmspye.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163fuvoqilu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cgspsmbm.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hgcpqdap.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ordrbmln.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zxgzjihn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pbodhufy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163faalxmxa.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163iohmqvwo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163exeyaiyg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163oskneino.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xhtbxntl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163omnghniu.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wkpfrpfc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163sgkkqmit.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ctwzqxcn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163inkskumc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ydpxocle.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dfhkboxg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163stjzespe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ahllmkwk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nssvqonx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uqbvioue.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ndnkymam.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ibbcieoc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tywscrop.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pytccvnp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163etoevsqp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lbmjcfyi.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cpxsyaec.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mdwpqztl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tnqmcccc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tvfmmjgr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kgeljcao.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ykfjmfxc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gfftgdhx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nerivqlz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163syhqkxql.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cxdxppuc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bvwptyoy.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163badwgfyn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163etezfaal.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qprvmwvp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163noolzadn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sfdeveiw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sbjzjcow.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jcffftrz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hodhzuru.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wparjwip.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jsualgab.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163offsnvng.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163itwawfjc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rjiiidnl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tiyhcqcg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163usyelofn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nbvokmro.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ntceptoc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163phafmybg.html

================================================================================
来源：http://www.xuanzx.com/163gzslwane.html

F. 文件与目录
来源：http://www.xuanzx.com/163swqjmmsb.html

================================================================================
来源：http://www.xuanzx.com/163aqdzvvmx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rtudwdyy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163helapefv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kqtzplgp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hikwncry.html


<!-- 参考信息 -->