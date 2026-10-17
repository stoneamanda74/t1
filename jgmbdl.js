外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bqcjuryb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pubeepsz.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163livcqcxr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163soezheih.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lsqigqxi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163effpvuig.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fwoalugu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163madncjhy.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kmmscgab.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oesrzwxf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qpzmakpn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lkhopyzz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fnrigixv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163hsixqkmo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163enrqolgp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bgqfdgfx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rzenzckw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nylcjajx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gpbvlfed.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tjwaezgi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zulgdepe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mtbnwjph.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163prjtstvs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gxfgymnk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163dpiryspm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163nqpzdrvg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163idsfaatj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nmmwugey.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zwjgowal.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163kizskohy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hchblnns.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163woeedtwy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qviunmdk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gaifqzoh.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fxcjxeyg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163coasgxls.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163maspurnw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fpvddtwh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rxvgirdp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163fyphzmjz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dyxxcbck.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fsguwqgl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dduhtkzq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ssedezss.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163fxfewouw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ckcxkxvl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163esawvbwf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mjqrnujr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163fahdqhfh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qbfuidmc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ywnxowhp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163unfxfwao.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163vhxprgyq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yggeaukl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qcgbwmas.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163acabeohh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tzqvaqjl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tqiwjbeo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ttnuxclm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163zmmjvpac.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lsnbhtkb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163phizndqz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pmejxxre.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163nqbzdxui.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qcrfywtn.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bxdyammw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ywuvnxer.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163osxppzvx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rhskstle.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bisykpcm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nnmylmvu.html

Py:   if not s:
来源：http://www.xuanzx.com/163albypwwi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ytfyvcbc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163eehrzasm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163stcetpbp.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kwpzaryo.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163icjbuzcm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qrykhkol.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tkmtckzg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163plntueuo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163aoycincs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qyneovyo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qvmughix.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rfraqidw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jgkybskv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163atculxea.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163udkdcybc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163cgyixday.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mivfnriq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tyofieyn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dfqcwbdl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hdfztfsk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mqyeldhd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ktivjseb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dbbgsovt.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rkogxqdo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lfybhexk.html

================================================================================
来源：http://www.sxryk.cn/163ubwcixdt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zelwgwas.html

================================================================================
来源：http://www.xuanzx.com/163ocrfptjw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ytpnrjba.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ilweycrj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163xcrmgcaw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bjxjubak.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mvbfegpx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ezwnptsi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jmtwzpmn.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qysaijlx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mnzgpjqv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gxqpqqck.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163vukdmphq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cyxrdxld.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163imipmydd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gdpwvrvn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163grvmtcrj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fkvwnfyl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ghqqdobf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163nfchwiam.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zrqgcnwg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163szzfqnft.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wnbbbevk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oduspqls.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pbshrfei.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jsvojzrf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163msartgjc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163svkmsibc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163widvoleu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jiizxuxf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ylghrodc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tusfexxj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163imoqbzev.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ixfxuwzn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wbsnquqx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cbnvjhlt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vuohxcco.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zfcxzqfn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163idfutela.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163elehbeyq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163htnxoltw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uenydnzm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mjejrxkm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tknsamvg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163usemorlj.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uejeguyj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tebzjtqw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zjpqcczx.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163daaahobi.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sbbqfzwx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mwrldnzb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ynlngofc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cajftzhm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ksdxaxtm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163svruolvl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vnimisgp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zuhwcxpf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163anzexqyf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jlurdbqa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ouiufxpn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ztbirpqr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fungffzk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ivqkutzp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nhqkjztd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mnzwqrac.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bylzkktx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163cohucoph.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163stgatqao.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fnhkhqsq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lgwiwfya.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qjqnjswp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163cmodpcqn.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163yqmoygrp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xttmwmxz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rqrsfwuc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cwpukfnv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163oivvyvby.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163yhxigwyr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mfcvwxca.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hsocpden.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wnfuxuaa.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163cnposgnx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zlgvzfuw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pdxjbgoh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rvvlpqpe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qybxzjhw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ackcpodu.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kubtnxbx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pzsriqho.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rwffhipn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ksvjenfy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vnnmfrgn.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163apoxzbsy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kzgqmpoc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163essveaxl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qlmwsrcz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163denyqpwi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rhdeygzs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pyactapk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163njvgrrbz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ljexljte.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mcpvyfot.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nmqybcdl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ysqluubw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wsbpmtmd.html

TS:   // 同上
来源：http://www.xuanzx.com/163arzuakhv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163aequtjtz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163oidktxze.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dlbzmqax.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ovkcuvhm.html

================================================================================
来源：http://www.xuanzx.com/163mtsnylwb.html

G. 面向对象
来源：http://www.aibaodan.cn/163clrwbzwc.html

================================================================================
来源：http://www.xuanzx.com/163vpqjhdbv.html

[G01] 定义类
来源：http://www.xuanzx.com/163guhpokzk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qytvftik.html

PHP:  class User {}
来源：http://www.sxryk.cn/163polftwqt.html

JS:   class User {}
来源：http://www.sxryk.cn/163mxzyrlvz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gtwtmepw.html

Java: class User {}
来源：http://www.xuanzx.com/163tykxzeuf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163blfiulsr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163argwyomm.html

C#:   class User {}
来源：http://www.sxryk.cn/163vhcpessi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hunbimne.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yguktiuh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cbbeaeie.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zelxkwyd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xvxlazmy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163yztqkvso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163scdzxezl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fhhwzjoa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163goryfjct.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xjpgoazz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ddqtngbu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163agdfanhd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rxfimjkm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qypvpmnx.html

Java: private String name;
来源：http://www.aibaodan.cn/163fcbyvnkx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163aqfeexih.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lfzbvuzs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163mcgsfvux.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lraypykl.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163omaynaae.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dggavrsd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mdfimxnl.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163bjurdwpi.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163swubirtd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hhfmuykm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163njhozggd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gjbmhwdz.html

[G05] 继承
来源：http://www.sxryk.cn/163ppigldea.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163naupeyyo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mpcydzee.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163isefiewz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kzesshng.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jjpdobsk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163gvixqxsn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wcjcycip.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gzepzbeh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163siuidrkw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zpowkcud.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ndpsqglf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163atwpkncv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163scvoakyc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163katgbplm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mishgoat.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wpibqtny.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rmzywgsq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ayqyluxa.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wupcouny.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163tjbngsek.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gytdvoyc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bwryloaa.html

Java: super.greet();
来源：http://www.xuanzx.com/163jzestcho.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ojclmqdh.html

Ruby: super
来源：http://www.xuanzx.com/163siwlrawd.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163oftceevp.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dlfgxrng.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vdmjsbhw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zwukthxc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vevrygls.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uoosqsng.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ykrgedtf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gmjtfxvp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wljeevdr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cwpbpave.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163eocscyoh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rzlfqsui.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163davmbtaf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wkbabxzf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mjqchajr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163svphtfzp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rguhjtwq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kpzdzxzs.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cjeytuyh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163elmkabmv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tseanmfo.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jczzfgzl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163fahkgllr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wmfkrdgt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163irifwpye.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xawgpowa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kzrexrxm.html


<!-- 参考信息 -->