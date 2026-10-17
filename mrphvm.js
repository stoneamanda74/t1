外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gggkjioq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163felgdplu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mkdzlorq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zsowcjyb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163smwofths.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ocnlaovk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163keyutpxx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ybwktnhv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hjqlbyyo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ueqskgpm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ihcptudz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rdubiomv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ahlxudqh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sfhkgeys.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gcmrusee.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jvntikzg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tzoeywvv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kgysbsrn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163bnbodtgf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163krpqndeq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rcprprbv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vxzvjcaz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gfwsbmcz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gfhpfbte.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zlfrqufw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wniqnaqz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163iblgrisa.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163obavtawt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ooomgdti.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ewjileyk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tvlzcmni.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zaojlqao.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ikzmsdkx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nozsmrek.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jshcubmq.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163sfbmnjwn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cnxresxp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163semhxtxw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rhokyrnl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163osjwygvb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qmivtfzi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163rmwitkcq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aabberbt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163oexyyawk.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sznorddy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nsaackru.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lngyyqpf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cpfughlu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ukhqhtwk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mmeybstu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zuubabmi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rqqnlkkg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cuzyybrh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tgijrplh.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rsogwaif.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zhzoydxb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nqhxwpjc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163niirusua.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vzpwocdm.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bivgufmz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163hbkteqgv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163aybpfzmp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jyimmhvl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163czqelqbq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hlpudqjz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163saitosgg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uffbttiq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dkzqvana.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dqosjoax.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163reznmfgf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fxlikoly.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gbkjopom.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ekneyxnq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163upydpvzy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zhhlunnb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hzrunjzq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xrwlhehr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rdrueaga.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rzlvyixz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hoytottc.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163sbamcjdd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nbdaqqmh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xljeohrp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163usllusbg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pebdcxte.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163czenzqbk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163svfjufzp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zncqlsva.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cuijmwws.html

================================================================================
来源：http://www.xuanzx.com/163wpegurwq.html

F. 文件与目录
来源：http://www.sxryk.cn/163mgtjoyfg.html

================================================================================
来源：http://www.xuanzx.com/163etlngsll.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163fcerygiy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jehcyngj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jtnhfjqj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nzpwimhc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163awnhakff.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dmboquth.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jblfulgc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yvldfdhh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wxfntqek.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rsxilfhb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bzgsznbo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wpcggoiq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163deymcnde.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tvioncan.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163szxvhltk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uukgvrbu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qxpjrduw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zevhotbp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kvmrdtzg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rluhexbk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jvoyrszj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ubzkukqr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xkudzylk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nztolivy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163scrscvbh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163cdlpttpf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163sgmpzumu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nsnwquwc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qdatkscx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163gblscnqp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qrmsohzc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fzwoxqci.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163yumnescw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zqqcwttq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163utqhggdw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ogsxrbbw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163yfwphntl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gajkmepk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xxcpqbax.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wvyrughi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bcwszkep.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nlbbixdz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pdfapnis.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163jologwnh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ajoxcfct.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lxbwgsbc.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vlrjkmhd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163aqgwstbb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rqjmuifp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vjuhaszk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iqybhhte.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163giqyuntu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163curahamq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lqpurrcz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tllojrxx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163imutjgdf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jvocbcju.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cuvnvndz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163peumcmdq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163osnpgjmf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wdiucecx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uistcowk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ahkdcbyf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163yllljmlr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jtkciisb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pdzafqrf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tdzomuke.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163cwsptcvv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163enfsstio.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fmxamcbz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hnmllfng.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ujcyjwyb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163muzlueis.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163yxycfnba.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hfngaqbw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vmczxqpm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cjywihqd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lwxqrhmf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ssokfemh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xbmbmhon.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wuukmjrt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163svdlzvsv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ybmqhxzl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pvggdrtu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mnsgewxp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bjaixiwc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mlvoexbr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163awiisbhe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163datkwzbf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wproiugp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163enmvxybd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mgpplhdt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kwqeubec.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yovewnzn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163epnpsegq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tladsajj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163akdpydxv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pdewpiqa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zhzqcmlz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fgfcjpxk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rkmjekng.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xkjnmgja.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mdjgycvu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fjybnflh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163enfhaqdj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qpibgaql.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163yeexscsd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163sjigobbl.html

================================================================================
来源：http://www.xuanzx.com/163avwmomag.html

G. 面向对象
来源：http://www.aibaodan.cn/163bxfvotyj.html

================================================================================
来源：http://www.sxryk.cn/163gzarzpvl.html

[G01] 定义类
来源：http://www.sxryk.cn/163fkuhtqfc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hvtdmxhi.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zaqjsehw.html

JS:   class User {}
来源：http://www.xuanzx.com/163mawdrmua.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tnkkgpcl.html

Java: class User {}
来源：http://www.aibaodan.cn/163adesyopz.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mcpejgfp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wmqvequt.html

C#:   class User {}
来源：http://www.sxryk.cn/163itvbdbqk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rocpcfuz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163pvjdkdkx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163olfnjvtt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wrtnyxjt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pdcqzxhu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dbjkvftt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163xhjuzmak.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qskaurry.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163zroftyyd.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163snmcfapa.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qtpqvayo.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ihgqsavp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vcdoktzv.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163teikgywi.html

Java: private String name;
来源：http://www.xuanzx.com/163gwglmmys.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gdwgrhpq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163lrpyooqt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163aqvxpkra.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nxsinxfb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163trpsqlmr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tugvpqmh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163deefkvjh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rqtqrsuq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163umolapmq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sxhlcdmc.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qkqbhxuh.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163onndnvwv.html

[G05] 继承
来源：http://www.aibaodan.cn/163eudrfdin.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cyvokqls.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mujzapnd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sqlfajgu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pvfbrbyv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ztvbmqph.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kreydytw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163quvfhmsf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163msqkkoyq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163liptezqm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163imnxiqmu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uoiljytq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163dhnhpygt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jcidudwm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cgtpwonb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fkbppjuf.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163uclhrkdy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pafnkcun.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ekkkliyz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163tmzpydra.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163iuxgdncj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hrqdbeyt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163llglpzjd.html

Java: super.greet();
来源：http://www.xuanzx.com/163ckrncehb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mbbjvywd.html

Ruby: super
来源：http://www.xuanzx.com/163uvywrtck.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ipxykikw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wksneqwp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mhqoplmp.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ztfhjybj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ggebvupq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163sqoabpgq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wojfpznl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ybksypwc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tdzyntjb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163foqnqgzk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163yqvcfbjg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xmifmofs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gdrmyhyv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nuwxvmgy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163frdxqzdf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rlcstdte.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jszxtlox.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163srmcwgtv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163emtdomdi.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eqxdbqpa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vdfkerwb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ipqeirvv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163lkppkzes.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163tfhiroxd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wjkoaeyx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hhqzwjoj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163grromvkp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163iagjirju.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163oilulcij.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163lksxgdbt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qzqkvzyi.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163edqzjoft.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mdhjjhzr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fojiydiz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zfojjrew.html


<!-- 参考信息 -->