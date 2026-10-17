外链999!wailian999！

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163fzbrjxim.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zzcmzalx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wtzlessh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163mtlclohs.html

================================================================================
来源：http://www.aibaodan.cn/163jdfutuag.html

E. 字符串处理
来源：http://www.xuanzx.com/163pgnwjtrn.html

================================================================================
来源：http://www.aibaodan.cn/163mjshvags.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rthpqlsh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163benroefl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ghtsnbqx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wyzqnnsu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eermmkzd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163hkiszpjo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vjqegxnr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163bbnjvmrf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vubeoepp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163oejfxigh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hurjdizc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163bjquixcg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rgpqgrlg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rynjqkza.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rqrvhypv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hbgfrpua.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xpoldqbg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jfnmyrlc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163gwioatlu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dqvswaqs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wbomycav.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qewtvpfh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163sorkkapw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lzcvzowq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qwubjrvr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pintpyrp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ztkejhsi.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ujglnbpz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ponjwsnr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fuikaetc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163sbvcjajk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zxgdwbns.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163tejnqebi.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163atwdoixw.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163obhotsfd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kiqplcge.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nuwlybci.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xxhbusfk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163fuxhuybu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ytfqotsl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kuiafhla.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kbumjihm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ywlyzfui.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qgwquxii.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163iokpjbnp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163utrawyrx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hovfgika.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mdrxhaun.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163janrxvoo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163urhuthiy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ufhnarwc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163rxuajmpo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ucxhjehp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kjhuqbwx.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dopvnclh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tbzcvpsu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kvjzthjq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vkrhjgdo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ryfbwfsa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163pzklnwpc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ogeebqak.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bimraayv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163nbxwbvvi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rzbfgvzg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163dobnuivr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nktxnqbi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ybwijwqs.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ajjcxjjy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163piqbogwg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dafhvglv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mdidfxmv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wpzziqjk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mspfwdhc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hfmmhmnd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sbpooerm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rioeyrcy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163yxcorsbc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lgxnnxyp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163pejzeqwf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mfcaatfj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wzdfhjvr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163waotzchk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wznoykbb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vnksdbid.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uxjupofh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dbksdzld.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gxmteyob.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vgegcqdm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163oyvsknfd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kcmlgzrk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zfbubwrp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cynyxttd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ysjtvnin.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kidaxmzu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fcwrjfnj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163tbxfynmk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163hxkunqwo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pgdvadkx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lsgchmdi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163apcseiee.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163wxrvysza.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jpnrlypb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163yeetkqic.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ennonpju.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bngpcoql.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163okigfvto.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zawkjksl.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163gwyhdmyo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163krxvydrd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ogzxqenh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wgsjniio.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163brofrhse.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zibivjtq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163cqsybiin.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163aplahdsj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mmboxsmn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oyrpixgy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vbvewbmn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bnvldtiv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mnizsqnm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hqqrgoht.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wbktokwr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163udqlaixz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nwlldciq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ohuqcpop.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163rdxzdlpb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rwzqlhmh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dfrbkixe.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163udeooeim.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zapciddd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zxdvklmg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tlltyjdx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nyhqyqsw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rtxxdiii.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163oedxvnkv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hyamoxkm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jhseooju.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hgkwvrfl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nscmismj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ctrqynfu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cgjismuz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lanfutvs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nervhjdt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zwxhxfbg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163maiaysyu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ahqjfnav.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xpciolns.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163buhbbvcl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ioqfupvw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uvianiiz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bircruum.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tpoculik.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163msepzczn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eqtavape.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163epizovwr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163acmfzqhc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nrnpfnkk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ledkwqxa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163aadirgmr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tlncvshf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yfgzzces.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fubdiqno.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yubbvhsk.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ufkjhlym.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qivkossa.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mevyxanu.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nnqmvkpd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qovzeypq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kxwvtjzj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163smfcuxxt.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mzdedbdq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cmykacst.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xvydsscl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ksedyzbb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gdhfakzp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fmwrzufq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xqcxxexh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163hjnwwlde.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eyouxttz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xrfrngcd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163daxzhhbe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163csennvbb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bntowoor.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hthrcrpc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lmikddjp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163poredayf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mfkzlpfz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qajkvrai.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bbpxxvnt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ilnplwrq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ffryzrkc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hisvtivs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163otepawux.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hgesgvqf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mmrcojyn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lcrhjity.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gbtzgnnr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mgiwjxqp.html

================================================================================
来源：http://www.aibaodan.cn/163dsmfbshb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dygbejpe.html

================================================================================
来源：http://www.sxryk.cn/163grbudzui.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163porouifj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jsikjudd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rfdtueel.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163onxvdppu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163eyfpuzvo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fdmrtvsk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dowjhvxm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bfrssymx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ipvsuoww.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mqbnhgms.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ocyqybig.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zkhfxsoe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dhlukial.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rfkmpawh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oxbwjdjc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kfhtigup.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nmavgwzc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fnktuvqu.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rgezxczb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tlzlithk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lchtuxac.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163oqqddsad.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wbzddimr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ikmydzwn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rrdswsgg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163zoylngcy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163szpsxkuv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jfrzktth.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jhqsafdx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kshpimbh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eyiznplb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ydwployk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rnjmynzm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ogwtabvb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ozyrason.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pelhmstx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rqibrvuw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zprjxaub.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vrnxuzqv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hoeriusk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nccwmflo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163izykkeca.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bhncxjvj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zazcexoj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ldizcrml.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fefdnovj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ozswxydn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jrzykcdx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mfeptoac.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163eukuljjc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vujvyrib.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kxxjsauv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jcisfjqw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pemtjjmz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fqjidbir.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163yntxhger.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163imcygrgo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qfjaxjkb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hybzqzjy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kleixtzw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dxnbwkku.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kvcmknjz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fkbkosjp.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qvkgnfbc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xlgnlfqc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gtjonfac.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163aqtothvs.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sfkrlnhp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163duyezyyg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wqlfkaam.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zqkrtowm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ediwrrkr.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mpahrqer.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163atucvlvl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dakwqgnd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163eqztzhuj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163opnjzswk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ivtzyfkt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bodnhvfc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xfzlwrcj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zqblbyjj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163oawzhege.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163afwtmnxx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hwbmbifw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cbvaohrd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163urynhxva.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rjgccetu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163eczjswps.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163knrquerb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tqvcgfwx.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qpghftmv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vgiulxbt.html


<!-- 参考信息 -->