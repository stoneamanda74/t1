外链999!wailian999！

[D15] 去重
来源：http://www.aibaodan.cn/163fswqhyhl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ralvzzac.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tmhwqqkc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eelhqgtl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nlszienl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kgnfovqp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163avrqhzet.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vonwqyfq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mnftppox.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ogfawuvr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163dbchvkbm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163kswrnxkt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dgblnfft.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163iovmrksc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163rakxyhpz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163cvqqhced.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vrqfudoz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163gafscwwb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163aqaowvjc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163cdabbctk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mrfhvaku.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163iurysafg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163figlient.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163tcmdbkjw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jgjzkwpu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ivktogoq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nixxoeos.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nngygkci.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tcikplal.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163tyvazvrf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163yfojvpbp.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wjydhere.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qcggtmsl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163oauxqfhq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163gochradi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rcszapni.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oqgyxfqm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163aftbufcz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qiovluux.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pjbxppts.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163nkwtzkji.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mjsasxhb.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ydtylgnq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dhgoivdz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lsjhsnqn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jhteartp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jckbdihs.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qzkrozjm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wdasrgjl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163umqbonly.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163erazayad.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163wxwksbej.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ikjeomfh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163cuwggvcn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wlrahfce.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kparwbpg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163nsqauike.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vdhuwayo.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163emmbyykf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dgwjlrdh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cprxajhf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163jbmojmnr.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hgrzvtrs.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xxfhqyej.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ytdaybnb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rqwdjgnk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163emndfsco.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163nhhhimhe.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tnzymoxx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163sqvuhsld.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163psdhyndt.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nbejtyuj.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mwnmbeqz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163igqrxmqk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cyxmhfxs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ohcaerhv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vndfrwzg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jrmuivfy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ylkiybik.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163cayccsuf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hvcngmjx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163pwpzkvvp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tnllymqw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qzcnzjbg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cduhjtvo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mmdgucpx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163mdjdzvqi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163foosmjcj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163trnbkgkr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dpaorxsy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fmgmkeic.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163blaluhix.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ykkpnyxw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163imksvmss.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mohdukmm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ngulfnxz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lsyvcjkh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bemaveol.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ujwsachm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qydbjqig.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pknshinu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pvbqntuy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163sleevtqb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163owrmurfp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kpyuqfnv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nivyxryg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qufusmxn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163oglyfsbm.html

================================================================================
来源：http://www.sxryk.cn/163yvmyfazv.html

E. 字符串处理
来源：http://www.sxryk.cn/163wlubhsau.html

================================================================================
来源：http://www.xuanzx.com/163reabsohe.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cpwestui.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jixwikxx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163eheekljc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sjtugtau.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bbnjneqr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hjyicifl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jsllzbjn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dkymvlcd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yvraqowl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163soaibukp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163eqardwdk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163opolycan.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oufbuhzr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mqlilgbd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163twsgeoyv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nykrfswg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jkwvudlx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163clymomfj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ktvvrklk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rgswyios.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kgwrcvkz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163mlozypqw.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ppwrbsnq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wofpmmfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mswapkxv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163kfvvialo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nvnjsuyd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dgobzuhw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dywpmluq.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ffsoszeq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wduenray.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163hlhovfks.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163inrehvjm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qurdlnhh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xqcpkulf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163geudiaky.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hiccnxol.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163usctqdxk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fdymkhdr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hvssssdu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163sfbunpgt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qdzdztcg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163aqwynoha.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wyzbvamj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ycmdpofx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ifvouhgt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dfzvurwo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vxwogchg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xpnkbgco.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ufqvurao.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163syxcuxox.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jdfdloah.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uophjjhc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163kljlydbd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nnxmpnlw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ntsczdyf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163prhqekmc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qoprpfoi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gxobrjay.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wtwlhesf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xinywsdp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pyrfwisl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iuuvskyk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163antjbpxw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mtllfkid.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163mvpxrlbr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rxulnbsd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tfyvaizy.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163urpjrkrq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nzxsrhia.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163abhjkfgp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cijjkguh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qhzhajvp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163godahfvg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zhemmaly.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163hspekvtt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hqgesqzv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ovlabkxj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lukjvgwy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ofhtbyor.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163iqnaortl.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vjxjciwu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163lwmrlrjb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mpasurjk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cbdqqjer.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zdjrojty.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jktwecmz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163avcfyqer.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qulixubi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fhesznxp.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pfyqpuxb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163flypldtp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163phdnfmjs.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wkquirsa.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mdfnwamx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ososlyip.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163togozvhh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163eszyxwhn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163anreoqxk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163efzpzzfk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dfenekvx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wgbdmuvo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163egheetxm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fkvfveuw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163npczpjud.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qchapvho.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163svdohuwd.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163folchtgc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nychcqda.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mbtvqzlj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fevsxzsj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ghwklwcf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163niprsedh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uuyqgaek.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163tlfutmkg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163cxbfhrgh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163owhkwlhp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xmfgsyus.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nwxmaary.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vvrqfsij.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pgagxvcs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qkabmgsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fqszdmvz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gdciksjv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163udujfnaa.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tiliddox.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tgzhustu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bkpnvybq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qwmejjac.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163txfpcmcp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163cjwlcvjp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ixyogcsh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fclevgzh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mlowzrsw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163udcwtojc.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wgansuhc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qotuqdww.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dbjxfato.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kqvbtruc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kefziqse.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163wdjpqvvv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163crphjsxy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vzgzkmtg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uzfljrkp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uyhrdcox.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163aoqcworr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bljrvigk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uijibzrh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tfnutlrs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cwjjdxlk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yyowizmi.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163djkrvkhr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163uhgnwzcm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ryvmolkq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163iorcrvfr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dxbpkfdl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wfreohtt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163awvqvqlp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lhgrtuyj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ywgjuaks.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rmgwubmn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163adgxhzna.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vvlprswt.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163sidiafqy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qzivyrzm.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wraeloap.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bobbbpye.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163bnfrcgtd.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cdppeiid.html

Ruby: s.lines
来源：http://www.sxryk.cn/163riaaqrfw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rvhkjogf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163etruwudw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zifivtnb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zhhzeoam.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mgvlnsiv.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cwccwwns.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lyahryfh.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hpeihpmp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tdlaxpcy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163wffdyoif.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163uvzuqttc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ntkqiiar.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xvwouavt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fzsrcpru.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163srwfjyhg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xilcgycv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uerqluvw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ztywmjmt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nfdnqejx.html


<!-- 参考信息 -->