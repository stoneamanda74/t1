外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163diboiofl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163utoqyptt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pzwuydvv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mkflfrwb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163pghxtmyv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163koajdhje.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mfhhujzv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xapoofmb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ybwxpwmn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163quxqmbfy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163eieyabnb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fwnxtoaa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nlpkwpnm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bpryvbgr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gehrsltn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wlitiico.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ayjosoai.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ciintzxh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rdsmtxco.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yodccfhj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hmrzknnx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ogydejdc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163nuxnhgqo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163nxjuhhck.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163uzwbbxkb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jqowctsa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163szluucdj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ycsvqgby.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163elzpyvoo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kolfsofg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kcuwnwls.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cnqrsrxn.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163anbrvpyk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dkjuiads.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nlkkiopt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mtlfcdhr.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lsndznkl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163towdftqt.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xspdgoim.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163huaicqfj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vvpkdzsm.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lvnjmvll.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vawilfah.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ziqfcrii.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163camxyfyx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nbsjjdac.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fytbsqtq.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nbwtactk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163vwrvxqto.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yexzbypy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163gogrvwqc.html

Py:   x in arr
来源：http://www.xuanzx.com/163uzznfscb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zrdjnxfr.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163gapqmgix.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yyshgtmc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zgefozod.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hhhrfeqq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jskdynho.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ptweneuf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zrowjmvz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qiipvssy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163sbmvndqo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wnxladai.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xiunhauq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tcmdnpxe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vxnakxcp.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fddzdhev.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uqmxkfbh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eazyojfa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163eomkgvfg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163napwcftl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jibmtbny.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zoikixhy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163myuavvfv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xjvljtze.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pehajhnb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mxxausbz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163atzzgmgv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bihisoub.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xtvhqeum.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163uaaxogrr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xzadtxdb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163kdgwohjr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qrktpfso.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lnhrgxpp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rdrzehhv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bziavjxb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163olexquun.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vyqzlhue.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163yuuwckry.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163xjmrsoct.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jmtpgrzt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163racydqrk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hvxkzsgj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163putvtasc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163iagxnjxy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zmmtopnb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cdixudcl.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yauonbbi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163irfhzcxq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xsjsxpds.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vmuexodw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wtxwvgcn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wpxfcboi.html

================================================================================
来源：http://www.sxryk.cn/163zsjzrgai.html

E. 字符串处理
来源：http://www.xuanzx.com/163xcorshcs.html

================================================================================
来源：http://www.sxryk.cn/163wzarugds.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pobgjwmc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163oehldpty.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163mkbnfdon.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bdygfggz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ugojpdsi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jfjruslp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163wuglfisl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163iyrxeadd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163hgxbiyox.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163isbzbvyo.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hjvrtwhv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yoqapgna.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ifiafror.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163csytmrdh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163adpiycdi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163oafkhnei.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tuesniqj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rrilscfc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163oitvihiv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yntglfwa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163aabjllpm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163chxrancj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wzlrxhqk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zebumkrh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ftbmzlop.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163oncmikvo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rleapduk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zeksjdfj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163usyzmxel.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hlycnxzo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jykubsjr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qcmyrtqp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xckcoyjy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163snbjnomj.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ztumpjhk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163odfcqdhu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163uzjeookt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163isgqsqfa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163mhmbkoug.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zjhgglol.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uzhiamns.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ihwpyeqf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mkcuvfuu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163rvqkiyes.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xtdkmkbi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vaizhnxj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163frufuxsw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xhhactis.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qxdfpmte.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zpuxrqwj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jsjxhold.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163crgzlber.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163jqeyafzf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zflkspfo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lhlpvyxq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mepenvnp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vgkaqbfj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nnqanvqw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uvihgnxp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vbcxnccp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163qlsbvyzy.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ekhngjrb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kvukqzyl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ilcgiysc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lkfozzpq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163uyqlxdri.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yjhjfejj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jjabhcny.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gqykneua.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ybvbxgtj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ntbtgpce.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vgfszzar.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bdksdoxn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rqswpfbl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qftvhxjj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gxryllzt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wyszgcxf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vrwtwhed.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wdumooey.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gpyasyii.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163clkulyae.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163amfyqyxk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qwrwrsht.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163iqfzikqq.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bdvydydi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jejavltv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kcbaowlf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mbriydxp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163brxacaxy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qnmmsnay.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zaifnzkp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163olgwiupx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gctkiwmh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ogmjymfh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163npjaljzf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pfydfvng.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ctymloof.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jppkubof.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uquznsib.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163gbncvmpi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pxrfccot.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163enmipego.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bfwkziqa.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163elczoipo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163sibedbgr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163scfuetoz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ozphlmso.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dismehdx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163fxinerbp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ayywxjug.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mwxsomfr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163otosevcg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163trsulujh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gbamqsnr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163iaagwsza.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163iyghxfpb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lrmlzmbb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ufobwzlq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gokrfjda.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163peqzmljz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gflailfu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dfyejugc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163uqkwtzne.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dvxxopcn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163grcgdbmv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ifaualqk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ahkuxlki.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163sftarpld.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163rcwgjtrq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163indbfdto.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pvdphecc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qwbushaw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tdpsriid.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163aaobtlth.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vxqkgggw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163oewlzouk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yybhxoqj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lqqvkrqq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nqebafyg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qkphlztb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wunghqsn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163fwropoxs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uioukdzf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163youaaajw.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163lmmilpig.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163nieoxzae.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163eycjmmdk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163iiqqhcqg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163msuvqgbx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kodvbesx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zafdgsfb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163owzqpujo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163adejwele.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163guvsjcat.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ctmdnzgc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vqlkhqur.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163elnlsawp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bumubksu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sdfzmhvh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163uhxqmqly.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hkwadfwx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ppyxapdm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nfgialma.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ngzkqrle.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xfpstlni.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yqzwteld.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fahehzyg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qsqlkshi.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wychxnrs.html

Ruby: s.lines
来源：http://www.xuanzx.com/163cqjmnpus.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vvzxuyvy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ozaozpbx.html

Py:   if not s:
来源：http://www.sxryk.cn/163ynkpnizm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fodxpytd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ovavuwhe.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163aqangwbt.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ncoztkmh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cdhahrtu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kwiuikhu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163iyalevxt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163txjrdoeo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wmithclu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jjmkball.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xvskuyrg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fvymvpto.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lnvxozmo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mgxdpqde.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163zaewqiqj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yyrvdobk.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rhjdkqop.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163utqrskhp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zarizmcp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tgqofjji.html


<!-- 参考信息 -->