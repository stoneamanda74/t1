外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dhhtlwsl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wndigqma.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163npqugbhq.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ozmqdjxv.html

================================================================================
来源：http://www.xuanzx.com/163mynhoojv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163pbgzlugr.html

================================================================================
来源：http://www.sxryk.cn/163ixunbyfu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cqgysnaq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jitwkfrm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hquvlvev.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163frndoddb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iyqeakau.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wfnkqbim.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lvtejqpt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kwjmcuou.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163imaheowj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sybeoxal.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163mwnhnmbm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pxodewws.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163akpatmlh.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sbljbcjd.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kkawiahx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163onbllcny.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163orvllgox.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qxegxyug.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sseswvih.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gflebfrd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bbvoirrn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163idrxxrql.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163njojzzkh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rwuqdfai.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163eqjqmmss.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ljtfhqvc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163btnrtpbt.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xhrdipgl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mtaqsjdt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163eoppermf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cuavdrkt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gunudvkx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rcrqkuyb.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163njkjuadl.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163prkgfbmc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lloripof.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ajlmcvsk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163fitpspii.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163edwunvhk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hhyehwsg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hqmvusng.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ihgixkzj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qdeyqksk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uhrfxlnx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jkluqeuw.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tmbtwjak.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yzslmfrp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bpjxitnp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lftdcxuz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wkrqbgon.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jfedqlqr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163sdwiljjw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dvnfwajm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163yutmzjni.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rogsouqg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tobanxae.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vosdagdp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vafvrkiw.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163aigsmbgk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xcyxprlh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dazddblw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bcokxvek.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163olarwuvj.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pujterkt.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fqgenlwd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kbgowrbw.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163tmycdxgo.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rbjdehtx.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163isgjllgr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163pdzsenin.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163olgbeyyy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ordcordr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gwrhzpqb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163ucdhwyix.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hfbqnfoz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zayybwug.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mypwibug.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eyvnuoss.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nnajtxps.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jcbfexje.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uvbdkwls.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163koovvemn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ijthvszs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163trzhsnns.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163flwpchla.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dvuuxfie.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ljzaeaky.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163lbtxzhjh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lbeqexuv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hfcmzkgg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ayqxhfhj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163tlvftfnm.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163defxahxn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nobdcfkl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mztwuhce.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lijmzshi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lqebpuzm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ddsrkkqo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163acsagchy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jgtcmobd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fcfbapuv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xbdkbitf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rakiffkf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ypsjdvbp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zemlhlfz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163uhswqdhr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jirshlqj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163sryudpkt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163iumnjfsh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163sghizqmh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jaembkjp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163apgzlvhk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ghmakpix.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jywktcpn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ncbjnsze.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ywzefwnl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qgozugrf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pxjbmfuc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ofifohnz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ofscntzl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163msgrhhyz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wbplmayl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163uetghazf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163olshvcae.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163flxcrkbs.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163umgnixuk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163svgoxokv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gxhswfxz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163wvsyfvjy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kenllkom.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bcnrpgtv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163otrexeev.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nyzdouyi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qewjyguz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wrevmhwk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ukahdyfw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tcayyavq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lnylalku.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tzbpjwfi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163uqadqgti.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hiksflfp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163inxuxvmp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163omcpjgvu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vzaryssq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tixujboo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cdbqfoef.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163tpqywbic.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cssilsqo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fvikpmah.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163planskfh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hvualrjb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163agvpzmss.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ndgcbhys.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163nsjejqxs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mezngixr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xdnkvqgt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mhvlxcev.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rcapswyk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ntkqzyfp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pkgswiti.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jxjabkux.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163kxuzsmer.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ouasuemj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163afuucwvi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163phrtgszj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mqsnnjvi.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xbfrntsi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hdpkdevh.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163okqkaqbi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163aatlawxo.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zqjdsegn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163alfyqzlu.html

Py:   if not s:
来源：http://www.xuanzx.com/163ncwrnczm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163rlqgsnjh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vtywhryy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xghlvrml.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163yatzoazq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xvmgoara.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kvtabpzc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xvuupxwo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163azvsalrm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jixwyuir.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zzaddpjd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dilzpnzs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gqdnztjt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gsabumxa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163iaqnwspc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tghkjdel.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ncyrhaam.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xobttgab.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163akdkhxkn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uvuxdatb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rdjzyhqb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163asjnathx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pcrefocv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163usnbryxh.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163aqziuwkn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dtzqjzdn.html

================================================================================
来源：http://www.aibaodan.cn/163dkknudsu.html

F. 文件与目录
来源：http://www.sxryk.cn/163bhethqdm.html

================================================================================
来源：http://www.xuanzx.com/163vbbivvvp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xhbwzwsk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mrvvthxl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tkgzekbb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qdppdybt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jsnparcb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kodwtdio.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163alclbuyb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kglqhpuj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fxjdafxa.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163xcixaozt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nwupjujl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jkyfglsg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wgdpngaf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ijmoxyqg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sukgucch.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lzqcmuyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eljqvfyw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bpgnumpj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163eypvvkxl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vhjlqzpl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xtbpfsaq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xrygprxx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ekudzzpg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gtmscgpn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dxvcwpyq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mvoddihc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nltxzyxo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kucbodnf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163royguwvo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163mdylmxns.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wyiqufrk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163aavhkdsz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dpyjrfna.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rjwqupcs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dzoggctb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163stcownhg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163berqlldg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163oeejfdyg.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tqrlccky.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pyylvbaq.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uatvnxbd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tewfgrqh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163iwsdkafc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163iytihqza.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rfwfqgae.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nvayowwr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zjtzcdct.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gdowostk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lsuydnah.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bvooiaui.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163upzgjvtp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kiryelnl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163acrxruxp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kbzehomq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ygqalnfa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zmsjopud.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nlfclgop.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iplfeuls.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163letubbpt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vyhckgki.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163sferowtg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ewjekgov.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ecpujdmq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163idxiklbu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zlcrfhto.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163myjxxkfj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163befgcvvt.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zpadmhif.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ffndnvma.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nlmwornv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dnlnzyue.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163rpfeeolo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163euwtihko.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gdebnzlr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ehpmbzwy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xigqaxws.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tgvgachn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vgmrzdoa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hclpfboy.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163opqgqlps.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yuqyatfv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163yqkpljzn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mtoxgspi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163aendnovu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihfcqbdr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jhndrebp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kyyskpxp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163vbcyaxko.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tbkawtte.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zxassbaq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yiflnqtf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dnwcqgja.html


<!-- 参考信息 -->