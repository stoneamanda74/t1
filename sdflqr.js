外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wkaghjqh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163bebhmxgs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ghyyzkiw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163yrrfkqqr.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ofiaqopz.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kjmnqooe.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gxzxvpds.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rfwscwhi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ofzokwqa.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uxmhpmbs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yrooftba.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ezzwijfm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163htjkhyli.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lkontdpj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ztkuwzdp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uuodygde.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lzgegrez.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163agfpmdec.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qpuwozug.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163abprgniw.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uqeeykzq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wlcqsbwx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jimzebnb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bodhadwa.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163dyzxwsmj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163uzsqpovc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kwlagvva.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163nxtlpsjj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mifhspve.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163eyjqwqpv.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rbkzfxra.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163gsnhifow.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lkibilxi.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163euantufl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163sclmoymv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tblqpdxw.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rluvvjzt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jqbrnaaq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163eknhdiff.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ktwajcbt.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163wyydqlem.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jktsegdz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hmqcwpqv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ntvmhmdc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xgqsbjhz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163kmybpbnk.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wellkzpc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ijwpbzao.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163iowyzfss.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xlceisju.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wepcwjfo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hazgfzvm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163uhklfiss.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fpwcevzo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163oignwwex.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163itfxsycs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gxzgwkud.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yoegeuuu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bwthytkw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ipktmqlj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wgyiqrvt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163uhddjgvh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bicirqfx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163srxunxrj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zippnsbo.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iiwoyrch.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zzvhgmwp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163tcxknknm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ugwdhfem.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ghqxlpvg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163udsgrldb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gsoazggm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163okfjzcas.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gmzjcghf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163uetopsqa.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ktfvepeh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163edujfhwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hqnulqwv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163iwxhpoaf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hhtfpyuk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xnynsdee.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163oelimlxa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hqjwyqvr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ofqpxkeu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fsfmgypd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zbayoxfx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dyhvguyi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163epetsmzl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yeuetlmv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hxobmboz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wqsitjgr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wvbuzcdq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hcewjqru.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163twcxfoti.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163etiqoajh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qdzgzunm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163agwkixmj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mhpbpley.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163royfrzvr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163grmyywpm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vvgxdxkq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163iypqxbvb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mltbgqal.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kcurapod.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uaygesuq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nkwlhvoc.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wkhvemrv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163sqbgyzaf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163exoyhxij.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lewmtypu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163scyqqypg.html

Py:   if not s:
来源：http://www.xuanzx.com/163wpnmpgad.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163gfuduwtm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jiozxavl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163nerkotpd.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dinrovbu.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tplkkxxp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163sfquizjz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ebzjqytk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gelknotv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mvwlnktd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163piwwyuho.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dsifotja.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yspqtawk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jxjizaxq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163myrzgguw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163okwpcwuk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jubughst.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lmgavyuf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163fcasyhfr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163frjohwsp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yndtxhif.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pknikbzv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ajdbmcnu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vqkmzcsh.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163sfefuzcw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163pubrfmpr.html

================================================================================
来源：http://www.aibaodan.cn/163bpsfhway.html

F. 文件与目录
来源：http://www.sxryk.cn/163npojtjug.html

================================================================================
来源：http://www.aibaodan.cn/163hpjcobnq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pifdjqjs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zbbjufbe.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163kywyevbf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xtcetseh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163egxxqltq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163htzihbfh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mfhimohe.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hzkgxdtr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163slaauifl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vkzabzlj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163onfarecl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163zeuvxuzj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zmysshnc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cuaidpvl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lfbtamlj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163teqqxdrc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pmgwwaii.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ugcztnjs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163mbquhqul.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163litgwvqr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dhvediam.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bqizejgv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nkrdrbol.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163bmsueiib.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mtlmafcy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163whjsttzn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rnucxsul.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163avkoxebr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qrchzpat.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cnxudmmf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163buezphxc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jpuxwqex.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qvmnasdw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163snqvafgb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qcyzyfud.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ellfstbr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163sawnajzt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wawidabz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zkfnldio.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ahnoimye.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qwjifrqx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xlgyxsfv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hqxudzgm.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yjibhmss.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yumdcteg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163blrmyuxi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wyvdylsx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163milmkfqc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hlawtgts.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kceqeyso.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vkrlvxqp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mhmgapmi.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jiaxazkz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163nlyvjspl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mjfnzcxa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163nffjkwwt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yttamrhm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tmiagrpm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ejbsiowm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fydakfjr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nxwrdyml.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pmrgrxbn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mciudckb.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xosyalxg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mokprnvw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pnjujpex.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163natilhyd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qqzvapdh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hojqhjfj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hdsakhkj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vxweuxrm.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zigwwwco.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qjqqxrbr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lxmifkel.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hdkjndmg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qmctkxlo.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gwtwbwuh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kvxxpcij.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rieltcnh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rbkfqzsb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163uwcasgup.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wfsrjsba.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uzebgope.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ivajntho.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163intbubrh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cvekpffd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jvalatqr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mrltbpuw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jprgmoky.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bdxggklx.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gcabtafj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vjozsslq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rijzsasm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163psyjvguu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163afezuvob.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163erfxynzw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wbzfyfty.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fxxsmeae.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gnwsatre.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ugozvtgv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gscvockw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163shwlhqdn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kdjkywfu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tgozbhjw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163irjmdqhz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yzinzrpz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163idrasgpk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xrqgszop.html

================================================================================
来源：http://www.aibaodan.cn/163kotwxuvx.html

G. 面向对象
来源：http://www.xuanzx.com/163brfcxizx.html

================================================================================
来源：http://www.aibaodan.cn/163zvyvxblk.html

[G01] 定义类
来源：http://www.sxryk.cn/163pwlsajaw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tdbeqivb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qjtusrps.html

JS:   class User {}
来源：http://www.xuanzx.com/163ahlnqdxc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163uwetzmgc.html

Java: class User {}
来源：http://www.xuanzx.com/163wrkgjbve.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ulkunasf.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lfcddyxg.html

C#:   class User {}
来源：http://www.sxryk.cn/163nknjtlib.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ywgetosy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kkyvpsme.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oafpixro.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tdrlmybq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ulzsfjzd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163eglytngt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163sqndwpkk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vgnvrhnn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kayruqfo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aiwojdjv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vkvqtrxm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uprqfbcu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sakbpgfc.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163nczqmceh.html

Java: private String name;
来源：http://www.xuanzx.com/163dmneupyd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163lrilcgwv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vqxrvdvv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hnfdhacz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xubnejjg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163upklnlkx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163expnrmuq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163syuglinc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163uddzysau.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163huhsseuc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ndkyvitn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163njimyroi.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yfnlttko.html

[G05] 继承
来源：http://www.xuanzx.com/163txhqmaqd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ksepxlrd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qmajxcvm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xgyjyviy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gdirlmdx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nhsvzqyy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163tdgouijr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kokmktqz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163kuabemwv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ffczlfwd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163voishqxx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yzxhczpq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ufpmxwot.html


<!-- 参考信息 -->