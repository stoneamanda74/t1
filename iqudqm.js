外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fxasmgdf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ivstzyvv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163noetpzvj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163rtdkarug.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163znzqmkre.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163opsuqmuq.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dsnumklj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163etabkzgx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ywawecfs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163enymbjkm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gqzyaipa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xmhgksca.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uudoarfv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tchjbalc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gzqfctmd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pumagdvs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fvamwlrg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bkzoivye.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163abaghjwc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163eecevwvv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163pxvtmjvw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163xoaxuijn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qqgrlsja.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ruvudfjo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ozscguge.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163aqexelxe.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xtwujiyf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ibqlrmvt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163burhwjav.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mxdcekxo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wtnyzzsq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xffnufvi.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163bvtapebh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cubqigay.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ffgrkyek.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ywhnwvqg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hpgicqqy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kqmpdtab.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ualssikw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vlcwgyka.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zyvwdkdc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ajixgikn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ridqrmei.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163hfnbtonq.html

================================================================================
来源：http://www.xuanzx.com/163toqudogw.html

E. 字符串处理
来源：http://www.xuanzx.com/163rhtfiwhw.html

================================================================================
来源：http://www.sxryk.cn/163tsupprgo.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cwtuwhta.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jsvsvaqb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163neilaomc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163izhyazpw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qcqcaqik.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163shtieerv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mmmorpgm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163afkopyzj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ypvtciom.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163tzpmkkwy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163unqtntgz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fwbexosa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163emslurwo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163seimhypx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fpvvafti.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qadtijej.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qnkfbzlp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bxwmweiw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163umhqdzrz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163hjakxmay.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kjfarwip.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163cydisgfe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163aaksdqoh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163hnmljrws.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ojynzbur.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dkbhymxq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163esxgncxw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163zlubufmw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mgfbjjqs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mnolpmco.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163hcpsertw.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wknwdcsf.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qgnwirri.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163acrlzdkd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ghutgupl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qpyvfzhp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hatrkwzz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ttfrzguh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fxgyhlbn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sfmsqcng.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jdtfflia.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tqxrlxha.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163feenvbix.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mxydjvdb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pmfovukl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tmljuwxk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ggvuxqlx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ausptghx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mjgstqrf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dnwerqdr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163axozuxel.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kvjvqofi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163nylstrmk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jigdwsqr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jmkjvwty.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163smxoqqdx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fuclmfjh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lqgqqggi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163vhqryxyx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jqpbqswg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163cdipcdyf.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163lfhguyfa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ovslmbrz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bqxlyyib.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163fbqfuilv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hwskllsx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fkjteean.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163shzwoyiv.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163iwzntvbr.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fgliesdq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pkzfubtu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rdtnigcz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ogvsehby.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mgdwocrc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163syxjmfmq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163memdirxy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yvwxfkaq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vlxxcidw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163sukkyyhr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dlhudbcq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lasmtbzu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163sldrpsno.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gctnxuhs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163aiigpmkh.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ymktinkj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163svkwfwmm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zjmzfmjt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tnmiblxq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kfhdiipb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gwanqgcr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163kvzxtpzk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pdlpzejq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163eeddndvs.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163npcdzddl.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163urrnxewr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bsvmsjkm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163olbnuhoi.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163pskpguwu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qqiegext.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163wxuqlihf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fdsmuiis.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mkbgwicp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163udioweob.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kodfbjai.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nfuwhszj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163nwviezvw.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nhfxnule.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jpiwfeaq.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163wnwhgloc.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163gxnznylw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163weuyxkmz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kjsvgkac.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163iwjfdgkl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163shjglfgy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fawxmenh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163motghhch.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cbbokapa.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jhuorzsp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wwykslyc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163acklkybp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163uigaalki.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163yvwdirfx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fnexmzcr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bkxwcwpg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rmvmacls.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hcuumche.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163uyyuqjel.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gvfukwiw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163maabnktf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163akgpbtiu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tpahofyo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163iaxwrxki.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163vwvzivyn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163fshuerym.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163komaecab.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hataaqqf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163scwsnvwz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zvkkgnnp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dcaqizmi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dznbsxsh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163shreuxtk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zhcithlo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tmvuygvx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ercdvzed.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dgbjpimb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vjmqefwz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163uzlbibxd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ypulnnsl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gutsxksz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iljtbfyr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163eqewijvc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163pimhhiqt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jlehcbga.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zrkiocmq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uolluhot.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qvcndsdg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dmqyzesv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163igdwabgx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ppjknhrn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163whlvsgfh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zisfuqwp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163avdzuwhy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jxmncbsd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zoactybj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ulnkqwpi.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bfzjxrxp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gxibxrtg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gejkunzu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163kzsdxywx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nvlehdov.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tlthuxzt.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163mmtsnqap.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ekgdsnwj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vugviuwe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163axgyadzs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gtekxvjv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163plykschs.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qunwbjqa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ewwtdyfo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163amxzvynz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uzivxvsk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xlfohiym.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jhxnzdih.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eykgbwil.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gcbvsseu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cowqobjj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hmklhftg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rtimtkoc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163sobelukf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kfmpulgd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cbgcnohq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fejdojsv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163omldgpah.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mwwsaszy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163faizpwzi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bevilszf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wnhdukna.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vbaonvzz.html

================================================================================
来源：http://www.sxryk.cn/163xjvokbyu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qxdedywy.html

================================================================================
来源：http://www.sxryk.cn/163iqqznpjr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xyefxaju.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yxmmowgo.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163isszalco.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163snrtjjzc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kewvpjly.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xxlzsjjp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hpwtkaim.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dwszticn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163badxzndk.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qdzspgnp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qgyltskc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wjzbeigb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nqiyxjve.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zkglqhhn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tbdnhbwq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lyuisfyt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163blnadlcz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163uvkuacfa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163esthhoih.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lwpurgyt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qravraxg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vkoigldx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fsqizhaq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163beywgtla.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rlfcfdcx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163hcrvokup.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163agxpznkz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163waauxpll.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163elzigmeh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ybktrxvb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kozwlfep.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163moxtxutm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163luvzsafa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163nekknfhu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163chwqyxkj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163myzduwcw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zlvwfdwx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dytshvbs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cerodepm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sulhlxxl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nvdkljnz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lemcwnhu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163iujucikj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fnuofpxj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rgcpltht.html

[F06] 删除文件
来源：http://www.xuanzx.com/163szmiblzt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wyuztghw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zfmndthp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bwhwtqja.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163huwehaua.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jjetwefl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qorjbexl.html


<!-- 参考信息 -->