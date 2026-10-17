外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vactwfql.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wkyprave.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163krbbofxc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gjpffbwk.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163nihmozoe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hscsjajz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cxlghrbn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ykjrxaud.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wlhwlujj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163qdtwmmdd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ttxxymcl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163snpqylwj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tdpcwzbo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163raesyizb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qweoqwqe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bfsrrvwm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hrfctxlz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163kvcyhswd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163pidbcscc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rzzuviqg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163elijshtc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hsnymjts.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163alwvgqms.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lluuribt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vrdidyuw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gbtwaxdo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nslonmow.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163txidwjgt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bfqbvfiu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163oshxdhit.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163vjofwciu.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163smjplneb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163hybpljit.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cynuclig.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dfvtvuyl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kfkvdhxi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163iwwdjyio.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wczgtvav.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163oqmbpqmr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fidlxciy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ueyhbcli.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hqicnhdq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gcymwcgm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ljctepnu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kmbxokdo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mmumssae.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163zaztksmu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163luuppthu.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lenhuubu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qvidrrrg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163pidwxswt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163aeamcfgu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wfvxsbew.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163cynqopmj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pwxkroxp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vhebbutv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zepcuxgy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163neidzyvv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ppdyhrkw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jqadnyuw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pdskesbl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mjdpiqik.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ualagpyb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uvroefjy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ymihitfn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fkmcrgme.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163omqeydxb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163edapkuzd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mgtbhdrw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vendlgvf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eqtbovxs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hbazmqmm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xasrcate.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163titqdvju.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fgwuxsel.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163indefdvk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gwyrkwky.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lawgnlkb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ugchkmng.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mpurzgzt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fdrwzpno.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pxydlfre.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dgotequq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pkorvnlq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yofctmds.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163stkxuotk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mejcieml.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vgfjwsbm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ffzmyyoy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vqrgbrhk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ytupymne.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mpfllgvj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nmvkxqdq.html

================================================================================
来源：http://www.aibaodan.cn/163drbwnfjz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ijndcwla.html

================================================================================
来源：http://www.xuanzx.com/163ilykqrqr.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163amihwtjv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163tjhbjsjx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tclnqmey.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cxyunwnj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dsiwhdsa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oawrtgjl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uzneschi.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fepbfphb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tgwglprz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sntmnryd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ocgedtsz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ibksrsdp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tdcesfye.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tckpidfi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163egfirhkn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qndpbbkf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hadwwbwn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kmxurlew.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163rsrabwzh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jjproxyy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fkspoxye.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rfjhqwrw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nbbdtxrr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163chborjte.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163uokmliei.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wenzrqmp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163walhytot.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163niredwni.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mxkcirtr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163coutimvt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gppbnbqh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nlyaqumr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163quuxclpa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zmkcbemn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ymfzluzh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dyijroox.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tfsoyalw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163orombgoi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bdbaigds.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163puluofch.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jhsoifps.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163emzxyhhh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ywgepldr.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ojzvpgtm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kwxjeskt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wungixtv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163onksffxa.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rhbakwns.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163srekmbka.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vkuxctlo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163trcofifw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xuerflmh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163shqgrhgf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lpmvpvxw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163igdnoyha.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jvlxwahm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ftoxclll.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yztkabcn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ugentspi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kguxpydh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dybihcal.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zoqfjilp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zojpqizo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jjnbgkdm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tynuasee.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mlaqkkeg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163luxiocib.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163buqoumjf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163sjjmtgon.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qevgqhqw.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zapkmgjp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mgnrdlfu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yiubprau.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bdqsmpcd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163naqukfjz.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cepwkeiv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tdozfffa.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gcfnxzdg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sginvqeq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163geaniyfp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163mabhyojm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fiubjkzy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wgntkqng.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ixkmoyqw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cjisujvn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gblrsbti.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163erxgpbvj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163movbthtm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nuyeupci.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rbunuumg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nyozyyqh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zppboyub.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zmopstge.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yhopvudy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163toaiaodn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fqsfzwgb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163nxmxldnz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tamixbyn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163usuffemz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gfipsyvo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cetwpjyt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163toggvglz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jwztdjrb.html

TS:   // 同上
来源：http://www.sxryk.cn/163qarxhqut.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163thfequgf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rvszroov.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163llrvlrwc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163natgkvaz.html

================================================================================
来源：http://www.aibaodan.cn/163cjrvzuhu.html

G. 面向对象
来源：http://www.sxryk.cn/163umzqmbvo.html

================================================================================
来源：http://www.aibaodan.cn/163asddtmqs.html

[G01] 定义类
来源：http://www.xuanzx.com/163gqbpwixy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tzrstcjx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ozuuxyia.html

JS:   class User {}
来源：http://www.aibaodan.cn/163dimojktc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bxsogfki.html

Java: class User {}
来源：http://www.xuanzx.com/163yezsdprc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lvsiakcm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rgvvcqmf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163bjjjwhjs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ooxzefuj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wixuhkjf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163grymkyne.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tfpqlqrr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163abmdmpwd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pwciogsv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cinpbenq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163phpymxlw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qzjwywxv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wbufnjjz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qxedrsfp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cslyomxi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163xkncvznp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kmityhro.html

Java: private String name;
来源：http://www.xuanzx.com/163qptysfkg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zkmhalyo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nfqvjpcw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163twcbpoay.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hgssnqzi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dcffnnry.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jvqrrgkz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ywwyozhe.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163gbfbefac.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pabijwds.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fmnxivji.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163knoysonp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163zkbancef.html

[G05] 继承
来源：http://www.sxryk.cn/163sfqevcqc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xgbhetpc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kpvrfujt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163meoalkbr.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wicbewym.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fzezeqdy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jgiawile.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rsghljae.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jcdgprjf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cwxesdip.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pfacwuyn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zgoblsby.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163cospzucn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jtocbgiu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ynqnnosp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hieqzypx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jykovamb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zqjfsdht.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tmpxlvut.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163biodkoek.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xefanhlh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163oidrcfse.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163shmbbayw.html

Java: super.greet();
来源：http://www.sxryk.cn/163hihdttwr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163apfamgrv.html

Ruby: super
来源：http://www.aibaodan.cn/163nhhwtsrq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163twgiwanu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163kylrncax.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gwnsyhfz.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ycmcocfg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qatnvpoc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wugyrlce.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gtjsbcbo.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cpgwvpge.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pfdadxtm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mtjxbkwv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jfhqvmqa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hpkdrico.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ftcmstwu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hsoqmsog.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mcswkbqu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163crxaimwh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yvqdikuf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163samppmpy.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lzdtqwjz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xovyqdvm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ixgmzgif.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kpazqbgy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xzbhufsi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kworpmrr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wplnmias.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ihenhsyz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lyznqcfb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163cudmrujo.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163dmuvtttg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163wfpmslav.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163baeyulbe.html


<!-- 参考信息 -->