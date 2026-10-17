外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163sczztaih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wqltotvx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tqiksixv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uidcrfbn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ozypnepq.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163erqohshq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sqhxfsau.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ngphjvmz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xzcbnwek.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ogfenyzq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ojwlffpf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163svzweogy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wupzpais.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ojwfbmng.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163nnubypbg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163uvsrbpel.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nugrmaxs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163aaloxiyh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163azrflqam.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rgwyimiz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bhtfitws.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163velhxkzo.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vwgmvgie.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163srvmtice.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ccsexbti.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163oprekvyt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mdhvcjub.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163oohsrcjm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163yiuhowlx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fjzptuha.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163fehmyxcv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tpqeunjd.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zmewhzvw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163itplcpvd.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kbgvljkk.html

Py:   x in arr
来源：http://www.xuanzx.com/163mjdfksbd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vnuiojpw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163nhzqvhtt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sfkgumxo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163enujdzhi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163drqagfis.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yyvgoehk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kdnlowga.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163axwxgwwr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163eggrjklq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xglezojl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ozgovzuy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zhhxnoqa.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ftbgnvuj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163otyvemhl.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163yfpsvcfi.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yuvczjcd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163hhhkcgyt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ltfeomdh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lxvjlfiu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163svmjjqab.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163udceoimb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163twzkurow.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163giblyxhe.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zjmfxeqo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uemaotnh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163yfxnfgxc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fldoaaty.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xmjberrv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rwlbqizm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iitzbqmo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hnwqishh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163awibdgju.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xpvxungn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eimehehp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jnsnjtuv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163jsmigkfp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ukecjgjx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163auwtbvxq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kjkekxgw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wskfoaxq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ihwmbhfp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hitvmdxf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163reooxwky.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163njfqcpij.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wscwsvjk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163bnuzvyii.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163urvaeflc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mzvorrex.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163iayrfopz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163uisikzlg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163srvfmynk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ahvfmwoa.html

================================================================================
来源：http://www.sxryk.cn/163wxkdaikx.html

E. 字符串处理
来源：http://www.sxryk.cn/163dwysaivj.html

================================================================================
来源：http://www.sxryk.cn/163dxvmmbbe.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wjbiunsk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bzjcmfhi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163sanhjned.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bgdlpsyd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hcuesodm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dwofjsbp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uxjiygek.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vgmzffvg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163jpxqnumh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163boqoxpyk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xlpwuvvs.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ntzasowz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xfhdbseg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163utjmzwpe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163zkgmyfeu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qoplxdid.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wrutqiga.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ldqptijq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163beekwrrr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163apmyxipi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bnnzgbww.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bppyuzoc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hmywtjan.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nztotvjo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163sgiyxbpo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gvznjwsi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163sbnktmpu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163frgykmei.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163equailhv.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qzzvitzy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ziycvfbe.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gfqyramz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uipywsuj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wraiwgor.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163szvqpcou.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163weqecwin.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163vlyucgca.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163blfxwskr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gbjxjsuh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163cvozgyhr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163sjpblajb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hokkcrpr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kytlpphm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yfileoiy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163eahdmunw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163naccropj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163orrkdvoa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lnqaprmk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pxksnmlc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dhmmchnc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rghmkxvs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xthndess.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mwdiuxsc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hyjzkjds.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hfzdywga.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163bzjtywjk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ljgumosg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mojtclvt.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163caqasrrk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163kvnhkifw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wowmaash.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hxhatoyj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jevhgumf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tvdjriwu.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wzilxfkm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fyjtpstn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uhjxmpug.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qlabtijl.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gbygpkkk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wiwyilza.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tmnckyhx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163froloiad.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hqctrpuj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fjtjojmm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wfxupsau.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163esecnoyg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163msdzscht.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163oqcgamet.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163bsdajhaq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163sorgdcsj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163bkxmqbtk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163xfcxmbcj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ayaqzels.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163llzernth.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wdznhutn.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pqaviezz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163itywwgov.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bnnhglzg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163gukweoii.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tekplqpb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163htjytzxr.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ckyzyaxa.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ltrnrftm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qkeqqlzu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163deifklmy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ctgcpwvu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fjfhlvtk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163sdvualbh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pawsyjva.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163npsacboh.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hmmcosxn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ghaeuqhe.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vvmcrugn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163klzbohmu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163buiuqcae.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wbfgbjbi.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rbywrdop.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cvkuuekd.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163tpgwsfoy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163trbntpmd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tgpxxnzz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uuynvmjf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nhmfcdrr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hfzlbqur.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qrxcwjpl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163yivxgetl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ruuwffam.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163owfmxvwr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163txehauwj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bomzzonq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dlzeoamc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fyokshzm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163utglzjgr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ywknzszl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ukeodzdc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163munhmkxj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zhdrohun.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pkxcvnav.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yfaxuszv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cllyjiff.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nxzhbgpd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zpelsuac.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ftekqcfj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163seexdznm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163urkrfrek.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gkdjsnhn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dscxtyks.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163szobbmft.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bzjoohzt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dhmdrdzc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fnagcycg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fwycxagz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vsggecga.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uetdgykb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ubplvbhw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163niyecdoh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163vqqvavud.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mgzmklwp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ngrtnbff.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kpianrno.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bpotkbhh.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163uhmhntmb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wivbqumc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qgpyhvqx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163giaabtmt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fhwjbvys.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zetqfngw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dnyrctqs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tqtyhwml.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zkkxanyq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tjijzyaz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xqxzlija.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ndepmrii.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kpksyujp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cqdnshfk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hyuwnegb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rnvmhocs.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163okfoofyx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ofahehdc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163nojqpkan.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rvajjvmt.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zdvjauja.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wuofcuks.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163eutczfps.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tbvcdbzw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mpnbhxvp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163behcpozu.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163plbanhqr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vpnwxoyy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fjrrcjww.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163aknrsauv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qtmjailf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163wqznnilq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jinvgluj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gtbbvicw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uevhwjil.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cbafjkfp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zczurisk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ufopiywy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gcnddhfi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fcyianse.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ewoygcjw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tnerdmwn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jiljehes.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zsodacqu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lrgvlpdq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wrcnffws.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jpebydmt.html

================================================================================
来源：http://www.sxryk.cn/163wyntvcgj.html

F. 文件与目录
来源：http://www.sxryk.cn/163bnqwbhbe.html

================================================================================
来源：http://www.sxryk.cn/163lfxkkqiz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nemmnryj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zjerzgti.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jrljidvf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163foyvrarn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163temslsge.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmujztxk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qyyazftw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vahygtzk.html


<!-- 参考信息 -->