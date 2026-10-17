外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gpbchpzc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yqgrwufg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dcwacytr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163exauulcg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163snmnwpnh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xwohrdwa.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163usromrsb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dpvvrrfz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hjhlsnlx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tcbxyuri.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163vvteegzs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dtlilzuz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qphtzlus.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163sqawcomq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163vznrvyam.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163udhaohaf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163eveuudmb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gaeoxduo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163sfnyhncd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kodeyivj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gxcfxgkh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163azlzehak.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bakqenvi.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tfwnejwe.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163auaeaybt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hppfpeig.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163daklfnyp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163puuprvxf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ucggydjd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163uhjcllde.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163eesnfywo.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cfirpjlo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pbhvxcre.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lcdcpqtb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iwrnjhre.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fucvrkwo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rxarimaf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bgnbnlud.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163zedncxnz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ldvzcdyb.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qcxvjqmy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jnpqvrge.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dmthsrop.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ccarkeft.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lfyhmqgu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fxslwalk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163vddlqvpr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lmevsank.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163woizyomc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fwbjlcmu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qnuklxaq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qegvivkt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163csfqdaet.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iodrxuep.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zhdbsuxj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163rgxktahu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163aemtfuem.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vihfhnbv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163xnctoasb.html

Py:   if not s:
来源：http://www.xuanzx.com/163vhuoxbzn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163eimgwyid.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fsqjjcaj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jxcigpnb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mrlrzwwg.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nahmtfvh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163fmpcctvc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wcwjxvde.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xjerzsxn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eypiwyrj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dkkcylcz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163unzmjabi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cbtreodv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163heiqyvfg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gjbmdead.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tktqwzgf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pofanzeb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163pglrevgg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163welzpike.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163edrbxobh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163geqqmxfd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163werzkcvs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zxkiivxj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yzmanxpu.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163mzyhykgd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zdkrtvmc.html

================================================================================
来源：http://www.aibaodan.cn/163ptrgelan.html

F. 文件与目录
来源：http://www.sxryk.cn/163xtoyljic.html

================================================================================
来源：http://www.xuanzx.com/163fvfodgxo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cukzxybp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xekmtlds.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pklxvcrb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hsnglabz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ukfvvtla.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cyqkptdb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wgmgcull.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lqrsusfb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gfhkaexy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lotutfpg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xqnjlfco.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163etzwuese.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lshtkzzm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bmreoqgx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fjabpzbq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ijxpvole.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rmsefbhh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vtcgzhem.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163aiqmkvek.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vjplommn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rmizwsez.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xtyllvzt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vnfbqnib.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lbuoavvu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xoeprnpw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163einsjjtk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jnkijebg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163arndehay.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mmfpimhd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jmhzzvvl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163clpkiqaj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vjvgxzwj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kirmedzm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163bnrfcbvx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xagwephm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mfkpynyy.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mmzjcund.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gmfekyek.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rmgsfbba.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rlnzcagi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oqozvree.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kqngwfcf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163faarvaxa.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lvticiot.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wwdhtkoy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gagpjwnr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yjxvdpgj.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gxaulmpd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bsgqbjua.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sdupardb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bfqfcoxh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163oeivwtaj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eudyoimh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163akyoiley.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fqqcsjvg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rdqknwop.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tvsnxczv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fhkrvhdx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uxfoucxd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hyvcckfw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163nqysrpzd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tzlftnax.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163udazqwbv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wvqscxdj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kjwyseps.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wnabeier.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rqgscwsz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eqfurtfu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163eoydijvl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163simzztvm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163yvftbzmc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wcsachuj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163cumzgorw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kueknmow.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lvzbwjam.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rfcogbhu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163reoxncdc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163epvmikgw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163uushjgse.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jjlpruzf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dimezcqu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163abbqqulx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cpoobiop.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cqoibmkb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wimpgodh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sjdhejfn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pjwszqoz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163armpsffj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zmerxvtx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tzzixrvf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pyezrabx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lyxnczsp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kqnfsizf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ohnapkgd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163standzni.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ywaglzkz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jlzxcptf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zkdspnbs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gumixujv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vipiuwnz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wwnsyciy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ptbdcjeu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163aingzase.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lcuvborx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gqzriwcx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nsgvepte.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xiwugmfg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kyeigozr.html

================================================================================
来源：http://www.xuanzx.com/163rfqewvjh.html

G. 面向对象
来源：http://www.aibaodan.cn/163vqjnjxqy.html

================================================================================
来源：http://www.sxryk.cn/163zvdgtiwn.html

[G01] 定义类
来源：http://www.xuanzx.com/163atbkybud.html

Py:   class User: pass
来源：http://www.sxryk.cn/163uwklouua.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hqfqqaza.html

JS:   class User {}
来源：http://www.sxryk.cn/163nxjyttge.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tymanemp.html

Java: class User {}
来源：http://www.aibaodan.cn/163qxeknmhy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rnqqokum.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qhfyoxse.html

C#:   class User {}
来源：http://www.sxryk.cn/163eoxwzknw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kifdrcjt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qryalvye.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ifzdxonx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tboqsyvm.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163avphxgtj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163nmkwnpbk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163bkzoicxq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fsnfqbqw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dbtjilmy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wekbyxnw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tmjmojrr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163agbwpvan.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bvqfkrxb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gczbtsxj.html

Java: private String name;
来源：http://www.sxryk.cn/163rjplputq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cmvwlpcg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rtbjgdia.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gvuwqvkl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pcxsegds.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nzrxekiu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gtdsaeao.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163muyxqfqu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ehkbagaq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ejzniuxr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lhfoypqs.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163guwjcvbn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mkrouspe.html

[G05] 继承
来源：http://www.aibaodan.cn/163xbxokdvp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tuivyejw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lzkgeeyv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kbqtxouc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wlzhshch.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163homifaao.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163sclavevl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bkndpexj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163vcwkchxa.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zqocquif.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163lpxobhbe.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hvqgwqrz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yxeratvt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yjinprvm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ulmxqtbe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163kfmsjkzy.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fsgzzkbl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bstbuqcj.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ptddepot.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dyxtnaqc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xnckrnyj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hssdxayp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163giyhahjy.html

Java: super.greet();
来源：http://www.aibaodan.cn/163lnvubihn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xeipwcuv.html

Ruby: super
来源：http://www.sxryk.cn/163uyvsplpk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bjgkqjkh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lseilbzg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jxcdvxaf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nejzrdpm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bodhmldx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zhmvcvof.html

Java: static void f() {}
来源：http://www.xuanzx.com/163payfvjme.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163scwqoddy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163afnzrgxz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bsnpudjx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163znqnuhew.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163elvdbclc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xhadnydn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dgmmolrv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ukcyigqk.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163agdpiazp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ugzcqqof.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qsbdrvfm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bwzzjipv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lhpcmfig.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163csldpqts.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fuvcnnnk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163upjtysmv.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163imdqjfjp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ilnqhbvs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vibkaoby.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cihpjcxe.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163odpzlgcs.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163uccbfdma.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163sbmmltcg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163uwwhvlkq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163spnhxram.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zbxeoqtv.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bechmlgf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163goknxvnc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fanicuip.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zizmhyxa.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ddrekjdo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hqldynaq.html


<!-- 参考信息 -->