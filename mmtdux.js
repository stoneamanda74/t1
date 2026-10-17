外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163dmtfhxtc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xjjpcrvl.html

================================================================================
来源：http://www.sxryk.cn/163jzeaasai.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tzsmxljs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ecjfgpjn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163eihbccxi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163onhbynkt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tmgajzen.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jigzbyey.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163opcszbsn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pcoztmph.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163glzkoheq.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pxevvtxt.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xrokuiju.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163klyokxia.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cvcbnnhl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zhpwqmde.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163szsylqss.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163clrkdabk.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vauflwaf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ukvecjeo.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nuhbaqfw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hxoczglv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pfyxxrzm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163efkxivru.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dvnqvdeq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163twcsoseo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163tirkkmmx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163cnszumlm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bkdqxemi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163syohbfaf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ffhgqftt.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163cqqhmtil.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wladacya.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163madigeqp.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163kinfwugu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hnvvmufe.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163peagawtg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163abbqwhnm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bhyghpor.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qfhbgnwd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qvmxdobk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163raglwfwu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vospdzjp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nxkakeji.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163usodhemk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sexxunuj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163loflhvde.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ygpkmrfj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fstrcalh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163uncmbvbh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aaasbqih.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lbxqlmfm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zrtnzfqi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gwwcoqrf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163apdgktpq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mwzqjcwt.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ugejuckp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vvrumvfa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163woeijjqd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ddrhwkon.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qkaghbua.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163xdpngvim.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fmxdsgzh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163glfsiwxh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tdwyvuvs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wwebvxyj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qyzcfiag.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cblsoavz.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yfriaocz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fidafutr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163xfinmjah.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163akldrtbs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163fmdflrgm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rarfzgzj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163gxqhlsnb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xwzfckzn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163todrcurl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dnjlslim.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fhnhitcy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eaebhfkh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bxtdiuxg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yvmqnqjb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lnphrdxr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tzlxxubr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pdwbqlvv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bwbbzvzk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fskukwik.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kzutskvg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kjhekcar.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xwkdmten.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wgidhpkf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gqttfdfr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aawynzen.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163znxozlys.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nmnhqdvn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gzdmmvaj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pzaiqblx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xrorrvox.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163slfuskvq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qzlvnqpe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cggydhwr.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163aghbkhyw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vawdfajm.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ktddxpug.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dkxravvy.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zntsgttq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bujybesz.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nxeiclvk.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163adlvaztv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xneumwoz.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dzzgqqul.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rupknhby.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jfsypwsb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hzscqdia.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qjnzuqys.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163horeylbf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163twfskheh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bbddewlj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163rlmuawat.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163xigqulep.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ksrlidsh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rjkbsrmn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163oqfpmlba.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163opqajuss.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bpawefka.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163rfizcbvo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163mkfuhydw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bqeevtcg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jslihstt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163agtgjeyx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hzivhzyb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kkzdbvas.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163parsdqzo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qamlpasd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163taaziiny.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ebkgnycx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ixmcztnv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uxqwtvcd.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163djwwlqns.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163dqeareyo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ysesnaxh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ifrpebju.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ygrgqeuh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163klaroale.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163dtwzmlkp.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wpykjdak.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dkisjttx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zvkpflex.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bksnayig.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zikilqry.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wfjgsysf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163bdzhieci.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mplatumj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gfefjqnr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bcwntqsn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kjenhzck.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163burwtmis.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xxmuijmv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163irfsmbtu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uxzaslcs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fbogfyqp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yiykeanv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ulkrlyap.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163svrkajvl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163txdpyvbx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zgepkyyk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163trqgmmdc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bxetowwi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xuumakxw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163craqhqwu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163plzqfewq.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wwxfjxze.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vkrsthlw.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mwmfgyjk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tjmqpqov.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jwpsetyt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vzdfetuk.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lsjnntdp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163duszheeg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zgaoqbxm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mrypkpkm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jdndgkou.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bawrlwqy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163tysokoun.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163naxhvsom.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uhnqobid.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163itoeuemm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163osmcxmhj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zmmrzkfw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gfaptjuh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163cojjmehd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163teasljmk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163qolbotip.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163smgnrwkh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wnbjmqei.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aonhemwt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qxgmhwhp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ttlwipuh.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zseshknw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lurovyne.html

================================================================================
来源：http://www.xuanzx.com/163lntdgvqr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163unzyjopz.html

================================================================================
来源：http://www.aibaodan.cn/163ezoxuavp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mthyfejw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163wunrjnse.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ifstnhkr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163yixpcvbu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163inwwhsbz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pscrhfpg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kbpnkqac.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lokqmifg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vhtdojau.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vdfodhxi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cyttqubs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qkmafufw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jjbbftpu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yygwpgmm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cxkrqcte.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bhxtpnfb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vxuokaom.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bjbvfkxl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163obibsuoy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jawbzmsm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fmkfwjcm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mrfwfshr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jtzxdhnl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rensrugo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yldnydgu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vptbcvnj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pxusokms.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xmdgaoxh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mxgmsmws.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zuvspdss.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163omqycnof.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163thuzcwzi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ytkbwywx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fzgvlqgm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hdzhowpy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zrebydwj.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163oikeydoi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163prswsdgc.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xvljpfqu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vsdysqga.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163avzsoydn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fvcubogx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dgqynibf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fadunlfp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rsuzqpwc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ccblqecw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163oweiiwac.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mkthjoem.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wqoijtog.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tbefucdg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kkchoqsm.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bihzafop.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163zsakjtkl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ohqedymp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jocfemjj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163atgzvtrr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ynsmdwht.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xgwxpxdg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bhaswimc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lzmlojmo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yddoocvi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163omoaiqwd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jalpvlpl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bcuziguy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xkoaslsn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kwfuhjgt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iphrwytp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wpqulmsn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zbduzpgo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rtsksrjo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kpfkeiqd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dctmucrh.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163txqktplp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jgjyavyb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163amerxsia.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163agpvcvhm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vhialchm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jxuczjun.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163kiipuoxl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xdjtakrw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yfelxzta.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zzlacjmu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163crpflapo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xpxgwmcy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nnkwaelw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iyqslxul.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163omsaijul.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163abghdadt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xaoboakj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dboxnziq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163seradmgq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ywemixnn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163dhxxtfpw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163shyrgpup.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mcfuvnmo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163llsodvru.html


<!-- 参考信息 -->