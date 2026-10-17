外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xszdafek.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jtrpebns.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nnxkcnmc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qkswtsys.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163iarildtc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aaubhmae.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163icqwmkox.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nmdxlwgb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pulxrpdc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vzoztwnl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rbkhttij.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jctwhotg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kvjiyort.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rafgbshr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fkaeqhaz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163oznrxjba.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dehnbtgq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163itwgcdoh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vkwwevle.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ybrexglt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hbnfkvdl.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163flixxzxu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hfhxerae.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163tswarziz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163agtkukdp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gvgayktw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163cyjbicjf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kosjiggz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fwhdhxzm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wlxdzoes.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tqnwzykc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bdbyeltz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dkmlrbfw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ygwypliy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vjjfkawe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pfucvegv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vbqexioe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jepfvreh.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vibaqrgi.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ejpzvkwn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vyytyqco.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ydayszck.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wrignrbt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gkcusfsu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zdultqzn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tmznzehj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wknlxwvy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163jrqqsfnx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zikmkcko.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ndsbdmma.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xmsmotlo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jdvitkve.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xlmwhelm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bgbgoape.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163szgdztbr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163cwdrhlrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gzpurdem.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163yhntnwwq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ldtplbxh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nckjugdj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xcksgktt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lkqxlmrr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zsvgwhpj.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163fiwyrxmy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163obljosox.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dpwyiftm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lldqpsbm.html

Py:   if not s:
来源：http://www.sxryk.cn/163cajmclda.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zkjhwswx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163blkxzgso.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163yxamcyfw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mtebtztc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tdgtsbnt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ouulqafs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163sngvxcux.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rflxafxd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qhvrqggg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163tgapynax.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163toemeerp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zkyfxlut.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rwovuhuh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tdfifggg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163uuxgbiaq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nvzqpjwu.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zbclbqcy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pedmcrck.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dtppgipf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ifwbjtnl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fnseoknp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ssvopgaj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xwbkmcwc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mvuzivpc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ogzpdtpx.html

================================================================================
来源：http://www.sxryk.cn/163awobngpm.html

F. 文件与目录
来源：http://www.sxryk.cn/163tvclbtez.html

================================================================================
来源：http://www.aibaodan.cn/163xbulhuuv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vxvodyht.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163oxpstnrp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163cwtrzxrb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cnticubj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qqeodypo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eoyqyovc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163btqpcbao.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wwdbasao.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163eovxaxnp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163quxzewad.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mwcyvioa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nrubwytd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zgfgzkfs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ycufvvzs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163voqkfzxl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163sizwfowy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163mwbcdiku.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kvjxjnix.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ztzfbvuu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163aqpnrcqy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iawucexl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eeedtolr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zjnrjure.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163chykzgaz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wofvcokk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ocnpzcsh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ejpdrtlv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gvlzyrsg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nuxnzsyr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wvcxzopm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163elblhpjz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tzmfyyqy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zptxzwmm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163uiiecvao.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bcfgchwu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163cdajmmee.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dubzgfvf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dxmlkhhl.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bsztcofz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ucqlsbso.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nubizokj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lbvliban.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163scaivwom.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tsaexutb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lfjiwxpi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rwxkoujn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bjhldeiq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sjyqbwhq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kavdtfws.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ctwvzxxl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tldpydht.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163krlzmfbx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mlximfjk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rjbtrfqt.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163uyjstodl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163actafxsk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163pkpjmvwf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163frxpgcsp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kundjaws.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163iqbocdgn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ffxvqcft.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hdvkckrz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wvzpfrab.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pljprwhn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163bahhslbp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163chkimpbg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kncbyjiu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cfzonwzj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eauzeizz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163xcfvtliw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pxrdolav.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163grrbbvko.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ywebsmqt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vtxhnbxi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zwoojbaz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163dxzfbelq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fjroqetd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163suxgjfim.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xgjzydke.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tveasbix.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163palfprzo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qmjhcxuj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gvvedpfd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hhngtrnv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wzgyxmpn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hkmbmsnh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mkvgdorc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xxausmrb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rmybogzj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jdkhamod.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tdvqtslr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eqdpmeqa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163btqpfbpc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ddtheelz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pwrntkmc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rkpvrrwc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163skovcrmn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jvgpifog.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gcndmqug.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hlcumcms.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zexumkzl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fsapshaz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xsevauvc.html

TS:   // 同上
来源：http://www.sxryk.cn/163hhloropn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rsujsxgb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lgbkwzzw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163awxacqny.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bsurxygf.html

================================================================================
来源：http://www.aibaodan.cn/163lwcilhhx.html

G. 面向对象
来源：http://www.aibaodan.cn/163mlfzbccs.html

================================================================================
来源：http://www.aibaodan.cn/163eezyotbx.html

[G01] 定义类
来源：http://www.xuanzx.com/163usdkaiqp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163otrmrwtf.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hisbnlzp.html

JS:   class User {}
来源：http://www.sxryk.cn/163zobijdul.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zjoozvpc.html

Java: class User {}
来源：http://www.aibaodan.cn/163ttdaeknr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163weiymibp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163habbdsdq.html

C#:   class User {}
来源：http://www.xuanzx.com/163welvxapk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xcwwdlhg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lcpgwzeu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163isggmbvo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hsscfksc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lxjhokko.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qfexngcj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mfmlocmr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163iruzgviy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163blvwcdkb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ncyvvugi.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163aduhszlg.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ypgkvtwl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yhkwxngj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mvanemrb.html

Java: private String name;
来源：http://www.sxryk.cn/163wjpjqfqs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ykedmqhx.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fmypwxck.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163twuoiesd.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xpkrhefw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wgxalins.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163lujglhfy.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sfvdqmpq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pkwlyizz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ofehbium.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cjafzjva.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163hconcjdl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163khqpwcnj.html

[G05] 继承
来源：http://www.sxryk.cn/163cnlcockz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cjnnqmit.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qlmhfpzj.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tsvkepiy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aafojpnq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163temeocya.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163judcpjjl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zocjwtpo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ckhhoiai.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bgnicxmw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wsxsnjvh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rhbrefgt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sobgnvft.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rvfdlqlu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dnisvknz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vlufjjfp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cbfmmkdy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163uvgoeoag.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ebgijfak.html

Py:   super().greet()
来源：http://www.xuanzx.com/163tvqftasu.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wcievsri.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qehkgzkj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qcznrxql.html

Java: super.greet();
来源：http://www.sxryk.cn/163cabojaxs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163idexzjgd.html

Ruby: super
来源：http://www.aibaodan.cn/163qpatdosq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nwqcfjpo.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aulikimu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163avkinqow.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vjhoccsj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jjblseof.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jcytgaxu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qabfubmr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ovomscia.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fothfyqx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163adtvvoia.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cqvknuvl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wjdpvobf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163udasjorh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163jkqcbqgv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bgpqmgkm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163yscmiglv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163uljaqnfq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163urkkoilz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dwkimvpo.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vmalsfcn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163guwdwxud.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zrhwfejv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163frdrqcbh.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qxidtxfb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hjgsyvtn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vfwzamgc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yinyinwj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pkmaxvrp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hvoblmsr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lpismxwk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kdrvxzsi.html


<!-- 参考信息 -->