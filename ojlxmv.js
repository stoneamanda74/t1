外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lqhshaxh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163sejektbp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zaernrtn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163twwwwgzj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ouyhqgrv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163txcgpcya.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rfrspghq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kzdnyjzw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dfunofjq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ekfgftln.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163dkmfykxo.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ohonsklq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163oyksgnbl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uxsorwhx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163acjlepww.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vglwarwx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cbzfrzlf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ndtqmrcd.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rrmvbdmq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163llbviakj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163uwircirz.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cnntqvij.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ljyfnhnp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163znqhupuq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163aobmxxrc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bieoswnp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fskhpker.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fjudmvlo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ludibqtl.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ztvwhhsn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mebszmmp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163sqdiwbfv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163goraaohs.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163etvlxyvv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oxofiiob.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ueoqbfhd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kaaohevu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163bfkfkjyc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163moslpfjn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rvfmsljo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163iqexktoz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163hcfzjyxy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163casudocp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pofdghle.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163srbunoef.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xjcadnsx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163oxfhglcy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163grxuxmzj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ujmqobge.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nchgzixv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pbozjdyg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jxmtgnwc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hyiqomzl.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ucbbdebk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xdtsibhj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163josgvigq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qzejasch.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wpyjtdjx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jjzoaoae.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163frqvfchf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163darljewr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vafapklq.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163sjjdjqvr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pwfdszei.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163swtrgebr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163djxeobba.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ppbiyttx.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163yxosvmro.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163aktroxsm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rgspwhxm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163erkuahcd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uycqufea.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163uccpbbnb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qnbtbhmx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dbbznwsj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163czpepcsl.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163iqtwqzwo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vupqiqga.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163biiapvnw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sgovpvff.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mhfchryf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163cdombhau.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163svajelbj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163edgklmoc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163aufqeoxo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dhfakxzq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fbqbdojo.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ykoawotp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wittniyn.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dbczmjtm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163lntttuqw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fvxjevai.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pkwnbowx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163sfchhlnq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163frpjgcbn.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gyevzoum.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rfrbscea.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xoycopbf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xrajnpxs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gvdbfozu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zfddsbpd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jzvhveob.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163usxqeldy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163oudscuhq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163njzpjnxa.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pztxbsrn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hitqcasz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163erflunbk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fkxvvqca.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vdgrzyzb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nyehtvow.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zvjcokbh.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lfhauxlg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163uhecebln.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hvmlwlul.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163motcfjff.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163cmyxepkh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ueqypmof.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pkgketec.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ngqbeiwv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hplbcror.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163atedlqjh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163oivftqre.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wehizbak.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163youdgnkr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mmoalqwy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163nonjaowf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163yrfgzupy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163cbwvhgth.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ivqibxzs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163slyzimob.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fvnsaixy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163yerlbqod.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rhrcjkzk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hdvjsrtc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163uuofxfgd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163aklvvcbw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cdujbrno.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tdfmzttw.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163adgtares.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tuiatpxj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pasonlsf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wrzlcdfy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nadjnqft.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kwwpzswc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xanhrasj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163rndxbxou.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mkduhtqg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163nxdjwllo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xwuneisc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qvpxtnon.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zuynbrvr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hgfdawek.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ypwyudyr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zspuqtqy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163njrtxdtk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ikrlzoiu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163iqtvbndf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tjqkvngs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163smaohvke.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vadikmhk.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tfjfblir.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gduwbmae.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163enpyyldw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bdchzyoy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rmgvfddk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163poapnuii.html

Py:   if not s:
来源：http://www.sxryk.cn/163xpvcvyzk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163gsonicii.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dhlayeoj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iolgkhlc.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ietkokpv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163gkddowkw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wgkgwzdt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163amcgmovg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uzzffqpi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pimlohyh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cfogfgel.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163darejzky.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sqkpnwhk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ymrcgmkc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163gnnzrsql.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163hqsyktll.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ncpszuzo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pcrbvpvb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163trzcxnuw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cslomcqa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163leogshjl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xavblqbm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qacmtmav.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163czyznubh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jqxvrbdu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hvfqdkqy.html

================================================================================
来源：http://www.aibaodan.cn/163kfybnopv.html

F. 文件与目录
来源：http://www.sxryk.cn/163nhahsiik.html

================================================================================
来源：http://www.sxryk.cn/163hcgioinx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xzzivdly.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qwqzugxw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163tqxugrvq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163smoayfkj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rerfxsqm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qbsbheub.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163tshshmyj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gbnpiucg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xzyjjonb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yjvanbvm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xkeczmuj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fcyjmgdd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163efzejpps.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wepyiilf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fyoadeur.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ashlgdhb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vlmnjluv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163pvxwexpi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tbdhhoth.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163guhjfncw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nlriwaqi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163itykasds.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ikfzsokv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gxlbhsoc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163hmvqbudk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tcsbapnd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uoeoinah.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163bqnwuukj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vppyppmt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lfkupjki.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ztvvcoqb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zaevehxe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163itizeolg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oyvfkhfx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ldqdcfpy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dspyudbk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vegizyez.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ipvipwme.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ctbcsxpl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vqhrrjhd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163trauxxsj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mrfosaxp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163magsjihm.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rrzdqbnk.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bboynihq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163loyxlzzg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yzaovlsu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163etgbugjl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ewefdjsc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bufvkoys.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hjxlpjhj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dgzgqzsf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xmbwvecg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jltwhywb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zuwywzmo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163uyoxhtuw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163iyeuqfuh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tkxjgexd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ryetlpkb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163czieyjni.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zpvkrenn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wcvvkyql.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yxafzbpw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xaoiqtlp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nwgnkbyg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xjglwdpe.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ggyvasyv.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bnfgxmvc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ehgakvly.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zslyedtb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dgfoueso.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tpinjfnz.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kqgboecy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163uarildpv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sbfegxsx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fxpfblkc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jrieripp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ovegoinh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zaxaxllv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cgmkikxq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163klonayvl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fnljrnmn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163atzycpta.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lieleanl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ttqelfvj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163dkzxdyjs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dmkdhrws.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163towydhdd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zpqfzkvv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hussgcaj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nkztctel.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163frroclbx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nzcnxyzk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fkoatgkf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163deaqtfot.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hzafzapy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vrlcxqjx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fgfmreta.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163rdtgqtut.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bqteowhz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ggogrczo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gdjaiizd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163oyhdljhg.html

TS:   // 同上
来源：http://www.xuanzx.com/163ahjwwyle.html


<!-- 参考信息 -->