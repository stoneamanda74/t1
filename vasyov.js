外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pcsztyuq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xicwtzsq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163knrevnez.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rbmcnphe.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mdjmilvi.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gygwehjz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ywcerlmo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163znytdszt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iyqpedjg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163boeybskj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163fplczgmd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pediintt.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ypyopstg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163auqoxwym.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wstfpzqo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ktvjgciq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gwhninzq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163biklyjyx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163caosolcg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163opinkqat.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kiqomuba.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aqbrrqmp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yqcdteov.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xmenkqnw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163apljtmmf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kthvvbmd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ijmavwza.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163cxmigpfw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163iauemhqy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qqduhcti.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163asdaraml.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kxrvtbrk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ihhekngc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163iegmodjt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vqkkflfj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163bssikiph.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163klnfdjyv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163eduvmzzr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zazqooak.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163pzzlapju.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ijuaphio.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dsnjrvpx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163eorgyizc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zvdphvyz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jfksagmh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163npwgnahv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fmgquhml.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163yxnltgnx.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kcfrclst.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hecbokfz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163msunhfej.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ozzmcyyd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vfwrxamm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jrjqbdoz.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gpohirwi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fryfhmrn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yfdafaac.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xpvvaeop.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ickorofs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fdeqctyp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163becqejol.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xbusxxol.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163omhjlqiq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iiqjhond.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163muakifvq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ovzocjbt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lnmldqdt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163auxdtrio.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yovoddbr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163sortvulz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hcoojxys.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163odqxghfv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zmstdsyu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gmsbhjcd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vtatbwkn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wzfxethj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163wcughnhd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ocxqaxoi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jlpwqtaa.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163abcrsebj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163wlkibbyj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163cqkrtclr.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163trbegwpg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163prrppmbx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163tdkyefbj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hpvdswiw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vvwiuhno.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ckjpeohk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163phabebqi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dbyvwsfk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ayrhvlsu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163faqzwbeu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163phykohhr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ayukhkjn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wmgaiuwh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163utgoyivk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wduhsmqd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jpghspsn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wntceofy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qquxiwze.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zvguhnub.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163shaipilp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iofocoid.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ezylkyds.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163afscrpyu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ycbjeyrz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ajwhqick.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pjlyusbf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ersetyew.html

================================================================================
来源：http://www.xuanzx.com/163erqfmpsm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kkrdbafy.html

================================================================================
来源：http://www.aibaodan.cn/163ayxecdns.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xwklqwti.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163aisxxkbi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nkivxitw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qfhptong.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mdvrjdkq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wuxomupu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tbssqetj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cyureaco.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163vqinbcut.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wwbgaiov.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dyyfrays.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qzeuxgop.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lpzehzbo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uaqablpa.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163umpwtund.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fvmroepz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tzgjuvxf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jjsnosii.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163uofmvuxm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163goocsons.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hdapibmp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qiqvtjcs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ojbqmtlr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zpdtfzmj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fkfoaaih.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163dwegucch.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163efusluhy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ukuiiiyw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nqmnshaf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ibmxbpub.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bykphfil.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ymqtmynt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zixueopl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jmfzvmfx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ckotyzbv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163iwidibmw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bqfscccb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bjpbyfcp.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gmscoype.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163npeifkhv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tlfnthyl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jgsgfrko.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ksyyvefc.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163vuaurmkv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qvmaltuv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zloawbyj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163clxiyrdk.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wbjftkub.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jfzpfjgs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163reaslnac.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ynuauoke.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sebsfjpd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wjczajbt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yjwbrxkt.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vknthbkk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ahnraqgm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xuknnjkw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yzpaiuvb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qblnflxx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ekbllmwt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gzqxnvaf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lhsjzwfq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lluwnbsc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fxhcosvw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163pitjfgsc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qpmfctwy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pyvpjeua.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163veidfjfm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ayjahljn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163elfrclkz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mstwumue.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tkntdgxw.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jiewfzqw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hjvntkxh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ekxebwhl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qevjhrzi.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hjpdfobb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rxbfyjue.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163rqniaeog.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163egxyteat.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zrauwjrw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163imkcwuyc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163chtmgjrn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pyxiguon.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hrdywput.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xhyienqk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mhfugbuq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163suypgywu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lgnkvonk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zleznaph.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hzxxzgzs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ffsuudzj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163oydsgvuy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tpnnocex.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vsjcptbr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163owdhqknj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bgiytrdg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ycwsiscr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163irispktp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kwbjgwki.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zhylbces.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yptbhtvs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mzljjesr.html

TS:   // 同上
来源：http://www.sxryk.cn/163zzjpeapn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163imimqmid.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163edxwlrxm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163eqdpypsu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ryyieobi.html

================================================================================
来源：http://www.sxryk.cn/163saldgvzv.html

G. 面向对象
来源：http://www.sxryk.cn/163ufxicvrg.html

================================================================================
来源：http://www.xuanzx.com/163tynpghpc.html

[G01] 定义类
来源：http://www.xuanzx.com/163wbiijfbv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mlotsktt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163islfnhuw.html

JS:   class User {}
来源：http://www.xuanzx.com/163ojfradyh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163acolzleg.html

Java: class User {}
来源：http://www.xuanzx.com/163goxbkeum.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qpgnumzd.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wtpkimwz.html

C#:   class User {}
来源：http://www.sxryk.cn/163tjfelpgd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mhcfiylt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nlbbkgnx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163noxqdygt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163upitfhxx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zthrtdbu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kkwfzxli.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ogdhgbrn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jwwhaguc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ayjboxea.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cffhypwy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zgvwfbdd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163oapllvzj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pilporsx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lprpfeiy.html

Java: private String name;
来源：http://www.aibaodan.cn/163mljorsbq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rqvebumr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ooebjalc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ricutyab.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qyzbwefw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ghbopvbf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sxqijqbl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163woipikkb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zncphtvl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hnuimqtv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163yjzryysg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fiuibdtq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163swbqfton.html

[G05] 继承
来源：http://www.xuanzx.com/163aqtpexsc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gprgtzod.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lpllmhoy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kdzlpecl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163prwuxldd.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163emnfhdmq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163udpibomp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vhhzygjm.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bktuztsf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ywqgfjti.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ucnyselh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wljnglwt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163girccbdv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dsezbham.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wpusvlzx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163omvitbzg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163edgtmpua.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163skyiabmu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yxtqrpmb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ktkdtwew.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163scxuixim.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vrgvoiih.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fbawcxbb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ivopjayq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dxhbztpr.html

Ruby: super
来源：http://www.xuanzx.com/163zqhjxula.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yssycrdv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ozewebpb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tcvijoqy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dpdfqptw.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sumfyvax.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163gokakjge.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163huylkmcb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vsuyxhcm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163akjeansu.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ivzlwfaf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qbnlnqbl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nohgykby.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dlpeoqya.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ywdoobji.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163hlvxelrc.html


<!-- 参考信息 -->