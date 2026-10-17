外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163xhxaurfv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ypqiggbv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163syfohcwf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163somqulwu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cdlygviy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163padurqtm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zkhqiotq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163iaroalys.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163wzhgiztl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rfdspqdc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ayxwfume.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vqzxnqyj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yjveqheu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lurzxqfr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bpuijyfu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xnzppjfb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mtsouovb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163souwmpgm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ddkqobxx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xgvfdtqt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163cbkezewy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163markutuy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hjovdyop.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163cwtcxmqp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xykrpome.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jfenbsvf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gafpkrzs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163khkzuszc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wmnetszr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163icbjbeui.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163nkvvbbpj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bucsvlji.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cflpmnsr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wenclyaq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163yqirrfxq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lcazhmuf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eqcrvsaj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tbderlut.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163kaeigbzs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lrdpxxhh.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nqzhbwjh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gdfaiule.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mycxctom.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qookhsiw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fuwazpnb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gonhtqfb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163prwmazin.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zejyhtik.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tgzwmkcm.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163fuydlesv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163godrarmd.html

Py:   if not s:
来源：http://www.sxryk.cn/163uhpravqg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mkepattk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mhznbges.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163smesriuv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163laczqpre.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163sxrltxet.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163imospshr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ifdduhnv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163hnsmzvaa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gidedvup.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163iysusjvn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bvposukv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163droezvym.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tnnhvlid.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lkywykrj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wukitqyd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hzgtbrde.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wiujyisk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ujlnenwk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163peshqzbo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hrylstcb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fybdgssf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rpdvohqn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163uetesrtp.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ptrmkykv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163eaqatcjo.html

================================================================================
来源：http://www.aibaodan.cn/163zqqrhmcg.html

F. 文件与目录
来源：http://www.sxryk.cn/163jqudohji.html

================================================================================
来源：http://www.sxryk.cn/163gaydgtkg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kkbkkkzv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dmwxdswu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163uuuteorw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163neawgxvc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lidjyryz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lttmoord.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wyvpwoty.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163drnlayns.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fwmhvswf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wjkxqetr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nkydugfo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ejasvvks.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cwoopnoj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wnnejjrk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163efmovbuw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xmwxxifh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163urbxiyty.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163thiljssx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rxlywsqw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163fjqbwtxi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jpgbcpuc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163alppifvy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fprtieip.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dkybzpcx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163doseuhad.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dogicenc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163osmjohdl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lursfkqa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ubrkmvhz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vjmryyef.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ragazfca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uccepiru.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kandymki.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kouqgnwd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gjdekskg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163messcrnn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zvwnokgv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163efdcpjub.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yosudwhj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mejkkoxk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pgmpfogy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xpdrnjpf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kvukkggs.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163myvkrgdj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163otiayxyk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qpljbjzq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ttfngvez.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jbbrzuqd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gakxhdcp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rxntuxjd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163knajjtob.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pocufnbo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163deqadjyy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lnxmbolq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163khbuurct.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163glpzydon.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zvotzqvp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eykewmff.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gitdoxbv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ijgrhksc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dblwrkxj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bsbkqszh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rgiwbdsn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163czzbajjr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163farwdifn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rowauyhh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jbpdduho.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zbecmvxk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xqtfoaef.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ngftchcx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163occuvfas.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bybyllhh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wdcsixvx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vbvuobmv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ixfzxvdt.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xosbkuqb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zibxwxfk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gjxqazxs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vpxypfba.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ngfdnqdi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163fufmglwg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nzzhkybr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gppltvho.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bmtiwfnz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ckvmrxft.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rphherhs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163deuerlge.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163eqwgdilm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fimlwgnx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zipkrufi.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163swyqioky.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vwoopoux.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ynaltpgi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ewzgbggr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fgttlnfi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163exfbukej.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pafqrjjg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nojsjkju.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dphgguiz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163koqtwcuz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tuirzujc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mtjvqgyb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163roskmixj.html

TS:   // 同上
来源：http://www.xuanzx.com/163hdtnmfpj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rkjcmrzo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xnerfyog.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dxhdkovf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nmtmigbm.html

================================================================================
来源：http://www.xuanzx.com/163zwloveru.html

G. 面向对象
来源：http://www.aibaodan.cn/163kcghhpmu.html

================================================================================
来源：http://www.sxryk.cn/163nyylollp.html

[G01] 定义类
来源：http://www.sxryk.cn/163bmrlrplw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ffagthbw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qmgxwhrz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uttaeltt.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163utyunoeu.html

Java: class User {}
来源：http://www.aibaodan.cn/163bkxxvfab.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xqaitebp.html

Ruby: class User; end
来源：http://www.sxryk.cn/163glbehpyd.html

C#:   class User {}
来源：http://www.sxryk.cn/163jwmervbr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wdurrnrz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zanuzybm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kgutfajx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qpnoebjm.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bnveersp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tyicoeut.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mtvtiasu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kgyuhcts.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163zssmipni.html

[G03] 实例属性
来源：http://www.xuanzx.com/163glwfofff.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163aazqrwxp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tzwbxhgb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163pisiymnh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tkxwjceu.html

Java: private String name;
来源：http://www.xuanzx.com/163sgxmsylp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dfwmhbfm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163buxlijum.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fbjvbatt.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163nrxjxogf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ehmxeznf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hrdhwobl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ssyxeljn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mkuthbvq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163nahiojsp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163pncaygwz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ugmuzsew.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rjehnwvo.html

[G05] 继承
来源：http://www.sxryk.cn/163jgvsjite.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ghgalyiq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xmsxnads.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dpwxnoxs.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vmhawgdo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163qwkyxnbw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xjkshxbm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pnaarjes.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oktwovtn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zoindcmf.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163jozssgkn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iilmrdjt.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163uxuotlza.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163guzisyoc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163thtclmgl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163uqjzgcqf.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gdbmwsdy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tvcswfsp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163aapbxmak.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mjispirl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dqjgcrbu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jdlrzqts.html

TS:   super.greet();
来源：http://www.sxryk.cn/163megadqhi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yvplteyu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bkvjiapd.html

Ruby: super
来源：http://www.xuanzx.com/163chhxnpdv.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bibexwsa.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ytujpdli.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163scrfeand.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ufsdvkkq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hthfpkwu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nhvgctlo.html

Java: static void f() {}
来源：http://www.sxryk.cn/163abjixgxw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aqxixxzi.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fqjwunzq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qhnzsbxj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mlfevisn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163eklswwtm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163kgtrsgpt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163wmbkdaws.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163daiqznry.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hrqnmbci.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163llyavico.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vkqiktiu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nyvptbgq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163jpihlmsv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163onwdmkxj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163awszvisj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gjbfigvl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163fcbbgxnb.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ghzejoov.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qfwipuyp.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uibnnblp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cveehcnb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jotyfxio.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163bzsjmlmx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yambvsip.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163psrhfbhw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bauqzrmq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163oftqtvaj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rcjaryaq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ghkfikfg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kkobugto.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163duixwbtp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xunhwnep.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163trugjvln.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vekylzlr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kgaeewqm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tfuwcgwf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163pkrdnllh.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163sorealqg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qhcivhud.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163sribzhao.html


<!-- 参考信息 -->