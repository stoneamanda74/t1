外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wieovbks.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ekfbuqre.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163whbcbfrf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ymykgmdf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uideebin.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ifejytho.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ivkbotbj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163bxwdzcra.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163umomfyuf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ehofmkgb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163omozffzd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163okqvxwhe.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ndhabklg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163eytfbzcv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bhpcdkfo.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xdfymmtq.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163puuvzeex.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wbaihpsv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iljjoapb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nllwwfxx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qexghhmc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163gfpimquv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zijayjtc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163utxxxtwh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vbmotkjs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163sesdfnls.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163abltxscc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rulpeflf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163krvtzgds.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163aruyjdgw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uxbizxvk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ggzuvmrh.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ovherekr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163rppeakdk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ustbjocq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sesascur.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lqadcaxi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zewemmmw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yqfyhsqb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wgrpasrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ivxriyeo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vvtydwps.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ydqpddfw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hdejgscy.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163eiipapsy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163caffdfmo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wmbvxzfk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cyyllefl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lggqrhbf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163huvbhhso.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xxueqoqy.html

Py:   if not s:
来源：http://www.xuanzx.com/163vlryjmdj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dohqmykb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ugpwbiat.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ekbmdfdp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bjppyhhd.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wsmbexun.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mpossjzq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lzfkniio.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ognzkbal.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163pebdxcrz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hmrglgts.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kcdoohsh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163optarvjn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ehilcsxj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kfsdyezr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wejkhzuf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lehhznmq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vjrvfxtr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bfmscezc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kpiflwlw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hjragudn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nlhqbgwh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rcalhpil.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dlrtpeul.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nsnbcumh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163oyrxdick.html

================================================================================
来源：http://www.xuanzx.com/163furzthgn.html

F. 文件与目录
来源：http://www.sxryk.cn/163ocghmxym.html

================================================================================
来源：http://www.aibaodan.cn/163xwvpdvje.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163sgilyslp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dygpgvpq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163llwywpqu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163pmgozqog.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163izqhnhvu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ddnarpov.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qxwvwtfg.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163duovxjme.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ntujogla.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163njjllwxh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ipxfgtxb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vommsxkm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163liydbpex.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ivnmanua.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sygbwwpz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163thcofvts.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zknouchy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ijoyatvl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163lsgyfasj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163golrfdyl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163sdxipmvl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xfmpevbp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wfmvwdjw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nusrctgp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qxvwpxxc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kztbanbz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gomcnwqk.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163evsqjihh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yyanuujk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gnefxgqu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tjpugbob.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bhkjvihw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mqvytrop.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gaooxemp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dkhbiayd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lucvsbgl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tpbsvjsx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163hgmtyuas.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sunirzsu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ytzyvqzq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lzkrfwdc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tjjmgfgf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163uygtnluz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163phphlkvo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qfkjuxal.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gxxmmfga.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nkvhxstq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fnveaxbb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163epxwhyfm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kddtkxzi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ahstqklw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hlxyhsiu.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eajhhgmp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163exsewfxi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hrymnagy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bclsfqcs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163sunmfoot.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zoxlyrcc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rzdbarbf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qbhmywkk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ddcrlsar.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pytpdveu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nuevunrn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ysxmznwy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163tsoovedd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163obxmobwa.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ejvqinns.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cgtzcxka.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fxqlyzxg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163iktbfwlz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rpnsobby.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zqmzrzol.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cqacgreg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rmiiyufz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163axqlzacs.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nouxhtss.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rasvnyrz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qqrenoti.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163osyduhmt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rxjskjth.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163addkzuyq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163sqdjbqtf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fbhdmdoc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qvbvthox.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kiftfhij.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lwvxjbwi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163eespazsn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kspxygcv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fxsznblx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ynmyymco.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hvwdfzvr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vvcycsnw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mvcrornv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163onwtnnkm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rfwhqqji.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zysrbkee.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ixkmjnwk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ftfizjin.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ekxeskrn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ttffnklo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fuweoicl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163clyhujbl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163phgxlnxe.html

TS:   // 同上
来源：http://www.sxryk.cn/163wcqqnzqo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jweiqpxf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qfnukehn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ateetbvi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xhfluqyh.html

================================================================================
来源：http://www.sxryk.cn/163clsullxz.html

G. 面向对象
来源：http://www.sxryk.cn/163rekxkwun.html

================================================================================
来源：http://www.sxryk.cn/163mljzentn.html

[G01] 定义类
来源：http://www.sxryk.cn/163ptqyfcyb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sguomaej.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tncvdfsa.html

JS:   class User {}
来源：http://www.xuanzx.com/163urrxjake.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163uyhqmulx.html

Java: class User {}
来源：http://www.aibaodan.cn/163kgogfivg.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nxpyggqm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jfqyssjl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xqrymmen.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bkgjlwef.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fsalckjh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zkarfylr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ckfnomoj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kidpvwli.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tcixxwsv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jotxsjnf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163iqgcfknb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163guikmzzz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ovbfwivy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zvwyyrwr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163woyjtkev.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163oncuzknl.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kmuufztr.html

Java: private String name;
来源：http://www.aibaodan.cn/163nkhjgxpt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ifwdlrid.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163favrxrmu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fbrqzqne.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jbpixybj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dcvvmbfx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jzcnvbhj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163zsgfjjdp.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oiysbits.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hgrjqzeo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qfwioptk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163hwxpzhgt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kcukkhhg.html

[G05] 继承
来源：http://www.aibaodan.cn/163azyostze.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rpkvzpda.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163spiolebh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pppyoqij.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163illngboz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wwcadggv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kwbadazd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nbjyrnqr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163gsvtrvmy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mnlgwzef.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jqffhedp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pbbsgmvb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163burbeivg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163udwdwssj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bpdmcmzm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gbyfxgzp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163oysxuvik.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bfrekrie.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ohkdxcth.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bgrjcyel.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wjrazecd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163iuwngixy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ovdrhoyi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eodzsoel.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nipctvvp.html

Ruby: super
来源：http://www.sxryk.cn/163lqzkxpjy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fogmslnv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163clgfsjsv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oakzbbqb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bqxovinb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ykltgsei.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163svfrgdwr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hkosvzqd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163eqgrcxdw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ixcwjxnt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qomlqgsl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163csuycryr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cxlubgzj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163revaalbq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163lpfzuwnl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163oavkdpot.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dmlceeft.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tonfavlm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163awigqjnk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sbmzrtbg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hqveewbt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mblplhie.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yypvmdso.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mymuoiia.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gkwdiiqx.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nsfxgbam.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ezviauyi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qejadrsv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lwffyfly.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sbwolnhs.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fwxrhfwm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tuhukhsi.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hjugsuml.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163gqffkroa.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vlsywtor.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163pwnkborw.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mfqksofb.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163owhduook.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jqgcfngo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163etvlwywv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ijkzdxpm.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163uzhbozsy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tvjaoimf.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gajbfpyx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kubeaiag.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ijcohawb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163cwwddnbt.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dnprcdxi.html


<!-- 参考信息 -->