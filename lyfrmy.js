外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163iecokqog.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163nittngei.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163itzqagug.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vnwzbrii.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lthybibf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zgulmutr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163erdyarda.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163karauuqy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163sakisvpx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163syzohvth.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wpgptute.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163oqzstbub.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163lvdndjzn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ponyvlxg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163yafgovfv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ewsucudy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163szmniebq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163aohryzmb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163zrkvhhsl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163zpsmgunk.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dtiukbbg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hepmypmq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wrvohaps.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xvqhczdu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kigzirkp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163huqyjexk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nfcvfker.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nnreulmn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ciljzcko.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163cvnmtiag.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bwkbyvqi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163uwnhnqbw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163irpumicw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cvzgfefr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bkuwcjdu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mjocfhwa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yxddzbuz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bjdaxrcx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163euaqgrqo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jzjklmcl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163vnjkrjmt.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ujxzuyqy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163svvkdonp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163pdpfcxst.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zozhnmfe.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ttgyalkg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163feybwbeb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fgvwhiwp.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163pngrfoai.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ltnaphyf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163utuqqsjr.html

Py:   if not s:
来源：http://www.xuanzx.com/163nlbpjcjb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ogdrrjhj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fajhcqxy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vbanejfd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163eldogbpo.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gutakwtw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vtsgcsfj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163artzaljo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ymzluqot.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163evpjzuon.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mvrgpzzf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cibxsvsq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gpigxbok.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ofobgcpk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lsvoinhl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wnssupem.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163oombygwo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kovddvqs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vctwxuzj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vzkeoysv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wzwapufp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gjdxvgnk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wjabdufk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pjqkwfmz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kptguzjc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kpbynfft.html

================================================================================
来源：http://www.aibaodan.cn/163jucyqvun.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zgquembs.html

================================================================================
来源：http://www.sxryk.cn/163aiyurbhb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163atjxnkrr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163gmojpjgx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ssoldmlw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kcasypav.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163oosrhlve.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hvgcnpxr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gzyklvyq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gkijpwtp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nvsihzcf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163pohhhlea.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wchixmwi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jearrrqy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tfoijfgs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nbluvnik.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hworyfyc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zscmgcnx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163fmmpzunp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vjqgjtkn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163vawlarpl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hjfoxuow.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wbdwsjxd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kpeunqcx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kmzdshqu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163plsfqyxf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dfevnblk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163inzqahka.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rzsglewo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163aoufuzga.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mijaobjm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dlnxlaiw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ujizenju.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163toxceupo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163vhzlzgfn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163iiazxyve.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163daaehafu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fksimjai.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163lsueklrb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ytniqwfc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nyhaymxr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vsisrpio.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fgosthos.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xdtkptyi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tyctpbrk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qbxfubty.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ktjtmnxk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163oiuefslo.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vcvoibhn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jfaojuvo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ymuylflo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163edtkxvje.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163itkbfxri.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163vfhlmxbx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dgcfvoye.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xzyjumqz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gphkabbk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163umkrpgfu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lxfsjvzr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zeavhhtb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ijebnhjp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163lbbonrcy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qniwbafh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ewvbjdxm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nateqmde.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163almokfay.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163sfxsafeu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hqtozaos.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163soygtrss.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qfhskgjz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163clorpwqj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163plhtwpvn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163anubbrrl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hydsobha.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xcadnzfg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163cwbhqqkx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cldbdkmn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eraxcyed.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163psefuyji.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wyrfegen.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vrxlxpjd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vqfjxbym.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wcpajkso.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rvzpinee.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uzeapgeo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163srmpzbwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lcibzxzb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163uwevobun.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163sbfmlhcg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163sxqlhnnt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wylcftkw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fsypeogc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nrvxlaic.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iewilyaq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wdfbqmsd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iqurmvui.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lfcvwhlt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bbchodrg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cbotujvr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fhwtcbex.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dllvtedp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jxbfgxxr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mytxxdnr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qyilnckx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zsgxlvov.html

TS:   // 同上
来源：http://www.sxryk.cn/163hfyenrfi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163sbstzsbr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kemswlsg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zdcjqkbs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qlcmbtio.html

================================================================================
来源：http://www.xuanzx.com/163qcrsvldb.html

G. 面向对象
来源：http://www.aibaodan.cn/163dylulece.html

================================================================================
来源：http://www.sxryk.cn/163hjckhkjv.html

[G01] 定义类
来源：http://www.xuanzx.com/163zcznfuis.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gthgyskf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zayvsvlf.html

JS:   class User {}
来源：http://www.xuanzx.com/163opelmish.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xyurruph.html

Java: class User {}
来源：http://www.aibaodan.cn/163qnjakjyk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hvfptgod.html

Ruby: class User; end
来源：http://www.xuanzx.com/163egrzsyeq.html

C#:   class User {}
来源：http://www.sxryk.cn/163heovbpmk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163flyhbwak.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tvrkytbc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163yaktiktn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dsoyvmgb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163iztvkisv.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jvkgmcen.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lrqrawph.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jcefmryv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cwfziqhd.html

[G03] 实例属性
来源：http://www.sxryk.cn/163byisywgg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wfivzrox.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nqyyjaro.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xyjeurwp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163bhwgspya.html

Java: private String name;
来源：http://www.sxryk.cn/163iatvshuf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rmcppiqz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163azjwzmhi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rfhmatus.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fqntmazb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mbwuhjeq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vsohxdnw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ksivmumz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cpdzgyhm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ipkkidlq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nfrgowah.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tvhnujiv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zudcwqvo.html

[G05] 继承
来源：http://www.xuanzx.com/163ifthevoa.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kcoscklb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ittmyicn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aqonxich.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jtsrydlk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163bjekmrsx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gnpgiomk.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jymgomxq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gwctixrn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zxwtbupe.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yrasjvfh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dmxkwlou.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lnjsxezd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xkvxmyjc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lzbxznqi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uvmiudmp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nsttzrkl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cluublfm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nptzzuqr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163aogryazo.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ydiggscl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jybjkezd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163cjgtqbqj.html

Java: super.greet();
来源：http://www.sxryk.cn/163ybcjvqwo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163eicmktbp.html

Ruby: super
来源：http://www.xuanzx.com/163qpsfdqka.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hylyvgwh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nfqepwvm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bazyvobk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163cdheohkb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rsfuyrnp.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163otxvcybk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gpzuyxef.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kncldwwg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163prduihxt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163wzmcppbk.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163oersgesq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lyfplrfc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lxjlniee.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163zwdtftwk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pbcpslhj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ilyddbxl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qwpjtphm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163sqxkwbtg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vphxuanu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sgnuvkah.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gmgtgfkg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dfsrgksi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163sjsliugl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zsyvccfl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163mnxkonek.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cjqbucdc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cmdtssll.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nodlulcq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163twejtish.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163djzdidot.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xrfbifsf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163apdvvwqa.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163beonrdeo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fjrnheih.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jedzhecl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fpnnxnek.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gzpzzgwq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wtpsatha.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163zobvmpih.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rekscoon.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163wmevjtyu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fgfslddq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163grknzrdb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qzecpmtp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vovnexae.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rghzubpk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163uqqevwnn.html


<!-- 参考信息 -->