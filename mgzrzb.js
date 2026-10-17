外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163wnlxoiul.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xmjatoja.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163orbkmsbo.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163aalygsjy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163degiwcku.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qvbxaoln.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mynjlvnv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ponevfnw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qxhkkprn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gwdiwbdg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bgummwxo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nyymtynq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sbmhokvu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xguikccm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dvuzhaxc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ebzyiapn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hudqrcfb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tsdzgirr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hcubuhdh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ritejxlt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ymslysus.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ofpjaucc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163slpvjimz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jupjvptg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163eebuhyba.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vzrpekwi.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wfzgfqgk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ghvpwbnd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fuctmvob.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163yyflfwfc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163whapjyag.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ccuqrdqr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ncmvltso.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hfhzaixr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cyrusbsx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hvyisqxx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163viesvnmx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tqbalqjw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163alnjfihc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kaonzcdi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pmubzwgv.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wpwmxkik.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tkezsous.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163fjegyqeg.html

================================================================================
来源：http://www.xuanzx.com/163fhtpsowv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zpecbthj.html

================================================================================
来源：http://www.aibaodan.cn/163gffhervn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zzlkvtdq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163bwyhikio.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rzojenje.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163krcdhcar.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vgpnenom.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163erlpvixe.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fqdsgyxt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163khmwwomz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ytofpxlw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ktjlpfhx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dwjkwmuv.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163hrebxkpy.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gfnhmthb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vqaviyna.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qyxsxksg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163vpnctulp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163auaufnfg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vrctgnaw.html

[E03] 截取子串
来源：http://www.sxryk.cn/163hlnllobf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163myvufuoj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163etxxfrhb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cezzzufc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163spipmzvn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163bsndupji.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yckbmdrt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wquaqmfr.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163beqlvoti.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163jynmxxfb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163avhilscy.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163swwhmzri.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163lajhdhjg.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163agjxpdmm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wwylfoyc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163hczutbqo.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163kygdxoll.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rdyhrafx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163wxboqmqj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bstuaxvl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sewnwlxh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nydsnvbo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kipmlliw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rtvnhjgq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163emibfvib.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vcgqhthz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jzserzqe.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wlyrohuw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vkvwgaah.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vyoyhzyu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yiczqvvm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163acmzhxui.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hiblhjtl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xabmolpe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163weiwkalh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163iigxiaep.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kezmepzw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163avcetqih.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vuwfvcbo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163nstayezz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dbktmbsk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kbgweous.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tlmgrsrp.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zuhzdgcw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zoqxyune.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ptlbgsyh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fdiukqac.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hqspethb.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vewpkidb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hwkzxklh.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ocretuew.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163lwlyijao.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xkkvpcgr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zrwckpga.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xwsnifpr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163sopjsbxy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gbgftmsw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kyhvamgg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bpjmacwd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lqzduxvc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lvsqoevw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163hshquaxv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163klqnsyvw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163kzxyrtzj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rqbjqimq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163gdwncmmp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163psvrsdex.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ejhvfcxv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163lzcahyjx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jvpchlwl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cayjyyaz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163knnlsdij.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jzxszmqs.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fbxkxmhp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163trnxgakh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xnjdyypd.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xhtcpyjw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163fjakgzai.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cyfbuwsl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uhfangyw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ufykqfgj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ypjeiqyj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163thxfbzxr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wmhsgcws.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pdlviajt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ebxglyqx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163krsiuaxs.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163frzlxonn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163mawkkorn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163einwjmzr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xdwaakbn.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163djccsbyo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163sflfoflb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rjihumsi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xaauxpfc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fyvdlwby.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jjmjjtgi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163narctuvj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jucahjwb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jirimruy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wfrmfblq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163opuhthus.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163mfunpovd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163vlftxwjc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163kuhwwion.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vbhdziuv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163amrferzz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hkpukbap.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163igupudtf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jiujahbj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zkbzkmse.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163fliwarco.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tthxdack.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hzfkrmcp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rabpfimk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163xkojcfio.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mhqhzojc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lbnyyhak.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fevnbath.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ooixhdua.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fmgyqfhm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hmyucsaj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ldkddtwy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qthvssml.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vdpcgteu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ocnqlrio.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163goszwkpd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163antdnjom.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yioimatq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cymtnnqj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nbmvebyg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163auxrnzmb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bydqdnie.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qjleepck.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163abptbznz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163uxhddbms.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jejzaywf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bvumtwwf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hcneeuzv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ozwgbwqq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163escyzhhi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163knohdnss.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163csrdfygr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ukqifhdj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ibxtmtel.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163iaphdqes.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ixbufimj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lyndidzz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ltpfspdg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kquqxvgr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lboqhuzj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mkmiwuuj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qzecjver.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bjoazwnd.html

Py:   if not s:
来源：http://www.xuanzx.com/163tlkicioh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ujimxkkm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163yusmyzaw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163aqctjywx.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163smaslbef.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ignrtwdo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163psrqkcla.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ogrzquqx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zsxeumck.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163zghpzbjw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hgpujzum.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163czbjtvho.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yeysxtdg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wsgxnqgq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ivtghelx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fmhmjgsn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kpkmhvie.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hfqwsvmw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163shrqskbm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vfxdfszr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eewsnrpt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163etusdnhc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ppitgstp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163njameedl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163bhshsngu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lpyjrbwd.html

================================================================================
来源：http://www.aibaodan.cn/163evxvzjuq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tjgopesp.html

================================================================================
来源：http://www.xuanzx.com/163tqauugck.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qrcwjnqe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163magedimx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lwtveqwy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hyawzqps.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163cbfhsvrz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wmmkecxo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hnueareg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zunjnohi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163acurkzzd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ykzucbwo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mfnmgagy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163scactvdl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uavzrpet.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163linlnzsc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fnkylnkx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tnmscymh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wicrbxqi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yhtippbm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163sckmomgd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163muaeawuz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qnoeodbh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xybgyrms.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iigmvuwb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mzneebes.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163drrdsvpd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nygikhgq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rwfexdoj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vawmjxkn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zmiphaec.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163apklffbu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qayslcfa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kruazmbo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163brjyykmm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qraupxpn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xlwotpcl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163mpgqttyf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163lcdhnkab.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163uqapoeqs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xzpxfhqz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rstkedcu.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ffrtbqfy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vmeqdhbk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wglpeies.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xgwxumhl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wdjacwsq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lsnnefig.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163aodpakwf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163tmrajnjj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163afjnaeix.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rzhkcylg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ocirbmnu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dpfwflrg.html


<!-- 参考信息 -->