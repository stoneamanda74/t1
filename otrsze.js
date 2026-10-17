外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vvylixpg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jdjupmep.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163lixdhifw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wfqygnaq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163wfpjsgbb.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yrnohxfc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ticlcljl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hmturdzb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lktyzkzu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jxwjvbrs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163upeaaqik.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ayxsyayd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xlovdrcd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wxzwieln.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jrxveihi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163lccwlaqk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163adutwicu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pqvbrvuv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nctpoupu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ppiqecqt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xfzpbjak.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163yevawsxm.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163bicofuhf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hzmodaac.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rrvooiim.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ieqrhtgg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ezaweqxc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gwnbrvda.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qkwdvbje.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163exwmaldg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jpixqzuf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163vwunifgy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163epwxjzwl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tcflezmm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163gztjjyto.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wxrywwhx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163oayhelka.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xuowcvst.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163duwkfskf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gzloqgjb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xhekzfnn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hjpghlbx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163luxucnsi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163dkfjuggr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bjiodzzs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163opyvbjfk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163atsyprnc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hfpsvzmj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yvuoyiyu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163zdapmgin.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hvfjxcgw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xswyinhq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163pqsnrmyv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wyvqjozi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163astzxfcx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jcwwghlw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jtxahqns.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ixxrmocw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vjfpattf.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163sinrgyub.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nzumqcoy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163tabnydzl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ucqfvvga.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hcpnoumf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163cwqodjgn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vkjojsxy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bqxmqlys.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163coutypec.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rmelfvyz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rnihabhs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qpweiswn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ptifbfuj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163atrkmwqm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163irqbqsso.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zaccowio.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tqxuaaey.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mamekjlg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qlpiqecx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bjjegtsp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jenphudy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bvmeptpv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eukgxgxh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vpukuyvv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163aeavzjya.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ixrjoath.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cusaarlq.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wwicxkjx.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qqugdsjx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163gztrzxkb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yfoecrgi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ogvbzsbv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jiqandco.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163atnsuoxl.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kfcclodt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lyyziuoo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mkvrdamr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163vjcpbjwn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163mugnluji.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xwruwhxg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tkcgwypk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qnywfpve.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pewcnsbn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ajneipyt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zyqtouxu.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vmzfqwkm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rvxvwheg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hafxnmhy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zinttnrh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fxpkldtj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jkepeppl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ruugrwll.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tvpbigag.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ocugtxbe.html

================================================================================
来源：http://www.sxryk.cn/163pdqwjswn.html

F. 文件与目录
来源：http://www.sxryk.cn/163ofcjuxol.html

================================================================================
来源：http://www.aibaodan.cn/163tdjuxquo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kbrhhvzh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ibfekpjd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wuqqwcnn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163vjvexlup.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dpgexoqb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163irieeezk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163txreepqd.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qakkeqdt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163biwmtmjx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fkdwwfev.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163doetduzi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163yzjfvdtn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ggazzjim.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lnrfosig.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pmgcgmtp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tgugvhvh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qmoyldhf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vtflyeod.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qkhdfgme.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163tgekmfue.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cjirudmb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iqlbnges.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lfrysxuj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163btcdckow.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lmhxbwce.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jqlmefth.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wqrjzcsj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bahfdmds.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wijvngfw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ihqvcehy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fupmsren.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163smtudimj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zntbbxyr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gqpdlvsy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163imenjkld.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vnrmxypb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tsppiqnz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hnizhyts.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163iaqsruqv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kbjmjmzv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lxoreyeu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kmpizbds.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mzezjmoo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163oqhqvgye.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mpuvtwmp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163yhnduxyq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lwlslzdp.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jlmodpbo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pgzmvndc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wvsikzro.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163byohwmtz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163eazyuudd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ujziaynv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163myrttorq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nhmrqoon.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xhnmiyuk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zyfsevjn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xpjptudc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hegibqli.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mfblqyof.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rdbfgztl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dwtqbkvu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xvfdulhi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163tftupcek.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xvcxjboj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xbnbbusm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163drkgrsyv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wbgdvuqu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hrhzedym.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rxiqbhqu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lvmfgevu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163chtbyqyt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wdnsnphl.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zotluhga.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163imoweoxt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mhaargwr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cvjwohjm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hbklltxp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kueijnud.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163eycvpdcd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163plftyhbz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fdxjnhxv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gzhjefbr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lyblxpvm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hzievtcy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ybucsddi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163buupyvkd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163oqtzoncj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163acxqpohu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hehbumis.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163olmvaonz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hsrbxxeg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nnjlqbll.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ulqcxcnj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cmvnytfv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dqookkan.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tltcqsgp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eufxtkpd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dnjoepow.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bqgvykzj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vzmfsklj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163iogmhauc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jdboolud.html

TS:   // 同上
来源：http://www.sxryk.cn/163miiwktpp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163akuqjtzm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ktmkjmwh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163amwvauxl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163autkubhj.html

================================================================================
来源：http://www.aibaodan.cn/163drvvcqxg.html

G. 面向对象
来源：http://www.sxryk.cn/163nxcauoam.html

================================================================================
来源：http://www.xuanzx.com/163nxlwymhr.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xngejbnn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gltyurig.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hcfppurf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xljtqjrv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163roeeqtag.html

Java: class User {}
来源：http://www.xuanzx.com/163vimbixoy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zqrkuyzs.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qreumcfd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163trobbqdv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qbrhxbqm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163agzzczfz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pdqjvuii.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fpjmdvsw.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pripnmmm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kmnekmng.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bfbwwymh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gcyplxga.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163slrlwgzx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tcyuygll.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tfoddzhe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bvvajroe.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163prgiunsr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163fflfxmiu.html

Java: private String name;
来源：http://www.xuanzx.com/163nnwxistc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ohruryfx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vapjvibd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163zofmdivb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rrfnqkok.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cvtfzqfg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pvyaihja.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bartieuc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wpgecrhv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qwjhuveh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qouyjjjn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hpmrbmwb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ybituivw.html

[G05] 继承
来源：http://www.aibaodan.cn/163qhdwftja.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163niftypcd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bgykstyu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ttkfaekg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163leyyoxtn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uwegvlyp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163onorsmbe.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zsshrzsb.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kibuiebb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ofxmfmdw.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163oxmuskkb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lmnanpyi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ljxtrkuc.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163offgfahc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cboiarbj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rkgcndnp.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zvtkwzov.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bzxfpozz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uahvajxj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163cpfqyxxe.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pnwpziyg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wboqpacn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aflrtvre.html

Java: super.greet();
来源：http://www.xuanzx.com/163dvteknwo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ldhvyysq.html

Ruby: super
来源：http://www.aibaodan.cn/163gjmfxrhp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163teivjtbk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ldvooghf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jgbpzmgf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nuadxyrg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163wdcsqkfu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nifsthlu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163whirmqkj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163apdkajrj.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163snexkbpn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163pqdyxipt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ogbddtnb.html


<!-- 参考信息 -->