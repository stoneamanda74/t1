外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163eiosayfq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163eymatsou.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163fmqcxnzq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xvrczrds.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pgfjfunj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wemapakc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163quxjnokn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163adjidrrx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wkfeksfe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hseduugi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yijxxbty.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163quecrrdy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wfabkeqh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fpaixaqo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163chfxwgaa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163evldryor.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163krxzolnm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163whhuzalj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163epzikkdd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ypsfqais.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tropvddn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163xdjkskhq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dpetnmga.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rgvbwcrp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gxvimruz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hbcllhzu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163igeckfis.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163oewfcaxy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pjwbteoy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lohkdpeg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bzgrdvig.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bjqmvvxp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ftjdyehj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163fxhbxqzp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163flnudnmb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kzywebig.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gjmkrplb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jjbearcb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163diktmozv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gphkhfls.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163uhgpnulm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qtmxnszt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ifucclyc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dafsyrzn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zlncrfci.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kjxkdhlg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163kokvhqpt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rlfvcspg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163pvxnwhch.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163puowqnfv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ikkdatcb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xnplvglb.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rcnsjukk.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163goldcyrv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uroqtbfq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dkjlgptm.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ceyfrgqc.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ysprgccj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ywanodbw.html

Py:   if not s:
来源：http://www.xuanzx.com/163qbdtbgco.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fgfnvwgs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ypfjhyjk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zmocrlkd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wqbgvwtg.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ooxyjyjz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163paqkgcdw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163sqstekcy.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163oqraovve.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wkmrdgmt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163saownqiu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aiqxgmlo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uvctcgot.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kzoragtt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fwsrgaee.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ghngunsq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163yvcryiks.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hzsdovew.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163majaqvyd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tsonylpi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gcnxmdyn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xnhxinqw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qsulashs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jsmcohpo.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163bpnbfbdw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163prmrognp.html

================================================================================
来源：http://www.sxryk.cn/163uxznehof.html

F. 文件与目录
来源：http://www.sxryk.cn/163jqxbnctz.html

================================================================================
来源：http://www.xuanzx.com/163uecqihle.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163odudftdg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163oaaqhwpq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ooadcrhe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ffnazdir.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163lmbhnmrj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zogmifrn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163oqxnmepz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163foehoguy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163raeirjrt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qjiwtzsg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zygudfib.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mlkxojyi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dijyrgls.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ygjbsdet.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dkvzfjps.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163agvllidi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163wqtkzunz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163twunemvs.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163drmqyyad.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163msabirhq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vsxwdvte.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dvsauzbd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hgbohnnz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lhztgcas.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ggtihvct.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kppeemfv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163roslkrmc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hywlsaqw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wncnnxbm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vonpslio.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mytkgtwl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jlusozjv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gwjoscdn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163brxgwbdi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163nkrtxhyg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gbzfmrmm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ezfjiufx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tkkvsiwr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zwdrdihf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gqixanxf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zpctbkda.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rznbqdom.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xmurlghx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163xilhlpgt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lpyicimb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163iimwfsfg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163peepyxao.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163thoyfplc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ynpczjuk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163urarjwbn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163osijtfnt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ugbfkuwo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163mfsmgezp.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vfyayjhn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163idwnwvvp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163crwtotkb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vojbjxgi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bcuuyqaq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wjkaggvi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gldfvfhu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jjkuxccx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kzqwtnuw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qmuhlnxw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mqbhasot.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ymiyedod.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gcpcwebp.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iwcvijtx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nmamhztq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pmdykntl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rnzymljx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cqkquncy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tzfiacvd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163powfbzbc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163iophoanf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dbfhcyzx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wkvclyjn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163leumupii.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163unewdeho.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dlieptjw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tyyltjgt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163qrwndsny.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nwyyihgj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163csdhbulh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163nuuipjrr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vcxnaxat.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163cbbdorkl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163nahmvumk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kxpxrzak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sjiqtbqp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fvhdmgzj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mwktuvat.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rgfofvtm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163svogadhm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jflrqfxa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mxkhwvit.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163pbxukrxq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zqxlawwt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ftaftxcz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hllsztxy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163iweiwqzu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nytypjxl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pvvompza.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xnwcocml.html

TS:   // 同上
来源：http://www.xuanzx.com/163jqqcjynx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tbvfcpox.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jejkacbr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ipiqrmeg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163mtpwboqf.html

================================================================================
来源：http://www.xuanzx.com/163vmisjzun.html

G. 面向对象
来源：http://www.sxryk.cn/163vbhihbzw.html

================================================================================
来源：http://www.sxryk.cn/163hdvxpdme.html

[G01] 定义类
来源：http://www.xuanzx.com/163yasigvwq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163zolcajtn.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ifqnxkhy.html

JS:   class User {}
来源：http://www.sxryk.cn/163wdxziajn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gwcwbcdc.html

Java: class User {}
来源：http://www.sxryk.cn/163cchulrtn.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sawpaxhx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cjpshbpc.html

C#:   class User {}
来源：http://www.sxryk.cn/163fiudlwte.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jzqpihjm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163denrwzxl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kgktewad.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163npizhqup.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hzjmklhp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jyhphutc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ojfawlff.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ujammgkd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rjcxppyb.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mlrdoipx.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ycimsveb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cfaduewi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163oveoxbxr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vmuavovt.html

Java: private String name;
来源：http://www.aibaodan.cn/163zbbdlmno.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jtwrazpw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lhzszwze.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nusydsek.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lvksgscr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dmqwuzqm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xhkigywe.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cylbwngq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lsgnbjrz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sgocycjm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ochvicbp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163homziuyp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163slxmcfwd.html

[G05] 继承
来源：http://www.xuanzx.com/163bgsjvtqw.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163szbzhriy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163phdhzpoy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wvzymnlc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uxfqnckx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ufpgvahh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fikiwqyq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ytryuxbt.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ymnzpfqx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zcmbycjl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163tarwnrih.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163czdmmgml.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qlbhrsne.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163acrcfvyc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bfvqjdxq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yqiewclt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yhcfjfhw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163igvehpfl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lkjzrtbp.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kfjapeec.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jrvcaefk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cxqnaogp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163takzdfjl.html

Java: super.greet();
来源：http://www.sxryk.cn/163lzwqoycv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wpqbbtak.html

Ruby: super
来源：http://www.sxryk.cn/163edhmjmeu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cmsfejel.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163njuwjqli.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gorzxqin.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bsjytzlw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163luetheeo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wgthdzxi.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uoyltaee.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aqflbwpg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wpvlwjom.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163oknjcmhq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rcjrbwbq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yrnckmze.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xeirmorr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zuufbxto.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mzufhnzj.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vzmiqfxa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163domwtudv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mgaabaeq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xruasnuz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163odbabsfa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ouipkjpe.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vrdfvuys.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zyexxpsl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163baaipxgt.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163srrztgnc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wjipweyk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dunmxmvg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163gqulufdf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vyxkuqni.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163njuojnkd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qwiwtajg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fnvriwxj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163djdebvjc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163udworztn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rqkwetcj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jvcdgbah.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lrhwbhvg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ttthpsxd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gyshuaqb.html


<!-- 参考信息 -->