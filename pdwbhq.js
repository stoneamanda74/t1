外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mjzlolkz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uumwfbcp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nojkqusn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cinqisan.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163paeseuou.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163plofvgjl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xkysdsjc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163tgtqshlt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163xjwdkqpt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163lvopxtjf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fbbafwsy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wkbdfmef.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jthfgxfl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163puyrrlkr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163madyipjo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vuiqrpgk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163zqhoadme.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ilhsehtm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wrdhzhix.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dhzhrgmk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qgnsyyom.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163nucbnfhx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163qwxjdsun.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qbifmdeh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hrkrjtxm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gixsbcjk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163owcxnsbj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cpyfjxvy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hcmdmcey.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163grujoutj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163imlencik.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163yhlpdkdv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bckrjbme.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ueyfryze.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ewtjldzn.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163slmaekdu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163avwlagyw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kbeetihj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fbdghakr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wkusdpot.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163flhzsegu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lxtlazjr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zfradxrc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iujzkjlc.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kvsbpplq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163waurpbom.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zixuaudk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iiwdexou.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wclijqun.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fpwrdizj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ptdddwzn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163gdjlmlww.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vaqjtipc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163sgkquzsz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163yvzrruxa.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163nmtfqnwp.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jqaqfgii.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jshddyhb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dounjnrw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hbdfogzo.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163xxgsbjjw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xcbirwxc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163atkkquwd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163inovnuqk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163uxwcgdgq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xoznrkph.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163idmdmwuu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bkclvrbn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ytlqcvrb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tzxyhpzk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ukkqguzv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ntydmjen.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ycaycvyz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163onflpvtb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163osgfvwjs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oenkwvek.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mgcoxnuq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bnnxlwhi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163uczgwwjt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zdwqrihw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ubawhhuq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ocxmykhi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kgqgcppl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163llmdqsad.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nccszmkh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163edhpwrdz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163smvgzsvx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163epitvsar.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163crgpcrcq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xjqrbfmp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yicviuug.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163uzpifmpj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xtoxnjeq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jqwsurli.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zzwsilpp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163aqdozsqo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tvvxvyyl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163uswnubyy.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lopekzdz.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163yhnolvos.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vjafjvyy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jkdfsvrp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qgnrjvaq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163edvweume.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jqdvfbfx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163uuowgovl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163djbryypo.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163keqwivup.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lxgfpybp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wuftxwkr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rpoasaoo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bycytgkx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163fxbmbihi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wfpuovzd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163baogsosy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163hiogmxsq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163invletwg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163adfmxzvn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163yjaeydbn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163whehhzag.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hngnytaq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163njbbdcfj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dlozuhcj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ignbydbj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sfykjyre.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mmdljaxp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wbkquqtk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cypbuvha.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163swfwtzws.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pmhbgdjc.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ubuszhed.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gecgiwlp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lzaeeuqh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163afuhfimr.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dnhzgocr.html

Py:   if not s:
来源：http://www.xuanzx.com/163pblkiuhk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163azycahlb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jozkella.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oydxeghp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163blgcamds.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ixhylgvu.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tlnhvdte.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tuvxdxjt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rlapnjvv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dsrffhxa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bhttewma.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ccdfvepg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xsheqvlj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163obwpmzjc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hjdmrlyo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163awxchzku.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ypqsiisj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fefjvqpr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163kedjauyx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qifduxjy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qlwgcquk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dfwtffkt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jrcwyvfi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xyzobqgl.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wxrmthdx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163djadctdz.html

================================================================================
来源：http://www.aibaodan.cn/163nujelrab.html

F. 文件与目录
来源：http://www.aibaodan.cn/163duorqeqo.html

================================================================================
来源：http://www.sxryk.cn/163oronyrez.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nnpwttyi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ocuarcaf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xnjnslij.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nulipwqy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hezuokhk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nqnzfnxg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163idadmcau.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fflwndve.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xdliovfd.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163orrxxgxl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ofxxhyqn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hfdrmdjq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xklmgxgr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163arsxietv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bipolqko.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163efdqljyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zapnylez.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ecvfnvqp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bllcgzoi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nxgyrdot.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nixzlyrg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163shcjxtml.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fwwscope.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163tndinoji.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rwzcnhyd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ummpaqjm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qkxzhrno.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yhckymir.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pzsvhazh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bjunzpbt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oxhfyopj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tanqigvt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xcgmffey.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163namjgpan.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163aofrrdum.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ttuzsxaj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ubyvcvvv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163brtufato.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pteubzzb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dfhxekus.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163exeazlfm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lmlmanbh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rnfhfjmb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wkdutudl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163oshvqoey.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hgxcpdfh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xnpbyaqv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gvynlpdt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163npwxrmps.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uydrnybz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fbjyxfjj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163frrdbsmo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vqxuhoxj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nzyxzwxy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pufjhvcj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163adpzceod.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vkjbbbhi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gedmauik.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163abxbecfk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163bojfcyub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fjltsqwl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fqagtvxe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rubjhnta.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163irdrbxmq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163omtonzhl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jecdsxpu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163aqncwaax.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ahwpvexd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pwyptnbz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163puvduwxo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163tkzlxsho.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zyemuowy.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163prukumsu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163efzesoiu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kbexbrds.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tyhglbak.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tlzqwucx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gxzpxkyl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ipwtlgcb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ophimtzu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lqduzqne.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jiuuzvwr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eqsttatl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163uvikdtts.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uabpfnsn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pqsaivqj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wykgrboz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ntgtrmwb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wfmjxyia.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qvkfvuri.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163erorzjvs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ezoievbz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vnpajeex.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cnbjanoe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dzbyvmha.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kbdkegaf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mtccgaqv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zlbtkxrq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163oibkwvkk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rjlrsedh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hpiumyrw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tzwyydlx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163otlbgowu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xczcehyk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163skrpugqn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163axqrcogj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163zpkmyggy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zkxuslxh.html

================================================================================
来源：http://www.sxryk.cn/163tyfiwyxw.html

G. 面向对象
来源：http://www.sxryk.cn/163cjnzjbux.html

================================================================================
来源：http://www.sxryk.cn/163lkobeahd.html

[G01] 定义类
来源：http://www.xuanzx.com/163xdyckmvi.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mobxpxik.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ecdficvv.html

JS:   class User {}
来源：http://www.xuanzx.com/163xbdljoyo.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xmbembjc.html

Java: class User {}
来源：http://www.sxryk.cn/163pefpoefq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zuunocvc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rztqqujz.html

C#:   class User {}
来源：http://www.xuanzx.com/163zhszzdyb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bmoelzwd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mzczetsm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bvmnderh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ndktpxck.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ynufvjcs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hvvzzyxz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163mjgxfcir.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bfdkuawk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lrfzhsoa.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cxdpwfjj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163torwhetu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jxdgytvj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jekzmxzp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ojdbtfzu.html

Java: private String name;
来源：http://www.sxryk.cn/163zwnzafpu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rwiysyyr.html


<!-- 参考信息 -->