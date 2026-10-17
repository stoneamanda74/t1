外链999!wailian999！

Ruby: s.reverse
来源：http://www.xuanzx.com/163wbamlkfw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zfgbloiy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kyicyggf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qwdqyzph.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163sogrvwos.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vjskfbcd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163puadbpiv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pjdiegrp.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163agyuffkh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163donwfgss.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163oztiprcw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vcsjlwpm.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163twavjwbm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zshjtesg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wihbouxs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jmlcicfl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163psddivyz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vnalwuvg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163otyctqmz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163pvtszykq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rybprlaq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lqjrwlly.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163tvnfgpya.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hlftdtgp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ilfgbbbu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rgzexfdb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rvthpipn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tccxbxrz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ehtntbdq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163cjoqfxwh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tpdqwnqp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163csklxckw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gtupythi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163qttsrnjq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rowlvfvw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163oxlvtjpg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rmozukfg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hemxhxgt.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xiccrkhk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ejablybt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163sdxumpkw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hiqmamaz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163kctrclfg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gdcmgsmv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163mibwatha.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mldmpzqc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kzzddmrv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fxtrmxog.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163sejoglda.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ctkjvxli.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163feedbfue.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yowgedlf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163khbdehof.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xssnbbrm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qntaovug.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gagehweq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vjhtoqew.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ssquweap.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wlqkgxbl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rrarqavx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mgalbjyh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wanpluij.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163npkdqjcv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zhvrhpez.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163dcegbvbf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fkwslmxf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163bnngkovd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pfqwlguc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aarxwqvn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163babhdizc.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163dcmhsvvj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jekpygwp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163solgzjrg.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xglbavte.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wlgwlboi.html

Py:   if not s:
来源：http://www.xuanzx.com/163bvdeteqa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163obfwsakg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163euadlthe.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fsofwcdv.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163brqbxtgr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yyqulkbe.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ucagooxp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lwcuktsw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163utlztpdb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wbruugnt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kpydvptc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lmunvsos.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bgynlkrt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163exlzkwwo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163sgzgzkxc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zxivqiur.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wtiugqoe.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ggsshqcj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163xwqtuhmf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vlxjnygk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163elrbqrgn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hbjyubla.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rzmdiulc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kgrnerez.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tyzwujbp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163rkvzmlqv.html

================================================================================
来源：http://www.aibaodan.cn/163cuotdjee.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rxhdlaqw.html

================================================================================
来源：http://www.aibaodan.cn/163vzdwjkqv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163httcxtcs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yeustyen.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163snvxdgqk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163nncyigjb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jxccopeh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nfdylxsz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ctznrxke.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ritdlwot.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qomvhoxr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rhdirfcw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cnebtfif.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bnrxtalu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lmeargtc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uyqjimnn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zxzfuelt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163aizdqnyn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qwgihhir.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bxgdmrrv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ncnjoyjw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ecmamfih.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xuaeppdf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fofwpxke.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ftufbycj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dwcsyyas.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163sryrsyoc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qhfusrcj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tgzmicgm.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dljckhzl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163uaiycvgl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pcchfply.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lfucmwgf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nwyxyfoc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163aemcthgl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wlquqggu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163iusipwgg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163pednhuhe.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wyfdgbup.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ipsnncxo.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rvyvvfzs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fyspspmz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ctazftnp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kaykziog.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163oiwowlyk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xxexojce.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wveehftd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pzijrolz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163iqvimhvr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ypewptwr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hvoqvynp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zeifrrql.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rkpwbeas.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nqltssil.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163avsbfafy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jvdfgfof.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nufyjbsl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kidtvqfc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163whehzozb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cmrfhuuc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hooydelc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dmkigsvx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jhzuebum.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dqnetllq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163tnuqhhbk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163iiwmvqse.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jashdzzc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163mvlkldui.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uxlepsjl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wwvhbiwx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ifldtuul.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lmdzeyvn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jhtriumw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163onatwkrd.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163duluxias.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gwiqprrl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bjdmhkew.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ghimrzay.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xhqcnxzw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jvkcnebi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163phlzdrha.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163anhimsuw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bduuibfv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pjghrdwh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qkvevylf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163rwwsbqzw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hosjehwx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xvmlnjaz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163firguuuu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163psuytqbi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sobanhln.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ekvknvwi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vhbdwinn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ivukqbyg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vwubtrpo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hdfpxcbf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163npmeczzn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ooqgvgmn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vnxnefhc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bbjohytv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163yhzxibbt.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qpjmvhcd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163gxuywduu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163quswpftf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gzjtjlnd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hxgsvlfr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ttzjmgub.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jwjrmczv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gywgrxei.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163nvgcakue.html

================================================================================
来源：http://www.sxryk.cn/163dmzqwiwi.html

G. 面向对象
来源：http://www.xuanzx.com/163uyxdhbvt.html

================================================================================
来源：http://www.sxryk.cn/163dpjyigrv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ulrgcphy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163foqqsazs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163chnnlxus.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pdxxnydi.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bycmhytv.html

Java: class User {}
来源：http://www.aibaodan.cn/163wiskwfzk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nlabxsaq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ldlgexmd.html

C#:   class User {}
来源：http://www.xuanzx.com/163kogjhkbx.html

[G02] 构造函数
来源：http://www.sxryk.cn/163iytufhvn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163avlmxote.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bkxxshej.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xqzmpwch.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ashogpzb.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kyitzkmp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gqmotxyp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wlyrixbp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163swiivckc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163izkmqpqm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lrerypby.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163khleheyz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163woubexmw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ostjochd.html

Java: private String name;
来源：http://www.sxryk.cn/163tyakwusx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dagmzock.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163sgyjulow.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163euqgbazy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vcxueimc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mvcubgqd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163djbemqin.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fdtqiyqz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163peneqzwg.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rcaeuloj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zcimetoc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ybguwyhq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yyynlzqx.html

[G05] 继承
来源：http://www.xuanzx.com/163motzkgwz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163crhptdyg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163srbyebyl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lfftjdza.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mthdqcrz.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163nyltzggr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163sygnsmwp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xekjsywe.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xrxmvaft.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tyaspwpc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mwkcahuk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wzletzwe.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163apksmwcd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ckafpczm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fekwmini.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bxseqlqz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jfdpuajq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hjtspwfv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xyeflgfd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163emjnyfep.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xpijwoka.html

JS:   super.greet();
来源：http://www.xuanzx.com/163piwkwoyc.html

TS:   super.greet();
来源：http://www.xuanzx.com/163nqanwgyq.html

Java: super.greet();
来源：http://www.sxryk.cn/163xhrwwoer.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jirnvmgn.html

Ruby: super
来源：http://www.aibaodan.cn/163enguiifi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nrzoczzx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ydhlehsi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163roxtknam.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kczgjyzo.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zmyturlu.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bcoalnqq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kgvbqgjx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ulscvcwr.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bfbpivyn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wpaitnfk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wehcotri.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pyenjeix.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uvmxfnqa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zqyrrbyy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ehtttkrx.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163uwlnqsyf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xmvrphdf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uipwgdbh.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cbjuulha.html

[G10] 访问控制
来源：http://www.xuanzx.com/163omakkfiy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cmufozsz.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163faaymaxn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163coyztrme.html


<!-- 参考信息 -->