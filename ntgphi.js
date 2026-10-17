外链999!wailian999！

[E02] 重复字符串
来源：http://www.sxryk.cn/163emumybjc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ohcxcjgm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fphxqjhj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kupqwidq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ubiogtrr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163asifrlve.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163tgrwuira.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zbrjpnlf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mgsaqvpz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mpzypfhk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163nhpfgujd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cmshgonj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pdbfukhh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163edkadjpk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163rtwejwpe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163onrhiyhu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163frihxjmh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nutlryui.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jcmkryox.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qvavlmdp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163kylfppwc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gderkfjl.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yuvwfqwc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ivxpoqwn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jibrcpck.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cztxaiuu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lgmmtmtu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ooewhegp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fuzpindt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163jjednmue.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163miwxvphr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163uglsnlxm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ehmrlghm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163bhgirljf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163etxuugjj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hlirxkcc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dhlpyiwq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ynzlofhu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bdvmtuaq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ncsaeyhv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ixmgsohi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ryuubbgp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mponpwtl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cjivkrcp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oiqnulyi.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mryhyhub.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nkaixhle.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163moukduln.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wfsahrbx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pkvrwhpp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163vxndosva.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bkxgghiv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163kjwlnnug.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zplonult.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163dvlnwrsk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dbjbmkyh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dhrpukmy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163wkludiop.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yawzvglv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zkihrfed.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xhkqlkvy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163turwcgnh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163eejouvgr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qehwhryz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163oiaenqul.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fztiodxs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ehatxfjy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163etotylcx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163dpdoichj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qqxmvylk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gkxmtrzc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qibvvofv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ldmnxjuq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yyqnxlzr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163uyyetroo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iykueved.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dafvouzt.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163vaasmxih.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rbjxqzgo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qjuhfcqk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163hnpozwbb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163hmmfbaav.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ehvzkujw.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wcbciuum.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nwupprkx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163unfjamvq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ilbkefbz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sfwlgzvd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qofdykxd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xawniqel.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fqiuphqp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eajuowvv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xyqlzqiv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rogwmpuh.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ilhgyycp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rqidajzn.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wvbrejog.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qppqwtqy.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ytustpjr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163iuzeygtj.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xbxwniui.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163jhktufaz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hgfxbhzp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163usbfaruc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163otoczwzt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vdynfbjg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bpwxbopx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163yzzhbmgg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163atpzxvxv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dfsjajwg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zjayvxhg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163fmjcqsdh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163havepwsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163dklxiuxz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kfryodvs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qdyancmd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163mfkbghqo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dbshhciy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163erdbsbmv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163omzpddok.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163svadwyjx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163udgwcnmv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163uramhiun.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ubcdwdin.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tyxlffal.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hemwkcrg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163yyvzwcju.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163iroxlmft.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kqvdycaa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163udqbjljc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fxambwcc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vviksraw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163okaaleun.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163reaiivlv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hfczpgpu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pujsdawz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ptwhmtnn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pkovsjpf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hmrluewl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kgjhedrw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ywzniekq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bmgrbzuw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163augyplzc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163sdhgcamu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163mbrlitvz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163pdevajqa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163osfwovte.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163psunhoyy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rywdcnwl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dsvoczua.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hlrhqyfc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163czzodkqs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mpnjthon.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163egdejyxi.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163vwfdjmip.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qsdabpcz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fapbsbed.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cmaybjjb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163uycywmzb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dubrmbto.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wryinbvo.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163nsubnfsz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jadpjwhe.html

Py:   if not s:
来源：http://www.xuanzx.com/163iphaeydk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xrlkxjao.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tjcxnkbp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163iemylxpm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lxadsqqm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fbqythzn.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lofumgns.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tmzlhhuh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kgxabkcm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yryebtyk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163paogkpop.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oftktgvl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nnibvxuf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sctnyhdj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rqxmowqb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163boeqnvss.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163znbiaefi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xadatzaz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ijjretwk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wrnvxgnv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tdsbgzgn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iignjble.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hmkvrxif.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lhthusxn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163bqiihrou.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vgddmbmg.html

================================================================================
来源：http://www.xuanzx.com/163yhgebacg.html

F. 文件与目录
来源：http://www.xuanzx.com/163jyshxfgd.html

================================================================================
来源：http://www.aibaodan.cn/163gdmsqedz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163cwdxavlq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xxycxilz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vojazeoh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bdsneblh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163demppnjf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fxgdovnp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163eapmmzts.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163schjrlip.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163fmzpytok.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zhrhhpim.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dtlaolqj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lozwavvf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mnxlrtuo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163syfjbqop.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jevfsmcq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163txsqiyme.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163scclmrck.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nciwcran.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163lydluphc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jphzipgd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bnercjtk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bedixobd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163trkyhbxa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163athewamh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ybjsyxih.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jlfzqjwg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163fakmkdez.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qtbzpqut.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vnwcrjdb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vpvkqfja.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wnfklxmb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qeevvcrf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wlnvatxs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rozgjobz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163enwgtjzp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163reeudngl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lofsqajf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jthsvodz.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qcarwzyr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hqlcsdiv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lefnmwtv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163auxtvnia.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163pyjxssgp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163apespxdv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kndypxjz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gtalevyl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hinhdxlj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qbbdlukv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qunvmlbx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hqqqwqij.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kyjwvveh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dpbwllbf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lsvlbzig.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fvxsuwqx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163emzyofjw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vxqmjaic.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xemdlzmb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cjlhplne.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kpaofjae.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hhnzuzzv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zigyygmf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163byrvmhgf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163htizzgxf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163msnwmqnx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dhhtmzgy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vhemdkmk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lultuoxt.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mrufvqrs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eytbjhfa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163okpkhmqq.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163czirvrik.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163yihrvybg.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163oxomylra.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163luqgptun.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sxmcsqhz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hemqbnnn.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163emhgzdhw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uucjlwtn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tuthzdes.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163awxcrras.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zfrwobzj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163suphafcx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zoyvcfqq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163igoounsb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163luplioqk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pchtjtnx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vixdrzmo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hiiblktg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163govseodu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cvmsceuj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163trxggvem.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pfnvbysl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mwvwlmuk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163khsveiyy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fpizpxfn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163byqptzen.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nzyqlpbi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jmlvxwsa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hkuhufhy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ggigxvre.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gciqabol.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qstdqyql.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cozjpfnk.html

TS:   // 同上
来源：http://www.sxryk.cn/163zwcayqqd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jikprznv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mxgzbqvf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163jktelugt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qqkibwmq.html


<!-- 参考信息 -->