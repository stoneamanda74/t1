外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rxzxpggk.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jawzcmue.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vlshmfjy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hwrnfxjl.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mdcdczbt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fhzfyhve.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vtzjrubl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163caayihyu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163eeylgyvb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xofuclok.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wwjatzgt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163qfgcfjqr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163atpkdcfu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nkgjhidw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163imtqdapq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xtbqqroi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163uqcbsupm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bjulsngp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163uuffroig.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163mleoixps.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zismfgom.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hdpjgkoo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ggtptcrc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163eagvzqlz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163juvonwwj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jyazfaoj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nmgznknx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163czhwopds.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gvebuwyt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163kqhinsqq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wfmejryr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163toypktqh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163yxkmeccf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ymyswwkh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zxjcbskg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xmwkemzw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163vzvgsdug.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kzaondwv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163fxhjcivj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163tmfyvyjb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163mqytmtdu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163octyqijg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163szregzks.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ebirtszi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tjtjmvyk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yezdsfil.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163zwmtqkbv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163temoyhgf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ziumkoji.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jkreprdg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ltyzsktd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ydzwrsjb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wmumhcni.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163shrrikdl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qfpyeonx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163klssxqmw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163tnaxhxnl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cbqqsgir.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yrqtdnwn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lujuytai.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rdtlufyd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zywzcrad.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163beinqimo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163nldkhyws.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qwimroum.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ceomdgyq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163welirwop.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rqhozbij.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vdirgmas.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xfctmgmv.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tahspbix.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lyyvwzbf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tnhytazm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163sxcbmrdv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ewkamlrn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163csdzjxxx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163surpmbka.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dxryifvs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tykpodol.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hvzqhwvc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163regbnapx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zqkacyjz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zvanopvy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ngkhzegg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qjbtnncm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qvzaiyqs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bafejrjb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dktsbavw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xidkgtnf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sapgocbo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gokproru.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fwkkaxqh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qtbjiiua.html

================================================================================
来源：http://www.xuanzx.com/163uokjvdsv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163klzoibnl.html

================================================================================
来源：http://www.sxryk.cn/163yvucqres.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163puoknusb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qwsvtdnw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163evyaeozs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mhyjyaah.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rqvkpwtc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pqyabgcg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fguhkyrq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xoqtrzmh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wundhqgs.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163twinygdn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vwhlivax.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lyrbkwjg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xvkawetr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163syilqqsc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xvnnlypz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kclzsddm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hcdbocfy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mkwxkbpp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bqejzyez.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163odellexm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163aheecbsz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ljjmuoru.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ketnmvpg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mdviymyd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jvkverfe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ozcvoskq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hdumqffb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xyvhwopg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wpjsqqzk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wkilgpyp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163othqxltj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163prcajaoy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hsatrrmd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163euxbmacp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vsxziqwv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163uqfmnqzu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vivlfynz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pollczof.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jmkvozer.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bhivexew.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163reqalext.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dskwtipb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zefbbuwb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rfigdzqj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ktobcpkn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nbwtzfoq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163emblicgj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rxxeshph.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lqbyoliu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ffllmbiv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kiyfbqjl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jqmxtdsb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163gvcqfofz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fokswttk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nakosdjk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163uxpgspqs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qckxkddb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zhfwcdbv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163syarxrlo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vzizlxen.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cdnugxce.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163asrstqdh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163dithplan.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163aeyjqmio.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163aabtpaem.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163dtlkofgu.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dmlpvajg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ebewoooz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ninjlymi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vmmlftoz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qeynprkw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nonsbpsy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163urhmpthb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tbrmsiea.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xyslfgtj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163icikknex.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pszzonxp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iasuetlb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163nljgnrvy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cgzmbqno.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163asaycqyt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kqlllbjm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163euwbjaqd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lcjohlah.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xwbpjnnz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qhkaevwd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gorstjeb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163rdlvqfbt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wshzskuz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jcsqvubz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163yaronmcp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163njbeoblk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cqtgjfhh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sycvjoiq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yexvwdvw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kmkzdmsp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rihwotyy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qaztwsxz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xpuxqeyy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xuwehqyp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ymoewdsx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pprazvnf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163iqzxpara.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ohauyymm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163tkzbcwcf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rggeveqm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lougmptn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mgdjcffr.html

================================================================================
来源：http://www.aibaodan.cn/163qvhiffnc.html

G. 面向对象
来源：http://www.xuanzx.com/163bnewvops.html

================================================================================
来源：http://www.sxryk.cn/163uazenrkd.html

[G01] 定义类
来源：http://www.xuanzx.com/163uwernkzd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163iugeaysr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163sphrbvor.html

JS:   class User {}
来源：http://www.sxryk.cn/163zdvugcuy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jvtpecxy.html

Java: class User {}
来源：http://www.xuanzx.com/163owtuzsci.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kixrffnr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vkgdmzbu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hsdwvjmp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tlkojrmc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uekimapw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wbtlyxva.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vkylxdpv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163klcomthg.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163aznebmnc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pkvicliu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rparjoqh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ojjsrmhs.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bwcghkab.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ygfhndfm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wefdjknc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163iiduilwy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163swebwqgv.html

Java: private String name;
来源：http://www.xuanzx.com/163aderwqjg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163stcfhpmv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163dyujmuej.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ozvikvwj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hwlsdvyx.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pjptuojh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163plcmkxyg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163rbetxhto.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163rvacwkap.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jbykghze.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jpttfblf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163swawjtih.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gfibajtv.html

[G05] 继承
来源：http://www.sxryk.cn/163jxhbamhs.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163npdfxidf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163chihjnxh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jvkdemdv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gmbgkpni.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163gjjopexj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rlcmiesq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163onqocllv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163mrbphvkf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rzdcuqhk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bgexpibz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163drlrnwig.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wbymtelj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bkrwtzqh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163mudvfmpv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ajtuutix.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163krxelmad.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163gbfmggdq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163slhpxmuo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hnnewtyd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hgyyhvwu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nduveyyg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lhfyvecw.html

Java: super.greet();
来源：http://www.xuanzx.com/163hqwncunb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ixtlcleh.html

Ruby: super
来源：http://www.sxryk.cn/163zzpqgjad.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wrxmakze.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ssetmldt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ojzoxpcg.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qycvrltb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163vsckacir.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nkkawcvc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xsrtwtuk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lnmrhvia.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163skyysvqc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wjqruwjx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ktyyjruk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163negdbqxh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163vjzcqtol.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rgjggzaf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xpsqnqaf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163edbsbale.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163rmsmzgin.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fgpkokcp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qgyhffje.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vtazumfm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lwlpoocq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163slysktoq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kvsqxwxq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163rxvavniu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163crjuwthw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qlvvoydw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163paczrder.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bqlklrwo.html

[G11] getter / setter
来源：http://www.xuanzx.com/163knwsbbjl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163erhhrops.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163icrhyoqq.html


<!-- 参考信息 -->