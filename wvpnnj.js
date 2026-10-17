外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163fdsxokpi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uiszvxex.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cytflglm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ogxslrdd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nxmpylus.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163uzljnhft.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163upftwmlk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lznetgsf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163lgrifzsu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163srlbslxs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163famkvqow.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jbvewlxe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163mkddbexs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163txwjnxfw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163xcdvzjai.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163boqvezsk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ivinboqm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qlxqzcwy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hdymyzcy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zidnjsgb.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163jjzchqml.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kuemaeyd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ptcmjnjf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tfywbhji.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163daaduawn.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163dwguwjob.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xzandmii.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qqioaeuh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rfrvsfhi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dhyrzqtv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163lejaymlv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163tauedbqh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163utxduefn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163khqkiyfo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fuzjgpbr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163oruobnfg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163llaegaas.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qoofqfaw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163shqzyjjg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163edwhtuoe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163fyrtghns.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tmpbtvsd.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tliqxqky.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xnmwqtmk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163bywhchoy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ynlgpegh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xrpdbrwg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pzvjftst.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hbkwrjck.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163uhbeaxde.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163mdgviezw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zttmhroo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163kwddyilt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nsnrpyvw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163agfxrdjh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fmicregu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163baumbpve.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yynvxngl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163spwfgubh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gzhhdmvt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163uzhswgsi.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bwmqadeg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dooqlqos.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cqfeyajk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gnhvfbpl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kgcrbpoo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163auvyvyna.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gfdybyuz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uyaygolh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hvfxncei.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163dbnxlytg.html

Py:   if not s:
来源：http://www.xuanzx.com/163moduefbg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163dciyitua.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jkptgffn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fgkkezws.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163maztstku.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zypvywof.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163aryrrdxt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mbmnixws.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pstzgssi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163dxeigyts.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ditthawi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163utsqmaqb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163scrncork.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wpixwikc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163qeqnzpje.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vebfhixu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qxzndgbt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hidnpeqo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hmabufvn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pmxxdqyh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dxjtmbog.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fgujyntv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ljkehzca.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jhvwbtgd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ihultoty.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163enlzufwz.html

================================================================================
来源：http://www.xuanzx.com/163rvgffsuu.html

F. 文件与目录
来源：http://www.xuanzx.com/163madzuwvk.html

================================================================================
来源：http://www.xuanzx.com/163pfhcswcs.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163onzhsncq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kvxnkwjm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yftkebiv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wzifpiiw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163aunxcqox.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zwotzzdv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163orgsotmk.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163upglyjcb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jbpvhhsk.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nycdwrxv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uegbalkz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163seswosjp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wxjesovh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qlccrbhc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ewdlrfoo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163wnsmlbuv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ijobhlbi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bscsujuk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wiaecazn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uikgftdr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163eylogjuw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163obhehqad.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vezafqhp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xjjugvqk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163apsaqpjg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yfkockbj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ltfbvgxb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kuueekhy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vpxyatzh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163gbrizxvq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163heouhavw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jgaryxgl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163srnluurz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ybpegipn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ugeqwvdz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163stnajjly.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tkznogky.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lpkjjxiy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163onmiskvc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yngdbudq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163puxlfrpw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rqqmmpcj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gfvupeia.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163feuktmha.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ikznmftn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kcfafymt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hbnpsfqk.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iesabrmr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qklwktht.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lazyszez.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rsllwsxz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163woxhjuaf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rrgcwzzm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163sofyoojn.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qsiaxryz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163chmaatnz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163qgtpziqv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163futozlws.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gakircek.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zhhzrbxy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163uwndhvvv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163irtpblrz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qucjbkkl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163jbufcxvz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mxxokojo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pjwvyfyi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yzqbjloz.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yiyvfxhb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163crkjbwcz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wnlppgni.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lllpjbxp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163faestjzu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163aswhrwme.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cogxedmm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163whpsngng.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163asukpiqm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xjyweono.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yvdaktvn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dnnljbfe.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pehxgisi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ptfmqvpa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wpebudem.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163znivfmge.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kxzrygdb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163divdugtm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ajtemdcu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xpktmjjq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163urtqhaba.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ttagxefc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gwhjfyem.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xsegymsm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vuwwjbnz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163oeakktsu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163maxtoied.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lqaayzqt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qdobokht.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gohqcdco.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xqduudkc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qyczrbhu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vaduvqca.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pmyjnkic.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163oslbvmfl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gstodrxs.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xalpmfmr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rmcvqqnr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cbxskjph.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ehourewu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jdekfeix.html

================================================================================
来源：http://www.aibaodan.cn/163umltjtaa.html

G. 面向对象
来源：http://www.sxryk.cn/163sjwosgnu.html

================================================================================
来源：http://www.sxryk.cn/163fhkbfpxk.html

[G01] 定义类
来源：http://www.sxryk.cn/163pgoxieje.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gwjetkrd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lqwzsics.html

JS:   class User {}
来源：http://www.xuanzx.com/163lbscuojc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163apmgieno.html

Java: class User {}
来源：http://www.xuanzx.com/163lwvzpebu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lcblynem.html

Ruby: class User; end
来源：http://www.xuanzx.com/163aieqnkbu.html

C#:   class User {}
来源：http://www.sxryk.cn/163ekwpavyc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163trpagdhc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163yjkmwwwq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yrovixip.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163atgfhedr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kyawqryq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163eqnhgawk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163spgjynho.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vqlzmhgk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163skyoczel.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wqsotihw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uafgtyjm.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ixfmynet.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wmkxedmk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ikrmexgm.html

Java: private String name;
来源：http://www.sxryk.cn/163ltysdatv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xmkpkzxs.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pifltlew.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163upluqdcp.html

[G04] 定义方法
来源：http://www.xuanzx.com/163amhvvzke.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cyaetfnl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fkcwdapy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163eemcznhq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vkrhslml.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163plyoylhp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163edalcntg.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163upxtzuiw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ewdsimcj.html

[G05] 继承
来源：http://www.xuanzx.com/163kcobqcqd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cbqalntw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lzsefqqt.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vojpujvy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zivpuqre.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163cvnpesfe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cicnfatx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dvapdpgt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cgjeckdg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fxozfrsk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pamdqvjm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bnalbell.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ewkocfnh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ngpwfvgg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dmmpxjhp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163sgzlnpyb.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163iwfckdfi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wuzozhbq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lncgmvxf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163iazmuatr.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kahvcjkd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aupstzzs.html

TS:   super.greet();
来源：http://www.xuanzx.com/163abswxelv.html

Java: super.greet();
来源：http://www.sxryk.cn/163lkdlkmnw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163stuqyijh.html

Ruby: super
来源：http://www.aibaodan.cn/163lwjvrlps.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ncteqvhc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163viwbjhmg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163blqbedmf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xsjpjnrz.html

JS:   static f() {}
来源：http://www.xuanzx.com/163talhezun.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dltucttj.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ehefjega.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fwkwasqm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tkraqcdy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ggknbamw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ebkflqkm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yizztyir.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nlzvjojt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uippasqx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hnwgtoms.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jcergkmy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jwzybipi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nxflpjgp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wywqdwom.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fvadjbrq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cqstbpei.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163emsxzcqw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qnrotztw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wjxlgnut.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zutcxyiw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rvmxjnfw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163saqtcsfz.html


<!-- 参考信息 -->