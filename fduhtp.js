外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ltajtjmz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pphceojn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pgajhcfq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vbvgvuti.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ppwfxnfu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lonmbvnr.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163kepbfvze.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kdiustcz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163odecnubr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cesvgedt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kphgsipr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kznpqcbx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163upampysn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qyumfdzu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qeowpezr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jengmyfh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tnrqtndv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ebbnxhuk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163anoijywd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rfzrvrgn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ybpmbyvv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tcqzjhqy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nfafmxaf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rxqxwasi.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163jnzzhtse.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ebxaaywa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163biytrjkb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ijdphvxc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nddlbyhw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pjgoiurq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gmzkornw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xdcfchyd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163njhoeliu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163eyjlighj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cmpugdbn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163gzbfzlfo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jydsdlef.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163iyvyosrh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163oipzxdec.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lwtrqpch.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fdlicezv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163czbueebi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ahhixqui.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wksolkiu.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qlqfkyyn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jxigdmus.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163moqnoumo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163iqucrnjh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zowidbms.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qgyjcnjp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bftzyqhj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ozdohmpr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163atmqafuv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yejgmhuj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163urrakvrg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163occtlizw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xtaiglrf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163oiyrcuvn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ylnqbiir.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tmencrwn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bfyytgzk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163uyyxfrrz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163yvphqhdn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vneunyme.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nredcnqp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ivxrsrpe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163spozmhho.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vfvgyoga.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163hqcqcvkj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nzfnkdxa.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163uuctjfuz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jlppcwvg.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qksnvwsd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vlhnstsg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163pvfvpdiy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hgoraqlr.html

Ruby: s.lines
来源：http://www.sxryk.cn/163omuxwbfo.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ieduvdpl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ktktuozb.html

Py:   if not s:
来源：http://www.sxryk.cn/163kdmrrgon.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pygmujtc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163laqnjjnc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ynbhqpmw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ygrbyixf.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163suhntcer.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163thqbzzyq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163qjhqogrh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dtuwldyw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ibmgainj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zwbpizcg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uhjkrnal.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163atgfvutj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zygxgsms.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lyschhpv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163chemfrze.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rfcfmqys.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xcdhthvt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uqhcumvz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163njiolvbj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163axiteeks.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jupheseh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163eiygbaau.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163iuwsjcgi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dyweqdkz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jjkvcxpk.html

================================================================================
来源：http://www.aibaodan.cn/163ejgxqcbm.html

F. 文件与目录
来源：http://www.sxryk.cn/163gfvkomti.html

================================================================================
来源：http://www.aibaodan.cn/163vziadvzh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qbhtoneh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163bepbvmzl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rplgilqd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jpfyqoov.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ykfmxern.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xhfuefex.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ezykcocb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163orzbaczd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lwpfttnb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kugrrjol.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hgbpvytp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ditdxfnw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163txwuzcke.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cxzuwqmu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rkgafvea.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hycqqvso.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mfgjjcqd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163mtqqnqyr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vbfqrkap.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163lqortbbe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ylkhoppi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ueahnavl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nvhburwb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163unrsghyg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wiautcat.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ewiycgbg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rprmolwn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rupwwjdp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pklwhobz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bmcmscwb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zmkhgprq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gtpsxham.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hsvijpvb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lnoluvaf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qboojqwd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xktztlbj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rcdmifdr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qkpcnfgs.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vvpjzuhd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qgyyxmti.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ooqofxbk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yynijsgl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163wikzmotx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163hcbjumdu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eswxhmdb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lfenmzux.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163bnhvjcaq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dunkdycv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fkoqirgk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rpddbvjc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kodbnbiu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hxdpjtpq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163txypakxg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163fansujug.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qspiscqx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163notwbxek.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163akdcrhyg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zdrhahho.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mxipdkss.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ywphdznr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gcejcadn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bkgvypwf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163maganjxz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163frjiecfc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lxicyvvk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ptqbdwgi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hjwtgepp.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163whrgeoaw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uiidddcs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fhxpgezk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uqnxkxtl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163eufbmfic.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wtfdbyfl.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kshpjmgb.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jpweacko.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kgneuzww.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oqvrelsc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gylnhsqv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163svfdzluq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163nboqqfdn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163tcsmqydo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163duchubsi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sxgmnrdv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163alzusdvf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qhxqbpwm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163plgibwci.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163synizqrw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163amverldl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sbfaedfs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163byjswaqo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cjrpnsmt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iceigzbj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rfrddiyc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vucipuzu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fmhhgncv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ronturob.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163oxubmeqc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wofyuqft.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163lkgmnvla.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mplpiamm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mdnwledm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163hkhdnjem.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vckrhzvu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163thwhrnex.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ddxxvyon.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163szwdtewj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163grvijcfm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163zazlpdfs.html

================================================================================
来源：http://www.aibaodan.cn/163ewllaobx.html

G. 面向对象
来源：http://www.aibaodan.cn/163kjlkgqpp.html

================================================================================
来源：http://www.sxryk.cn/163kyccdztx.html

[G01] 定义类
来源：http://www.sxryk.cn/163xmxomqfp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zcdyypdl.html

PHP:  class User {}
来源：http://www.xuanzx.com/163nwhdkydg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rhkueupg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163otmhergu.html

Java: class User {}
来源：http://www.sxryk.cn/163pwyatnjn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163nxnbgkzr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gtofwbfv.html

C#:   class User {}
来源：http://www.xuanzx.com/163gvkjsvdu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163toovisul.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zpqwlcaa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ltuthdup.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163aaydcxep.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163grdwgdgl.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bmdarxeq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zhiplgby.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jlvwjxba.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mcvarbny.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jyyfmuij.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163sgwbocbw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tyirqxog.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bgbvjlbx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163upgfxame.html

Java: private String name;
来源：http://www.xuanzx.com/163wrasjbaq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163aylfqfyu.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lumwokjv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qnksbgay.html

[G04] 定义方法
来源：http://www.sxryk.cn/163fdkiuuxx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163glotzuoh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wornztrr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lxqhqxrw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pbikqsts.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hbovqxhf.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zotktmpl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ggggnuxp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zjepjohn.html

[G05] 继承
来源：http://www.sxryk.cn/163hehofpps.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163zqrfclwy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163nuerqscd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dplrpuzx.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163befopqyf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163swjnbeni.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xssfafgf.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163urrwboje.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wnycbebm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rcjsenis.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jnglmerv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ezpzrgnm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163sycsgqun.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jxtluhzz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ohgyipqh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jywzoigo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163thwhrrzh.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ylrcdjlq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nyqjykga.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jywwjyhs.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163zhuzrcdq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fhihnwyv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iqyvnzlr.html

Java: super.greet();
来源：http://www.xuanzx.com/163ayjephmx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yvymzodo.html

Ruby: super
来源：http://www.xuanzx.com/163kfgfzdtt.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ngahjswx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jeomqpjh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163carbkvrb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hqucvjlz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ghmmfrsj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163btqkcbkw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uxnnwdht.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163axbiuvyx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vgejnatl.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163yzvbcaxx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163wmeklwwy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tdpiohig.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mxlezonp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fbgrtsug.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ijxmmznz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qanfajvp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163udpilhdc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tewjuyrm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yrrntpgb.html


<!-- 参考信息 -->