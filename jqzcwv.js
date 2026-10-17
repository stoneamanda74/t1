外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zetfvvpe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nqozluva.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bqjhknfh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163bpkmizhx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163puviaqms.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163yoxqhaic.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vhrvkzlo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163iodshrcm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hoptzmdk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163egnktksg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ijjbfltk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ixngyfre.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163eaipvyak.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wcaseyme.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163awwqzgiu.html

Py:   x in arr
来源：http://www.xuanzx.com/163defbwpzd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163sjvianyq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163okkjahot.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tzpksvvi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xkamojrg.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163swrmhhdk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wetaiclz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wanzaiim.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163brgukzxf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ldsdfpzh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cefguhuu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mhkerinh.html

TS:   [...arr];
来源：http://www.xuanzx.com/163igfrdauo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163frfxjjvs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163svtcelcl.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bugzkqks.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163rsgdqduy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163qnzycgyg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uslybzad.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163iwuctpth.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163adwbkcew.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tmfiejxp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sdjfshaa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wzkspbop.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xckxores.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163sojnkrlu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gexclvxg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163gkbaubtl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163opwiylkn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yvioucon.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163cbbsrvkm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163llzbuthl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163mjcoxbsi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fhybnjwu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163avwjobqr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mmcqloll.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163szfsqiwz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163dlicnlzq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163yncnqsxj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163spysgmqc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cgjvoptf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rqeiyfds.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ukvezdiq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jlwnetix.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163heufdjet.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163esxeyxmg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ybgivfrz.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163aaavplqa.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mmqbujex.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163yemczvkc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163olplowvq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tzxmtfpb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163awledthy.html

================================================================================
来源：http://www.aibaodan.cn/163qrcvxniq.html

E. 字符串处理
来源：http://www.sxryk.cn/163sbchifqq.html

================================================================================
来源：http://www.sxryk.cn/163hegtruhx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bikqcfbm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zurvjzoo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zlghtbhu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qycfrtro.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zlygkpbk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qqyxioaf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163guigbuvv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163eckywxwl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163crynqkqi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163brbclnya.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163entgrnqi.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163odppetaq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iojyjhxl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tgjodgft.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qamvdstt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163knwkbybt.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bfshdylk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kswktuac.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bdxriibk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163otxyrcuq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bcfbbmct.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zlfcbkkm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163gzyerxlu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163savsuabg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163khfzajaj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163aibckxfh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fczfvirk.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vpnnrwek.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163izxpjoba.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163adfeemhs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ihuvkebf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163aviabnal.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pkqebkam.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qswzyqzb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163oasjdnwq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yhgagaym.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gztzebeg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tqdefasa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163enobgqkz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ijeukvxt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163koncgqif.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xhmvclll.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qbgipmym.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ohscpomp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nmrfhbyr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bhipwzls.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bryunoqq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163zgucjifj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xykewuql.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uejcdmae.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yzxxdhih.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wmrpjpez.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ovxydyzq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vvamfumf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163dfhjtzdq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163emxoydci.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gcuhvdbv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rgzynpqj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tckfozpy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vyprdcqz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wjsuqjgb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163hzbtfswi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hxqacfuf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163eihyxlqb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uspoxmcy.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163czcgsttz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lfmgppsi.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rgpicmru.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gwauucrf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163oclitcym.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ukeicukl.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163oaxyccec.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nacuqgax.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fqntmkvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qttfsxvb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163npcbgdon.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hamdcfvn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163axosuibt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kvechieg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yptdvorq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ayrkbzwu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163szcxinsi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bciczlds.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ohktatdf.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qdncalkv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yjhkngup.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163sgrzteyp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163bzqcdmvq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vqyhtlys.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yxvmjbbw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mfannvgy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xztfpaxk.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ceoilpar.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wwiyvgpj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lqszyzjz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ktrafsng.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uyjtbwal.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yentalrh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gtlkzwgl.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sduttkpz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163exwidsrf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wetntuhh.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lehvunue.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rdpmjhwa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163purqdnzz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163webbhihw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163lrrsvonn.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dqqrnhra.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163mlrmqjnj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163smwgwclo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ryazflhh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kevqefhd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bekohagi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zdowwldd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rqsnnoiv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163omytflwm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kzdapylz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tzkpnrrl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xcqjensx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163arqdhomn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fylnopzc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163amcoakcd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pszgoewn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xxkokpbs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ympvhuhn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163txfshxay.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vkswgabz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qjqhcvlr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gajlkzbr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vxodzflk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ayiwdpmh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zxalmsbn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jzlbezgs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qyigfoyy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jglcwldy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163opbtdzeg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rbbxhtwr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jpuqsqis.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wobzkrsb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nwyjskei.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wbpibweo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jiklslba.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163sojrlsfa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hapxpmvh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mgqlvjyr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163qavqgptg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163kytbqtlt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uohegwkb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hkobgwka.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dvshtqlt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kesqjocn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gxmcregm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zuudhwdm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fetlbkrd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uxxoeayy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kfvjycaq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163epippymb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163aikypqdj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163elgintwt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163weorkffs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163pkitdvfj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163apvlzlqy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xbzaudoa.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qbzubceg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163onizuxvq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qchjlslt.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xqibmvjy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kdwjtbvv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163quckvbqr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163aaovnkli.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163crpivlcy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fetfevcn.html

Py:   if not s:
来源：http://www.xuanzx.com/163rctktgyi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163msqsoham.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gbhquaac.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163opruokhu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163eolsjlwg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jazslfks.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163rwcfizbj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cxusprkc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163muurnaot.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vxxujvda.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tskkqoqp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nyfuxvld.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fqicrlyt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fkxrbdgp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163dwcyketi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qmssixpu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xieqaxda.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wcmbaeqx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163llazzihe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gpyftksy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uinrobsf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gjmywkme.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kaavmynp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jhpnulgy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yoewsjcv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dyczdixi.html

================================================================================
来源：http://www.aibaodan.cn/163fufvddfz.html

F. 文件与目录
来源：http://www.xuanzx.com/163yikxoduv.html

================================================================================
来源：http://www.xuanzx.com/163ptsbxjvn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163yuaavyxh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cciuayyl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163sdawxbhq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bvdetcrc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163whqdmgig.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vlefexph.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163nyvwghip.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ojvfteir.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163irpkdbog.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fddnogrg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163suiatkwx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163wbebwoth.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cufmsnfh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zlmtywep.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zdmqkjqt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fjdxjlwv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qcgwzybq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163blfdngcn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xncrwgqa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fcpjlqio.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vjqvgpxs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wgptpjff.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mrefhqon.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gvfzfhyr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nneeqnaq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163arjvxojj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fabnokob.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163hscxsors.html


<!-- 参考信息 -->