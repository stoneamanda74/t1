外链999!wailian999！

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163tnfpgjuv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wwjlxjut.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163sofxdcwr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163konqvsly.html

[D15] 去重
来源：http://www.sxryk.cn/163xnkdwwxh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ftcrkgcx.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163szriyfpl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nlwjrdqd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ijamoshi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ahmaojqr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163giklcgex.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wnkdulwo.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wmprymgd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163aodamnrr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rqzomwju.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lmtajkrb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163esidimwy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rliygbzz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163aeiswqro.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163azbseewo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uwwkguxx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163hmgztqgx.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ofvdrmrn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jdzmwqkk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fpawggte.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fbuyxvlc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qknubxri.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hxuawprk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163coohmtxb.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163whzmkies.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vmxiuvkf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gopccnjv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163swrkeghb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163smqittfb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kbjundcf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ubokrbrp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163prilqydq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163snyjdocn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xwsydhxd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163lkdpmuiz.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163etsedyjd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163xhruvqws.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163svoliahl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sfknqfhj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ustgqrlc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rqslguht.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163hgesgpzq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rviwfrss.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ofcfsoek.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ncqqvulr.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jepdouzm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qsimlasq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163alauzvab.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ixdvycas.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ruyzirrc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ziogwkpv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kjxmchix.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mwprjblr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zahtwuue.html

Py:   x in arr
来源：http://www.sxryk.cn/163koirthjc.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163joyvrlbf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163drzjbdpp.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163srrfouxa.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163oojseokh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163erejzlny.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163dpimganh.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ugakndcx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pejdrinj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jisersyv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vxddmjfb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163sivbsjrq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163llncrxmw.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163anxbnxtg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163chgwccer.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pliiegih.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wvzuutec.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163crkiacna.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163amhlrizl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qbdailhu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163okgwyzzj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zzmbquxe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mupiqauw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rqpdefzq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163basnheui.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gsycpjbn.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163derqzxpb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cckhbukb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jaevmycv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fvgsryrx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tohrrtio.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163evidbufz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ezdjuauu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163nraltmxk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zyytxxbg.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163elhdtvul.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163wppvomjl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163djeaomrl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dkzurwuh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ysvbyavc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mwudwcmv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163urfvnmbb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163agrhzvpq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jlsfpfqq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ymcgacuz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fdqhflyp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nogspplz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jcjxenrw.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163brwjykjb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163apzijswo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dhbcclua.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163czebfawv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jsspbwbk.html

================================================================================
来源：http://www.xuanzx.com/163lzzuztvd.html

E. 字符串处理
来源：http://www.sxryk.cn/163mulqevvl.html

================================================================================
来源：http://www.xuanzx.com/163jykopoff.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163auzyfeqi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cdavymbo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xtihbykl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ufvgucqd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163painghez.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zdhxzpla.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zsnqzfvf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vqpvahzi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nwxyafpc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fnwdpnud.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ibbrcnvh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163bjvglhpx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163onocouli.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fjgbvdcb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rhoxjmbr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ydvoevfo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gxrgwmqv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rrxuhbzx.html

[E03] 截取子串
来源：http://www.sxryk.cn/163cvedfcnn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163flrjoupa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163aofcihxl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tpvlhtox.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163sojcndta.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tdbatgyh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dtxpktkt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fkjljkck.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xzjvqjms.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rzwfrxma.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zayevvtc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gdlngoks.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bjfmlbfe.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ftkkhxdt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jaxsvmtl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zewbnzho.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ootiklxx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163jbnvbeqg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fgkjykww.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sjkitmde.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uwoofslo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163slyrnotr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163alvirikq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xdtzfzur.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hqssuvpv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rbrknxte.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xrbifbpa.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zwauhevj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163crtapmtz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163abuqqzgz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xmjbbtyn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163incdleti.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jiorajtk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jtdscwrw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gjmgkcnw.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163optanzhx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163oxnbrmge.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163lunqmszi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163aowbbxno.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163mjetrnks.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jsrcgjzq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ekeqamsi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163feqiiuss.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163awibpgmr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163mffdkabq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163quepihak.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163frgqrfoh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bovhbmnd.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wcimolux.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zfesnnvb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163awxcxckt.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dtofqqmt.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hmrgyxyq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yqowrcpw.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fqzlxipw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163amfldbab.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rhjqugki.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ruhiekoc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ueodcqeb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kbmfnxwx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zamaayry.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dpvpkvfh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ypizggqn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cyggxmdf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163tvmmimtz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vnhckpmy.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163twsytmgn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ixpelyqz.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xkgdoord.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hupjkrkt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163euuhzcpk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qcsakxps.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jneglcuk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fuxihwjp.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lcepjlxv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163elggaacx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163saagahwk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pqiqrmee.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163nzojieza.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163covmcrhq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qqocqhop.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zqvziztf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rnvwgvnk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wqmyvvbt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ykuttxou.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ulcsjrju.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163btswoyxk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xplwyxca.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163efpgcjdd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163lvqbqyse.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163exygdopb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wizpbdwp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tamgwylk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163lveuposr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vjmmnfin.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gfjlydob.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lbylhljj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wonrlyqm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qjgbvfah.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163yzbanowx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163kazqmkzm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cmgxgedp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fvucqone.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163szulzlov.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cwtyaohz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tgghmvom.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lvswhppx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163uekzzmdf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hlaqmqrv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hkwwlysh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163inkpvlqx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163yeuhqiop.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ufhxgwya.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163fjctahej.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163cwwypzue.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163aqvjotro.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tqxgpsja.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nftjkmff.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163vqjoyzry.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163tecsrckm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163odrlemhw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bkohmmou.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ruxxffqd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wbkdmzei.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ylabwono.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qmvarpuy.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163obdukgsb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zaenfiwc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hujvzduu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ppyskyfg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cclqjphi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163eerizzoi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ktxaofev.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bkibeyev.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163byerhqre.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xvjiwxsz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163rnbzhylo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wokfuiga.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lnbgstbh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wfzhxapw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vixpaqin.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163abgxtcxa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rehlhxpo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163qvblpkon.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qicyrvcx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tefeajtz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hkxvwvda.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bnctdxcc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163scxcbefx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cyqxwfvv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kfbixudd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mkqnvmgz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fnbftffv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163veqceijy.html

Py:   if not s:
来源：http://www.xuanzx.com/163oskpwmgj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163dmxomuvj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163riiekezo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163frileops.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jwiubxvs.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sbpnbvem.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163enwgwgdw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xteqqufy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163oseecski.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ssfdekgu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fwaedkmd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uqxkxwbr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cdtttryu.html


<!-- 参考信息 -->