外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163uienlwys.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163iosebtpn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hgabayzx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dtdtfdek.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163dqclguki.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wbjwayis.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wbkiahit.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mqoyvium.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dgxfwfnv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163qjlunbka.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163exdcldww.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jsndwmrn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wgdmjwbw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zcompdbs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lcohhrgh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fiwtlmml.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163wiygxape.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163epcqvrzu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jhoegumw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163sakuyqfb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163vnhlqtfb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vsutlaok.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163thlowlvk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mknepwqz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163adntbbzz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163sthnvyzo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fekeqdvw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163alekyocp.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163syhzgghk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sijxlilf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163arvtldbx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hrcllknx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kjfsdokr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163xijrtfdd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vbyghvjr.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kbvnisiz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163khlgpwgc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163klaruwzh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dnmkfpgz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ppfryoqu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163veyxkekl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163epdoeoky.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163pufpioou.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163enqdotqm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gvqoujjs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163cvskmnhb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163pftdtuns.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wmcihalg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hxohswlq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wiwugcgw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tuohemst.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jujauezk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wpsilfsf.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wotuvyvd.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163msuzvehd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lrczdyoo.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vkixlqpr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sdcplmtw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163daoegatw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gxgclwke.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xzldtalq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hkethmyh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pjxglgtq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dhuhukzu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gruyhrdc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163azwozkrt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163aybbhcsa.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163homxsczc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ilwiiube.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dmrfedpn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rjfnoxqn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163medbpcud.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ruukqwsz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wuypwztk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163poefwuwg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163okbjpaim.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nvrydqni.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lncibtcu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163poafdhso.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163aetqefpw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dpjkwiev.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163siqanrit.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163htlwtxun.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vincqebj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hrfolzkl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163srcfzage.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ivkkxskd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lurrmjap.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hzdcrekh.html

================================================================================
来源：http://www.aibaodan.cn/163iztwfxlj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ptrofqwd.html

================================================================================
来源：http://www.xuanzx.com/163yqdqesoo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163uytuvffo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hbigtgbo.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163uyoaupyz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163oexvblbh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163myenohvl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wvddslns.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fulqhpyx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163onkkwlba.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gtrbldvn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cegnxpjp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ekgatzkp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163woqzqcqu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hucvoipe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fansxnsm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cvscpqbg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gbtjiokv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zjbgfobz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163omiwktbs.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qlqggsgo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pqcvxllq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bvyxdpmo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ifmaikvr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wozvewxo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pzlpnvzt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nvcbkwxc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163doatrnqw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zxruphjb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mnfhphjp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bltzoxam.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vnygbgnj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qadfufir.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vkgbvuou.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sqpodoay.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163onkolxpe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163eodzecxk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jfvhbrhv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163dzvyeazn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163supayldz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dvqxcaoa.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bryqkcbc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pkoffcha.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nnmlgllt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163sigbdnen.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zhuexrxp.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163vltctdha.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jfytiypw.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163eyhtaeuq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163keaxscef.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gyjbhrrm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163blsvngwo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yztqpjhy.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fasbstpz.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jcitspqt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163klbzxfsv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yzwjcceu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rcqhhgqz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lpimcyhp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163etvirnkv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163trqfuytp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ynhbksiy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163eocaazfi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qubozoho.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163sqndpgbj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xpaebvmr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ddaxjfdb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cgpptmjh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fqyapdtt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jclejoqt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wwqvkkzm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jnhegbgb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163lyopnmgj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163botjklzc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163svgszqnq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vezfzlov.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zkdpilrd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163yngnzzjv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sdzdxwag.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qlaotcsy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ucdlnpvu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wvesxmmu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163grkewdvm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pehtyxag.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pcauiwxd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163tvgnprfv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163klfpllhr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163heetfygv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163olsayynk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ndxxfptz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lwhdlnzj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ttphfbah.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hgpyyxqr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163odybwlrd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163unavxgtd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sdauigho.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dhetmnvo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163umrkrgms.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163eaiwbbio.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163coqvkark.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gbstuwnp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hxbjdrqf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163idjagxzi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bijnxkyp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dudsxfju.html

TS:   // 同上
来源：http://www.sxryk.cn/163jryeygjd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gsoiadac.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fngbhwgs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dlxhggtr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xvjcukwg.html

================================================================================
来源：http://www.sxryk.cn/163stoywxgx.html

G. 面向对象
来源：http://www.sxryk.cn/163lfeesaug.html

================================================================================
来源：http://www.sxryk.cn/163ycylungb.html

[G01] 定义类
来源：http://www.xuanzx.com/163actlojkw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lnvkykyp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163svqvppoq.html

JS:   class User {}
来源：http://www.xuanzx.com/163cylpktbo.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tkiqyriq.html

Java: class User {}
来源：http://www.xuanzx.com/163lmcuwnhz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163eyrncmyw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163axrfsyuv.html

C#:   class User {}
来源：http://www.sxryk.cn/163wptsscbu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163aqhhajep.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dotwcatj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hdfpkiro.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hliueijx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163tspuadvj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163umliwwbt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fofqcema.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xgvlffen.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yfqswkas.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163esikvcjj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pmhqbclc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kimgbviv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163cpznrgun.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163udxcdyqb.html

Java: private String name;
来源：http://www.sxryk.cn/163oiqsvjib.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kqocjdjw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vbvdigfu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lbdqrtoj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163amjwmqmd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163tgriicqt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qabnfvno.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lxsdimnf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163itnjuank.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ohmyytxn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tnqjrlog.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xgmxjber.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dcdftcbs.html

[G05] 继承
来源：http://www.xuanzx.com/163jhkjhxxd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kvewmiwi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jqhnjfxn.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iuoqummc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fwjxoqhz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163pwjnumev.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rbzcwpxo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163odbmhhcc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ptciqlvg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kskudjvi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163knapfors.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lyqvqszj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hbhppicm.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zxvbxzbh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ssvngusa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gqeiqhgt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qrdbsbxi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eklhucgh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163vljrsvtw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qqfltrfo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mlnlxulo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ydkekscw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bnbhmzio.html

Java: super.greet();
来源：http://www.xuanzx.com/163jsnuizkd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ybkdbsmw.html

Ruby: super
来源：http://www.sxryk.cn/163ppdytxuf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kuzexocp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163emvwdntp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163uavrsojy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vidnsdfz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163joowmioe.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ahlcrmpf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wzaaladm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wbdagbsp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163iogqszvd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rmpomlqx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qqpxtudh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hehdxexx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jlhejnea.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mccfnjjj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ykgcmtzh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ouzcigij.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163szhulvce.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163euruwmho.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163oghpzmch.html

[G10] 访问控制
来源：http://www.sxryk.cn/163newdgben.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qtkjbkif.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163czrnrtxh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ukrbewwx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lpfzzsbo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163hbklbmma.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qrzsboly.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ncilseyr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tddmwpyz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rqorymgy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qfgsckpn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rtmrqlhf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fojapoky.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xfwfbrgh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gfyaaorb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163guospsww.html


<!-- 参考信息 -->