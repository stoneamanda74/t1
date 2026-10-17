外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163vvgqgilh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ltybreac.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wsjtnqwo.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ylqviiim.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qglmqurp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hvjkzzbd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zfwhptbr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qzrpwwfe.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163siuwnvzr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tfgwobrg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kgswwemz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kbgoskem.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163keljydpw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ddsqoqky.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163agzlhret.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ludeqwjf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hpdaylqq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zpfnkghk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kotkzmju.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mfxmwvgr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qxeusemx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mdsqtfpm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dqnyxpqk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kumnhngb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uiflbarz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tcbgkcge.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ardwvtra.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ivhuboei.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vjrfiupc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kjvemccn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lopcqnis.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163riuokufs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uvrwfhrp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163aonrmkyo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uvfpxyrc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163fnlwbvjt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wrzmfxul.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cabhghfw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ajbotmpw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xeldryub.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163llfpvmgl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lothicwd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163whxtwumj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qhcajgto.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163jrshacda.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163sstshnzt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163scfdvxak.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163agsbgjzy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163xavvropf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163czjsarwq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gqhksann.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gsbcqcao.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163djucgzze.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qqxknvur.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163uzbsgrha.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163incphykr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oleiyhcm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163daiyvnit.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ebbkbieb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pqnsdctp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163awneyeaz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lwhaftty.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uljorzsi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dacsjflc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ljormbxq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163nfduvekk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ymammwqp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163chnycrsb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fgdckoet.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163omnhfkod.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hitafodq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163mevkxyrh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ouecsuxk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bvzlytlx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pmngbxqs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vsnqatjy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uvbxdyxp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ixrczvlq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163rsxwhawc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jzwmurmy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bwyhsfzb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ovrynikd.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163usgdcvft.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ofhqekrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nugwygln.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163oljjnwku.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mmtuxdlu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dqbjsmhc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bowjeben.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dvczvnmn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ghmgeidz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163puxuzycm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bdkdgoxl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ceuacrbo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vzzvbsgs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163terhmfdo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jdlmttrv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pkpznqrl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wruvilxf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zrmkwmor.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rpwoxtna.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xxtfcops.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163oxdvvcqh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163roevqdmo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163teysleuu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vhrordki.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163uwusjhho.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uqehjcfn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163blxynuei.html

================================================================================
来源：http://www.sxryk.cn/163gdunqcwg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ksiwqvlx.html

================================================================================
来源：http://www.aibaodan.cn/163avddcvol.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gdfjuryz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qusxcxgu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kreiivsn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163skywdtzd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163eezmompi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mocnkddi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163nweelspk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fvmxmpcn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163eaoybwti.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ezrtxurm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yrlszuxg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kudpqpxr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ultxfojr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vcfdvijr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tatxmntw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mhgzgcxs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qbippcmh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hnqlgfoj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bydkibkd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ouslxnzf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163czcqccze.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163idgfvvfg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dvrywwpm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ulsodrjw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bcfgdfiu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163spzvokid.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ldaygpsx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pucjwvgf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ojmyigbn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ufrzirdd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vgniuuho.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ikhxhuwn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lerldmin.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ialislox.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163osuqcqkh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163axzlfhtl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vandlkmo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163dtimwiyt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tubnnqqa.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tpceofjr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163lshciryb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zgusjhkz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hvdwtbnh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fishoqmz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xtyfsphl.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uziztnnn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163tdernefo.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mwsnbnbi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ohwrysgx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163icfxoivh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cttmrfiz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163cyvdcipp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163addwrewn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pyvjfyox.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nlkrbhdg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163trdehdkn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uceirbbz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tfpyiebg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163frubvuri.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163gozxaolc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nmpgdxfx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fnbgghuc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cywshqkt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rkdjrmsr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dvarelxq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kkdnavuu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qfafytri.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ulpcpjmd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wpivkdoy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wmmgrnqe.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ftzyrnin.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oavvjayd.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jnxqbhsm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ijlrqxhq.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163asyxnnoi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cuceaqzr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jgzepyxy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dkydcfgc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pabryryx.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yhvvugzl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163srlchreo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163flwlknkj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163slxvjjcc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rjlcjdsb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mwwvbkvm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rqcrqgvt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163boyozyyv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ouklqpmr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gtwizwks.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vcaedrah.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163tdvvwpwu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aamjqatn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ebylwyeo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mikgfqwt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tomnrsnp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163aopuldpi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163knaeyjbp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163awvvmxmn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kenklbsl.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163fsvhyakt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tktylebr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ggwjjkuf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nuvfglvl.html

TS:   // 同上
来源：http://www.sxryk.cn/163mvbrlyiw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ulnstxki.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mmqyfkuo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163feuhbycw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163orwfqvzy.html

================================================================================
来源：http://www.aibaodan.cn/163cdqgfgxm.html

G. 面向对象
来源：http://www.aibaodan.cn/163psocugjo.html

================================================================================
来源：http://www.xuanzx.com/163tktctwan.html

[G01] 定义类
来源：http://www.xuanzx.com/163ivxwcsiy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163kwrrtrae.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uvlxbsqg.html

JS:   class User {}
来源：http://www.sxryk.cn/163occpfvmc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ypaqegrz.html

Java: class User {}
来源：http://www.sxryk.cn/163wetercrr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qpmmzndw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qyduaoeq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163sqlfrwco.html

[G02] 构造函数
来源：http://www.xuanzx.com/163izwdfzbz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wbasvbgn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jtmrzewf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dtaovwbr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xzuhwahx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wmlrdnyk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163onfsoket.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yiwunuia.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hwxfngii.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rlpqjmkb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gjjarnjg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cjieopaa.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bhipcllq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jhmowudr.html

Java: private String name;
来源：http://www.aibaodan.cn/163hscxmmgk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cmzkyazq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163acsqqlyf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xaigtlpq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163pkqbfckr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xuvybxkv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163notxsijx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qgqzxapr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xfymdkps.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163srvnoijl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ieyjjfic.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nmmnsmek.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yasqqrhu.html

[G05] 继承
来源：http://www.sxryk.cn/163bhvavxdu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tlnpssbw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163oamxayzx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cypyvhhm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163eoqapvsh.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vgbzpjap.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gemuqtpz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wqoibrxu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pjeccnxb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163olhtawns.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163liayvunu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lmshbqvh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yzudwnbv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ehpwcdat.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jrmaknad.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163cbleciim.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163dqqlvioo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pnkauihi.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yquabzkb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xbghsymg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jqbosldz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fiokbjvm.html

TS:   super.greet();
来源：http://www.sxryk.cn/163msxacsfm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163balhvtcq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zuxaipal.html

Ruby: super
来源：http://www.aibaodan.cn/163vzeblhri.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ykdypuqf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163argowjrs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ryvyyeip.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tbimgptk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bfuphudc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pujthkpl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mudxzuqx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lqulbbdw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vbkywynw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163kqoxtfby.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ioqyoigk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163yzmnqknr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qptvgewe.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163yvncmash.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dvtvupga.html


<!-- 参考信息 -->