外链999!wailian999！

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sqiljbxv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mnefnaut.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163phhnhseq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qjcxxgor.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nzutlijn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nkggsura.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xogyuewe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163gnbwpvoy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kkkmefzw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jxqjyjfv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zxjktopz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163qmcqfasz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cwfjljdr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163myvxjeqb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163zmbrbvmt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163dngaouxu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qdsrvlyj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kgszttgi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163czpxkacp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ndodkqeg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lixzivyk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163uusbqkfi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hasfkxst.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lenycttu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163bylzdgot.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163gemygirf.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lujudvvm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qeshbtfx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163dlmboine.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163goednvco.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wxpahqow.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163elhyxdye.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hzuiziuo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ockxnfix.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bseujdnc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163cchhepap.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yklemvws.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jicgtcay.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mpnrryrg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ondyqouq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163biyesteg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jstwovqn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hkkxtdhi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ajbztroc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rsnqsfpb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cbrjazva.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mmwybilh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wjctoqpm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ljpotzis.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jkikowwm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163awpvbwon.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kkispiky.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163avosofuo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163khphldnf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163dxlzvxug.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qytesrmp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gccavztl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wgjzmfge.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fxjkvrnf.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163leuqdhke.html

Ruby: s.lines
来源：http://www.sxryk.cn/163nwehgkyz.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163phkkrwqr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mcfyhglz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yfrvekui.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163clkgixyb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yyodaqpg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jieopntk.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ficsofvx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ifqkunso.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vbcmfgcu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tvwrmfof.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vikpwoon.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ucjgdqmq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rknbislx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163txafkgse.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vmwhuyth.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ucfoefpc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163favsvovb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163pciaoprp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zjrbbfjx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163userzwnf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ehacxpum.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dgzalnri.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163swghwhqm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nhxyadjq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ftkvxtts.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163mhnxcywi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lhmyfptq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zusogdlm.html

================================================================================
来源：http://www.xuanzx.com/163gtygbcqn.html

F. 文件与目录
来源：http://www.sxryk.cn/163hhdcobcc.html

================================================================================
来源：http://www.xuanzx.com/163ovmxgnrn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ybarrffl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lumzlbdt.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ibwjcnyx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dvmzslhk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163azwwegwh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vztbjvov.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163icqhjzqx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wbwryzyt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163okgemmgz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163emkdblgh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163adygurfu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fvfddzrt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wmoukhay.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aeayhqoe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qbdnbdyr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gtuwhzwl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163yuprdqjn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fvqlokax.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vyymhxlx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jomfosld.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163eyimbvvm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eslrmfrf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lxztijco.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fnpredly.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pqqqduhb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qezimewy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nbuaiklf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ojisusjb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163nmfglpzp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163iolfcudl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pwhtspec.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163abhpkxkh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xqvviwcg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163sjksspoz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163suctdjej.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nphanede.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163iaopnrel.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ldyvophv.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163phfpjqrb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rkwmoazr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qtmdargn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uvydyygk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ywbwwqwd.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nqofzufn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yfrnfavt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lriermtg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dsvhobpb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kbouffgi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lhqbglaq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jkusmoor.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pvtbyjgp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163unxeloed.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163chvfctzm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zfqapfhu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wopaegjw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qrwzsasu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ahdhsscc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pmewrzwj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iiuzescv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wtydotrl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xhuqzlnt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nvjikdep.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zzlnuicg.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pkslrcbr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lsrkkpjm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tltlskja.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ahrzjnpg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pikouygy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bsztkpve.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163znmfgmoo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163amcivjgj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hwbrbmhb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tlqpymfw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dlsinghh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163izaqzedh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vnyrsmox.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bojkhvqo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xphpdegr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mfpjnwez.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ahysuxot.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rwyqjqui.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163cyyhnven.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qbhgtnog.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zbclbkwm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uxiqquze.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lmbqfbmx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ddaopytt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gcyqjkwq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ugxgphvf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163oohzjxqn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vbymavcg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lnckzdiu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163oqqnoeoa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nxfkcayf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uzrqivuj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xhoqotvd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hkfhdtdq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163maihsplg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hcpsxceq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mgshyjtc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jedxhfdt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vxxhnkap.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163czkxfdku.html

TS:   // 同上
来源：http://www.sxryk.cn/163jxcrtsyg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kjwdgwws.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zkbcgoaw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163cqqjxizc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163lhvenfmr.html

================================================================================
来源：http://www.xuanzx.com/163kiaoqrrj.html

G. 面向对象
来源：http://www.xuanzx.com/163iolrzouu.html

================================================================================
来源：http://www.xuanzx.com/163tfrdbaim.html

[G01] 定义类
来源：http://www.xuanzx.com/163tqlzquzc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wjdqizbc.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rpewylfl.html

JS:   class User {}
来源：http://www.xuanzx.com/163iasaprjv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163yoqfrlia.html

Java: class User {}
来源：http://www.xuanzx.com/163nkvrtgjc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163onuulfmx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163czzthhcg.html

C#:   class User {}
来源：http://www.sxryk.cn/163hycrhayz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gdyuhsft.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ymphkads.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jsaajrir.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tboweheh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ijuhotpi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ojlylqjb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jvrguuhh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jykongkz.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163maurjysw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vwqzvdly.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zoyblmed.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fehkcmcv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hdvgwppq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uxctpyld.html

Java: private String name;
来源：http://www.xuanzx.com/163uwhciqha.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pnfsrzab.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fexezvzl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dgehaela.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163qcdswrkh.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cbcsxpjs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wkadxoje.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fnmapxhk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yylbpxln.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vwhwjuro.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163abmyvxul.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sxxyphgg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dtuwsxst.html

[G05] 继承
来源：http://www.xuanzx.com/163hnaedtpt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wtegilnw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163nddoyyka.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iarhdijn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jxwottor.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dtmcrurb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163omeglzdk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yicrjozh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kazemwuy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ynmdgsyy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ditqrfal.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163liraegnx.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jjcajvjx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jzqdqxcf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tzlsdokl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163svpoqdfo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163alccewqw.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hdsgnkjz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pvmydqlq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163htszkeax.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ydtffuhf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fasepoqe.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yrhfdvxw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bftqzjxi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tbmzckdc.html

Ruby: super
来源：http://www.aibaodan.cn/163bredonvg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qbzmfxnx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163akstgyso.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nwadyivp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ulrryfih.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fgspqhel.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163iwcscgeb.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ovimzyzv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163oukewfzb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163wgyibnlh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mmbqzwve.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163eykqhkho.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vizyqtrv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qgaihciq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hlvluuvv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ilxhtxtl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ddmuaowf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163exyhlvag.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163dmyhusja.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zeoeamzp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zpvgdozp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163gtpttkrr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bzveeyyg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hmingyzc.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hkkpaweq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cltmeepe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fohykjxv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163scoqzsre.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fkqiteig.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sikqljgb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gcobeofm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163havhimch.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hqmlngen.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pazfusrl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qlzhpdmq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rktkuhdl.html


<!-- 参考信息 -->