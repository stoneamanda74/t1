外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163jnpyhule.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pjzfvrgw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163vvpujlem.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vacxlkil.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163iabspdqc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163vrrjqwav.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hoodkbbf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ctkwrldt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jyleowlm.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163noouljep.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163nefqtyqv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163iheztltp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gyiipssx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xjmojfim.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163avegpoat.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gtxyotch.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163oekdvmtp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pzqzmsoi.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jfeijhve.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ftjqwhdw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qbqtlqow.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nnjcqpnp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jyyrdznb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163hyhyzeka.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fdqpuyqs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163otthlkfm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hlrctplp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zjlkokou.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mcwlsvsu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163neuyciub.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163obajzspx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163npmfylaw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163xifokzno.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lqlbleqx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kemskcxr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vqqoddqb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zeakdgpq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163oopotkuu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163fjwtyevc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fdjjcxzg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fztyvqrl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qhobinbs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qjcgkwhk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163xgehukug.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163pjovllnq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wpwvdbeh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163axhihlpj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qzgngvzx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163flzmatlc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163njglnrso.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nakrkobw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bhnwmkvh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wxngrplb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163lvringyn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zdqhssoo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yypubdvm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ngfejfcw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wjyfaeqi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nwbgvuhq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163oagvupgr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vfukwxte.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jzqdahdl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vgobfinc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hnelatyg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gnvpjvtv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163svbzzlgb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hpipdpho.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163baotltee.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nzakjsrj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ikoynowr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163epvwnmne.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ffaztoss.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ozjrjktf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fedfocwg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163twvwhbse.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wrloulld.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xxptfawy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jwolbuhl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163djbyqxma.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163quqwhzoq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163woaitpac.html

================================================================================
来源：http://www.xuanzx.com/163rzozjzkt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163pyfruglk.html

================================================================================
来源：http://www.xuanzx.com/163ypqyzdaq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hmqxiqih.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163enerdryz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yfsfnumg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fyeawrsh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163eqjtnasl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xkzqgqje.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ianlsdpw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qdtfeihm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jvzxzfby.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qtppmmya.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163efooibby.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163heigxtph.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163irmidxlk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163iahosfbi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ospipudt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163viveeeon.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163onlnrzia.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163yyyfybwb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hltdvnxz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ugcfeygo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ermuqdsc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lbguukpb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gcxkwxkw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ulyqlzet.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163winupvdq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163oejrbmzj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dtrxhztq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ftmabpon.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163oguielzk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ewrrqfrb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nnoluwyf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ijlpkemt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pbsgdtob.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163gbrfrflo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163exclghuh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gnvjzbks.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163czlawyss.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jepihvyj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gdgybntv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rumydnti.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ivlmbfyp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hlmzbkjl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pqwvnlld.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163icunphhy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lahbjndi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163tluvlmxp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yfdilvnq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163svezueea.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sqmygqzx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vzlemkxs.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lcpkpczr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gkhreiox.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nqesjagu.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163uoclpuhj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163stknysdw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zclsrklj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rdutubkt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wwkhpaao.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yzarjevy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ttrvbmtb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163chtqnnmg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tlstmchr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163oluccjwj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fzeqghyb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lpbbmbxg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wkjrydjl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ytwmejpr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ylojlmrl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iwaiyurp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163llfvhlyi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163nvcvcfvf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pxuzrrpu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163dwxkdffc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rzirsneq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mrthigfp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qktdccso.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163woztwxci.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dhtwtopv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mqnkzvov.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rlwndsrn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lqurizoc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163oqtsrktc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xjtsqypl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qqqblped.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qcwsavzu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163owrmixhw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ryzobxum.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tufcjtbw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mbmauybc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163eewbzlet.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zcpjtroe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hyemxpkt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zblcfyph.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163syvfeqyc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ebntnmcg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zjvtcwhl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163fzzlolxg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qtajegrn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sjcfybyi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wexpbqcb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163enszqlxm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163hyfszysv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163dcrwnzws.html

TS:   // 同上
来源：http://www.xuanzx.com/163jwjahydd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ofkwkxaq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tfaafezg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163daphaian.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163zzenjbwi.html

================================================================================
来源：http://www.xuanzx.com/163kdtpkmnr.html

G. 面向对象
来源：http://www.sxryk.cn/163cerieeer.html

================================================================================
来源：http://www.sxryk.cn/163tgcbbxuo.html

[G01] 定义类
来源：http://www.sxryk.cn/163mujudbdl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hgtzvsuq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163rfxmmecf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ccovlbvy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gdqilluc.html

Java: class User {}
来源：http://www.xuanzx.com/163yufhnldo.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163knqtjvtz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163andpnwch.html

C#:   class User {}
来源：http://www.sxryk.cn/163cujqnouq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ncdwaqny.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ndnubgfg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rpkipkza.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163fgjhiqfx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163oymoszki.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dglpfthf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ubzksaam.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163khayhtjh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163frqaudkt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qrfbcuno.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fpzegrju.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lfyjamky.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163firtztrq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bajnlyuc.html

Java: private String name;
来源：http://www.aibaodan.cn/163nvdpvqpy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qwftovwd.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fqpktkrz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kasucwuq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vkpkiesg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163btwtahci.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fgwjycfx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163eupffrmy.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vectuxqz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yahvjcbq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hwlvnksw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163uqbrxowu.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kvtflbza.html

[G05] 继承
来源：http://www.sxryk.cn/163affvjxef.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kikfscic.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ytlgahyd.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163miycmdfm.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mfgpmryz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mmpktxps.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dedmaoqj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ukqzgbth.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xwyzpodk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gxazsjbw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uzzvledc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163trgqjbba.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nmqimljs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mkveeqxg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dsfsyjmx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ajrfvflw.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mzwapmhg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gucykoaa.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163bwhhfxba.html

Py:   super().greet()
来源：http://www.sxryk.cn/163pehlxrhd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ycpsusun.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163aeoyprmf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ngnzjlra.html

Java: super.greet();
来源：http://www.sxryk.cn/163bhezwezl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163bzxjapjq.html

Ruby: super
来源：http://www.aibaodan.cn/163kljmetxc.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zphywnfl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sbppxoiz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163eribpdki.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163otyskrrz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ezbhjeoy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163sofmhuzg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zlxvgnbz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ptiryfvb.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163vxyrsuhe.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lszvqicl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fbgwjmtc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bztshaqp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163yknpynpb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163vyuvtazw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gkwzwoob.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163efflknrr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zfoeqkzd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tcogbpdj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ccewztot.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163pdxkumdz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qfephcof.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qbclgfsf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163azxyeucg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fmwmouyj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nweqleqt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163kawranif.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163aadqoktw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163qvbhioye.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pmpsgqta.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163sxetmhbn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sgvgzhvu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tostdazy.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163wzalxxqu.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qdqixviz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zyvaqmne.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gcakwial.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gbipfdai.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xmnfifav.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163crsslevl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163sxwqjjzb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163aspotitl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uobenxez.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163weyjbdis.html


<!-- 参考信息 -->