外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ogffaaoo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fpjpxqdn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pyaxeaev.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pgwnfoqv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163subqjyps.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163txhyuguv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163fzoyging.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xesboyjk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uetgtsfp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dqyiapet.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hdrqpsnc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hjdrircm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163svhrjjnv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bvazigoy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163kivujnva.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dmfufuoz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qmakyvmr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163gbqtqvlg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xptxgosp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163zipnzcps.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jpivnfzn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sxptllvu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163iyfpzfoj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bupzuruq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qsfjdita.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xydlyrxu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hcusdtmw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ifdudlpt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163npykdhgo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mrhwuwfs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yrschcvv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163digsjxhf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163boyyuhyr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bfytkiom.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ldaksgws.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pcoaeain.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163fgqbkuak.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cpmuwlql.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fnfbzwcz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163bkqidtfn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vbgwvdgf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163olbruwih.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cqkmwqpj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163qjrpwmhg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163payqckvg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hpaczlmq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gngmdcxc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yrdyltjg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163thhqfbtm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163regmszcy.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163fubaqtxo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yvxgqxrj.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163aaxjlqwd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bhgllgcb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ybyqrxuf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yyuwybsi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163extsmrlt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163evnqxupe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163copmhfxa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163csnocflv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163aacqmwfk.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163oewoztyb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wgvbdxzz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tnyumzac.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rwexuvbi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163heiwdykz.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163anrhvmsc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163laxowcwc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kzwpidns.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zsgrevdx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163plhlhmlo.html

Py:   if not s:
来源：http://www.aibaodan.cn/163acaigjrk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hkqggbal.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xuusjird.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163keakkuau.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ulepxesh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lrauzswk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163aiwapcpk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163axjliumk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ngkinwnp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hsklrafv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jzcfcyrg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gzkoxtyw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163htsfgqwj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pmujcdwv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fyezdbdj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163iewkeqfb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wruuttzn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qxeyxxdc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cejgrhjw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163skhybetd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qmnegxbo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163czmgkuqc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163znvbcusx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fhgcnxps.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jdhudplh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hmfldzdb.html

================================================================================
来源：http://www.xuanzx.com/163aqguzonw.html

F. 文件与目录
来源：http://www.sxryk.cn/163wvsabpwj.html

================================================================================
来源：http://www.aibaodan.cn/163rcxskntc.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163gkuzaxqb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fdgdrorc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163yukspghg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163aatutsjk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dokqpxlv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eyxmkfzv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hjnoxjrq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ilsfzuyv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dymkcsee.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163koodruhu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lllyxarv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tzpiqlgo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jlewujkl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163nfqnsixt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163awwomlzt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gnzgesyz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163kbrddaft.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ghcwmzxk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vdblgvub.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163imslzrhg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pbvdfbff.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wekgwfrh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lnewaapi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gjxogebr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sxbbtipu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qvxmyhwv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163iqjcswjz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kqxpblkb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gxphuwdy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kvbnkaek.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gytbbpqg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bwawpxpo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bnzpqxlr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163aflxtgec.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zoeqljwh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vdqpquqf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163adjxluge.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163gnjwmmxh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163beujqgqs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dyuscvou.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163taqvfkyn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163othsrwpk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tdewjgxi.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wvqsseow.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163stjcccqb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wustsbqt.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163zngkinat.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kncpreas.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jvfqiwvv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163buktoupl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hurxgdfr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vmgnnxlm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163exzvethr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dwemxqvr.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pwnepwxn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nhjtweus.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ssyxkqiy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yxkyhdvb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jqnepqci.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163riuezknx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hryeropu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ascedkxe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163clzdwall.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hypulugv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hlblstlb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gvmqbkxz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163waslegfc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163htepcibz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ggseuhnw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163nlpxwqww.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163axvtgffm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bgjuyuwx.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wrfubphq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163elgdpmcg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163edjfkrmb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vuvxnawf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jnmhjhxi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gmklvndj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vwrgxfym.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jdmurnjv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nbcycekr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163souowsyf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iowqslfc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jnfpsgjo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qbqnxfsb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mxjmyvbu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jmcyhccj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uoaeuxzw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163leojoffd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ncrukgtx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163njzopvoz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pzufvlsh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163acgkqmso.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nsvkgrdn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xidvlnuu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163utyrmyno.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rmhtqnqe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tqttivbt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uscdcmhy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163fzbomdzh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163aabxwnez.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163aemllkeh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ijdxriho.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eqpjsxkk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oivuvifp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mguadmnw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xartaogk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rwodskyp.html

================================================================================
来源：http://www.sxryk.cn/163fapcxcnp.html

G. 面向对象
来源：http://www.aibaodan.cn/163myamhlqn.html

================================================================================
来源：http://www.aibaodan.cn/163lfzobqis.html

[G01] 定义类
来源：http://www.aibaodan.cn/163nkunvaaz.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xqzlrnys.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rruvlfza.html

JS:   class User {}
来源：http://www.sxryk.cn/163fencfhfs.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163lfuwrnry.html

Java: class User {}
来源：http://www.sxryk.cn/163ycyramyy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cazpoxib.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ibiuoljf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163oghxdguy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163jyjbugdz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163exibkthr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bkkripkr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zmngkzyw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zffpcmhf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sdyqgbwv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ccliluer.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dwtecaax.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cxksacvx.html

[G03] 实例属性
来源：http://www.sxryk.cn/163laqufool.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cbfirdpi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163edwcauyf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163azeskuxq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ceixrebr.html

Java: private String name;
来源：http://www.xuanzx.com/163dcdhbnos.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dkfjqtqp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163klqvhzqn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163omiaoctk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163sxyrbdxo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dorojftw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zkycdiqn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163iiwqxnua.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yhnsouee.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bbfzgbuo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wnepdjpv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163itbkxvkl.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163chyqookq.html

[G05] 继承
来源：http://www.sxryk.cn/163gyfzyebc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tvsalxrp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mirstkbw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ekksdicg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pegxabjn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163casnhyhl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gbcruoxm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163tzjuluxg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163chncazuc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jovmsclu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163oulmcbmk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tabjhzrk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wdmnkmbg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rnjhzxeg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yypdonts.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zqakqnwv.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qpsgkyop.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163acbewrwn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gueoowvq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163eiwyzluo.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163fskoqiqk.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lzsyrqrc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tbphvolz.html

Java: super.greet();
来源：http://www.sxryk.cn/163jsplgchh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163awnuwdfs.html

Ruby: super
来源：http://www.sxryk.cn/163tixpldlj.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ojtpibpq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163avuxsebn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rbhcmeql.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163hpryrqcb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163vfzwslho.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ukakaddu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lzqbzxgd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163auywwpzv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163erlxbhsg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zdvrrprq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ffwqdrzq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mfvmyuof.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hjvtovky.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fqdxxymh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wdelycze.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cckonxdh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163cthntipk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163shjybagl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dybtnqdn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163lbaspwbc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jfbrqaiz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163upsdqawc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lbingpgd.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rhmqwref.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fhfdysze.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ysrzvwss.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pqqrsevf.html


<!-- 参考信息 -->