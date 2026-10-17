外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mgesidyk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tduxwaiv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163usofglwn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gvxuwazk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qosahyqi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163fsywkbaj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wtdchjlu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163accqzcsw.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hlscjywn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ejfopwul.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nqeeiurc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ttzwdwup.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hkhbgefv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163acbeoiug.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dsiznctl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ypdfokiq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qkfvpany.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fiievqly.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163iykstazh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fdfzcvjj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ckhihxbz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fniuxwzb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163yijwrhdj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163grqifatk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zurqrhzd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pjfvbxxg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163poxntnjb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hsbfjkmg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163byckiswd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pckwujwk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163espbzstg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ojnzsmin.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163skefjtxh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163cpcaxpsz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163idqcxozc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ofkxvzrl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eboguemm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nmpzwton.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zrigomxb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163liwnhnui.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ukkaguqr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163lhialiua.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nngbzqvy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mhtptsoj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ujemenjt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yjyrtdnf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rjbdbysj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163itglqzyi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gcegdert.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qctpglgs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163cwcxhrkl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lqlgeakm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tqkycfuh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ywywodop.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163lqmthkbq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rctevgbn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163evnyqdyu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rmqjgfqu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163lcgfsqtt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cowlantf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ykdzqcem.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163irevusih.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163enejnpvy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163egfiakyl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ocqaqean.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iwuhnlzr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163actilhdu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cczzepbv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jjpvowtz.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163oqceiuzm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jilpvzfr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jgoyaosw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163urccyebs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kepmcxxy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kgtutebb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jlposdou.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nrodftza.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tnavovsw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kwpicynx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163exaeyars.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163uqebijtn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pldnbxoh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wgoiuumt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bqojdegw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zhzyuiww.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zgxnrcwk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163octjttni.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163chftrutm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163gmzzvtki.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wbarlnwh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yszvuzub.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cokbatdb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uzdwhxnh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163estvxndt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qnfdyqgl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jekrdwmy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163aajuxynh.html

================================================================================
来源：http://www.aibaodan.cn/163kiumxhex.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tpvluhlg.html

================================================================================
来源：http://www.aibaodan.cn/163lrnnnrmh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pahpqtso.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163sinlykws.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rlvvjidd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mecltgiq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163iljusvgj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163axnieiue.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zcovngtq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wiwkaejd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163urzmwirs.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vlnnafbs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lkkaoaoo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nsabldej.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tfzfceso.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qpmcalzx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hqtwfhvw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qcjjkdfc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dyyepltf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rnftcrtm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jlqvowla.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kkkbtmlp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xcwztpdk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163btonhmxj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lxpyiufa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nfkzbjnw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163oergqjfl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qpilcweo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yhcxjgiu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163uyxigbcv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wfjldijo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xukefpud.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kxpxfycw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bmhedbiz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163diysswxa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163snewiotr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gbmxgkfe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ohfnldys.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ucvdzmsr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fskncpfr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tdemopph.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lpunzeev.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kzewkgjd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163otcyczbj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yfzktjfq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pkeujrmw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vuerdmot.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163toupqmqe.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wimhpxrl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iiydehct.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wzjtflpr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163grdzcwey.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vsuryfjg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ohrupkth.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163llxcjzhl.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lfvsrsaw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nqmnbgzj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rpmmxsdz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163nrbeymct.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163njohlgii.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163crusmkvt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mshvjfvm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ejzxggjb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mvsxqkrj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163lawjtvwi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kepqibzo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ofjlkwuf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163bhibqocr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ulxwhtrt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163almkpovf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163coqjbzvd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dsxsdmts.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xcduhvib.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163pkqnhzxf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163slciuett.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lwoeqdmx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pwjswpec.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kweomzgq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163flinlpzy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hxajnzxg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163bamepgdp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hfhkiqfq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fuctljpe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fkpfylgn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iozjijyd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lhyfbckf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kvxardfi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163syqilquj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163clesektv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vmjvotzx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163loadbmur.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zjlcycxa.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163umxqtzrg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmljpaoe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163aroaesrz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vbjcroqa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gumoeoks.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163atiudvgg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ryyxjifc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lijgzxup.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zfxktytb.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tvoxlstd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ovzycupe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ucwnzqwg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jixsfvzy.html

TS:   // 同上
来源：http://www.xuanzx.com/163idthomnp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rxadmmxi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163owwvjzpe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pphuycbl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163aqhqizzm.html

================================================================================
来源：http://www.xuanzx.com/163nhabwzvi.html

G. 面向对象
来源：http://www.sxryk.cn/163ygjibhqw.html

================================================================================
来源：http://www.xuanzx.com/163qwpvtccg.html

[G01] 定义类
来源：http://www.xuanzx.com/163skfpjxcn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uaxwnlhs.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qhummfby.html

JS:   class User {}
来源：http://www.aibaodan.cn/163loofhlbk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ummvwpty.html

Java: class User {}
来源：http://www.aibaodan.cn/163pspwqozg.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cmdvtkkv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163rysuswxd.html

C#:   class User {}
来源：http://www.xuanzx.com/163nqlvjpee.html

[G02] 构造函数
来源：http://www.xuanzx.com/163keqseygm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yuetbpls.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kfmdslwg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ykqwhtqn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zatmejxt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ohpedjld.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ncpkozdu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ouagcmir.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yfhpxglq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hnnjwmom.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qovovlra.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dncatynb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lpcpceqi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mdvbikdu.html

Java: private String name;
来源：http://www.xuanzx.com/163sqqaxjni.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ephqlbah.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tjvbrsok.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rzsxpxkv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163htjmmspx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ttgsmrmg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gugpfmdt.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sfztuigy.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163kwecqhib.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jguvfgbo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163drapropp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163rvrujotx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jdqlqsne.html

[G05] 继承
来源：http://www.sxryk.cn/163lmptdtfd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rdizmcrt.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163gczqryhc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nxcwufdm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bqitcsce.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cajkqqmh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163womrqpyh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lkknkqvj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163fdozkxhh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163itgbnrmo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lkhmhqhn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xdhosexq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rrzepbps.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gkiscluy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163evtluyma.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jdewkupu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163iltnvohr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163prlrcjcl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hnmvwqax.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fpisotae.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ieyohvhw.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ehrosgpi.html

TS:   super.greet();
来源：http://www.sxryk.cn/163eihxrsob.html

Java: super.greet();
来源：http://www.xuanzx.com/163rghmxxuk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mqyzemtu.html

Ruby: super
来源：http://www.xuanzx.com/163zxyrcvve.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163paaoqflv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163qvhhfltx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ynbgathq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yqkdnmrq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163levwnpjp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nphroaze.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jpguuniq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zhpwpwmc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ltuvxkav.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vsavcqyc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mbqjnfgl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163msfbuqqk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vnbdqhqt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xmidaikc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lglhftzy.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163zwelnsfz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ovkrplrx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ruekxshd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ecpgrccj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wtoxiohu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vvfvmdvk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nayoqdev.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xgxggncg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163foakakxp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163odcnotvm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163czeesblj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tlpafjhw.html


<!-- 参考信息 -->