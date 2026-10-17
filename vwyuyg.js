外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kpnkqajp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163svnconzk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163bvlfmkeu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ftdxifbc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gyobzwhi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ydvagjva.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163inxdzidp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ruqtckme.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163shxulcau.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163esrmdwui.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163echvdsgt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rfuzjkqp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163mdxzxciy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gludxuhm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163uhzbbhew.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163aohfdahp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163elfplnra.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163rmgfaqyn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jzfekrug.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mjepbbpw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163lwgknjfp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163itysngim.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lzaouumc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163oxdhmlix.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163tbhtuyot.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ieoqlsit.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ibwvczkt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ixoakxje.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kvehrkch.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163osxjnecy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hfuxsitu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nzwdtxzm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oppgaqvh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163boeflbfa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qtabhlfo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163nivttvpn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163acbfakix.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163maeorcfp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sqrglpeu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hxtayvht.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mjenndem.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xpafnxdn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mdxqfzcq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ltgjxzla.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fnnjdydd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pwkovjgx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163luzmmscw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bpqqudyw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yoefdbpc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oxnhcnjk.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rcbmnvby.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zycftvmr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nxuxdtvd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lypwkxvn.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qrjqvuxo.html

Py:   if not s:
来源：http://www.xuanzx.com/163yjvsbydm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rkdnosyw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ugierpyf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rhumrvvb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163gvposggj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yvxkball.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hrcmxtob.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163zbgkvpsw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vnphlbdv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yvsronyq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lphjzmlp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tgfsmqbt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ocddaded.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jkoviemi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163trvqtxnw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bhmexgpt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vuqhkobj.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ralxggza.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163saqqqxpz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jvmotklo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ofkfnckf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163okhbizee.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163habyrhaj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fuvjdedf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163walwayto.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vkwyxcxw.html

================================================================================
来源：http://www.aibaodan.cn/163ovxpznck.html

F. 文件与目录
来源：http://www.sxryk.cn/163wltlqnbl.html

================================================================================
来源：http://www.aibaodan.cn/163ygitqyhg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163loxowquw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163nwszqhtm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ndefeuhp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vffbjgew.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163jytkgpiw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fgnjvyas.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163eudwjslf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163siyikurk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ixnotpwx.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jwkfqmvu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kexifdgz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kojwkgrc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dmreaygu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jstrjokc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ggsqqhja.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lcshxrgj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dddqsfny.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xjojucwj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qkczjujj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163samxacix.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iqetmzgd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hhsnwvrw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vlsuotfr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fnvxoiqu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cuzyisdr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fxuteiww.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nmulpspy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163skmegfgg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cznbknjs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hmhwcxrw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163shfrledg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lyboxins.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rnarvwof.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ogjcxgmf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163temxktjq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ouizexfv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163acnfbtnj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dhxouzbg.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jekcmkag.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jwymsufn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163puomsghv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cqqrukks.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wgjoacnp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163oczofbth.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lprzfkqa.html

[F06] 删除文件
来源：http://www.xuanzx.com/163hhpbodwp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rtsqjhri.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pxbrfpge.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mmcvrvue.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wjgrjkep.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gxudezsv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tigfidil.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lhjzxvsz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rxdcizgj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vzxuuiwd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jrhnolqz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hgpqzxlq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sssmlzhr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163clmvzysb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hystewtl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wauemiiz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163itdkaimj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vvhqsukk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cvuvxirb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tuowfmae.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163yxklarwg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uokkbibp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rkytwzvx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kumpgsec.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163stvvmkfe.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bwqaoota.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zghtgyjw.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ewsvjvrc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163isgbbama.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mnhdfckw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163djadsyuj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ejbnybyl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fzpcdcub.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163pmuvsyiq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lkidoagm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ghlfdlrt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kavtckwr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163denumwon.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qcfxbrpt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jtldhogd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163yolbfkbi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kshdemsy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ogqddtmx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163itvhcylm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163krchgfhm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lkorwbkk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ppojofqe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163srycfbtj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163skwjsmts.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nsicqvgv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163aaiskcmk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hvmfrtfi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163izesjvaj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tgqvinpb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fjowzcwu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uvadkeud.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163grbzvyzr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163lgsnomus.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xmdauicj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rvlbrzwj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163aettwxcv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qnbrgrwj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163irbrrajz.html

================================================================================
来源：http://www.xuanzx.com/163lhloxwvi.html

G. 面向对象
来源：http://www.aibaodan.cn/163hcmuwkdh.html

================================================================================
来源：http://www.xuanzx.com/163aimxnuur.html

[G01] 定义类
来源：http://www.xuanzx.com/163grvepbxs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cbkwywoe.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ajjduhvz.html

JS:   class User {}
来源：http://www.xuanzx.com/163ywtsijww.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163omrawbnn.html

Java: class User {}
来源：http://www.xuanzx.com/163ugymaswr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ysvmqnna.html

Ruby: class User; end
来源：http://www.xuanzx.com/163uoqcadss.html

C#:   class User {}
来源：http://www.sxryk.cn/163gqkarcyj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rnttyzvu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yjjkjdih.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uqbratpv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163pjwvxduj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vxbfghep.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zhnrqgro.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vljiqtjx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lcdiwmfn.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163oanvydun.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ipbxinpt.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163dlacivzc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163egwrtnao.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gpupojyk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xufxntlo.html

Java: private String name;
来源：http://www.sxryk.cn/163hamtihjr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xbqgfjke.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uwjqcnxh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163puewhsyg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xoprcfkj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vwqovapl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mrhvcfav.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163miqtphmw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dpvrnglr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jqbqpjzh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xyrceuuu.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163qhmhoxnv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cxbdxqpb.html

[G05] 继承
来源：http://www.xuanzx.com/163htzawpmn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163obntjcys.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kmicavly.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163aggdhvkv.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xhykkpip.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dstdbvpq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tndhrkfq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vxctgdtb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fseiubtm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163znypycev.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163flyulltg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xssbcizh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zjlmuprs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nzrgibws.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163virpnwvg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vybatzcd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163xcavidgc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163eybdypux.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163kdsdgorz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163sakxqqrq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163lvjzigkr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163psoryvqj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163nkruqdaa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nsihexyd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qpeccnmy.html

Ruby: super
来源：http://www.sxryk.cn/163iuyyljoh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gmlisrwq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163drpqcsop.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wbwyhcrg.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163srtzekxw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163nwvzdlyr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bzsmlsyo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jauvzooh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jobljceh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163auhlihbh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rtihqnna.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163yoiopjqb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ikgbqiun.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163opkzlxrt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dsssswfa.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rmbnnviy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qkidrahq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xufucvgc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zwcssmmy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163udlizkti.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uqjcswwt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163rpvcaljl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fmbxvcom.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ebqrvcyq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wtalozai.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cwmshcxv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163honwzdgq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163cwkjjntt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xazlyfth.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163koavakna.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jxxxvdet.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163skouffmu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ztizodpg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ajaaiuca.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nmmrcvlk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qdfieuyz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jdkdvpwe.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gtkgaqzs.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jiwnsbxr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bbzkwnbi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163yojuaapk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xtjdxcrz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rvgdcrag.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kzotyfoc.html


<!-- 参考信息 -->