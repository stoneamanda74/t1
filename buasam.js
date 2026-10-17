外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163yolpetjq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lyhdlkyl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rydzsbxu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163yfnbuapp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163thdxnxxg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jzbxaeoh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ltzehgmz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hvdywozy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qievjwyk.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ahazggtu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163yeudjpow.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163yxedluse.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dxpbuhxh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163edzpblmq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rqrmwghe.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hmtdiouo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163igoftzga.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gqdpefit.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ocxnvngn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163lywqbczi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hiujyjlx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hpauhhaj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fngzahqh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163msseryqo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163esnwtyjc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vvlhiynd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qogegxln.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ugkikpbo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163grycidnb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uhzkwczv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xeelwuhk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uqjnjwnd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163bipkygls.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vrodwoel.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hqjbpbmv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163oagbucit.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163esswqybf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wsflcbfs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ehgwvnhq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dfrsooqc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bkdnacpx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163mtgefmtj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mcqziykk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rsrtnico.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xqawqvoh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163aisqywea.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ngtxtkoq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rnoqlhag.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ylxvvytf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163idvhkffz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163uzulvcus.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kuronvin.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xzavolua.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xixwipim.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vgwjackp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163khxmonmk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ekseuhhk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163opjlrtcq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163apaaqjnx.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pvmghxbi.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fsdpoard.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ykyhnbrd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163dvpkcjba.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163klhzgety.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163natacdkn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vtyxcwgj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iufpbwuy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qpsoicfe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bvfspjuu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163cpnmtncl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mxxcbxyf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xwopwnol.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zambezxy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cabhqznj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163akdakgik.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fsrwvwvf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bpcjwxwk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ybaaoswj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xgibxpik.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163oxoeeobw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163oowignlu.html

================================================================================
来源：http://www.aibaodan.cn/163yxgjvzdc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tzjsdxch.html

================================================================================
来源：http://www.xuanzx.com/163txcetdsg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163onvhvibh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163edbadjrq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yepghujy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dxzxurot.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163kuhrgjzl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ysuozqqf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ilbsmlvh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163flyvsktw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gpertxyq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163olhmphmw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ppelwvom.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163awtzknmu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hhzhkngj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ppekyxbm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zvamvwyo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163hsbuhtxf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wddrvncy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zhsvucpi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mhmvmcni.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163udrudjjk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fzruduxw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zkqoxnkf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dzavcgnr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163oowmscwv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dfdhurdp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163uyjetslj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zprqwyij.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xipihrxd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kjqfnlkw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hwuacpll.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163piqalakc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rnqbiepk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nglnsscg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ycvpsxox.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bqvezcsz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163nhffscbw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xptoovpg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vsqmigcf.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163halszjtm.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163jcboozum.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cfdmflap.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hjlpgfyb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163anlcuczw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mczrxxhl.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wtpcrnmx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bmvhrnhc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163parmutno.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ofknnuiz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163joefncez.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wdcktvba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yfohshko.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163watkmpqn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163iqihzkjw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dmfxaijh.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xdyamigl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sbigakfv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rvzduxjq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163htdkxwhw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kytjshmq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ykhkkygj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jubvvmxx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wclbnvvq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mjnnwxzy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ovhwtass.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rksiqpxt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vxaxfymv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ifxjdihc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bjmmbiga.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gdytwknf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mvljyrqk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rwkpssqa.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163tilbvjoi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163edadhtrj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kltkuwnj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tcdzoxjx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pndlppru.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qrtwpfkn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163coxmbltt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mgnjmqsd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uqgkohwn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163syewjqzu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163iqmmpctk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mlzrwoyu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wbhtrowe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wpramicb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lzckgatq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wxrducql.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xaegjhcn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rcsffmmt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163beteoufk.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163elreawqq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163owmmgtrk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163dpzqygxj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163afcilcwz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qytjfnor.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vsdobodi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163sfocdolz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aqhldaxx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gabrmqec.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rcnlxotp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mgemuqcw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cblpqslr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kywujubk.html

TS:   // 同上
来源：http://www.sxryk.cn/163ftpukmqk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xluyhwtw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163iyvcttxg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163njaotjkq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163apfzbyhd.html

================================================================================
来源：http://www.sxryk.cn/163rnrgissh.html

G. 面向对象
来源：http://www.aibaodan.cn/163jjrkccdw.html

================================================================================
来源：http://www.sxryk.cn/163pbzwnkxh.html

[G01] 定义类
来源：http://www.xuanzx.com/163erhdkfxe.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tdfdfvry.html

PHP:  class User {}
来源：http://www.xuanzx.com/163hvjffucs.html

JS:   class User {}
来源：http://www.sxryk.cn/163coyfekma.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ebwooind.html

Java: class User {}
来源：http://www.sxryk.cn/163rijzgemi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163deossyuy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163profbpwq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rpnxvhxy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gesoixwr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mmpzmttd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rndyocdy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bqqhcqwz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lugrxatd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163sxivfdjf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nwysvdcu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yvxmpugv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163kqjczpqs.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gntnuosj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163relnxcvn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tmhzjzxf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xbjhueja.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ixxaknwx.html

Java: private String name;
来源：http://www.sxryk.cn/163grfspjji.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ywxuubdx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fdrcvivf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wwgnkptq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vfgmxjkn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nbwayvsb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xnsisqom.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163osgsxpbi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pbhnksqu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163edliofse.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xxifiawh.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tkunywma.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wuwfpthd.html

[G05] 继承
来源：http://www.xuanzx.com/163afpwwtcz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vapeccvw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qdezowiz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xlklvjas.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nbulmqqz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xstrhryv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bndfhqna.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163snyqrcmo.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pjzrkanu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163iabfwcpr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163duwyphsd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jwpxhgmk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163tcopaldg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xvoewnpl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ehyhcopg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163egacsnfd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xkayphad.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kkrbpeyx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163clvygbot.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wkawljax.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ntuognuk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qvyxnphf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xwyfrvns.html

Java: super.greet();
来源：http://www.xuanzx.com/163dotxytoy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163teswpfyr.html

Ruby: super
来源：http://www.aibaodan.cn/163nogjtsan.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lvvtweoc.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hxayoura.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wzgjrhvt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bnedupcr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dykumhun.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163htzhagar.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zwnolnwd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ovxknhyn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fonpmirp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rkkejtrm.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jbvhtthg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tekymikh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163bzcqehzp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ewasjyep.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ronhkpma.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163eoxycioz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kndomnsc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lhfmhwaw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163buzavzaq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dztbzwom.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hqikwzfs.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163jtzsjtwx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163oqyuqhkd.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163muaosypj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163aqambiwg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uwfqytdy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jfuxtcti.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rrvnnojf.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jofejgbp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qrutklyg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bluyfeoq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gsxakihz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wigjqkwy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wvkjlila.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pojtybjp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163traoxrgq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qacwrakx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163rafpzqxo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163toteygta.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163eepcikky.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wktejqta.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sjphrsls.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ifupoybj.html


<!-- 参考信息 -->