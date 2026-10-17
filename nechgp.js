外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163uiyzsiwz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163sefcmpej.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vlokgzse.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163joyfxmep.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163fwllhnvr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pncbivhr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rnyojloo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163slwvmfpz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gabfyyjm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163awkchodb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163urlcsgmb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hsjqtdpa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163covztllk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yhydweif.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nqyvvtsr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163pgbmaddq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rjufsmsw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mnwhuybz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ttsizdmt.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163maxjegil.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163djuwxqqg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xghoiehh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ueyijdnw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hfdccyvk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163nbzlimbz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rwbxmvrb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163gyrujuna.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kzygdflj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vhgkpgvv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wiqyltnq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kckkaxud.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kzmzxnwc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163btyxatqo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ngnxqvzf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163papjirgh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pprmfwda.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ndyepqok.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cmrksnms.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163eotxaelc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tmypmugz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rjmcklmk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ahhksszu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xtbgjwce.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163chnvsgcl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163zsgbsxsh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ucuaiids.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cqsiwbzc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zpxvvdsf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gdjxsmjd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eoobseih.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ozspkizo.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yqxhtziz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163layroejp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rkvcwzpi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dzhersqp.html

Py:   if not s:
来源：http://www.xuanzx.com/163oqmtiphw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ageabrwx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tsxnpkir.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oxvefout.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qzbwdcwr.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pyhlfmkk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ujuscqva.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fehaabfk.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163clcykzap.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vtwwkjxp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163aebdcidm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nsklcvfy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vscpqmwb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ogipinab.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zxecltlp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163cxneaain.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vtcfyiqc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163evofoqef.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163omxwnlud.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ftdbsxqp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zdaaggal.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jqqrhagg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163skhauybd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vkbcqqyv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163dckdugpt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rgakqcyg.html

================================================================================
来源：http://www.xuanzx.com/163fumlkjxg.html

F. 文件与目录
来源：http://www.sxryk.cn/163hqorgdzy.html

================================================================================
来源：http://www.xuanzx.com/163eaxifuvu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rremjldi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ktmuqvbz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ptffoaun.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gwkocwtp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163nzrtpyvo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163duxrronv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163azuudgco.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qzhcivet.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ydkpfwfp.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hfbvwvcy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163swlrduho.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hxfcifty.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yqaisvtm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163njyxpafk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nqixniov.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mnnypbyc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163moledquo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ambtdaij.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fqlktfng.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dgflohhr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163cpxoaldl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jliuhluh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pywhwlhi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sbtqdotm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bjpnaudu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163veqmgtuy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qehxnnsf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163omirpfig.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cmyxwmwp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uttnuvpw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gflsfvvy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163packdkkz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mthlriao.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rntxftcs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ubgthqcq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163acgkfeht.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ifpybcbi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fitvrqqw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xptxhsaq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zewrnilt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xmvqsker.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aqjhztbu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163onepvbpi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ixvsnoax.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dtymiulx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nmprddlf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qoxdsuay.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fsupdebe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gjlieixy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sxhvdjke.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jbtvugbo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qipfjooh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wvofeblc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163aizzucxm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qvtdykdd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163pqzojsfn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uvcegbbr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163idzfwxfm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xvjuithq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jraoccxd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ljgytqzw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vleoqnse.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lvetojwo.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xntbrchp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rnyjcrov.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pstuwnsr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163buxqnyir.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pcrwsgvj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163inajfbaz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gqhoptii.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rxbqbihi.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163npnilcxq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sknbcyux.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jrxlgxhd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cfanrxqq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163agmjlhpg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fwwcaafe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163alalbwqa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nffmcmpt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163pbfxvdio.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163lwstfhsd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kqzqbgzp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ieayklit.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ajzvvqsq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163egftpaew.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ymjrmgfq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pfjgifoz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gmnunyjs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163htbuqjbl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163dfbkzjyp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oqlpqblq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ggpkgmsd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jpdvhkzm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yizjklec.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163exffjffh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qikisoqp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ambgushs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pbqlvimw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zczlzyyy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163fkqondxm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163roxqwggg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163clybpfhe.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fsnxwmyz.html

TS:   // 同上
来源：http://www.sxryk.cn/163uirubklw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xhietweg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ulwfxxnm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163bygkiijf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zdiicleq.html

================================================================================
来源：http://www.sxryk.cn/163lbfplwkn.html

G. 面向对象
来源：http://www.xuanzx.com/163ayajxjdd.html

================================================================================
来源：http://www.sxryk.cn/163nibwfnmm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163uxpmtqwl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qeqqcdhg.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ioikaolq.html

JS:   class User {}
来源：http://www.xuanzx.com/163kowubahl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mgdvijlb.html

Java: class User {}
来源：http://www.aibaodan.cn/163csiauhyi.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yaaefult.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zlermikj.html

C#:   class User {}
来源：http://www.xuanzx.com/163etbznzkf.html

[G02] 构造函数
来源：http://www.sxryk.cn/163febhelcq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tgkfyrgt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163mfvnvsdb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hxaxzwmx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163haiviwwn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vyderqed.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mszklyfm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163zwgzbcml.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wvdamvvh.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ciesyjno.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163inkqfkyi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gmjczstq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vxevukax.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ryoongya.html

Java: private String name;
来源：http://www.sxryk.cn/163najaoheo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tjgulzsn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ywkaruev.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sojfgljw.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mlkgndav.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wutjfsyo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fmreleqg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pkjrmguu.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jzlzjssh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yzlikcln.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vcccpmtt.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163oypfoskp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163symwwdqb.html

[G05] 继承
来源：http://www.aibaodan.cn/163gvkchckc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bjltrrjg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163plctnrsf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163eoqpaujm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lhjqwmer.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gfugihpt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ciqzivyh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kmqdbfby.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163uihqclqr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hnsaabze.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wzzsifmn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cfyzfgfd.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fyfzuowq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163usgyrxiw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iwpvgqei.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kwfkqqxk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163xbvdbbbr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163afezlkxy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lrkqqmeh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cqixmifs.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ldthontd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163prmwiivc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163leuhovyz.html

Java: super.greet();
来源：http://www.sxryk.cn/163uqcuixls.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gejsznju.html

Ruby: super
来源：http://www.aibaodan.cn/163zeaccqzx.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kbjglfhr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yaehjpre.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mlwdgfvk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163pxbxxptj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bprriyow.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163aomlrraf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xpxvvaqr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163uccgdkcx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163erlssndj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163arqewohn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163duyxcwwa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sdxxodmk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hyzienmv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163slyodevh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163klxrilvu.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163apjjumcc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163sptppzas.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163phzgbkpo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lkjqbmpr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zcgvaucp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cfgfpdld.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vohogrgm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xmtcngme.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pywszstd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kdshjuqk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163lcpxfuoz.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mfqrgauh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kwujubdp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fakyqszs.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sqofrxhf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sgowreql.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163deozcbmm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zrewtgzt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163hapaircs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hufivinp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dlfrvzlr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pjgpockh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163gygvpwwv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163glnmfnbm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hikravyn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nijxtayd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lvuewfdo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163itohuhkx.html


<!-- 参考信息 -->