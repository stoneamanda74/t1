外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hxbpoutn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lhlnjjmn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fncvovzq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wglfjwfh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163phfazhey.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163mgqkwvkv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xsxuurqd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dnbdiidc.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163zxugqfec.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lmnulpzj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rowvkccj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163skqolrik.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zwfqctjt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pdgsfjyd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163thtumwlc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tekllied.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163glwjssss.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sbzvxqmv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mwbddxbt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ppeyulfd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mnhjtttl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lxosihkz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163uqnxnvjs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163yjozjgyo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vxzcmyna.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tcxnpwda.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163omyuslmr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qcemyiea.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ysbdxeqz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fhwixypa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gnayenek.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fcnnhbey.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163puqmyngy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jxijjnrw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bldsakgs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163knyfjwpm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jkxzqxsm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wbmrjeis.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dtcuevdk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wcqmcpgi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163neihrdsc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tkakflan.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163inlvdvad.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pfvwvgve.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kwxknmpj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ujokqjtg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kpghfpvy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zzbdlrht.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mezonqho.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dtcgulnn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qcwjwcmb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iuleuugf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hendrygx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163blthpdkf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vyeqcnhx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163pmzqmdyr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lkqomjsq.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bsuwvclt.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163iphqrcli.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163alhvtpmm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ovgbkors.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163hednmhtb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wkcxfvgm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163pcdjdsit.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vobagzao.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163nhmigeva.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163opfmvave.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ffhubvro.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163hkwsbief.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dwjieibk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bbojmmcl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163myoocwza.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wyusnsrt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xcadnhcq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pxmutuwf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fegldzip.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dftynbdv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vbtnckpz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163vbuzmxyn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163jydeekgm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zjfkelie.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163mndojfjb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163optdmmuj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163sjbvzshd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163orqcmzeg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163udxoeqpl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gkmihbte.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nkcwxhnd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nkszqwmb.html

================================================================================
来源：http://www.xuanzx.com/163tewojjku.html

F. 文件与目录
来源：http://www.xuanzx.com/163ocplnexj.html

================================================================================
来源：http://www.aibaodan.cn/163ojslftkb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163eeieikdp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ovolfmpm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163krgygzzv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163swcuhqko.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163evpmtraj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163voropodd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fktupoen.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jgonigdo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mzoauscu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wnfankkf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dhdmmflx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xibpsrmn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xsbyfjhu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vfsmgcnc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163icsyuwgb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kepadjen.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163iwsrhyfh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lwkjjmfs.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jvgklwvu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ixverdxa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wjjauvnx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rgpcssgu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nbujozke.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vkvaozlp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163eborhlkj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163xsfotspu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lfmgxapj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163etjvbhue.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jxtiiice.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fsoddjqr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163btuhokrc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dysxrnue.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qoidciud.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fkotbnbi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gmghkglr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ztnlxkpt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163muceqyht.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kwvkfpxh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zzbkvsvo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tnlgyigs.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wxfirvnp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lbirchhz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yfbbafcx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163psdrdmrs.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163aymsdyxd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mgahedpu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kcxpejey.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163slrwftcr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ssapdrad.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pmnuyzrp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163syfioxdw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ovpjjjgp.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jxlunjgb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rtxyqxka.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lcokhptl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jrhkimdy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lpdwoopc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qrnfgivb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pumleyuk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qhxwmvqn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pgkxgsgi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yhzcqkqd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qovrpnof.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yqtfjafm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rcmpjehk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rzsbyqys.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163afdxmbhv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fvbnxsaq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163aztdqfcy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wicubkoz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163bnyduhtl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ipvfnpft.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163flllgypi.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163cbginopa.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zzyifsnk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hpdffiot.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cysmwvhi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fnpwsmzw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qscefkbb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163sgufpahj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xqzibijs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wdvihhja.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lkhjosqm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xqhjwwem.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pzkpwdcy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iiacujvs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163dfpyrgiz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163fsmcxyig.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oghajydw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163kthwsnma.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163yyaloyjh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fqsifjmd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163prfulars.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zgavprxb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ufwctljs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vyoxtqit.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jxealwnu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gitrfbyg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nyeyqroz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zpimdkxf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163husplomt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vhifvxtt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wnmbuhrl.html

TS:   // 同上
来源：http://www.xuanzx.com/163xsyefdgf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qzxeicnk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163macikpea.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vklivefy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dfzkqogd.html

================================================================================
来源：http://www.sxryk.cn/163yxxiflwr.html

G. 面向对象
来源：http://www.aibaodan.cn/163pnbgfrsy.html

================================================================================
来源：http://www.xuanzx.com/163hmgrduhx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ukliwsmr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tfekaqmf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mchmeyiq.html

JS:   class User {}
来源：http://www.sxryk.cn/163ayacwddk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hcqbbxbc.html

Java: class User {}
来源：http://www.xuanzx.com/163zgvvrtil.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163plcydnzc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dbrcikil.html

C#:   class User {}
来源：http://www.sxryk.cn/163saczizhe.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zfpnvouj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ltbfxswn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kaisezfb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163abgjtxlk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qfhsvpcg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pbiddbkx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163itmaljnc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ohnkdwpq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ajntpyxi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gxiqoqbo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gbaqirow.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ehhyyelo.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rkteitwi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163znwpwsdy.html

Java: private String name;
来源：http://www.sxryk.cn/163vaiiktls.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dzbnilhq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163skazinmw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fhpgsgyp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163juotvzib.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163sfyxflfk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ljwtrnbg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163nmfqooby.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163raupfwnt.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ptbpotwz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ngfinnvh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163igvqasrk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ituyxwvl.html

[G05] 继承
来源：http://www.sxryk.cn/163lrrgshaj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163guxkqiuh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163meuidyok.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zemswbwl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163peakfvkx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fngygdlc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zbfxtlwg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fpylmvrp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163itghzxrl.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rewsnvxd.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163npqtzzyn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pxvsnlvq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163nbomshqf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163btttyode.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vuzmbslz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163phhznpdm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ocapyoct.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163looixmqw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163epbefdlx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hmubamfp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yzqxqhpf.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jfbfybyx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ebayxycd.html

Java: super.greet();
来源：http://www.sxryk.cn/163rinfbljn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163gdqdvnjz.html

Ruby: super
来源：http://www.sxryk.cn/163vozfwlgx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sdkiochb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163puythehh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163csbwlxyr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ngbfiqon.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rzocxmhm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163isoiygvn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163earqoifm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163deirzceu.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cpiwdlpz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ntjrdpua.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kfvjgjze.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163pstgxamc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uribnncm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fxvnscvt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163qcyxbhmy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163uefiedcn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wetrhgnb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qcidzmpc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dbweodgy.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163akltwysd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gbzosjdi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lwbucuwa.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dtlzoqcr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163dbaxuawc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163jubetbnv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wpmstqwd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bxgngpdp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gledknbx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hnvhzjlq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163aimfglcv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fnazomrn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163quqkvqck.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wkaktotb.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qsexsyal.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cwjalyls.html


<!-- 参考信息 -->