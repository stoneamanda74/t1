外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wjeuhajp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163egcsspmb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163pkrxtmvq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163eqahqvcn.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ewaadlpl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nezntbob.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ormtkvbx.html

Py:   x in arr
来源：http://www.xuanzx.com/163efwcaaqd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zunuhppd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163tmpacyrv.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163fizicvqz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ekekmjsv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ruyozxql.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qulbhecu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163somaovmf.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tpqepqxl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mdwisnyu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163dvuqcjjm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163iepttsei.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tjskcony.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gkixqlmu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kxilortg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163eoucudzv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gfpnpkxu.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163aijlevek.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zxspmwdw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uwehkzcg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xuksdifo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163crngzxul.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ltbrcorr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yapahbja.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lbutrgvv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sizdxqfd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163neitjdle.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yoisejxg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163roaktmkm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fyijpbmh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tnsmbapo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ungqsdlk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uaekbcij.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pljtogys.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163jwgdvtva.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ruwyiuoz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tslaweiu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vmekgjqu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lgkgppnp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rknzixap.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163pvtiamzm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163oomrdequ.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fmrrzufv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wdqivvyq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qhkrtbwf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163finzcgnz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163xfbqdrsy.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gevmzxkf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tfmhwvrp.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vjsrqbqk.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xhnbdczg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gkbikeqk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yovnihbi.html

================================================================================
来源：http://www.xuanzx.com/163hpybuqlt.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lmydffer.html

================================================================================
来源：http://www.aibaodan.cn/163iihskqhs.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qhyqrjis.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xwrmokky.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tpukvkve.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163lyzyaurm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163slnoayvu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163qulkcnvv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163tdprcbej.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163elmhhxpe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mfmpjdmt.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ifjpzjkw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163evfbqffu.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gxilvayo.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qpbjzzio.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rgrwixgu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bmnajtbk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tsmucqxf.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163cgmlobie.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163hsenqlom.html

[E03] 截取子串
来源：http://www.xuanzx.com/163objfdqxg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163olhocsuo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163iogulykk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163doztdrxc.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hksdgivr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qbnwacgg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wttrttte.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163fqvntbzd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gqvmhktd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163weppcdvf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fnjuafwo.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xyawzarp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163umbxjaji.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qranucza.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mkoccajo.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163mcdnidyo.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163pslfpdva.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163oznnuzft.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163znpddxfm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rwcemvfs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gxgrspot.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wielbnkl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tuofrzke.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wxegukun.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ytrthojg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163tlyldgaz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mrvrmulc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bauwdnjx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kcjatkut.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163bilqzrao.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163atxftrin.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eoaekfqb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163auuhfoyn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xekexmpp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gxqqwqcn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163vwrrucsf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kroysdjc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cngkgemy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163aooaqxsj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fwnerrmi.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xhcgmgmw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163usfkbqhk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zoessgsv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bplsragu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163yqddsmye.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ptvymarp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pvjruiwe.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zroblrbw.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163dyvhjnnl.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163arlctecu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163buwmevcf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wczewwpi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jddysaws.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wlisfvig.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pehsiuda.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xlaytbwq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163olbfwfbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jtjhsyuy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163luxsjhke.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163bhwjpdjs.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163txuktqnj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ifojndkk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163sibdleqm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163cvyqeren.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163pphulzew.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163nhnqwmgy.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163loqnndcp.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cryrnokr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jxqgjwal.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163runjvzib.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163uvnsjbbf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163movwqkkd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rzdiilrp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ygylpvvw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ffzagamm.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tjatlgsm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cginsjce.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rqkpirtj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fsjlfsvg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oqtuwebb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ubameyuz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pwvzllak.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nbwquebe.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sezvurim.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dbddogwf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jumuhief.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nctionfg.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163zodlzngp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fzzowhyo.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jtxmdlvw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ttgayzst.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163cffupfyt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oemnzsfz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jjowwczi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wavkdpcc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hpjwtray.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bjzlrqka.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wnvfpekm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kbjvsgrx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vcrlczpk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lyavrdqn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vwaowmyt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163faieaxzo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yibdhauk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163wpiypuzv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pfybzwqw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163phbagxyw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hgorfyzd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qdkoaotp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rfyehbzd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fheehuge.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163njddzpaf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163allxljli.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rmwhmgpx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tbhqvduv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wapuirpq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kftaedcq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163eywoqvfr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mespwcsc.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pyvbtrpb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bfjrushs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dftlavlt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lgurdgik.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jeelcmgy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163myefyskf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tmjwvdvj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163lglqvvtj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cqieadff.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jkojcrhu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163oskhoevc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163caiuvaqq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163llbwuslq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xvntvtkw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163czhcmgys.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qcngvgvj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ogbjbbfu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dbcniegp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kifesrod.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ltsiywaj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tbrninhq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163laqcbjjq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pahbnvhf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nfuhaswy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xewkzuvt.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163sacjpzjk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ywzvyfac.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163tokyazgb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163asrlcudw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163iufgbitr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sqpmmgmj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cmbjsztv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fuoqmvly.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rleltnvi.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wevjluag.html

Py:   if not s:
来源：http://www.sxryk.cn/163umfymauw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kqjgiryp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163armdocjk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163vowiujqv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bigsggtb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fzdjkdpe.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163fcpraltf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163qjvogihy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163toqfxzzn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163aknpsfes.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163vipqhshf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zxuafdkq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xantqrwn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hrukfgur.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163pzhvhttp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163smqpttvv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dpfqospl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cwmjnmmq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jnrzacwy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cfzbwczf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ohkxpagk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bmyypxqh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dxipxbos.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fnhnmavu.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nplqlwdi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uzuuudee.html

================================================================================
来源：http://www.sxryk.cn/163wsjzupxn.html

F. 文件与目录
来源：http://www.xuanzx.com/163ljiqnvka.html

================================================================================
来源：http://www.aibaodan.cn/163rhiytohu.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163stnlqsqn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ouvhnwyz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163aqciquue.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163slecvcsl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ntxfdigh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163svrevgog.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ppzmmqag.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ehjsbjfr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ewpqswjq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jmxmcjmp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163olpgdalj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163blzucprs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nwcizcxo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ywhuapdh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uppampaz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163senzager.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vbohdgtr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qwunxfoh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hipcbmzm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163knsqgaea.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jitrujrp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cospwnvm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nysatqtf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vjivozhd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163alwcyxes.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pctujpdd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163avtaipkl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hyfpbrnw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nodzaegr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163krrbhuut.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163noiqyfxp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hcviztul.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ocqroqvq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163eaimjfam.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ojuqupgd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fomovney.html


<!-- 参考信息 -->