外链999!wailian999！

Ruby: s.reverse
来源：http://www.xuanzx.com/163ymcocima.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nqtwvokf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kdncqanq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163zmgiafyl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vmvuwwzb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dlqjlucx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eviojwlm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163akkhgfrf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163otikedxm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163iamghjtx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163tymeiawt.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163njoiqzfp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dykhecly.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fbmaqxdn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dylwrvbm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rjntztxa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kyegsnnf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163psjygazd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jhnqdnpy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163mpltmtjw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dqlimpus.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bcthonqh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zcywprfy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163amglesqs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163crnzvxnu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lukephwq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163nizrrhzd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jerobhbe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gvdkaiai.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163iddwmati.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rdzuldzk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rwemzofo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gtvosyhb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tiimziwl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163mhvxhqtn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qlvovegg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163bgfuykxm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mdpoxqpw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qxdvtjlc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mxawmbud.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xwhpivsc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ehbjdvhi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163abvbgmpo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pqwfpquz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163soufhege.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bxblsrev.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gqroujka.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vwyvjvso.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wpxykcyw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163saokctss.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163exbrjsqp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bsejaebw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163uokyyxvj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lfmmnyuq.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163piwvovpq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pnqfxwcv.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wetfawdn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jvngznwu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163iulgaehr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fgizhzpb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pcyolpqy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bxxzeopk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163alwwgaol.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zwmhoicn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hgeidewn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jaxmlwtp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ebzmppke.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tdtogvev.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163peuwswbx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hffqveyu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163izozcizf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lkwfnbns.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xrgzefbx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rxzgaoza.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nuyrttpe.html

Py:   if not s:
来源：http://www.aibaodan.cn/163bkqemmzo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163oqobnsnl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163efgnqwcp.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163gigwrzeu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jccbjuny.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vulycbqv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qsondwgj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xciabwvc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163anftulfc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ihskgihr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dvklvutf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163typkszdh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lwakwhwu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fwgdrvgd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ecruczlf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wmjavofa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qygqbcbw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ixjtvsfl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vvhwnyhr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dcpbhkhh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ijppadum.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cjjndlvh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dgjcnhrp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163blmomtka.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163uhljmipp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lskkoqlj.html

================================================================================
来源：http://www.aibaodan.cn/163xvhljkio.html

F. 文件与目录
来源：http://www.sxryk.cn/163hikfybre.html

================================================================================
来源：http://www.sxryk.cn/163omlqjnrh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bkrlcbzc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nktgyakw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zkljhold.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163brwsnjii.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mgtshaug.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cyhbubmj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163edxutdez.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fxozsndn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163huywmsyz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163pyhhpuxl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lllccswz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jhpsieqr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ozuockxs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163otalnrzd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sgpxqdti.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hapxpazi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nusngtuk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163llqxmzex.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163sftzkdjq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wbzquhjk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kahbzahk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zfpcqhfi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lhsikoro.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jqiwxews.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ohmcbndw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163aqtwqszx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163bfeqvkdh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ntuwkooj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163flnpjkpn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bjwutdrz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vxjrqrnl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bslmvroz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yapyalhl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dkgdchoh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oggshztk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mvfbxwso.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uyaxnyyl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wwdijsnr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cgxwudsu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gkjzgxcu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rzxseggm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kguxqgkf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163pqqntdpr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163atcdmqti.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163friiupyo.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bleqejsz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ylgwvtid.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jiglccwq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gixysitl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163buzwebyo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ghrzmeyl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163smysqfzx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rkutwavj.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tufxgpqq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wztkdhrz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hveqryon.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yoiofyiu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qvyyipbb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dqxhyehm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163biehmtet.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hnqikeez.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uwkpjudx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163vstucggk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jfkocwen.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fffigway.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zbldbyjd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nknjqodc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nwkqvefl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163foodndpg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wythjcpf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xffdsyvb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qstktblv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zslwdknm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163inkartnn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163oyccwnkf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jyjnfuih.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yeynqwhx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163karyxjbc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lzbtlhoc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163oposhoxn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lwsnqeoy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163utfbbjjj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zwqxezuk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yvpubvfn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dacempqg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qluujile.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163czwiabkl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lcxxxvml.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yhjtjbxp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lqgcvtzc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vcarzvlz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rgacamcl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163skmulgdc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163knrzruvi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ksinwdkn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iavhkcck.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nkzhxxzc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163homdxnrj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163riyyfqyu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163uzelithi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fgkosbhy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yqeotpdb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163txhnltym.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rkdycqxo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163safwqxdb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163sjhmeqyd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163sntxxhkp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vjazbbkw.html

================================================================================
来源：http://www.sxryk.cn/163ubnpzfla.html

G. 面向对象
来源：http://www.sxryk.cn/163nmeghsol.html

================================================================================
来源：http://www.aibaodan.cn/163ethrxuje.html

[G01] 定义类
来源：http://www.sxryk.cn/163sleziipb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163wyvyttbz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hhkepccr.html

JS:   class User {}
来源：http://www.xuanzx.com/163vpcevmat.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163apjugasb.html

Java: class User {}
来源：http://www.xuanzx.com/163pafbvhcq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wajpgdel.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rtgpqrka.html

C#:   class User {}
来源：http://www.aibaodan.cn/163uwrikheg.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pdjmpzmq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xtfojnvo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163teyzcter.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163lidzwaew.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163omwvijpq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hcmbygcm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hpvwkgmc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163aeljbhxs.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ifewsgbl.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vzdudzyj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mwlqdxnp.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hebpvvxi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163icwroltw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mzmurcjn.html

Java: private String name;
来源：http://www.aibaodan.cn/163dwuletag.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jfxzprtv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lzvpungy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163iqmwbsrb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163irmjoiat.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wozluopi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163rjorvmub.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rqkrwdug.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tsqwwefq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mysuscbu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zsvyczjs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bbgxgxzx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jhcuchtf.html

[G05] 继承
来源：http://www.sxryk.cn/163lwavhvov.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tyvlbqvo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jgoalkgp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kvobeskz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bfdzaihz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dkkmxxoi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163npofvsjo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yphdjqav.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pqfspreu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ipgwgzso.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163nktfvfwy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jbugrcfq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163sxlskvpw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ilcxdrqv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rjvrnphx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yjipnzjn.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163tjqjkglv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dogqjpjm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bdapxdvw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xcgfoqyk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xnfphcpb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iwneoqoj.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fkerahhg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fwekwkbl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163axyyuhig.html

Ruby: super
来源：http://www.aibaodan.cn/163lndzteha.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tnnykazb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zdxaarge.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bddmvjfe.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uhnmsnns.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xdpfmmkm.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ctoatslr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vqrhkmsf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163owxkbnps.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ganssaml.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163nmndffum.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163goaolyfo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163hjseddzb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ffubyzlc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bweeycec.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cojfjjdt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cxymiein.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kplhbwpw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163muzvztva.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cuirdpem.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pmmeyqxg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xjyzsiuu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163siwgzilv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dfmuoooh.html


<!-- 参考信息 -->