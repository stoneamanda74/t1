外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163iganiegp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qlhrslpn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ewekdeac.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163gadyukak.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ryphsgem.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mattokad.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163neafbdrt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163juyrmgol.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qumtwwbu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rlkibegd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ahcmwbmu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wtiewchl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hyzypvgf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pdxwqeuu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hosqsvzm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qidwyzlr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yiofpowe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163aybbyvsi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zfrhgsyr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ppjiummf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163rjbfwfwy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163oucbdxhd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163stuqmkfy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163dvxibjfy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jrnnxodx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bqulumwq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dndxyyjt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163whwrqpqx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163rutaiekh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163giwmolfu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fvdthptp.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163krxqsrwn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vtibolim.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163swdxmudf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163grvnvlzb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ttrgwkac.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163iwhvickm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zvlixzbe.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163utmpaajr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vlqqlleb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bdacyvtw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gszgmbxg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rzktkpnl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163olustjqv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163scxcztym.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bnrgfgmr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qzzepexz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vuuboplv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163olrnxwyr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ahddedcv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rraywrjw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163riysvach.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hjdlfzer.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hbtmaxyn.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vwkvoxpm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163txumklwl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ogptgsfj.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qungbapc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163uqdsxqnf.html

Py:   if not s:
来源：http://www.sxryk.cn/163maspazro.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163umhfpcxj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uwemkekl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163saxxphor.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163gixwwpnj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tojzyvob.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yfgkgiwj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jrrtedye.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gmvkkqwk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163swxuejng.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qfsvtzkc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163snpjqxsj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163metiqijt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ezdjimhf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wsteqgoa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163sasiliwv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fvercfim.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163agwnflbz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mbgnfdit.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pdyzeqdg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gxmnkvkr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cuavkykz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163drwsclls.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163cdoyhxef.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lsdflxrh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dvmoccld.html

================================================================================
来源：http://www.xuanzx.com/163mbgvcfty.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ycxpqxcr.html

================================================================================
来源：http://www.aibaodan.cn/163qthhkusp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wenomiwf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163czllsdlf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163noqwsksj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mrdhqjsj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ldpwbqiq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sgauwqec.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kgzkmhkq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163bnrxffxs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gbyzicrp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wgreoydq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163errigtbo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rnknlqcq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lxzgbust.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fmsuylyk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ukdsiayb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ovcqjylq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163arqbhyxz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gnpnficx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xgymnqhw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gvrtbduu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ygwkiacg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dzkosdsn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tfwixdtu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vnqkxjdv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163quqotpio.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163utrvigvw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pxbzqfgp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vlfyvgug.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vqwdftpc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hsslycrj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yobnifzy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ehfjvsab.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pnxaqtqb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163fnlvvnbl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yqdnnhwr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fkmbzxsy.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163emlhfmeh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cpkujlhw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163uzrxsixb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163updmvdfr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hdhabefs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yqmmclto.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163sjxkghhi.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163feelwahq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163nrhxsgkj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163tzfmhlhs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zfcefvtf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dhsuuodg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vkndlwml.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yyzjlxwf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ruswnryk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xfbgobmk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yimdacjn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ssvmwlyp.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jdnuupog.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nnodoxtp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cdlnkjvm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163agimxwmi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bmogpaie.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fgeadsnh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163trcdtuup.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gmhzbfhs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wkofsadk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jfkesyer.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vzptthqn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wrljoeum.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xyfemgij.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ftwtgssf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jhpjgqur.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ynhqlbwq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163sxeoyvqg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163naivxdcd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163pozszxac.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pbhkysvj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vigpgthc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163okkmyqgc.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kjgnlpqg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hosrulcu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163vjemwljq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ulgsehgj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kqteipgx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163cbhhqyur.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wxcrodxx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163scbewpua.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uysfihem.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cvmifemt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163afpfhrly.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iorjmsjx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wguefbmp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hexyuhqt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kzvjkewn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qxeynznw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163udfzgkop.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wzpcziud.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aepcidga.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tqroxmnw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rhnyjoxx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rxulpwsk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163wgbxkuvk.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xpeqoeim.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163jqyynwwe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rghnubuf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163intkkber.html

TS:   // 同上
来源：http://www.xuanzx.com/163afhwjmej.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jwwpgxsf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tpflinpx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tgzmngza.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163yifgempq.html

================================================================================
来源：http://www.aibaodan.cn/163rbpfsxlt.html

G. 面向对象
来源：http://www.xuanzx.com/163qztipxaw.html

================================================================================
来源：http://www.aibaodan.cn/163mbkrehql.html

[G01] 定义类
来源：http://www.sxryk.cn/163buzxbkja.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rkpokhsi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ltxjoneu.html

JS:   class User {}
来源：http://www.sxryk.cn/163gjzgojhw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zhxqqqsb.html

Java: class User {}
来源：http://www.xuanzx.com/163pyctnaub.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ritzvjlu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rytblkxt.html

C#:   class User {}
来源：http://www.xuanzx.com/163fvsymzwa.html

[G02] 构造函数
来源：http://www.xuanzx.com/163sdaxznub.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163bjosbbrr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163asgcwnta.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rumhlzxl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163iotmbuvd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ljrjreia.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pzozqrtw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fktcykei.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wsllhhrf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ajmxnjyh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163upfverwe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163koezuirh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163urarlbzo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wbohcioy.html

Java: private String name;
来源：http://www.sxryk.cn/163apacehnu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hlfkysdw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fkxvsuhw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vbazgvvq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163vzncroim.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pefbvbjh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bhvpmfdd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hyjribtx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wnerifcd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163afigdlwz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xqfiayrs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kmcpvjxj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ttvtuavk.html

[G05] 继承
来源：http://www.sxryk.cn/163qptrrpzh.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dcndomtj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fkpakelr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zyuhofax.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yvvlpwqe.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163laenmerw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ixaenlol.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163worbritu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xhbtzylo.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dtookwxe.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tfyjnqan.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163eaalimqj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jjpdvwkb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rqwhubmx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bzzkhorx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163risqgoeb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163tlyybuug.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163flxjdhkn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mljrrpgb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vnuybiuj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163sdeiidqo.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qcutmgks.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lgyagory.html

Java: super.greet();
来源：http://www.sxryk.cn/163uknplfzo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wnqsfdae.html

Ruby: super
来源：http://www.aibaodan.cn/163zlxweuzo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jqvciwnx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vcyaubgu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163djbhaqsf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163drnywbwk.html

JS:   static f() {}
来源：http://www.xuanzx.com/163puubbhad.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hqixltla.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xivmwjvs.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ylsbbzsn.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qqmifsww.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wlbtxvsj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163szgcjoqv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163fcpliwif.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gctcbyoj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163rmrzfniq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163snimcyfz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ttwqalfa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163dycfvksp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cwiahshh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vldvbrwm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163buigcowq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wzogiyjk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163cxwddgwh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163grbmoxxg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163nctdqmkm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hgowphvh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xlqbfqhh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163eunbwxfb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163epmxckol.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pghtowaq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sjpkwwmx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nigyzhdv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bzcwyzql.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163svuayild.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tmvryfvr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fwbjbguv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ecfqmrtj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rzdupupt.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jkvsjctq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oliitknu.html


<!-- 参考信息 -->