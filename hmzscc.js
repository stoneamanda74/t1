外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163whuwjxci.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tmkhljxe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163iygtrypy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mpomfjbn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163yfqmrcpf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ottfagtc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vvywusvu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163renajlzs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163cuctjybq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yxqgefng.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163yqgdmgoh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163afhrblbt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163enuyfyqg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pdapndwr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ueyshyhd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qvhmwwkg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163hajtafar.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jnkviyzd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hxxgchfu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xxthersd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jatjcoci.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163cdtnvyjb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ahcijqdp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163memorksy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rxfhwywi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163plwctdzd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qebsineg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jaqsrznl.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vzsjcght.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xzytgfaq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fettrioy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163oroxnzxi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uoodroih.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163sgpslyxt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163bwkphqwz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xojmozue.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ixueorrx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nawfnlif.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xgvezbul.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bjscrdht.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163xuoknsgx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hyobnqbu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fbxiizaj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ivrbdowz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uldrplvb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rwlbkwij.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xnuxtruc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163oewnlzyr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jspthgjq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163wkiotwyf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163kvrlvtyz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163koygkpwp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rwodhvev.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nfbnysln.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163idiaziwp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163edvhawja.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hntdawse.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163njpnempg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163nxztduyz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163avptjdat.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lwjvfzhu.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jbpbjurd.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ucfeyncz.html

Py:   if not s:
来源：http://www.sxryk.cn/163yqmxiccp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vbcugdox.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fdfpklnt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163viiidzzh.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163xqctqkgk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163yvktzntt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vztvjwep.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163agvkqeyb.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163knqouhla.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ryudalbi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163clzucuze.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uqrifsua.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yjuvkekl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jhmgdxyr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ywgxfhtc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lmfecdiq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tavwqrqz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fnmjvyuj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tcvtnmqm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hzagkbon.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tduicwxu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ncgrmtby.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jogunplp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163oiqhynvq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163sbozmgvw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ejdjrmzu.html

================================================================================
来源：http://www.sxryk.cn/163basuufek.html

F. 文件与目录
来源：http://www.xuanzx.com/163vqalsytg.html

================================================================================
来源：http://www.aibaodan.cn/163agdoslvo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nqxidgts.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qibqpxgi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dxynbdyn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163stqwupdx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xciiawfv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xfsixuau.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163przupqxq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163dgxvqjgp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163uphojcjz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jhquljnx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zfgajpzn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fvysdvum.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sysekwno.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mvyskbqw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lrdtrmuj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163aoopensr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nsnnpugq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163smievfpx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jogmbhzj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jlygfyza.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qfnbkcsf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nnjkncui.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kbwomiqq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gajzlxkd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qsmsqtwy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fjavfbqq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yxicdrbw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tcmqdzzf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163unsoufqg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163sbcyztym.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163spjldqns.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jpgjvsad.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vuygbtty.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163kwytzama.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jyluewgu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xbwlmpep.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ayggmukg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bytfepwc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163hergfplu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nhzvoebi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163habpvabk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fomntmry.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163dxazprnq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zxmwpidl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gpcpaxzn.html

[F06] 删除文件
来源：http://www.sxryk.cn/163keyhtkxf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163idwyoqaw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163cpikvmur.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fxcghevu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cmkfqqiv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zhbcpwjl.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kmbgacrf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163tdmknowh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jbrlires.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163qnjcmffz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gzwibxrb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163thyrzsqx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rmenjidn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163edevfapk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163oaaeukrg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ggvwwcxo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nkgvujfc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163prtmobuv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rvrlleop.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wjfxyuwi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ixrqqcuj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qgkmqavk.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rdpjgnmq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163eugwlnau.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163riuavoxc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vyfdwdgw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zjoajzny.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nrucsonx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163iocwcbwv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163nayzhdze.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vhdkpenf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bzbwfjda.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xbkvhkuj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hjvykaif.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163npevavpm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163igxeijbb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dsmmbabx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tvhpmdkv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mkfukhrr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jhsdoedl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fjvgvrdl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163uvdwxicp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163siexwiju.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ubaxtvne.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wadzjbmo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vvbbiqqc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rpzwtywz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163iyhpnrbm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ezhomrub.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eiipcimz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ukaixdhc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qqxyickd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vbkjhchi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163klxbyjag.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163brwtdomf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cbvlfayf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xcoqbtwz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uefaerto.html

TS:   // 同上
来源：http://www.sxryk.cn/163djaghjcc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wvqejynh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163szjbuioq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ceenhjhv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163neivqiyo.html

================================================================================
来源：http://www.aibaodan.cn/163xtaltxwk.html

G. 面向对象
来源：http://www.aibaodan.cn/163gyysibbj.html

================================================================================
来源：http://www.xuanzx.com/163aqthaofa.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lephfuei.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ifogyrlp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dbwsdnnd.html

JS:   class User {}
来源：http://www.xuanzx.com/163fjrjjtxq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dxxtrlzq.html

Java: class User {}
来源：http://www.sxryk.cn/163rrqvlzrd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wglorjoq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163tyhuvybc.html

C#:   class User {}
来源：http://www.sxryk.cn/163fcezhpof.html

[G02] 构造函数
来源：http://www.xuanzx.com/163odhmduud.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163lwhssuua.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lgokmlpd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bkbzgzfh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xcgfkjds.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kkhurpsn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nqwftewz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lyktcazk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cuqzneen.html

[G03] 实例属性
来源：http://www.xuanzx.com/163yqcamoni.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rrxxtnpk.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mrwthyfp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wciktfxm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zqstknml.html

Java: private String name;
来源：http://www.sxryk.cn/163yonrisfm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bdydbqla.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ylmvdztt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rtwuwkqq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yqzwthot.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163uoftvati.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ingsbapy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dhrplsgs.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jmnwnqsk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163fzizwxtw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nfrprtfz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163hhkokncj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163heymvvgs.html

[G05] 继承
来源：http://www.aibaodan.cn/163jfdgvplf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ljjftmjm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163sudcpsez.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ipacsodq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163avarreor.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dtheqssu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163giiqlbym.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sdpqeufd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163dwbydxjd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jjhnwjlx.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rzbqycnc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dkqqmrig.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zduoxraa.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163inzluknv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jwmwieaa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163leukdqts.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163totsxvsu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163axwgvmbm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163oomwytdd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163elszpuex.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163hokenryq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163uskvchaf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163tytixdgo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ihenuzoe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lwwcexda.html

Ruby: super
来源：http://www.sxryk.cn/163bcuyjcdw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163roxpuozq.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zwjgvaqr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nkndxbmf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uowrmrkx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gncffrob.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163bamljgcn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nmqerwus.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163smjtnhvt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163jfaoudjh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ziognkjs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163icrwdxhs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163hrtxnknh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163idumdbdy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fkrcyzeb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wotaacuu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163kecdpthv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163religduc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nnhansqp.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163nvxdtnlx.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ljkhgvic.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163bvhrdmns.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163augayion.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163sngadihb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163exwwhkkd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xkyummtm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163edcjgksu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163khazltis.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163odyqcrdi.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gjmebonc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wxoxweab.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163pmdltldl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163zaburrdr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163whnflsyk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qjvnscez.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mijzmqzf.html


<!-- 参考信息 -->